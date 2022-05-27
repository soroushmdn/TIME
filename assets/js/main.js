// @@@@@@@@@@@@@@@@@ show menu @@@@@@@@@@@@@@@@@
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// @@@@@@@@@@@@@@@@@ remove menu when click on navlinks @@@@@@@@@@@@@@@@@
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// @@@@@@@@@@@@@@@@@ show cart @@@@@@@@@@@@@@@@@
const cart = document.getElementById('cart'),
  cartShop = document.getElementById('cart-shop'),
  cartClose = document.getElementById('cart-close');

cartShop.addEventListener('click', () => {
  cart.classList.add('show-cart');
});

cartClose.addEventListener('click', () => {
  cart.classList.remove('show-cart');
});

// @@@@@@@@@@@@@@@@@ change header background @@@@@@@@@@@@@@@@@
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  const header = document.getElementById('header');

  // When the scroll is greater than 50 viewport height =>
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
    cartShop.classList.add('white-color');
    navToggle.classList.add('white-color');
  } else {
    header.classList.remove('scroll-header');
    cartShop.classList.remove('white-color');
    navToggle.classList.remove('white-color');
  }
}

// @@@@@@@@@@@@@@@@@ testimonial swiper @@@@@@@@@@@@@@@@@
let testimonialSwiper = new Swiper('.testimonial__swiper ', {
  spaceBetween: 30,
  loop: 'true',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// @@@@@@@@@@@@@@@@@ new swiper @@@@@@@@@@@@@@@@@
let newSwiper = new Swiper('.new__swiper', {
  spaceBetween: 25,
  loop: 'true',

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// @@@@@@@@@@@@@@@@@ show scroll up @@@@@@@@@@@@@@@@@
window.addEventListener('scroll', scrollUp);
function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  // When the scroll is greater than 250 viewport height =>
  if (this.scrollY >= 250) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}
