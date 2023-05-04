const crearNovedad = (cover, titulo, autor, descripcion, url) => {
    const novedad = document.createElement('div');
  
    const detallesNovedad = `<div class="books" id="books-economia">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso" id="button-acceso-economia"><a href="${url}" target="_blank">Ver más</a></li>
    </div>`;
  
    novedad.innerHTML = detallesNovedad;
    return novedad
  };
  
  const totalNovedades = document.querySelector("[data-novedades]");
  
  const diccionario = {
    libros: [
      
    ]
  };
  
  diccionario.libros.forEach(libro => {
    const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
    totalNovedades.appendChild(nuevaNovedad);
  });