'use strict';

/**
 * @ngdoc service
 * @name healthCalculatorsApp.FatPercentage
 * @description
 * # FatPercentage
 * Service in the healthCalculatorsApp.
 */
angular.module('healthCalculatorsApp')
  .service('FatPercentage', function () {
        var fatPercentageArray = [0,0,0];
        return {
            get:function(weightParam, heightParam, waistParam,  sexParam){
                console.log('agrs',arguments);
                if(!weightParam || !heightParam || !waistParam || !sexParam ){
                    return fatPercentageArray;
                }else{
                    return getFatPercentage(weightParam, heightParam, waistParam,  sexParam);
                }
            }
        };

    });

function getFatPercentage(weightParam, heightParam, waistParam,  sexParam){
    var weight = parseFloat(weightParam);
    var height = parseFloat(heightParam);
    var waist = parseFloat(waistParam);
    var lbm,fat,bmi;

    if(sexParam === 'female'){
       fat = parseInt( 1000 * ( (4.15 * waist) / 2.54 - (0.082 * weight) / 0.453 - 76.76 ) / ( weight / 0.453)) / 10.0;
    }else{
        fat = parseInt( 1000 * ( (4.15 * waist) / 2.54 - (0.082 * weight) / 0.453 - 98.48 ) / ( weight / 0.453)) / 10.0;
    }

    lbm = parseInt(weight*(100-fat)/10) / 10.0;
    bmi = parseInt(weight*100000/(height*height)) / 10.0;

    return [fat,lbm,bmi];

}
