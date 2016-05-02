"use strict";

var app = angular.module("myApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("home", {
            url : "/",
            templateUrl : "/html/home.html",
            controller : "homeController"
        })
        .state("details", {
            url : "/details/:productName",
            templateUrl : "/html/details.html",
            controller : "detailsController"
        })

    $urlRouterProvider.otherwise("/");
});
