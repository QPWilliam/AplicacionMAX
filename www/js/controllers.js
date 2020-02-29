angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {
  $scope.login = {}

  $scope.Obtener = function(x){
    console.log(x)
  }
})


.controller('RegisterCtrl', function($scope) {
  $scope.Obtener = function(Register){
    firebase.auth().createUserWithEmailAndPassword(Register.Email, Register.Password).then(function callback(y){
        iziToast.success({
            title: 'OK',
            message: 'You have registered!',
        });

        firebase.database().ref('users/' + y.user.uid).set({
          username: Register.Username,
          email: Register.Email,
          uid: y.user.uid,
        });

        firebase.auth().signOut().then(function() {
          console.log("Sing Out Complete")

        }).catch(function(error) {
          // An error happened.
        });
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      iziToast.error({
            title: 'Ohh!',
            message: 'You have done wrong!',
        });
    });

  }
})

.controller('DashCtrl', function($scope, Categorias) {
  $scope.categorias = Categorias.all();
  $scope.remove = function(chat) {
    Categorias.remove(categoria);
  };
})

.controller('SubcategoriasCtrl', function($scope, $stateParams, Categorias) {
  $scope.categoria = Categorias.get($stateParams.categoriaId);

  $scope.subcategoriasTV = [
    {NombreProducto: "4K / UHD"},
    {NombreProducto: "OLED"},
    {NombreProducto: "QLED 4K / 8K"},
    {NombreProducto: "NanoCell"},
    {NombreProducto: "Pantalla Grande"},
    {NombreProducto: "Todas las TVs"}
  ]

})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
