/**
 * Main JavaScript for Personal Portfolio
 * Template Name: Personal - v2.1.0
 * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
 */

!(function ($) {
  "use strict";

  // Smooth scroll for navigation links
  $(document).on("click", ".nav-menu a, .mobile-nav a", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var hash = this.hash;
      var target = $(hash);

      if (target.length) {
        e.preventDefault();

        // Update active class for navigation
        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        // Show target section
        if (hash === "#header") {
          $("#header").removeClass("header-top");
          $("section").removeClass("section-show");
        } else {
          if (!$("#header").hasClass("header-top")) {
            $("#header").addClass("header-top");
            setTimeout(function () {
              $("section").removeClass("section-show");
              $(hash).addClass("section-show");
            }, 350);
          } else {
            $("section").removeClass("section-show");
            $(hash).addClass("section-show");
          }
        }

        // Close mobile nav if open
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }

        return false;
      }
    }
  });

  // Activate/show sections based on hash links on load
  if (window.location.hash) {
    var initialNav = window.location.hash;
    if ($(initialNav).length) {
      $("#header").addClass("header-top");
      $(".nav-menu .active, .mobile-nav .active").removeClass("active");
      $(".nav-menu, .mobile-nav")
        .find('a[href="' + initialNav + '"]')
        .parent("li")
        .addClass("active");
      setTimeout(function () {
        $("section").removeClass("section-show");
        $(initialNav).addClass("section-show");
      }, 350);
    }
  }

  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobileNav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobileNav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function () {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp (for statistics)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Skills section progress bars
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Testimonials carousel (uses Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Portfolio filter and isotope
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });

  // Initialize Venobox (lightbox for portfolio details)
  $(document).ready(function () {
    $(".venobox").venobox({
      spinner: "wave",
    });
  });
})(jQuery);
