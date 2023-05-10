const crearNovedad = (cover, titulo, autor, descripcion, url) => {
  const novedad = document.createElement('div');

  const detallesNovedad = `<div class="books" id="books-literatura">
    <img class="cover" src="${cover}" alt="${titulo}">
    <div class="books-details">
        <h2 class="books-titulo">${titulo}</h2>
        <h3 class="books-autor">${autor}</h3>
        <p class="books-descripcion">${descripcion}</p>
        <li class="button-acceso"><a href="${url}" target="_blank">Consulta aquí</a></li>
    </div>`;

  novedad.innerHTML = detallesNovedad;
  return novedad
};

const totalNovedades = document.querySelector("[data-novedades]");

const diccionario = {
  libros: [
    { id: '47', cover: '/img/portadas/47_por.png', titulo: 'Leer es resistir', autor: 'Mario Mendoza Zambrano', tema: 'Literatura', descripcion: 'Muchos años después, en medio de una pandemia, con la muerte enseñoreada en el planeta, escribió Leer es resistir. Un conjunto de relatos protagonizados por libros, autores y lectores, un llamado vehemente a recordar que “leer es una fuerza que significa emancipación, resistencia y resiliencia” y que “seguiremos leyendo porque las páginas que amamos, en medio del infierno que vivimos día a día, son nuestra única redención posible”.}', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254889' },
    { id: '19', cover: '/img/portadas/19_por.png', titulo: 'Boulevard | Volumen 2', autor: 'Flor M. Salvador', tema: 'Literatura', descripcion: '¿Quién dijo que después de la tormenta sale el sol, cuando puede haber un rayo? Luke Howland, lleno de problemas y sumido en una desesperación profunda, y Hasley Weigel, tan despistada como optimista, no se ajustan al prototipo de pareja perfecta.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254734' },
    { id: '31', cover: '/img/portadas/31_por.png', titulo: 'Soy león ; Soy gallina', autor: 'Caballito de Acero', tema: 'Literatura', descripcion: 'Soy gallina, Soy león; es la compilación de veintidós cuentos de cuentos de fútbol bogotano.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254940' },
    { id: '1', cover: '/img/portadas/01_por.png', titulo: 'La Armada Invencible', autor: 'Antonio Ortuño Sahagún', tema: 'Literatura', descripcion: 'Barry Dávila, un cuarentón que viste como metalero de los años ochenta, tiene un plan: reunir a La Armada Invencible, el grupo de heavy y thrash con el que pudo haber triunfado si las peleas internas y una sociedad sorda ante la crudeza de su música no le hubieran cerrado el camino.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254890' },
    { id: '14', cover: '/img/portadas/14_por.png', titulo: 'Por quién doblan las campanas', autor: 'Ernest Hemingway', tema: 'Literatura', descripcion: 'En los tupidos bosques de pinos de una región montañosa española, un grupo de milicianos se dispone a volar un puente esencial para la ofensiva republicana. La acción cortará las comunicaciones por carretera y evitará el contraataque de los sublevados.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254929' },
    { id: '15', cover: '/img/portadas/15_por.png', titulo: 'Medio sol amarillo', autor: 'Chimamanda Ngozi Adichie', tema: 'Literatura', descripcion: 'Medio sol amarillo recrea un período de la historia contemporánea de África: la lucha de Biafra por conseguir una república independiente de Nigeria, y la consecuente guerra civil que segó la vida de miles de personas.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254928' },
    { id: '16', cover: '/img/portadas/16_por.png', titulo: 'La chica de nieve', autor: 'Javier Castillo', tema: 'Literatura', descripcion: 'Kiera Templeton, desaparece entre la multitud. Tras una búsqueda frenética por toda la ciudad, alguien encuentra unos mechones de pelo junto a la ropa que llevaba puesta la pequeña.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254917' },
    { id: '17', cover: '/img/portadas/17_por.png', titulo: 'Declaración: cuentos reunidos', autor: 'Susan Sontag', tema: 'Literatura', descripcion: 'Susan Sontag suele ser recordada ante todo por sus brillantes ensayos, escritos inquisitivos, analíticos y valientes, adelantados siempre a su tiempo. Pero, aunque su producción ensayística fue más extensa y frecuente, y solo de forma intermitente se asomó al territorio de la ficción, es precisamente en los cuentos donde la escritora mostró su lado más íntimo.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254920' },
    { id: '18', cover: '/img/portadas/18_por.png', titulo: 'Animales fantásticos y dónde encontrarlos', autor: 'J. K. Rowling', tema: 'Literatura', descripcion: 'Este compendio de criaturas mágicas elaborado por Newt Scamander ha deleitado a generaciones enteras de magos, convirtiéndose en un clásico del género.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254932' },
    { id: '20', cover: '/img/portadas/20_por.png', titulo: 'Extrañas', autor: 'Guillermo Arriaga', tema: 'Literatura', descripcion: '«No era un animal, quizá tampoco un ser humano, parecía un ángel roto, perdido, ignorado.» Inglaterra, 1781. William Burton, un joven noble, afronta un encuentro cuya intensidad marcará y cambiará su vida.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254918' },
    { id: '21', cover: '/img/portadas/21_por.png', titulo: 'Historia oficial del amor', autor: 'Ricardo Silva Romero', tema: 'Literatura', descripcion: 'Esta novela es la historia del amor no correspondido que la familia Silva Romero siente hacia su país, ese lugar donde el fanatismo deja a todo el mundo huérfano y, sin embargo, la gente es amable, incluso aquel hombre que va a mandar que te maten.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=198125' },
    { id: '22', cover: '/img/portadas/22_por.png', titulo: 'Cómo vivir en vano', autor: 'Ricardo Silva Romero', tema: 'Literatura', descripcion: ' ¿Qué pasó con Horacio Pizarro después de sobrevivir a la debacle de 2016? Que aterrizó en el incierto 2020, el año bisiesto de la peste y el encierro. Justo en la noche de Año Nuevo, el profesor y su familia tienen un encuentro inesperado con un hombre que hará estallar una pelea entre las dos hijas, Julia y Adelaida.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254919' },
    { id: '23', cover: '/img/portadas/23_por.png', titulo: 'Pondré mi oído en la piedra hasta que hable', autor: 'William Ospina', tema: 'Literatura', descripcion: 'Se expuso al pasmo de las lunas y a la insolación en los desiertos de salitre, a vendavales y tormentas eléctricas, vivió aguaceros interminables bajo las enramadas de la selva, probó la electricidad de los gimnotos y succionó venenos de serpiente, estuvo a punto de ahogarse en los raudales del Orinoco y en las tormentas de Barú.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254922' },
    { id: '24', cover: '/img/portadas/24_por.png', titulo: 'La flor púrpura', autor: 'Chimamanda Ngozi Adichie', tema: 'Literatura', descripcion: 'La joven Kambili, de quince años, y su hermano mayor, Jaja, llevan una vida privilegiada en la ciudad de Enugu, pero su vida familiar dista mucho de ser armoniosa. Su padre, un poderoso hombre de negocios, es un fanático católico que alienta expectativas de cariño imposibles de cumplir. Cuando los jóvenes visitan durante unos días a su tía Ifeoma, descubren un mundo nuevo: las continuas risas de sus primos, las flores exuberantes, la calidez, el respeto a las ideas y la ausencia de castigos. Al regresar su a su hogar, transformados por la libertad conquistada, la tensión familiar crece de forma alarmante. La flor púrpura es un relato tierno y conmovedor sobre los lazos familiares, la pasión de la adolescencia la represión.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254933' },
    { id: '25', cover: '/img/portadas/25_por.png', titulo: 'Obra imprescindible ', autor: 'Susan Sontag', tema: 'Literatura', descripcion: 'Este volumen reúne la obra imprescindible de una de las escritoras e intelectuales más trascendentales de la segunda mitad siglo XX. El crítico cultural e historiador David Rieff, hijo de la autora, ha antologado los escritos que conforman este libro basado, entre otros criterios, en lo que la propia Susan Sontag consideraba su obra más perdurable, así como en el eco que podrían suscitar algunos de ellos entre los lectores de la tercera década del siglo XXI. Los estudios, ensayos, artículos, relatos y fragmentos de las novelas y de los diarios se conjugan en esta compilación para ofrecer el retrato más sólido y fidedigno de su ejemplar y controvertida trayectoria. Destaca la incorporación de «El Tercer Mundo de las mujeres», nunca antes recogido en libro. Escrito hace medio siglo, analiza situaciones sociales y políticas feministas de permanente relevancia. En esta edición se incluyen asimismo fragmentos inéditos de los diarios de Sontag, sobre el sitio de Sarajevo o sobre la gestación de sus últimas novelas, que arrojan nueva luz sobre su sensibilidad y pensamiento.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254930' },
    { id: '26', cover: '/img/portadas/26_por.png', titulo: 'Las intermitencias de la muerte ', autor: 'José Saramago', tema: 'Literatura', descripcion: 'En un país cuyo nombre no será mencionado, se produce algo nunca visto: la muerte decide suspender su trabajo letal, la gente deja de morir. La euforia colectiva se desata, pero muy pronto dará paso a la desesperación y al caos, a conciencias corrompidas por acuerdos entre caballeros, explícitos o tácitos. entre el poder político, las mafias y las familias, pues si es cierto que las personas ya no mueren, eso no significa que el tiempo se haya parado. El destino de los humanos será una vejez eterna donde los ancianos son detestados por haberse convertido en estorbos inamovibles. Hasta el día en que la muerte decide regresar.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254927' },
    { id: '27', cover: '/img/portadas/27_por.png', titulo: 'Salvo mi corazón, todo está bien', autor: ' Héctor Abad Faciolince', tema: 'Literatura', descripcion: 'Tal vez no quería solamente un corazón ajeno para seguir viviendo, sino también un corazón ajeno para empezar una segunda vida. El sacerdote Luis Córdoba está a la espera de un trasplante de corazón. Es un cura amable, alto, gordo, pero su mismo tamaño hace que no sea fácil encontrar un donante. Como los médicos le aconsejan reposo y su residencia tiene muchas escaleras, recibe hospedaje en una casa donde viven dos mujeres, una de ellas recién separada, y tres niños. Córdoba, que es bueno y culto crítico de cine y experto en ópera, goza compartiendo lo que sabe con las mujeres sin esposo y los niños sin padre. Pronto se ve envuelto y fascinado por la vida familiar y, sin pretenderlo, empieza a desempeñar el papel de paterfamilias y a replantearse sus opciones de vida.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254926' },
    { id: '28', cover: '/img/portadas/28_por.png', titulo: 'El evangelio según Jesucristo', autor: ' José Saramago', tema: 'Literatura', descripcion: '¿Quién es este Dios, primero hebraico y ahora cristiano, que quiere la sangre, la muerte, para que sea restablecido el equilibrio de un mundo en el que sólo imperan sus leyes? ¿Cómo puede la nueva ley ser ley de Amor si aún pesa sobre el ser humano la condenación eterna? ¿Cómo puede éste creerse una criatura divina digna de la inmortalidad si debe someterse a una ley de terror que preexiste y es exterior a él? Esta novela, que tanto sorprendió al mundo católico, presenta una visión distinta, mucho más terrenal, de los hechos relativos a Jesús: las circunstancias de su nacimiento, los primeros interrogatorios a su madre, José atormentado por la culpa por haber preferido salvar a su hijo antes que alertar sobre las intenciones de Herodes, los encuentros con los ángeles y demonios, el descubrimiento del amor junto a María Magdalena, los diálogos existenciales y la angustia por saber cuál es el verdadero sentido y función de su existencia ante los ojos de Dios.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254925' },
    { id: '29', cover: '/img/portadas/29_por.png', titulo: 'Tú eres lo único que falta en tu vida', autor: 'Borja Vilaseca', tema: 'Literatura', descripcion: 'El eneagrama se ha consolidado como la herramienta más eficaz para iniciar el viaje del autoconocimiento porque va a la raíz de nuestros conflictos emocionales y existenciales. Porque es muy fácil de poner en práctica. Porque es apta para escépticos. Y sobre todo porque funciona. Enseguida aporta resultados beneficiosos tangibles. Se trata de un manual de instrucciones bastante preciso de la condición humana. Describe a grandes rasgos los nueve tipos de personalidad que determinan porqué en general somos como somos. Su gran aportación es que hace una radiografía del ego y del ser esencial para que seas más consciente de las luces y las sombras que habitan dentro de ti. También explica el proceso de transformación que has de seguir para liberarte de la jaula mental que tanto sufrimiento te provoca. Y está diseñado para que experimentes un orgasmo emocional. Es decir, un momento eureka que significa un punto de inflexión en tu vida. Tan solo existe un requisito para experimentarlo: ser radicalmente honesto contigo mismo mientras te miras en este espejo del alma.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254934' },
    { id: '30', cover: '/img/portadas/30_por.png', titulo: 'Soy poderoso; Soy verdolarga', autor: 'Caballito de Acero', tema: 'Literatura', descripcion: 'Soy verdolaga, Soy poderoso es la compilación de veintidós cuentos de cuentos de fútbol antioqueño.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254939' },
    { id: '31', cover: '/img/portadas/31_por.png', titulo: 'Soy león ; Soy gallina', autor: 'Caballito de Acero', tema: 'Literatura', descripcion: 'Soy gallina, Soy león; es la compilación de veintidós cuentos de cuentos de fútbol bogotano.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254940' },
    { id: '32', cover: '/img/portadas/32_por.png', titulo: 'Cien cuyes', autor: 'Gustavo Rodríguez', tema: 'Literatura', descripcion: 'Es una novela tragicómica, situada en la Lima de hoy, que refleja uno de los grandes conflictos de nuestro tiempo: somos sociedades cada vez más longevas y cada vez más hostiles con la gente mayor. Paradoja que Gustavo Rodríguez aborda con destreza y humor. Un libro conmovedor cuyos protagonistas cuidan, son cuidados y defienden la dignidad hasta sus últimas consecuencias', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254941' },
    { id: '33', cover: '/img/portadas/33_por.png', titulo: 'Mañana en la batalla piensa en mí', autor: 'Javier Marías', tema: 'Literatura', descripcion: 'Mañana en la batalla piensa en mí es una intensa narración sobre asuntos que nos atañen a todos: sobre el ocultamiento, los hechos y las intenciones; sobre el actuar sin saber y la voluntad que casi nunca se cumple; sobre la negación de las personas que una vez quisimos y el olvido y la indecisión; sobre la despedida, y también sobre el engaño, que quizá es nuestra condición natural, y en realidad no debería dolernos tanto.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254942' },
    { id: '34', cover: '/img/portadas/34_por.png', titulo: 'El hombre rebelde', autor: 'Albert Camus', tema: 'Literatura', descripcion: '¿Qué es un hombre rebelde? Un hombre que dice no. En su legendario estudio sobre el pensamiento rebelde, Albert Camus traza un recorrido que va desde la ilustración hasta las revoluciones del siglo xx, pasando por movimientos como el anarquismo o el nihilismo, para explorar en profundidad los problemas del individuo en un mundo irracional. Polémico desde su publicación, el libro explora también el vínculo entre rebeldía política y estética, con el análisis de figuras como el marqués de Sade, Marx, Nietzsche y los surrealistas.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254943' },
    { id: '35', cover: '/img/portadas/35_por.png', titulo: 'El club de la pelea', autor: 'Chuck Palahniuk', tema: 'Literatura', descripcion: 'La primera regla del club de la pelea es no hablar del club de la pelea. Cada fin de semana, un puñado de jóvenes oficinistas se quitan los zapatos y las camisas y pelean entre sí hasta la extenuación. Los lunes vuelven a sus despachos con los ojos amoratados y un embriagador sentimiento de omnipotencia. Pero estas reuniones son sólo el comienzo del plan con el que Tyler Durden, proyeccionista, mesero y oscuro genio anárquico, aspira a vengarse de una sociedad paralizada por el consumismo exacerbado.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254944' },
    { id: '36', cover: '/img/portadas/36_por.png', titulo: '¿Dónde nacen las palabras?', autor: 'Lizardo Carvajal', tema: 'Literatura', descripcion: 'Libro infantil. Este no es un diccionario etimológico común, es un libro que ha vuelto a ser árbol, un árbol misterioso, lleno de palabras, que te invita a jugar y perderte entre sus ramas. Pero este libro es sobre todo una declaración de la hermandad, pocas veces vista, entre la ciencia lingüística y el vuelo poético. La poesía, presente desde la narración introductoria de este tesauro ilustrado, rompe los límites de la palabra mecanizada y termina por proponer nuevas definiciones, bellas, divertidas y conmovedoras. Quien sospeche que el idioma, lejos de ser rígido y absoluto, es también un argumento de juego hallará en esta obra una colección de cómplices entrañables: un tesoro visual y literario.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254945' },
    { id: '37', cover: '/img/portadas/37_por.png', titulo: 'Una historia rusa de amor', autor: 'Lizardo Carvajal', tema: 'Literatura', descripcion: 'Libro infantil. “Cuando nací me faltaba un ala”. Así comienza este fascinante relato, contado en la voz de Antón, un hombre simple, pero capaz de hacer algo excepcional. Este libro es sobre discapacidad y estaciones de tren, sobre la espera y el amor. Antón regresa cada día al lugar donde la vio por primera vez, deseando volver a encontrarla. Mientras tanto, la vida va y viene. ¡Pero el mundo tiene tanta gente!', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254946' },
    { id: '4', cover: '/img/portadas/04_por.png', titulo: 'Gramática pura', autor: 'Juan Fernando Hincapié Montoya', tema: 'Literatura', descripcion: 'Quien esto escribe es Emilia Restrepo Williamson, una señorita bogotana bien asentada en ese grupo que se refiere cómodamente a sí mismo como gente bien. Caprichosa, espontánea, opinionada un adjetivo que ella amaría, en estas páginas repasa su vida, su idioma, su familia y su clase.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254913' },
    { id: '41', cover: '/img/portadas/41_por.png', titulo: 'El monje que vendió su Ferrari ', autor: 'Robin Sharma', tema: 'Literatura', descripcion: 'El monje que vendió su Ferrari es una fábula espiritual que, desde hace más de quince años, ha marcado la vida de millones de personas en todo el mundo. A través de sus páginas, conocemos la extraordinaria historia de Julian Mantle, un abogado de éxito que, tras sufrir un ataque al corazón, debe afrontar el gran vacío de su existencia.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254935' },
    { id: '46', cover: '/img/portadas/46_por.png', titulo: 'Ciudad presidio: cosas para hacer en la tarde, antes del fin del mundo ', autor: 'Santiago Gamboa', tema: 'Literatura', descripcion: 'Este es el libro más personal de Santiago Gamboa. escrito durante casi tres años, contiene una serie de reflexiones honestas y cautivantes en las que el autor revela aspectos de su vida y su oficio, sus lecturas y su biblioteca, así como algunas de sus opiniones más lúcidas sobre arte, literatura y la realidad del país', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254936' },
    { id: '47', cover: '/img/portadas/47_por.png', titulo: 'Leer es resistir', autor: 'Mario Mendoza Zambrano', tema: 'Literatura', descripcion: 'Muchos años después, en medio de una pandemia, con la muerte enseñoreada en el planeta, escribió Leer es resistir. Un conjunto de relatos protagonizados por libros, autores y lectores, un llamado vehemente a recordar que “leer es una fuerza que significa emancipación, resistencia y resiliencia” y que “seguiremos leyendo porque las páginas que amamos, en medio del infierno que vivimos día a día, son nuestra única redención posible”.}', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254889' },
    { id: '48', cover: '/img/portadas/48_por.png', titulo: 'Cuentos y relatos de la literatura colombiana | Tomo 3', autor: 'Luz Mary Giraldo ', tema: 'Literatura', descripcion: 'oda antología es una travesía por el territorio de las letras. En este caso, orientado en múltiples direcciones, el recorrido establece un diálogo literario y conceptual con la cultura polivalente de hoy, que incluye nuestra realidad particular y acontecimientos del mundo global. Estamos ante cuentos estructurados por estaciones, que desde cambios temáticos y formales ofrecen diversidad de rutas frente a la complejidad de la urbe, destacando variantes de vidas cotidianas en coexistencia con nuevas focalizaciones de violencia, personajes y bestias tenebrosas o extravagantes, fantasmagorías, aventuras de ciencia ficción, policial o intergaláctica, viajes inesperados o absurdos, retorno a fabulaciones animales, intimismo existencial, conflictos familiares y amo- res sin idilio, erotismo tejido a la muerte, escepticismo y perplejidad, pero también risa e ironía, y alternancia de escrituras intelectualizadas con oralidades urbanas. ', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254951' },
    { id: '49', cover: '/img/portadas/49_por.png', titulo: 'Cuentos y relatos de la literatura colombiana | Tomo 4', autor: 'Luz Mary Giraldo ', tema: 'Literatura', descripcion: 'oda antología es una travesía por el territorio de las letras. En este caso, orientado en múltiples direcciones, el recorrido establece un diálogo literario y conceptual con la cultura polivalente de hoy, que incluye nuestra realidad particular y acontecimientos del mundo global. Estamos ante cuentos estructurados por estaciones, que desde cambios temáticos y formales ofrecen diversidad de rutas frente a la complejidad de la urbe, destacando variantes de vidas cotidianas en coexistencia con nuevas focalizaciones de violencia, personajes y bestias tenebrosas o extravagantes, fantasmagorías, aventuras de ciencia ficción, policial o intergaláctica, viajes inesperados o absurdos, retorno a fabulaciones animales, intimismo existencial, conflictos familiares y amo- res sin idilio, erotismo tejido a la muerte, escepticismo y perplejidad, pero también risa e ironía, y alternancia de escrituras intelectualizadas con oralidades urbanas. ', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254951' },
    { id: '5', cover: '/img/portadas/05_por.png', titulo: 'Round 15', autor: 'Juan Carlos Méndez Guédez', tema: 'Literatura', descripcion: 'Esta es la historia de un hombre solo. Un hombre que se sienta a tomar café, a media noche, en la cocina de su casa. Así transcurren las horas. Con recuerdos. Vienen a su memoria las peleas de Leonel Hernández, sus derrotas, sus ganchos. ', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254912' },
    { id: '50', cover: '/img/portadas/50_por.png', titulo: 'El gato con botas', autor: 'Charles Perrault', tema: 'Literatura', descripcion: 'Libro infantil.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254952' },
    { id: '51', cover: '/img/portadas/51_por.png', titulo: 'La pequeña Frida', autor: 'Anthony Browne', tema: 'Literatura', descripcion: 'Libro infantil.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254953' },
    { id: '53', cover: '/img/portadas/53_por.png', titulo: 'La catadora de Hitler', autor: 'V. S. Alexander', tema: 'Literatura', descripcion: '¿Hitler se suicidó o fue asesinado por uno de sus más cercanos colaboradores? Basándose en la estremecedora historia de Margot Wölk, V. S. Alexander ha escrito un absorbente thriller que pone en duda lo que sabemos sobre la muerte del Führer. ', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254954' },
    { id: '6', cover: '/img/portadas/06_por.png', titulo: 'Veinticuatro miniaturas rusas y un muy celebrado remedio farmacológico contra el mal de peón de rey', autor: 'David Vivancos Allepuz', tema: 'Literatura', descripcion: 'Este libro recoge un total de veinticinco cuentos que están dedicados a quienes quieren saber lo que se siente ver la vida a través del arte que se esconde detrás de un jaque mate.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254915' },
    { id: '9', cover: '/img/portadas/09_por.png', titulo: '¿Quo Vadis, Sánchez?', autor: 'Francesc Trabal i Benessat', tema: 'Literatura', descripcion: 'Sánchez Trabaliano, en su intento por encontrar una identidad asociada al deporte, es un personaje-tipo ridiculizado constantemente en sus múltiples intentos por asumir un rol social que no le corresponde.', url: 'https://biblioteca.ugc.edu.co/cgi-bin/koha/opac-detail.pl?biblionumber=254911' },
  ]
};

diccionario.libros.forEach(libro => {
  const nuevaNovedad = crearNovedad(libro.cover, libro.titulo, libro.autor, libro.descripcion, libro.url);
  totalNovedades.appendChild(nuevaNovedad);
});