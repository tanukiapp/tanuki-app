'use strict';

angular.module('app', ['airingController', 'upcomingController', 'AnimeService', 'app.components', 'ui.router', 'angularSpinner', 'pascalprecht.translate'])

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
    })

    .state({
      name: 'airing',
      url: '/airing',
      templateUrl: 'views/airing.html',
      controller: 'airingController as vm'
    })

    .state({
      name: 'upcoming',
      url: '/upcoming',
      templateUrl: 'views/upcoming.html',
      controller: 'upcomingController as vm'
    })

    .state({
      name: 'donate',
      url: '/donate',
      templateUrl: 'views/donate.html',
      //controller: 'donateController as vm'
    })


    $urlRouterProvider.when('', '/');
}])