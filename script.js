  var num = 200; //number of pixels before modifying styles

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {
          $('.menu').addClass('fixed');
      } else {
          $('.menu').removeClass('fixed');
      }
  });

  var app = angular.module("myApp", ["ngRoute"]);
  app.config(function($routeProvider) {
      $routeProvider
      .when("/", {
          templateUrl : "main.html"
      })
      .when("/shop", {
          templateUrl : "shop.html"
      })
      .when("/about", {
          templateUrl : "about.html"
      })
      .when("/credits", {
          templateUrl : "credits.html"
      });
  });

function toggle(id) {
  // Style this element
  stylethis(id);

  //Neutralise other elements
  if(id == "homeselect") {
    neutralisethis("shopselect");
    neutralisethis("aboutselect");
    neutralisethis("creditsselect");
  }
  else if(id == "shopselect") {
    neutralisethis("homeselect");
    neutralisethis("aboutselect");
    neutralisethis("creditsselect");
  }
  else if(id == "aboutselect") {
    neutralisethis("homeselect");
    neutralisethis("shopselect");
    neutralisethis("creditsselect");
  }
  else if(id == "creditsselect") {
    neutralisethis("homeselect");
    neutralisethis("shopselect");
    neutralisethis("aboutselect");
  }
}

function stylethis(id) {
    $("#" + id).addClass("selected");
}
function neutralisethis(id) {
    $("#" + id).removeClass("selected");
}
