'use strict';

/* Services */

var TempDataPath="sampledata";

// Demonstrate how to register services
// In this case it is a simple value service.
var MyApp = angular.module('myApp.services', ['ngResource']).
  value('version', '0.1');

MyApp.factory('Cliente', function($resource) {

 	 return $resource(TempDataPath+'/:clienteid.json', {}, { query: {method:'GET', params:{clienteid:'clientes'}, isArray:true}
	});
});



