const WHATSAPP_PHONE = "5531999546727";
const WHATSAPP_DISPLAY = "+55 31 99954-6727";

const header = document.querySelector("[data-site-header]");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const backToTop = document.querySelector("[data-back-to-top]");
const filterButtons = document.querySelectorAll("[data-filter]");
const galleryCards = document.querySelectorAll(".gallery-card");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");
const lightboxClose = document.querySelector("[data-lightbox-close]");

function buildWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message || "Olá, tenho interesse na Fazenda Raveneza.");
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
}

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.setAttribute("href", buildWhatsAppUrl(link.dataset.whatsappText));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});

document.querySelectorAll("[data-whatsapp-display]").forEach((element) => {
  element.textContent = WHATSAPP_DISPLAY;
});

function syncHeaderState() {
  const isScrolled = window.scrollY > 24;
  header?.classList.toggle("is-scrolled", isScrolled);
  backToTop?.classList.toggle("is-visible", window.scrollY > 640);
}

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav?.classList.toggle("is-open", !isOpen);
  header?.classList.toggle("is-open", !isOpen);
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
    header?.classList.remove("is-open");
  });
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    galleryCards.forEach((card) => {
      const shouldShow = filter === "todos" || card.dataset.category === filter;
      card.hidden = !shouldShow;
    });
  });
});

galleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;

    lightboxImage.src = card.dataset.full || "";
    lightboxImage.alt = card.querySelector("img")?.alt || "";
    lightboxCaption.textContent = card.dataset.caption || "";

    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    }
  });
});

lightboxClose?.addEventListener("click", () => lightbox?.close());

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
