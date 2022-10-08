//  @@@@@@@@@@@@@@@@@@ PRELOADER @@@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 2500);
};

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
  cartShop = document.getElementById('nav-cart'),
  cartClose = document.getElementById('cart-close');

cartShop.addEventListener('click', () => {
  cart.classList.add('show-cart');
});

cartClose.addEventListener('click', () => {
  cart.classList.remove('show-cart');
});

// Increment and decreament button for cart section
const plusButtons = document.querySelectorAll('.cart__amount .bx-plus');
const minusButtons = document.querySelectorAll('.cart__amount .bx-minus');
let a = 1;

plusButtons.forEach((plus) => {
  plus.addEventListener('click', () => {
    const cartAmount = plus.parentElement.parentElement.querySelector(
      '.cart__amount-number'
    );
    a++;
    cartAmount.innerText = a;
  });
});

minusButtons.forEach((minus) => {
  minus.addEventListener('click', () => {
    if (a > 1) {
      const cartAmount = minus.parentElement.parentElement.querySelector(
        '.cart__amount-number'
      );
      a--;
      cartAmount.innerText = a;
    }
  });
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

// @@@@@@@@@@@@@@@@@ new swiper @@@@@@@@@@@@@@@@@

let newSwiper = new Swiper('.new__swiper', {
  spaceBetween: 25,
  loop: 'true',

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// @@@@@@@@@@@@@@@@@ testimonial swiper @@@@@@@@@@@@@@@@@

let testimonialSwiper = new Swiper('.testimonial__swiper ', {
  spaceBetween: 30,
  loop: 'true',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//  @@@@@@@@@@@@@@@@@@@ scrollrevealjs.org @@@@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__data,.new__swiper`);
sr.reveal(`.home__img`, { origin: 'bottom' });
sr.reveal(`.story__img,.testimonial__swiper,.newsletter__data`, {
  origin: 'left',
});
sr.reveal(`.story__data,.testimonial__img,.newsletter__form`, {
  origin: 'right',
});
sr.reveal(`.featured__card,.products__card,.footer__content`, {
  interval: 150,
});
