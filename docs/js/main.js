//Swiper:
new Swiper('.portfolio__swiper', {
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  watchOverflow: true,
});

new Swiper('.comment__swiper', {
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
const filters = document.querySelectorAll('button[data-filter]');

for (let filter of filters) {
  filter.addEventListener('click', function (e) {
    e.preventDefault();

    let catId = filter.getAttribute('data-filter');
    let workCat = document.querySelectorAll('.portfolio__slide');

    workCat.forEach(function (c) {

      if (catId === 'all') {
        c.classList.remove('hide');
      } else {
        if (c.getAttribute('data-cat') !== catId) {
          c.classList.add('hide');
        } else {
          c.classList.remove('hide');
        }
      }

    })

  });
}

//burger
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