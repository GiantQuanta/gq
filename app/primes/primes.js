'use strict';

angular.module('humint.primes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/primes', {
    templateUrl: 'primes/primes.html',
    controller: 'PrimesCtrl'
  });
}])

.controller('PrimesCtrl', ['$scope', function($scope) {
  var primes = [];

  var generator = function(limit) {
    var prms = [];
    if (limit >= 2) prms = [2];
    if (limit >= 3) {
      var sqrtlmt = (Math.sqrt(limit) - 3) >> 1;
      var lmt = (limit - 3) >> 1;
      var bfsz = (lmt >> 5) + 1
      var buf = [];
      for (var i = 0; i < bfsz; i++)
      buf.push(0);
      for (var i = 0; i <= sqrtlmt; i++)
      if ((buf[i >> 5] & (1 << (i & 31))) == 0) {
        var p = i + i + 3;
        for (var j = (p * p - 3) >> 1; j <= lmt; j += p)
        buf[j >> 5] |= 1 << (j & 31);
      }
      for (var i = 0; i <= lmt; i++)
      if ((buf[i >> 5] & (1 << (i & 31))) == 0)
        prms.push(i + i + 3);
    }
    return prms;
  };

  var primes = generator(10009);
  var integers = [];

  for(var i=1; i<10000; i=i+1) {
    var fill = "#fff";
    if($.inArray(i, primes) > -1) { fill = "#000"; }
    integers.push({
      integer: i,
      fill: fill,
      x: i % 100,
      y: Math.floor(i / 100)
    });
  }

  $scope.integers = integers;

}]);
