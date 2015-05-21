'use strict';

describe('Service: PulseZones', function () {

  // load the service's module
  beforeEach(module('healthCalculatorsApp'));

  // instantiate service
  var PulseZones;
  beforeEach(inject(function (_PulseZones_) {
    PulseZones = _PulseZones_;
  }));

  it('should do something', function () {
    expect(!!PulseZones).toBe(true);
  });

});
