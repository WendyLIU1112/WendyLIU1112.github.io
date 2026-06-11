const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", () => {
  navLinks.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
});

const carousel = document.querySelector("[data-carousel]");

if (carousel) {
  const cards = [...carousel.querySelectorAll(".moment-card")];
  const previous = carousel.querySelector("[data-previous]");
  const next = carousel.querySelector("[data-next]");
  let activeIndex = 0;
  let timer;

  const render = () => {
    cards.forEach((card, index) => {
      let offset = index - activeIndex;

      if (offset > cards.length / 2) offset -= cards.length;
      if (offset < -cards.length / 2) offset += cards.length;

      card.style.setProperty("--offset", offset);
      card.style.setProperty("--distance", Math.abs(offset));
      card.hidden = Math.abs(offset) > 2;
      card.setAttribute("aria-hidden", String(offset !== 0));
    });
  };

  const move = (direction) => {
    activeIndex = (activeIndex + direction + cards.length) % cards.length;
    render();
  };

  const start = () => {
    clearInterval(timer);
    timer = setInterval(() => move(1), 3600);
  };

  previous?.addEventListener("click", () => {
    move(-1);
    start();
  });

  next?.addEventListener("click", () => {
    move(1);
    start();
  });

  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", () => clearInterval(timer));
  carousel.addEventListener("focusout", start);

  render();

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    start();
  }
}
