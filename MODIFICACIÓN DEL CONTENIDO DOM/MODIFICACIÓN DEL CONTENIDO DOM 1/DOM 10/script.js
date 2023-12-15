function actualizarContenido() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

   
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            const datosContainer = document.getElementById('datos-container');
            datosContainer.innerHTML = `
                <h2>Datos Externos</h2>
                <p>Usuario ID: ${data.userId}</p>
                <p>ID: ${data.id}</p>
                <p>Título: ${data.title}</p>
                <p>Cuerpo: ${data.body}</p>
            `;
        })
        .catch(error => console.error('Error al obtener datos:', error));
}

document.addEventListener('DOMContentLoaded', actualizarContenido);