var app = angular.module('app1', ['lbServices']);


app.controller('app1Controller',
	['$scope','Todo',
function($scope,Todo) {

	$scope.newTodo={
		name:"",
		desc:"",
		important:false
	}

}]);