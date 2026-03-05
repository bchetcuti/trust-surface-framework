/* Home hub: render a small docs index from /assets/docs.json
   - CSP friendly (no inline script required)
   - Assumes docs.json shape: { items: [{ path, label, group, tags }] }
*/

(function () {
    const statusEl = document.getElementById("docsStatus");
    const listEl = document.getElementById("docsList");
    if (!statusEl || !listEl) return;
  
    const escapeHtml = (s) =>
      String(s)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
  
    const render = (items) => {
      const top = items.slice(0, 8); // keep it tight on home
      const html = top
        .map((i) => {
          const label = escapeHtml(i.label || i.path || "Untitled");
          const path = i.path || "";
          const docUrl = `/docs?doc=${encodeURIComponent(path)}`;
  
          const tags = Array.isArray(i.tags) ? i.tags.slice(0, 3) : [];
          const group = i.group ? `<span class="tag">${escapeHtml(i.group)}</span>` : "";
          const tagHtml = tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
  
          return `
            <div class="docItem">
              <a href="${docUrl}">${label}</a>
              <div class="docMeta">
                ${group}
                ${tagHtml}
                <span class="tag mono">${escapeHtml(path)}</span>
              </div>
            </div>
          `;
        })
        .join("");
  
      listEl.innerHTML = html || `<div class="small">No docs found in <span class="mono">/assets/docs.json</span>.</div>`;
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
        fail("Could not load docs list.");
      }
    })();
  })();