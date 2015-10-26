function connexionController($scope, $location, utilisateurService) {
	$scope.title = "page de connexion";



	$scope.connexion = function() {
		var login = {};
		login.pseudo = $scope.pseudo;
		login.motdp = $scope.motdp;
		utilisateurService.checkLog(login).then(function(res){
			//SUCCESS
			$location.path('/repertoire')
		}, function(res){
			//ERROR
			alert("Erreur");
		});
		// if pseudo = 'administrateur'
		// 	prompt('administrateur');
	};

	// $scope.verification = function() {
	// 	var logadmin = {};
	// 	logadmin.pseudo = $scope.pseudo;
	// 	logadmin.motdp = $scope.motdp;
		
	// }
}
