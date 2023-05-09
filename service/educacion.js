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
    {id: '13',cover: '/img/portadas/13_por.png',titulo: '¿Por qué meditar?', autor: 'Daniel Goleman',tema: 'Educación, filosofía o pedagogía',descripcion: 'Esta guia te ayudará no solo a liberarte de patrones negativos de pensamiento y comportamiento, sino a abrazar radicalmenet tu propio ser',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254923'},
    {id: '38',cover: '/img/portadas/38_por.png',titulo: 'Psicopedagogía de la diversidad en el aula: desafío a las barreras en el aprendizaje y la participación', autor: 'Jaime Bermeosolo Bertrán',tema: 'Educación, filosofía o pedagogía',descripcion: 'Este libro contribuye a la reflexión sobre la manera de eliminar las barreras que obstaculizan el aprendizaje y la participación en la escuela, en el contexto de las inquietudes actuales sobre la atención a la diversidad. Desde sus páginas se hacen propuestas para transformar la cultura escolar vigente en una que realmente acoja, apoye y se enriquezca con la diversidad.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254938'},
    {id: '39',cover: '/img/portadas/39_por.png',titulo: 'Delirio americano: una historia cultural y política de América Latina ', autor: 'Carlos Granés',tema: 'Educación, filosofía o pedagogía',descripcion: 'Maravillosamente narrado, Carlos Granés nos ofrece a través de los discursos, manifiestos artísticos y políticos, poemarios, memorias y biografías, el primer estudio realmente comprensivo de la evolución de la cultura en Latinoamérica y su influencia en la política a lo largo del siglo anterior',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254924'},
    {id: '43',cover: '/img/portadas/43_por.png',titulo: 'El poder de las palabras: cómo cambiar tu cerebro ( y tu vida) conversando ', autor: 'Mariano Sigman',tema: 'Educación, filosofía o pedagogía',descripcion: 'Este libro sostiene y demuestra que, independientemente del momento de nuestra existencia que atravesemos, podemos demoler esas creencias y cambiar ideas y sentimientos, aun aquellos más profundamente arraigados, aprendiendo a conversar. En efecto, la conversación -con otros y con nosotros- es la herramienta más extraordinaria para transformar nuestra vida.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254949'},
    {id: '60',cover: '/img/portadas/60_por.png',titulo: 'Lengua oral destino individual y social de las niñas y los niños ', autor: 'Evelio Cabrejo Parra',tema: 'Educación, filosofía o pedagogía',descripcion: 'Es un amúsica socialmente compartida y las palabras hacen audible parte de lo que el sujeto hablante contiene en su mundo interior: ¿ como los niños y las niñas se apropian de semejante complejidad?, ¿Como acompañarlos en el proceso de humanización? ... se plantea para hacer un profundo analisis sobre el aprendizaje en los primeros años de vida',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254962'},
    {id: '61',cover: '/img/portadas/61_por.png',titulo: 'El mito de Sísifo', autor: 'Albert Camus',tema: 'Educación, filosofía o pedagogía',descripcion: '¿Tiene sentido la vida? Camus afronta esta pregunta à clave de la filosofía existencial evitando caer en el nihilismo, pero asumiendo el absurdo. Para él el error de filósofos como Kierkegaard, Chestov, Jaspers o Husserl es haber intentado crear significado a partir de la falta de significado: su excesivo miedo a comprometerse con lo absurdo de la vida los llevó a restaurar el significado del mundo a través de un acto de fe hacia algún tipo de «dios».',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254964'},
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});