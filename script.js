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
    speed: 500,
    fade: true,

    cssEase: "linear",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    prevArrow:
      '<button type="button" class="prev"><img src="./image/riight.svg"/></button>',

    nextArrow:
      '<button type="button" class="next"><img src="./image/right-arrow.svg"/></button>',
  });
});
