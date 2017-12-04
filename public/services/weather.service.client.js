/**
 * Created by vyshaalnarayanam on 12/2/17.
 */

(function () {
    angular
        .module("pet-weather")
        .service("WeatherService", WeatherService);

    function WeatherService($http) {
        this.getWeather = getWeather;
        var key = "dcdf8d6fc3f345e402c71cec65c6fd5a";
        var baseUrl = "https://thingproxy.freeboard.io/fetch/https://api.darksky.net/forecast/API_KEY/";

        function getWeather(lat,long) {
            baseUrl = baseUrl.replace("API_KEY",key);
            return $http.get(baseUrl+lat+","+long+'?exclude=minutely,hourly,daily,alerts,flags');
        }
    }


})();