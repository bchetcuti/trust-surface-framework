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
  const docGroupEl = $("docGroup");
  const jumpEl = $("jump");
  const relatedEl = $("related");
  const openRawEl = $("openRaw");
  const editGitHubEl = $("editGitHub");
  const raiseIssueEl = $("raiseIssue");
  const copyLinkEl = $("copyLink");
  const repoLinkEl = $("repoLink");
  const canonicalEl = $("canonicalLink");

  const DEFAULT_DOC = "SPECIFICATION.md";
  let glossaryData = { title: "TrustSurface Glossary", version: "v1.0", terms: [] };

  // URL routing: clean paths (no query string) where possible.
  // Important: Cloudflare Pages rewrites keep the visible URL, so we resolve from pathname.
  const PATH_TO_DOC = {
    "/spec": "SPECIFICATION.md",
    "/example": "WORKED-EXAMPLE-EMAIL-TRUST.md",
    "/origin": "ORIGIN.md",
    "/adoption": "ADOPTION-GUIDE.md",
    "/comparative": "COMPARATIVE-POSITIONING.md",
    "/changelog": "CHANGELOG-PUBLIC.md",

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
    history: iconSvg("M12 8v5l3 2", "M12 4a8 8 0 1 0 7.75 6", true),
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
      return [];
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

    return items;
  }



  function glossaryLookup(){
    const entries = Array.isArray(glossaryData?.terms) ? glossaryData.terms : [];
    const map = new Map();
    entries.forEach((entry) => {
      const canonical = entry.term;
      const definition = entry.definition;
      [canonical].concat(entry.aliases || []).forEach((alias) => {
        map.set(String(alias), { canonical, definition });
        map.set(String(alias).toLowerCase(), { canonical, definition });
      });
    });
    return map;
  }

  async function loadGlossary(){
    try {
      const res = await fetch('/data/glossary.json', { cache: 'no-store' });
      if (!res.ok) return;
      glossaryData = await res.json();
    } catch (_) {
      // fall back silently to empty glossary data
    }
  }

  function renderDocMeta(item, parsedMeta){
    const status = item?.status || parsedMeta?.status || 'Informative';
    const updated = item?.updated || parsedMeta?.lastUpdated || '';
    const version = item?.version || parsedMeta?.docVersion || parsedMeta?.frameworkVersion || '';
    const bits = [];
    bits.push(`<span class="metaPill ${status.toLowerCase() === 'normative' ? 'normative' : 'informative'}">Status: ${escapeHtml(status)}</span>`);
    if (version) bits.push(`<span class="metaChip">Version: ${escapeHtml(version)}</span>`);
    if (glossaryData?.version) bits.push(`<span class="metaChip">Glossary ${escapeHtml(glossaryData.version)}</span>`);
    if (updated) bits.push(`<span class="metaChip">Last updated: ${escapeHtml(updated)}</span>`);
    return `<div class="docMeta" aria-label="Document metadata">${bits.join('')}</div>`;
  }

  function escapeRegExp(s){
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function applyGlossaryTooltips(root){
    if (!root) return;

    const lookup = glossaryLookup();
    const terms = Array.from(lookup.keys()).sort((a,b)=>b.length-a.length);
    if (!terms.length) return;

    const pattern = new RegExp(`\b(${terms.map(escapeRegExp).join("|")})\b`, "g");
    const forbidden = new Set(["A","CODE","PRE","H1","H2","H3","H4","H5","H6","SVG","SCRIPT","STYLE"]);

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (forbidden.has(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (p.closest("a, code, pre, .term")) return NodeFilter.FILTER_REJECT;
        pattern.lastIndex = 0;
        if (!pattern.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const txt = node.nodeValue;
      pattern.lastIndex = 0;
      let last = 0;
      const frag = document.createDocumentFragment();
      let m;
      while ((m = pattern.exec(txt)) !== null) {
        const hit = m[0];
        const before = txt.slice(last, m.index);
        if (before) frag.appendChild(document.createTextNode(before));

        const entry = lookup.get(hit) || lookup.get(hit.toLowerCase());
        const span = document.createElement("span");
        span.className = "term";
        span.tabIndex = 0;
        span.setAttribute("role", "definition");
        span.setAttribute("aria-label", `${hit}: ${entry?.definition || ""}`);
        span.dataset.def = entry?.definition || "";
        span.dataset.term = entry?.canonical || hit;
        span.textContent = hit;
        frag.appendChild(span);

        last = m.index + hit.length;
      }
      const after = txt.slice(last);
      if (after) frag.appendChild(document.createTextNode(after));
      node.parentNode.replaceChild(frag, node);
    });
  }

  function decorateCallouts(root){
    if (!root) return;
    root.querySelectorAll("blockquote").forEach((bq) => {
      const t = (bq.textContent || "").trim();
      if (!t) return;

      const lower = t.toLowerCase();

      // Only treat as a callout when it is explicitly labelled.
      if (lower.startsWith("status:") || lower.includes("framework version:") || lower.includes("identifier:")) {
        bq.classList.add("callout", "meta");
        return;
      }

      if (lower.startsWith("normative concept")) {
        bq.classList.add("callout", "normative");
        return;
      }

      if (lower.startsWith("example")) {
        bq.classList.add("callout", "example");
        return;
      }

      if (lower.startsWith("note") || lower.startsWith("guidance")) {
        bq.classList.add("callout", "note");
        return;
      }
    });
  }

  function renderJump(tocItems){
    if (!jumpEl) return;

    const h2s = (tocItems || []).filter(i => i.level === "h2");
    if (h2s.length < 4) { jumpEl.innerHTML = ""; return; }

    const links = h2s.slice(0, 10).map(i => {
      const safe = escapeHtml(i.text);
      return `<a href="#${i.id}" data-id="${i.id}">${safe}</a>`;
    }).join("");

    jumpEl.innerHTML = `<div class="jumpLabel">Jump to</div><div class="jumpLinks">${links}</div>`;

    jumpEl.querySelectorAll("a[data-id]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const id = a.dataset.id;
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState({}, "", `#${id}`);
        setActiveTOC(id);
      });
    });
  }

  function renderRelated(docPath){
    if (!relatedEl) return;

    const base = {
      spec: { href: "/spec/", title: "One-page specification", desc: "Normative summary: definitions, domains, and operating rhythm." },
      glossary: { href: "/framework/glossary/", title: "Glossary v1.0", desc: "Stable vocabulary for surface, signals, posture, and gaps." },
      adoption: { href: "/adoption/", title: "Adoption guidance", desc: "Cadence, roles, evidence artefacts, and operating rhythm." },
      compare: { href: "/comparative/", title: "Comparative positioning", desc: "How TrustSurface complements governance and assurance standards." },
      changelog: { href: "/changelog/", title: "Changelog (Public)", desc: "Normative-only changes to definitions, domains, lifecycle, and structure." },
      example: { href: "/example/", title: "Worked example", desc: "Email integrity example, end-to-end." },
      print: { href: "/spec/print/", title: "Print specification", desc: "A4-friendly page for PDF export." }
    };

    const byDoc = {
      "SPECIFICATION.md": [base.glossary, base.changelog, base.adoption, base.print],
      "framework/09-glossary.md": [base.spec, base.changelog, base.adoption, base.compare],
      "CHANGELOG-PUBLIC.md": [base.spec, base.glossary, base.compare],
      "ADOPTION-GUIDE.md": [base.spec, base.glossary, base.example],
      "COMPARATIVE-POSITIONING.md": [base.spec, base.glossary, base.adoption],
      "WORKED-EXAMPLE-EMAIL-TRUST.md": [base.spec, base.glossary, base.adoption]
    };

    const list = byDoc[docPath] || [base.spec, base.glossary, base.adoption, base.compare, base.changelog];

    const cards = list.map((c) => {
      return `<a class="relatedCard" href="${c.href}"><div class="relatedTitle">${escapeHtml(c.title)}</div><div class="small">${escapeHtml(c.desc)}</div></a>`;
    }).join("");

    relatedEl.innerHTML = `<div class="relatedHead"><div class="relatedH">Related reading</div><a class="tocLink" href="/docs/">Library</a></div><div class="relatedGrid">${cards}</div>`;
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
    if (docGroupEl) docGroupEl.textContent = labelHit?.group || "Documents";

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

    const meta = extractDocMeta(md);
    const manifestItem = items.find((i) => normaliseDocPath(i.path) === docPath) || null;

    // Markdown -> HTML (marked) -> Sanitise (DOMPurify)
    const rawHtml = window.marked.parse(md, { mangle: false, headerIds: false });
    const cleanHtml = window.DOMPurify.sanitize(rawHtml, {
      USE_PROFILES: { html: true },
      ADD_ATTR: ["target", "rel"]
    });

    docEl.innerHTML = renderDocMeta(manifestItem, meta) + cleanHtml;

    rewriteLinks(docPath, docEl);
    const tocItems = buildTOC(docEl) || [];
    renderJump(tocItems);
    decorateCallouts(docEl);
    const firstMeta = docEl.querySelector("blockquote.callout.meta");
    if (firstMeta) firstMeta.remove();
    applyGlossaryTooltips(docEl);
    renderRelated(docPath);

    // Scroll to hash if present
    if (location.hash) {
      const id = location.hash.slice(1);
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
    }

    // Highlight current
    renderNav(items, docPath);

    const bits = [];
    const resolvedStatus = manifestItem?.status || meta.status;
    if (resolvedStatus) bits.push(resolvedStatus);
    if (meta.frameworkVersion) bits.push(`Framework ${meta.frameworkVersion}`);
    else if (meta.docVersion || manifestItem?.version) bits.push(`${(meta.docVersion || manifestItem?.version || '').replace(/^v/i, 'v')}`);
    if (manifestItem?.updated || meta.lastUpdated) bits.push(`Updated ${manifestItem?.updated || meta.lastUpdated}`);
    statusEl.textContent = bits.length ? `Loaded • ${bits.join(" • ")}` : "Loaded";
  }


  function extractDocMeta(md){
    const out = {};

    // Common patterns in repo document headers.
    const ver = md.match(/\bFramework version:\s*(v?[0-9]+(?:\.[0-9]+)*)/i);
    if (ver) out.frameworkVersion = ver[1];

    const v2 = md.match(/\*\*Version:\*\*\s*([Vv]?[0-9]+(?:\.[0-9]+)*(?:\s*\([^\n\)]*\))?)/);
    if (v2) out.docVersion = v2[1].trim();

    const updated = md.match(/Last updated:\s*([0-9]{4}[\-\u2011][0-9]{2}[\-\u2011][0-9]{2})/i);
    if (updated) out.lastUpdated = updated[1];

    const status = md.match(/Status:\s*(Normative|Informative)/i);
    if (status) out.status = status[1][0].toUpperCase() + status[1].slice(1).toLowerCase();

    return out;
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

    await loadGlossary();

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
