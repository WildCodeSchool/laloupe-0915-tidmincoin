// dialecte SERVICE
function dialecteService($http) {
		return {
			get : function() {
				return $http.get('/dialectes');
			},
			update : function(id, data){
				return $http.put('/dialectes/' + id, data);
			},
			create : function(data) {
				return $http.post('/dialectes', data);
			},
			delete : function(id) {
				return $http.delete('/dialectes/' + id);
			}
		}
};