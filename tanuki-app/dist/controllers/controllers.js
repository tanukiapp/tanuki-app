'use strict';

angular.module('app.controllers', []).controller('homeCtrl', function (Services, $rootScope) {

  var vm = this;

  vm.today = new Date().getDay();
  vm.ready = false;

  var weekMap = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  var animeWeek = {
    'monday': [],
    'tuesday': [],
    'wednesday': [],
    'thursday': [],
    'friday': [],
    'saturday': [],
    'sunday': []
  };

  var assignWeek = function assignWeek(date, anime) {
    var day = new Date(date).getDay();

    if (day != 0) {
      day -= 1;
    } else {
      day = 6;
    }

    var dayWeek = weekMap[day];

    animeWeek[dayWeek].push(anime);
  };

  vm.get = function (province) {
    Services.getAnime().then(function (res) {
      var anime_json = [];
      res.data.data.map(function (e) {
        return anime_json.push(e.attributes);
      });
      anime_json.map(function (e) {
        return assignWeek(e.startDate, e);
      });

      vm.week = weekMap;
      vm.animeWeek = animeWeek;
      vm.ready = true;
    }).catch(function (err) {
      console.log(err);
    });
  };
});