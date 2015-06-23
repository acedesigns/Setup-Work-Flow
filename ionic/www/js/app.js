// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// http://devdactic.com/simple-login-example-with-ionic-and-angularjs/
// http://codepen.io/ionic/pen/CbBsA?editors=101
// http://learn.ionicframework.com/formulas/navigation-and-routing-part-1/
// http://www.kdmooreconsulting.com/blogs/authentication-with-ionic-and-angular-js-in-a-cordovaphonegap-mobile-web-application/
// the 2nd parameter is an array of 'requires'

var myApp = angular.module('AceApp', ['ionic']);

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});



myApp.config( function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider.state('login', {
    url           : '/login',
    controller    : 'LogInCtrl',
    templateUrl   : 'views/login.html'
  });

  $stateProvider.state('menu', {
    url           : '/',
    templateUrl   : 'views/menupage.html',
    abstract      : true,
    access: {
      requiredLogin: true
    }
  });

  $stateProvider.state('menu.home', {
    url           : 'home',   
    views         : {
      'menuContent'   : {
        templateUrl   : 'views/homepage.html',
        controller    : 'menuPageCtrl',
        access        : {
          requiredLogin: true
        }
      }
    },
  });

  $stateProvider.state('menu.family', {
    url             : 'family',
    views           : {
      'menuContent'     : {
        templateUrl     : 'views/family.html',
        controller      : 'familyCtrl',
        access          : {
          requiredLogin : true
        }
      }
    }
  });

  $stateProvider.state('menu.friends', {
    url             : 'friends',
    views           : {
      'menuContent'     : {
        templateUrl     : 'views/friends.html',
        controller      : 'friendsCtrl',
        access          : {
          requiredLogin : true
        }
      }
    }
  });
});