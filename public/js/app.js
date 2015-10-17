function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/formulaire', {
			templateUrl: 'views/formulaire.html',
			controller: 'formulaireController'
		})
		.when('/repertoire', {
			templateUrl: 'views/repertoire.html',
			controller: 'repertoireController'
		})
		.when('/repertoire/:id',{
			templateUrl: 'views/profil.html',
			controller: 'profilController'
		})
}

function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .controller('formulaireController', formulaireController)
    .controller('repertoireController', repertoireController)
    .controller('profilController', profilController)
    .service('todoService', todoService)
    .service('utilisateurService', utilisateurService)
    /*.factory('', )*/
    .run(run);


