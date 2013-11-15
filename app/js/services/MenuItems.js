'use strict';

foodMeApp.factory('MenuItem', function($resource) {
  return $resource('/api/restaurants/:restaurantId/menuItems', {restaurantId: '@restaurantId'});
});
