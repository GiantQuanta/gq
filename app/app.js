'use strict';

// Declare app level module which depends on views, and components
angular.module('humint', [
  'ngRoute',
  'humint.primes',
  'humint.view2',
  'humint.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
