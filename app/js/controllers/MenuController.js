'use strict';

foodMeApp.controller('MenuController',
    function MenuController($scope, $routeParams, Restaurant, cart, MenuItem) {

  $scope.restaurant = Restaurant.get({id: $routeParams.restaurantId});
  $scope.menuItems = MenuItem.query({restaurantId: $routeParams.restaurantId});
  $scope.cart = cart;

});
