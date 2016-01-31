// configure our routes
angular.module('Portfolio').config(function ($routeProvider) {
  $routeProvider

  // route for the home page
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'MainController'
    })
    // route for the work page
    .when('/work', {
      templateUrl: 'pages/work.html',
      controller: 'WorkController'
    })
    // route for the bio page
    .when('/bio', {
      templateUrl: 'pages/bio.html',
      controller: 'BioController'
    })
    // route for the updates page
    .when('/updates', {
      templateUrl: 'pages/updates.html',
      controller: 'UpdatesController'
    })
    // route for the contact page
    .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'ContactController'
    })
    // route for the contact page
    .otherwise({
      templateUrl: 'pages/404.html'
    });
});