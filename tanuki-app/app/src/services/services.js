angular.module('app.services', [])

.service('Services', function($http){
    this.getAnime = () => {
        let query = "https://kitsu.io/api/edge/anime?filter[status]=current&filter[subtype]=TV&filter[seasonYear]=2018&sort=popularityRank&page[limit]=20"
        return $http.get(query)
    }
})