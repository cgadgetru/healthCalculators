'use strict';

describe('Controller: PulsezonecalcCtrl', function () {

  // load the controller's module
  beforeEach(module('healthCalculatorsApp'));

  var PulsezonecalcCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PulsezonecalcCtrl = $controller('PulsezonecalcCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
