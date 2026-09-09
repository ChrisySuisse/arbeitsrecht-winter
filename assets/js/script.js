$(document).ready(function () {
  "use strict";

  // Scroll to top
  $("a[href='#top']").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );

    return false;
  });

  // Smooth scroll
  $("a.scroll-to").on("click", function (event) {
    const target = this.hash;

    if (!target || !$(target).length) {
      return;
    }

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 50,
        },
        1000
      );

    event.preventDefault();

    if (window.innerWidth < 992) {
      $(".navbar-toggler").click();
    }
  });

  // AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      disable: "mobile",
    });
  }

  // Match heights
  if ($.fn.matchHeight) {
    $(".service-item").matchHeight({
      byRow: false,
    });

    $(".blog-content").matchHeight({
      byRow: false,
    });
  }

  // Story slider
  if ($.fn.slick && $(".story-slider").length) {
    $(".story-slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    });
  }

  // Quotes slider
  if ($.fn.slick && $(".quotes-slider").length) {
    $(".quotes-slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    });
  }

  // Clients slider
  if ($.fn.slick && $(".clients-slider").length) {
    $(".clients-slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // Video / iframe popups
  if ($.fn.magnificPopup) {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // Image gallery
    $(".gallery").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-with-zoom mfp-img-mobile",

      image: {
        verticalFit: true,

        titleSrc: function (item) {
          const title = item.el.attr("title") || "";
          const source = item.el.attr("data-source");

          if (!source) {
            return title;
          }

          return (
            title +
            ' &middot; <a class="image-source-link" href="' +
            source +
            '" target="_blank" rel="noopener">image source</a>'
          );
        },
      },

      gallery: {
        enabled: true,
      },

      zoom: {
        enabled: true,
        duration: 300,

        opener: function (element) {
          return element.find("img");
        },
      },
    });
  }

  // Mobile navigation dropdowns
  document
    .querySelectorAll(".nav-dropdown-trigger")
    .forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const item = trigger.closest(".has-dropdown");

        if (!item) {
          return;
        }

        const isOpen = item.classList.toggle("is-open");

        trigger.setAttribute(
          "aria-expanded",
          isOpen ? "true" : "false"
        );
      });
    });
});

// Navigation background on scroll
$(window).on("scroll", function () {
  $(".main-nav").toggleClass(
    "nav-bg",
    $(window).scrollTop() > 0
  );
});