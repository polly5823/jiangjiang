function navChange(){}var myApp=angular.module("myApp",["ngRoute"]);myApp.config(["$routeProvider","$locationProvider",function(a,t){t.hashPrefix(),a.when("/home",{controller:"hCtrl",templateUrl:"views/home.html"}).otherwise({redirectTo:"/home"})}]),myApp.controller("hCtrl",["$scope","$http",function(a,t){new Swiper(".swiper-container",{pagination:".swiper-pagination",paginationClickable:!0,autoplay:3e3});t.get("data/home.json").success(function(t){a.data1=t.xian_data,a.data2=t.zx_data,a.data3=t.chang_data,a.data4=t.qi_data,a.data5=t.zi_data,a.data6=t.ya_data,a.data7=t.ji_data,a.data8=t.yin_data,a.data9=t.like_data})}]),navChange();