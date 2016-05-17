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
        typeSpeed: 25,
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

angular.module('Portfolio').controller('ThankController', function () {
  this.texttyping = ["THANK YOU^1500", "JE VOUS REMERCIE^1500", "GRACIAS^3000"]
}).directive('typed', function () {
  return {
    restrict: 'E',
    scope: {
      strings: '='
    },
    template: '<span id="typed-output"></span>',
    link: function ($scope, $element, $attrs) {
      var options = {
        strings: $scope.strings,
        typeSpeed: 25,
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

angular.module('Portfolio').controller('WorkController', ['$sce', '$http', function ($sce, $http) {
  var work = this;
  this.setImage = function (project, value) {
    project.current = value;
  }
  this.isNotGallery = function (value) {
    return value === 1;
  }
  this.projects = [
    {
      title: "Bricks and Bytes",
      content: $sce.trustAsHtml("<em>Bricks & Bytes was awarded second place at PCH Hackathon</em> <br><br>Bricks & Bytes is an innovative hardware platform that allows children to learn logic of programming, without the language. Bricks & Bytes was developed at PCH Hackathon in a collaboration with seven other mechatronics student. Project includes 7 interchangeable modules that stimulates computer science concepts with real I/O feedback. <br><br>Each module called brick contains an Arduino micro-controller board to manage peripherals and UART communication, with a  designated \"transmitter\" module relaying information to an Android/iOS device via Bluetooth 2.0. (Communication between bricks are established using UART with the last brick transmitting any results to an Android/iOS application via Bluetooth.) <br><br>The purpose of the project was to make programming feel more intuitive and organic, allowing young users to familiarize themselves with the fundamental principles of the software development such as control flow and debugging.<br><br> <a href='https://twitter.com/search?q=bricks%20%26%20bytes%20from%3APCHHackathon&src=typd&lang=en' target=\"_blank\">&lang;Learn More&rang;</a>"),
      current: 0,
      images: [
        {
          id: 0,
          isVideo: false,
          tSource: "img/bricksandbytes/0s.jpg",
          source: "img/bricksandbytes/0.jpg"
        },
        {
          id: 1,
          isVideo: false,
          tSource: "img/bricksandbytes/1s.jpg",
          source: "img/bricksandbytes/1.jpg"
        },
        {
          id: 2,
          isVideo: false,
          tSource: "img/bricksandbytes/2s.jpg",
          source: "img/bricksandbytes/2.jpg"
        },
        {
          id: 3,
          isVideo: false,
          tSource: "img/bricksandbytes/3s.jpg",
          source: "img/bricksandbytes/3.jpg"
        },
        {
          id: 4,
          isVideo: false,
          tSource: "img/bricksandbytes/4s.jpg",
          source: "img/bricksandbytes/4.jpg"
        },
        {
          id: 5,
          isVideo: false,
          tSource: "img/bricksandbytes/5s.jpg",
          source: "img/bricksandbytes/5.jpg"
        },
        {
          id: 6,
          isVideo: false,
          tSource: "img/bricksandbytes/6s.jpg",
          source: "img/bricksandbytes/6.jpg"
        },
        {
          id: 7,
          isVideo: true,
          tSource: "img/bricksandbytes/7s.jpg",
          vsource: $sce.trustAsResourceUrl("http://www.youtube.com/embed/RUrxql83HLA?controls=2"),
        },
      ],
    },
    {
      title: "uClicker",
      content: $sce.trustAsHtml("uClicker is a portable hardware platform that allows students to answer iClicker questions from their phones. <br><br> uClicker was developed at Hack The North 2015 in collaboration with two other engineering students. It uses an Arduino micro-controller board, an RF Link transmitter and an RF Link receiver. <br><br>When the user selects an option (options can be selected using an Android app), signals are sent to the iClicker base station using the RF Link transmitter. The RF Link receiver then reads data from the base station and other iClickers which adds more features like finding  the most selected answer, mass changing/randomizing other student's answers, jamming signals during a question, etc. Using our open source platform, users are able to hack and customize their uClicker with desired functionalities. <br><br>The purpose of this project was to find an affordable alternative to iClicker and now it is possible with uClicker. <br><br> <a href='https://github.com/millingab/uClicker' target=\"_blank\">&lang;Learn More&rang;</a>"),
      current: 0,
      images: [
        {
          id: 0,
          isVideo: false,
          tSource: "img/uclicker/0s.jpg",
          source: "img/uclicker/0.jpg"
        },
        {
          id: 1,
          isVideo: false,
          tSource: "img/uclicker/1s.jpg",
          source: "img/uclicker/1.jpg"
        },
        {
          id: 2,
          isVideo: false,
          tSource: "img/uclicker/2s.jpg",
          source: "img/uclicker/2.jpg"
        },
        {
          id: 3,
          isVideo: false,
          tSource: "img/uclicker/3s.jpg",
          source: "img/uclicker/3.jpg"
        },
        {
          id: 4,
          isVideo: false,
          tSource: "img/uclicker/4s.jpg",
          source: "img/uclicker/4.jpg"
        },
        {
          id: 5,
          isVideo: false,
          tSource: "img/uclicker/5s.jpg",
          source: "img/uclicker/5.jpg"
        },
      ],
    },
    {
      title: "Myosic",
      content: $sce.trustAsHtml("<em>Myosic won 'The Best Hack' award at Boilermake hackathon </em><br><br>Simple, elegant and easy to use. This app is a product of hardwork and a strong vision to improve hands free music experience. The visual hierarchy of user interface enriches the app's overall experience by creating a sense of depth. With Myosic, experience music like never before. <br><br> <a href='http://devpost.com/software/myosic-m13n9' target=\"_blank\">&lang;Learn More&rang;</a>"),
      current: 0,
      images: [
        {
          id: 0,
          isVideo: false,
          source: "img/myosic/0.png"
        }
      ],
    },
    {
      title: "Wanderlust",
      content: $sce.trustAsHtml("<em>Wanderlust received Windows Sponsorship award at YHack. </em><br><br>This multiplayer - motion control - first person shooting game was a inspired by interest in motion control and passion for technology. Utilizing Kinect's powerful skeletal tracking system, we were able to provide game controls purely using body motion. <br><br>Environment for game is created using  Unity engine and scripting for environment and players is done in C# using Unity Environment. Game servers were hosted on Windows Azure.<br><br> <a href='http://devpost.com/software/wanderlust-rqr0j' target=\"_blank\">&lang;Learn More&rang;</a>"),
      current: 0,
      images: [
        {
          id: 0,
          isVideo: false,
          source: "img/wanderlust/0.jpg"
        },
      ],
    },
    {
      title: "Tron 2019",
      content: $sce.trustAsHtml("<em>Around 300 sweaters with Tron 2019 design bought by Mechatronics Engineering class of 2019 at University of Waterloo. Asked multiple times by other tron classes to design one for their year.</em><br><br> Tron 2019 was a design project undertaken during summer 2015 to create a brand for Mechatronics Engineering class of 2019. This design reflects the core concepts of Mechatronics Engineering while keeping the modern flat design in mind. Everything from selecting color schemes to finishing touches was done with excessive attention of detail.<br><br> Color scheme was this design was a challenges, as I wanted tron 2019 brand to go seamlessly with most popular sweater colors. After a long inspection, I was able to design a perfect color scheme that worked with all the famous sweater colors. <br><br>Tron 2019 was a great success and is greatly appreciated by colleagues and friends to this date. Fellow trons are found wearing tron 2019 sweater/hoodie with pride. I am grateful to be a part of such a amazing movement and happy to bring smiles to hundreds of faces.<br><br> <a href='https://www.instagram.com/explore/tags/tron2019/' target=\"_blank\">&lang;Learn More&rang;</a>"),
      current: 0,
      images: [
        {
          id: 0,
          isVideo: false,
          tSource: "img/tron2019/0s.png",
          source: "img/tron2019/0.png"
              },
        {
          id: 1,
          isVideo: false,
          tSource: "img/tron2019/1s.png",
          source: "img/tron2019/1.png"
                },
        {
          id: 2,
          isVideo: false,
          tSource: "img/tron2019/2s.png",
          source: "img/tron2019/2.png",
        },
        {
          id: 3,
          isVideo: false,
          tSource: "img/tron2019/3s.png",
          source: "img/tron2019/3.png",
        },
        {
          id: 4,
          isVideo: false,
          tSource: "img/tron2019/4s.png",
          source: "img/tron2019/4.png",
        },
        {
          id: 5,
          isVideo: false,
          tSource: "img/tron2019/5s.png",
          source: "img/tron2019/5.png",
        },
      ],
    },
    {
      title: "Desk",
      content: $sce.trustAsHtml("Desk is a photography project conducted during moving houses. It does a excellent job of defining me by demonstration of my quotidian tools. These tools are a extended part of me and are of extreme importance.<br><br> <a href='https://www.instagram.com/p/zbVaPJhTIz/' target=\"_blank\">&lang;Learn More&rang;</a>"),
      current: 0,
      images: [
        {
          id: 0,
          isVideo: false,
          tSource: "img/desk/0s.jpg",
          source: "img/desk/0.jpg"
              },
        {
          id: 1,
          isVideo: false,
          tSource: "img/desk/1s.jpg",
          source: "img/desk/1.jpg"
                },
        {
          id: 2,
          isVideo: false,
          tSource: "img/desk/2s.jpg",
          source: "img/desk/2.jpg",
        }
      ]
    }
  ]
}]);

angular.module('Portfolio').controller('BioController', function () {});

angular.module('Portfolio').controller('ContactController', function () {
    this.texttyping = ["Please fill all fields to submit the form"]
  })
  .directive('type', function () {
    return {
      restrict: 'E',
      scope: {
        strings: '='
      },
      template: '<span id="typed-output"></span>',
      link: function ($scope, $element, $attrs) {
        var options = {
          strings: $scope.strings,
          typeSpeed: 5,
          loop: false,
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

angular.module('Portfolio').controller('BlogController', ['$sce', '$location', '$anchorScroll', function ($sce, $location, $anchorScroll) {
  this.current = null;
  this.setArticle = function (value) {
    this.articles[value].isActive = !this.articles[value].isActive;
    this.set = true;
  }
  this.unsetArticle = function (value) {
    this.articles[value].isActive = !this.articles[value].isActive;
    this.set = false;
  }

  /*this.articles = [
    {
      siteID: "painter-to-engineer",
      title: "Painter to Engineer",
    },
    {
      siteID: "life-is-short",
      title: "Life is Short",
    },
    {
      siteID: "turning-twenty-one",
      title: "Turning Twenty-One",
    },
  ];*/
}]);