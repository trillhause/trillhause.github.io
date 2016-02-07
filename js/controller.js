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

angular.module('Portfolio').controller('WorkController', ['$sce', function ($sce) {
  this.message = 'Project Showcase';
  this.image = 0;
  this.setImage = function (value) {
    this.image = value;
  }
  this.projects = [
    {
      title: "Bricks and Bytes",
      content: $sce.trustAsHtml("<em>Bricks & Bytes was awarded second place at PCH Hackathon</em> <br><br>Bricks & Bytes is an innovative hardware platform that allows children to learn logic of programming, without the language. <br><br>Bricks & Bytes was developed at PCH Hackathon in a collaboration with seven other mechatronics student. Project includes 7 interchangeable modules that stimulates computer science concepts with real I/O feedback. <br><br>Each module called brick contains an Arduino micro-controller board to manage peripherals and UART communication, with a  designated \"transmitter\" module relaying information to an Android/iOS device via Bluetooth 2.0. (Communication between bricks are established using UART with the last brick transmitting any results to an Android/iOS application via Bluetooth.) <br><br>The purpose of the project was to make programming feel more intuitive and organic, allowing young users to familiarize themselves with the fundamental principles of the software development such as control flow and debugging."),
      images: [
        {
          id: 0,
          source: "img/bricksandbytes/1.jpg"
        },
        {
          id: 1,
          source: "img/bricksandbytes/2.jpg"
        },
        {
          id: 2,
          source: "img/bricksandbytes/3.jpg"
        },
        {
          id: 3,
          source: "img/bricksandbytes/4.jpg"
        },
        {
          id: 4,
          source: "img/bricksandbytes/5.jpg"
        },
        {
          id: 5,
          source: "img/bricksandbytes/6.jpg"
        },
      ],
    },
    {
      title: "uClicker",
      content: $sce.trustAsHtml("uClicker is a portable hardware platform that allows students to answer iClicker questions from their phones. <br><br> uClicker was developed at Hack The North 2015 in collaboration with two other engineering students. It uses an Arduino micro-controller board, an RF Link transmitter and an RF Link receiver. <br><br>When the user selects an option (options can be selected using an Android app), signals are sent to the iClicker base station using the RF Link transmitter. The RF Link receiver then reads data from the base station and other iClickers which adds more features like finding  the most selected answer, mass changing/randomizing other student's answers, jamming signals during a question, etc. Using our open source platform, users are able to hack and customize their uClicker with desired functionalities. <br><br>The purpose of this project was to find an affordable alternative to iClicker and now it is possible with uClicker."),
    },

  ];
}]);

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