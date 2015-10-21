function dialectesController($scope, dialecteService) {
	$scope.title = 'liste des dialectes enregistrés';

	function load(){
		dialecteService.get().then(function(res){
			$scope.tdialecte = res.data;
		});
	}

	$scope.add = function(){
		var data = {};
		data.message = $scope.message;
		
		dialecteService.create(data).then(function(res){
			load();
		});

	}


	load();
}