'use strict';

angular.module('airingController', [])
  .controller('airingController', ['AnimeService', function(AnimeService) {

    const vm = this

    let today = new Date().getDay()

    if (today == 0) {
      vm.today = 6
    } else if (today == 1) {
      vm.today = 0
    } else {
      vm.today = today++
    } 

    console.log(today, vm.today)

    vm.ready = false
    
    const weekMap = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

    let curr  = new Date()
    let first = (curr.getDate() - curr.getDay()) + 1
    let last  = first + 6

    vm.weekStart = new Date(curr.setDate(first)).getTime()
    vm.weekEnd   = new Date(curr.setDate(last)).getTime()
    
    vm.get = () => {
      AnimeService.airing()
        .then((res) => {  
          vm.week = weekMap
          vm.animeWeek = res.data
          vm.ready = true
        })
        .catch((err) => { console.log(err) })
    }
  }])