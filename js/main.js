$(document).ready(function () {
  $(".testimonial-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,

    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: ".custom-left-arrow",
    nextArrow: ".custom-right-arrow",

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
