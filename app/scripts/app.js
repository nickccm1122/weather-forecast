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
  .constant("openWeatherApiKey", /* <Your Open Weather API KEY goes Here> */)
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
