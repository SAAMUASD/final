// Suponiendo que el JSON está almacenado en una variable llamada "menuJSON"
var menuJSON = [
    {
      "nombre": "Pagina HTML",
      "url": "https://saamuasd.github.io/htm-simple-page/"
    },
    {
      "nombre": "102 ETIQUETAS",
      "url": "https://saamuasd.github.io/102-etiquetas-html/",
    },
    {
      "nombre": "MENU DESPLEGABLE",
      "url": "https://saamuasd.github.io/menu/"
    },
    {
      "nombre": "MENU DINAMICO",
      "url": "https://saamuasd.github.io/dinamico/"
    },
    {
      "nombre": "CEDULA",
      "url": "https://saamuasd.github.io/validar_cedula/"
    },
    {
      "nombre": "FORMULARIO VARIAS PAGINAS",
      "url": "https://saamuasd.github.io/formulario/"
    },
    {
      "nombre": "CODIGO QR",
      "url": "https://saamuasd.github.io/qr/"
    },
    {
      "nombre": "GRAFICOS",
      "url": "https://saamuasd.github.io/grafico/"
    },
    {
      "nombre": "FORMULARIO DB",
      "url": "https://github.com/SAAMUASD/formulariodb.git"
    }
  ];

var menuContainer = document.getElementById('menu');

// generando el menu
menuJSON.forEach(function(item) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.textContent = item.nombre;
  a.href = item.url;
  a.target = "_blank";
  li.appendChild(a);
  li.classList.add('nav-item.active');
  a.classList.add('nav-link');

   menuContainer.appendChild(li);
});
