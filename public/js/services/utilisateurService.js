// utilisateur SERVICE
function utilisateurService($http) {
		return {
			get : function() {
				return $http.get('/utilisateurs');
			},
			getById: function(id) {
				return $http.get('/utilisateurs/' + id);
			},
			update : function(id, data){
				return $http.put('/utilisateurs/' + id, data);
			},
			create : function(data) {
				return $http.post('/utilisateurs', data);
			},
			delete : function(id) {
				return $http.delete('/utilisateurs/' + id);
			}
		}
};