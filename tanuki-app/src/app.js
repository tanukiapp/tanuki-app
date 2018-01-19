'use strict';

angular.module('app', ['app.controllers', 'app.services', 'app.components', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl as vm'
    })
    
    $urlRouterProvider.when('', '/');
})