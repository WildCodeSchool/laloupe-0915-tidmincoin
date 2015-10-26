function dialectesController($scope, $http, dialecteService) {
	$scope.title = "Liste des dialectes";
	
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
