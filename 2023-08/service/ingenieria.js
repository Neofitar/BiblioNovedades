const crearNovedad = (cover, titulo, autor, descripcion, url) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-arquitectura">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso" id="button-acceso-arquitectura"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalNovedades = document.querySelector("[data-novedades]");

const diccionario = {
  libros: [
    { id: '10', cover: '/img/portadas/10_por.png', titulo: 'Apuntes para la historia de la ingeniería en Colombia', autor: 'Academia Colombiana de historia de la Ingeniería y de la Obras Públicas Colombia', tema: 'Ingeniería', descripcion: 'Se alcanza un nuevo e importante hito en los objetivos de la Academia, de compilar material histórico por autorizados investigadores en los distintos campos, propiciar su publicación para conocimiento y divulgación de las presentes generaciones, aspirando a que pueda servir como fuente documental para quienes en el futuro acometan nuevas investigaciones.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254910' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});