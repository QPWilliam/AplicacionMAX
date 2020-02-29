angular.module('starter.categories', [])

.factory('Categorias', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categorias = [
  {id: 0,name: 'TV y Video',img: 'img/productos/img0.jpg'},
  {id: 1,name: 'Celulares',img: 'img/productos/img1.jpg'},
  {id: 2,name: 'Linea Blanca',img: 'img/productos/img2.jpg'},
  {id: 3,name: 'Videojuegos',img: 'img/productos/img3.jpg'},
  {id: 4,name: 'Electrodomésticos',img: 'img/productos/img4.jpg'},
  {id: 5,name: 'Computación y Tablets',img: 'img/productos/img5.jpg'},
  {id: 6,name: 'Audio',img: 'img/productos/img6.jpg'},
  {id: 7,name: 'Audio para vehículos',img: 'img/productos/img7.jpg'},
  {id: 8,name: 'Cámaras y Drones',img: 'img/productos/img8.jpg'},
  {id: 9,name: 'Audífonos y Bocinas',img: 'img/productos/img9.jpg'},
  {id: 10,name: 'Prendas Electrónicas',img: 'img/productos/img10.jpg'},
  {id: 11,name: 'Cuidado Personal',img: 'img/productos/img11.jpg'},
  {id: 12,name: 'Ambientadores',img: 'img/productos/img12.jpg'},
  {id: 13,name: 'Hogar Inteligente',img: 'img/productos/img13.jpg'},
  {id: 14,name: 'Contenido Digital',img: 'img/productos/img14.jpg'},
  {id: 15,name: 'Protectores de Voltaje',img: 'img/productos/img15.jpg'},
  {id: 16,name: 'Teléfonos Fijos',img: 'img/productos/img16.jpg'},
  {id: 17,name: 'Bicicletas Eléctricas',img: 'img/productos/img17.jpg'},
  {id: 18,name: 'Hogar',img: 'img/productos/img18.jpg'},
  {id: 19,name: 'Paneles Solares',img: 'img/productos/img19.jpg'}]


  return {
    all: function() {
      return categorias;
    },
    remove: function(categoria) {
      categorias.splice(categorias.indexOf(categoria), 1);
    },
    get: function(categoriaId) {
      for (var i = 0; i < categorias.length; i++) {
        if (categorias[i].id === parseInt(categoriaId)) {
          return categorias[i];
        }
      }
      return null;
    }
  };
});
