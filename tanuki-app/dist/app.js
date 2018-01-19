'use strict';

angular.module('app', ['app.controllers', 'app.services', 'app.components', 'ui.router']).run(function ($rootScope) {
  $rootScope.showImages = true;

  function toggleImages() {
    $rootScope.showImages = !$rootScope.showImages;
  }
}).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl as vm'
  });

  // By default
  $urlRouterProvider.when('', '/');
});