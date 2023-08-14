const crearNovedad = (cover, titulo, autor, descripcion, url) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-arquitectura">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso" id="button-acceso-arquitectura"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalNovedades = document.querySelector("[data-novedades]");

const diccionario = {
  libros: [
    { id: '15', cover: '/2023-08/img/portadas/15.png', titulo: 'Soñando el territorio: añoranzas, deseos y sueños.', autor: 'Corporación Autónoma Regional de Cundinamarca', tema: 'Arquitectura e Ingenierías', descripcion: 'Proyecto documental, que a través de las imágenes y testimonios, se realiza un proceso de intervención socioambiental que busca fortalecer la cultura ambiental de los actores sociales que habitan en las regiones de las cuencas hidrográficas del territorio CAR en los departamentos de Cundinamarca, Boyacá y la zona rural de Bogotá.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254745' },
    { id: '20', cover: '/2023-08/img/portadas/20.png', titulo: 'Probabilidad y estadística para ingeniería y ciencias', autor: 'Ronald E. Walpole', tema: 'Arquitectura e Ingenierías', descripcion: 'En esta edición, seguimos haciendo énfasis en el equilibrio entre la teoría y las apli-caciones. Se utiliza el cálculo y otros tipos de apoyo matemático (por ejemplo, el álgebra lineal) con el mismo nivel que en las ediciones anteriores. Se mejora el alcance de las herramientas analíticas en estadística con el uso del cálculo cuando la discusión se cen-tra en las reglas y conceptos de probabilidad.', url: 'https://www-ebooks7-24-com.bibliodigital.ugc.edu.co/?il=25575' },
    { id: '21', cover: '/2023-08/img/portadas/21.png', titulo: 'Analytics, Data Science, Artificial Intelligence: Systems for Decision Support', autor: 'Ramesh Sharda', tema: 'Arquitectura e Ingenierías', descripcion: 'El propósito de este libro es presentar al lector las tecnologías que generalmente y colectivamente se llaman analítica (o analítica de negocios) pero que han sido conocidas por otros nombres, como sistemas de apoyo a la decisión, sistemas de información ejecutiva e inteligencia empresarial, entre otros. Usamos estos términos indistintamente. Este libro presenta los fundamentos de los métodos, metodologías y técnicas utilizadas para diseñar y desarrollar estos sistemas. Además, presentamos los elementos esenciales de la IA tanto en lo que se refiere a la analítica como a una disciplina independiente para el apoyo a la toma de decisiones.', url: 'https://www-ebooks7-24-com.bibliodigital.ugc.edu.co/?il=16338' },
    { id: '62', cover: '/2023-08/img/portadas/62.png', titulo: 'Imaginarios urbanos', autor: 'Arnoldo Gaite', tema: 'Arquitectura e Ingenierías', descripcion: 'Reflexionar sobre el imaginario urbano interesa desde la perspectiva de la arquitectura, porque se observa una asincronía entre la imagen o visión del arquitecto y las percepciones que del mismo problema tienen los usuarios, habitantes de la ciudad. Las razones de esa diferencia podrán ser atrayentes motivos de indagación, ya que intervienen todos los ingredientes que definen la imaginación: productora en los proyectistas - reproductora en los usuarios. Para el autor resulta fundamental hacer consciente que en el quehacer profesional se deben coordinar y aproximar estas visiones distintas, ya que de lo contrario la actividad creativa pierde su razón de ser.', url: 'https://ugc.overdrive.com/media/7491923' },
    { id: '63', cover: '/2023-08/img/portadas/63.png', titulo: 'Muerte y vida de las grandes ciudades', autor: 'Jane Jacobs', tema: 'Arquitectura e Ingenierías', descripcion: 'Probablemente el libro más influyente en la historia de la planificación urbana". Jane Jacobs, columnista y crítica de arquitectura de principios de los años sesenta, afirmaba que la diversidad y la vitalidad de las ciudades estaban siendo destruidas por algunos arquitectos y urbanistas muy influyentes. Popular no sólo entre profesionales, el libro es una fuerte crítica de las políticas de renovación urbanística de los años cincuenta, que destruían comunidades y creaban espacios urbanos aislados y antinaturales. Jacobs defiende la abolición de los reglamentos de ordenación territorial y el restablecimiento de mercados libres de tierra, lo que daría como resultado barrios densos y de uso mixto.', url: 'https://ugc.overdrive.com/media/6075062' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});