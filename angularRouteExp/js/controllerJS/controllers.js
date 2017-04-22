//控制器模块
;
(function() {
	var controllers = angular.module("controllers", []);
	controllers.controller("indexCtrl", ["$scope", function($scope) {
		$scope.name = "E-Gree";
//		console.log("ok");
		//默认的选项
		$scope.item = 0;
		$scope.itemOn = function(item) {
			$scope.item = item;
		}
	}]);
	controllers.controller("commendCtrl",["$scope", "$http","$timeout",function($scope, $http,$timeout) {
		$scope.title = "推荐";
		//默认显示第一页
		$scope.page = 0;
		$scope.news = [];
		
		//控制loading
		$scope.isLoading = false;
		$scope.loadMore = function() {
			$scope.isLoading = true;
			$timeout(function(){
				$http({
					url:"http://route.showapi.com/109-35",
					method:"GET",
					params:{
						showapi_appid:"26916",
						showapi_sign:"72fa78be4c2045138d456456fb9a3a90",
						channelId:"5572a108b3cdc86cf39001cd",
						page:1
					}
	//				url: "./api/news.json",
	//				method: "GET",
	//				params: {
	//					channel_id: 6,
	//					page: $scope.page++
	//				}
				}).then(function(data) {
	//				$scope.news = $scope.news.concat(data.data.news_list);
	//				console.log(data.data.showapi_res_body.pagebean)
					$scope.isLoading = false;
					$scope.news = $scope.news.concat(data.data.showapi_res_body.pagebean.contentlist);
				})
			},1000)
		}
		$scope.loadMore();
		//弹窗
		$scope.isShowdialog = false;
		$scope.showdialog = function(){
			console.log("1")
			$scope.isShowdialog = true;
		}
		//控制搜索框
		$scope.isShowSearchBar = false;
		$scope.showSearchBar = function(){
			$scope.isShowSearchBar = true;
		}
		//搜索框清空
		$scope.searchName = ""
		$scope.searchClear = function(){
			$scope.searchName = ""
		};
		//搜索框搜索
		
		
	}])
	controllers.controller("detailCtrl",["$scope","$location","$http","$state",function($scope,$location,$http,$state) {
		console.log($location.search());
//		console.log($state.params);
		$http({
//			url:"//route.showapi.com/109-35",
//			method:"GET",
//			params:{
//				showapi_appid:"26916",
//				showapi_sign:"72fa78be4c2045138d456456fb9a3a90",
////				channelId:"5572a108b3cdc86cf39001cd",
//				page:1,
////				id:$state.params.channelId
//			}
			url:"./api/detail.json",
			method: "GET",
			params:{
				id:$state.params.id
			}
		}).then(function(data){
			console.log(data);
//			$scope.newData = data.data.showapi_res_body.pagebean.contentlist[0];
			$scope.newData = data.data.news_list[0]
		})
		//默认隐藏预览图片组件
		$scope.isShowGallery = false;
		$scope.showGallery = function(){
			$scope.isShowGallery = true;
		}
	}])
	controllers.controller("entertainCtrl",["$scope",function($scope) {
		$scope.title = "娱乐"
	}])
})();