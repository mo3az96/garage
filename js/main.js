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
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 5,
      depth: 50,
      modifier: 1.4,
      slideShadows: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
        effect: false,
      },
      400: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: "auto",
        spaceBetween: 18,
        effect: "coverflow",
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
});