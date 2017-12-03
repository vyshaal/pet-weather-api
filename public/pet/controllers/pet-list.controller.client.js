/**
 * Created by vyshaalnarayanam on 12/2/17.
 */


(function () {
    angular
        .module("pet-weather")
        .controller("PetListController", petListController);

    function petListController($location,PetService) {
        var vm = this;

        function init() {
            PetService.findAllPets().success(function (res) {
                vm.pets = res.data;
            })
        }
        init();
    }
})();