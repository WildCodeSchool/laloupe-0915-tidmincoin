function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/connexion.html',
			controller: 'connexionController'
		})
		
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/formulaire', {
			templateUrl: 'views/formulaire.html',
			controller: 'formulaireController'
		})
		.when('/recherche', {
			templateUrl: 'views/recherche.html',
			controller: 'rechercheController'
		})
		.when('/repertoire', {
			templateUrl: 'views/repertoire.html',
			controller: 'repertoireController'
		})
		.when('/repertoire/:id',{
			templateUrl: 'views/profil.html',
			controller: 'profilController'
		})
		.when('/dialectes', {
			templateUrl: 'views/dialectes.html',
			controller: 'dialectesController'
		})		
		.otherwise('/')
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
    .controller('connexionController', connexionController)
    .controller('formulaireController', formulaireController)
    .controller('repertoireController', repertoireController)
	.controller('rechercheController', rechercheController)
    .controller('profilController', profilController)
    .controller('dialectesController', dialectesController)
    .service('utilisateurService', utilisateurService)
    .service('dialecteService', dialecteService)
    /*.factory('', )*/
    .run(run);