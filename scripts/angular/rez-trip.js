(function() {
  angular
    .module('rezTrip', ['ui.date'])
    .value('rt3api', new Rt3Api({
      portalId: 'themarkerkeywes',
      hotelId: 'KEYMRK',
      defaultLocale: 'en',
      defaultCurrency: 'USD'
    }))
    .controller('main', function($scope) {
    });
})();
