(function() {
  angular
    .module('rezTrip', ['ui.date'])
    .value('rt3api', new Rt3Api({
      portalId: 'cupertinoinn',
      hotelId: 'CASVCH',
      defaultLocale: 'en',
      defaultCurrency: 'USD'
    }))
    .controller('main', function($scope) {
    });
})();
