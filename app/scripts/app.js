'use strict';

/**
 * @ngdoc overview
 * @name customDirectiveExampleApp
 * @description
 * # customDirectiveExampleApp
 *
 * Main module of the application.
 */
angular
  .module('customDirectiveExampleApp', [
    'ngRoute',
    'angular-loading-bar'
  ])
  .constant("openWeatherApiKey", 'd51755a4b172bab2f622241ab17febba')
  .config(['$routeProvider' ,'cfpLoadingBarProvider', function ($routeProvider,cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
