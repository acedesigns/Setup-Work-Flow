
/* =======================================================
 *  app.js
 *
 * http://mgcrea.github.io/angular-strap/
 *
 * =======================================================
 */

 var angular;
 var myApp = angular.module('aceApp', ['ngAnimate', 'uiGmapgoogle-maps', 'mgcrea.ngStrap', 'ui.router', 'ngSanitize' ]);


//////////////////////////////////////////////
myApp.config (function ($asideProvider) {
    angular.extend ($asideProvider.defaults, {
        animation: 'am-fadeAndSlideLeft',
        /*placement: 'left',*/
        container: 'body',
        html: true
    });
});

//////////////////////////////////////////////
myApp.config (function ($datepickerProvider) {
    angular.extend($datepickerProvider.defaults, {
        dateFormat: 'dd-MMMM-yyyy',
        startWeek: 1
    });
})

//////////////////////////////////////////////
myApp.config (function ($stateProvider, $urlRouterProvider) {
    'use strict';    
    $urlRouterProvider.otherwise('/home');    
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'partials/partial-home.html',
        controller : 'homepage'
    })
    .state('about', {
        url: '/about',
        views: {
            // the main template will be placed here (relatively named)
            '': {
                    templateUrl: 'partials/partial-about.html',
                    controller : 'aboutPage' 
                },
            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Look I am a side column!' },
            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'partials/table-data.html',
                controller: 'scotchController'
            }
        }
    })
    .state('home.list', {
        url: '/list',
        title: 'Product',
        templateUrl: 'partials/partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })
    .state('home.paragraph', {
        url: '/paragraph',
        title: 'Paragraph',
        template: 'I could sure use a drink right now.'
    })
    .state('contact', {
        url: '/contact',
        views : {
            '' : {
            templateUrl: 'partials/partial-form.html',
            controller: 'contactPage'
            },
            'columnOne@contact' : {
                template: 'Google Map will come here'
            },
            'columnTwo@contact' : {
                template: 'A form will come this side'
            }
        }
            
        })
});

