
/* =======================================================
 *  app.js
 *
 * http://mgcrea.github.io/angular-strap/
 *
 * =======================================================
 */

 var angular;
 var myApp = angular.module('aceApp', ['mgcrea.ngStrap', 'ui.router','ngSanitize', 'ngAnimate' ]);



myApp.config (function ($asideProvider) {
    angular.extend ($asideProvider.defaults, {
        animation: 'am-fadeAndSlideLeft',
        /*placement: 'left',*/
        container: 'body',
        html: true
    });
});

myApp.config (function ($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'dd-MMMM-yyyy',
    startWeek: 1
  });
})

myApp.config (function ($stateProvider, $urlRouterProvider) {
    'use strict';    
    $urlRouterProvider.otherwise('/home');    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/partial-home.html'
        })
        .state('about', {
            // we'll get to this in a bit       
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            title: 'Product',
            templateUrl: 'partials/partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            title: 'Paragraph',
            template: 'I could sure use a drink right now.'
        })
});


