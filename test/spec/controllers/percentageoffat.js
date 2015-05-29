'use strict';

describe('Controller: PercentageoffatCtrl', function () {

  // load the controller's module
  beforeEach(module('healthCalculatorsApp'));

  var PercentageoffatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PercentageoffatCtrl = $controller('PercentageoffatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
