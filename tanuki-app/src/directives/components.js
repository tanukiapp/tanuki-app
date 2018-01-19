angular.module('app.components', [])
    .filter('dayFilter', () => {
        return (anime, day) => {
            if (anime)
                return anime[day]
        }
    })

    .filter('capitalize', function() {
        return (input, all) => {
          let reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
          return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
        }
    })