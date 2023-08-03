const crearNovedad = (cover, titulo, autor, descripcion, url) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-educacion">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso" id="button-acceso-educacion"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalNovedades = document.querySelector("[data-novedades]");

const diccionario = {
  libros: [
    { id: '65', cover: '/img/portadas/65_por.png', titulo: 'Ruge o espera a ser devorado', autor: 'Daniel Habif', tema: 'Educación, filosofía o pedagogía', descripcion: 'Dentro de ti hay un poder gigante que contiene un grito. Aunque lo has atado con dudas y miedos, sigue allí amordazado con la opresiva censura que le has impuesto: la misma con la que has acallado tus sueños. Este libro es para desatar ese grito, largamente enmudecido, que derribará las paredes y doblará los barrotes que te encierran. El proceso para desencadenar esa fuerza interior contempla tres pasos: Inspirar: Consiste en inflarte con el aire sanador de la quietud, cerrarte al ruido exterior, mirar hacia adentro y hacer un proceso de autoevaluación.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254967' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});
