var app = angular.module('app1', ['lbServices']);


app.controller('app1Controller',
	['$scope','Todo',
function($scope,Todo) {

	$scope.newTodo={
		name:"",
		desc:"",
		important:false
	}
 $scope.aggiungitodo=function(){
 	console.log("Aggiungo: %o",$scope.newTodo);
 }

 $scope.cancellatodo=function(idtodo){
 	console.log("cancello: %o",idtodo);
 }

 $scope.eseguitodo=function(idtodo){
 	console.log("esegui: %o",idtodo);
 }
}]);