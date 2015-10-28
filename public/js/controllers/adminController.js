function adminController($scope, $http, utilisateurService, dialecteService) {
/*function repertoireController($scope, utilisateurService) {*/
	/*$scope.title = "Liste d'utilisateurs";*/

	$scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };


	function load(){
		utilisateurService.get().then(function(res){
			$scope.utilisateurs = res.data;
		});
	}


	$scope.supprimer = function(utilisateur){
		utilisateurService.delete(utilisateur.id).then(function(res){
			load();
		});
	} 


	load();
/*}*/

/*function dialectesController($scope, $http, dialecteService) {*/
	/*$scope.title = "Liste des dialectes";*/
	
	function loade(){
		dialecteService.get().then(function(res){
			$scope.dialectes = res.data;
		});
	}

	$scope.add = function(){
		var data = {};
		data.dialecte = $scope.dialecte;
		
		dialecteService.create(data).then(function(res){
			loade();
		});

	}


	loade();
}