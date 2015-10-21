function mainController($scope, $http, dialecteService) {
	$scope.title = "dialecte List";
	
	function load(){
		dialecteService.get().then(function(res){
			$scope.dialectes = res.data;
		});
	}

	$scope.add = function(){
		var data = {};
		data.dialecte = $scope.dialecte;
		
		dialecteService.create(data).then(function(res){
			load();
		});

	}


	load();
}
