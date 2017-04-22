//组件和指令模块
;
(function() {
	var directives = angular.module("directives", []);
	//头部
	directives.directive("newheader", function() {
		return {
			templateUrl: "./directives/newheader.html"
		}
	});
	//底部
	directives.directive("newfooter", function() {
		return {
			templateUrl: "./directives/newfooter.html"
		}
	});
	//轮播图
	directives.directive("canrousel", function() {
		return {
			templateUrl: "./directives/canrousel.html",
			link: function(scope, ele, attr) {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			}
		}
	});
	//新闻列表
	directives.directive("newlist", function() {
		return {
			templateUrl: "./directives/newlist.html",
		}
	});
	//loading
	directives.directive("newloading",function(){
		return {
			templateUrl:"./directives/newloading.html"
		}
	});
	//查询搜索
	directives.directive("newsearch",function(){
		return {
			templateUrl:"./directives/search.html"
		}
	});
})();