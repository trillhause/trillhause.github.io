// create the controller and inject Angular's $scope
angular.module('Portfolio').controller('MainController', function ($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
  $scope.texttyping = ["logically minded and creative at heart^5000", "design oriented developer^5000", "street smart engineer^5000"]
}).directive('typedjs', function () {
  return {
    restrict: 'E',
    scope: {
      strings: '='
    },
    template: '<span id="typed-output"></span>',
    link: function ($scope, $element, $attrs) {
      var options = {
        strings: $scope.strings,
        typeSpeed: 40,
        loop: true,
        contentType: "html",
        showCursor: true,
        loopCount: false,
        cursorChar: "_"
      };

      $(function () {
        $("#typed-output").typed(options);
      });
    }
  };
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