'use strict';

/**
 * @ngdoc function
 * @name healthCalculatorsApp.controller:BasalmetabolicrateCtrl
 * @description
 * # BasalmetabolicrateCtrl
 * Controller of the healthCalculatorsApp
 */
angular.module('healthCalculatorsApp')
  .controller('BasalmetabolicrateCtrl',['$scope','BasalMetabolicRate', function ($scope, BasalMetabolicRate) {


        $scope.basalmetabolicrateArray = BasalMetabolicRate.get();
        $scope.weight = 0;
        $scope.height = 0;
        $scope.waistline = 0;
        $scope.age = 0;
        $scope.sex_selected = '';
        $scope.activity_selected = '';
        $scope.sex = [{name:'Сильный',value:'male',id:0},{name:'Прекрасный',value:'female',id:1}];
        $scope.activity = [
            {name: 'минимальна', value: 1.2},
            {name: 'тренировки 1-3 раза в неделю', value: 1.375},
            {name: 'тренировки 3-5 раз в неделю', value: 1.55},
            {name: 'тренировки 6-7 раз в неделю', value: 1.725},
            {name: 'тренировки 2 раза в день, тяжелая физическая работа', value: 1.9}
        ];

        $scope.$watchGroup(['weight','age','height','waistline','sex_selected','activity_selected'],function(){
            $scope.calculate();
        });

        $scope.calculate = function()
        {
            $scope.basalmetabolicrateArray =  BasalMetabolicRate.get($scope.weight,$scope.height,$scope.waistline,$scope.age,$scope.sex_selected.value,$scope.activity_selected.value);

        };

        /*if(!$scope.restingHeartRate || !$scope.age){
            $scope.pulseZonesArray = pulseZones;
        }*/
  }]);


