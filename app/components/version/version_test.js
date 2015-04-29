'use strict';

describe('humint.version module', function() {
  beforeEach(module('humint.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
