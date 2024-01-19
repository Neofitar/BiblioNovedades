const crearNovedad = (cover, titulo, autor, descripcion, url) => {
  const novedad = document.createElement("div");

  const detallesNovedad = `<div class="books" id="books-derecho">
      <img class="cover" src="${cover}" alt="${titulo}">
      <div class="books-details">
          <h2 class="books-titulo">${titulo}</h2>
          <h3 class="books-autor">${autor}</h3>
          <p class="books-descripcion">${descripcion}</p>
          <li class="button-acceso" id="button-acceso-derecho"><a href="${url}" target="_blank">Consulta aquí</a></li>
      </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad;
};

const totalNovedades = document.querySelector("[data-novedades]");

const diccionario = {
  libros: [
    {
      id: "41",
      cover: "/2024-01/img/portadas/41.png",
      autor: "María Claudia Londoño Mateus",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "El mundo del trabajo ha experimentado cambios dramáticos y no sólo como consecuencia de la coyuntura económica, los trabajos para toda la vida se han convertido en historia pasada, algo que les sucedía a nuestros padres y abuelos.",
      url: "https://bibliodigital.ugc.edu.co/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=cat07695a&AN=ugc.187822&lang=es&site=eds-live",
      titulo:
        'Buscar trabajo es un "trabajo" consejos y sugerencias para escapar del paro',
    },
    {
      id: "42",
      cover: "/2024-01/img/portadas/42.png",
      autor: "Antonio Ortuño Sahagún",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "El nombre repicaba de por sí ya metalero (“tocábamos Heavy Metal y queríamos sonar más densos y estridentes que un tanque de guerra atorado en el lodo”).",
      url: "https://bibliodigital.ugc.edu.co/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=cat07695a&AN=ugc.254890&lang=es&site=eds-live",
      titulo: "La Armada Invencible",
    },
    {
      id: "43",
      cover: "/2024-01/img/portadas/43.png",
      autor: "J. K. Rowling",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "Tengo que salir a buscar a mis criaturas antes de que se lastimen. Actualmente se encuentran en terreno ajeno rodeado por millones de las criaturas más peligrosas del planeta: los humanos.",
      url: "https://bibliodigital.ugc.edu.co/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=cat07695a&AN=ugc.254932&lang=es&site=eds-live",
      titulo: "Animales fantásticos y dónde encontrarlos por Newt Scamander",
    },
    {
      id: "44",
      cover: "/2024-01/img/portadas/44.png",
      autor: "Albert Camus",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "Grito que no creo en nada y que todo es absurdo, pero no puedo dudar de mi grito y necesito, al menos, creer en mi protesta.",
      url: "https://bibliodigital.ugc.edu.co/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=cat07695a&AN=ugc.254943&lang=es&site=eds-live",
      titulo: "El hombre rebelde",
    },
    {
      id: "45",
      cover: "/2024-01/img/portadas/45.png",
      autor: "José Saramago",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "Bien puede afirmarse que el destino existe, el destino de cada uno en manos de otros está.",
      url: "https://bibliodigital.ugc.edu.co/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=cat07695a&AN=ugc.254925&lang=es&site=eds-live",
      titulo: "El evangelio según Jesucristo",
    },
    {
      id: "46",
      cover: "/2024-01/img/portadas/46.png",
      autor: "Ernest Hemingway",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "Aprendió a pensar, pero no supo ya volar, porque había perdido el amor al vuelo y no hacía más que recordar los tiempos en los que volaba sin esfuerzo.",
      url: "https://ugc.overdrive.com/media/5768900",
      titulo: "París era una fiesta",
    },
    {
      id: "47",
      cover: "/2024-01/img/portadas/47.png",
      autor: "Marie Benedict",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "Aprendí que no se puede dar marcha atrás, que la esencia de la vida es ir hacia adelante. La vida, en realidad, es una calle de sentido único.",
      url: "https://ugc.overdrive.com/media/6445969",
      titulo: "El secreto de Agatha",
    },
    {
      id: "48",
      cover: "/2024-01/img/portadas/48.png",
      autor: "Inma Rubiales",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "Quizá la clave para volver a sentir que eres tú mismo es aceptar que ya no eres la misma persona que eras antes, y eso no tiene por qué ser algo malo.",
      url: "https://ugc.overdrive.com/media/9840887",
      titulo: "El arte de ser nosotros (Edición colombiana)",
    },
    {
      id: "49",
      cover: "/2024-01/img/portadas/49.png",
      autor: "Jon Fosse",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "Entonces se colma de una especie de felicidad y piensa que quizá en algún sitio haya una nada vacía, una luz vacía ¿y si todo no fuera más que eso? piensa ¿si no fuera más que una luz vacía? ¿y si existiera un lugar así? ¿en su vacío, en su luminoso vacío? ¿en su nada?",
      url: "https://ugc.overdrive.com/media/5034187",
      titulo: "El otro nombre: Septología I. Septología I",
    },
    {
      id: "50",
      cover: "/2024-01/img/portadas/50.png",
      autor: "Delia Owens",
      tema: "¡Si quieres, léeme!",
      descripcion:
        "Su padre le había dicho muchas veces que un hombre de verdad es aquel que llora sin vergüenza, lee poesía con el corazón, siente la ópera en el alma y hace lo que haga falta para defender a una mujer.",
      url: "https://ugc.overdrive.com/media/5361553",
      titulo: "La chica salvaje",
    },
  ],
};

diccionario.libros.forEach((libro) => {
  const nuevaNovedad = crearNovedad(
    libro.cover,
    libro.titulo,
    libro.autor,
    libro.descripcion,
    libro.url
  );
  totalNovedades.appendChild(nuevaNovedad);
});
