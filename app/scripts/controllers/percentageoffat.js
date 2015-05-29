'use strict';

/**
 * @ngdoc function
 * @name healthCalculatorsApp.controller:PercentageoffatCtrl
 * @description
 * # PercentageoffatCtrl
 * Controller of the healthCalculatorsApp
 */
angular.module('healthCalculatorsApp')
  .controller('PercentageoffatCtrl',['$scope','FatPercentage', function ($scope,FatPercentage) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.fatPercentageArray = FatPercentage.get();
        $scope.weight = 0;
        $scope.height = 0;
        $scope.waistline = 0;
        $scope.sex_selected = '';
        $scope.sex = [{name:'Сильный',value:'male',id:0},{name:'Прекрасный',value:'female',id:1}];

        $scope.$watchGroup(['weight','height','waistline','sex_selected'],function(){
            $scope.calculate();
        });

        $scope.calculate = function()
        {
            console.log('test',FatPercentage.get($scope.weight,$scope.height,$scope.waistline,$scope.sex_selected.value));
            $scope.fatPercentageArray = FatPercentage.get($scope.weight,$scope.height,$scope.waistline,$scope.sex_selected.value);
        };
    }]);
