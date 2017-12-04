/**
 * Created by vyshaalnarayanam on 12/2/17.
 */


(function () {
    angular
        .module("pet-weather")
        .controller("PetListController", petListController);

    function petListController($location,PetService) {
        var vm = this;
        vm.displayTable = displayTable;
        vm.displayMap = displayMap;
        vm.viewPet = viewPet;

        function init() {
            vm.showTable = false;
            PetService.findAllPets().success(function (res) {
                vm.pets = res.data;
            });
        }
        init();

        function displayTable() {
            vm.showTable = true;
        }

        function displayMap() {
            vm.showTable = false;
        }

        function viewPet(event,pet) {
            $location.url("/pet/"+pet.id);
        }
    }
})();