requirejs.config(requirejsConfig),require(["angular","angular-route","js/controller/home-controller"],function(e){"use strict";e.module("ngbp",["ngRoute","ngbp.controllers"]).config(["$routeProvider",function(e){e.when("/",{controller:"HomeController",templateUrl:"template/home.html"}).otherwise({redirectTo:"/"})}]);e.bootstrap(document,["ngbp"])});