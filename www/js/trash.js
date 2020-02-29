$scope.categordsdsias = [{
  NombreCategoria: "TV y Video",
  subcategorias:[{
    NombreSubcategoria: "Televisores",
    productos:[{
      NombreProducto: "4K / UHD",
      NombreProducto: "OLED",
      NombreProducto: "QLED 4K / 8K",
      NombreProducto: "NanoCell",
      NombreProducto: "Pantalla Grande",
      NombreProducto: "Todas las TVs"
    }]
  },{
    NombreSubcategoria: "Video y audio para TV",
    productos:[{
      NombreProducto: "Barras de sonido",
      NombreProducto: "Cines en casa",
      NombreProducto: "Reproductores DVD/Bluray",
      NombreProducto: "Roku"
    }]
  }]
},{
  NombreCategoria: "Celulares",
  subcategorias:[{
    NombreSubcategoria: "Tipo de Celular",
    productos:[{
      NombreProducto: "Prepago",
      NombreProducto: "Liberados",
      NombreProducto: "Accesorios para celulares"
    }]
  },{
    NombreSubcategoria: "Operador",
    productos:[{
      NombreProducto: "Tigo",
      NombreProducto: "Claro",
      NombreProducto: "Movistar"
    }]
  }]
}]

.controller('Dasjdsjl', function($scope) {
  //Pues las categorias principales
  $scope.categorias = [{
    NombreCategoriaTV: "TV y Video"
  },{
    NombreCategoriaCel: "Celulares"
  }]



  $scope.subcategorias = [
    {NombreSubcategoriaTV1: "Televisores"},
    {NombreSubcategoriaTV: "Video y audio para TV"}
  ]



  $scope.productos = [
    {NombreProductoTV1: "4K / UHD"},
    {NombreProductoTV1: "OLED"},
    {NombreProductoTV1: "QLED 4K / 8K"},
    {NombreProductoTV1: "NanoCell"},
    {NombreProductoTV1: "Pantalla Grande"},
    {NombreProductoTV1: "Todas las TVs"}
  ]
})
