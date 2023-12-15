function cambiarClase() {
    var elemento = document.getElementById('elementoCambiante');
  
  
    if (elemento.classList.contains('claseInicial')) {
   
      elemento.classList.remove('claseInicial');
      elemento.classList.add('claseCambiada');
    } else {
      
      elemento.classList.remove('claseCambiada');
      elemento.classList.add('claseInicial');
    }
  }
  
  
  var botonCambiarClase = document.getElementById('botonCambiarClase');
  botonCambiarClase.addEventListener('click', cambiarClase);