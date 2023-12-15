function agregarEstiloAlPasar(elemento) {
    elemento.addEventListener('mouseover', function() {
      elemento.classList.add('hover');
    });
  
    elemento.addEventListener('mouseout', function() {
      elemento.classList.remove('hover');
    });
  }
  

  var elementos = document.querySelectorAll('.elemento');
  elementos.forEach(function(elemento) {
    agregarEstiloAlPasar(elemento);
  });