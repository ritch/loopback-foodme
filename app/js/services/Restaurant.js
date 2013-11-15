'use strict';

foodMeApp.factory('Restaurant', function($resource) {
  return $resource('/api/restaurants/:id', {id: '@id'});
});
