'use strict';

angular.module('upcomingController', [])
  .controller('upcomingController', ['AnimeService', function(AnimeService) {

    const vm = this

    vm.today = new Date().getDay();
    vm.ready = false
    
    vm.get = () => {
      AnimeService.upcoming()
        .then((res) => {          
          vm.upcoming = res.data.data
          vm.ready = true
        })
        .catch((err) => { console.log(err) })
    }
  }])