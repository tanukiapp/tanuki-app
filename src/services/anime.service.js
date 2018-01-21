angular.module('AnimeService', [])
  .service('AnimeService', ['$http', function($http) {
    this.airing = () => {
      return $http.get('http://localhost:8080/anime')
    }

    this.upcoming = () => {
      return $http.get('http://localhost:8080/upcoming')
    }
  }])