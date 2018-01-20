'use strict';

angular.module('app', ['app.controllers', 'app.services', 'app.components', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'appCtrl as vm'
    })

    $urlRouterProvider.when('', '/');
}])