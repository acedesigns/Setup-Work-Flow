var Services = angular.module('Services', ['ngResource']);

Services.factory('Phone', ['$resource',
  function($resource){
    return $resource('path/tojson/file.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
