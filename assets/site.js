/* TrustSurface site shell helpers
   - Mobile navigation toggle (drawer)
   - Smooth scroll helpers
   - No dependencies, CSP-friendly (external script)
*/

(function () {
  const btn = document.getElementById("menuBtn");
  const backdrop = document.getElementById("navBackdrop");

  const open = () => document.body.classList.add("navOpen");
  const close = () => document.body.classList.remove("navOpen");
  const toggle = () => document.body.classList.toggle("navOpen");

  if (btn && backdrop) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      toggle();
    });

    backdrop.addEventListener("click", close);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    // Close nav when a nav item is selected (mobile)
    document.querySelectorAll(".side .navItem, .side .link").forEach((a) => {
      a.addEventListener("click", () => close());
    });
  }

  // Smooth scroll to top (avoid inline onclick under CSP)
  const toTop = document.getElementById("toTop");
  if (toTop) {
    toTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
