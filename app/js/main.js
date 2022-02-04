$(function () {

  $('.top-slider__wrapper').slick({
    prevArrow: '<button class="top-slider__arrow top-slider__arrow--prew" type="button"></button>',
    nextArrow: '<button class="top-slider__arrow top-slider__arrow--next" type="button"></button>',
    infinite: false
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


  // var config = {
  //   controls: {
  //     scope: 'local'
  //   }
  // }

  // var mixer = mixitup('.top-product__inner, config');
  // var mixer = mixitup('.promo-stocks__inner, config');


})