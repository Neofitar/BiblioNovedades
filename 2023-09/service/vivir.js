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
    { id: '10', cover: '/2023-09/img/portadas/10.png', titulo: 'Qué hacer con estos pedazos', autor: 'Piedad Bonnett', tema: 'VIVIR MEJOR CADA DÍA', descripcion: 'A veces la vida en pareja es agotadora, replica esta, la negociación permanente, la lucha por el territorio, la obligación de complacer. Pero la soledad. No te imaginas lo que puede pesar a veces la soledad. La voz de Quela se apaga cada vez que termina una.', url: 'https://ugc.overdrive.com/media/7905110' },
    { id: '3', cover: '/2023-09/img/portadas/3.png', titulo: 'Cartas a Antonia: las conmovedoras reflexiones y enseñanzas de un abuelo a su nieta', autor: 'Alfredo Molano Bravo', tema: 'VIVIR MEJOR CADA DÍA', descripcion: 'La felicidad es un engaño para dominarnos. Pero existen momentos cortos en los que podemos saborear la alegría, la serenidad, la esperanza.', url: 'https://ugc.overdrive.com/media/5672662' },
    { id: '32', cover: '/2023-09/img/portadas/32.png', titulo: 'Cómo disfrutar del amor: herramientas feministas para transformar el mito del amor romántico', autor: 'Coral Herrera', tema: 'VIVIR MEJOR CADA DÍA', descripcion: 'El sexo y el amor son para disfrutar, no para convertir nuestras vidas en dramas: la realidad ya es lo suficientemente dura y complicada como para complicárnosla aún más.', url: 'https://ugc.overdrive.com/media/5290980' },
    { id: '36', cover: '/2023-09/img/portadas/36.png', titulo: 'Experiencias con el cielo: una manera espiritual de comprender la muerte, el duelo y la vida en el más allá', autor: 'Elsa Lucía Arango', tema: 'VIVIR MEJOR CADA DÍA', descripcion: 'El amor maduro se alegra con lo bueno que le ocurre al otro, carece de envidia y busca disminuir, cuando puede, el sufrimiento ajeno; esta es la característica básica de la compasión.', url: 'https://ugc.overdrive.com/media/2300640' },
    { id: '37', cover: '/2023-09/img/portadas/37.png', titulo: 'Legado de amor', autor: 'Elsa Lucía Arango', tema: 'VIVIR MEJOR CADA DÍA', descripcion: 'Ser responsables es aceptar que todo lo que ocurrió en nuestra vida tuvo que ver con una acción o decisión personal.', url: 'https://ugc.overdrive.com/media/6151795' },
    { id: '39', cover: '/2023-09/img/portadas/39.png', titulo: 'Cómo ganar amigos e influir sobre las personas', autor: 'Dale Carnegie, Diego Guerrero', tema: 'VIVIR MEJOR CADA DÍA', descripcion: 'Cuando tratamos con la gente debemos recordar que no tratamos con criaturas lógicas. Tratamos con criaturas emotivas, criaturas erizadas de prejuicios e impulsadas por el orgullo y la vanidad.', url: 'https://ugc.overdrive.com/media/5150252' },
    { id: '45', cover: '/2023-09/img/portadas/45.png', titulo: 'Todo va a mejorar', autor: 'Almudena Grandes', tema: 'VIVIR MEJOR CADA DÍA', descripcion: 'Había sido demasiado amor, tanto como el que yo podía dar, más del que me convenía. Fue demasiado amor. Y luego, nada.', url: 'https://ugc.overdrive.com/media/9301860' },
    { id: '46', cover: '/2023-09/img/portadas/46.png', titulo: 'Todo va a mejorar (Audiolibro)', autor: 'Almudena Grandes', tema: 'VIVIR MEJOR CADA DÍA', descripcion: 'El mismo amor que nos hacía leales, que nos hacía mejores, lo estaba echando todo a perder.', url: 'https://ugc.overdrive.com/media/9317141' },
    { id: '7', cover: '/2023-09/img/portadas/7.png', titulo: 'Enamorate de ti', autor: 'Walter Riso', tema: 'VIVIR MEJOR CADA DÍA', descripcion: 'Si sólo te concentras en tus errores, no verás tus logros. Si sólo ves lo que te falta, no disfrutarás del momento, del aquí y el ahora. Rabindranath Tagore decía: Si de noche lloras por el Sol, no verás las estrellas.', url: 'https://ugc.overdrive.com/media/2806754' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});