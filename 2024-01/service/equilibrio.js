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
      id: "21",
      cover: '/2024-01/img/portadas/21.png',
      autor: "Jaume Funes",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "Este libro nos habla de las principales incertezas educativas que solemos tener tanto padres como maestros respecto a la sobreprotección, el papel de la escuela, el equilibrio emocional y la comprensión de la sociedad.",
      url: "https://ugc.overdrive.com/media/4360921",
      titulo:
        "Quiéreme cuando menos me lo merezca... porque es cuando más lo necesito",
    },
    {
      id: "22",
      cover: "/2024-01/img/portadas/22.png",
      autor: "Manuel del Pozo",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "El estoicismo está enfocado al autocontrol, desarrollo personal, armonía con la naturaleza, armonía con el universo, pero todo desde un sentido estrictamente lógico.",
      url: "https://ugc.overdrive.com/media/5267012",
      titulo: "Estoicismo y dureza mental",
    },
    {
      id: "23",
      cover: "/2024-01/img/portadas/23.png",
      autor: "Dra. Caroline Leaf",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "Lo que pensamos realmente nos afecta tanto en lo físico como en lo emocional. Nuestra cultura, en la actualidad, sufre una epidemia de pensamientos tóxicos, que crean condiciones ideales para enfermedades... La autora busca la desintoxicación de estos pensamientos a partir de un plan de 21 días.",
      url: "https://ugc.overdrive.com/media/3608306",
      titulo:
        "Enciende tu cerebro: la clave para la felicidad, la manera de pensar y la salud",
    },
    {
      id: "24",
      cover: "/2024-01/img/portadas/24.png",
      autor: "Tomás Navarro",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "En este libro el autor nos permite identificar los 8 pensamientos más comunes que nos impide pensar positivamente. Nos invita a explorar nuestros límites y alcanzar nuestra mejor versión.",
      url: "https://ugc.overdrive.com/media/6697276",
      titulo:
        "Piensa bonito: 8 errores que debes evitar para liberar tu mente y lograr la vida que deseas",
    },
    {
      id: "25",
      cover: "/2024-01/img/portadas/25.png",
      autor: "Mario Alonso Puig",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "Si deseamos aumentar la autoestima y potenciar capacidades como la inteligencia, la memoria, la intuición, la creatividad, el liderazgo o el espíritu emprendedor, necesitamos saber cómo despertar nuestro gran potencial dormido.",
      url: "https://ugc.overdrive.com/media/6150894",
      titulo: "Resetea tu mente. Descubre de lo que eres capaz",
    },
    {
      id: "26",
      cover: "/2024-01/img/portadas/26.png",
      autor: "Walter Mischel",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "El autor explica cómo se puede conseguir el autocontrol y aplicarlo a los retos de la vida cotidiana - desde la dieta hasta dejar de fumar, superar desamores, tomar decisiones importantes y planear la jubilación.",
      url: "https://ugc.overdrive.com/media/2300588",
      titulo: "El test de la golosina: cómo entender y manejar el autocontrol",
    },
    {
      id: "27",
      cover: "/2024-01/img/portadas/27.png",
      autor: "Anabel Gonzalez",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "“Le damos vueltas y vueltas a lo que sentimos. A cada vuelta que les damos, nuestras emociones crecen. Preguntarnos por qué sentimos lo que sentimos, por qué nos pasan las cosas que nos pasan... Nos criticamos por sentir o por no sentir”.",
      url: "https://ugc.overdrive.com/media/5373367",
      titulo:
        "Lo bueno de tener un mal día: cómo cuidar de nuestras emociones para estar mejor",
    },
    {
      id: "28",
      cover: "/2024-01/img/portadas/28.png",
      autor: "Jessica Vega Puch",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "Considerada como una guía que te permite conocer las claves para entender el lado positivo de las emociones negativas. Enseña atajos para salir del hoyo y la flojera, transformar la ira y la desesperanza; y nos explica qué hacer con los pensamientos para lograr dejarlos ir.",
      url: "https://ugc.overdrive.com/media/4253691",
      titulo: "¿Yoga o clonazepam? Botiquín de emergencia emocional",
    },
    {
      id: "29",
      cover: "/2024-01/img/portadas/29.png",
      autor: "Neus Elcacho",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "Imagina tu vida dando el 100% de lo que puedes ofrecer, con energía y sintiéndote perfectamente, feliz y lograr tus objetivos, sin dejar de disfrutar lo que te gusta. No es una utopía, es la dieta de las emociones. ¿Realmente crees que salud y disfrutar no son compatibles?",
      url: "https://ugc.overdrive.com/media/3767346",
      titulo:
        "La dieta de las emociones: encuentra el equilibrio emocional con la alimentación",
    },
    {
      id: "30",
      cover: "/2024-01/img/portadas/30.png",
      autor: "Vanesa Lorenzo",
      tema: "Encuentra tu equilibrio",
      descripcion:
        "Hay cosas y decisiones vitales que, por todo lo positivo que aportan a la vida, compartirlas debería ser no solo un deseo, sino casi una obligación. Practicar yoga es una de ellas. Aprender a estar presente en el aquí y el ahora.",
      url: "https://ugc.overdrive.com/media/3029606",
      titulo: "Yoga, un estilo de vida: 5 pasos para el completo bienestar",
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
