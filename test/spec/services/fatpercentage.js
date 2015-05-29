'use strict';

describe('Service: FatPercentage', function () {

  // load the service's module
  beforeEach(module('healthCalculatorsApp'));

  // instantiate service
  var FatPercentage;
  beforeEach(inject(function (_FatPercentage_) {
    FatPercentage = _FatPercentage_;
  }));

  it('should do something', function () {
    expect(!!FatPercentage).toBe(true);
  });

});
