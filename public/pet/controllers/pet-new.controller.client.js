/**
 * Created by vyshaalnarayanam on 12/2/17.
 */

(function () {
    angular
        .module("pet-weather")
        .controller("PetNewController", petNewController);

    function petNewController($location,PetService) {
        var vm = this;
        vm.addPet = addPet;

        function init() {
        }
        init();

        function addPet(pet) {
            if (pet == null){
                vm.error = "Please enter the details of pet";
                return;
            }
            if(pet.name==null) {
                vm.error = "Name required";
                return;
            }
            if(pet.type==null){
                vm.error = "Type cannot be empty";
                return;
            }
            if(pet.breed==null){
                vm.error = "Breed cannot be empty";
                return;
            }
            if(pet.location==null){
                vm.error = "Location cannot be empty";
                return;
            }
            if(pet.latitude==null){
                vm.error = "Latitude cannot be empty";
                return;
            }
            if(parseFloat(pet.latitude) < -90 || parseFloat(pet.latitude) > 90){
                vm.error = "Latitude should be in the range -90 to 90";
            }
            if(parseFloat(pet.longitude) < -180 || parseFloat(pet.longitude) > 180){
                vm.error = "Longitude should be in the range -180 to 180";
            }
            if(pet.longitude==null){
                vm.error = "Longitude cannot be empty";
                return;
            }
            var promise = PetService.findPetByNameAndBreed(pet.name,pet.breed);
            promise
                .then(function (res) {
                    if(res.data.length > 0)
                        vm.error = "Pet already exists!!!";
                    else {
                        PetService
                            .createPet(pet)
                            .then(function (u) {
                                if (u) {
                                    vm.message = "Pet created successfully!!!";
                                    $location.url("/pet");
                                } else {
                                    vm.error = "Unable to create pet!!!";
                                }
                            },function (err) {
                                vm.error = err;
                            });
                    }
                },function (error) {
                vm.error =error;
            });
        }
    }
})();