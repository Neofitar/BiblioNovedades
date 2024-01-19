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
      id: "31",
      cover: "/2024-01/img/portadas/31.png",
      autor: "Marian Rojas Estapé",
      tema: "Del polo negativo al positivo",
      descripcion:
        "“Si notas que te frustras con facilidad, aléjate y analiza el origen de esa emoción tóxica.”",
      url: "https://ugc.overdrive.com/media/6515558",
      titulo: "Encuentra tu persona vitamina",
    },
    {
      id: "32",
      cover: "/2024-01/img/portadas/32.png",
      autor: "Editorial Planeta S.A.U.",
      tema: "Del polo negativo al positivo",
      descripcion:
        "La diplomacia es el arte de hacer que otro se salga con la nuestra.",
      url: "https://ugc.overdrive.com/media/2669596",
      titulo:
        "Supere el no: cómo negociar con personas que adoptan posiciones inflexibles",
    },
    {
      id: "33",
      cover: "/2024-01/img/portadas/33.png",
      autor: "Junko Takahashi",
      tema: "Del polo negativo al positivo",
      descripcion:
        "Cada uno definimos nuestra propia felicidad, pero el deseo de alcanzar la paz interior es común a todos nosotros. ¿Cómo conseguirla?",
      url: "https://ugc.overdrive.com/media/5054757",
      titulo: "Do. El camino japonés de la felicidad",
    },
    {
      id: "34",
      cover: "/2024-01/img/portadas/34.png",
      autor: "Iván Gutiérrez",
      tema: "Del polo negativo al positivo",
      descripcion:
        "Terminamos en un círculo vicioso, sin sentido, que nos ocupa, entretiene y esclaviza temporalmente, pero que no nos garantiza la verdadera armonía, sino que nos hunde cada vez más ante las decepciones y la soledad.",
      url: "https://ugc.overdrive.com/media/1999876",
      titulo: "¿Por qué le pasan cosas malas a la gente buena?",
    },
    {
      id: "35",
      cover: "/2024-01/img/portadas/35.png",
      autor: "Daniel Habif",
      tema: "Del polo negativo al positivo",
      descripcion:
        "“Es mejor ganar un alma que ganar una discusión, si pierdes a alguien por ganar, perdiste dos veces”.",
      url: "https://ugc.overdrive.com/media/4884416",
      titulo: "Inquebrantables (Unbreakable)",
    },
    {
      id: "36",
      cover: "/2024-01/img/portadas/36.png",
      autor: "Chip Heath",
      tema: "Del polo negativo al positivo",
      descripcion:
        "La vida no se trata de esperar a que pase la tormenta, sino de aprender a bailar bajo la lluvia.",
      url: "https://ugc.overdrive.com/media/3139376",
      titulo: "Cambia el chip: cómo afrontar cambios que parecen imposibles",
    },
    {
      id: "37",
      cover: "/2024-01/img/portadas/37.png",
      autor: "Mario Alonso Puig",
      tema: "Del polo negativo al positivo",
      descripcion:
        '"El futuro nos tortura y el pasado nos encadena. He ahí por qué se nos escapa el presente" Gustave Flaubert.',
      url: "https://ugc.overdrive.com/media/4955267",
      titulo:
        "¡Tómate un respiro! Mindfulness: el arte de mantener la calma en medio de la tempestad",
    },
    {
      id: "38",
      cover: "/2024-01/img/portadas/38.png",
      autor: "Richard H. Thaler",
      tema: "Del polo negativo al positivo",
      descripcion:
        "La adicción a la tecnología es real y debemos encontrar un equilibrio saludable.",
      url: "https://bibliodigital.ugc.edu.co/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=cat07695a&AN=ugc.254950&lang=es&site=eds-live",
      titulo:
        "Un pequeño empujón el impulso que necesitas para tomar decisiones sobre salud, dinero y felicidad",
    },
    {
      id: "39",
      cover: "/2024-01/img/portadas/39.png",
      autor: "Piers Steel",
      tema: "Del polo negativo al positivo",
      descripcion:
        "Las tareas que queremos que se lleven a cabo mejor y a las que más importancia otorgamos son las que más frecuentemente dejamos para más adelante.",
      url: "https://bibliodigital.ugc.edu.co/login?url=https://search.ebscohost.com/login.aspx?direct=true&db=cat07695a&AN=ugc.184005&lang=es&site=eds-live",
      titulo: "Procrastinación",
    },
    {
      id: "40",
      cover: "/2024-01/img/portadas/40.png",
      autor: "Adriana Waisman",
      tema: "Del polo negativo al positivo",
      descripcion:
        "En un mundo de tantos estímulos y tantas ofertas, terminamos muchas veces desbordados por emociones negativas, disociadas de nuestros deseos.",
      url: "https://ugc.overdrive.com/media/7616213",
      titulo:
        "Vacío emocional: El encuentro con uno mismo y la búsqueda del bienestar",
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
