
var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix();
	$routeProvider
		.when("/home",{
			controller:"hCtrl",
			templateUrl:"views/home.html"
		})
		.when("/category_list",{
			templateUrl:"views/category_list.html"
		})
		.when("/search",{
			templateUrl:"views/search.html"
		})
		.otherwise({
			redirectTo:'/home'
		})
}]);
myApp.controller('hCtrl',['$scope','$http',function($scope,$http){
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    autoplay: 3000,
	});
	$http.get('data/home.json').success(function(a){
		$scope.data1 = a.xian_data;
		$scope.data2 = a.zx_data;
		$scope.data3 = a.chang_data;
		$scope.data4 = a.qi_data;
		$scope.data5 = a.zi_data;
		$scope.data6 = a.ya_data;
		$scope.data7 = a.ji_data;
		$scope.data8 = a.yin_data;
		$scope.data9 = a.like_data;
	});
}]);




//导航变色
$(".ft").click(function(){
	$(this).addClass("active").siblings().removeClass("active"); 
});

