document.addEventListener("DOMContentLoaded", function () {
  
    function agregarNuevoParrafo() {
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerHTML = "Este es un nuevo párrafo.";
        nuevoParrafo.id = "nuevoParrafo";
        document.body.appendChild(nuevoParrafo);
    }

    
    var miBoton = document.createElement("button");
    miBoton.className = "btn btn-primary";
    miBoton.innerHTML = "Agregar Nuevo Párrafo";
    miBoton.addEventListener("click", function () {
        agregarNuevoParrafo();
    });


    document.body.appendChild(miBoton);
});