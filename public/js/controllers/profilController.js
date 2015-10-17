function profilController($scope, $routeParams, utilisateurService) {
	$scope.title = "Profil Utilisateur";

	// $scope.showModal = false;
 //    $scope.toggleModal = function(){
 //        $scope.showModal = !$scope.showModal;
 //    };


	utilisateurService.getById($routeParams.id).then(function(res){
		$scope.utilisateur = res.data;
	});

	


	$scope.supprimer = function(utilisateur){
		utilisateurService.delete(utilisateur.id).then(function(res){
			load();
		});
	} 
}