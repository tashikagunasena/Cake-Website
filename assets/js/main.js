document.addEventListener("DOMContentLoaded", () => {
  /*=============== SHOW & CLOSE MENU ===============*/
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose && navMenu) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  /*=============== REMOVE MOBILE MENU ===============*/
  const navLinks = document.querySelectorAll(".nav__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu?.classList.remove("show-menu");
    });
  });

  /*=============== HOME SWIPER ===============*/
  if (window.Swiper) {
    new Swiper(".home__swiper", {
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
  }

  /*=============== PRODUCTS SWIPER ===============*/
  let swiperTabs = null;
  let swiperProducts = null;

  if (window.Swiper) {
    swiperTabs = new Swiper(".product__tabs", {
      slidesPerView: "auto",
    });

    swiperProducts = new Swiper(".product__content", {
      loop: true,
      spaceBetween: 32,
      thumbs: {
        swiper: swiperTabs,
      },
    });

    /*=============== NEW SWIPER ===============*/
    new Swiper(".new__swiper", {
      loop: true,
      grabCursor: true,
      centeredSlides: true,
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
  }

  /*=============== CHANGE HEADER STYLES ===============*/
  const header = document.getElementById("header");
  const scrollUpEl = document.getElementById("scroll-up");
  const sections = document.querySelectorAll("section[id]");

  const scrollHeader = () => {
    if (!header) return;
    header.classList.toggle("scroll-header", window.scrollY >= 50);
  };

  const scrollUp = () => {
    if (!scrollUpEl) return;
    scrollUpEl.classList.toggle("show-scroll", window.scrollY >= 350);
  };

  const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const id = section.id;
      const top = section.offsetTop - 50;
      const height = section.offsetHeight;
      const link = document.querySelector(`.nav__menu a[href*="${id}"]`);

      if (!link) return;

      link.classList.toggle(
        "active-link",
        scrollY > top && scrollY <= top + height,
      );
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;

    window.requestAnimationFrame(() => {
      scrollHeader();
      scrollUp();
      scrollActive();
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  /*=============== SCROLL REVEAL ANIMATION ===============*/
  if (window.ScrollReveal) {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "60px",
      duration: 1500,
      delay: 300,
      easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
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
    sr.reveal(
      ".home__leaf-1, .home__leaf-2, .home__sticker-3, .home__sticker-4",
      {
        delay: 2400,
        distance: 0,
        interval: 200,
        scale: 0,
      },
    );

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

    sr.reveal(".product .section__title");
    sr.reveal(".product__button", { delay: 600, interval: 100 });
    sr.reveal(".product__content", { delay: 900 });

    sr.reveal(".new__data .section__title");
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

    sr.reveal(".contact__content .section__title");
    sr.reveal(".contact__info", { delay: 600, interval: 100 });
    sr.reveal(".contact__map", { delay: 900, origin: "top" });
    sr.reveal(".contact__data img", {
      delay: 1500,
      distance: 0,
      interval: 200,
      scale: 0,
    });

    sr.reveal(".footer__container");
    sr.reveal(".footer__leaf-1, .footer__leaf-2", {
      delay: 600,
      interval: 200,
    });
    sr.reveal(".footer__blob", { delay: 600 });
  }
});
