function eliminarElemento() {
    var elemento = document.getElementById('elementoAEliminar');
    if (elemento) {
      elemento.parentNode.removeChild(elemento);
    }
  }