angular.module('AnimeService', [])
  .service('AnimeService', ['$http', function($http) {
    this.airing = () => {
      return $http.get('https://tanuki-server-ffkecsdciy.now.sh/anime')
    }

    this.upcoming = () => {
      return $http.get('https://tanuki-server-ffkecsdciy.now.sh/upcoming')
    }

    this.upcomingBySeason = (season) => {
      return $http.get('https://tanuki-server-ffkecsdciy.now.sh/upcoming/' + season)
    }
  }])