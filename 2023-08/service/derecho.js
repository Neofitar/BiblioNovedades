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
    { id: '10', cover: '/2023-08/img/portadas/10.png', titulo: '200 años de República', autor: 'Benjamín Villegas; Fabio Zambrano Pantoja y Manuel José Cepeda Espinosa', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Al cumplirse 200 años de la promulgación de la Constitución de Villa del Rosario de Cúcuta de 1821 y 30 años de la Constitución de 1991. Pero gran parte del libro nos devela las diferentes facetas de la carta magna, sus verdaderos alcances y fortalezas, los debates que se han generado y, finalmente, su proyección a futuro.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254971' },
    { id: '11', cover: '/2023-08/img/portadas/11.png', titulo: '200 años de República', autor: 'Benjamín Villegas; Fabio Zambrano Pantoja y Manuel José Cepeda Espinosa', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Al cumplirse 200 años de la promulgación de la Constitución de Villa del Rosario de Cúcuta de 1821 y 30 años de la Constitución de 1991. Pero gran parte del libro nos devela las diferentes facetas de la carta magna, sus verdaderos alcances y fortalezas, los debates que se han generado y, finalmente, su proyección a futuro.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254971' },
    { id: '13', cover: '/2023-08/img/portadas/13.png', titulo: 'La justicia de la espiralidad y la justicia de la estructura: el aporte inmaterial de los pueblos indígenas desde el pluralismo jurídico al derecho colombiano', autor: 'Misael Tirado Acero y Nicholl Valeria Pachón Montañez', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Este libro es el resultado de los proyectos de investigación que cumplen la teleología de la transformación social, desde el "Diálogo intercultural en torno al agua: las formas del agua-vida y su relación con las diferentes cosmovisiones indígenas en Colombia".', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254983' },
    { id: '14', cover: '/2023-08/img/portadas/14.png', titulo: 'De la seguridad democratica y la seguridad humana... Hacía la seguridad vital', autor: 'Julián Espinosa & William Farfán Moreno', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'En nuestro presente histórico se debe pensar en la seguridad vital como una superación de la seguridad democrática y de la seguridad humana. Mientras la democrática está centrada en el Estado y sus instituciones y la humana en los individuos y comunidades humanas, la vital pretende enfocarse en la vida tanto humana como no humana (individuos, comunidades, medio ambiente y animales sintientes) y en la consolidación y promoción de las instituciones democráticas y el Estado de derecho.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=255027' },
    { id: '24', cover: '/2023-08/img/portadas/24.png', titulo: 'Introduction to Law and the Legal System', autor: 'Frank August Schubert', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Este libro explica en pocas páginas los principios fundamentales que los estudiantes de derecho estudian durante todo un semestre. Los estudiantes de derecho estudian derecho para que puedan convertirse en profesionales. Estudiantes de pregrado y estudiantes de posgrado en campos distintos del derecho estudian derecho con el fin de obtener una comprensión básica de la ley. La fortaleza de esta presentación es que proporciona a los lectores un breve vistazo a lo que son conceptos inherentemente complejos sin que los estudiantes se metan por encima de sus cabezas', url: 'https://www-ebooks7-24-com.bibliodigital.ugc.edu.co/?il=22564' },
    { id: '26', cover: '/2023-08/img/portadas/26.png', titulo: 'Retos para enfrentar el cambio climático en Colombia', autor: 'Gloria Amparo Rodríguez', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Desde la investigación y enseñanza la Universidad del Rosario ha prestado atención a la incorporación de la problemática del cambio climático, por ello ha trabajado en la consolidación de un Grupo de Estudios Interdisciplinarios en Cambio Climático. Este libro es una pieza más que se suma al esfuerzo, que promueve la línea de investigación en Derecho Ambiental, y que presenta algunas explicaciones sobre las consecuencias del cambio climático y sus efectos adversos en el mundo, adoptando un enfoque integral e integrador sobre las diversas aproximaciones correctivas, preventivas y de intervención sobre cualquier impacto social, económico o ambiental derivado del cambio climático a partir de estrategias de educación para la resiliencia y la sostenibilidad.', url: 'https://ugc.overdrive.com/media/6047755' },
    { id: '3', cover: '/2023-08/img/portadas/3.png', titulo: 'Teoría de la prueba', autor: 'León José Jaramillo Zuleta', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Por consiguiente, aquello cuya existencia no se pudo comprobar, por no existir pruebas que acrediten el supuesto, se queda en una mera especulación que no pasa al plano de la realidad, es decir, no podemos tenerlo por existente, y entonces diremos que, al no comprobarse su existencia, no es cierto, o, lo que es igual, que no es verdad.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254894' },
    { id: '33', cover: '/2023-08/img/portadas/33.png', titulo: 'Presidentes sin pedestal', autor: 'Nicolás Pernett Cañas', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'En este riguroso y divertido libro de historia de Colombia, el autor nos invita a bajar del pedestal de la memoria a los presidentes de la nación, cuestionando su legado con datos que suelen omitirse en la historia tradicional, desde antes de la Independencia hasta nuestros días. Presidentes sin pedestal es un libro sin leyendas patrióticas ni falsos heroísmos, en donde podemos ver a los gobernantes como seres humanos que tuvieron aciertos y vergüenzas, convicciones y momentos en que olvidaron sus ideales solo por conservar el poder. Es, en resumen, una mirada crítica y mordaz que nos llevará a entender mucho mejor el país en el que vivimos.', url: 'https://ugc.overdrive.com/media/9467037' },
    { id: '4', cover: '/2023-08/img/portadas/4.png', titulo: 'Visión del sistema nacional de conciliación desde sus orígenes hasta la ley 2220 de 2022, el juez, el abogado y el conciliador', autor: 'León Jose Jaramillo Zuleta', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'En esta obra se deja planteado que el ejercicio de la abogacía, con sus características tradicionales, que tiene como objeto esencial el tratamiento litigioso de las causas de los justiciables, no puede verse opacado ni desmerecido por las tendencias al tratamiento de los conflictos por nuevas técnicas de negociación, mediación y conciliación.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254895' },
    { id: '6', cover: '/2023-08/img/portadas/6.png', titulo: 'Interpretación judicial y creación normativa en el derecho penal y constitucional colombiano sobre la validez de la normas de origen jurisprudencial', autor: 'Olbar Andrade Rincón', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Este libro ilustra los aportes que han realizado los jueces a la promoción y consolidación de un verdadero Estado social y democrático de Derecho, principalmente desde la expedición de la Constitución Política de 1991. Si bien los textos exponen este arduo trabajo, también dan cuenta del variado e incluso diverso ejercicio jurisprudencial que ocurre en Colombia. Aborda la validez de las normas de origen jurisprudencial, la interpretación judicial y creación normativa en material penal, junto con una evaluación y análisis de las llamadas normas de origen jurisprudencial, así mismo, analiza estas temáticas desde una visión constitucional.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254957' },
    { id: '65', cover: '/2023-08/img/portadas/65.png', titulo: 'La independencia de Colombia: olvidos y ficciones', autor: 'Alfonso Munera', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Este libro es un esfuerzo sostenido por usar las fuentes documentales de la historia de tal manera que el poder mismo de la narración revele la intensidad de sus significados y sus consecuencias. "Espero que el lector y la lectora, cuando lean su última página, se queden con la sensación de que este libro más que respuestas les ha despertado preguntas sobre el país que no soñaron sus fundadores, pero que con todo derecho sueñan muchos de los jóvenes de hoy que caminan exigiendo justicia social las largas marchas de protestas pacíficas a lo largo y ancho del territorio de la nación".', url: 'https://ugc.overdrive.com/media/6821030' },
    { id: '7', cover: '/2023-08/img/portadas/7.png', titulo: 'Nuestra democracia', autor: 'Programa de las Naciones Unidas para el Desarrollo', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Este informe argumenta que las democracias latinoamericanas deben hacer frente a tres desafíos para el ejercicio democrático del poder: articular nuevas formas de participación política para contrarrestar la crisis de representación; fortalecer la organización republicana del Estado, es decir, la independencia de los poderes, su control mutuo y las instancias de rendición de cuentas, e incrementar, en el marco de dichos controles republicanos, el poder político real del Estado, modernizando sus organizaciones y proveyéndolas de recursos humanos eficaces.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254958' },
    { id: '8', cover: '/2023-08/img/portadas/8.png', titulo: 'Tratado de Derecho del Trabajo', autor: 'Jairo Villegas Arbeláez', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'Este decimosegunda edición, actualizada y aumentada, analiza las relaciones laborales entre el Estado-empleador y los Trabajadores Estatales desde los principios consagrados en los Convenios de la OIT, Tratados, Constitución política y la ley, integrados con las apreciaciones del autor sobre la jurisprudencia de la Corte Constitucional, Consejo de Estado, Corte suprema y Tribunales, además de varios estudios de doctrina y legislación extranjera. El texto se encuentra enriquecido con el análisis de la nueva normatividad y expresiones jurisprudenciales.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254810' },
    { id: '9', cover: '/2023-08/img/portadas/9.png', titulo: 'Vicisitudes del derecho ambiental en el Estado constitucional', autor: 'Claudia Martínez Londoño', tema: 'Derecho y Ciencias Políticas y Sociales', descripcion: 'El medio ambiente: el nuevo sujeto de derecho: el mecanismo efectivo para la protección ambiental; La oralidad, un legado ancestral y el desarrollo del acceso a la justicia en la jurisprudencia de las altas cortes colombianas, de ahí que los temas aquí se tratados son actuales y modernos con relación a la temática ambiental tan relevante hoy en día para la humanidad.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254984' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});