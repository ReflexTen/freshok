$(function () {



  $('.top-slider__wrapper').slick({
    prevArrow: '<button class="top-slider__arrow top-slider__arrow--prew" type="button"><span class="sr-only">Кнопка назад</span></button>',
    nextArrow: '<button class="top-slider__arrow top-slider__arrow--next" type="button"><span class="sr-only">Кнопка вперед</span></button>',
    infinite: false,
    responsive: [{
      breakpoint: 769,
      settings: {
        prevArrow: false,
        nextArrow: false,
        dots: true
      }
    }]

  })

  $('.brands-list__container').slick({
    // infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: false,
    nextArrow: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  },
{
  breakpoint: 577,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
  }
}]
  })

  $('.user-nav__link--search').on('click', function () {
    $('.form-search').toggleClass('form-search--active');
  })

  $('.headder-top__btn').on('click', function () {
    $('.mob-menu').toggleClass('mob-menu--active');
    $('body').toggleClass('lock');
  })

  $('.mob-menu__btn, .mob-menu__link').on('click', function () {
    $('.mob-menu').removeClass('mob-menu--active');
    $('body').removeClass('lock');
  })

//---------------------------------------------------//

  $('.sidebar__title::after').on('click', function () {
    $('.sidebar__list').toggleClass('sidebar__list--active');
  })








 

  var containerEl1 = document.querySelector('[data-ref="mix1"]');
  var containerEl2 = document.querySelector('[data-ref="mix2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  }

  var mixer1 = mixitup(containerEl1, config);
  var mixer1 = mixitup(containerEl2, config);

})


 //  $('.form-search__btn').on('click', function () {
 //    $('.form-search').removeClass('form-search--active');

 //  })

 // $('.user-nav__link--search').on('click', function () {
 //   $('.form-search').fadeToggle(200);
 //   return false;
 // })

 // $('.form-search__btn').on('click', function () {
 //   $('.form-search').fadeOut(200);

 // })
