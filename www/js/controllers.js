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

.controller('DashCtrl', function($scope,$state,$rootScope, Categorias) {
  $scope.categorias = Categorias.all();
  $scope.remove = function(chat) {
    Categorias.remove(categoria);
  };

  $scope.patoxd = function(x){
    $rootScope.seleccion = x;
    $state.go('tab.subcategorias')  
  }

})

.controller('SubcategoriasCtrl', function($scope, $rootScope,$stateParams, Categorias) {
    
  $rootScope.TitulosSubcategorias = [
    {TituloSubcategoria0: "Televisores", id:0},
    {TituloSubcategoria1: "Video y Audio para TV", id:0},
    {TituloSubcategoria2: "Accesorios", id:0},
  ]

  $rootScope.subcategorias = [
    {NombreProducto: "4K / UHD", id:0},
    {NombreProducto: "OLED",id:0},
    {NombreProducto: "QLED 4K / 8K",id:0},
    {NombreProducto: "NanoCell",id:0},
    {NombreProducto: "Pantalla Grande",id:0},
    {NombreProducto: "Todas las TVs",id:0},
    //Celulares
    {NombreProducto: "4K / UHD", id:1},
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
