(function() {
  'use strict';

  angular.module('trips')
    .directive('btTrips', btTrips);

  function btTrips(){

    var directive = {
      templateUrl: '/src/client/app/trips/trips.forms.html',
      link: function(scope, element, attrs){

      }
    };

    return directive;
  }
})();
