// create the module and name it scotchApp
var scotchApp = angular.module('Portfolio', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider
    
    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'MainController'
        })
    // route for the work page
        .when('/work', {
            templateUrl : 'pages/work.html',
            controller  : 'WorkController'
        })
    // route for the bio page
        .when('/bio', {
            templateUrl : 'pages/bio.html',
            controller  : 'BioController'
        })
    // route for the updates page
        .when('/updates', {
            templateUrl : 'pages/updates.html',
            controller  : 'UpdatesController'
        })

    // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'ContactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('MainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('WorkController', function($scope) {
    $scope.message = 'Showing off my work mofocas';
});

scotchApp.controller('BioController', function($scope) {
    $scope.message = 'Watch me Whip!! Watch me Nae Nae!!';
});
    
scotchApp.controller('UpdatesController', function($scope) {
    $scope.message = 'Find out more about me';
});
    
scotchApp.controller('ContactController', function($scope) {
    $scope.message = 'Contact me';
});

    