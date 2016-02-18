//Configure our routes
angular.module('Portfolio').config(function ($routeProvider) {
  $routeProvider
  // route for the home page

    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    // route for the work page
    .when('/work', {
      templateUrl: 'pages/work.html',
      controller: 'WorkController',
      controllerAs: 'work'
    })
    // route for the bio page
    .when('/bio', {
      templateUrl: 'pages/bio.html',
      controller: 'BioController',
      controllerAs: 'bio'
    })
    // route for the blog page
    .when('/blog', {
      templateUrl: 'pages/blog.html',
      controller: 'BlogController',
      controllerAs: 'blog'
    })
    // route for the contact page
    .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })
    .when('/thankyou', {
      templateUrl: 'pages/thankyou.html',
      controller: 'ThankController',
      controllerAs: 'thank'
    })
    .when('/articles/:siteID', {
      templateUrl: function (urlattr) {
        console.log(urlattr.siteID);
        return 'pages/articles/' + urlattr.siteID + '.html';
      },
      controller: 'ArticleController',
      controllerAs: 'article'
    })
    .otherwise({
      templateUrl: 'pages/404.html'
    });
});