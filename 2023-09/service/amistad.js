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
    { id: '11', cover: '/2023-09/img/portadas/11.png', titulo: 'El país de las emociones tristes', autor: 'Mauricio García Villegas', tema: 'AMISTAD', descripcion: 'Hasta hace relativamente poco se daba por descontado que los humanos somos seres escindidos en dos partes y que una de ellas, el alma, quiere nuestro bien, mientras que la otra, el cuerpo, nos pone en peligro.', url: 'https://ugc.overdrive.com/media/5929646' },
    { id: '12', cover: '/2023-09/img/portadas/12.png', titulo: 'Los abismos', autor: 'Pilar Quintana', tema: 'AMISTAD', descripcion: 'Los gritos se acabaron. Ahora no se escuchaba nada. Solo el silencio. Solo el abismo de ese silencio.', url: 'https://ugc.overdrive.com/media/6041743' },
    { id: '27', cover: '/2023-09/img/portadas/27.png', titulo: 'Los recuerdos del porvenir (Audiolibro)', autor: 'Elena Garro', tema: 'AMISTAD', descripcion: '¿De dónde llegan las fechas y a dónde van? Viajan un año entero y con la precisión de una saeta se clavan en el día señalado, nos muestran un pasado, un presente en el espacio, nos deslumbran y se apagan.', url: 'https://ugc.overdrive.com/media/5087778 ' },
    { id: '28', cover: '/2023-09/img/portadas/28.png', titulo: 'Los recuerdos del porvenir', autor: 'Elena Garro', tema: 'AMISTAD', descripcion: 'Extraviados en sí mismos, ignoraban que una vida no basta para descubrir los infinitos sabores de la menta, las luces de una noche o la multitud de colores de que están hechos los colores.', url: 'https://ugc.overdrive.com/media/4939618 ' },
    { id: '31', cover: '/2023-09/img/portadas/31.png', titulo: 'Los fantasmas de Fernando', autor: 'Jaime Alfonso Sandoval', tema: 'AMISTAD', descripcion: '—¡Estoy enamorado! Eso hacen los que aman, pelean por su amor— mi dignidad era superior a mi sentido del ridículo, lo sé—.', url: 'https://ugc.overdrive.com/media/4768301' },
    { id: '35', cover: '/2023-09/img/portadas/35.png', titulo: 'Mil de fiebre', autor: 'Juan Andrés Ferreira', tema: 'AMISTAD', descripcion: 'Hay días en los que Werner amanece borracho de inspiración. Puede ser cualquier día. Despierta entre las once y las doce y una sucesión de escenas perfectamente ensambladas desfila por el ojo inquieto de su mente, que no solo ve, también escucha y absorbe colores, texturas, sabores.', url: 'https://ugc.overdrive.com/media/4291076' },
    { id: '38', cover: '/2023-09/img/portadas/38.png', titulo: 'El mapa de los anhelos', autor: 'Allice Kellen', tema: 'AMISTAD', descripcion: 'Los detalles, son el reflejo de cada uno de nosotros... Por eso no se puede reemplazar a nadie, porque todos estamos hechos de pequeños y preciosos detalles.', url: 'https://ugc.overdrive.com/media/8893323' },
    { id: '55', cover: '/2023-09/img/portadas/55.png', titulo: 'La vorágine', autor: 'José Eustasio Rivera', tema: 'AMISTAD', descripcion: '¡Tú misma pareces un cementerio enorme donde te pudres y resucitas! ¡Quiero volver a las regiones donde el secreto no aterra a nadie, donde es imposible la esclavitud, donde la vida no tiene obstáculos y se encumbra el espíritu en la luz libre!', url: 'https://ugc.overdrive.com/media/1288182' },
    { id: '65', cover: '/2023-09/img/portadas/65.png', titulo: 'La invención del pasado', autor: 'Miguel Torres', tema: 'AMISTAD', descripcion: 'En ese caso se quedará en el lugar donde acaba todo lo divino y lo humano. En el cementerio del olvido, donde van a parar todas las palabras escritas por el hombre, como dice Borges.', url: 'https://ugc.overdrive.com/media/3020691' },
    { id: '77', cover: '/2023-09/img/portadas/77.png', titulo: 'Opio en las nubes', autor: 'Rafael Chaparro Madiedo', tema: 'AMISTAD', descripcion: '¿Cómo vas? Y yo le contesto bien, todo va bien. Salvo mi corazón, todo va bien.', url: 'https://ugc.overdrive.com/media/6173022' },
    { id: '78', cover: '/2023-09/img/portadas/78.png', titulo: 'Delirio', autor: 'Laura Restrepo', tema: 'AMISTAD', descripcion: 'La mujer que amo se ha perdido dentro de su propia cabeza, hace ya catorce días que la ando buscando y me va la vida en encontrarla.', url: 'https://ugc.overdrive.com/media/1974647' },
    { id: '79', cover: '/2023-09/img/portadas/79.png', titulo: 'La perra', autor: 'Pilar Quintana', tema: 'AMISTAD', descripcion: 'Quiso huir, perderse, no decirle nada a nadie y que la selva se la tragara. Empezó a correr, se tropezó, cayó, se levantó y volvió a correr.', url: 'https://ugc.overdrive.com/media/4656777' },
    { id: '80', cover: '/2023-09/img/portadas/80.png', titulo: 'La insoportable levedad del ser', autor: 'Milan Kundera', tema: 'AMISTAD', descripcion: 'Los amores son como los imperios: cuando desaparece la idea sobre la cual han sido construidos, perecen ellos también.', url: 'https://ugc.overdrive.com/media/9665635' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});