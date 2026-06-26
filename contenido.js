/* =========================================================
   AULA VIRTUAL ESCUELA NOCTURNA - Banco de contenido (versión ampliada)
   Cada unidad: contenido teórico extenso + video + preguntas
   ========================================================= */
const BANCO_LECCIONES = {
  4: [
    {
      id: 'u1', titulo: 'Fundamentos de Hardware', desc: 'CPU, RAM, dispositivos',
      contenido: `
        <p><strong>¿Qué es una computadora?</strong></p>
        <p>Una computadora es una máquina electrónica capaz de recibir datos, procesarlos siguiendo instrucciones y entregar un resultado. Para que esto sea posible, necesita dos grandes componentes que trabajan juntos: el <strong>hardware</strong> (la parte física, lo que se puede tocar) y el <strong>software</strong> (los programas e instrucciones, lo que no se puede tocar).</p>

        <p><strong>El hardware: las piezas físicas</strong></p>
        <p>El hardware son todos los componentes físicos de una computadora: las partes que puedes tocar, ver y, en muchos casos, reemplazar. Sin hardware, una computadora no podría existir, ya que es la base material sobre la cual funciona todo el software. Cada componente cumple una función específica, y todos trabajan de forma coordinada para que el equipo funcione correctamente.</p>

        <p><strong>La CPU: el cerebro de la computadora</strong></p>
        <p>El componente más importante es la <strong>CPU (Unidad Central de Procesamiento, por sus siglas en inglés Central Processing Unit)</strong>, conocida popularmente como el "cerebro" de la computadora. Su función es procesar instrucciones y realizar cálculos matemáticos y lógicos a una velocidad extremadamente alta, del orden de miles de millones de operaciones por segundo. Cada vez que abres un programa, escribes un documento o reproduces un video, la CPU está trabajando constantemente para ejecutar esas tareas. La velocidad de una CPU se mide en gigahercios (GHz): mientras más alto sea este número, más rápido puede procesar información (aunque no es el único factor que determina el rendimiento de un equipo).</p>

        <p><strong>La memoria RAM: el espacio de trabajo temporal</strong></p>
        <p>La <strong>memoria RAM (Random Access Memory, o Memoria de Acceso Aleatorio)</strong> almacena temporalmente los datos y programas que la computadora está usando en ese momento. Imagina que la RAM es como el escritorio donde trabajas: mientras más grande sea el escritorio, más cosas puedes tener abiertas y a mano al mismo tiempo. La RAM es muy rápida, pero tiene una característica importante: es una memoria <strong>volátil</strong>, lo que significa que su contenido se borra por completo al apagar el equipo. Por eso, si no guardas tu trabajo antes de apagar la computadora, puedes perder la información que no fue almacenada de forma permanente.</p>

        <p><strong>El almacenamiento permanente: disco duro y SSD</strong></p>
        <p>A diferencia de la RAM, el <strong>almacenamiento permanente</strong> guarda los archivos de forma definitiva, incluso después de apagar la computadora. Existen dos tecnologías principales:</p>
        <ul>
          <li><strong>Disco duro (HDD):</strong> utiliza discos magnéticos giratorios para almacenar la información. Es más económico, pero más lento y con partes móviles que pueden desgastarse.</li>
          <li><strong>Unidad de estado sólido (SSD):</strong> utiliza memoria flash, sin partes móviles. Es considerablemente más rápido que un disco duro tradicional, aunque generalmente tiene un costo más elevado por la misma capacidad de almacenamiento.</li>
        </ul>
        <p>En este almacenamiento permanente se guardan tus documentos, fotos, videos, el sistema operativo y todos los programas instalados en el equipo.</p>

        <p><strong>Dispositivos de entrada y salida</strong></p>
        <p>Los dispositivos periféricos —es decir, los que se conectan a la computadora para complementar su funcionamiento— se clasifican según la dirección en la que viaja la información:</p>
        <ul>
          <li><strong>Dispositivos de entrada:</strong> permiten al usuario ingresar información hacia la computadora. Ejemplos: teclado, mouse, micrófono, escáner, cámara web.</li>
          <li><strong>Dispositivos de salida:</strong> muestran o entregan información generada por la computadora hacia el usuario. Ejemplos: monitor, impresora, altavoces, proyector.</li>
          <li><strong>Dispositivos mixtos (entrada/salida):</strong> cumplen ambas funciones al mismo tiempo. Ejemplos: pantalla táctil (recibe toques y muestra imágenes), audífonos con micrófono integrado, una impresora multifuncional con escáner.</li>
        </ul>

        <p><strong>La placa madre: el sistema nervioso del equipo</strong></p>
        <p>Todos estos componentes —CPU, RAM, almacenamiento y dispositivos periféricos— se conectan e interactúan a través de la <strong>placa madre (motherboard)</strong>, que es el circuito principal que distribuye energía y permite la comunicación entre todas las piezas de hardware. Es, en cierto sentido, el sistema nervioso que conecta el cerebro (CPU) con el resto del cuerpo de la computadora.</p>

        <p><strong>¿Por qué es importante entender el hardware?</strong></p>
        <p>Comprender estos conceptos es fundamental, ya que todo lo que hagas en una computadora depende de la correcta interacción entre estos componentes. Si tu equipo funciona lento, por ejemplo, puede deberse a poca memoria RAM disponible; si tarda en encender, podría estar relacionado con el tipo de almacenamiento que utiliza. Entender el hardware te ayudará a diagnosticar problemas básicos y a tomar mejores decisiones al usar o adquirir un equipo de cómputo.</p>
      `,
      videoId: 'tB2liUhWdTU',
      videoTitulo: 'Fundamentos de Hardware y Software',
      preguntas: [
        { q: '¿Cuál de los siguientes es un componente de hardware?', opciones: ['Microsoft Word', 'Memoria RAM', 'Sistema operativo', 'Navegador web'], correcta: 1,
          exp: 'La memoria RAM es un componente físico (hardware) que almacena temporalmente los datos en uso.' },
        { q: '¿Qué función cumple la CPU?', opciones: ['Almacenar archivos permanentemente', 'Procesar instrucciones y datos', 'Mostrar imágenes', 'Conectar a internet'], correcta: 1,
          exp: 'La CPU es el "cerebro" de la computadora: procesa instrucciones y datos a gran velocidad.' },
        { q: '¿Cuál es un dispositivo de entrada?', opciones: ['Monitor', 'Impresora', 'Teclado', 'Altavoz'], correcta: 2,
          exp: 'El teclado permite ingresar datos, por lo tanto es un dispositivo de entrada.' },
        { q: 'El almacenamiento permanente de archivos se realiza en:', opciones: ['La memoria RAM', 'El disco duro o SSD', 'El procesador', 'La tarjeta gráfica'], correcta: 1,
          exp: 'El disco duro o SSD almacena archivos de forma permanente, incluso al apagar el equipo. La RAM es volátil.' },
        { q: '¿Qué característica define a la memoria RAM?', opciones: ['Es permanente y lenta', 'Es volátil y temporal', 'Solo almacena videos', 'No se puede usar para programas'], correcta: 1,
          exp: 'La RAM es volátil: su contenido se borra al apagar el equipo, ya que almacena datos solo de forma temporal.' },
        { q: 'Verdadero o falso: el sistema operativo es software.', opciones: ['Verdadero', 'Falso'], correcta: 0,
          exp: 'Verdadero. El sistema operativo gestiona los recursos del hardware y es software de sistema.' },
      ]
    },
    {
      id: 'u2', titulo: 'Software y Sistema Operativo', desc: 'Tipos de software',
      contenido: `
        <p><strong>¿Qué es el software?</strong></p>
        <p>El <strong>software</strong> es el conjunto de programas, instrucciones y datos que le indican al hardware qué hacer y cómo hacerlo. A diferencia del hardware, el software no se puede tocar físicamente: es información digital compuesta por código, almacenada y ejecutada por la computadora. Sin software, el hardware sería simplemente un conjunto de piezas electrónicas sin ninguna utilidad práctica.</p>

        <p><strong>Las dos grandes categorías de software</strong></p>
        <p>El software se clasifica generalmente en dos grandes categorías, según su función dentro del sistema:</p>
        <ul>
          <li><strong>Software de sistema:</strong> gestiona los recursos del hardware y permite que la computadora funcione de manera básica. El ejemplo principal y más importante es el <strong>sistema operativo</strong> (Windows, Android, iOS, Linux, macOS). Sin un sistema operativo, sería imposible ejecutar cualquier otro programa.</li>
          <li><strong>Software de aplicación:</strong> son los programas que el usuario utiliza para realizar tareas específicas, como redactar un documento, navegar en internet o editar una imagen. Ejemplos: Microsoft Word, Excel, un navegador web, una aplicación de mensajería.</li>
        </ul>

        <p><strong>Funciones del sistema operativo</strong></p>
        <p>El sistema operativo es el software más importante de una computadora, ya que actúa como intermediario entre el usuario, las aplicaciones y el hardware. Entre sus funciones esenciales se encuentran:</p>
        <ul>
          <li><strong>Gestión de la memoria:</strong> decide qué programas pueden usar la memoria RAM disponible y en qué cantidad, evitando conflictos entre ellos.</li>
          <li><strong>Gestión de archivos y carpetas:</strong> organiza la información almacenada en el disco, permitiendo crear, mover, copiar y eliminar archivos de forma ordenada.</li>
          <li><strong>Gestión de dispositivos:</strong> controla los periféricos conectados (impresoras, mouse, teclado) y permite que se comuniquen correctamente con el resto del sistema.</li>
          <li><strong>Ejecución de programas:</strong> permite abrir, cerrar y administrar múltiples aplicaciones de forma simultánea (multitarea).</li>
          <li><strong>Seguridad básica:</strong> gestiona los permisos de acceso de los usuarios y protege la información mediante contraseñas y controles de acceso.</li>
        </ul>

        <p><strong>Sistemas operativos más utilizados</strong></p>
        <p>Existen distintos sistemas operativos según el tipo de dispositivo:</p>
        <ul>
          <li><strong>Windows:</strong> el sistema operativo más utilizado en computadoras de escritorio y portátiles a nivel mundial, desarrollado por Microsoft.</li>
          <li><strong>macOS:</strong> sistema operativo desarrollado por Apple, exclusivo para sus propios equipos.</li>
          <li><strong>Linux:</strong> sistema operativo de código abierto, muy utilizado en servidores y por usuarios avanzados.</li>
          <li><strong>Android e iOS:</strong> sistemas operativos diseñados específicamente para dispositivos móviles como teléfonos y tabletas.</li>
        </ul>

        <p><strong>La gestión de archivos: una habilidad fundamental</strong></p>
        <p>Una de las habilidades más importantes en el uso de cualquier computadora es la correcta <strong>gestión de archivos y carpetas</strong>. Las carpetas (también llamadas directorios) permiten organizar archivos relacionados entre sí, facilitando encontrarlos posteriormente. Es recomendable:</p>
        <ul>
          <li>Usar nombres descriptivos para archivos y carpetas (por ejemplo, "Tarea_Informatica_Unidad1" en lugar de "documento1").</li>
          <li>Mantener una estructura ordenada, creando subcarpetas por tema, fecha o materia.</li>
          <li>Evitar guardar todos los archivos sueltos en el escritorio, ya que esto dificulta la organización a largo plazo.</li>
          <li>Realizar copias de seguridad periódicas de los archivos más importantes.</li>
        </ul>
        <p>Dominar estas prácticas de organización digital no solo facilita el trabajo escolar, sino que es una habilidad muy valorada en cualquier entorno laboral moderno.</p>
      `,
      videoId: 'We51nIN59PU',
      videoTitulo: 'Software vs Hardware: Sistema Operativo',
      preguntas: [
        { q: '¿Cuál es un ejemplo de software de aplicación?', opciones: ['Windows', 'Microsoft Excel', 'El procesador (CPU)', 'El disco duro'], correcta: 1,
          exp: 'Excel es software de aplicación: permite al usuario realizar una tarea específica, a diferencia del sistema operativo.' },
        { q: '¿Qué función cumple el sistema operativo?', opciones: ['Imprimir documentos', 'Gestionar los recursos del hardware', 'Conectar el mouse físicamente', 'Diseñar imágenes'], correcta: 1,
          exp: 'El sistema operativo administra la memoria, los procesos, los archivos y los dispositivos del equipo.' },
        { q: 'Una carpeta en el sistema operativo sirve para:', opciones: ['Ejecutar programas directamente', 'Organizar archivos relacionados', 'Procesar datos matemáticos', 'Conectar a internet'], correcta: 1,
          exp: 'Las carpetas permiten organizar y agrupar archivos relacionados, facilitando encontrarlos después.' },
        { q: 'Android e iOS son ejemplos de:', opciones: ['Hardware', 'Sistemas operativos móviles', 'Navegadores web', 'Lenguajes de programación'], correcta: 1,
          exp: 'Android e iOS son sistemas operativos diseñados específicamente para dispositivos móviles.' },
        { q: '¿Cuál de estas es una buena práctica de gestión de archivos?', opciones: ['Guardar todo suelto en el escritorio', 'Usar nombres descriptivos y carpetas organizadas', 'Nunca hacer copias de seguridad', 'Usar el mismo nombre para todos los archivos'], correcta: 1,
          exp: 'Usar nombres descriptivos y mantener carpetas organizadas facilita encontrar y gestionar la información.' },
      ]
    },
    {
      id: 'u3', titulo: 'Procesador de Texto', desc: 'Formato y edición',
      contenido: `
        <p><strong>¿Qué es un procesador de texto?</strong></p>
        <p>Un <strong>procesador de texto</strong> es un programa de software que permite crear, editar, dar formato e imprimir documentos escritos de manera digital. Es una de las herramientas ofimáticas más utilizadas tanto en el ámbito escolar como en el laboral. El procesador de texto más utilizado a nivel mundial es Microsoft Word, aunque existen alternativas gratuitas igual de funcionales, como Google Docs o LibreOffice Writer.</p>

        <p><strong>Formato de fuente: la apariencia del texto</strong></p>
        <p>Las herramientas de <strong>formato de fuente</strong> permiten modificar la apariencia visual del texto:</p>
        <ul>
          <li><strong>Tipo de letra (fuente):</strong> existen cientos de tipografías disponibles, cada una con un estilo distinto (Arial, Times New Roman, Calibri, entre otras).</li>
          <li><strong>Tamaño de letra:</strong> se mide en puntos (pt). Para texto de cuerpo normalmente se usa entre 11 y 12 pt, mientras que los títulos suelen ser más grandes.</li>
          <li><strong>Color de letra:</strong> permite resaltar partes específicas del texto.</li>
          <li><strong>Estilos de énfasis:</strong> negrita (para resaltar), cursiva (para términos especiales o títulos de obras) y subrayado (usado con moderación).</li>
        </ul>
        <p>Un buen uso del formato facilita la lectura y hace que el documento se vea más profesional y organizado.</p>

        <p><strong>Formato de párrafo</strong></p>
        <p>El <strong>formato de párrafo</strong> controla cómo se distribuye el texto dentro de la página:</p>
        <ul>
          <li><strong>Alineación:</strong> el texto puede alinearse a la izquierda (lo más común), al centro (usado en títulos), a la derecha, o justificado (donde el texto llena todo el ancho de la línea, como en libros y periódicos).</li>
          <li><strong>Interlineado:</strong> es el espacio vertical entre las líneas de texto. Un interlineado de 1.5 o doble suele usarse en trabajos académicos para facilitar la lectura y las anotaciones.</li>
          <li><strong>Sangría:</strong> es el espacio que se deja al inicio de un párrafo, utilizado tradicionalmente para señalar el comienzo de una nueva idea.</li>
        </ul>

        <p><strong>Tablas: organización de datos</strong></p>
        <p>Las <strong>tablas</strong> permiten organizar información en filas y columnas dentro de un documento de texto, siendo muy útiles para presentar datos de forma ordenada, como horarios de clases, listas comparativas, o cronogramas de actividades. Cada intersección entre una fila y una columna se llama celda, y puede contener texto, números o incluso imágenes pequeñas.</p>

        <p><strong>Inserción de imágenes</strong></p>
        <p>También es posible insertar <strong>imágenes</strong> dentro de un documento para complementar el texto, ajustando su tamaño, posición y la forma en que el texto fluye alrededor de ellas (ajuste de texto). Esto es especialmente útil en trabajos que requieren diagramas, fotografías o capturas de pantalla como apoyo visual.</p>

        <p><strong>Configuración de página</strong></p>
        <p>Antes de comenzar a escribir un documento formal, es recomendable configurar aspectos como: el tamaño de papel (generalmente carta o A4), los márgenes (el espacio en blanco alrededor del contenido) y la orientación de la página (vertical u horizontal), ya que estos elementos afectan directamente la presentación final del documento al momento de imprimirlo o compartirlo.</p>
      `,
      videoId: 'BVyrVvrKAKs',
      videoTitulo: 'Procesador de Texto: Conceptos Básicos',
      preguntas: [
        { q: '¿Qué herramienta se usa para cambiar el tipo de letra?', opciones: ['Fuente', 'Tabla', 'Hipervínculo', 'Numeración'], correcta: 0,
          exp: 'La herramienta "Fuente" permite cambiar el tipo, tamaño, color y estilo de letra.' },
        { q: 'Para organizar datos en filas y columnas en Word se usa:', opciones: ['Una imagen', 'Una tabla', 'Un encabezado', 'Un pie de página'], correcta: 1,
          exp: 'Las tablas permiten organizar información en filas y columnas dentro de un documento.' },
        { q: '¿Qué opción permite alinear el texto al centro?', opciones: ['Justificar', 'Centrar', 'Sangría', 'Interlineado'], correcta: 1,
          exp: 'La opción "Centrar" alinea el texto en el centro de la página, útil para títulos.' },
        { q: 'El interlineado se refiere a:', opciones: ['El color del texto', 'El espacio entre líneas de texto', 'El tamaño de la página', 'El tipo de letra'], correcta: 1,
          exp: 'El interlineado es el espacio vertical entre las líneas de un párrafo.' },
      ]
    },
  ],
  5: [
    {
      id: 'u4', titulo: 'Hojas de Cálculo', desc: 'Fórmulas y funciones',
      contenido: `
        <p><strong>¿Qué es una hoja de cálculo?</strong></p>
        <p>Una <strong>hoja de cálculo</strong> es una herramienta digital organizada en una cuadrícula de filas y columnas, donde cada intersección forma una <strong>celda</strong>. Las hojas de cálculo permiten organizar, calcular y analizar datos numéricos y de texto de forma mucho más eficiente que en un papel. El programa más utilizado es Microsoft Excel, aunque también existen alternativas gratuitas como Google Sheets.</p>

        <p><strong>Referencias de celdas</strong></p>
        <p>Cada celda se identifica mediante una <strong>referencia</strong>, compuesta por una letra (que indica la columna) y un número (que indica la fila). Por ejemplo, la celda A1 está en la columna A, fila 1; la celda C5 está en la columna C, fila 5. Esta forma de identificación permite hacer referencia a cualquier celda dentro de fórmulas y funciones.</p>

        <p><strong>Fórmulas: la base del cálculo automático</strong></p>
        <p>Las <strong>fórmulas</strong> permiten realizar cálculos automáticos dentro de la hoja. Toda fórmula en una hoja de cálculo comienza con el símbolo igual (=). Por ejemplo, la fórmula <strong>=A1+A2</strong> suma el contenido de las celdas A1 y A2 automáticamente, y si cambias el valor de cualquiera de esas celdas, el resultado se actualiza al instante sin necesidad de recalcular manualmente.</p>

        <p><strong>Funciones básicas más utilizadas</strong></p>
        <p>Las <strong>funciones</strong> son fórmulas predefinidas que simplifican cálculos comunes, evitando tener que escribir operaciones largas manualmente:</p>
        <ul>
          <li><strong>=SUMA(rango):</strong> suma todos los valores contenidos en un rango de celdas. Por ejemplo, =SUMA(A1:A10) suma todos los valores desde la celda A1 hasta la A10.</li>
          <li><strong>=PROMEDIO(rango):</strong> calcula la media aritmética de los valores en un rango, es decir, la suma de todos los valores dividida entre la cantidad de valores.</li>
          <li><strong>=MAX(rango):</strong> encuentra y devuelve el valor más alto dentro de un rango de celdas.</li>
          <li><strong>=MIN(rango):</strong> encuentra y devuelve el valor más bajo dentro de un rango de celdas.</li>
          <li><strong>=CONTAR(rango):</strong> cuenta cuántas celdas dentro de un rango contienen números.</li>
        </ul>

        <p><strong>Funciones condicionales: tomar decisiones automáticas</strong></p>
        <p>Una función más avanzada, pero muy útil, es la función condicional <strong>=SI()</strong>, que permite que la hoja de cálculo tome una decisión automática según se cumpla o no una condición. Por ejemplo, =SI(A1>=60,"Aprobado","Reprobado") evaluará si el valor de A1 es mayor o igual a 60: si es así, mostrará el texto "Aprobado"; de lo contrario, mostrará "Reprobado". Este tipo de funciones es muy utilizado para crear sistemas de calificación automatizados.</p>

        <p><strong>Gráficos: visualización de datos</strong></p>
        <p>Las hojas de cálculo también permiten crear <strong>gráficos</strong> a partir de los datos ingresados, lo cual facilita visualizar tendencias, comparar valores y comunicar resultados de forma más clara y atractiva que una simple tabla de números. Existen distintos tipos de gráficos según el tipo de información que se desea representar: gráficos de barras (para comparar categorías), gráficos circulares o de pastel (para mostrar proporciones de un total) y gráficos de líneas (para mostrar tendencias a lo largo del tiempo).</p>

        <p><strong>Aplicaciones prácticas</strong></p>
        <p>Las hojas de cálculo se utilizan en innumerables situaciones cotidianas y profesionales: control de gastos personales o familiares, registro de calificaciones escolares, inventarios de productos en un negocio, cálculo de presupuestos y planificación financiera, entre muchas otras aplicaciones.</p>
      `,
      videoId: 'MIKvBHjfMs4',
      videoTitulo: 'Hojas de Cálculo: Fórmulas Básicas',
      preguntas: [
        { q: '¿Qué función suma un rango de celdas?', opciones: ['=PROMEDIO()', '=SUMA()', '=MAX()', '=CONTAR()'], correcta: 1,
          exp: 'La función SUMA() suma todos los valores del rango de celdas indicado.' },
        { q: '¿Qué función calcula el promedio de valores?', opciones: ['=SUMA()', '=PROMEDIO()', '=MIN()', '=SI()'], correcta: 1,
          exp: 'La función PROMEDIO() calcula la media aritmética de un conjunto de valores.' },
        { q: 'En una hoja de cálculo, A1 representa:', opciones: ['Una fórmula', 'Una celda', 'Un gráfico', 'Una función'], correcta: 1,
          exp: 'A1 es la referencia de una celda: columna A, fila 1.' },
        { q: '¿Qué función encuentra el valor más alto?', opciones: ['=MIN()', '=MAX()', '=SUMA()', '=PROMEDIO()'], correcta: 1,
          exp: 'La función MAX() retorna el valor más alto de un rango de celdas.' },
        { q: 'La función =SI() se utiliza para:', opciones: ['Sumar valores', 'Tomar decisiones según una condición', 'Crear gráficos', 'Contar celdas vacías'], correcta: 1,
          exp: 'La función SI() evalúa una condición y devuelve un resultado distinto según se cumpla o no.' },
      ]
    },
    {
      id: 'u5', titulo: 'Presentaciones Digitales', desc: 'Diseño de diapositivas',
      contenido: `
        <p><strong>¿Qué es una presentación digital?</strong></p>
        <p>Una <strong>presentación digital</strong> es un conjunto de diapositivas (slides) utilizadas para comunicar información de forma visual, organizada y secuencial, generalmente como apoyo a una exposición oral. Las herramientas más utilizadas para crear presentaciones son Microsoft PowerPoint y Google Slides, aunque ambas comparten principios de diseño muy similares.</p>

        <p><strong>Principios de diseño visual efectivo</strong></p>
        <p>El <strong>diseño visual</strong> es uno de los aspectos más importantes de una buena presentación, ya que determina qué tan fácil es para la audiencia comprender la información:</p>
        <ul>
          <li><strong>Contraste:</strong> se recomienda usar un contraste claro entre el color del texto y el color de fondo (por ejemplo, texto oscuro sobre fondo claro, o viceversa), para que la audiencia pueda leer fácilmente incluso desde la distancia.</li>
          <li><strong>Consistencia:</strong> mantener el mismo estilo de fuente, colores y diseño a lo largo de toda la presentación, para dar una sensación de coherencia y profesionalismo.</li>
          <li><strong>Simplicidad:</strong> evitar la sobrecarga visual con demasiados elementos, colores o efectos de transición innecesarios.</li>
        </ul>

        <p><strong>Estructura de una presentación</strong></p>
        <p>La <strong>estructura</strong> típica de una presentación efectiva incluye tres partes fundamentales:</p>
        <ul>
          <li><strong>Diapositiva de título:</strong> presenta el tema central de la exposición, el nombre del expositor y, en contextos académicos, la fecha y la institución.</li>
          <li><strong>Diapositivas de desarrollo:</strong> contienen el contenido principal, organizado de forma lógica en secciones o subtemas, generalmente acompañadas de imágenes, gráficos o datos relevantes.</li>
          <li><strong>Diapositiva de cierre o conclusiones:</strong> resume las ideas principales expuestas y, si corresponde, agradece la atención de la audiencia o invita a preguntas.</li>
        </ul>

        <p><strong>La regla del texto breve</strong></p>
        <p>Uno de los errores más comunes al crear presentaciones es incluir demasiado texto en cada diapositiva. Lo ideal es usar frases breves, palabras clave o viñetas cortas, dejando que el expositor amplíe verbalmente la información durante su intervención. Una diapositiva saturada de texto distrae a la audiencia, que tiende a leer en silencio en lugar de prestar atención a quien está hablando.</p>

        <p><strong>El uso de recursos multimedia</strong></p>
        <p>Los recursos multimedia —como imágenes relevantes, gráficos de datos y videos breves— ayudan a mantener la atención de la audiencia y a explicar conceptos complejos de forma más sencilla y memorable que el texto por sí solo. Sin embargo, es importante que estos recursos estén directamente relacionados con el contenido y no se utilicen únicamente con fines decorativos, ya que esto puede restar seriedad a la presentación.</p>

        <p><strong>Técnicas de exposición oral</strong></p>
        <p>Una buena presentación digital debe ir acompañada de una exposición oral efectiva: mantener contacto visual con la audiencia, hablar con un volumen y ritmo adecuados, evitar leer directamente las diapositivas palabra por palabra, y practicar previamente para controlar el tiempo de exposición disponible.</p>
      `,
      videoId: 'P0CUU_IEnt8',
      videoTitulo: 'Diseño de Presentaciones Efectivas',
      preguntas: [
        { q: 'Una buena práctica de diseño en diapositivas es:', opciones: ['Usar mucho texto por diapositiva', 'Usar contraste claro entre texto y fondo', 'Usar muchos tipos de letra', 'Evitar imágenes'], correcta: 1,
          exp: 'El contraste claro entre texto y fondo facilita la lectura de la audiencia.' },
        { q: '¿Cuál debe ser el primer elemento de una presentación?', opciones: ['Conclusión', 'Diapositiva de título', 'Bibliografía', 'Anexos'], correcta: 1,
          exp: 'La diapositiva de título presenta el tema y contextualiza a la audiencia desde el inicio.' },
        { q: '¿Por qué se recomienda usar texto breve en las diapositivas?', opciones: ['Para que el expositor no tenga que hablar', 'Para que la audiencia preste atención al expositor, no solo lea', 'Porque el texto largo no cabe', 'No hay ninguna razón específica'], correcta: 1,
          exp: 'El texto breve evita que la audiencia se distraiga leyendo en silencio en lugar de escuchar al expositor.' },
      ]
    },
    {
      id: 'u6', titulo: 'Internet y Comunicación', desc: 'Correo y búsqueda',
      contenido: `
        <p><strong>El correo electrónico</strong></p>
        <p>El <strong>correo electrónico</strong> (email) es uno de los medios de comunicación digital más utilizados, tanto en el ámbito personal como profesional. Una dirección de correo electrónico tiene la estructura <strong>usuario@dominio.com</strong>, donde el símbolo arroba (@) separa el nombre de usuario del proveedor del servicio (como Gmail, Outlook o Yahoo). Un correo electrónico bien redactado debe incluir un asunto claro, un saludo apropiado, el cuerpo del mensaje y una despedida.</p>

        <p><strong>Búsqueda eficiente de información</strong></p>
        <p>Al usar internet, es fundamental saber <strong>buscar información de forma eficiente</strong>. Algunas recomendaciones útiles son:</p>
        <ul>
          <li>Usar palabras clave específicas en lugar de frases completas o preguntas largas, ya que los motores de búsqueda funcionan mejor con términos concretos.</li>
          <li>Si los primeros resultados no son útiles, intentar reformular la búsqueda con sinónimos o términos más específicos.</li>
          <li>Revisar varios resultados antes de elegir una fuente, comparando la información entre distintos sitios.</li>
        </ul>

        <p><strong>¿Cómo identificar una fuente confiable?</strong></p>
        <p>No toda la información disponible en internet es confiable o verídica. Una <strong>fuente confiable</strong> generalmente cumple con varias características:</p>
        <ul>
          <li><strong>Autor identificable:</strong> la información tiene un autor claro, ya sea una persona experta o una institución reconocida.</li>
          <li><strong>Fecha de publicación reciente:</strong> especialmente importante en temas que cambian con el tiempo (tecnología, ciencia, noticias).</li>
          <li><strong>Referencias verificables:</strong> el contenido cita sus fuentes de información de forma clara.</li>
          <li><strong>Origen institucional reconocido:</strong> proviene de universidades, organismos gubernamentales oficiales, organizaciones reconocidas o medios de comunicación serios, en lugar de blogs anónimos o páginas sin respaldo.</li>
        </ul>
        <p>Desarrollar esta capacidad de análisis crítico es esencial en la era digital, donde la desinformación se propaga con gran facilidad.</p>

        <p><strong>Redes sociales: oportunidades y riesgos</strong></p>
        <p>Las <strong>redes sociales</strong> (como Facebook, Instagram, TikTok o WhatsApp) son una herramienta poderosa de comunicación, que permite conectar con otras personas, compartir información y acceder a contenido de interés. Sin embargo, también conllevan riesgos importantes:</p>
        <ul>
          <li><strong>Exceso de información personal expuesta:</strong> compartir datos sensibles (dirección, rutina diaria, ubicación en tiempo real) puede poner en riesgo la seguridad personal.</li>
          <li><strong>Desinformación:</strong> las redes sociales facilitan la propagación rápida de noticias falsas o información sin verificar.</li>
          <li><strong>Contacto con personas malintencionadas:</strong> existe el riesgo de interactuar con perfiles falsos o personas con intenciones de engaño.</li>
        </ul>
        <p>Es importante configurar adecuadamente las opciones de privacidad de cada red social, limitando quién puede ver la información personal publicada, y mantener siempre una actitud crítica frente al contenido que se recibe y comparte.</p>
      `,
      videoId: 'cfJtnw-y5sU',
      videoTitulo: 'Uso Seguro de Internet y Correo Electrónico',
      preguntas: [
        { q: '¿Qué símbolo identifica una dirección de correo electrónico?', opciones: ['#', '@', '%', '&'], correcta: 1,
          exp: 'El símbolo @ separa el nombre de usuario del dominio en una dirección de correo.' },
        { q: 'Una fuente de información confiable en internet suele:', opciones: ['No citar autores', 'Tener autor y fecha verificables', 'Tener muchos anuncios', 'No tener URL'], correcta: 1,
          exp: 'Las fuentes confiables citan autor, fecha y referencias verificables.' },
        { q: '¿Cuál es un riesgo asociado al uso de redes sociales?', opciones: ['Aprender cosas nuevas', 'Exceso de información personal expuesta', 'Comunicarse con amigos', 'Ver noticias'], correcta: 1,
          exp: 'Compartir demasiada información personal puede poner en riesgo la seguridad del usuario.' },
      ]
    },
  ],
  6: [
    {
      id: 'u7', titulo: 'Seguridad Digital', desc: 'Riesgos y protección',
      contenido: `
        <p><strong>¿Qué es la seguridad digital?</strong></p>
        <p>La <strong>seguridad digital</strong> se refiere al conjunto de prácticas, herramientas y conocimientos utilizados para proteger nuestra información personal, nuestros dispositivos y nuestra identidad frente a amenazas que existen en el entorno digital. En un mundo cada vez más conectado, comprender estos riesgos y saber cómo protegerse es una habilidad esencial para cualquier persona.</p>

        <p><strong>Phishing: el engaño disfrazado de confianza</strong></p>
        <p>El <strong>phishing</strong> es una técnica de engaño en la que un atacante se hace pasar por una entidad confiable —como un banco, una red social o una institución educativa— con el objetivo de robar información personal, como contraseñas, números de tarjetas o datos bancarios. Normalmente se realiza a través de correos electrónicos o mensajes falsos que imitan la apariencia de comunicaciones legítimas, incluyendo enlaces a páginas web fraudulentas que parecen reales pero están diseñadas para capturar tus datos.</p>
        <p>Algunas señales de alerta de un posible intento de phishing incluyen: errores de ortografía en el mensaje, urgencia excesiva ("tu cuenta será bloqueada en 24 horas"), solicitudes de información sensible por correo, y enlaces o direcciones de remitente que no coinciden con la entidad oficial.</p>

        <p><strong>Malware: software malicioso</strong></p>
        <p>El <strong>malware</strong> (del inglés "malicious software") es software diseñado específicamente para dañar, espiar o tomar el control de un dispositivo sin la autorización del usuario. Existen distintos tipos de malware:</p>
        <ul>
          <li><strong>Virus:</strong> se adhieren a archivos legítimos y se propagan al ejecutarlos, dañando el sistema o los datos.</li>
          <li><strong>Spyware:</strong> espía la actividad del usuario sin su consentimiento, recopilando información personal.</li>
          <li><strong>Ransomware:</strong> bloquea o cifra los archivos del usuario, exigiendo un pago a cambio de restaurar el acceso.</li>
        </ul>
        <p>El malware suele propagarse a través de archivos adjuntos sospechosos, descargas de sitios no confiables, o dispositivos USB infectados.</p>

        <p><strong>Contraseñas seguras: la primera línea de defensa</strong></p>
        <p>Para protegerte de muchas de estas amenazas, es fundamental usar <strong>contraseñas seguras</strong>. Una buena contraseña debe:</p>
        <ul>
          <li>Combinar mayúsculas, minúsculas, números y símbolos especiales.</li>
          <li>Tener una longitud mínima recomendada de 8 a 12 caracteres.</li>
          <li>Evitar datos personales obvios, como fechas de nacimiento, nombres propios o secuencias simples como "12345".</li>
          <li>Ser diferente para cada cuenta importante, evitando reutilizar la misma contraseña en múltiples servicios.</li>
        </ul>
        <p>Además, nunca debes compartir tu contraseña con nadie, ni siquiera si te lo solicitan por correo, mensaje de texto o llamada telefónica, ya que ninguna institución legítima pedirá tu contraseña completa por estos medios.</p>

        <p><strong>Suplantación de identidad e ingeniería social</strong></p>
        <p>La <strong>ingeniería social</strong> es una técnica que se basa en la manipulación psicológica de las personas, más que en fallas técnicas, para obtener información confidencial. Un atacante puede hacerse pasar por un compañero de trabajo, un familiar o una autoridad para ganarse la confianza de la víctima y conseguir que revele información sensible voluntariamente. La mejor defensa frente a esto es mantener siempre una actitud de verificación: confirmar la identidad de quien solicita información por un canal distinto antes de proporcionar cualquier dato.</p>

        <p><strong>¿Qué hacer ante un mensaje sospechoso?</strong></p>
        <p>Si recibes un correo, mensaje o llamada sospechosa pidiendo información personal, lo correcto es: no hacer clic en enlaces desconocidos, no descargar archivos adjuntos de remitentes no verificados, y reportar el mensaje como sospechoso a la plataforma correspondiente o a la institución que supuestamente lo envió, comunicándote directamente por sus canales oficiales.</p>
      `,
      videoId: 'BL9G20pnPjM',
      videoTitulo: 'Seguridad Digital: Phishing y Contraseñas Seguras',
      preguntas: [
        { q: '¿Qué es el phishing?', opciones: ['Un tipo de hardware', 'Un intento de engaño para robar datos', 'Un lenguaje de programación', 'Un navegador web'], correcta: 1,
          exp: 'El phishing es una técnica de engaño que se hace pasar por una entidad confiable para robar información personal.' },
        { q: 'Una contraseña segura debe:', opciones: ['Ser corta y fácil de recordar', 'Combinar letras, números y símbolos', 'Ser igual en todas las cuentas', 'Ser el nombre del usuario'], correcta: 1,
          exp: 'Una contraseña segura combina mayúsculas, minúsculas, números y símbolos, evitando datos obvios.' },
        { q: '¿Qué es el malware?', opciones: ['Software malicioso', 'Un componente de hardware', 'Un tipo de impresora', 'Un protocolo de internet'], correcta: 0,
          exp: 'El malware es software diseñado para dañar o acceder sin autorización a un sistema.' },
        { q: 'Si recibes un correo sospechoso pidiendo tu contraseña, debes:', opciones: ['Responder con tus datos', 'No hacer clic y reportarlo', 'Reenviarlo a tus contactos', 'Ignorarlo sin reportar'], correcta: 1,
          exp: 'Nunca debes compartir contraseñas por correo. Lo correcto es no hacer clic y reportar el mensaje como sospechoso.' },
        { q: 'La ingeniería social se basa principalmente en:', opciones: ['Fallas técnicas del software', 'Manipulación psicológica de las personas', 'Virus informáticos', 'Errores de hardware'], correcta: 1,
          exp: 'La ingeniería social manipula psicológicamente a la persona para obtener información, sin necesidad de fallas técnicas.' },
      ]
    },
    {
      id: 'u8', titulo: 'Proyecto Integrador', desc: 'Repaso general',
      contenido: `
        <p><strong>El cierre del programa de Informática</strong></p>
        <p>El <strong>proyecto integrador</strong> es la actividad final del programa de Informática del Colegio Nocturno de Changuinola, donde aplicarás de manera conjunta todo lo aprendido durante los tres años de estudio: fundamentos de hardware y software, herramientas ofimáticas (procesador de texto, hojas de cálculo, presentaciones), uso de internet y comunicación digital, y buenas prácticas de seguridad digital.</p>

        <p><strong>Integración de herramientas ofimáticas</strong></p>
        <p>Un buen proyecto integrador combina <strong>varias herramientas ofimáticas</strong> de forma coherente, demostrando dominio práctico de cada una:</p>
        <ul>
          <li>Un <strong>documento de Word</strong> con la propuesta escrita, bien formateada, con título, secciones organizadas y ortografía revisada.</li>
          <li>Una <strong>hoja de cálculo</strong> con datos de respaldo, cálculos relevantes para el proyecto, y al menos un gráfico que visualice esa información.</li>
          <li>Una <strong>presentación digital</strong> clara y visualmente atractiva para exponer los resultados ante el grupo.</li>
        </ul>

        <p><strong>Revisión antes de la entrega</strong></p>
        <p>Antes de entregar cualquier proyecto digital, es fundamental <strong>revisar tres aspectos clave</strong>:</p>
        <ul>
          <li><strong>Formato:</strong> ortografía correcta, orden lógico de las secciones, presentación visual cuidada y consistente.</li>
          <li><strong>Contenido:</strong> que el proyecto responda efectivamente a los objetivos planteados desde el inicio, sin desviarse del tema central.</li>
          <li><strong>Fuentes:</strong> que la información utilizada provenga de fuentes confiables y esté correctamente citada, evitando el plagio de contenido ajeno sin atribución.</li>
        </ul>

        <p><strong>Buenas prácticas de seguridad en el proyecto</strong></p>
        <p>Aplicar buenas prácticas de <strong>seguridad digital</strong> también forma parte de un proyecto profesional y bien ejecutado: realizar copias de seguridad periódicas del trabajo en progreso (para evitar perder el avance ante un fallo técnico), proteger los archivos finales con nombres claros y organizados, y respetar la privacidad de cualquier información personal que se utilice como parte del proyecto, especialmente si involucra datos de otras personas.</p>

        <p><strong>Reflexión final</strong></p>
        <p>Completar este proyecto integrador no es solo un requisito académico, sino una oportunidad real de demostrar el crecimiento en competencias digitales adquirido a lo largo de los tres años del programa de Informática. Estas habilidades —manejo de hardware y software, ofimática, búsqueda crítica de información y seguridad digital— son herramientas que te acompañarán mucho más allá del aula, en tu vida laboral y personal.</p>
      `,
      videoId: 'LuTyJDI4hko',
      videoTitulo: 'Cómo Estructurar tu Proyecto Final',
      preguntas: [
        { q: '¿Qué combina un proyecto integrador de Informática?', opciones: ['Solo hardware', 'Herramientas ofimáticas y buenas prácticas digitales', 'Solo seguridad', 'Solo presentaciones'], correcta: 1,
          exp: 'El proyecto integrador aplica de forma conjunta las herramientas ofimáticas y la seguridad digital aprendidas.' },
        { q: 'Antes de entregar un proyecto digital, es importante:', opciones: ['No revisar el contenido', 'Verificar formato, contenido y fuentes', 'Copiar información sin citar', 'Ignorar la ortografía'], correcta: 1,
          exp: 'Revisar formato, contenido y fuentes garantiza la calidad y originalidad del proyecto.' },
      ]
    },
  ]
};
