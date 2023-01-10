$(document).ready(function () {
  $(".slider_inner").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow:
      '<button type="button" class="prev"><img src="./image/riight.svg"/></button>',

    nextArrow:
      '<button type="button" class="next"><img src="./image/right-arrow.svg"/></button>',
  });
});

$(document).ready(function () {
  $(".slider_animal_inner").slick({
    infinite: true,
    slidesToShow: 2,
    adaptiveHeight: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 3,
    arrows: false,
    swipeToSlide: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
  });
});

$(document).ready(function () {
  $(".slider_inner_zoo").slick({
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    adaptiveHeight: true,
    centerMode: true,
    variableWidth: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      '<button type="button" class="prev"><img src="./image/riight.svg"/></button>',

    nextArrow:
      '<button type="button" class="next"><img src="./image/right-arrow.svg"/></button>',
  });
});

$(function () {
  $(".sliderTestimon").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 5000,
    dots: true,
    speed: 1000,
    arrows: false,
  });
});
