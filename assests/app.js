/* TSF Docs Hub
   - Loads assets/docs.json
   - Renders Markdown from same-origin paths
   - Sanitises HTML (DOMPurify)
   - Builds TOC + deep links
   - Adds Edit on GitHub + Raise Issue actions
*/

(function () {
    const $ = (id) => document.getElementById(id);
  
    const navEl = $("nav");
    const tocEl = $("toc");
    const docEl = $("doc");
    const statusEl = $("status");
    const qEl = $("q");
    const docLabelEl = $("docLabel");
  
    const openRawEl = $("openRaw");
    const editGitHubEl = $("editGitHub");
    const raiseIssueEl = $("raiseIssue");
    const copyLinkEl = $("copyLink");
    const repoLinkEl = $("repoLink");
  
    const DEFAULT_DOC = "FRAMEWORK-MAP.md";
  
    const icons = {
      map: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" stroke="currentColor" stroke-width="1.8"/><path d="M9 3v15M15 6v15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
      board: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 6h14v12H5z" stroke="currentColor" stroke-width="1.8"/><path d="M8 10h8M8 14h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
      alert: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l10 18H2L12 3z" stroke="currentColor" stroke-width="1.8"/><path d="M12 9v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 17h.01" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
      spark: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l1.2 6.2L20 10l-6.8 1.8L12 18l-1.2-6.2L4 10l6.8-1.8L12 2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
      shield: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l8 4v6c0 5-3.4 9-8 8-4.6 1-8-3-8-8V7l8-4z" stroke="currentColor" stroke-width="1.8"/></svg>`,
      layers: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5 9-5Z" stroke="currentColor" stroke-width="1.8"/><path d="M3 12l9 5 9-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 16l9 5 9-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      signals: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M7 8h.01M12 6h.01M17 9h.01M9 15h.01M14 17h.01M18 15h.01" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
      cycle: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M20 4v6h-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      gap: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M13 12h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M11 12h2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
      chart: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18V9M12 18V6M18 18v-8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
      chat: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H7l-3 3V5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
      plus: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
      quote: `<svg class="navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17h4V7H6v6h1v4zm10 0h4V7h-5v6h1v4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`
    };
  
    function getParam(name) {
      const u = new URL(window.location.href);
      return u.searchParams.get(name);
    }
  
    function setParam(name, value) {
      const u = new URL(window.location.href);
      u.searchParams.set(name, value);
      window.history.pushState({}, "", u.toString());
    }
  
    function normaliseDocPath(p) {
      // keep it same-origin and prevent weird traversal
      p = (p || "").trim();
      p = p.replace(/^\/+/, "");            // no leading slash
      p = p.replace(/\.\.(\/|\\)/g, "");    // remove parent traversal
      return p;
    }
  
    function makeGitHubBlob(repo, path) {
      return `${repo}/blob/main/${path}`;
    }
  
    function makeGitHubEdit(repo, path) {
      return `${repo}/edit/main/${path}`;
    }
  
    function makeIssueLink(repo, title, body) {
      const base = `${repo}/issues/new`;
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
  
    function buildTOC(container) {
      tocEl.innerHTML = "";
      const headings = container.querySelectorAll("h1, h2, h3");
      const items = [];
      const used = new Map();
  
      headings.forEach((h) => {
        const level = h.tagName.toLowerCase();
        const text = h.textContent.trim();
        if (!text) return;
  
        let id = h.id || slugify(text);
        // de-dup IDs
        const n = used.get(id) || 0;
        used.set(id, n + 1);
        if (n > 0) id = `${id}-${n + 1}`;
  
        h.id = id;
  
        items.push({ level, text, id });
      });
  
      if (items.length === 0) {
        tocEl.innerHTML = `<div class="small">No headings found.</div>`;
        return;
      }
  
      items.forEach((it) => {
        const a = document.createElement("a");
        a.href = `#${it.id}`;
        a.textContent = it.text;
        a.dataset.id = it.id;
  
        // simple indent by level
        if (it.level === "h2") a.style.marginLeft = "8px";
        if (it.level === "h3") a.style.marginLeft = "16px";
  
        a.addEventListener("click", (e) => {
          e.preventDefault();
          document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState({}, "", `#${it.id}`);
          setActiveTOC(it.id);
        });
  
        tocEl.appendChild(a);
      });
  
      // set active on scroll
      const observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => (a.boundingClientRect.top - b.boundingClientRect.top))[0];
        if (visible) setActiveTOC(visible.target.id);
      }, { rootMargin: "0px 0px -80% 0px", threshold: [0.1] });
  
      headings.forEach(h => observer.observe(h));
    }
  
    function setActiveTOC(id) {
      tocEl.querySelectorAll("a").forEach(a => {
        a.classList.toggle("active", a.dataset.id === id);
      });
    }
  
    function rewriteLinks(docPath, root) {
      const baseDir = docPath.includes("/") ? docPath.slice(0, docPath.lastIndexOf("/") + 1) : "";
  
      root.querySelectorAll("a[href]").forEach((a) => {
        const href = a.getAttribute("href") || "";
        if (!href) return;
  
        // Ignore anchors and absolute URLs
        if (href.startsWith("#")) return;
        if (/^https?:\/\//i.test(href)) return;
        if (href.startsWith("mailto:")) return;
  
        // If it's a markdown file, route through docs
        if (href.endsWith(".md")) {
          const p = normaliseDocPath(baseDir + href);
          a.setAttribute("href", `/docs?doc=${encodeURIComponent(p)}`);
          return;
        }
  
        // If it's relative asset, resolve relative to doc directory
        const resolved = normaliseDocPath(baseDir + href);
        a.setAttribute("href", `/${resolved}`);
      });
    }
  
    async function load() {
      statusEl.textContent = "Loading…";
  
      const manifestRes = await fetch("/assets/docs.json", { cache: "no-store" });
      if (!manifestRes.ok) throw new Error("Failed to load docs manifest.");
      const manifest = await manifestRes.json();
  
      const repo = manifest.repo || "https://github.com/Bchetcuti/trust-surface-framework";
      repoLinkEl.href = repo;
  
      const items = manifest.items || [];
      renderNav(items, repo);
  
      // initial doc
      const docParam = normaliseDocPath(getParam("doc") || DEFAULT_DOC);
      await openDoc(docParam, items, repo);
  
      // filter
      qEl.addEventListener("input", () => {
        const q = qEl.value.trim().toLowerCase();
        renderNav(items.filter(i => (i.label || "").toLowerCase().includes(q) || (i.path || "").toLowerCase().includes(q)), repo, docParam);
      });
  
      // SPA-ish back/forward
      window.addEventListener("popstate", async () => {
        const p = normaliseDocPath(getParam("doc") || DEFAULT_DOC);
        await openDoc(p, items, repo);
      });
  
      // copy link
      copyLinkEl.addEventListener("click", async (e) => {
        e.preventDefault();
        const u = new URL(window.location.href);
        await navigator.clipboard.writeText(u.toString());
        copyLinkEl.textContent = "Copied";
        setTimeout(() => (copyLinkEl.textContent = "Copy link"), 1200);
      });
    }
  
    function renderNav(items, repo, currentDoc) {
      navEl.innerHTML = "";
      items.forEach((it) => {
        const path = normaliseDocPath(it.path);
        const label = it.label || path;
        const icon = icons[it.icon] || icons.shield;
  
        const a = document.createElement("a");
        a.className = "navItem";
        if (currentDoc && path === currentDoc) a.classList.add("active");
        a.href = `/docs?doc=${encodeURIComponent(path)}`;
        a.innerHTML = `${icon}<div><div class="navLabel">${escapeHtml(label)}</div><div class="navPath">${escapeHtml(path)}</div></div>`;
  
        a.addEventListener("click", async (e) => {
          e.preventDefault();
          setParam("doc", path);
          await openDoc(path, items, repo);
          renderNav(items, repo, path);
        });
  
        navEl.appendChild(a);
      });
    }
  
    async function openDoc(docPath, items, repo) {
      docPath = normaliseDocPath(docPath || DEFAULT_DOC);
      setParam("doc", docPath);
  
      // label in crumbs
      const hit = items.find(i => normaliseDocPath(i.path) === docPath);
      docLabelEl.textContent = hit?.label || docPath;
  
      // actions
      openRawEl.href = `/${docPath}`;
      editGitHubEl.href = makeGitHubEdit(repo, docPath);
  
      const issueTitle = `[Clarity] ${docPath}`;
      const issueBody =
  `Doc: ${docPath}
  
  What’s unclear / what should change?
  
  - 
  Suggested improvement (optional):
  
  - 
  `;
      raiseIssueEl.href = makeIssueLink(repo, issueTitle, issueBody);
  
      statusEl.textContent = `Loading ${docPath}…`;
      docEl.innerHTML = "";
  
      const res = await fetch(`/${docPath}`, { cache: "no-store" });
      if (!res.ok) {
        statusEl.textContent = "Not found.";
        docEl.innerHTML =
          `<p class="small">Could not load <span class="mono">${escapeHtml(docPath)}</span>.</p>
           <p class="small">Check the file exists in the repo and is deployed to Pages.</p>`;
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
  
      // rewrite internal links + build toc
      rewriteLinks(docPath, docEl);
      buildTOC(docEl);
  
      // if hash present, scroll
      if (location.hash) {
        const id = location.hash.slice(1);
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
      }
  
      statusEl.textContent = "Loaded";
    }
  
    function escapeHtml(s) {
      return String(s)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }
  
    load().catch((e) => {
      statusEl.textContent = "Error loading docs.";
      docEl.innerHTML = `<p class="small">Error: ${escapeHtml(e.message || String(e))}</p>`;
    });
  })();