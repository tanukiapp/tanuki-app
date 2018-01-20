'use strict';

angular.module('app', ['mangaController', 'animeController', 'app.services', 'app.components', 'ui.router', 'angularSpinner'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'views/home.html',
      //controller: 'animeController as vm'
    })

    .state({
      name: 'anime',
      url: '/anime',
      templateUrl: 'views/anime.html',
      controller: 'animeController as vm'
    })

    .state({
      name: 'manga',
      url: '/manga',
      templateUrl: 'views/manga.html',
      controller: 'mangaController as vm'
    })

    $urlRouterProvider.when('', '/');
}])