angular.module('humint.primes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/primes', {
    templateUrl: 'primes/primes.html',
    controller: 'PrimesCtrl'
  });
}])

.controller('PrimesCtrl', ['$scope', function($scope) {
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

  $(document).ready(function() {
    for(var i=1; i<10000; i=i+1) {
      if($.inArray(i, primes) > -1) {
        var rect = $(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
        rect.attr({
          fill: "#000",
          x: i%100,
          y: Math.floor(i/100),
          width: "1",
          height: "1"
        });
        $("#prime-map").append(rect);
      }
    }
  });

  setInterval(function() {
    var rnd = Math.floor((Math.random() * primes.length) + 1);
    $($("#prime-map rect").get(rnd - 1)).toggle();
  }, Math.floor((Math.random() * 500) + 1));

}]);
