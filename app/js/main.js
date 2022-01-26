$(function () {

  $('.header__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="icon-arrow icon-arrow--left"><use xlink:href="images/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="icon-arrow icon-arrow--right"><use xlink:href="images/sprite.svg#icon-arrow-right"></use></svg></button>'
  })

  var mixer = mixitup('.products');

})