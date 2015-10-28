function pussyController($scope,$rootScope, socketService){
        $scope.messages = [];
    
        $scope.user = $rootScope.user;
        // Connexion au pussy
        socketService.emit('nouveau_client', $scope.user.pseudo, function(){
            $scope.messages.push({
                user: $scope.user.pseudo,
                message: $scope.message,
                date: new Date()
            });
        });

        // Quand on reçoit un message, on l'insère dans la page
        socketService.on('nouveau_message', function(data) {
            $scope.messages.push({
                user:data.pseudo,
                message: data.message,
                date: new Date()
            });
        })
            
    
        $scope.sendMessage = function(){
            $scope.messages.push({
                user:$scope.user.pseudo,
                message: $scope.message
            });
            socketService.emit('message', $scope.message);
        }
            

            // Quand un nouveau client se connecte, on affiche l'information
            socketService.on('nouveau_client', function(pseudo) {
                //
            })

}