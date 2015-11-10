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

  function stickyHeader(pagePosition) {
    if (header.hasClass('-sticky')) {
      if (pagePosition < headerBreakpoint) {
        header.removeClass('-sticky');
      }
    } else {
      if(pagePosition > headerBreakpoint) {
        header.addClass('-sticky');
      }
    }
  }

  // On Scroll -----------------------------------------------------------------
  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();

    stickyHeader(scrollTop);
  });
});
