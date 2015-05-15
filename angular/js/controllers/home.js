/* =======================================================
 *  Home Pahe Controller
 *
 *
 * =======================================================
 */

myApp.controller("homepage", ['$scope', function ($scope) {
 	$scope.name = "The Homey Page";
	$scope.images = [
		{src:'img1.png',title:'Pic 1'},
		{src:'img2.jpg',title:'Pic 2'},
		{src:'img3.jpg',title:'Pic 3'},
		{src:'img4.png',title:'Pic 4'},
		{src:'img5.png',title:'Pic 5'}
	];

	$scope.users = [
        {name: "Moroni", age: 50},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34}
    ];

 }]);
