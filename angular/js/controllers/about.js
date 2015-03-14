/* =======================================================
 *  About Page Controller
 *
 *
 * =======================================================
 */

 myApp.controller("aboutPage", ['$scope', function ($scope) {

 	$scope.name = "The About Page";
 	
 }]);

myApp.controller("scotchController", ['$scope' ,function ($scope) {

	$scope.message = "a test message from inside of the inner controller";

    $scope.scotches = [
    	{ name: 'Macallan 12', price: 50 },
    	{ name: 'Chivas Regal Royal Salute', price: 1000 },
    	{ name: 'Glenfiddich 1937', price: 2000 }
    ];
}]);
