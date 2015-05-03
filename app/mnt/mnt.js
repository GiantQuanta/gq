angular.module('humint.mnt', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mnt', {
    templateUrl: 'mnt/mnt.html',
    controller: 'MntCtrl'
  });
}])

.controller('MntCtrl', [function() {

}]);
