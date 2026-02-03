// Footer year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Auto-close mobile nav when a link is clicked
if (navMenu && navToggle) {
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      // only matters on mobile where nav can be open/closed
      if (navMenu.classList.contains("is-open")) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// FAQ accordion (uses [hidden] for clean HTML)
document.querySelectorAll(".faq-item").forEach((item) => {
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");
  if (!q || !a) return;

  q.addEventListener("click", () => {
    const willOpen = a.hasAttribute("hidden");
    if (willOpen) a.removeAttribute("hidden");
    else a.setAttribute("hidden", "");
    q.setAttribute("aria-expanded", String(willOpen));
  });
});