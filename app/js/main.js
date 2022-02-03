$(function () {

  $('.top-slider__wrapper').slick({
    prevArrow: '<button class="top-slider__arrow top-slider__arrow--prew" type="button"></button>',
    nextArrow: '<button class="top-slider__arrow top-slider__arrow--next" type="button"></button>',
    infinite: false
  })

  var mixer = mixitup('.top-product__inner');

})