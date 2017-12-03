/**
 * Created by vyshaalnarayanam on 12/2/17.
 */

(function(){
    angular
        .module("pet-weather")
        .config(configuration);

    function configuration($routeProvider, $locationProvider) {
        $routeProvider
            .when("/pet", {
                templateUrl: "pet/views/pet-list.view.client.html",
                controller: "PetListController",
                controllerAs: "model"
            })
            .when("/pet/new", {
                templateUrl: "pet/views/pet-new.view.client.html",
                controller: "PetNewController",
                controllerAs: "model"
            })
            .when("/pet/:id", {
                templateUrl: "pet/views/pet.view.client.html",
                controller: "PetController",
                controllerAs: "model"
            })
            .otherwise({
                templateUrl: "pet/views/pet-list.view.client.html",
                controller: "PetListController",
                controllerAs: "model"
            });
    }
})();