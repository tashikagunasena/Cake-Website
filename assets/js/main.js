/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== HOME SWIPER ===============*/

const swiperHome = new Swiper(".home__swiper", {
  loop: true,
  grabCursor: true,
  speed: 800,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-120%", 0, -500],
      rotate: [0, 0, -45],
      opacity: 0,
    },
    next: {
      translate: ["120%", 0, -500],
      rotate: [0, 0, 45],
      opacity: 0,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== PRODUCTS SWIPER ===============*/
const swiperTabs = new Swiper(".product__tabs", {
  slidesPerView: "auto",
});

const swiperProducts = new Swiper(".product__content", {
  loop: true,
  spaceBetween: 32,
  thumbs: {
    swiper: swiperTabs,
  },
});

/*=============== NEW SWIPER ===============*/
const swiperNew = new Swiper(".new__swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: "auto",
  slidesPerView: "auto",
  speed: 600,
  effect: "creative",
  creativeEffect: {
    limitProgress: 2,
    prev: {
      translate: ["-32%", 0, 0],
      scale: 0.58,
    },
    next: {
      translate: ["32%", 0, 0],
      scale: 0.58,
    },
  },

  navigation: {
    nextEl: ".new .swiper-button-next",
    prevEl: ".new .swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

// Link the ID of each section (section id="home") to each link (a href="#home")
// and activate the link with the class .active-link
const scrollActive = () => {
  // We get the position by scrolling down
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id, // id of each section
      top = section.offsetTop - 50, // Distance from the top edge
      height = section.offsetHeight, // Element height
      link = document.querySelector(".nav__menu a[href*=" + id + "]"); // id nav link

    if (!link) return;

    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height,
    );
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1500,
  delay: 300,
  easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  // reset: true, // Animations repeat
});

sr.reveal(".home__title", { origin: "top" });
sr.reveal(".home__description", { delay: 600, origin: "top" });
sr.reveal(".home__data .button", {
  delay: 900,
  distance: 0,
  scale: 0,
  origin: "top",
});
sr.reveal(".home__base", { delay: 900 });
sr.reveal(".home__swiper", { delay: 1200, origin: "top" });
sr.reveal(".home__blob", { delay: 1500, scale: 0 });
sr.reveal(".home__data img", {
  delay: 2100,
  distance: 0,
  interval: 200,
  scale: 0,
});
sr.reveal(".home__leaf-1, .home__leaf-2, .home__sticker-3, .home__sticker-4", {
  delay: 2400,
  distance: 0,
  interval: 200,
  scale: 0,
});

sr.reveal(".about__cupcake-1, .about__cupcake-2", {
  rotate: { x: 0, y: 0, z: 120 },
});
sr.reveal(".about__data .section__title", { delay: 900 });
sr.reveal(".about__description", { delay: 1200 });
sr.reveal(".about__data .button", { delay: 1500, distance: 0, scale: 0 });
sr.reveal(".about__blob", { delay: 1800, origin: "right" });
sr.reveal(".about__img", { delay: 2100, origin: "left" });
sr.reveal(".about__leaf, .about__cupcake-3", {
  delay: 2700,
  distance: 0,
  interval: 200,
  scale: 0,
});
sr.reveal(".about__data img", {
  delay: 3000,
  distance: 0,
  interval: 200,
  scale: 0,
});

sr.reveal(".product .section__title", {});
sr.reveal(".product__button", { delay: 600, interval: 100 });
sr.reveal(".product__content", { delay: 900 });

sr.reveal(".new__data .section__title", {});
sr.reveal(".new__description", { delay: 600 });
sr.reveal(".new__data .button", { delay: 900 });
sr.reveal(".new__swiper", { delay: 1200 });
sr.reveal(".new__leaf-1, .new__leaf-2, .new__leaf-3", {
  delay: 1500,
  distance: 0,
  interval: 200,
  scale: 0,
});
sr.reveal(".new__titles", { delay: 1800, scale: 0 });

sr.reveal(".contact__content .section__title", {});
sr.reveal(".contact__info", { delay: 600, interval: 100 });
sr.reveal(".contact__map", { delay: 900, origin: "top" });
sr.reveal(".contact__data img", {
  delay: 1500,
  distance: 0,
  interval: 200,
  scale: 0,
});

sr.reveal(".footer__container", {});
sr.reveal(".footer__leaf-1, .footer__leaf-2", { delay: 600, interval: 200 });
sr.reveal(".footer__blob", { delay: 600 });
