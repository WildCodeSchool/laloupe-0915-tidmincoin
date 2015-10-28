// app.directive('myOnKeyDownCall', function () {
//     return function (scope, element, attrs) {
//         element.bind("keydown keypress", function (event) {            
//                 scope.$apply(function (){
//                     scope.$eval(attrs.ngEnter);
//                 });
//                 event.preventDefault();
//         });
//     };
// });



function rechercheController($scope, utilisateurService, dialecteService) {
	$scope.title = "inscription d'utilisateurs";

	dialecteService.get().then(function(res){
		$scope.dialectes = res.data;
	});
}