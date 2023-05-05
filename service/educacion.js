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
    { id: '13', cover: 'https://brosiu.s3.amazonaws.com/post/019/064.jpg', titulo: 'Por qué meditar', autor: 'Daniel Goleman', tema: 'Educación, filosoía o pedagogía', descripcion: 'Esta guia te ayudará no solo a liberarte de patrones negativos de pensamiento y comportamiento, sino a abrazar radicalmenet tu propio ser', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254923' },
    { id: '38', cover: 'https://brosiu.s3.amazonaws.com/post/019/064.jpg', titulo: 'Psicopedagogía de la diversidad en el aula Desafío a las barreras en el aprendizaje y la participación', autor: 'Jaime Bermeosolo Bertrán', tema: 'Educación, filosoía o pedagogía', descripcion: 'Este libro contribuye a la reflexión sobre la manera de eliminar las barreras que obstaculizan el aprendizaje y la participación en la escuela, en el contexto de las inquietudes actuales sobre la atención a la diversidad. Desde sus páginas se hacen propuestas para transformar la cultura escolar vigente en una que realmente acoja, apoye y se enriquezca con la diversidad.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254938' },
    { id: '39', cover: 'https://brosiu.s3.amazonaws.com/post/019/064.jpg', titulo: 'Delirio americano una historia cultural y política de America latina ', autor: 'Carlos Granés', tema: 'Educación, filosoía o pedagogía', descripcion: 'Maravillosamente narrado, Carlos Granés nos ofrece a través de los discursos, manifiestos artísticos y políticos, poemarios, memorias y biografías, el primer estudio realmente comprensivo de la evolución de la cultura en Latinoamérica y su influencia en la política a lo largo del siglo anterior', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254924' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});