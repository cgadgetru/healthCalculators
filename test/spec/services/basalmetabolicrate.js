'use strict';

describe('Service: basalmetabolicrate', function () {

  // load the service's module
  beforeEach(module('healthCalculatorsApp'));
    var basalMetabolicRates = [
        {name:'Базальный уровень метаболизма (ккал/день)'},
        {name:'Ежедневная потребность в калориях (ккал/день)'}
    ];
  // instantiate service
  var BasalMetabolicRate;
  beforeEach(inject(function (_BasalMetabolicRate_) {
    BasalMetabolicRate = _BasalMetabolicRate_;
  }));

  it('should do something', function () {
    expect(!!BasalMetabolicRate).toBe(true);
  });

  it('should BasalMetabolicRate.get() be equal basalMetabolicRates', function () {
      expect(BasalMetabolicRate.get()).toEqual(basalMetabolicRates);
  });

  it('should BasalMetabolicRate.get(args) be equal values', function () {
      expect(BasalMetabolicRate.get('73','167','93','34','male','1.375')[0].value1).toBe(1610);
      expect(BasalMetabolicRate.get('73','167','93','34','male','1.375')[0].value2).toBe(1552);
      expect(BasalMetabolicRate.get('73','167','93','34','male','1.375')[1].value1).toBe(2213);
      expect(BasalMetabolicRate.get('73','167','93','34','male','1.375')[1].value2).toBe(2134);
  });

});
