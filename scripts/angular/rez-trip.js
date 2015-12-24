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
    .controller('bookingWidget', ['$scope', function($scope) {
      var self = this;

      this.arrival = null;
      this.departure = null;
      this.arrivalOptions = {
        minDate: 0,
      }
      this.departureOptions = {
        minDate: 0
      }

      this.chachgeMinDate = function(target) {
        var today = new Date().getDate();
        var arr = new Date(self.arrival).getDate();
        var dep = new Date(self.departure).getDate();

        if (target == 'departure') {
          self.departureOptions.minDate = (arr - today) + 1;
          // self.departure = TODO
        }
      }
    }]);
})();
