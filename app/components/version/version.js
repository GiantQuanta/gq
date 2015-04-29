'use strict';

angular.module('humint.version', [
  'humint.version.interpolate-filter',
  'humint.version.version-directive'
])

.value('version', '0.1');
