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
      id: "11",
      cover: "/2024-01/img/portadas/11.png",
      autor: "David Brooks",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        "Es necesario entender que las cosas realmente importantes en nuestras vidas no son producto de la coincidencia, por esta razón el autor de este libro nos insta a afrontar nuestra realidad con visión más responsable y comprometida, estableciendo valores y objetivos para llegar al éxito trabajando.",
      url: "https://ugc.overdrive.com/media/4671937",
      titulo: "El camino del carácter",
    },
    {
      id: "12",
      cover: "/2024-01/img/portadas/12.png",
      autor: "Bernard Roth",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        'Cuando se habla de "Logro" se habla de éxito, culminación y reconocimiento, por ello pensar en establecer objetivos de vida que generen logros tiene un impacto significativo y una necesaria reconstrucción de nuestra forma de pensar, el presente libro nos acerca a los contextos más favorables para planificar y aplicar métodos que generen casos de éxito.',
      url: "https://ugc.overdrive.com/media/6249232",
      titulo:
        "El hábito del logro: deja de soñar, empieza a actuar y toma el control de tu vida",
    },
    {
      id: "13",
      cover: "/2024-01/img/portadas/13.png",
      autor: "Alejandro Llano",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        "El logro de la vida es algo que activa y libremente nos hemos de procurar en colaboración y diálogo con personas muy diferentes. Este libro nos incita a buscar el camino para convertirnos en una tarea para nosotros mismos, a ser autores de nuestra vida.",
      url: "https://ugc.overdrive.com/media/3168219",
      titulo: "La vida lograda",
    },
    {
      id: "14",
      cover: "/2024-01/img/portadas/14.png",
      autor: "Mauricio Aguirre",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        "Esta edición tiene el objetivo de dotar a los estudiantes de herramientas necesarias para la redacción de textos en contextos académicos, uno de sus métodos es el empleo de la lectura y la escritura.",
      url: "https://ugc.overdrive.com/media/4709444",
      titulo: "Cómo leer y escribir en la universidad",
    },
    {
      id: "15",
      cover: "/2024-01/img/portadas/15.png",
      autor: "James Clear",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        "La conexión entre los hábitos y la creación de metas claras y específicas, son pequeños pasos hacía la formación de hábitos. El autor brinda una guía clara y práctica para superar los obstáculos que nos impide alcanzar nuestros objetivos y cómo los pequeños cambios pueden impactar en nuestra vida.",
      url: "https://ugc.overdrive.com/media/4860200",
      titulo:
        "Hábitos atómicos: un método sencillo y comprobado para desarrollar buenos hábitos y eliminar los malos",
    },
    {
      id: "16",
      cover: "/2024-01/img/portadas/16.png",
      autor: "Jordan B. Peterson",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        "La felicidad no es un destino, es un viaje... Sea usted mismo: el principal objetivo de la vida es ser honesto consigo mismo y ser auténtico con los demás.",
      url: "https://ugc.overdrive.com/media/4332632",
      titulo: "12 reglas para vivir: Un antídoto al caos",
    },
    {
      id: "17",
      cover: "/2024-01/img/portadas/17.png",
      autor: "Robin Sharma",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        "A partir de técnicas y estrategias que optimicen nuestro crecimiento personal, el autor busca centrarnos en cómo invertir tiempo en desarrollar habilidades y conocimientos personales, es posible mejorar constantemente y alcanzar nuestros objetivos.",
      url: "https://ugc.overdrive.com/media/4371161",
      titulo:
        "El Club de las 5 de la mañana: controla tus mañanas, impulsa tu vida",
    },
    {
      id: "18",
      cover: "/2024-01/img/portadas/18.png",
      autor: "Charles Duhigg",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        "Los hábitos se forman a través de un ciclo que comprende una señal, una rutina y una recompensa. Este ciclo puede ser aprovechado para formar nuevos hábitos o romper los existentes.",
      url: "https://ugc.overdrive.com/media/4567542",
      titulo:
        "El poder de los hábitos: por qué hacemos lo que hacemos en la vida y en el trabajo",
    },
    {
      id: "19",
      cover: "/2024-01/img/portadas/19.png",
      autor: "Damon Zahariades",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        "Se detalla lo que constituye la procrastinación, por qué procrastinamos, los costos descarados y ocultos de retrasar lo que sabe que debe hacer y cómo evitar la procrastinación en primer lugar.",
      url: "https://ugc.overdrive.com/media/8898058",
      titulo:
        "La cura de la procrastinación (resumen): 21 tácticas probadas para vencer a su procrastinador interno, dominar su tiempo y aumentar su productividad",
    },
    {
      id: "20",
      cover: "/2024-01/img/portadas/20.png",
      autor: "Mel Robbins",
      tema: "¡Procrastinación, hoy no!",
      descripcion:
        "En esencia, la regla de los 5 segundos se basa en la idea de que tenemos solo cinco segundos para tomar una decisión y actuar antes de que nuestros cerebros comiencen a sabotearnos.",
      url: "https://ugc.overdrive.com/media/9964414",
      titulo: "El poder de los 5 segundos (Edición Colombiana)",
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
