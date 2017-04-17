var app = angular.module("demo",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state("html",{
		url:"/html",
		templateUrl:'template/html.html'
	}).state("html.page1",{
		url:'/page1',
		templateUrl:'template/page1.html',
		controller:'page1Ctrl'
	})
	//第三路由
	.state("html.page1.a",{
		url:'/a',
		templateUrl:'template/page1A.html'
	}).state('html.page1.b',{
		url:'/b',
		templateUrl:'template/page1B.html'
	}).state('html.page1.c',{
		url:'/c',
		templateUrl:'template/page1C.html'
	})
	
	//第二路由
	.state('html.page2',{
		url:'/page2',
		templateUrl:'template/page1.html',
		controller:'page2Ctrl'
	}).state('html.page3',{
		url:'/page3',
		templateUrl:'template/page1.html',
		controller:'page3Ctrl'
	})
	.state('about',{
		url:'/about',
		templateUrl:'template/about.html',
		controller:'aboutCtrl'
	})
	
	$urlRouterProvider.when('','/html/page1/a')
});
app.controller("page1Ctrl",function($scope){
	$scope.arr = [{
		url:'#!/html/page1/a',
		name:'a'
	},{
		url:'#!/html/page1/b',
		name:'b'
	},{
		url:'#!/html/page1/c',
		name:'c'
	}]
})
app.controller("page2Ctrl",function($scope){
	$scope.arr = [{
		url:'#!/html/page1/a',
		name:'aaa'
	},{
		url:'#!/html/page1/b',
		name:'bbb'
	},{
		url:'#!/html/page1/c',
		name:'ccc'
	}]
})
app.controller("page3Ctrl",function($scope){
	$scope.arr = [{
		url:'#!/html/page1/a',
		name:'aaaa'
	},{
		url:'#!/html/page1/b',
		name:'bbbb'
	},{
		url:'#!/html/page1/c',
		name:'cccc'
	}]
});
app.controller("aboutCtrl",function($scope){
	$scope.title = "关于我们"
})
app.directive('w3nav', function() {
	return {
		templateUrl: "directive/w3nav.html"
	}
})

app.directive('w3cheader', function() {
	return {
		templateUrl: "directive/w3cHeader.html"
	}
})
app.directive('w3foot', function() {
	return {
		templateUrl: "directive/w3foot.html"
	}
})