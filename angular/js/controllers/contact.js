/* =======================================================
 *  About Page Controller
 *
 *
 * =======================================================
 */

 myApp.controller("contactPage", ['$scope', function ($scope) {
 	$scope.name = "Contact Page";
 	$scope.map = {center: {latitude: -30.559482, longitude: 22.937506 }, zoom: 6 };
 	$scope.mapOptions = {scrollwheel: false};

 	$scope.onReady = function () {
    	// ...
  	};

  	$scope.ckOptions = {
    	language: 'en',
    	allowedContent: true,
    	entities: false
  	};
 }]);


/////////////////////////////////////////////////////////////////
 myApp.controller("formController",['$scope', function ($scope) {
 	'use strict';
 	$scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };

 }]);