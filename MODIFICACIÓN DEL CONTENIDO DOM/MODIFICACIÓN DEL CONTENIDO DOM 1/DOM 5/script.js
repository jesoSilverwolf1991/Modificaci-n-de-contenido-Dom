function agregarElemento() {
    var nuevoElementoInput = document.getElementById('nuevoElemento');
    var lista = document.getElementById('lista');
  
 
    if (nuevoElementoInput.value.trim() !== '') {
     
      var nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = nuevoElementoInput.value;
      lista.appendChild(nuevoElemento);
  
     
      nuevoElementoInput.value = '';
    }
  }