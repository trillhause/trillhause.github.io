// create the controller and inject Angular's $scope
angular.module('Portfolio').controller('HomeController', function () {
  // create a message to display in our view
  this.message = 'Everyone come and see how good I look!';
  this.texttyping = ["logically minded and creative at heart^5000", "design oriented developer^5000", "street smart engineer^5000"]
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

angular.module('Portfolio').controller('MainController', function () {
  this.message = "Main";
  this.tab = 0;
  this.selectTab = function (value) {
    this.tab = value;
  }
  this.isTab = function (value) {
    return this.tab === value;
  }
});

angular.module('Portfolio').controller('WorkController', function () {
  this.message = 'Project Showcase';
});

angular.module('Portfolio').controller('BioController', function () {
  this.message = 'Nothing';
});

angular.module('Portfolio').controller('UpdatesController', function () {
  this.message = 'Find out more about my life';
});

angular.module('Portfolio').controller('ContactController', ['$http', function ($http) {
  var contact = this;
  this.success = false;
  this.error = false;
  this.visitor = {};
  this.sendMessage = function () {
    $http({
      method: 'POST',
      url: '/php/processContactForm.php',
      data: contact.visitor,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).success(function (data) {
      contact.success = true;
    });
  };
}]);