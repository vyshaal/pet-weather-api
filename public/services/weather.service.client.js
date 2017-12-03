/**
 * Created by vyshaalnarayanam on 12/2/17.
 */

(function () {
    angular
        .module("pet-weather")
        .service("WeatherService", WeatherService);

    function WeatherService($http) {
        this.getWeather = getWeather;

        var baseUrl = "https://cors.io?https://api.darksky.net/forecast/dcdf8d6fc3f345e402c71cec65c6fd5a/";
        function getWeather(lat,long) {
            return $http.get(baseUrl+lat+","+long+'?exclude=minutely,hourly,daily,alerts,flags');
        }
    }


})();