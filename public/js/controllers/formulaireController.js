function formulaireController($scope, utilisateurService, dialecteService) {
	$scope.title = "inscription d'utilisateurs";

	$scope.enregistrer = function(){
		var data = {};
		data.nom = $scope.nom;
		data.prenom = $scope.prenom;
		data.genre = $scope.genre;
		data.pseudo = $scope.pseudo;
		data.motdp = $scope.motdp;
       /* console.log();*/
		data.naissance = $scope.naissance;
		data.adresse = $scope.adresse;
		data.cp = $scope.cp;
        data.dialecte = $scope.dialecte;


		utilisateurService.create(data).then(function(res){
			//Success
			$scope.displayMessage = true;
			$scope.message = "OK enregistré";
		}, function(){
			//Error
			$scope.displayMessage = true;
			$scope.message = "T'as pas bin enregistrer ton blaze";
		});
	}

	// $scope.get = function(){
	// 	var data2 = {};
	// 	data2.dialecte = $scope.dialecte;

	// dialecteService.get(data2).then(function(res){});
	// }

	dialecteService.get().then(function(res){
		$scope.dialectes = res.data;
	});
}