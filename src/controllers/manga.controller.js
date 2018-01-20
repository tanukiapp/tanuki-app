'use strict';

angular.module('mangaController', [])
  .controller('mangaController', ['Services', function(Services) {

    const vm = this

    vm.today = new Date().getDay();
    vm.ready = false
    
    const weekMap = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const animeWeek = {
        'monday': [],
        'tuesday': [],
        'wednesday': [],
        'thursday': [],
        'friday': [],
        'saturday': [],
        'sunday': []
    }

    const assignWeek = (date, anime) => {
      let day = moment(date).day()

      // this adjust the weekMap array
      if (day != 0) {
        day -= 1
      } else {
        day = 6
      }

      let dayWeek = weekMap[day]

      animeWeek[dayWeek].push(anime)
    }

    let curr  = new Date()
    let first = (curr.getDate() - curr.getDay()) + 1
    let last  = first + 6

    vm.weekStart = new Date(curr.setDate(first)).getTime()
    vm.weekEnd   = new Date(curr.setDate(last)).getTime()
    
    vm.get = () => {
      Services.getManga()
        .then((res) => {
          let manga_json = []
          res.data.data.map((e) => manga_json.push(e.attributes))
          manga_json.map((e) => assignWeek(e.startDate, e))
          
          vm.week = weekMap
          vm.animeWeek = animeWeek
          vm.ready = true
        })
        .catch((err) => { console.log(err) })
    }
  }])