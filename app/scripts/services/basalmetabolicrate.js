'use strict';

/**
 * @ngdoc service
 * @name healthCalculatorsApp.basalmetabolicrate
 * @description
 * # basalmetabolicrate
 * Service in the healthCalculatorsApp.
 */
angular.module('healthCalculatorsApp')
  .service('BasalMetabolicRate', function () {
        var basalMetabolicRates = [
            {name:'Базальный уровень метаболизма (ккал/день)'},
            {name:'Ежедневная потребность в калориях (ккал/день)'}
        ];
        return {
            get:function(weightParam, heightParam, waistParam, ageParam, sexParam, activityParam){
                console.log('agrs',arguments);
                if(!weightParam || !heightParam || !waistParam || !ageParam || !sexParam || !activityParam){
                    return basalMetabolicRates;
                }else{
                    basalMetabolicRates[0].value1 = basalMetabolicRateCalcByMuffin(weightParam, heightParam, ageParam, sexParam);
                    basalMetabolicRates[0].value2 = basalMetabolicRateCalcByKetch(weightParam, waistParam, sexParam);
                    basalMetabolicRates[1].value1 = getCaloricNeedsCalc(basalMetabolicRates[0].value1, activityParam);
                    basalMetabolicRates[1].value2 = getCaloricNeedsCalc(basalMetabolicRates[0].value2, activityParam);
                    return basalMetabolicRates;
                }
            }
        };
  });

// setting metabolic calculator values
function basalMetabolicRateCalcByKetch(weightParam, waistParam, sexParam) {
    var weight = parseFloat(weightParam);
    var waist = parseFloat(waistParam);
    var fat, lbm;

    fat = getFatBySex(sexParam,waist,weight);

    lbm = weight * (100 - fat) / 100;

    return getBmiByKetch(lbm);
}

function basalMetabolicRateCalcByMuffin(weightParam, heightParam, ageParam, sexParam) {
    var weight = parseFloat(weightParam);
    var height = parseFloat(heightParam);
    var age = parseFloat(ageParam);

    return getBmiByMuffin(sexParam,weight,height,age);

}

function getFatBySex(sex,waist,weight){
    var fat = 0;
    if (sex === 'female') {
        fat = 100 * ( (4.15 * waist) / 2.54 - (0.082 * weight) / 0.453 - 76.76 ) / ( weight / 0.453);
    } else {
        fat = 100 * ( (4.15 * waist) / 2.54 - (0.082 * weight) / 0.453 - 98.48 ) / ( weight / 0.453);
    }
    return fat;
}

function getBmiByKetch(lbm){
    if(lbm){
        return parseInt(370 + (21.6 * lbm));
    }
}

function getBmiByMuffin(sex,weight,height,age){
    var bmi = 0;
    if (sex === 'female') {
        bmi = parseInt(9.99 * weight + 6.25 * height - 4.92 * age - 161);
    } else {
        bmi = parseInt(9.99 * weight + 6.25 * height - 4.92 * age + 5);
    }
    return bmi;
}

function getCaloricNeedsCalc(bmi,ex){
    return parseInt(bmi * ex);
}

