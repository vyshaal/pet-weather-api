/**
 * Created by vyshaalnarayanam on 12/2/17.
 */

(function () {
    angular
        .module("pet-weather")
        .controller("PetNewController", petNewController);

    function petNewController($location,PetService) {
        var vm = this;
        vm.pets = {
            "Dog": ["Labrador retriever", "German shepherd", "Golden retriever", "Bulldog", "Beagle", "French bulldog", "Poodle", "Rottweilers", "Yorkshire terrier", "Boxers"],
            "Cat": ["Siamese", "Persian", "Maine Coon", "Ragdoll", "Bengal", "Himalayan", "American Shorthair", "Manx", "Russian Blue", "Sphynx"]
        }
        vm.addPet = addPet;

        function init() {
            vm.types = Object.keys(vm.pets);
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
                        vm.pet.latitude = vm.pet.latitude.replace("+","");
                        vm.pet.longitude = vm.pet.longitude.replace("+","");
                        PetService
                            .createPet(pet)
                            .success(function (u) {
                                if (u && u.success) {
                                    vm.message = "Pet created successfully!!!";
                                    $location.url("/pet");
                                } else {
                                    vm.error = u.error;
                                }
                            }).error(function (err) {
                                vm.error = err;
                            });
                    }
                },function (error) {
                vm.error =error;
            });
        }
    }
})();