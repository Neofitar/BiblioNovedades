const crearNovedad = (cover, titulo, autor, descripcion, url) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-economia">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso" id="button-acceso-economia"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalNovedades = document.querySelector("[data-novedades]");

const diccionario = {
  libros: [
    {id: '52',cover: '/img/portadas/52_por.png',titulo: 'Charlas TED: la guía oficial de TED para hablar en público', autor: 'Chris Anderson',tema: 'Economía y administración',descripcion: 'Desde que empezaron a publicarse en Internet, las Charlas TED (TED Talks) cambiaron la forma en que se habla en público, la manera como se divulga el conocimiento y los escenarios en los que se comparten ideas a escala global. A comienzos de los años 2000, cuando se empezaron a realizar y a transmitir a través de la red, el estilo TED se convirtió en una mecánica de cómo presentar y hablar frente a audiencias de todo el mundo.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=253960'},
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});
