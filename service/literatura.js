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
  
  const totalNovedades = document.querySelector("[data-novedades]");
  
  const diccionario = {
    libros: [
      {
        id: "1",
        cover: "https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-image.pl?thumbnail=1&biblionumber=254890",
        titulo: "La Armada Invencible",
        autor: "Antonio Ortuño Sahagún",
        tema: "Literatura",
        descripcion: "Barry Dávila, un cuarentón que viste como metalero de los años ochenta, tiene un plan: reunir a La Armada Invencible, el grupo de heavy y thrash con el que pudo haber triunfado si las peleas internas y una sociedad sorda ante la crudeza de su música no le hubieran cerrado el camino.",
        url: "https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254890&query_desc=kw%2Cwrdl%3A%20a"
      }
    ]
  };
  
  diccionario.libros.forEach(libro => {
    const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
    totalNovedades.appendChild(nuevaNovedad);
  });