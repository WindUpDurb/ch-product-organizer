"use strict";

var app = angular.module("myApp");


app.controller("homeController", function ($scope, ProductsServices) {

    console.log("Home Controller");

    $scope.productList = [
        {
            productName : "King Cobra",
            productDescription : "A 40 of malt liquor",
            productPrice : 3,
            productCategory : "Beer",
            productImgURL : ""

        },

        {
            productName : "Early Times",
            productDescription : "Good 'ol Early Times Whiskey",
            productPrice : 5,
            productCategory : "Liquor",
            productImgURL : ""
        },

        {
            productName : "Mickey's",
            productDescription : "A 40",
            productPrice : 4,
            productCategory : "Beer",
            productImgURL : ""
        }

    ];
    

});

app.controller("detailsController", function($scope, ProductsServices) {

})

