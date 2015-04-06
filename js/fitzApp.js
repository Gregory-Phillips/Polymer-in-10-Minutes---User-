var app = angular.module('fitzApp', [
  'ngRoute','ngMaterial', 'ngAria', 'ngAnimate'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "", controller: "PageCtrl"})
    .when("/portfolio", {templateUrl: "", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "", controller: "PageCtrl"})
    .when("/blog", {templateUrl: "", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "", controller: "PageCtrl"});
}]);
app.controller("ArtOfFitzCtrl", ArtOfFitzCtrl );
