/**
 * Created by vyshaalnarayanam on 12/2/17.
 */

(function () {
    angular
        .module("pet-weather")
        .controller("PetController", petController);

    function petController($location,$routeParams,PetService,WeatherService) {
        var vm = this;

        function init() {
            var petId = $routeParams.id;
            PetService.findPetById(petId).success(function (res) {
                vm.pet = res.data[0];
                WeatherService.getWeather(vm.pet.latitude,vm.pet.longitude)
                    .then(function (response) {
                        vm.rain = (response.data.currently.icon == "rain");
                    },function (error) {
                        vm.error = error;
                        console.log(error);
                    });
            });
        }
        init();
    }
})();