(function() {
  angular.module('rezTrip', ['ui.date']);

  angular.module('rezTrip').controller('todo', function($scope) {
    $scope.datepickerOpts = {
      minDate: new Date()
    }
  });
})();
