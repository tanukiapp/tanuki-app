'use strict';

angular.module('app', ['mangaController', 'animeController', 'app.services', 'app.components', 'ui.router', 'angularSpinner', 'pascalprecht.translate'])

.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {
  $translateProvider
    .translations('en', LOCALE_EN)
    .translations('es', LOCALE_ES)
    .registerAvailableLanguageKeys(['en', 'es'], {
      'en_*': 'en',
      'es_*': 'es'
    })
    .determinePreferredLanguage()
    .useSanitizeValueStrategy('escape')

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