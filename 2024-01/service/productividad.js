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
      id: "1",
      cover: "/2024-01/img/portadas/1.png",
      autor: "Stephen R. Covey",
      tema: "¿Productivo? sí se puede",
      descripcion:
        "Este título ofrece una guía para encontrar la mejor forma de obtener resultados en cualquier situación a través de la autogestión y la interrelación efectiva con el entorno.",
      url: "https://ugc.overdrive.com/media/2289201",
      titulo: "Los 7 hábitos de la gente altamente efectiva (30.º aniversario)",
    },
    {
      id: "10",
      cover: "/2024-01/img/portadas/10.png",
      autor: "Alejandro Busto",
      tema: "¿Productivo? sí se puede",
      descripcion:
        'El relato en este libro está enfocado en desarrollar unas habilidades integrales a las sean denominado "Inteligencias múltiples" el contenido es sencillo y divertido pensado para padres e hijos para generar estrategias conjuntas que contribuyan en la formación desde la niñez.',
      url: "https://ugc.overdrive.com/media/4229006",
      titulo:
        "El genio que llevas dentro: Retos y juegos para ejercitar las inteligencias múltiples",
    },
    {
      id: "2",
      cover: "/2024-01/img/portadas/2.png",
      autor: "50Minutos",
      tema: "¿Productivo? sí se puede",
      descripcion:
        "El autor establece estrategias para optimizar el tiempo y convertirlo en un aliado en el ámbito laboral, esto con el fin de tener una jornada productiva, quede espacio para el esparcimiento y relajación personal sin perder eficiencia.",
      url: "https://ugc.overdrive.com/media/3287665",
      titulo:
        "La semana laboral de 4 horas de Timothy Ferriss (Análisis de la obra)",
    },
    {
      id: "3",
      cover: "/2024-01/img/portadas/3.png",
      autor: "Marta Garaulet",
      tema: "¿Productivo? sí se puede",
      descripcion:
        "En muchas ocasiones hemos escuchado el término reloj biológico, el significado de este se encuentra conceptualizado en este libro, al igual que las pautas para identificar los ciclos de nuestro reloj y como usarlos a nuestro favor.",
      url: "https://ugc.overdrive.com/media/3565927",
      titulo:
        "Los relojes de tu vida: descubre cuál es el ritmo biológico y cómo mejorar tu bienestar",
    },
    {
      id: "4",
      cover: "/2024-01/img/portadas/4.png",
      autor: "Mario Alonso Puig",
      tema: "¿Productivo? sí se puede",
      descripcion:
        "Un viaje que cuenta la experiencia de visitar la ciudad más feliz del mundo en voz del autor, quien además detalla los secretos para lograr bienestar personal.",
      url: "https://ugc.overdrive.com/media/6515565",
      titulo:
        "Tus tres superpoderes para lograr una vida más sana, próspera y feliz",
    },
    {
      id: "5",
      cover: "/2024-01/img/portadas/5.png",
      autor: "Vince Poscente",
      tema: "¿Productivo? sí se puede",
      descripcion:
        "Conocerse y trabajar en sí mismos para luego lograr un mejor y mayor trabajo con los demás, es el objetivo principal de este libro, en el que se establecen el coaching como un crecimiento primero individual y luego grupal, y como llegar a alcanzarlo.",
      url: "https://ugc.overdrive.com/media/1975617",
      titulo: "La hormiga y el elefante",
    },
    {
      id: "6",
      cover: "/2024-01/img/portadas/6.png",
      autor: "Audrey Tang",
      tema: "¿Productivo? sí se puede",
      descripcion:
        "Este texto nos acerca al mundo de las habilidades blandas, enfocadas en el liderazgo y como hacer de un mal hábito un punto de reflexión que promueva nuevas fortalezas enfocadas en la eficiencia y efectividad.",
      url: "https://ugc.overdrive.com/media/5691211",
      titulo: "Mindfulness para líderes",
    },
    {
      id: "7",
      cover: "/2024-01/img/portadas/7.png",
      autor: "Henry Cloud",
      tema: "¿Productivo? sí se puede",
      descripcion:
        "Es una realidad que el ser humano es en mayor o menor medida influenciable, esta condición tiene un nivel de afectación que un líder puede aprovechar para ayudar a su equipo de colaboradores a crecer de forma individual y grupal, es así como el autor aborda la influencia positiva y como promoverla.",
      url: "https://ugc.overdrive.com/media/2814457",
      titulo:
        "El poder del otro: el asombroso efecto que otras personas tienen sobre ti, desde la sala de juntas hasta el dormitorio y más allá, y qué hacer al respecto",
    },
    {
      id: "8",
      cover: "/2024-01/img/portadas/8.png",
      autor: "Oliver Burkeman",
      tema: "¿Productivo? sí se puede",
      descripcion:
        "Es un encuentro real con nuestro día a día en donde el tiempo es nuestro adversario más difícil, y como planificando podemos ser más eficientes, siendo conscientes de nuestras limitaciones y cuando debemos priorizar, postergar y reasignar tareas.",
      url: "https://ugc.overdrive.com/media/8485488",
      titulo: "Cuatro mil semanas: gestión del tiempo para mortales",
    },
    {
      id: "9",
      cover: "/2024-01/img/portadas/9.png",
      autor: "Luis Javier Méndez",
      tema: "¿Productivo? sí se puede",
      descripcion:
        "Si el término educación financiera te deja en blanco, este libro es para ti, provee una guía en diferentes aspectos de la vida que se ven afectada por la economía y las decisiones propias, nos enseña a potenciar las formas de ingreso y la mejor manera de administrar los recursos para mantenerlos o multiplicarlos.",
      url: "https://ugc.overdrive.com/media/5158811",
      titulo:
        "Método G.A.N.A.R.: logra, de forma definitiva, tu libertad financiera",
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
