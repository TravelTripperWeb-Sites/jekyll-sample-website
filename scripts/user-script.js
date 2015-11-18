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

  // On Scroll -----------------------------------------------------------------
  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var scrollLeft = $(this).scrollLeft();

    stickyHeader(scrollTop, scrollLeft);
  });
});
