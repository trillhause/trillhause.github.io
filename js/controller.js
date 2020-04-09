// create the controller and inject Angular's $scope
angular.module('Portfolio').controller('HomeController', function () {
  // create a message to display in our view
  this.message = 'Description';
//  this.texttyping = ["Tech Entrepreneur and Enthusiast^4000", "Mechatronics Engineer, University of Waterloo^4000", "Specialized in AI and Robotics^4000" ]
  this.texttyping = ["Toronto^4000", "Tron 19, UWaterloo^4000"]
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
      title: "Pixel agent",
      content: $sce.trustAsHtml("This paper applies various reinforcement learning techniques to a side scrolling game called Pixelcopter, namely Q tables with sparse and dense discretization as well as Double Deep Q Learning. The motivation is to characterize and understand the Artificial Neural Network based improvements to table based Q-learning agents in continuous state domains.<br><br> In the Pixelcopter environment, we conduct experiments with each reinforcement learning agent to quantify and compare performance with respect to reward, model convergence time, and model size. We also explore Q table discretization issues that deep Q learning agents avoid to achieve significantly better performance. The results demonstrate the potential of deep Q learning for reinforcement learning in applications with continuous domains with high dimensionality, such as autonomous navigation. <br><br><a href='https://github.com/millingab/pixelcopter-rl/blob/master/pixelcopter_rl.pdf' target=\"_blank\">Learn More</a> <br>"),
      current: 0,
      images: [
           {
          id: 0,
          isVideo: false,
          tSource: "img/pixel-agent/1_s.png",
          source: "img/pixel-agent/1.png"
        },
        {
          id: 1,
          isVideo: false,
          tSource: "img/pixel-agent/2_s.png",
          source: "img/pixel-agent/2.png"
        },
      ]
    },
    {
      title: "Raven",
      content: $sce.trustAsHtml("Drones have pushed the boundary of visual data collection in the past decade. Industries are relying on drones more than ever for large-scale data collection through monitoring. Raven explores industrial drone applications of a drone beyond monitoring. <br><br>Raven reconstructs a 3D model using multiview 2D images of a structure. It can be implemented on a drone to scan a structure via a flyby.  Raven uses segmentation to identify the structure and performs stereo reconstruction using volumetric graph cuts on the visual hull to create the 3D model. A 3D reconstruction like Raven can be used in industries like – mining, construction, movie production, gaming, etc.<br><br><em>Note: One can explore the possible drone applications by thinking of it as an automated camera rig.</em><br><br> <a href='https://github.com/millingab/multiview-stereo/blob/master/Project.ipynb' target=\"_blank\">Learn More</a> <br>"),
      current: 0,
      images: [
        {
          id: 0,
          isVideo: false,
          tSource: "img/raven/1_s.jpg",
          source: "img/raven/1.jpg"
        },
        {
          id: 1,
          isVideo: false,
          tSource: "img/raven/2_s.jpg",
          source: "img/raven/2.jpg"
        },
        {
          id: 2,
          isVideo: false,
          tSource: "img/raven/3_s.jpg",
          source: "img/raven/3.jpg"
        },
        {
          id: 3,
          isVideo: false,
          tSource: "img/raven/4_s.jpg",
          source: "img/raven/4.jpg"
        }
      ]
    },
    {
      title: "deeps",
      content: $sce.trustAsHtml("LIDARs are great for localizing and mapping but they are quite expensive and this drives up the cost of a car significantly. Consumer facing companies like Tesla and Comma.ai thus have to rely on cameras and sensors to make the vehicle autonomous. There is a great value for the autonomous industry in training computers from a video input.<br><br> deeps tries to solves that. It uses optical flow analysis and convolutional neural networks to estimate the speed of a car from dashcam footage. It uses OpenCV  for video processing and optical flow analysis and implements an end to end architecture based on <a href='https://arxiv.org/pdf/1604.07316v1.pdf' target='_blank'>Nvidia’s paper</a> for training.<br><br> Check out the <a href='https://github.com/millingab/deeps/blob/master/Full%20Article.md' target=\"_blank\">full article</a> to learn more about the data processing and training parameters used in deeps.<br><br><em>According to Comma.ai, a Mean Square Error (MSE) of 3 mph is considered as an exceptional performance. deeps final MSE on the test set was 3.4 mphs</em><br><br> <a href='https://github.com/millingab/deeps' target=\"_blank\">Learn More</a> <br>"),
      current: 0,
      images: [
        {
          id: 0,
          isVideo: false,
          tSource: "img/deeps/1_s.jpg",
          source: "img/deeps/1.jpg"
        },
        {
          id: 1,
          isVideo: false,
          tSource: "img/deeps/2_s.jpg",
          source: "img/deeps/2.jpg"
        },
        {
          id: 2,
          isVideo: false,
          tSource: "img/deeps/3_s.jpg",
          source: "img/deeps/3.jpg"
        },
        {
          id: 3,
          isVideo: false,
          tSource: "img/deeps/4_s.jpg",
          source: "img/deeps/4.jpg"
        },
        {
          id: 4,
          isVideo: true,
          tSource: "img/deeps/0_s.jpg",
          vsource: $sce.trustAsResourceUrl("https://www.youtube.com/embed/LUTn_I52SMQ?controls=2"),
        },
        {
          id: 5,
          isVideo: false,
          tSource: "img/deeps/5_s.jpg",
          source: "img/deeps/5.jpg"
        },
        {
          id: 6,
          isVideo: false,
          tSource: "img/deeps/6_s.jpg",
          source: "img/deeps/6.jpg"
        },
        {
          id: 7,
          isVideo: false,
          tSource: "img/deeps/7_s.jpg",
          source: "img/deeps/7.jpg"
        }
      ]
    },
    {
      title: "Bricks and Bytes",
      content: $sce.trustAsHtml("<em>Bricks & Bytes was awarded second place at PCH Hackathon</em> <br><br>Bricks & Bytes is an innovative hardware platform that allows children to learn logic of programming, without the language. Bricks & Bytes was developed at PCH Hackathon in a collaboration with seven other mechatronics student. Project includes 7 interchangeable modules that simulates computer science concepts with real I/O feedback. <br><br>Each module called brick contains an Arduino micro-controller board to manage peripherals and UART communication, with a  designated \"transmitter\" module relaying information to an Android/iOS device via Bluetooth 2.0. (Communication between bricks are established using UART with the last brick transmitting any results to an Android/iOS application via Bluetooth.) <br><br>The purpose of the project was to make programming feel more intuitive and organic, allowing young users to familiarize themselves with the fundamental principles of the software development such as control flow and debugging.<br><br> <a href='https://twitter.com/search?q=bricks%20%26%20bytes%20from%3APCHHackathon&src=typd&lang=en' target=\"_blank\">Learn More</a>"),
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
      content: $sce.trustAsHtml("<em>uClickler won the best reverse engineering hack award at Hack the North </em><br><br>uClicker is a portable hardware platform that allows students to answer iClicker questions from their phones. It is an affordable alternative for students who can't afford an iClicker. It was developed in a collaboration with two other engineering students. It uses an Arduino micro-controller board, and RF Link transmitters and receivers. <br><br> uClicker also incorporates other features like the changing answers of other students, and jamming signals during a question. Users have endless options to customise their uClickers with more functionalities. <br><br> <a href='https://github.com/millingab/uClicker' target=\"_blank\">Learn More</a>"),
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
      title: "Cartora",
      content: $sce.trustAsHtml("Cartora is a location sharing application for guests attending a shared event. The application allows participants of a calendar event to track fellow participants before the event starts. <br><br> The app calculates estimated time of arrival of each participant, notifies the host about late arrivals, reminds the user to leave for the event based on their current location, and provides one tap rideshare to event venue with Uber and Lyft integration. <br><br> <a href='https://github.com/millingab/cartora/wiki' target=\"_blank\">Learn More</a>"),
      current: 0,
      images: [
        {
          id: 0,
          isVideo: false,
          tSource: "img/cartora/0_s.png",
          source: "img/cartora/0.png"
        }
      ]
    },
    {
      title: "Myosic",
      content: $sce.trustAsHtml("<em>Myosic won 'The Best Hack' award at Boilermake hackathon </em><br><br>Simple, elegant and easy to use. This app is a product of hardwork and a strong vision to improve hands free music experience. The visual hierarchy of user interface enriches the app's overall experience by creating a sense of depth. With Myosic, experience music like never before. <br><br> <a href='http://devpost.com/software/myosic-m13n9' target=\"_blank\">Learn More</a>"),
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
      content: $sce.trustAsHtml("<em>Wanderlust received Windows Sponsorship award at YHack. </em><br><br>This multiplayer - motion control - first person shooting game was a inspired by interest in motion control and passion for technology. Utilizing Kinect's powerful skeletal tracking system, we were able to provide game controls purely using body motion. <br><br>Environment for game is created in Unity engine and scripting for environment and players is done in C#. Game servers were hosted on Windows Azure.<br><br> <a href='http://devpost.com/software/wanderlust-rqr0j' target=\"_blank\">Learn More</a>"),
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
      content: $sce.trustAsHtml("<em>Over 300 Tron 2019 sweaters were sold to students of University of Waterloo</em><br><br> A design project initially created to capture the essence of Mechatronics Engineering program at University of Waterloo for the class of 2019. Tron design has now become a sense of pride for all Mechatronics students at the University of Waterloo. It reflects the core concepts of Mechatronics using minimalistic geometry. Everything from selecting the color schemes to the finishing touches is done with excessive attention of detail.<br><br> The design is greatly appreciated by colleagues and friends who represent it with their sweater/hoodie to this day.<br><br> <a href='https://www.instagram.com/explore/tags/tron2019/' target=\"_blank\">Learn More</a>"),
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
}]);
