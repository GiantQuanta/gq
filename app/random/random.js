angular.module('humint.random', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  var sets = [
    { templateUrl: 'primes/primes.html', controller: 'PrimesCtrl' },
    { templateUrl: 'mnt/mnt.html', controller: 'MntCtrl' }
  ];
  var set = sets[Math.floor(Math.random() * sets.length)];

  $routeProvider.when('/', {
    templateUrl: set.templateUrl,
    controller: set.controller
  });
}])

.controller('RndCtrl', ['$scope', '$location', function($scope, $location) {
}]);
