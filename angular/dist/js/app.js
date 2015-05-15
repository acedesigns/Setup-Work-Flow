
/* =======================================================
 *  app.js
 *
 *  http://mgcrea.github.io/angular-strap/
 *  https://scotch.io/tutorials/angularjs-multi-step-form-using-ui-router
 *  https://scotch.io/tutorials/angular-routing-using-ui-router
 *
 * =======================================================
 */

 var angular;
 var myApp = angular.module('aceApp', ['ngAnimate', 'mgcrea.ngStrap', 'ui.router', 
                                        'ngSanitize', 'uiGmapgoogle-maps',
                                        'angular-loading-bar', 'ngTable' , 'ckeditor' ]);


//////////////////////////////////////////////
myApp.config (function ($asideProvider) {
    angular.extend ($asideProvider.defaults, {
        animation: 'am-fadeAndSlideLeft',
        placement: 'left',
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
            'columnOne@about': { 
                templateUrl : 'partials/about-page.html'
            },
            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'partials/table-data.html',
                controller: 'scotchController'
            }
        }
    })
    .state('home.list', {
        url: '/list',
        templateUrl: 'partials/partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
    .state('contact', {
        url: '/contact',
        views : {
            '' : {
            templateUrl: 'partials/partial-contact.html',
            controller: 'contactPage'
            },
            'columnOne@contact' : {
                templateUrl: 'partials/partial-google-map.html'
            },
            'columnTwo@contact' : {
                templateUrl: 'partials/partial-contact-form.html',
                controller : 'formController'
            }
        } 
    })
    .state('contact.profile', {
        url: '/profile',
        templateUrl: 'partials/partial-form-profile.html'
    })
    .state('contact.interests', {
            url: '/interests',
            templateUrl: 'partials/partial-contact-interests.html'
    })
    .state('contact.payment', {
        url: '/payment',
        templateUrl: 'partials/partial-contact-payment.html'
    })
});

