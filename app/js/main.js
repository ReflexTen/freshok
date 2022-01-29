$(function () {

  $('.header__slider').slick({
    prevArrow: '<button type="button" class="slider-btn slider-btn__left"><svg class="icon-arrow icon-arrow--left"><use xlink:href="images/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slider-btn slider-btn__right"><svg class="icon-arrow icon-arrow--right"><use xlink:href="images/sprite.svg#icon-arrow-right"></use></svg></button>',
    infinite: false
  })

  var mixer = mixitup('.products');

})