'use strict';

angular.module('upcomingController', [])
  .controller('upcomingController', ['Services', function(Services) {

    const vm = this

    vm.today = new Date().getDay();
    vm.ready = false
    
    vm.get = () => {
      Services.upcoming()
        .then((res) => {          
          vm.upcoming = res.data.data
          vm.ready = true
        })
        .catch((err) => { console.log(err) })
    }
  }])