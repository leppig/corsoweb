var app = angular.module('app1', ['lbServices']);


app.controller('app1Controller',
	['$scope','Todo','$http',
function($scope,Todo,$http) {
	$scope.todos=[];
	$scope.todosdone=[];

	$scope.newTodo={
		name:"",
		desc:"",
		important:false
	}

 $scope.aggiungitodo=function(){
 /*	Todo.upsert()*/
 	console.log("Aggiungo: %o",$scope.newTodo);
 }

 $scope.cancellatodo=function(idtodo){
 /*
 	$http({
 		method: 'DELETE',
 		url:   '127.0.0.1:3000' + "/todo/id:"+idtodo
 	}).
 	then(function(){console.log("OK")}, function(){console.log("KO")});

 		 	console.log("cancello: %o",idtodo);
 */
 };

 $scope.eseguitodo=function(idtodo){
 	for(i=0;$scope.todos.length;i++){
 		if($scope.todos[i].id=idtodo){
 			$scope.todos[i].done=true;
 			Todo.upsert($scope.todos[i]).$promise.then(getTodos());
 		
 			console.log("richiama getTodos()")
 			//getTodos();
 			break;
 		}
 	}
 	
 	
 	console.log("esegui: %o",idtodo);
 }


 function getTodos(){
	$scope.todos=[];
 			$scope.todosdone=[];
Todo
	.find()
	.$promise
	.then(function(results){
		for(i=0;i<results.length;i++){
			if(results[i].done===false){
				$scope.todos.push(results[i]);
			} else {
				$scope.todosdone.push(results[i]);
			}
		}
	//	$scope.todos=results;
	//	console.log("%o", $scope.todos);
	//	console.log("%o",$scope.todosdone);
	})

 }
 getTodos();
}]);