function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/connexion.html',
			controller: 'connexionController'
		})
        .when('/admin', {
            templateUrl: 'views/admin.html',
			controller: 'adminController'
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
        .when('/pussy', {
            templateUrl: 'views/pussy.html',
            controller: 'pussyController'
        })
		/*.when('/repertoire', {
			templateUrl: 'views/repertoire.html',
			controller: 'repertoireController'
		})
		.when('/repertoire/:id', {
			templateUrl: 'views/profil.html',
			controller: 'profilController'
		})*/
        .when('/admin/:id', {
			templateUrl: 'views/profil.html',
			controller: 'profilController'
		})
		/*.when('/dialectes', {
			templateUrl: 'views/dialectes.html',
			controller: 'dialectesController'
		})*/
		.otherwise('/')
}

function run($rootScope, $location) {
	var path = function() { return $location.path(); };
	$rootScope.$watch(path,function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .controller('connexionController', connexionController)
    .controller('formulaireController', formulaireController)
    .controller('pussyController', pussyController)
    /*.controller('repertoireController', repertoireController)*/
	.controller('rechercheController', rechercheController)
    .controller('profilController', profilController)
    /*.controller('dialectesController', dialectesController)*/
    .controller('adminController', adminController)
    .service('utilisateurService', utilisateurService)
    .service('dialecteService', dialecteService)
    .service('socketService', socketService)
    /*.factory('', )*/
    .run(run);