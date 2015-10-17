function repertoireController($scope, utilisateurService) {
	$scope.title = "Liste d'utilisateurs";

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
}