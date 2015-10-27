function profilController($scope, $routeParams, $location, utilisateurService) {
	$scope.title = "Profil Utilisateur";

	// $scope.showModal = false;
 //    $scope.toggleModal = function(){
 //        $scope.showModal = !$scope.showModal;
 //    };


	utilisateurService.getById($routeParams.id).then(function(res){
		$scope.utilisateur = res.data;
	});

	
	$scope.editer = function() {
		utilisateurService.update($scope.utilisateur.id, $scope.utilisateur).then(function(res){
			if (res.status == "200"){
				$location.path("/admin");
			}
		});
	}

	$scope.supprimer = function(utilisateur){
		utilisateurService.delete(utilisateur.id);
	} 
}