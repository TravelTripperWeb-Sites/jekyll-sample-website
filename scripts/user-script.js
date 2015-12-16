$(function() {
  var HEADER = $('.header');

  // Habburger slide -----------------------------------------------------------
  var hamburgerMenu = $('.hamburger');
  var hamburgerToggleButtons = '.header_hamburger-button, .hamburger_close';

  $(document).on('click', hamburgerToggleButtons, function() {
    hamburgerMenu.toggleClass('-show');
    HEADER.toggleClass('-hamburger_menu');
    $('body').toggleClass('-hamburger_menu');

    if (HEADER.hasClass('-hamburger_menu')) {
      HEADER.css('left', '-300px');
    } else {
      HEADER.css('left', 0);
    }
  });

  // Habburger menu ------------------------------------------------------------
  var toggleMenuButtonSelector = '.hamburger_toggle-menu'

  $(document).on('click', toggleMenuButtonSelector, function() {
    var secondMenu = $(this).parent().children('.hamburger_menu.-second');

    $(this).toggleClass('-active');

    if (!!secondMenu) {
      secondMenu.slideToggle();
    }
  });

  // Sticky header -------------------------------------------------------------
  var headerBreakpoint = 150;

  function stickyHeader(pagePositionTop, pagePositionLeft) {
    if (HEADER.hasClass('-sticky')) {
      if (pagePositionTop < headerBreakpoint) {
        heHEADERader.removeClass('-sticky');
      }
    } else {
      if(pagePositionTop > headerBreakpoint) {
        HEADER.addClass('-sticky');
      }
    }
    HEADER.css('left', -pagePositionLeft);
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
