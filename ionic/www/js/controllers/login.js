/* =======================================================
 *
 * =======================================================
 */

var myApp;

myApp.controller('LogInCtrl',['$scope', '$state', 'LogInServ', '$ionicPopup', '$ionicModal', function ($scope, $state, LogInServ,  $ionicPopup, $ionicModal) {
	$scope.user = {};

	$scope.signIn = function(user) {
    	LogInServ.logInUsr($scope.user.username, $scope.user.password)
    	.success (function (data) {
    		$state.go('menu.home');
    		console.log(user);
    	}).error (function (data) {
    		var alertPopUp = $ionicPopup.alert({
    			title : 'Log In Failed',
    			template : 'Your login Credentials \n may be wrong'
    		});
    	});
		//console.log('Sign-In', user);
		//$state.go('menu.home');
  	};
}]);

myApp.controller('menuPageCtrl', ['$scope', '$ionicModal', function ($scope, $ionicModal ){
	$scope.message = "Hello ! Mikuso Welcome to your app: Built by you Big Bro !!!"; 

    $scope.mikuso = "Mikuso";   
}]);


myApp.controller('familyCtrl', ['$scope', function ( $scope ) {

}]);

myApp.controller('friendsCtrl', ['$scope', function ( $scope ) {
    $scope.listofFriesnds = [
        {id: 0, name: "Katelin"},
        {id: 1, name: "Buhle"},
        {id: 2, name: "Bhut' Anele"},
        {id: 3, name: "Zukhanye"}
    ]
}]);