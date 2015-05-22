'use strict';

/**
 * @ngdoc function
 * @name healthCalculatorsApp.controller:PulsezonecalcCtrl
 * @description
 * # PulsezonecalcCtrl
 * Controller of the healthCalculatorsApp
 */
angular.module('healthCalculatorsApp')
    .controller('PulsezonecalcCtrl',['$scope','PulseZones', function ($scope,PulseZones) {

        var pulseZones = PulseZones.get();

        $scope.$watchGroup(['restingHeartRate','age'],function(){
            $scope.calculate();
        });

        $scope.calculate = function(){
            if($scope.restingHeartRate && $scope.age){
                $scope.pulseZonesArray = PulseZones.get($scope.restingHeartRate,$scope.age);
            }else{
                $scope.pulseZonesArray = pulseZones;
            }
        };

        if(!$scope.restingHeartRate || !$scope.age){
            $scope.pulseZonesArray = pulseZones;
        }
    }]);

/*
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
}*/
