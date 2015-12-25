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
    .directive('onSearchChanged', function (rt3Search) {
      return {
        scope: false,
        restrict: 'A',
        link: function (scope, element, attrs) {
          scope.$watch('search.params', function (params) {
            if (params.arrival_date && params.departure_date) {
              scope.$eval(attrs.onSearchChanged);
            }
          }, true);

          scope.$eval(attrs.onSearchChanged);
        }
      };
    })
    .controller('bookingWidget', ['$scope', function($scope) {
      var self = this;

      this.arrivalOptions = {
        minDate: 0,
      }
      this.departureOptions = {
        minDate: 0
      }
      // Todo move to service
      this.chachgeMinDate = function(target) {
        var today = new Date().getDate();
        var arr = new Date($scope.search.params.arrival_date).getDate();
        var dep = new Date($scope.search.params.departure_date).getDate();

        if (target == 'departure') {
          self.departureOptions.minDate = (arr - today) + 1;
        }
      }
    }]);
})();
