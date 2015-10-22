dialecteService.get().then(function(res){
		$scope.dialectes = res.data;
	});
}