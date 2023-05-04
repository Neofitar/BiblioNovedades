const crearNovedad = (cover, titulo, autor, descripcion, url) => {
    const novedad = document.createElement('div');
  
    const detallesNovedad = `<div class="books" id="books-educacion">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso" id="button-acceso-educacion"><a href="${url}" target="_blank">Ver más</a></li>
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
      },
      {
        id: "2",
        cover: "https://images-na.ssl-images-amazon.com/images/P/9585033607.01.MZZZZZZZ.jpg",
        titulo: "Metodología de la investigación propuesta, anteproyecto y proyecto",
        autor: "Hector Daniel Lerma González",
        tema: "Educación",
        descripcion: "Cuando un docente, estudiante o investigador desea llevar a cabo una investigación necesita tener a la mano un documento sencillo que lo guíe, que le permita revisar de manera concreta, práctica y con un ejemplo orientador los pasos del proceso investigativo.",
        url: "https://www.udllibros.com/imagenes/9788416/978841696821.JPG?version=98063"
      },
      {
        id: "1",
        cover: "https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-image.pl?thumbnail=1&biblionumber=254890",
        titulo: "La Armada Invencible",
        autor: "Antonio Ortuño Sahagún",
        tema: "Literatura",
        descripcion: "Barry Dávila, un cuarentón que viste como metalero de los años ochenta, tiene un plan: reunir a La Armada Invencible, el grupo de heavy y thrash con el que pudo haber triunfado si las peleas internas y una sociedad sorda ante la crudeza de su música no le hubieran cerrado el camino.",
        url: "https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254890&query_desc=kw%2Cwrdl%3A%20a"
      },
      {
        id: "2",
        cover: "https://images-na.ssl-images-amazon.com/images/P/9585033607.01.MZZZZZZZ.jpg",
        titulo: "Metodología de la investigación propuesta, anteproyecto y proyecto",
        autor: "Hector Daniel Lerma González",
        tema: "Educación",
        descripcion: "Cuando un docente, estudiante o investigador desea llevar a cabo una investigación necesita tener a la mano un documento sencillo que lo guíe, que le permita revisar de manera concreta, práctica y con un ejemplo orientador los pasos del proceso investigativo.",
        url: "https://www.udllibros.com/imagenes/9788416/978841696821.JPG?version=98063"
      },
      {
        id: "3",
        cover: "https://images-na.ssl-images-amazon.com/images/P/9585033607.01.MZZZZZZZ.jpg",
        titulo: "Metodología de la investigación propuesta, anteproyecto y proyecto",
        autor: "Hector Daniel Lerma González",
        tema: "Educación",
        descripcion: "Cuando un docente, estudiante o investigador desea llevar a cabo una investigación necesita tener a la mano un documento sencillo que lo guíe, que le permita revisar de manera concreta, práctica y con un ejemplo orientador los pasos del proceso investigativo.",
        url: "https://www.udllibros.com/imagenes/9788416/978841696821.JPG?version=98063"
      },    
      {
        id: "4",
        cover: "https://images-na.ssl-images-amazon.com/images/P/9585033607.01.MZZZZZZZ.jpg",
        titulo: "Metodología de la investigación propuesta, anteproyecto y proyecto",
        autor: "Hector Daniel Lerma González",
        tema: "Educación",
        descripcion: "Cuando un docente, estudiante o investigador desea llevar a cabo una investigación necesita tener a la mano un documento sencillo que lo guíe, que le permita revisar de manera concreta, práctica y con un ejemplo orientador los pasos del proceso investigativo.",
        url: "https://www.udllibros.com/imagenes/9788416/978841696821.JPG?version=98063"
      }
    ]
  };
  
  diccionario.libros.forEach(libro => {
    const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
    totalNovedades.appendChild(nuevaNovedad);
  });