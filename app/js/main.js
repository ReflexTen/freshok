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

  let mobmenu = $('.mob-menu');
  let categories = $('.sidebar');
  let productpage = $('.gallery-fullscreen__wrapper');


  $(document).mouseup(function (e) {
    if (!mobmenu.is(e.target) && mobmenu.has(e.target).length === 0 &&
      !categories.is(e.target) && categories.has(e.target).length === 0 &&
      !productpage.is(e.target) && productpage.has(e.target).length === 0
    ) {
      $('.mob-menu').removeClass('mob-menu--active');
      $('.sidebar').removeClass('sidebar--active');
      $('.gallery-fullscreen').fadeOut();
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

  $('.catalog__select, .quantity__input').styler();

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

  //-------------------Product-page------------------------//

  $('.gallery__inner').slick({
    prevArrow: $('.gallery-arrow--prew'),
    nextArrow: $('.gallery-arrow--next'),
    responsive: [{
      breakpoint: 576,
      settings: {
        arrows: false,
      }
    }]
  })

  $('.gallery-fullscreen__inner').slick({
    prevArrow: $('.gallery-arrow--fullscreen-prew'),
    nextArrow: $('.gallery-arrow--fullscreen-next'),
    dots: true,
  })

  $('.gallery__inner').on('click', function () {
    $('.gallery-fullscreen').fadeToggle()
    $('.gallery-fullscreen__inner').slick('setPosition')
    $('body').addClass('lock');
  })

  $('.cross').on('click', function () {
    $('.gallery-fullscreen').fadeOut()
    $('body').removeClass('lock');
  })


  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    readOnly: true,
    precision: 1,
    spacing: "6px",
    "starSvg": '<svg width = "16" height = "16" viewBox = "0 0 16 16">' +
      '<path d="M0.0229731 6.16426C0.0780973 5.99454 0.224753 5.87085 0.401315 5.84523L5.36139 5.12445L7.57966 0.629872C7.6586 0.469872 7.82157 0.368591 7.99997 0.368591C8.17841 0.368591 8.34135 0.469872 8.42032 0.629872L10.6387 5.12445L15.5987 5.84523C15.7752 5.87085 15.9219 5.99454 15.977 6.16422C16.0322 6.33394 15.9862 6.52022 15.8584 6.64475L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.4369 12.9301 15.5418C12.8484 15.6012 12.7517 15.6313 12.6545 15.6313C12.5799 15.6313 12.505 15.6136 12.4365 15.5775L8 13.2451L3.56374 15.5775C3.40577 15.6605 3.21443 15.6467 3.07009 15.5418C2.92574 15.4369 2.8534 15.2592 2.88356 15.0833L3.73096 10.1433L0.141566 6.64472C0.0138168 6.52022 -0.0322151 6.33394 0.0229731 6.16426Z"></path>' +
      "</svg>"
  });

  $(".star-form").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    readOnly: false,
    ratedFill: "#FFB800",
    precision: 1,
    fullStar: true,
    spacing: "6px",
    "starSvg": '<svg width = "16" height = "16" viewBox = "0 0 16 16">' +
      '<path d="M0.0229731 6.16426C0.0780973 5.99454 0.224753 5.87085 0.401315 5.84523L5.36139 5.12445L7.57966 0.629872C7.6586 0.469872 7.82157 0.368591 7.99997 0.368591C8.17841 0.368591 8.34135 0.469872 8.42032 0.629872L10.6387 5.12445L15.5987 5.84523C15.7752 5.87085 15.9219 5.99454 15.977 6.16422C16.0322 6.33394 15.9862 6.52022 15.8584 6.64475L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.4369 12.9301 15.5418C12.8484 15.6012 12.7517 15.6313 12.6545 15.6313C12.5799 15.6313 12.505 15.6136 12.4365 15.5775L8 13.2451L3.56374 15.5775C3.40577 15.6605 3.21443 15.6467 3.07009 15.5418C2.92574 15.4369 2.8534 15.2592 2.88356 15.0833L3.73096 10.1433L0.141566 6.64472C0.0138168 6.52022 -0.0322151 6.33394 0.0229731 6.16426Z"></path>' +
      "</svg>"
  });

  $('.tabs__title').on('click', function (e) {
    e.preventDefault();
    $('.tabs__title').removeClass('tabs__title--active');
    $(this).addClass('tabs__title--active');

    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  })

  $('.product-page__slider-inner').slick({
    slidesToShow: 4,
    prevArrow: $('.gallery-arrow--slider-prew'),
    nextArrow: $('.gallery-arrow--slider-next'),

    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 2,
        }
      }
    ]


  })

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