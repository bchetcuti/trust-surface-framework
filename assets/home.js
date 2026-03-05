/* Home: featured docs from /assets/docs.json
   - shows up to 6 items
   - prioritises known key docs; falls back to first items
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
  
    const prefer = [
      "BOARD-QUESTIONS.md",
      "FRAMEWORK-MAP.md",
      "framework/08-digital-trust-maturity-model.md",
      "framework/05-trust-signal-catalogue.md",
      "CONSULTATION.md",
      "CONTRIBUTING.md",
    ];
  
    const pickFeatured = (items) => {
      const byPath = new Map(items.map(i => [i.path, i]));
      const featured = [];
      for (const p of prefer) {
        if (byPath.has(p)) featured.push(byPath.get(p));
      }
      // Top-up if needed
      if (featured.length < 6) {
        for (const i of items) {
          if (featured.length >= 6) break;
          if (!i?.path) continue;
          if (featured.some(f => f.path === i.path)) continue;
          featured.push(i);
        }
      }
      return featured.slice(0, 6);
    };
  
    const render = (items) => {
      const featured = pickFeatured(items);
  
      const html = featured.map((i) => {
        const label = escapeHtml(i.label || i.path);
        const path = i.path || "";
        const url = `/docs?doc=${encodeURIComponent(path)}`;
  
        const group = i.group ? `<span class="homeTag">${escapeHtml(i.group)}</span>` : "";
        const tags = Array.isArray(i.tags) ? i.tags.slice(0, 2) : [];
        const tagHtml = tags.map(t => `<span class="homeTag">${escapeHtml(t)}</span>`).join("");
  
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
      }).join("");
  
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