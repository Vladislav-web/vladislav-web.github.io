$(function () {
  
  $('.photo__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img class="img" src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img class="img" src="images/arrow-right.svg" alt=""></button>'
  });
  
  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

});