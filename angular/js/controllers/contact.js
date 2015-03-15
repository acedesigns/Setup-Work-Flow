/* =======================================================
 *  About Page Controller
 *
 *
 * =======================================================
 */

 myApp.controller("contactPage", ['$scope', function ($scope) {
 	$scope.name = "Contact Pagey";
 	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
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