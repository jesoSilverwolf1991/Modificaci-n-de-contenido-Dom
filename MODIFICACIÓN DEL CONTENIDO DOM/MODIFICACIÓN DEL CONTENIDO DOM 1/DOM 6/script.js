function actualizarContenido() {
   
    var texto = document.getElementById('inputTexto').value;
  
   
    var contenidoActualizado = document.getElementById('contenidoActualizado');
    contenidoActualizado.textContent = "Contenido Actualizado: " + texto;
  }