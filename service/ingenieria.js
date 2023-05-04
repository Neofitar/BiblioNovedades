const crearNovedad = (cover, titulo, autor, descripcion, url) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-arquitectura">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso" id="button-acceso-arquitectura"><a href="${url}" target="_blank">Ver más</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalNovedades = document.querySelector("[data-novedades]");

const diccionario = {
  libros: [
    { id: '10', cover: 'https://brosiu.s3.amazonaws.com/post/019/064.jpg', titulo: 'Apuntes para la historia de la ingeniería en Colombia', autor: 'Academia Colombiana de historia de la Ingeniería y de la Obras Públicas Colombia', tema: 'Ingeniería', descripcion: 'Se alcanza un nuevo e importante hito en los objetivos de la Academia, de compilar material histórico por autorizados investigadores en los distintos campos, propiciar su publicación para conocimiento y divulgación de las presentes generaciones, aspirando a que pueda servir como fuente documental para quienes en el futuro acomentan nuevas investigaciones.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254910' },
    { id: '11', cover: 'https://brosiu.s3.amazonaws.com/post/019/064.jpg', titulo: 'Ingeniería de vías diseño, trazado y localización de carreteras', autor: 'Academia Colombiana de historia de la Ingeniería y de la Obras Públicas Colombia', tema: 'Ingeniería', descripcion: 'Ingeniería de vías, diseño, trazado y localización de carreteras abarca las temáticas de diseño geométrico de carreteras y localización de carreteras.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254909' },
    { id: '12', cover: 'https://brosiu.s3.amazonaws.com/post/019/064.jpg', titulo: 'La agroindustria procesadora de cereales de Colombia, factores internos y externos inductores de cambio', autor: 'Álvaro Castillo Niño ', tema: 'Ingeniería', descripcion: 'En Colombia hasta las fechas relativamente recientes, la agricultura, y la agroindustria, especialmente la dedicada la producción de alimentos, era tenida como un actividad de segunda clase. En una lectura en 1884 en el Ateneo de Bogotá, Salvador Camacho Roldán, al dirigirse a su auditoria, formado seguramente por los entonces considerados "intelectuales" manifiesto que, "se interrumpirá talvez para decirme: ese es asunto de comer y de beber, de papas y de maíz, especulación materialista, indigna de ser tradada en salón, en donde el público quiere oír cosas nuevas e interesantes,', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254921' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});