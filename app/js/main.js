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
      }
    ]
  })

  $('.user-nav__link--search').on('click', function () {
    $('.form-search').toggleClass('form-search--active');
  })

  $('.headder-top__btn').on('click', function () {
    $('.mob-menu').toggleClass('mob-menu--active');
    $('body').toggleClass('lock');
  })

  let mobmenu = $(".mob-menu");
  let categories = $(".sidebar");

  $(document).mouseup(function (e) { 
    if (!mobmenu.is(e.target) && mobmenu.has(e.target).length === 0 &&
      
      !categories.is(e.target) && categories.has(e.target).length === 0
    
    ) {
      $('.mob-menu').removeClass('mob-menu--active');
      $('.sidebar').removeClass('sidebar--active');
      $('body').removeClass('lock');
    }
  });


  $('.btn-closed, .mob-menu__link').on('click', function () {
    $('.sidebar').removeClass('sidebar--active');
    $('.mob-menu').removeClass('mob-menu--active');
    $('body').removeClass('lock');
  })

  //----------------------catalog--------------------------//

  $('.sidebar__btn').on('click', function () {
    $(this).toggleClass('sidebar__btn--active');
    $(this).next('.sidebar__list').slideToggle();

  })

  $('.sidebar__range-slider').ionRangeSlider({
    type: "double",
    onChange(data) {
      $('.sidebar__input--min').val(data.from);
      $('.sidebar__input--max').val(data.to);
    }
  });

  $('.catalog__select').styler();

  $('.catalog__btn').on('click', function () {
    $('.catalog__btn').removeClass('catalog__btn--active');
    $(this).addClass('catalog__btn--active');
  })

  $('.catalog__btn--open-filtr').on('click', function () {
    $('.sidebar').toggleClass('sidebar--active');
    $('body').toggleClass('lock');
  })

  $('.catalog__btn--grid').on('click', function () {
    $('.product-card').addClass('product-card--row');
    $('.catalog__content-inner').addClass('catalog__content-inner--row');
  })

  $('.catalog__btn--list').on('click', function () {
    $('.product-card').removeClass('product-card--row');
    $('.catalog__content-inner').removeClass('catalog__content-inner--row');
  })

  $(window).on('resize', function () {
    if ($(window).width() < 992) {
      $('.product-card').removeClass('product-card--row');
      $('.catalog__content-inner').removeClass('catalog__content-inner--row');
      $('.catalog__btn--list').addClass('catalog__btn--active');
      $('.catalog__btn--grid').removeClass('catalog__btn--active');
    };
  });


  //-------------------------------------------//











  //-------------------------------------------------------//

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

//-------------------------------------------------------//