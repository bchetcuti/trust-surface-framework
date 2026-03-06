/* TrustSurface docs app
   - Loads /assets/docs.json
   - Renders Markdown from same-origin paths
   - Sanitises HTML (DOMPurify)
   - Builds TOC + deep links
   - Uses clean, canonical URLs (path-based) where available
*/

(function () {
  const $ = (id) => document.getElementById(id);

  const navEl = $("nav");
  const tocNavEl = $("tocNav");
  const docEl = $("doc");
  const statusEl = $("status");
  const qEl = $("q");
  const docLabelEl = $("docLabel");
  const openRawEl = $("openRaw");
  const editGitHubEl = $("editGitHub");
  const raiseIssueEl = $("raiseIssue");
  const copyLinkEl = $("copyLink");
  const repoLinkEl = $("repoLink");
  const canonicalEl = $("canonicalLink");

  const DEFAULT_DOC = "SPECIFICATION.md";

  // URL routing: clean paths (no query string) where possible.
  // Important: Cloudflare Pages rewrites keep the visible URL, so we resolve from pathname.
  const PATH_TO_DOC = {
    "/spec": "SPECIFICATION.md",
    "/example": "WORKED-EXAMPLE-EMAIL-TRUST.md",
    "/origin": "ORIGIN.md",
    "/adoption": "ADOPTION-GUIDE.md",
    "/comparative": "COMPARATIVE-POSITIONING.md",

    "/framework-map": "FRAMEWORK-MAP.md",
    "/board-questions": "BOARD-QUESTIONS.md",
    "/consultation": "CONSULTATION.md",
    "/citation": "CITATION.md",
    "/licence": "LICENSE.md",
    "/contributing": "CONTRIBUTING.md",

    // Canonical framework pages
    "/framework/problem": "framework/01-digital-trust-problem.md",
    "/framework/principles": "framework/02-trust-principles.md",
    "/framework/definition": "framework/03-trust-surface-definition.md",
    "/framework/domains": "framework/04-trust-surface-map.md",
    "/framework/signals": "framework/05-trust-signal-catalogue.md",
    "/framework/lifecycle": "framework/06-trust-surface-lifecycle.md",
    "/framework/gap": "framework/07-trust-signal-gap.md",
    "/framework/maturity": "framework/08-digital-trust-maturity-model.md",

    "/framework/glossary": "framework/09-glossary.md",

    // Legacy convenience aliases
    "/maturity-model": "framework/08-digital-trust-maturity-model.md",
    "/trust-signal-catalogue": "framework/05-trust-signal-catalogue.md"
  };

  const DOC_TO_CANONICAL = {
    "SPECIFICATION.md": "/spec/",
    "WORKED-EXAMPLE-EMAIL-TRUST.md": "/example/",
    "ORIGIN.md": "/origin/",

    "ADOPTION-GUIDE.md": "/adoption/",
    "COMPARATIVE-POSITIONING.md": "/comparative/",

    "FRAMEWORK-MAP.md": "/framework-map/",
    "BOARD-QUESTIONS.md": "/board-questions/",
    "CONSULTATION.md": "/consultation/",
    "CITATION.md": "/citation/",
    "LICENSE.md": "/licence/",
    "CONTRIBUTING.md": "/contributing/",

    "framework/01-digital-trust-problem.md": "/framework/problem/",
    "framework/02-trust-principles.md": "/framework/principles/",
    "framework/03-trust-surface-definition.md": "/framework/definition/",
    "framework/04-trust-surface-map.md": "/framework/domains/",
    "framework/05-trust-signal-catalogue.md": "/framework/signals/",
    "framework/06-trust-surface-lifecycle.md": "/framework/lifecycle/",
    "framework/07-trust-signal-gap.md": "/framework/gap/",
    "framework/08-digital-trust-maturity-model.md": "/framework/maturity/",
    "framework/09-glossary.md": "/framework/glossary/"
  };

  const icons = {
    doc: iconSvg("M7 3h7l3 3v15H7V3z", "M14 3v4h4"),
    map: iconSvg("M4 6l6-2 6 2 4-2v14l-4 2-6-2-6 2V6z", "M10 4v14M16 6v14"),
    example: iconSvg("M7 7h10M7 11h10M7 15h6"),
    board: iconSvg("M5 5h14v14H5V5z", "M8 9h8M8 12h6M8 15h7"),
    alert: iconSvg("M12 3l10 18H2L12 3z", "M12 9v4M12 17h.01"),
    spark: iconSvg("M12 2l1.5 5L19 9l-5.5 2L12 16l-1.5-5L5 9l5.5-2L12 2z"),
    shield: iconSvg("M12 3l8 4v6c0 5-3.4 9-8 8-4.6 1-8-3-8-8V7l8-4z"),
    layers: iconSvg("M12 4l9 5-9 5-9-5 9-5z", "M3 14l9 5 9-5"),
    signals: iconSvg("M5 15c1.5-4 4-6 7-6s5.5 2 7 6", "M7 15c1-2.5 2.8-4 5-4s4 1.5 5 4"),
    cycle: iconSvg("M4 12a8 8 0 0 1 14-5", "M18 12a8 8 0 0 1-14 5", true),
    gap: iconSvg("M4 8h7M13 8h7M4 16h10M16 16h4"),
    chart: iconSvg("M5 19V5M5 19h14", "M8 15v-4M12 15v-7M16 15v-2"),

    quote: iconSvg("M7 7h6v6H7V7z", "M11 11h6v6h-6v-6"),
    book: iconSvg("M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 0-2 2V4z", "M8 20V4"),
    guide: iconSvg("M6 4h12v16H6V4z", "M9 8h6M9 12h6M9 16h4"),
    compare: iconSvg("M8 5v14", "M16 19V5"),
    chat: iconSvg("M4 5h16v10H7l-3 3V5z"),
    plus: iconSvg("M12 5v14", "M5 12h14")
  };

  function iconSvg(path1, path2, hasArrows) {
    const extra = hasArrows
      ? `<path d="M18 2v5h-5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
      : "";

    return `
      <svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="${path1}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        ${path2 ? `<path d="${path2}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>` : ""}
        ${extra}
      </svg>`;
  }

  function normalisePathname(p) {
    // Normalise for mapping (strip trailing slash except root)
    if (!p) return "/";
    if (p.length > 1 && p.endsWith("/")) return p.slice(0, -1);
    return p;
  }

  function normaliseDocPath(p) {
    p = (p || "").trim();
    p = p.replace(/^\/+/, "");
    p = p.replace(/\.\.(\/|\\)/g, "");
    return p;
  }

  function getDocFromUrl() {
    const u = new URL(window.location.href);
    const q = u.searchParams.get("doc");
    if (q) return normaliseDocPath(q);

    const p = normalisePathname(window.location.pathname);
    if (PATH_TO_DOC[p]) return PATH_TO_DOC[p];

    // If you are at /docs or /docs.html, show default
    if (p === "/docs" || p === "/docs.html") return DEFAULT_DOC;

    return DEFAULT_DOC;
  }

  function canonicalForDoc(docPath) {
    const clean = DOC_TO_CANONICAL[docPath];
    if (clean) return clean;
    return `/docs?doc=${encodeURIComponent(docPath)}`;
  }

  function setCanonical(docPath, siteOrigin) {
    if (!canonicalEl) return;
    canonicalEl.href = siteOrigin.replace(/\/$/, "") + canonicalForDoc(docPath);
  }

  function makeGitHubEdit(repo, path) {
    return `${repo.replace(/\/$/, "")}/edit/main/${path}`;
  }

  function makeIssueLink(repo, title, body) {
    const base = `${repo.replace(/\/$/, "")}/issues/new`;
    const u = new URL(base);
    u.searchParams.set("title", title);
    u.searchParams.set("body", body);
    return u.toString();
  }

  function slugify(s) {
    return s
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function buildTOC(container) {
    if (!tocNavEl) return;

    tocNavEl.innerHTML = "";

    const headings = container.querySelectorAll("h1, h2, h3");
    const items = [];
    const used = new Map();

    headings.forEach((h) => {
      const level = h.tagName.toLowerCase();
      const text = h.textContent.trim();
      if (!text) return;

      let id = h.id || slugify(text);
      const n = used.get(id) || 0;
      used.set(id, n + 1);
      if (n > 0) id = `${id}-${n + 1}`;
      h.id = id;

      items.push({ level, text, id });
    });

    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "small";
      empty.textContent = "No headings.";
      tocNavEl.appendChild(empty);
      return;
    }

    items.forEach((it) => {
      const a = document.createElement("a");
      a.href = `#${it.id}`;
      a.textContent = it.text;
      a.dataset.id = it.id;

      if (it.level === "h2") a.style.marginLeft = "8px";
      if (it.level === "h3") a.style.marginLeft = "16px";

      a.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState({}, "", `#${it.id}`);
        setActiveTOC(it.id);
      });

      tocNavEl.appendChild(a);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveTOC(visible.target.id);
      },
      { rootMargin: "0px 0px -80% 0px", threshold: [0.1] }
    );

    headings.forEach((h) => observer.observe(h));
  }

  function setActiveTOC(id) {
    if (!tocNavEl) return;
    tocNavEl.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.dataset.id === id));
  }

  function rewriteLinks(docPath, root) {
    const baseDir = docPath.includes("/") ? docPath.slice(0, docPath.lastIndexOf("/") + 1) : "";

    root.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (!href) return;

      if (href.startsWith("#")) return;
      if (/^https?:\/\//i.test(href)) return;
      if (href.startsWith("mailto:")) return;

      if (href.endsWith(".md")) {
        const p = normaliseDocPath(baseDir + href);
        const url = canonicalForDoc(p);
        a.setAttribute("href", url);
        return;
      }

      const resolved = normaliseDocPath(baseDir + href);
      a.setAttribute("href", `/${resolved}`);
    });
  }

  function groupItems(items) {
    const out = new Map();
    items.forEach((it) => {
      const g = it.group || "Documents";
      if (!out.has(g)) out.set(g, []);
      out.get(g).push(it);
    });

    // Stable order (Start here, Core framework, Governance prompts, Adoption)
    const preferred = ["Start here", "Core framework", "Guidance", "Governance prompts", "Contribute", "Documents"];
    const ordered = [];

    preferred.forEach((g) => {
      if (out.has(g)) ordered.push([g, out.get(g)]);
      out.delete(g);
    });

    Array.from(out.keys()).sort().forEach((g) => ordered.push([g, out.get(g)]));

    ordered.forEach(([_, arr]) => arr.sort((a, b) => (a.label || "").localeCompare(b.label || "")));

    return ordered;
  }

  function renderNav(items, currentDoc) {
    navEl.innerHTML = "";

    const groups = groupItems(items);

    groups.forEach(([groupName, groupItems]) => {
      const h = document.createElement("div");
      h.className = "navGroupTitle";
      h.textContent = groupName;
      navEl.appendChild(h);

      groupItems.forEach((it) => {
        const path = normaliseDocPath(it.path);
        const label = it.label || path;
        const icon = icons[it.icon] || icons.doc;

        const a = document.createElement("a");
        a.className = "navItem";
        if (currentDoc && path === currentDoc) a.classList.add("active");
        a.href = canonicalForDoc(path);

        const tags = Array.isArray(it.tags) ? it.tags.slice(0, 2) : [];
        const tagHtml = tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");

        a.innerHTML = `${icon}<span class="navText"><span class="navLabel">${escapeHtml(
          label
        )}</span><span class="navMeta">${tagHtml}<span class="navPath">${escapeHtml(path)}</span></span></span>`;

        a.addEventListener("click", async (e) => {
          e.preventDefault();
          await navigateToDoc(path, items);
        });

        navEl.appendChild(a);
      });
    });
  }

  async function openDoc(docPath, items, repo, siteOrigin) {
    docPath = normaliseDocPath(docPath || DEFAULT_DOC);

    const labelHit = items.find((i) => normaliseDocPath(i.path) === docPath);
    docLabelEl.textContent = labelHit?.label || docPath;

    // Actions
    openRawEl.href = `/${docPath}`;
    editGitHubEl.href = makeGitHubEdit(repo, docPath);

    const issueTitle = `[Clarity] ${docPath}`;
    const issueBody = `Doc: ${docPath}\n\nWhat’s unclear / what should change?\n\n- Suggested improvement (optional):\n- `;
    raiseIssueEl.href = makeIssueLink(repo, issueTitle, issueBody);

    setCanonical(docPath, siteOrigin);

    statusEl.textContent = `Loading ${docPath}…`;
    docEl.innerHTML = "";

    const res = await fetch(`/${docPath}`, { cache: "no-store" });
    if (!res.ok) {
      statusEl.textContent = "Not found.";
      docEl.innerHTML = `<div class="markdown"><p>Could not load <code>${escapeHtml(
        docPath
      )}</code>. Ensure the file exists in the repo and is deployed.</p></div>`;
      return;
    }

    const md = await res.text();

    // Markdown -> HTML (marked) -> Sanitise (DOMPurify)
    const rawHtml = window.marked.parse(md, { mangle: false, headerIds: false });
    const cleanHtml = window.DOMPurify.sanitize(rawHtml, {
      USE_PROFILES: { html: true },
      ADD_ATTR: ["target", "rel"]
    });

    docEl.innerHTML = cleanHtml;

    rewriteLinks(docPath, docEl);
    buildTOC(docEl);

    // Scroll to hash if present
    if (location.hash) {
      const id = location.hash.slice(1);
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
    }

    // Highlight current
    renderNav(items, docPath);

    statusEl.textContent = "Loaded";
  }

  async function navigateToDoc(docPath, items) {
    const url = canonicalForDoc(docPath);
    history.pushState({}, "", url);

    // If canonical is /docs?doc=... we need to preserve the query param for reloads.
    // For clean paths, reload resolution happens via PATH_TO_DOC.
    await openDoc(docPath, items, state.repo, state.site);
  }

  const state = {
    repo: "https://github.com/Bchetcuti/trust-surface-framework",
    site: "https://trustsurface.org"
  };

  async function load() {
    statusEl.textContent = "Loading…";

    const manifestRes = await fetch("/assets/docs.json", { cache: "no-store" });
    if (!manifestRes.ok) throw new Error("Failed to load docs manifest.");

    const manifest = await manifestRes.json();
    const items = Array.isArray(manifest.items) ? manifest.items : [];

    state.repo = manifest.repo || state.repo;
    state.site = manifest.site || state.site;

    repoLinkEl.href = state.repo;

    const initialDoc = getDocFromUrl();
    renderNav(items, initialDoc);
    await openDoc(initialDoc, items, state.repo, state.site);

    if (qEl) {
      qEl.addEventListener("input", () => {
        const q = qEl.value.trim().toLowerCase();
        const filtered = items.filter((i) => {
          const label = (i.label || "").toLowerCase();
          const path = (i.path || "").toLowerCase();
          const group = (i.group || "").toLowerCase();
          return label.includes(q) || path.includes(q) || group.includes(q);
        });
        renderNav(filtered, getDocFromUrl());
      });
    }

    window.addEventListener("popstate", async () => {
      const p = getDocFromUrl();
      await openDoc(p, items, state.repo, state.site);
    });

    if (copyLinkEl) {
      copyLinkEl.addEventListener("click", async (e) => {
        e.preventDefault();
        await navigator.clipboard.writeText(window.location.href);
        copyLinkEl.textContent = "Copied";
        setTimeout(() => (copyLinkEl.textContent = "Copy link"), 1200);
      });
    }
  }

  load().catch((e) => {
    statusEl.textContent = "Error loading docs.";
    docEl.innerHTML = `<div class="markdown"><p>Error: ${escapeHtml(e.message || String(e))}</p></div>`;
  });
})();
