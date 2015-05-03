
// Declare app level module which depends on views, and components
angular.module('humint', [
  'ngRoute',
  'humint.random',
  'humint.primes',
  'humint.mnt',
  'humint.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: "/random"});
}]);
