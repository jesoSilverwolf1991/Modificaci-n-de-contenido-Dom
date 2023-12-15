function activarAnimacion() {
    var imagenAnimada = document.getElementById('imagenAnimada');
  
    imagenAnimada.classList.add('animada');
  
  
    setTimeout(function() {
      imagenAnimada.classList.remove('animada');
    }, 500);
  }
  
  
  var botonAnimar = document.getElementById('botonAnimar');
  botonAnimar.addEventListener('click', activarAnimacion);