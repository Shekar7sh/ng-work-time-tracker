angular.module('workTimeTrackerApp').directive('ngFlipClock', ['flipClock', function flipClockDirective(flipClock) {
  return {
    link: function(scope, element, attrs) {
      flipClock.setElement(element);
    }
  };
}]);
