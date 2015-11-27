(function() {
  angular
    .module('rezTrip', ['ui.date'], function($interpolateProvider) {
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
    })
    .value('rt3api', new Rt3Api({
      portalId: 'cupertinoinn',
      hotelId: 'CASVCH',
      defaultLocale: 'en',
      defaultCurrency: 'USD'
    }))
    .controller('main', function($scope) {
    });
})();
