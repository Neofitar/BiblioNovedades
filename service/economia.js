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
    { id: '12', cover: 'https://brosiu.s3.amazonaws.com/post/019/064.jpg', titulo: 'La agroindustria procesadora de cereales de Colombia, factores internos y externos inductores de cambio', autor: 'Álvaro Castillo Niño ', tema: 'Economía', descripcion: 'En Colombia hasta las fechas relativamente recientes, la agricultura, y la agroindustria, especialmente la dedicada la producción de alimentos, era tenida como un actividad de segunda clase. En una lectura en 1884 en el Ateneo de Bogotá, Salvador Camacho Roldán, al dirigirse a su auditoria, formado seguramente por los entonces considerados "intelectuales" manifiesto que, "se interrumpirá talvez para decirme: ese es asunto de comer y de beber, de papas y de maíz, especulación materialista, indigna de ser tradada en salón, en donde el público quiere oír cosas nuevas e interesantes,', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254921' },
    { id: '40', cover: 'https://brosiu.s3.amazonaws.com/post/019/064.jpg', titulo: 'El estado emprendedor la oposición público-privado y sus mitos ', autor: 'Mariana Mazzucato', tema: 'Economía', descripcion: 'Mariana Mazzucaro desmonta este falso mito para desmostrar que el estado, lejos de limitarse a intervenir en el mercado para subsanar posibles errores o abusos, es en realidad una organización audaz, capaz de asumir la inversiones de mayor riesgo , y un facilitador clave de las innovaciones tecnológicas que impulsan el crecimiento económico', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254931' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});