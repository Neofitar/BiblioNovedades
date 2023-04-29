const crearNovedad = (cover, titulo, autor, descripcion, url) => {
    const novedad = document.createElement('div');

    const detallesNovedad = `<div class="books">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso"><a href="${url}" target="_blank">Ver más</a></li>
    </div>`;

    novedad.innerHTML = detallesNovedad;
    return novedad
};

const totalNovedades = document.querySelector ("[data-novedades]")



const http = new XMLHttpRequest();

http.open("GET", "  http://localhost:3000/libros")

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach (libros => {
        const nuevaNovedad = crearNovedad(libros.cover, libros.titulo, libros.autor, libros.descripcion, libros.url)
        totalNovedades.appendChild (nuevaNovedad);

    });
};
