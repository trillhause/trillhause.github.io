// create the controller and inject Angular's $scope
angular.module('Portfolio').controller('MainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

angular.module('Portfolio').controller('WorkController', function ($scope) {
    $scope.message = 'Showing off my work mofocas';
});

angular.module('Portfolio').controller('BioController', function ($scope) {
    $scope.message = 'Watch me Whip!! Watch me Nae Nae!!';
});

angular.module('Portfolio').controller('UpdatesController', function ($scope) {
    $scope.message = 'Find out more about me';
});

angular.module('Portfolio').controller('ContactController', function ($scope) {
    $scope.message = 'Contact me';
});