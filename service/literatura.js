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

  $('.all-books[data-novedades]').slick({
    slidesToShow: 3, // Muestra 3 elementos a la vez
    slidesToScroll: 1, // Desplaza 1 elemento a la vez
    vertical: true, // Desplazamiento vertical
    verticalSwiping: true, // Swiping vertical
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Velocidad de la reproducción automática en milisegundos
    arrows: true, // Flechas de navegación
    dots: false // Puntos de navegación
    });

  
  const diccionario = {
    libros: [
      {
        id: "1",
        cover: "https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-image.pl?thumbnail=1&biblionumber=254890",
        titulo: "La Armada Invencible",
        autor: "Antonio Ortuño Sahagún",
        tema: "Literatura",
        descripcion: "Barry Dávila, un cuarentón que viste como metalero de los años ochenta, tiene un plan: reunir a La Armada Invencible, el grupo de heavy y thrash con el que pudo haber triunfado si las peleas internas y una sociedad sorda ante la crudeza de su música no le hubieran cerrado el camino.",
        url: "https://cdn.milenio.com/uploads/media/2022/10/13/portada-armada-invencible-antonio-ortuno.jpg"
      },
      {
        id: "1",
        cover: "https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-image.pl?thumbnail=1&biblionumber=254890",
        titulo: "La Armada Invencible",
        autor: "Antonio Ortuño Sahagún",
        tema: "Literatura",
        descripcion: "Barry Dávila, un cuarentón que viste como metalero de los años ochenta, tiene un plan: reunir a La Armada Invencible, el grupo de heavy y thrash con el que pudo haber triunfado si las peleas internas y una sociedad sorda ante la crudeza de su música no le hubieran cerrado el camino.",
        url: "https://cdn.milenio.com/uploads/media/2022/10/13/portada-armada-invencible-antonio-ortuno.jpg"
      },
      
    ]
  };
  
  diccionario.libros.forEach(libro => {
    const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
    totalNovedades.appendChild(nuevaNovedad);
  });