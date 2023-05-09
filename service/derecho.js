const crearNovedad = (cover, titulo, autor, descripcion, url) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-derecho">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso" id="button-acceso-derecho"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalNovedades = document.querySelector("[data-novedades]");

const diccionario = {
  libros: [
    {id: '2',cover: '/img/portadas/02_por.png',titulo: 'Lugar de tránsito', autor: 'Juan Miguel Álvarez',tema: 'Derecho, política o periodísmo',descripcion: 'El galardonado periodista nos presenta esta recopilación de veinticinco crónicas hechas durante trece años a lo largo de las cuatro ciudades donde ha vivido: Cali, Bogotá, Pereira y Medellín, y otros rincones del país.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254916'},
    {id: '3',cover: '/img/portadas/03_por.png',titulo: 'Democracia envenenada: Rusia en la era de Putin', autor: 'Bernhard Laugaland Mohr',tema: 'Derecho, política o periodísmo',descripcion: 'Este libro nos da un completo vistazo de cómo, en pleno siglo XXI, los gobernantes, siendo Putin solo un ejemplo, controlan los medios y la forma de pensar de sus habitantes para afianzarse, con mano dura, en el poder.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254914'},
    {id: '8',cover: '/img/portadas/08_por.png',titulo: '¿Cómo se hicieron los derechos humanos? | Volumen 1', autor: 's Ricardo David Rabinovich-Berkman',tema: 'Derecho, política o periodísmo',descripcion: 'La problemática de la fundamentación de los derechos; reflexiones al respecto del multiculturalismo y la dignidad humana; estudio de los derechos existenciales de las personas, retomando el debate sobre los fundamentos de los derechos, la finitud existencial, la autoconstrucción y la coexistencia humana.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254906'},
    {id: '56',cover: '/img/portadas/56_por.png',titulo: '¿Cómo se hicieron los derechos humanos? | Volumen 2', autor: 'Ricardo David Rabinovich-Berkman',tema: 'Derecho, política o periodísmo',descripcion: 'La problemática de la fundamentación de los derechos; reflexiones al respecto del multiculturalismo y la dignidad humana; estudio de los derechos existenciales de las personas, retomando el debate sobre los fundamentos de los derechos, la finitud existencial, la autoconstrucción y la coexistencia humana.',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254906'},
    {id: '7',cover: '/img/portadas/07_por.png',titulo: 'Contra el gobierno de los jueces: ventajas y desventajas de tomar decisiones por mayoría en el Congreso y en los tribunales', autor: 'Jeremy Waldron',tema: 'Derecho, política o periodísmo',descripcion: '¿Es democrático que un pequeño número de jueces, no elegidos por el pueblo ni representativos de él, decidan sobre la constitucionalidad de una ley o la extensión de derechos que afectan a millones?',url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254905'},
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});