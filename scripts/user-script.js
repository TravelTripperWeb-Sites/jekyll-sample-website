$(function() {
  // Habburger slide -----------------------------------------------------------
  var hamburgerMenu = $('.hamburger_menu');
  var hamburgerButton = $('.hamburger_button');

  hamburgerButton.on('click.hamburger', function() {
    hamburgerMenu.slideToggle('400');
  });

  // Sticky header -------------------------------------------------------------
  var header = $('.header');
  var headerBreakpoint = 150;

  function stickyHeader(pagePositionTop, pagePositionLeft) {
    if (header.hasClass('-sticky')) {
      if (pagePositionTop < headerBreakpoint) {
        header.removeClass('-sticky');
      }
    } else {
      if(pagePositionTop > headerBreakpoint) {
        header.addClass('-sticky');
      }
    }

    header.css('left', -pagePositionLeft);
  }

  // Room amenities ------------------------------------------------------------
  var roomAmenitiesButton = $('.room-amenities_button');

  roomAmenitiesButton.on('click', function() {
    var $this = $(this);

    $this.toggleClass('-on');
    $this
      .parent('.room-amenities')
      .find('.room-amenities_content')
      .toggleClass('-show');
  });

  // Back to top ---------------------------------------------------------------
  $('.back-to-top').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

  // Room amenities ------------------------------------------------------------
  $(document).on('click', '.room-amenities_button', function() {
    $(this)
      .siblings('.room-amenities_popup')
      .toggleClass('-show');
  });

  // On Scroll -----------------------------------------------------------------
  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var scrollLeft = $(this).scrollLeft();

    stickyHeader(scrollTop, scrollLeft);
  });
});
