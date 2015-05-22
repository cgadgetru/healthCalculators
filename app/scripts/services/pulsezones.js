'use strict';

/**
 * @ngdoc service
 * @name healthCalculatorsApp.PulseZones
 * @description
 * # PulseZones
 * Service in the healthCalculatorsApp.
 */
angular.module('healthCalculatorsApp')
    .service('PulseZones', function () {
        var pulseZones = [
            {
                name: 'максимальный пульс 100%',
                factor: 1,
                className: 'active'
            },
            {
                name: 'зона VO2 max 90-100% (макcимальная нагрузка)',
                factor: .9,
                className: 'danger'
            },
            {
                name: 'анаэробная зона 80-90%(силовая тренировка)',
                factor: .8,
                className: 'warning'
            },
            {
                name: 'аэробная зона 70-80% (бег, велосипед)',
                factor: .7,
                className: 'success'
            },
            {
                name: 'жиросжигающая зона 60-70% (фитнес, ролики)',
                factor: .6,
                className: 'info'
            },
            {
                name: 'зона легкой активности 50-60% (разминка)',
                factor: .5,
                className: 'active'
            },
            {
                name: 'пульс покоя 0%',
                factor: 0,
                className: 'active'
            }
        ];
        return {
            get: function (restingHeartRate,age) {
                var pulseZonesCalculated = [];
                if(!restingHeartRate || !age){
                    pulseZonesCalculated = pulseZones
                }else{
                    angular.forEach(pulseZones,function(value,key){
                        pulseZonesCalculated.push(new PulseZone({
                            name:value.name,
                            className:value.className,
                            factor:value.factor,
                            restingHeartRate:restingHeartRate,
                            age:age
                        }))
                    });
                }
                return pulseZonesCalculated;
            }
        }
    });


function PulseZone(option){
    var maxPulseSimple,maxPulseExtend,minPulse;
    maxPulseSimple = calcMaxPulseSimple(option.age);
    maxPulseExtend = calcMaxPulseExtend(option.age);
    minPulse = option.restingHeartRate;
    this.name = option.name;
    this.className = option.className;
    this.simplePulseRange = calcMaxPulse(option.factor, minPulse, maxPulseSimple);
    this.extendPulseRange = calcMaxPulse(option.factor, minPulse, maxPulseExtend);

    function calcMaxPulse (factor, minPulse, maxPulse){
        var maxValue = parseInt(minPulse + (maxPulse - minPulse) * (factor +.1));
        var minValue = parseInt(minPulse + (maxPulse - minPulse) * factor);
        var range ='-';
        if(factor !== 0 && factor !== 1){
            range = minValue+'-'+maxValue;
        }else if(factor == 0){
            range = minPulse;
        }else if(factor == 1){
            range = maxPulse;
        }
        return range;
    }
}

function calcMaxPulseSimple(age){
    return parseInt(220 - age);
}
function calcMaxPulseExtend(age){
    return parseInt(205.8 - (0.685 * age));
}
