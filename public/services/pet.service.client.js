/**
 * Created by vyshaalnarayanam on 12/2/17.
 */

/**
 * Created by vyshaalnarayanam on 2/16/17.
 */

(function () {
    angular
        .module("pet-weather")
        .service("PetService", PetService);

    function PetService($http) {

        this.findPetByNameAndBreed = findPetByNameAndBreed;
        this.createPet = createPet;
        this.findPetById = findPetById;
        this.findAllPets = findAllPets;

        var baseUrl = "https://cors.io?https://pet-shelter-api-vn.herokuapp.com/";
        // var baseUrl = "http://localhost:3000/";
        function findAllPets() {
            return $http.get(baseUrl + "api/pets");
        }

        function findPetById(id){
            return $http.get(baseUrl + "api/pet/"+id);
        }

        function findPetByNameAndBreed(name, breed) {
            return $http.get(baseUrl + "api/pet?name="+name+"&breed="+breed);
        }

        function createPet(pet) {
            return $http.post(baseUrl + "api/pet", pet);
        }
    }
})();