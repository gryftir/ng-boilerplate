define(["angular"],function(e){"use strict";e.module("ng-boilerplate.name-directive",["ng-boilerplate.name-service"]).directive("nameFormat",["NameService",function(e){return{scope:{value:"="},template:'<span class="name">{{ formattedValue }}</span>',link:function(a){a.$watch("value",function(n){a.formattedValue=n&&n.length?"Well "+e.formatName(n)+",":""})}}}])});