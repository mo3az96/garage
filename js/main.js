$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /************************************ Header ************************************/
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  $("#fixedNavbar ul li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 991) {
      $(".navbar").fadeOut(300);
      $(".overlay").fadeOut(300);
      $(".nav,.menu-btn").removeClass("active");
      $("body").removeClass("overflow");
    }
  });
  $(".menu-btn").on("click", function (e) {
    $(".navbar").fadeToggle(300);
    $(".overlay").fadeToggle(300);
    $(".nav,.menu-btn").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".overlay").on("click", function (e) {
    $(".navbar").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".nav,.menu-btn").removeClass("active");
    $("body").removeClass("overflow");
  });
  /************************************ Services Slider ************************************/
  var services1Swiper = new Swiper(".services-slider.cat1-slider .swiper", {
    a11y: {
      enabled: false,
    },
    pagination: {
      el: ".services-slider.cat1-slider .slider-pagination",
      clickable: true,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var services2Swiper = new Swiper(".services-slider.cat2-slider .swiper", {
    a11y: {
      enabled: false,
    },
    pagination: {
      el: ".services-slider.cat2-slider .slider-pagination",
      clickable: true,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ App Slider ************************************/
  var appSwiper = new Swiper(".app-slider .swiper", {
    a11y: {
      enabled: false,
    },
    grabCursor: true,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2.65,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4.3,
        spaceBetween: 25,
      },
    },

    pagination: {
      el: ".app-slider .slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".app-slider .swiper-btn-next",
      prevEl: ".app-slider .swiper-btn-prev",
    },

    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Fancybox ************************************/
  Fancybox.bind("[data-fancybox]");

  var a = 0;
  $(window).scroll(function () {
    if ($("section").hasClass("statistics-section")) {
      if (
        a == 0 &&
        $(this).scrollTop() >= $(".statistics-section").offset().top - 500
      ) {
        $(".statistic-value span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    }
  });
});
