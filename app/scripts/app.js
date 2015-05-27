'use strict';

/**
 * @ngdoc overview
 * @name healthCalculatorsApp
 * @description
 * # healthCalculatorsApp
 *
 * Main module of the application.
 */
angular
  .module('healthCalculatorsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
      })
      .when('/pulseZoneCalc', {
        templateUrl: 'views/pulsezonecalc.html',
        controller: 'PulsezonecalcCtrl'
      })
      .when('/basalmetabolicrate', {
        templateUrl: 'views/basalmetabolicrate.html',
        controller: 'BasalmetabolicrateCtrl'
      })
      .when('/percentageoffat', {
        templateUrl: 'views/percentageoffat.html',
        controller: 'PercentageoffatCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
