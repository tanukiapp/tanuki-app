angular.module('app.components', [])
    .filter('dayFilter', () => {
        return (anime, day) => {
            if (anime)
                return anime[day]
        }
    })

    .filter('capitalize', () => {
        return (input, all) => {
          let reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
          return (!!input) ? input.replace(reg, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) : '';
        }
    })

    .directive('tanukiHeader', () => {
        return {
            templateUrl: 'views/components/header.html'
        }
    })

    .directive('tanukiFooter', () => {
        return {
            templateUrl: 'views/components/footer.html'
        }
    })