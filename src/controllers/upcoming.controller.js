'use strict';

angular.module('upcomingController', [])
  .controller('upcomingController', ['AnimeService', function(AnimeService) {

    const vm = this

    vm.ready = false
    
    vm.get = () => {
      AnimeService.upcoming()
        .then((res) => {
          console.log(res.data)
          vm.upcoming = res.data
          vm.ready = true
        })
        .catch((err) => { console.log(err) })
    }

    vm.getSeason = (season) => {
      AnimeService.upcomingBySeason(season)
        .then((res) => {
          vm.upcoming = res.data
          vm.ready = true
        })
        .catch((err) => { console.log(err) })
    }
  }])