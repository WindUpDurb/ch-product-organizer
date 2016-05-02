"use strict";

var app = angular.module("myApp");

app.service("ProductsServices", function($http) {

    this.getProductDetails  = function (product) {
      return $http.get(`/details/${product}`)
    };

});