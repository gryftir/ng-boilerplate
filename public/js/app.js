define(["angular","angular-route","js/controller/home-controller"],function(e){"use strict";e.module("ng-boilerplate",["ngRoute","home-controller"]).config(["$routeProvider",function(e){e.when("/",{controller:"HomeController",templateUrl:"public/template/home.html"}).otherwise({redirectTo:"/"})}])});