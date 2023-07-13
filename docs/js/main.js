//Swiper:
let swiperPortfolio = new Swiper('.portfolio__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  watchOverflow: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});

let swiperComment = new Swiper('.comment__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Filter
const btns = document.querySelectorAll('.portfolio__btn');
const slides = document.querySelectorAll('.portfolio__slide');

function activeDelete(arr) {
  arr.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
}

function hideDelete(arr) {
  arr.forEach(item => {
    if (item.classList.contains('hide')) {
      item.classList.remove('hide');
    }
  });
}

btns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    activeDelete(btns);
    btn.classList.add('active');

    hideDelete(slides);
    slides.forEach(slide => {
      if (btn.dataset.filter == 'all') {
        hideDelete(slides);
      } else if (slide.dataset.cat !== btn.dataset.filter) {
        slide.classList.add('hide');
      }
    });
    swiperPortfolio.update();
  });
});

//Burger
$(".header__burger").on("click", function () {
  $(this).toggleClass('open');
  if ($(this).hasClass('open')) {
    $('.header__list').addClass('open')
  } else {
    $('.header__list').removeClass('open')
  }
});


$(document).on('click', function (e) {
  if ($(".header__burger").has(e.target).length == 0) {
    $('.header__list').removeClass('open')
    $(".header__burger").removeClass('open');
  }
});