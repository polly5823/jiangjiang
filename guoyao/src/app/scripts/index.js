
var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix();
	$routeProvider
		.when("/home",{
			controller:"hCtrl",
			templateUrl:"views/home.html"
		})
		.when("/category_list",{
			controller:"cCtrl",
			templateUrl:"views/category_list.html"
		})
		.when("/search",{
			controller:"sCtrl",
			templateUrl:"views/search.html"
		})
		.when("/mine",{
			templateUrl:"views/mine.html"
		})
		.when("/category_7",{
			controller:"zxCtrl",
			templateUrl:"views/zhongxi.html"
		})
		.when("/cart",{
			templateUrl:"views/cart.html"
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
	$scope.dataArr = [];
    for(var item in localStorage){
        $scope.dataArr.push(JSON.parse(localStorage[item]));
    }
	$scope.nums = function(){
		var a = 0;
		angular.forEach($scope.dataArr,function(item){
			if(item.num){
				a += parseInt(item.num)
			}
		});
		return a;
	}
}]);

myApp.controller("cCtrl",['$scope',function($scope){
	$scope.dataArr = [];
    for(var item in localStorage){
        $scope.dataArr.push(JSON.parse(localStorage[item]));
    }
	$scope.nums = function(){
		var a = 0;
		angular.forEach($scope.dataArr,function(item){
			if(item.num){
				a += parseInt(item.num)
			}
		});
		return a;
	}
}]);

myApp.controller("sCtrl",['$scope',function($scope){
	$scope.back = function(){
		history.back()
	}
}]);

myApp.controller("zxCtrl",['$scope','$http',function($scope,$http){
	$http.get('data/zhongxi.json').success(function(a){
		$scope.data = a.xian_data;
	});
	$scope.clickFn = function(a){
		window.location.href = 'http://127.0.0.1/guoyao/dist/src/app/views/shopmain.html?comId='+a;
//		console.log(a)
	}
	$scope.dataArr = [];
    for(var item in localStorage){
        $scope.dataArr.push(JSON.parse(localStorage[item]));
    }
	$scope.nums = function(){
		var a = 0;
		angular.forEach($scope.dataArr,function(item){
			if(item.num){
				a += parseInt(item.num)
			}
		});
		return a;
	}
}]);

myApp.controller("cartCtrl",['$scope',function($scope){
	
}])




//导航变色
//$(".ft").click(function(){
//	$(this).addClass("active").siblings().removeClass("active"); 
//});

