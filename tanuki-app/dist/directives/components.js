'use strict';

angular.module('app.components', []).filter('dayFilter', function () {
    return function (anime, day) {
        if (anime) return anime[day];
    };
}).filter('capitalize', function () {
    return function (input, all) {
        var reg = all ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return !!input ? input.replace(reg, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : '';
    };
});