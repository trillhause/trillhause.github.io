// create the module and name it scotchApp

var scotchApp = angular.module('Portfolio', ['ngRoute']);

$(document).ready(function () {
  console.log("ready!");
  //Add full-screen class to main-content
  $('ul.navbar li a.homelink').click(
    function (e) {
      $("#main-content").addClass("make-fullscreen")
    });

  $('ul.navbar li a.otherlinks').click(
    function (e) {
      $("#main-content").removeClass("make-fullscreen")
    });
});