'use strict';

describe('Controller: BasalmetabolicrateCtrl', function () {

  // load the controller's module
  beforeEach(module('healthCalculatorsApp'));

  var BasalmetabolicrateCtrl,
    scope,
      apiService = {
          get:function(){
              return [];
          }
      };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasalmetabolicrateCtrl = $controller('BasalmetabolicrateCtrl', {
      $scope: scope,
      BasalMetabolicRate:apiService
    });
  }));

    it('should be calling BasalMetabolicRate.get method', function () {
        spyOn(apiService, 'get').and.callThrough();
        scope.calculate();
        expect(apiService.get).toHaveBeenCalled();
    });

    it('basalmetabolicrateArray should not be empty', function () {
        scope.calculate();
        expect(scope.basalmetabolicrateArray).toBeDefined();
    });
});
