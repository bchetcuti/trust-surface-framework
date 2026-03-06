/* Home: featured docs from /assets/docs.json
   - shows up to 6 items
   - uses clean, canonical URLs where known
*/

(function () {
  const statusEl = document.getElementById("homeDocsStatus");
  const listEl = document.getElementById("homeDocsList");
  if (!statusEl || !listEl) return;

  const escapeHtml = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const DOC_TO_CANONICAL = {
    "SPECIFICATION.md": "/spec/",
    "WORKED-EXAMPLE-EMAIL-TRUST.md": "/example/",
    "ORIGIN.md": "/origin/",
    "ADOPTION-GUIDE.md": "/adoption/",
    "COMPARATIVE-POSITIONING.md": "/comparative/",
    "CHANGELOG-PUBLIC.md": "/changelog/",
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

  const prefer = [
    "framework/09-glossary.md",
    "CHANGELOG-PUBLIC.md",
    "ADOPTION-GUIDE.md",
    "COMPARATIVE-POSITIONING.md",
    "BOARD-QUESTIONS.md",
    "FRAMEWORK-MAP.md",
    "framework/08-digital-trust-maturity-model.md"
  ];

  const pickFeatured = (items) => {
    const byPath = new Map(items.map((i) => [i.path, i]));
    const featured = [];
    for (const p of prefer) {
      if (byPath.has(p)) featured.push(byPath.get(p));
    }
    // Top-up if needed
    if (featured.length < 6) {
      for (const i of items) {
        if (featured.length >= 6) break;
        if (!i?.path) continue;
        if (featured.some((f) => f.path === i.path)) continue;
        featured.push(i);
      }
    }
    return featured.slice(0, 6);
  };

  const canonicalForDoc = (path) => {
    const clean = DOC_TO_CANONICAL[path];
    if (clean) return clean;
    return `/docs?doc=${encodeURIComponent(path)}`;
  };

  const render = (items) => {
    const featured = pickFeatured(items);

    const html = featured
      .map((i) => {
        const label = escapeHtml(i.label || i.path);
        const path = i.path || "";
        const url = canonicalForDoc(path);

        const group = i.group ? `<span class="homeTag">${escapeHtml(i.group)}</span>` : "";
        const tags = Array.isArray(i.tags) ? i.tags.slice(0, 2) : [];
        const tagHtml = tags.map((t) => `<span class="homeTag">${escapeHtml(t)}</span>`).join("");

        return `
          <div class="homeDocItem">
            <a href="${url}">${label}</a>
            <div class="homeDocMeta">
              ${group}
              ${tagHtml}
              <span class="homeTag homeMono">${escapeHtml(path)}</span>
            </div>
          </div>
        `;
      })
      .join("");

    listEl.innerHTML = html || `<div class="homeSmall">No docs found.</div>`;
    statusEl.textContent = "";
  };

  const fail = (msg) => {
    statusEl.textContent = msg;
    listEl.innerHTML = "";
  };

  (async () => {
    try {
      const res = await fetch("/assets/docs.json", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const items = Array.isArray(data.items) ? data.items : [];
      if (!items.length) return fail("No docs found.");
      render(items);
    } catch (e) {
      fail("Could not load featured docs.");
    }
  })();
})();
