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
    .controller('bookingWidget', [function() {
      var self = this;

      this.arrival = null;
      this.departure = null;

      this.arrivalOptions = {
        minDate: 0
      }

      this.departureOptions = {
        minDate: 0
      }

      this.chachgeMinDate = function(target) {

        if (target == 'arrival') {
          self.arrivalOptions = {
            minDate: 0
          }
        } else {
          self.departureOptions = {
            minDate: 0
          }
        }

      }
    }]);
})();
