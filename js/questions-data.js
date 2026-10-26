// Banco de Preguntas y Ejercicios Prácticos de Bases de Datos I (UTN BA)
// Total de preguntas: 283 (Clases 1 a 10: 1er y 2do Parcial, Autoevaluaciones, Ejercicios Prácticos y Modelos de Examen)
// Opciones balanceadas sin sesgo de longitud, pares conceptuales normalizados y soporte para Modo Dungeon y Boss Arena.

const QUESTIONS_DATABASE = [
  {
    "id": 101,
    "classNum": 1,
    "topic": "SGBD & Arquitectura",
    "unit": "Clase 1",
    "question": "¿Cuál es el objetivo primordial de un Sistema de Gestión de Bases de Datos (SGBD / DBMS)?",
    "options": [
      "Servir de interfaz entre los usuarios/aplicaciones y la base de datos física, garantizando almacenamiento eficiente, seguridad, concurrencia e integridad.",
      "Administrar exclusivamente la memoria caché, los hilos de CPU y la paginación del sistema operativo host para acelerar la renderización gráfica.",
      "Proveer un compilador nativo de código fuente C++ que transforma peticiones web en archivos binarios comprimidos sin ningún tipo de esquema relacional en el almacenamiento secundario durante el procesamiento concurrente de transacciones.",
      "Gestionar la topología de red local, los protocolos de enrutamiento TCP/IP y los cortafuegos físicos para balancear peticiones HTTP en servidores."
    ],
    "correctAnswer": 0,
    "hint": "El DBMS es el software mediador que abstrae el almacenamiento físico y gestiona el acceso seguro y concurrente a los datos.",
    "explanation": "Un SGBD es un conjunto de programas que permite almacenar, modificar y extraer información de una base de datos de forma segura, eficiente y concurrente, abstrayendo los detalles físicos del almacenamiento.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 3",
    "slideImage": "assets/clases_infographics/clase1_p03.png",
    "type": "single_choice"
  },
  {
    "id": 102,
    "classNum": 1,
    "topic": "Archivos vs SGBD",
    "unit": "Clase 1",
    "question": "¿Cuál era la principal desventaja del procesamiento tradicional basado en archivos planos (File Processing Systems)?",
    "options": [
      "Incompatibilidad total con lenguajes estructurados modernos y obligatoriedad de usar almacenamiento en cintas magnéticas de acceso secuencial.",
      "Redundancia e inconsistencia de datos, dificultad para acceder a los datos y anomalías de acceso concurrente.",
      "Imposibilidad absoluta de almacenar más de cien registros por archivo en cualquier soporte magnético o partición física de disco secundario.",
      "Obligatoriedad de recompilar el kernel del sistema operativo y reiniciar el servidor físico ante cada nueva consulta analítica de datos."
    ],
    "correctAnswer": 1,
    "hint": "En archivos planos cada aplicación guardaba sus propios datos, duplicando información y provocando discrepancias.",
    "explanation": "El enfoque tradicional de archivos generaba copias duplicadas de la misma información en distintos archivos (redundancia), lo que derivaba en datos contradictorios (inconsistencia) y carencia de control de concurrencia.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 4",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "type": "single_choice"
  },
  {
    "id": 103,
    "classNum": 1,
    "topic": "ANSI/SPARC",
    "unit": "Clase 1",
    "question": "¿Qué organismo y comité formalizó la arquitectura de tres niveles de abstracción para SGBD?",
    "options": [
      "Comité ANSI / X3 / SPARC (1975).",
      "Consorcio W3C y Tim Berners-Lee.",
      "Fundación Apache Software Group.",
      "Comité de Estándares IEEE 802.11."
    ],
    "correctAnswer": 0,
    "hint": "Fue propuesto a mediados de los 70 por el comité de planificación y requisitos de estándares de ANSI.",
    "explanation": "La arquitectura ANSI/SPARC fue propuesta en 1975 por el comité de planificación y requisitos de estándares (SPARC) de ANSI para garantizar la separación de niveles y la independencia de datos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 6",
    "slideImage": "assets/clases_infographics/clase1_p06.png",
    "type": "single_choice"
  },
  {
    "id": 104,
    "classNum": 1,
    "topic": "ANSI/SPARC",
    "unit": "Clase 1",
    "question": "En la arquitectura ANSI/SPARC, ¿cuáles son los 3 niveles de abstracción de datos?",
    "options": [
      "Nivel Externo (Vistas), Nivel Conceptual (Lógico Global) y Nivel Interno (Físico).",
      "Nivel de Presentación Gráfica, Nivel de Lógica de Negocio y Nivel de Red Corporativa.",
      "Nivel de Controladores de Hardware, Nivel de Memoria Volátil RAM y Nivel de Punteros.",
      "Nivel de Cortafuegos Perimetral, Nivel de Balanceo de Carga y Nivel de Persistencia."
    ],
    "correctAnswer": 0,
    "hint": "Van desde las perspectivas de cada usuario individual hasta la estructura global de datos y finalmente la organización física en disco.",
    "explanation": "La arquitectura ANSI/SPARC se compone de: Nivel Externo (vistas para distintos usuarios), Nivel Conceptual (esquema lógico global de entidades y restricciones) y Nivel Interno (organización física en disco y punteros).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 7",
    "slideImage": "assets/clases_infographics/clase1_p07.png",
    "type": "single_choice"
  },
  {
    "id": 105,
    "classNum": 1,
    "topic": "ANSI/SPARC",
    "unit": "Clase 1",
    "question": "¿Cuál es la responsabilidad principal del Nivel Conceptual en la arquitectura ANSI/SPARC?",
    "options": [
      "Definir el esquema lógico global de toda la base de datos (entidades, atributos, relaciones y restricciones de integridad) de forma independiente del hardware.",
      "Gestionar la asignación directa de bloques físicos en los cilindros del disco magnético y optimizar los cabezales de lectura/escritura del hardware del servidor.",
      "Diseñar la interfaz visual gráfica y la combinación de estilos CSS que perciben los usuarios finales al conectarse mediante aplicaciones de cliente ligero.",
      "Asignar dinámicamente las direcciones IP y configurar los puertos de escucha de los protocolos TCP/IP en la interfaz de red corporativa del centro de cómputos."
    ],
    "correctAnswer": 0,
    "hint": "Representa la visión integral del negocio y el modelo de datos, sin preocuparse por cómo se almacenan los bytes en disco.",
    "explanation": "El Nivel Conceptual describe qué datos se almacenan en la base de datos y las relaciones entre ellos, proporcionando una visión unificada de toda la organización sin detalles de implementación física.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 7",
    "slideImage": "assets/clases_infographics/clase1_p07.png",
    "type": "single_choice"
  },
  {
    "id": 106,
    "classNum": 1,
    "topic": "ANSI/SPARC",
    "unit": "Clase 1",
    "question": "¿Qué define el Nivel Externo en la arquitectura ANSI/SPARC?",
    "options": [
      "Las diferentes vistas de usuario personalizadas, mostrando solo la información relevante para cada perfil y ocultando el resto por seguridad.",
      "El cableado estructurado de red y los protocolos de transmisión TCP/IP utilizados para transmitir las consultas SQL hacia el centro de cómputos.",
      "La topología física de pistas, sectores y cabezales magnéticos dentro de los platos giratorios del disco duro del servidor de almacenamiento.",
      "El conjunto de instrucciones en código de máquina y lenguaje ensamblador que ejecuta directamente la CPU en memoria de primer nivel."
    ],
    "correctAnswer": 0,
    "hint": "Un usuario de contabilidad ve datos distintos a los de recursos humanos; cada uno tiene su esquema o vista externa.",
    "explanation": "El Nivel Externo consta de múltiples esquemas externos o vistas de usuario. Cada vista describe la porción de la base de datos que interesa a un grupo específico de usuarios, ocultando el resto.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 8",
    "slideImage": "assets/clases_infographics/clase1_p08.png",
    "type": "single_choice"
  },
  {
    "id": 107,
    "classNum": 1,
    "topic": "ANSI/SPARC",
    "unit": "Clase 1",
    "question": "¿Qué describe el Nivel Interno (Físico) de la arquitectura ANSI/SPARC?",
    "options": [
      "La estructura física de almacenamiento de los datos en disco, tamaños de registro en bytes, punteros, compresión e indexación.",
      "Las reglas de negocio de la empresa plasmadas en diagramas de clases UML y modelos entidad-relación de nivel corporativo.",
      "El listado de permisos, contraseñas de red y roles de usuarios que acceden simultáneamente a las aplicaciones de software.",
      "La sintaxis declarativa de las consultas SQL emitidas por los módulos de cliente ligero y bibliotecas externas de conexión mediante estructuras auxiliares de índices auto-balanceados de tipo árbol B+ en disco."
    ],
    "correctAnswer": 0,
    "hint": "Es el nivel más bajo, donde los registros se traducen a bytes, offsets y estructuras de almacenamiento físico.",
    "explanation": "El Nivel Interno describe cómo se almacenan físicamente los datos en el medio secundario, incluyendo el formato de los registros (bytes), métodos de acceso y estructuras de almacenamiento.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 8",
    "slideImage": "assets/clases_infographics/clase1_p08.png",
    "type": "single_choice"
  },
  {
    "id": 108,
    "classNum": 1,
    "topic": "Independencia de Datos",
    "unit": "Clase 1",
    "question": "¿Qué es la Independencia Física de Datos en un SGBD?",
    "options": [
      "La capacidad de alterar el esquema lógico de las tablas sin necesidad de actualizar la memoria caché de los navegadores web de clientes remotos.",
      "La capacidad de modificar el esquema interno (ej. agregar un índice o cambiar de disco) sin tener que alterar el esquema conceptual ni los programas de aplicación.",
      "La facultad de desconectar los cables de alimentación eléctrica del centro de datos sin interrumpir las transacciones concurrentes activas.",
      "La posibilidad de ejecutar el motor relacional sin requerir un sistema operativo anfitrión ni controladores de hardware específicos en el servidor."
    ],
    "correctAnswer": 1,
    "hint": "Física = cambios en almacenamiento interno sin tocar la lógica conceptual ni reescribir código.",
    "explanation": "La Independencia Física de Datos permite alterar la organización física del almacenamiento (archivos, índices, particionamiento) sin necesidad de modificar el esquema conceptual ni reescribir los programas que consultan la base de datos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 9",
    "slideImage": "assets/clases_infographics/clase1_p09.png",
    "type": "single_choice"
  },
  {
    "id": 109,
    "classNum": 1,
    "topic": "Independencia de Datos",
    "unit": "Clase 1",
    "question": "¿Qué es la Independencia Lógica de Datos en un SGBD?",
    "options": [
      "La facultad de ejecutar consultas analíticas sobre grandes volúmenes de información sin utilizar operadores relacionales básicos y eludiendo las comprobaciones de integridad del sistema de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL.",
      "La capacidad de modificar el esquema conceptual (ej. agregar una nueva entidad o atributo) sin tener que reescribir los esquemas externos ni las aplicaciones existentes que no usan esos datos.",
      "La propiedad de evitar el consumo de memoria RAM volátil mediante la persistencia obligatoria de todas las variables del sistema en memorias de solo lectura ROM en el centro de datos.",
      "La posibilidad técnica de enlazar tablas relacionales sin definir claves primarias ni respetar las restricciones de dominio establecidas por el administrador en el catálogo corporativo."
    ],
    "correctAnswer": 1,
    "hint": "Lógica = cambios conceptuales (ej. agregar tablas) sin romper las vistas externas ni aplicaciones existentes.",
    "explanation": "La Independencia Lógica permite alterar el esquema conceptual (añadir atributos o tablas) sin requerir modificaciones en las vistas externas existentes ni en los programas que no hacen uso de esos nuevos elementos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 9",
    "slideImage": "assets/clases_infographics/clase1_p09.png",
    "type": "single_choice"
  },
  {
    "id": 110,
    "classNum": 1,
    "topic": "Modelos de Datos",
    "unit": "Clase 1",
    "question": "¿Cuál es la característica distintiva del Modelo Jerárquico de base de datos?",
    "options": [
      "Organiza los datos en una estructura de árbol donde cada registro hijo tiene exactamente un único registro padre (relaciones 1:N).",
      "Permite que un nodo hijo tenga múltiples nodos padres formando un grafo abierto y arbitrario con dependencias cíclicas múltiples.",
      "Representa toda la información mediante relaciones bidimensionales planas compuestas por tuplas y atributos sin jerarquías físicas.",
      "Almacena registros en documentos semiestructurados de formato JSON sin validar ningún tipo de esquema previo en almacenamiento."
    ],
    "correctAnswer": 0,
    "hint": "Piensa en un árbol genealógico o sistema de carpetas: cada nodo hijo tiene solo un padre directo.",
    "explanation": "En el modelo jerárquico (ej. IMS de IBM), los datos se estructuran como un árbol jerárquico de segmentos. Cada nodo hijo solo puede pertenecer a un único nodo padre, dificultando la representación natural de relaciones N:M.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 10",
    "slideImage": "assets/clases_infographics/clase1_p10.png",
    "type": "single_choice"
  },
  {
    "id": 111,
    "classNum": 1,
    "topic": "Modelos de Datos",
    "unit": "Clase 1",
    "question": "¿Qué avance introdujo el Modelo en Red (CODASYL) en comparación con el modelo jerárquico?",
    "options": [
      "Permitió que un registro miembro (hijo) pudiera pertenecer a múltiples conjuntos y tener más de un registro dueño (padre), formando grafos.",
      "Eliminó completamente el uso de punteros físicos en el disco secundario al incorporar índices auto-balanceados de tipo árbol B+.",
      "Introdujo por primera vez el lenguaje declarativo estándar ANSI SQL para consultar datos sin necesidad de navegación manual algorítmica.",
      "Permitió el almacenamiento directo de objetos multimedia complejos sin requerir asignación de bloques en el sistema de archivos del servidor."
    ],
    "correctAnswer": 0,
    "hint": "El modelo en red superó la limitación del árbol jerárquico permitiendo múltiples padres mediante conjuntos (sets).",
    "explanation": "El modelo en red (formalizado por CODASYL) permitió modelar relaciones Muchos a Muchos (N:M) de manera más directa al permitir que un registro hijo tenga múltiples padres, formando una red o grafo mediante conjuntos (sets).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 10",
    "slideImage": "assets/clases_infographics/clase1_p10.png",
    "type": "single_choice"
  },
  {
    "id": 112,
    "classNum": 1,
    "topic": "Modelos de Datos",
    "unit": "Clase 1",
    "question": "¿Quién introdujo el Modelo Relacional en 1970 y en qué principio matemático se fundamenta?",
    "options": [
      "Edgar F. Codd, fundamentado en la teoría matemática de conjuntos y la lógica de predicados de primer orden.",
      "Alan Turing, fundamentado en el principio de autómatas deterministas y máquinas de estados con cinta infinita.",
      "John von Neumann, fundamentado en la arquitectura de registros internos de CPU y buses compartidos de memoria.",
      "Tim Berners-Lee, fundamentado en el protocolo de transferencia de hipertexto y las etiquetas de maquetado web."
    ],
    "correctAnswer": 0,
    "hint": "Fue propuesto por E. F. Codd en IBM en su histórico paper 'A Relational Model of Data for Large Shared Data Banks'.",
    "explanation": "Edgar Frank Codd propuso en 1970 el Modelo Relacional, donde todos los datos se representan como relaciones (tablas) compuestas por tuplas y atributos, basándose en la teoría de conjuntos y el álgebra relacional.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 11",
    "slideImage": "assets/clases_infographics/clase1_p11.png",
    "type": "single_choice"
  },
  {
    "id": 113,
    "classNum": 1,
    "topic": "Modelos de Datos",
    "unit": "Clase 1",
    "question": "¿Por qué el Modelo Orientado a Objetos (OODBMS) resulta ventajoso en aplicaciones con datos altamente complejos?",
    "options": [
      "Porque permite almacenar tipos de datos abstractos, métodos, herencia y navegar referencias complejas (OID) sin sufrir el desfase objeto-relacional (impedance mismatch).",
      "Porque consume menos del 5% de memoria física en comparación con cualquier motor relacional tradicional gracias a la ausencia total de metadatos.",
      "Porque prescinde de cualquier unidad física de almacenamiento secundario al persistir los objetos exclusivamente en la memoria caché del procesador.",
      "Porque elimina la necesidad de realizar respaldos periódicos y recuperaciones ante fallos al almacenar los datos en registros distribuidos de solo lectura para preservar la integridad referencial y el aislamiento entre transacciones activas."
    ],
    "correctAnswer": 0,
    "hint": "El modelo OO encapsula estado y comportamiento (métodos), permitiendo jerarquías de herencia directas en la base de datos.",
    "explanation": "Los OODBMS integran directamente los conceptos de la POO (encapsulamiento, métodos, herencia, identidades de objeto OID), resultando óptimos para dominios complejos como CAD/CAM, GIS y multimedia.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 12",
    "slideImage": "assets/clases_infographics/clase1_p12.png",
    "type": "single_choice"
  },
  {
    "id": 114,
    "classNum": 1,
    "topic": "OLTP vs OLAP",
    "unit": "Clase 1",
    "question": "¿Cuál es el propósito y perfil de operaciones típico de un sistema OLTP (Online Transaction Processing)?",
    "options": [
      "Gestionar las operaciones transaccionales del día a día con alto volumen de lecturas y escrituras puntuales, rápidas, atómicas y concurrentes.",
      "Ejecutar consultas analíticas masivas que leen millones de filas históricas para generar reportes estratégicos trimestrales y anuales.",
      "Servir de almacén de datos centralizado (Data Warehouse) con esquemas en estrella altamente desnormalizados para minería de datos avanzada de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL.",
      "Entrenar modelos de aprendizaje profundo y redes neuronales convolucionales mediante procesamiento paralelo masivo en clústeres de GPUs."
    ],
    "correctAnswer": 0,
    "hint": "OLTP es el sistema operativo del negocio: ventas en caja, transferencias bancarias, altas de usuarios.",
    "explanation": "Los sistemas OLTP están diseñados para el procesamiento transaccional en tiempo real, priorizando transacciones cortas, alta concurrencia, baja latencia y estricta integridad ACID.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 13",
    "slideImage": "assets/clases_infographics/clase1_p13.png",
    "type": "single_choice"
  },
  {
    "id": 115,
    "classNum": 1,
    "topic": "OLTP vs OLAP",
    "unit": "Clase 1",
    "question": "¿Cuál es la característica principal de un sistema OLAP (Online Analytical Processing)?",
    "options": [
      "Optimizado para procesar transacciones bancarias unitarias en tiempo real con una frecuencia de confirmación de milisegundos por tupla.",
      "Optimizado para consultas complejas de agregación sobre grandes volúmenes de datos históricos (Data Warehouses / Cubos) para la toma de decisiones estratégicas.",
      "Requiere una normalización estricta en 5ta Forma Normal (5FN) para evitar cualquier clase de redundancia física en las tablas del sistema.",
      "Bloquea la totalidad de la base de datos de manera exclusiva cada vez que una conexión de usuario realiza una lectura de un único registro dentro del catálogo de datos del sistema de gestión de base de datos relacional."
    ],
    "correctAnswer": 1,
    "hint": "OLAP = analítica, inteligencia de negocios (BI), lectura masiva de datos históricos para toma de decisiones.",
    "explanation": "OLAP procesa datos consolidados e históricos provenientes de múltiples sistemas transaccionales, usando esquemas desnormalizados (estrella/copo de nieve) para análisis multidimensional y reportes gerenciales.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 13",
    "slideImage": "assets/clases_infographics/clase1_p13.png",
    "type": "single_choice"
  },
  {
    "id": 116,
    "classNum": 1,
    "topic": "Componentes del SGBD",
    "unit": "Clase 1",
    "question": "En el motor de un SGBD, ¿qué componente se encarga de analizar sintácticamente una consulta y elegir el plan de ejecución más eficiente?",
    "options": [
      "El Optimizador de Consultas y Procesador de Consultas (Query Processor).",
      "El Mapeador de Vistas Externas y Control de Sesiones de Red de Clientes.",
      "El Módulo Transpilador de Código JavaScript del Servidor de Aplicaciones.",
      "El Sistema de Detección de Intrusos y Cortafuegos de Paquetes en Servidor."
    ],
    "correctAnswer": 0,
    "hint": "El Optimizador evalúa los posibles caminos de acceso (índices, escaneos) y estima el costo computacional.",
    "explanation": "El Procesador de Consultas recibe la sentencia SQL, realiza el parseo léxico/sintáctico, la validación semántica contra el catálogo y el Optimizador de Consultas genera el plan de ejecución de menor costo.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 5",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "type": "single_choice"
  },
  {
    "id": 117,
    "classNum": 1,
    "topic": "Componentes del SGBD",
    "unit": "Clase 1",
    "question": "¿Qué módulo del SGBD es responsable de gestionar el intercambio de bloques de datos entre la memoria RAM (Buffer Pool) y el disco físico?",
    "options": [
      "El Optimizador de Consultas y Planificador de Acceso a Tablas Relacionales.",
      "El Administrador de Almacenamiento (Storage Manager / Buffer Manager).",
      "El Gestor de Concurrencia y Coordinador de Bloqueos Exclusivos de Fila.",
      "El Módulo de Autenticación y Autorización de Privilegios de Usuarios."
    ],
    "correctAnswer": 1,
    "hint": "El Buffer Manager mantiene páginas de datos en caché para minimizar operaciones lentas de E/S en disco.",
    "explanation": "El Storage Manager (y específicamente el Buffer Manager) administra la memoria caché (Buffer Pool), trayendo páginas del disco a RAM y escribiendo páginas sucias (dirty pages) de vuelta a disco.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 5",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "type": "single_choice"
  },
  {
    "id": 118,
    "classNum": 1,
    "topic": "Conceptos Fundamentales",
    "unit": "Clase 1",
    "question": "¿Qué es el Catálogo del Sistema o Diccionario de Datos en un SGBD?",
    "options": [
      "El archivo de registro de transacciones WAL donde se persisten los cambios antes de grabarlos definitivamente en los bloques de datos.",
      "Una estructura interna donde el SGBD almacena los Metadatos (definiciones de tablas, columnas, tipos de datos, índices y privilegios).",
      "La memoria caché compartida donde el motor almacena los planes de ejecución compilados para acelerar las sentencias recurrentes.",
      "El pool de conexiones TCP/IP que gestiona los hilos de ejecución activos de los clientes conectados al servidor corporativo."
    ],
    "correctAnswer": 1,
    "hint": "Son los 'datos sobre los datos' (metadatos) que el propio motor consulta para validar sentencias.",
    "explanation": "El Diccionario de Datos o Catálogo del Sistema contiene los metadatos de la base de datos: esquemas, restricciones, relaciones, estadísticas e información de seguridad que describen la estructura del sistema.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 4",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "type": "single_choice"
  },
  {
    "id": 119,
    "classNum": 1,
    "topic": "Integridad & Concurrencia",
    "unit": "Clase 1",
    "question": "¿A qué se denomina 'Inconsistencia de Datos' en un sistema de información?",
    "options": [
      "Al retardo en milisegundos que sufre el motor al ejecutar un escaneo secuencial sobre tablas extensas sin índices adecuados.",
      "A la situación en la que existen copias redundantes del mismo dato con valores diferentes y contradictorios en distintos lugares.",
      "Al fallo en la integridad referencial provocado por una sentencia DELETE en una tabla que mantiene registros subordinados activos.",
      "A la pérdida de durabilidad causada por un corte de energía antes de que las páginas sucias del búfer se sincronicen en el disco."
    ],
    "correctAnswer": 1,
    "hint": "Ocurre cuando se actualiza un dato en un archivo o tabla pero no en sus duplicados, generando contradicciones.",
    "explanation": "La inconsistencia de datos ocurre cuando la redundancia no controlada provoca que distintas copias del mismo dato contengan valores dispares (ej. la dirección de un cliente actualizada en facturación pero vieja en envíos).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 4",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "type": "single_choice"
  },
  {
    "id": 120,
    "classNum": 1,
    "topic": "Roles en BD",
    "unit": "Clase 1",
    "question": "¿Cuál es la función principal de un Administrador de Base de Datos (DBA)?",
    "options": [
      "Escribir exclusivamente los módulos de interfaz gráfica y maquetar los componentes visuales de las aplicaciones web consumidoras.",
      "Configurar las políticas de enrutamiento TCP/IP y ensamblar el cableado de red local en los gabinetes del centro de cómputos.",
      "Gestionar la seguridad, respaldos, afinamiento de rendimiento (tuning), disponibilidad y mantenimiento global del SGBD.",
      "Programar la lógica de negocio de los clientes móviles y diseñar los algoritmos de renderizado gráfico de videojuegos."
    ],
    "correctAnswer": 2,
    "hint": "El DBA tiene el control centralizado del entorno de base de datos físico y operativo.",
    "explanation": "El DBA es responsable de la administración física y operativa de la base de datos: definición de esquemas internos, asignación de permisos, monitoreo de rendimiento, copias de seguridad y recuperación ante desastres.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 5",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "type": "single_choice"
  },
  {
    "id": 121,
    "classNum": 1,
    "topic": "Arquitectura ANSI/SPARC",
    "unit": "Clase 1",
    "question": "Suponga que un registro de Empleado mide 20 bytes en el nivel interno (6 código, 4 depto, 10 salario). Si el departamento de Recursos Humanos solo consulta código y depto, ¿cuántos bytes consume esa vista en el nivel externo?",
    "options": [
      "10 bytes (6 bytes del código + 4 bytes del depto), ocultando el salario por confidencialidad.",
      "20 bytes obligatorios, porque ninguna vista puede proyectar menos bytes que el registro físico.",
      "16 bytes, ya que el motor debe agregar 6 bytes adicionales por cada columna para punteros.",
      "0 bytes, debido a que las vistas lógicas no consumen memoria de datos en el nivel externo."
    ],
    "correctAnswer": 0,
    "hint": "El nivel externo solo proyecta los campos que necesita ese usuario (6 + 4 = 10 bytes).",
    "explanation": "La vista externa de RRHH filtra los atributos innecesarios o confidenciales, proyectando únicamente el código (6B) y el departamento (4B), sumando 10 bytes para esa vista específica.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 8",
    "slideImage": "assets/clases_infographics/clase1_p08.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  <div class=\"dataset-table-card\">\n    <div class=\"dataset-card-header\">\n      <span class=\"table-name-tag\">📋 ESQUEMA FÍSICO: <code>Registro Empleado</code></span>\n      <span class=\"table-rows-tag\">20 bytes totales</span>\n    </div>\n    <div class=\"table-responsive-box\">\n      <table class=\"dataset-html-table\">\n        <thead>\n          <tr>\n            <th>Campo / Atributo</th>\n            <th>Descripción</th>\n            <th>Tamaño Físico</th>\n            <th>Visibilidad en Vista Pública</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td><code>codigo</code></td><td>Identificador (PK)</td><td>6 bytes</td><td>✅ Visible</td></tr>\n          <tr><td><code>id_depto</code></td><td>Código de Departamento</td><td>4 bytes</td><td>✅ Visible</td></tr>\n          <tr><td><code>salario</code></td><td>Salario Mensual (Confidencial)</td><td>10 bytes</td><td>🔒 <strong>Oculto en Vista</strong></td></tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"
  },
  {
    "id": 122,
    "classNum": 1,
    "topic": "Arquitectura de SGBD",
    "unit": "Clase 1",
    "question": "¿Qué sublenguaje de SQL se utiliza para definir estructuras y esquemas (ej. CREATE, ALTER, DROP)?",
    "options": [
      "DML (Data Manipulation Language).",
      "DDL (Data Definition Language).",
      "DCL (Data Control Language).",
      "TCL (Transaction Control Language)."
    ],
    "correctAnswer": 1,
    "hint": "DDL se enfoca en la DEFINICIÓN de la estructura y metadatos de las tablas.",
    "explanation": "El DDL (Data Definition Language) permite crear, modificar y eliminar las estructuras de la base de datos (tablas, índices, vistas, esquemas) en el catálogo del sistema.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 3",
    "slideImage": "assets/clases_infographics/clase1_p03.png",
    "type": "single_choice"
  },
  {
    "id": 123,
    "classNum": 1,
    "topic": "Arquitectura de SGBD",
    "unit": "Clase 1",
    "question": "¿Qué sublenguaje de SQL se utiliza para consultar y manipular las filas dentro de las tablas (ej. SELECT, INSERT, UPDATE, DELETE)?",
    "options": [
      "DDL (Data Definition Language).",
      "DCL (Data Control Language).",
      "DML (Data Manipulation Language).",
      "SDL (Storage Definition Language)."
    ],
    "correctAnswer": 2,
    "hint": "DML permite MANIPULAR los datos ya existentes o insertar nuevos registros.",
    "explanation": "El DML (Data Manipulation Language) abarca los comandos que permiten recuperar, insertar, actualizar y borrar datos almacenados en las tablas relacionales.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 3",
    "slideImage": "assets/clases_infographics/clase1_p03.png",
    "type": "single_choice"
  },
  {
    "id": 124,
    "classNum": 1,
    "topic": "Concurrencia & ACID",
    "unit": "Clase 1",
    "question": "¿Qué propiedad de las transacciones (ACID) garantiza que una transacción se ejecute de forma completa o no se ejecute en absoluto (todo o nada)?",
    "options": [
      "Consistencia (Consistency).",
      "Aislamiento (Isolation).",
      "Durabilidad (Durability).",
      "Atomicidad (Atomicity)."
    ],
    "correctAnswer": 3,
    "hint": "Atomicidad = indivisible. Si ocurre un fallo en medio de la transacción, se hace ROLLBACK completo.",
    "explanation": "La Atomicidad asegura que todas las operaciones de una transacción se confirmen exitosamente (COMMIT) o, ante cualquier fallo, se reviertan totalmente (ROLLBACK), evitando estados a medias.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 4",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "type": "single_choice"
  },
  {
    "id": 125,
    "classNum": 1,
    "topic": "Concurrencia & ACID",
    "unit": "Clase 1",
    "question": "¿Qué propiedad de las transacciones (ACID) garantiza que una vez confirmado un COMMIT, los cambios persistirán incluso ante un corte de energía?",
    "options": [
      "Durabilidad (Durability).",
      "Atomicidad (Atomicity).",
      "Aislamiento (Isolation).",
      "Elasticidad (Elasticity)."
    ],
    "correctAnswer": 0,
    "hint": "Durabilidad garantiza que los datos confirmados quedan grabados permanentemente en almacenamiento no volátil (WAL/Disco).",
    "explanation": "La Durabilidad asegura que los efectos de una transacción confirmada no se perderán por fallos del sistema o caídas del servidor, apoyándose en registros de log transaccional (Write-Ahead Logging / WAL).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 4",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "type": "single_choice"
  },
  {
    "id": 126,
    "classNum": 1,
    "topic": "Concurrencia & ACID",
    "unit": "Clase 1",
    "question": "¿Qué propiedad ACID asegura que las transacciones simultáneas no interfieran entre sí ni lean estados intermedios no confirmados?",
    "options": [
      "Atomicidad (Atomicity).",
      "Aislamiento (Isolation).",
      "Consistencia (Consistency).",
      "Redundancia (Redundancy)."
    ],
    "correctAnswer": 1,
    "hint": "Aislamiento = cada transacción se ejecuta como si fuera la única en el sistema.",
    "explanation": "El Aislamiento garantiza que las operaciones concurrentes se ejecuten de manera aislada, evitando lecturas sucias (dirty reads) y actualizaciones perdidas mediante mecanismos de control de concurrencia y bloqueos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 4",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "type": "single_choice"
  },
  {
    "id": 127,
    "classNum": 1,
    "topic": "Modelos de Datos",
    "unit": "Clase 1",
    "question": "¿Qué es el 'Desfase Objeto-Relacional' (Object-Relational Impedance Mismatch)?",
    "options": [
      "La discrepancia de latencia en milisegundos que ocurre entre el bus de memoria RAM y el acceso a los sectores físicos en disco durante operaciones de lectura masiva secuencial.",
      "La dificultad conceptual y técnica de mapear objetos de lenguajes orientados a objetos (con herencia, polimorfismo y punteros) a tablas relacionales planas bidimensionales.",
      "La incompatibilidad de protocolos de comunicación binaria entre clientes de escritorio y motores de base de datos relacionales en entornos empresariales distribuidos.",
      "El desajuste en la tasa de transferencia de datos cuando se replican tablas relacionales hacia clústeres no estructurados en arquitecturas de computación en la nube."
    ],
    "correctAnswer": 1,
    "hint": "Las tablas relacionales usan claves foráneas y relaciones algebraicas; los objetos usan referencias en memoria y herencia.",
    "explanation": "El impedance mismatch surge porque el paradigma relacional se basa en relaciones matemáticas y claves, mientras que la POO se basa en clases, encapsulamiento, punteros de memoria y herencia, requiriendo capas ORM como Hibernate o Prisma.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 12",
    "slideImage": "assets/clases_infographics/clase1_p12.png",
    "type": "single_choice"
  },
  {
    "id": 128,
    "classNum": 1,
    "topic": "Arquitectura ANSI/SPARC",
    "unit": "Clase 1",
    "question": "¿Qué componente del SGBD traduce una consulta escrita en términos del esquema conceptual a operaciones sobre el esquema interno?",
    "options": [
      "El Controlador de Interfaces de Red y Sockets de Escucha.",
      "El Módulo Validador de Sintaxis de Sentencias Declarativas para preservar la integridad referencial y el aislamiento entre transacciones activas.",
      "El Administrador de Autenticación de Usuarios del Sistema.",
      "El Mapeo Conceptual / Interno (Conceptual/Internal Mapping)."
    ],
    "correctAnswer": 3,
    "hint": "La correspondencia o mapeo entre niveles permite traducir entidades lógicas a bloques y punteros físicos.",
    "explanation": "Los mapeos (correspondencias entre niveles) permiten que el DBMS traduzca solicitudes de un nivel al siguiente, manteniendo la independencia entre la lógica del negocio y la implementación física.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 7",
    "slideImage": "assets/clases_infographics/clase1_p07.png",
    "type": "single_choice"
  },
  {
    "id": 129,
    "classNum": 1,
    "topic": "SGBD & Arquitectura",
    "unit": "Clase 1",
    "question": "Relaciona cada componente del DBMS con su función arquitectónica:",
    "pairs": [
      {
        "key": "Query Optimizer",
        "value": "Genera el plan de ejecución con menor costo estimado"
      },
      {
        "key": "Buffer Manager",
        "value": "Administra páginas de datos en la memoria RAM"
      },
      {
        "key": "Catalog Manager",
        "value": "Gestiona metadatos y esquemas del sistema"
      },
      {
        "key": "Log Manager (WAL)",
        "value": "Registra operaciones para recuperación ante fallos"
      }
    ],
    "explanation": "El Optimizador busca el camino de ejecución más eficiente, el Buffer Manager administra la caché en memoria RAM, el Catálogo resguarda los metadatos y el Log Manager asegura la recuperación y durabilidad transaccional.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 5",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "type": "matching"
  },
  {
    "id": 130,
    "classNum": 1,
    "topic": "Modelos de Datos",
    "unit": "Clase 1",
    "question": "Relaciona cada modelo de datos con su estructura fundamental de representación:",
    "pairs": [
      {
        "key": "Modelo Jerárquico",
        "value": "Estructura de árbol con un único padre por hijo"
      },
      {
        "key": "Modelo en Red",
        "value": "Grafos con múltiples padres mediante conjuntos (sets)"
      },
      {
        "key": "Modelo Relacional",
        "value": "Tablas/Relaciones compuestas por tuplas y atributos"
      },
      {
        "key": "Modelo OODBMS",
        "value": "Clases, métodos, herencia y punteros OID"
      }
    ],
    "explanation": "El modelo jerárquico utiliza árboles 1:N, el modelo en red permite grafos N:M, el relacional se basa en tablas sin punteros visibles y el modelo OO utiliza objetos con estado y comportamiento.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 1, pág. 10",
    "slideImage": "assets/clases_infographics/clase1_p10.png",
    "type": "matching"
  },
  {
    "id": 131,
    "classNum": 1,
    "topic": "Concepto de Base de Datos",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor el concepto de \"Base de Datos\"?",
    "options": [
      "Un compilador de código fuente de bajo nivel para procesar archivos binarios en memoria.",
      "Un conjunto de datos interrelacionados pertenecientes a un mismo contexto, almacenados sistemáticamente para su posterior uso.",
      "Un dispositivo de hardware secundario diseñado exclusivamente para almacenar registros transaccionales en el almacenamiento secundario durante el procesamiento concurrente de transacciones.",
      "Un protocolo de transporte seguro que encripta peticiones entre aplicaciones distribuidas."
    ],
    "correctAnswer": 1,
    "hint": "Una base de datos reúne información estructurada y organizada sobre un dominio concreto para ser aprovechada por aplicaciones.",
    "explanation": "Una Base de Datos es una colección estructurada y organizada de datos interrelacionados que pertenecen a un mismo contexto, almacenados sistemáticamente para permitir su consulta, actualización y administración eficiente.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 2)",
    "slideImage": "assets/clases_infographics/clase1_p02.png",
    "type": "single_choice"
  },
  {
    "id": 132,
    "classNum": 1,
    "topic": "Modelo Orientado a Objetos vs Relacional",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "En el modelo de base de datos orientado a objetos, ¿cómo se representa la información en comparación con el modelo relacional tradicional?",
    "options": [
      "Como objetos que combinan estado (atributos) y comportamiento (métodos), en lugar de tablas con filas y columnas.",
      "Como documentos en formato JSON sin validación de tipos de datos ni restricciones de integridad referencial.",
      "Mediante nodos y punteros directos en memoria volátil sin persistencia en dispositivos de almacenamiento secundario.",
      "A través de árboles jerárquicos donde cada registro subordinado posee obligatoriamente un único registro propietario."
    ],
    "correctAnswer": 0,
    "hint": "En POO los objetos encapsulan tanto datos (propiedades) como operaciones (métodos).",
    "explanation": "El modelo orientado a objetos representa la información en forma de objetos (integrando datos/atributos y operaciones/métodos), a diferencia del modelo relacional que organiza los datos en relaciones/tablas bidimensionales.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 5)",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "type": "single_choice"
  },
  {
    "id": 133,
    "classNum": 1,
    "topic": "Motor de Base de Datos (DBMS Engine)",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "¿Cuál es la función primordial del motor de base de datos (DBMS Engine)?",
    "options": [
      "Interpretar y optimizar scripts de cliente para mejorar el rendimiento de carga de páginas web corporativas.",
      "Gestionar el almacenamiento físico, la recuperación, concurrencia, seguridad e integridad de los datos en el almacenamiento secundario.",
      "Administrar la conmutación de paquetes en la red local y asignar direcciones IP dinámicas a las estaciones de trabajo para preservar la integridad referencial y el aislamiento entre transacciones activas.",
      "Generar de forma automatizada las interfaces de usuario y los estilos tipográficos para reportes de negocios."
    ],
    "correctAnswer": 1,
    "hint": "El motor o DBMS Engine es el corazón del software que gestiona el I/O en disco, bloqueos, transacciones y seguridad.",
    "explanation": "El motor de base de datos (DBMS Engine) es el componente central del SGBD encargado de interactuar con el sistema de archivos del SO, procesar consultas, controlar la concurrencia, mantener los logs de transacciones y garantizar la integridad y recuperación de datos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 3)",
    "slideImage": "assets/clases_infographics/clase1_p03.png",
    "type": "single_choice"
  },
  {
    "id": 134,
    "classNum": 1,
    "topic": "Redundancia de Datos",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "¿Qué es la \"redundancia de datos\" y por qué se busca minimizarla o controlarla en el diseño relacional?",
    "options": [
      "La lentitud de procesamiento que se produce cuando una consulta realiza múltiples agrupaciones sobre tablas desindexadas en el almacenamiento de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL.",
      "Es la duplicación innecesaria de la misma información en múltiples lugares, lo que puede causar inconsistencias y desperdicio de almacenamiento.",
      "La técnica de replicar bases de datos completas en servidores espejo para garantizar tolerancia a fallos de hardware en el centro de cómputos.",
      "El proceso de cifrar los bloques de almacenamiento secundario para evitar accesos no autorizados al sistema de ficheros de la base de datos."
    ],
    "correctAnswer": 1,
    "hint": "Tener el mismo dato repetido en muchos sitios provoca que, si se actualiza en uno y no en otro, haya inconsistencia.",
    "explanation": "La redundancia ocurre cuando los mismos datos se almacenan repetidamente en distintos lugares del sistema. Si un dato cambia en un lugar pero no en otro, se produce inconsistencia de datos, además de generar sobrecostos de almacenamiento.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 4)",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "type": "single_choice"
  },
  {
    "id": 135,
    "classNum": 1,
    "topic": "Independencia Lógica y Física",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "¿Qué significa que un SGBD proporcione \"independencia lógica y física de los datos\"?",
    "options": [
      "Asegurar que el motor relacional no requiera de un sistema operativo subyacente para gestionar la memoria física de trabajo ni los controladores de disco dentro del catálogo de datos del sistema de gestión de base de datos relacional.",
      "Permite modificar el esquema lógico (tablas/vistas) o físico (índices/almacenamiento en disco) sin tener que reescribir las aplicaciones que consumen los datos.",
      "Garantizar que todos los datos transaccionales se eliminen de forma automática cada vez que se reinicia el servidor central por mantenimiento preventivo.",
      "Permitir que la base de datos continúe procesando transacciones concurrentes sin conexión eléctrica ni acceso a redes de comunicaciones corporativas."
    ],
    "correctAnswer": 1,
    "hint": "La independencia desacopla el cómo se guardan los datos o cómo se organizan de los programas que los consultan.",
    "explanation": "La independencia de datos permite alterar la estructura física (organización en disco, índices) sin alterar los programas de aplicación (independencia física), y alterar el esquema conceptual sin alterar las vistas externas/programas existentes (independencia lógica).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 4)",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "type": "single_choice"
  },
  {
    "id": 136,
    "classNum": 1,
    "topic": "Modelo Jerárquico",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "En el modelo jerárquico de bases de datos, ¿cómo se estructuran y relacionan los registros de información?",
    "options": [
      "En una estructura de árbol invertido con relaciones padre-hijo (1 a N), donde cada nodo hijo tiene un único padre.",
      "En una matriz multidimensional sin orientación jerárquica donde los nodos se conectan mediante aristas ponderadas.",
      "Como un grafo abierto en el que cualquier nodo dependiente puede vincularse con múltiples registros propietarios a la vez.",
      "En tablas independientes asociadas exclusivamente mediante sentencias declarativas DML de manipulación de datos."
    ],
    "correctAnswer": 0,
    "hint": "El modelo jerárquico se organiza como un árbol genealógico: cada nodo hijo sólo tiene un único padre.",
    "explanation": "El modelo jerárquico organiza los datos en una estructura arborescente (árbol) donde cada nodo hijo solo puede tener un único nodo padre (relación 1:N).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 5)",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "type": "single_choice"
  },
  {
    "id": 137,
    "classNum": 1,
    "topic": "Tablas en el Modelo Relacional",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "En una base de datos relacional, ¿qué representa una \"tabla\" (o relación)?",
    "options": [
      "Un fichero binario comprimido con extensión propietaria que contiene una copia de seguridad consolidada de la información.",
      "Una estructura bidimensional compuesta por filas (tuplas o registros) y columnas (campos o atributos).",
      "Un segmento de memoria caché volátil donde el optimizador conserva los planes de consulta calculados para agilizar accesos.",
      "Un bloque de instrucciones almacenadas que se ejecuta de manera reactiva ante eventos de inserción o modificación de datos."
    ],
    "correctAnswer": 1,
    "hint": "Una tabla es una matriz con filas (entidades individuales) y columnas (atributos descriptivos).",
    "explanation": "Una tabla o relación es una estructura de datos de dos dimensiones donde las columnas representan atributos homogéneos y las filas representan instancias individuales o tuplas del mundo real modelado.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 2)",
    "slideImage": "assets/clases_infographics/clase1_p02.png",
    "type": "single_choice"
  },
  {
    "id": 138,
    "classNum": 1,
    "topic": "OLTP vs OLAP",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "¿Cuál es la principal diferencia entre un sistema OLTP (Online Transaction Processing) y uno OLAP (Online Analytical Processing)?",
    "options": [
      "OLTP está optimizado para transacciones rápidas, concurrentes y operativas del día a día; OLAP está orientado a consultas analíticas complejas y reportes sobre grandes volúmenes históricos.",
      "OLTP procesa consultas analíticas agregadas sobre cubos multidimensionales desnormalizados; OLAP gestiona inserciones bancarias puntuales en tiempo real con alta frecuencia de commit.",
      "OLTP almacena exclusivamente datos no estructurados en formato JSON y grafos distribuidos; OLAP exige bases de datos relacionales puras normalizadas estrictamente en Quinta Forma Normal para preservar la integridad referencial y el aislamiento entre transacciones activas.",
      "OLTP requiere apagar el motor para procesar transacciones por lotes nocturnos; OLAP permite modificaciones concurrentes directas sobre tablas físicas sin adquirir bloqueos en disco."
    ],
    "correctAnswer": 0,
    "hint": "OLTP = Transaccional diario (ej. ventas, pagos). OLAP = Analítico y Business Intelligence (ej. Data Warehouses).",
    "explanation": "Los sistemas OLTP gestionan operaciones transaccionales frecuentes de lectura/escritura en tiempo real (e.g. compras, transferencias), mientras que OLAP analiza tendencias y consolida datos históricos multidimensionales para la toma de decisiones.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 6)",
    "slideImage": "assets/clases_infographics/clase1_p06.png",
    "type": "single_choice"
  },
  {
    "id": 139,
    "classNum": 1,
    "topic": "Modelo en Red (Acceso no jerárquico)",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "¿Qué modelo de base de datos permite establecer relaciones muchos a muchos (N:M) de forma directa permitiendo que un nodo hijo tenga múltiples nodos padres mediante registros miembro y conjuntos?",
    "options": [
      "El Modelo en Red (Network Model).",
      "El Modelo Jerárquico estricto.",
      "El Sistema de Archivos Planos Secuenciales.",
      "El Modelo de Cinta Magnética."
    ],
    "correctAnswer": 0,
    "hint": "Surgió para superar la limitación del modelo jerárquico de tener un solo padre por nodo.",
    "explanation": "A diferencia del modelo jerárquico (que limita a 1 padre por hijo), el modelo en red (CODASYL) permite representar relaciones N:M donde un registro miembro puede pertenecer a más de un conjunto (dueño múltiple).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 5)",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "type": "single_choice"
  },
  {
    "id": 140,
    "classNum": 1,
    "topic": "Arquitectura ANSI-SPARC",
    "unit": "Clase 1 - Autoevaluación 1",
    "question": "Según la arquitectura de 3 niveles ANSI/SPARC de los SGBD, ¿cuál es el nivel más cercano a los usuarios finales que define cómo ven los datos distintas áreas de la empresa?",
    "options": [
      "Nivel Externo (o de Vistas).",
      "Nivel Conceptual (o Lógico Global).",
      "Nivel Interno (o Físico de Almacenamiento).",
      "Nivel de Hardware y Firmware."
    ],
    "correctAnswer": 0,
    "hint": "Es el nivel que provee vistas personalizadas adaptadas a cada rol de usuario.",
    "explanation": "El nivel externo (o de vistas) describe la parte de la base de datos relevante para cada usuario o grupo de usuarios particular, ocultando el resto de los detalles del esquema global conceptual.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 1 (Diapositiva Clase 1, pág. 3)",
    "slideImage": "assets/clases_infographics/clase1_p03.png",
    "type": "single_choice"
  },
  {
    "id": 201,
    "classNum": 2,
    "topic": "DQL Básico",
    "unit": "Clase 2",
    "question": "¿Cuál es la función de la cláusula SELECT en una consulta SQL estándar?",
    "options": [
      "Especificar las columnas, expresiones o cálculos que se proyectarán en el conjunto de resultados.",
      "Filtrar las tuplas de la tabla aplicando condiciones booleanas sobre los valores de los atributos.",
      "Definir el criterio de agrupamiento para la posterior aplicación de funciones de agregación.",
      "Determinar el orden físico en que los bloques de datos se grabarán en el almacenamiento secundario."
    ],
    "correctAnswer": 0,
    "hint": "SELECT se encarga de la 'proyección' (qué columnas mostrar).",
    "explanation": "La cláusula SELECT realiza la operación de proyección del álgebra relacional, determinando cuáles atributos o expresiones calculadas formarán parte del conjunto de resultados.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 3",
    "slideImage": "assets/clases_infographics/clase2_p03.png",
    "type": "single_choice"
  },
  {
    "id": 202,
    "classNum": 2,
    "topic": "DQL Básico",
    "unit": "Clase 2",
    "question": "¿Por qué se desaconseja el uso de `SELECT *` en entornos de producción y aplicaciones críticas?",
    "options": [
      "Porque incrementa el tráfico de red, reduce el rendimiento al leer columnas innecesarias y puede romper aplicaciones si cambia el esquema.",
      "Porque el estándar SQL prohíbe terminantemente el uso de comodines en sentencias que involucren tablas con claves primarias definidas.",
      "Porque el optimizador de consultas se ve forzado a deshabilitar todos los índices existentes, recurriendo a escaneos aleatorios de bloques.",
      "Porque el servidor de base de datos bloquea de forma exclusiva la tabla completa durante varias horas impidiendo lecturas concurrentes."
    ],
    "correctAnswer": 0,
    "hint": "SELECT * trae todas las columnas, sobrecargando el tráfico de red y anulando optimizaciones.",
    "explanation": "Usar SELECT * incrementa el tráfico de red y el uso de memoria al transferir columnas innecesarias, además de hacer frágiles a las aplicaciones si el esquema de la tabla cambia.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 3",
    "slideImage": "assets/clases_infographics/clase2_p03.png",
    "type": "single_choice"
  },
  {
    "id": 203,
    "classNum": 2,
    "topic": "Filtrado WHERE",
    "unit": "Clase 2",
    "question": "¿Cuál es la función primordial de la cláusula WHERE en una sentencia SQL?",
    "options": [
      "Ordenar las filas resultantes de acuerdo con un criterio alfabético o numérico específico.",
      "Filtrar las filas que cumplen con una o más condiciones lógicas antes de cualquier agrupamiento.",
      "Agrupar conjuntos de datos similares para aplicarles funciones matemáticas de agregación.",
      "Crear nuevas tablas temporales en el esquema de base de datos durante el tiempo de ejecución para preservar la integridad referencial y el aislamiento entre transacciones activas."
    ],
    "correctAnswer": 1,
    "hint": "WHERE realiza la 'selección' (qué filas cumplen el criterio).",
    "explanation": "La cláusula WHERE aplica la operación de selección (filtro de tuplas) evaluando una condición booleana sobre cada fila; solo aquellas donde el predicado evalúa a TRUE son incluidas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 4",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "type": "single_choice"
  },
  {
    "id": 204,
    "classNum": 2,
    "topic": "Operadores de Comparación",
    "unit": "Clase 2",
    "question": "¿Cuáles son los operadores válidos en SQL estándar para denotar 'distinto de' (desigualdad)?",
    "options": [
      "`<>` y `!=` (ambos son válidos en SQL estándar y en la mayoría de los motores relacionales).",
      "`!=` y `!==` (provenientes de la sintaxis estándar de tipado estricto en lenguajes cliente).",
      "`==` y `===` (utilizados comúnmente en la comparación de igualdad en entornos de frontend).",
      "`NOT EQUAL` y `DIFFERENT` (palabras clave reservadas para comparaciones léxicas en SQL)."
    ],
    "correctAnswer": 0,
    "hint": "<> es el operador estándar oficial de SQL, aunque la mayoría de los motores también admiten !=.",
    "explanation": "En el estándar ANSI SQL, el operador de desigualdad formal es <>, aunque prácticamente todos los SGBD relacionales modernos soportan también != como sinónimo.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 4",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "type": "single_choice"
  },
  {
    "id": 205,
    "classNum": 2,
    "topic": "Lógica Trivaluada & NULL",
    "unit": "Clase 2",
    "question": "¿Por qué la comparación `salario = NULL` o `salario <> NULL` nunca devuelve ninguna fila en SQL?",
    "options": [
      "Porque NULL representa la ausencia de valor o valor desconocido, y cualquier comparación escalar con NULL evalúa a UNKNOWN (desconocido), requiriendo el uso de `IS NULL` o `IS NOT NULL`.",
      "Porque NULL es una palabra reservada que solo puede emplearse en la cláusula ORDER BY para determinar si los registros nulos se ubican al principio o al final del listado ordenado dentro del catálogo de datos del sistema de gestión de base de datos relacional.",
      "Porque los motores relacionales transforman de manera automática todo valor NULL al número cero en campos numéricos y a cadena vacía en campos alfanuméricos durante el filtrado.",
      "Porque el compilador de sentencias SQL interrumpe de forma obligatoria la consulta arrojando una excepción de tipo NULL_POINTER_EXCEPTION antes de consultar los índices en disco."
    ],
    "correctAnswer": 0,
    "hint": "En lógica trivaluada (True, False, Unknown), nada es igual a lo desconocido; se debe usar IS NULL.",
    "explanation": "NULL no es un valor, sino un estado que indica ausencia de información. En la lógica trivaluada de SQL, 'X = NULL' resulta en UNKNOWN, y la cláusula WHERE solo deja pasar filas donde la condición es TRUE. Por ello debe usarse 'IS NULL'.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 5",
    "slideImage": "assets/clases_infographics/clase2_p05.png",
    "type": "single_choice"
  },
  {
    "id": 206,
    "classNum": 2,
    "topic": "Lógica Trivaluada & NULL",
    "unit": "Clase 2",
    "question": "¿Qué devuelve la función `COALESCE(comision, bono, 0)` en una consulta SQL?",
    "options": [
      "La suma acumulada de las tres columnas numéricas ignorando los registros con valores cero.",
      "El primer valor de la lista que no sea NULL; si todos son NULL, devuelve 0.",
      "El promedio ponderado de los campos numéricos omitiendo los valores nulos encontrados.",
      "Un valor booleano TRUE si al menos una de las tres columnas contiene un valor numérico positivo."
    ],
    "correctAnswer": 1,
    "hint": "COALESCE evalúa los argumentos en orden y retorna el primer elemento no nulo.",
    "explanation": "La función COALESCE(val1, val2, ..., valN) es una función estándar de SQL que retorna el primer argumento no nulo de su lista.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 5",
    "slideImage": "assets/clases_infographics/clase2_p05.png",
    "type": "single_choice"
  },
  {
    "id": 207,
    "classNum": 2,
    "topic": "Filtrado por Rango",
    "unit": "Clase 2",
    "question": "En la expresión `WHERE edad BETWEEN 20 AND 30`, ¿los límites 20 y 30 están incluidos en el resultado?",
    "options": [
      "Solo se incluye el límite superior (30), pero el límite inferior (20) se excluye de la evaluación.",
      "Solo se incluye el límite inferior (20), pero el límite superior (30) se excluye de la evaluación.",
      "Sí, el operador BETWEEN en SQL es inclusivo en ambos extremos (`edad >= 20 AND edad <= 30`).",
      "No, el operador BETWEEN es estrictamente exclusivo en ambos extremos (`edad > 20 AND edad < 30`)."
    ],
    "correctAnswer": 2,
    "hint": "BETWEEN es equivalente a mayor/igual Y menor/igual (incluye los dos extremos).",
    "explanation": "El operador BETWEEN es inclusivo: 'col BETWEEN A AND B' equivale exactamente a la condición 'col >= A AND col <= B'.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 6",
    "slideImage": "assets/clases_infographics/clase2_p06.png",
    "type": "single_choice"
  },
  {
    "id": 208,
    "classNum": 2,
    "topic": "Operador IN",
    "unit": "Clase 2",
    "question": "¿A qué expresión lógica equivale la condición `WHERE pais IN ('Argentina', 'Chile', 'Uruguay')`?",
    "options": [
      "`WHERE pais = 'Argentina' AND pais = 'Chile' AND pais = 'Uruguay'`.",
      "`WHERE pais LIKE '%Argentina%' AND pais LIKE '%Chile%'`.",
      "`WHERE pais >= 'Argentina' AND pais <= 'Uruguay'`.",
      "`WHERE pais = 'Argentina' OR pais = 'Chile' OR pais = 'Uruguay'`."
    ],
    "correctAnswer": 3,
    "hint": "IN verifica pertenencia a una lista mediante una disyunción (OR) de igualdades.",
    "explanation": "El operador IN es una forma compacta y legible de escribir una serie de condiciones de igualdad conectadas por el operador lógico OR.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 6",
    "slideImage": "assets/clases_infographics/clase2_p06.png",
    "type": "single_choice"
  },
  {
    "id": 209,
    "classNum": 2,
    "topic": "Patrones LIKE",
    "unit": "Clase 2",
    "question": "En una consulta con el operador `LIKE`, ¿qué representa el comodín de porcentaje (`%`)?",
    "options": [
      "Cero, uno o múltiples caracteres arbitrarios de cualquier longitud.",
      "Exactamente un único carácter obligatorio de tipo alfanumérico.",
      "Cualquier número entero comprendido dentro del rango del 0 al 9.",
      "El inicio obligatorio de una palabra sin permitir espacios previos."
    ],
    "correctAnswer": 0,
    "hint": "% equivale a cualquier secuencia de caracteres (o cadena vacía).",
    "explanation": "En el operador LIKE, el comodín '%' representa cualquier cadena de cero o más caracteres, mientras que el guión bajo '_' representa exactamente un carácter.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 7",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "type": "single_choice"
  },
  {
    "id": 210,
    "classNum": 2,
    "topic": "Patrones LIKE",
    "unit": "Clase 2",
    "question": "¿Qué patrón `LIKE` coincide con cadenas que contengan exactamente 3 caracteres e inicien con la letra 'A'?",
    "options": [
      "`'A%'` (letra A seguida de cualquier cantidad arbitraria de caracteres).",
      "`'A__'` (letra A seguida de dos guiones bajos que representan un carácter cada uno).",
      "`'A*2'` (letra A con operador de repetición aritmética de dos posiciones).",
      "`'A..'` (letra A con comodines de puntos utilizados en expresiones regulares POSIX)."
    ],
    "correctAnswer": 1,
    "hint": "Cada guión bajo '_' representa exactamente un único carácter.",
    "explanation": "El guión bajo '_' en SQL coincide con exactamente un carácter arbitrario. Por ende, 'A__' coincide con cualquier cadena de exactamente 3 caracteres que empiece con 'A' (ej. 'ANA', 'AVE').",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 7",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "type": "single_choice"
  },
  {
    "id": 211,
    "classNum": 2,
    "topic": "Patrones LIKE",
    "unit": "Clase 2",
    "question": "¿Cómo se busca un texto que contenga literalmente el símbolo de porcentaje ('%') en la columna descuento?",
    "options": [
      "No es posible buscar el símbolo '%' en SQL bajo ninguna circunstancia.",
      "Reemplazando el operador LIKE por el operador REGEX_MATCH.",
      "Utilizando un carácter de escape: `WHERE descuento LIKE '%\\%%' ESCAPE '\\'`.",
      "Escribiendo cuatro porcentajes consecutivos: `WHERE descuento LIKE '%%%%'`."
    ],
    "correctAnswer": 2,
    "hint": "La cláusula ESCAPE define un carácter previo para tratar al comodín como un carácter literal.",
    "explanation": "La cláusula ESCAPE especifica qué carácter actúa como prefijo de escape para anular el significado especial de comodines como '%' o '_'.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 7",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "type": "single_choice"
  },
  {
    "id": 212,
    "classNum": 2,
    "topic": "Cláusula DISTINCT",
    "unit": "Clase 2",
    "question": "¿Qué efecto produce la palabra clave `DISTINCT` en `SELECT DISTINCT ciudad, pais FROM Clientes`?",
    "options": [
      "Ordena alfabéticamente las ciudades de la A a la Z.",
      "Elimina todas las filas de la tabla física que contengan valores duplicados.",
      "Filtra la tabla para mostrar únicamente las ciudades donde la población supere el millón de habitantes.",
      "Elimina las filas duplicadas en el conjunto resultante, considerando la combinación de ciudad y país."
    ],
    "correctAnswer": 3,
    "hint": "DISTINCT actúa sobre el resultado final de la consulta eliminando combinaciones idénticas.",
    "explanation": "DISTINCT evalúa las tuplas proyectadas en el resultado y descarta las filas duplicadas, devolviendo solo combinaciones únicas de las columnas seleccionadas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 8",
    "slideImage": "assets/clases_infographics/clase2_p08.png",
    "type": "single_choice"
  },
  {
    "id": 213,
    "classNum": 2,
    "topic": "Cláusula ORDER BY",
    "unit": "Clase 2",
    "question": "Si no se especifica el sentido en la cláusula `ORDER BY apellido`, ¿cuál es el ordenamiento aplicado por defecto?",
    "options": [
      "ASC (Ascendente, de menor a mayor / de la A a la Z).",
      "DESC (Descendente, de mayor a menor / de la Z a la A).",
      "Aleatorio (RANDOM).",
      "El orden físico en el que las filas fueron grabadas en el disco duro."
    ],
    "correctAnswer": 0,
    "hint": "El estándar SQL define ASC como el orden predeterminado.",
    "explanation": "Por defecto, la cláusula ORDER BY aplica el criterio ASC (ascendente), ordenando números de menor a mayor y cadenas de la A a la Z.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 9",
    "slideImage": "assets/clases_infographics/clase2_p09.png",
    "type": "single_choice"
  },
  {
    "id": 214,
    "classNum": 2,
    "topic": "Cláusula ORDER BY",
    "unit": "Clase 2",
    "question": "¿Cómo se comporta la sentencia `ORDER BY departamento ASC, salario DESC`?",
    "options": [
      "Ordena primero por departamento de la A a la Z; ante empates en el departamento, desempata ordenando el salario de mayor a menor.",
      "Calcula la suma del código de departamento con el salario y ordena el resultado de manera descendente en el conjunto final.",
      "Descarta la columna departamento y aplica el criterio de ordenamiento exclusivamente sobre la columna salario de menor a mayor de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL.",
      "Intercala alternadamente una fila ordenada por departamento y la siguiente fila ordenada por el valor de salario en disco."
    ],
    "correctAnswer": 0,
    "hint": "El ordenamiento multicriterio evalúa las columnas de izquierda a derecha.",
    "explanation": "En ORDER BY con múltiples columnas, el motor ordena según la primera columna y solo utiliza la segunda columna para desempatar filas que tengan el mismo valor en la primera.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 9",
    "slideImage": "assets/clases_infographics/clase2_p09.png",
    "type": "single_choice"
  },
  {
    "id": 215,
    "classNum": 2,
    "topic": "Cláusula ORDER BY",
    "unit": "Clase 2",
    "question": "¿Cómo se puede controlar explícitamente la posición de los valores nulos al ordenar en PostgreSQL y SQL estándar?",
    "options": [
      "Mediante las cláusulas `NULLS FIRST` o `NULLS LAST` al final del criterio de ordenamiento.",
      "Reemplazando obligatoriamente los valores NULL por números negativos dentro del predicado WHERE.",
      "Configurando una variable de entorno en el sistema de archivos del servidor anfitrión de datos.",
      "No es posible alterar la posición de los NULLs en SQL por tratarse de un comportamiento estático."
    ],
    "correctAnswer": 0,
    "hint": "Se añade 'NULLS FIRST' o 'NULLS LAST' tras el nombre de la columna.",
    "explanation": "SQL estándar permite especificar 'ORDER BY columna ASC NULLS LAST' (o NULLS FIRST) para ubicar explícitamente las tuplas con valores nulos al principio o al final de la lista.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 9",
    "slideImage": "assets/clases_infographics/clase2_p09.png",
    "type": "single_choice"
  },
  {
    "id": 216,
    "classNum": 2,
    "topic": "Paginación LIMIT / OFFSET",
    "unit": "Clase 2",
    "question": "En una consulta SQL, ¿qué devuelve la combinación `LIMIT 10 OFFSET 20`?",
    "options": [
      "Omite (salta) las primeras 20 filas y retorna las siguientes 10 filas (filas 21 a 30).",
      "Devuelve 10 filas comenzando desde la fila 1 y luego 20 filas más.",
      "Limita el tiempo de respuesta de la consulta a 10 milisegundos con un retraso de 20 segundos.",
      "Devuelve un total de 200 filas calculadas por multiplicación."
    ],
    "correctAnswer": 0,
    "hint": "OFFSET = cuántas filas saltear; LIMIT = cuántas filas tomar.",
    "explanation": "OFFSET 20 indica al motor que ignore las primeras 20 filas del conjunto ordenado, y LIMIT 10 restringe el resultado a un máximo de 10 filas a partir de ese punto (común en la paginación de interfaces web).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 10",
    "slideImage": "assets/clases_infographics/clase2_p10.png",
    "type": "single_choice"
  },
  {
    "id": 217,
    "classNum": 2,
    "topic": "Precedencia de Operadores",
    "unit": "Clase 2",
    "question": "En la evaluación de condiciones en SQL, ¿cuál es la precedencia por defecto entre los operadores lógicos `NOT`, `AND` y `OR`?",
    "options": [
      "`OR` tiene mayor prioridad que `AND`, y `AND` mayor que `NOT`.",
      "`NOT` se evalúa primero, luego `AND`, y finalmente `OR` (a menos que se usen paréntesis).",
      "Los tres operadores tienen exactamente la misma prioridad y se evalúan estrictamente de derecha a izquierda.",
      "El orden de evaluación depende del número de letras de cada nombre de columna."
    ],
    "correctAnswer": 1,
    "hint": "NOT > AND > OR. El AND actúa como la multiplicación y el OR como la suma.",
    "explanation": "La precedencia lógica en SQL establece que NOT tiene la máxima prioridad, seguido por AND, y por último OR. El uso de paréntesis permite alterar este orden explícitamente.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 4",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "type": "single_choice"
  },
  {
    "id": 218,
    "classNum": 2,
    "topic": "Precedencia de Operadores",
    "unit": "Clase 2",
    "question": "Dada la condición `WHERE depto = 'Ventas' OR depto = 'IT' AND salario > 50000`, ¿quiénes calificarán debido a la precedencia del AND?",
    "options": [
      "Todos los empleados de Ventas (sin importar su salario) Y los empleados de IT que ganen más de $50.000.",
      "Únicamente los empleados que pertenezcan a Ventas e IT simultáneamente y perciban más de $50.000 de sueldo.",
      "La totalidad de los trabajadores de la empresa independientemente del área y del salario percibido.",
      "Exclusivamente los trabajadores del sector de IT que perciban una remuneración inferior a $50.000."
    ],
    "correctAnswer": 0,
    "hint": "Como AND se evalúa antes que OR, la condición se agrupa como: Ventas OR (IT AND salario > 50000).",
    "explanation": "Debido a que AND tiene mayor precedencia que OR, se evalúa como `depto = 'Ventas' OR (depto = 'IT' AND salario > 50000)`. Si se deseaba que el salario aplicara a ambos, se debieron colocar paréntesis: `(depto = 'Ventas' OR depto = 'IT') AND salario > 50000`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 4",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "type": "single_choice"
  },
  {
    "id": 219,
    "classNum": 2,
    "topic": "Alias de Columnas",
    "unit": "Clase 2",
    "question": "¿Para qué sirve la palabra clave `AS` en `SELECT salario * 1.20 AS salario_con_aumento FROM Empleados`?",
    "options": [
      "Para renombrar la columna o expresión en el encabezado del resultado de la consulta.",
      "Para modificar permanentemente el nombre de la columna física en el catálogo del sistema.",
      "Para exigir que el cálculo aritmético se procese de manera asíncrona en memoria secundaria.",
      "Para declarar que la expresión calculada debe comportarse como una clave foránea en la tabla."
    ],
    "correctAnswer": 0,
    "hint": "AS asigna un 'alias' (etiqueta legible) al resultado temporal de la proyección.",
    "explanation": "La cláusula AS permite definir un alias para una columna o expresión calculada, proporcionando un nombre legible y significativo en el encabezado del conjunto de resultados.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 3",
    "slideImage": "assets/clases_infographics/clase2_p03.png",
    "type": "single_choice"
  },
  {
    "id": 220,
    "classNum": 2,
    "topic": "Funciones de Cadenas",
    "unit": "Clase 2",
    "question": "¿Qué función de cadenas permite convertir un texto completamente a letras mayúsculas en SQL estándar?",
    "options": [
      "UPPER(texto) o UCASE(texto).",
      "TO_CAPS(texto) o STR_UP(texto).",
      "STRING_MAX(texto) o TEXT_UP(texto).",
      "CAPITALIZE_ALL(texto) o UPPER_CASE(texto)."
    ],
    "correctAnswer": 0,
    "hint": "UPPER() es la función estándar de SQL para mayúsculas.",
    "explanation": "UPPER(cadena) es la función escalar estándar de SQL que convierte todos los caracteres de una cadena a mayúsculas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 11",
    "slideImage": "assets/clases_infographics/clase2_p11.png",
    "type": "single_choice"
  },
  {
    "id": 221,
    "classNum": 2,
    "topic": "Funciones de Cadenas",
    "unit": "Clase 2",
    "question": "¿Qué función escalar se utiliza para concatenar dos o más cadenas de texto en SQL estándar?",
    "options": [
      "CONCAT(cad1, cad2, ...) o el operador `||`.",
      "JOIN_TEXT(cad1, cad2) o el operador `&&` en el almacenamiento secundario durante el procesamiento concurrente de transacciones.",
      "APPEND(cad1, cad2) o el operador `++`.",
      "MERGE_STR(cad1, cad2) o el operador `<<`."
    ],
    "correctAnswer": 0,
    "hint": "CONCAT() o el operador estándar || unen fragmentos de texto.",
    "explanation": "La función CONCAT() y el operador de concatenación '||' (en PostgreSQL/Oracle/SQLite) unen dos o más cadenas de texto en una sola.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 11",
    "slideImage": "assets/clases_infographics/clase2_p11.png",
    "type": "single_choice"
  },
  {
    "id": 222,
    "classNum": 2,
    "topic": "Funciones de Cadenas",
    "unit": "Clase 2",
    "question": "¿Qué realiza la función `LENGTH(nombre)` (o `LEN()` en SQL Server)?",
    "options": [
      "Devuelve el número de caracteres que contiene la cadena de texto.",
      "Devuelve el tamaño en megabytes que ocupa el archivo en el disco.",
      "Calcula la cantidad total de registros almacenados en la tabla.",
      "Mide el tiempo de respuesta del motor en microsegundos de CPU."
    ],
    "correctAnswer": 0,
    "hint": "Devuelve la longitud (cantidad de letras) de la cadena.",
    "explanation": "LENGTH() calcula y devuelve el número total de caracteres de una cadena de texto dada.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 11",
    "slideImage": "assets/clases_infographics/clase2_p11.png",
    "type": "single_choice"
  },
  {
    "id": 223,
    "classNum": 2,
    "topic": "Funciones de Fecha",
    "unit": "Clase 2",
    "question": "¿Cómo se obtiene el año actual a partir de una columna de tipo fecha `fecha_nacimiento` en PostgreSQL / SQL estándar?",
    "options": [
      "`EXTRACT(YEAR FROM fecha_nacimiento)`",
      "`GET_YEAR(fecha_nacimiento)`",
      "`YEAR_OF(fecha_nacimiento)`",
      "`SPLIT_DATE(fecha_nacimiento, 1)` para preservar la integridad referencial y el aislamiento entre transacciones activas."
    ],
    "correctAnswer": 0,
    "hint": "La función EXTRACT(field FROM source) es la sintaxis estándar para descomponer fechas.",
    "explanation": "La función `EXTRACT(part FROM date)` es el estándar ANSI SQL para obtener partes de una fecha (YEAR, MONTH, DAY, HOUR).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 12",
    "slideImage": "assets/clases_infographics/clase2_p12.png",
    "type": "single_choice"
  },
  {
    "id": 224,
    "classNum": 2,
    "topic": "Expresiones Condicionales",
    "unit": "Clase 2",
    "question": "¿Cómo se estructura la expresión condicional estándar en SQL para evaluar múltiples casos en una consulta?",
    "options": [
      "`CASE WHEN condicion THEN valor1 ELSE valor2 END`",
      "`IF (condicion, valor1, valor2)`",
      "`SWITCH (condicion) { CASE valor1: break; }` de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL.",
      "`EVALUATE condicion -> valor1 OR valor2`"
    ],
    "correctAnswer": 0,
    "hint": "Inicia con CASE, usa WHEN/THEN, opcional ELSE, y finaliza obligatoriamente con END.",
    "explanation": "La expresión CASE WHEN ... THEN ... ELSE ... END es la estructura condicional estándar de SQL para lógica de bifurcación dentro de cláusulas SELECT, WHERE u ORDER BY.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 13",
    "slideImage": "assets/clases_infographics/clase2_p13.png",
    "type": "single_choice"
  },
  {
    "id": 225,
    "classNum": 2,
    "topic": "Búsqueda con ILIKE",
    "unit": "Clase 2",
    "question": "¿Qué diferencia existe en PostgreSQL entre el operador `LIKE` y el operador `ILIKE`?",
    "options": [
      "`LIKE` distingue mayúsculas de minúsculas (case-sensitive), mientras que `ILIKE` es insensible a mayúsculas/minúsculas (case-insensitive).",
      "`LIKE` solo permite evaluar columnas numéricas y de fecha, mientras que `ILIKE` se aplica exclusivamente sobre cadenas de texto.",
      "`LIKE` pertenece a los comandos DDL de definición, mientras que `ILIKE` forma parte de las instrucciones DML de manipulación de datos dentro del catálogo de datos del sistema de gestión de base de datos relacional.",
      "`LIKE` requiere el uso de índices de tipo Hash en disco, mientras que `ILIKE` opera exclusivamente mediante escaneos de árbol B-Tree."
    ],
    "correctAnswer": 0,
    "hint": "La 'I' inicial en ILIKE significa 'Insensitive' (insensible a mayúsculas/minúsculas).",
    "explanation": "En PostgreSQL, `LIKE` es estricto con las mayúsculas/minúsculas, mientras que `ILIKE` realiza la comparación sin distinguir entre 'A' y 'a'.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 7",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "type": "single_choice"
  },
  {
    "id": 226,
    "classNum": 2,
    "topic": "Operador NOT IN & NULLs",
    "unit": "Clase 2",
    "question": "¿Qué ocurre si una lista en `WHERE id NOT IN (1, 2, NULL)` contiene un valor NULL?",
    "options": [
      "La consulta devuelve 0 filas porque `id NOT IN (...)` se expande a `id <> 1 AND id <> 2 AND id <> NULL`, y al evaluar `id <> NULL` a UNKNOWN, toda la conjunción AND resulta en UNKNOWN.",
      "El motor descarta silenciosamente el valor NULL de la lista y evalúa la condición de exclusión considerando únicamente los identificadores 1 y 2 con total normalidad en el resultado en el almacenamiento secundario durante el procesamiento concurrente de transacciones.",
      "El servidor de base de datos interrumpe la consulta arrojando una excepción crítica de tipo NULL_POINTER_EXCEPTION en la consola de administración del motor relacional.",
      "La consulta devuelve la totalidad de las filas de la tabla sin aplicar ningún filtro porque la presencia de un valor nulo anula por completo la evaluación del predicado WHERE."
    ],
    "correctAnswer": 0,
    "hint": "¡Peligro clásico de parcial! NOT IN con un NULL en la lista siempre anula el resultado.",
    "explanation": "El operador `NOT IN (v1, v2, NULL)` equivale a `(col <> v1 AND col <> v2 AND col <> NULL)`. Al ser `col <> NULL` igual a UNKNOWN, la expresión completa nunca es TRUE, resultando en un conjunto vacío.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 6",
    "slideImage": "assets/clases_infographics/clase2_p06.png",
    "type": "single_choice"
  },
  {
    "id": 227,
    "classNum": 2,
    "topic": "DQL Básico",
    "unit": "Clase 2",
    "question": "Deseas consultar todos los clientes cuyo nombre comience con 'M' y cuyo saldo sea mayor a 1000. Completa la cláusula WHERE faltante:",
    "template": "SELECT * FROM Clientes WHERE nombre LIKE 'M%' {INPUT} saldo > 1000;",
    "expectedAnswer": "AND",
    "hint": "Ambas condiciones deben cumplirse simultáneamente (conjunción lógica).",
    "explanation": "El operador lógico AND asegura que solo se retornen filas que cumplan simultáneamente la condición de texto (nombre que empieza con 'M') y la condición numérica (saldo > 1000).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 4",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "type": "fill_in_sql",
    "acceptedAnswers": [
      "AND"
    ]
  },
  {
    "id": 228,
    "classNum": 2,
    "topic": "Cláusula ORDER BY",
    "unit": "Clase 2",
    "question": "Escribe la palabra clave SQL para ordenar los productos por precio de mayor a menor (descendente):",
    "template": "SELECT * FROM Productos ORDER BY precio {INPUT};",
    "expectedAnswer": "DESC",
    "hint": "Acrónimo de descendente (4 letras).",
    "explanation": "La palabra clave DESC (descending) ordena los resultados de mayor a menor valor.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 9",
    "slideImage": "assets/clases_infographics/clase2_p09.png",
    "type": "fill_in_sql",
    "acceptedAnswers": [
      "DESC"
    ]
  },
  {
    "id": 229,
    "classNum": 2,
    "topic": "Cláusulas DQL",
    "unit": "Clase 2",
    "question": "Relaciona cada cláusula de consulta SQL con su propósito funcional:",
    "pairs": [
      {
        "key": "SELECT",
        "value": "Proyecta las columnas y expresiones a mostrar"
      },
      {
        "key": "WHERE",
        "value": "Filtra filas evaluando predicados lógicos"
      },
      {
        "key": "DISTINCT",
        "value": "Elimina tuplas duplicadas del resultado"
      },
      {
        "key": "ORDER BY",
        "value": "Ordena el conjunto resultante (ASC/DESC)"
      }
    ],
    "explanation": "SELECT proyecta atributos, WHERE filtra filas, DISTINCT descarta duplicados y ORDER BY establece el criterio de ordenación.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 2",
    "slideImage": "assets/clases_infographics/clase2_p02.png",
    "type": "matching"
  },
  {
    "id": 230,
    "classNum": 2,
    "topic": "Operadores SQL",
    "unit": "Clase 2",
    "question": "Relaciona cada operador de filtrado con su significado:",
    "pairs": [
      {
        "key": "IS NULL",
        "value": "Verifica si una columna carece de valor asignado"
      },
      {
        "key": "BETWEEN A AND B",
        "value": "Filtra valores en un rango inclusivo [A, B]"
      },
      {
        "key": "IN (list)",
        "value": "Comprueba pertenencia a un conjunto de valores"
      },
      {
        "key": "LIKE 'J%'",
        "value": "Busca patrones de texto que inicien con la letra J"
      }
    ],
    "explanation": "IS NULL verifica nulidad, BETWEEN evalúa rangos inclusivos, IN comprueba listas y LIKE busca patrones con comodines.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 2, pág. 6",
    "slideImage": "assets/clases_infographics/clase2_p06.png",
    "type": "matching"
  },
  {
    "id": 231,
    "classNum": 2,
    "topic": "Filtrado con WHERE",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "Dada la tabla de empleados (id, nombre, id_departamento, salario), ¿qué resultado devuelve la siguiente consulta?\n`SELECT nombre, salario FROM Empleados WHERE id = 103;`",
    "options": [
      "Lucía Fernández | 72000",
      "Ana Gómez | 65000",
      "Carlos Pérez | 48000 en el almacenamiento secundario durante el procesamiento concurrente de transacciones.",
      "Sofía Romero | 59000"
    ],
    "correctAnswer": 0,
    "hint": "Busca el registro cuyo identificador unívoco id sea exactamente 103 en la tabla de empleados.",
    "explanation": "El empleado con id = 103 en la tabla de datos corresponde exactamente a Lucía Fernández con un salario de $72.000.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 4)",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 232,
    "classNum": 2,
    "topic": "Función de Agregación MIN",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "¿Qué valor arrojará la consulta `SELECT MIN(salario) AS salario_minimo FROM Empleados;` sobre la tabla de empleados?",
    "options": [
      "45000 (correspondiente a Martín Silva)",
      "48000 (correspondiente a Carlos Pérez)",
      "53000 (correspondiente a Marcos Torres)",
      "81000 (correspondiente a Diego López)"
    ],
    "correctAnswer": 0,
    "hint": "MIN() recorre la columna salario y extrae el menor valor numérico presente.",
    "explanation": "La función agregada MIN() calcula el valor mínimo de la columna salario. El salario más bajo de toda la nómina es 45.000 (Martín Silva).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 8)",
    "slideImage": "assets/clases_infographics/clase2_p08.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 233,
    "classNum": 2,
    "topic": "Filtrado con Operadores Relacionales",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "¿Cuántos empleados cumplen la condición de la siguiente consulta?\n`SELECT * FROM Empleados WHERE salario > 55000;`",
    "options": [
      "5 empleados (Ana Gómez: 65k, Lucía Fernández: 72k, Sofía Romero: 59k, Diego López: 81k, Valeria Díaz: 67k)",
      "3 empleados (Carlos Pérez: 48k, Marcos Torres: 53k y Martín Silva: 45k que perciben un salario inferior)",
      "6 empleados (todos los integrantes del departamento 1 y 2 que poseen registros confirmados en la tabla)",
      "8 empleados (la nómina completa de colaboradores registrados actualmente en el sistema de recursos humanos)"
    ],
    "correctAnswer": 0,
    "hint": "Cuenta cuántos sueldos superan los 55.000: Ana (65k), Carlos (48k❌), Lucía (72k), Marcos (53k❌), Sofía (59k), Diego (81k), Valeria (67k), Martín (45k❌).",
    "explanation": "Los empleados con salario estrictamente mayor a 55000 son: Ana (65000), Lucía (72000), Sofía (59000), Diego (81000) y Valeria (67000), dando un total de 5 registros.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 4)",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 234,
    "classNum": 2,
    "topic": "Filtrado por Clave Foránea",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "¿Qué empleado devuelve la consulta `SELECT nombre FROM Empleados WHERE id_departamento = 4;`?",
    "options": [
      "Diego López",
      "Lucía Fernández",
      "Marcos Torres",
      "Valeria Díaz"
    ],
    "correctAnswer": 0,
    "hint": "El departamento 4 corresponde a Sistemas.",
    "explanation": "En la tabla Empleados, el único registro que posee id_departamento = 4 (Sistemas) es Diego López (id: 106).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 4)",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 235,
    "classNum": 2,
    "topic": "Ordenamiento ORDER BY DESC",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "Si ejecutamos `SELECT nombre, salario FROM Empleados ORDER BY salario DESC;`, ¿cuál es el primer empleado que aparece en el resultado?",
    "options": [
      "Diego López con 81000",
      "Lucía Fernández con 72000",
      "Ana Gómez con 65000",
      "Martín Silva con 45000"
    ],
    "correctAnswer": 0,
    "hint": "DESC ordena en forma descendente (del valor más alto al más bajo).",
    "explanation": "ORDER BY salario DESC ordena los salarios de mayor a menor. El mayor salario es 81.000, perteneciente a Diego López.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 6)",
    "slideImage": "assets/clases_infographics/clase2_p06.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 236,
    "classNum": 2,
    "topic": "Ordenamiento Alfabético",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "Al ejecutar `SELECT nombre_departamento FROM Departamentos ORDER BY nombre_departamento ASC;`, ¿cuál será el primer departamento listado?",
    "options": [
      "Logística",
      "Marketing",
      "Recursos Humanos",
      "Ventas"
    ],
    "correctAnswer": 0,
    "hint": "Ordena alfabéticamente (A-Z) los nombres: Ventas, Marketing, Logística, Sistemas, Recursos Humanos.",
    "explanation": "Ordenados alfabéticamente de la A a la Z (ASC): Logística (L), Marketing (M), Recursos Humanos (R), Sistemas (S), Ventas (V). El primero es Logística.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 6)",
    "slideImage": "assets/clases_infographics/clase2_p06.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 237,
    "classNum": 2,
    "topic": "Paginación con LIMIT",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "¿Qué devolverá la consulta `SELECT nombre FROM Empleados ORDER BY id ASC LIMIT 2;`?",
    "options": [
      "Ana Gómez y Carlos Pérez",
      "Lucía Fernández y Marcos Torres",
      "Diego López y Valeria Díaz",
      "Martín Silva y Sofía Romero"
    ],
    "correctAnswer": 0,
    "hint": "Los IDs ordenados ascendente son 101, 102, 103... LIMIT 2 toma únicamente las dos primeras filas.",
    "explanation": "Los empleados ordenados por id ascendente comienzan con 101 (Ana Gómez) y 102 (Carlos Pérez). LIMIT 2 devuelve solo esos 2 primeros registros.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 7)",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 238,
    "classNum": 2,
    "topic": "LIMIT y OFFSET",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "¿Qué registros devuelve la consulta `SELECT nombre FROM Empleados ORDER BY id ASC LIMIT 2 OFFSET 3;`?",
    "options": [
      "Marcos Torres (id 104) y Sofía Romero (id 105)",
      "Ana Gómez (id 101) y Carlos Pérez (id 102)",
      "Lucía Fernández (id 103) y Marcos Torres (id 104)",
      "Diego López (id 106) y Valeria Díaz (id 107)"
    ],
    "correctAnswer": 0,
    "hint": "OFFSET 3 descarta los 3 primeros (101, 102, 103) y LIMIT 2 toma los 2 siguientes (104, 105).",
    "explanation": "OFFSET 3 saltea los primeros 3 registros (101, 102, 103). A partir del cuarto registro, LIMIT 2 toma los 2 siguientes: 104 (Marcos Torres) y 105 (Sofía Romero).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 7)",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 239,
    "classNum": 2,
    "topic": "Función de Agregación COUNT",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "¿Qué resultado devuelve `SELECT COUNT(*) AS total_empleados FROM Empleados;`?",
    "options": [
      "8",
      "5",
      "10",
      "6"
    ],
    "correctAnswer": 0,
    "hint": "Cuenta el número total de filas en la tabla Empleados.",
    "explanation": "La tabla Empleados cuenta con un total de 8 registros (IDs 101 al 108). COUNT(*) cuenta el total de tuplas de la tabla.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 8)",
    "slideImage": "assets/clases_infographics/clase2_p08.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 240,
    "classNum": 2,
    "topic": "Función AVG con Filtro WHERE",
    "unit": "Clase 2 - Autoevaluación 2",
    "question": "¿Qué cálculo realiza la consulta `SELECT AVG(salario) FROM Empleados WHERE id_departamento = 1;`?",
    "options": [
      "Calcula el promedio salarial de los empleados del departamento 1 (Ana: 65k, Lucía: 72k, Valeria: 67k) = 68000.",
      "Calcula el salario máximo de toda la empresa considerando únicamente los cargos gerenciales activos = 81000.",
      "Suma los salarios de todos los empleados de la organización y divide el resultado por el total de tuplas = 60875.",
      "Calcula el promedio salarial excluyendo a los colaboradores de Sistemas y Ventas de los departamentos 2 y 3 = 54500."
    ],
    "correctAnswer": 0,
    "hint": "AVG() promedia solo los salarios que cumplan WHERE id_departamento = 1: (65000 + 72000 + 67000) / 3.",
    "explanation": "Los empleados con id_departamento = 1 son Ana (65.000), Lucía (72.000) y Valeria (67.000). El promedio es (65000 + 72000 + 67000) / 3 = 204000 / 3 = 68000.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 2 (Diapositiva Clase 2, pág. 8)",
    "slideImage": "assets/clases_infographics/clase2_p08.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 301,
    "classNum": 3,
    "topic": "Producto Cartesiano",
    "unit": "Clase 3",
    "question": "¿Qué resultado produce un Producto Cartesiano (CROSS JOIN o `FROM TablaA, TablaB`) entre una tabla A de 5 filas y una tabla B de 10 filas sin condición de unión?",
    "options": [
      "El conjunto de tuplas resultante de combinar cada fila de la primera tabla con todas y cada una de las filas de la segunda tabla (N x M).",
      "La intersección exacta de registros que comparten la misma clave primaria en ambas tablas descartando las filas no coincidentes.",
      "La unión de filas coincidentes completando con valores nulos aquellas tuplas de la izquierda que no posean referencia en la derecha en el almacenamiento secundario durante el procesamiento concurrente de transacciones.",
      "La diferencia simétrica entre las dos relaciones relacionales conservando únicamente los registros que no presentan correspondencia."
    ],
    "correctAnswer": 0,
    "hint": "El producto cartesiano multiplica las cardinalidades de ambas tablas (5 * 10 = 50).",
    "explanation": "El producto cartesiano combina cada tupla de la primera relación con todas y cada una de las tuplas de la segunda, resultando en |A| * |B| filas en el conjunto de salida.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 2",
    "slideImage": "assets/clases_infographics/clase3_p02.png",
    "type": "single_choice"
  },
  {
    "id": 302,
    "classNum": 3,
    "topic": "INNER JOIN",
    "unit": "Clase 3",
    "question": "¿Qué tuplas devuelve una consulta con `INNER JOIN` entre dos tablas conectadas por `ON A.id = B.id_a`?",
    "options": [
      "Únicamente las tuplas de ambas tablas que cumplen rigurosamente la condición de combinación establecida en la cláusula ON.",
      "La totalidad de los registros de la primera tabla, rellenando con valores NULL los atributos de la segunda ante ausencias.",
      "Todas las filas de ambas relaciones sin importar si existen claves coincidentes en los campos de vinculación evaluados.",
      "Exclusivamente las tuplas de la segunda tabla que no mantienen ninguna correspondencia referencial con la primera relación."
    ],
    "correctAnswer": 0,
    "hint": "INNER = interior / intersección. Solo pasan las filas con match en ambas tablas.",
    "explanation": "El INNER JOIN es la operación de unión interna por defecto: descarta cualquier tupla de A o B que no tenga una contraparte coincidente según el predicado del ON.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 3",
    "slideImage": "assets/clases_infographics/clase3_p03.png",
    "type": "single_choice"
  },
  {
    "id": 303,
    "classNum": 3,
    "topic": "LEFT OUTER JOIN",
    "unit": "Clase 3",
    "question": "¿Cómo se comporta un `LEFT OUTER JOIN` (o simplemente `LEFT JOIN`) entre `Clientes c LEFT JOIN Pedidos p ON c.id = p.id_cliente`?",
    "options": [
      "Preserva todos los clientes; si un cliente no tiene pedidos, sus columnas de pedidos se completan con NULL.",
      "Descarta a los clientes que no tengan pedidos registrados para retornar exclusivamente compras efectivas y verificadas.",
      "Genera un error de integridad referencial si existen clientes sin registros asociados en la tabla de pedidos vinculada.",
      "Preserva todos los pedidos y elimina a los clientes que hayan registrado más de diez compras en el período analizado."
    ],
    "correctAnswer": 0,
    "hint": "La tabla de la izquierda se preserva completa. Si no hay match a la derecha, se llena con NULL.",
    "explanation": "LEFT JOIN preserva todas las tuplas de la tabla izquierda. Si no hay coincidencia en la tabla derecha, las columnas proyectadas de la derecha toman el valor NULL.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 4",
    "slideImage": "assets/clases_infographics/clase3_p04.png",
    "type": "single_choice"
  },
  {
    "id": 304,
    "classNum": 3,
    "topic": "RIGHT OUTER JOIN",
    "unit": "Clase 3",
    "question": "¿Qué garantiza un `RIGHT JOIN` entre `Departamentos d RIGHT JOIN Empleados e ON d.id = e.id_depto`?",
    "options": [
      "Conserva todos los departamentos; si un departamento no tiene empleados asociados, sus columnas de empleado se completan con NULL.",
      "Conserva todos los empleados y descarta a los departamentos que no pertenezcan al área de Sistemas de la compañía evaluada de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL.",
      "Equivale a un INNER JOIN tradicional porque la palabra clave RIGHT es ignorada por los optimizadores relacionales modernos.",
      "Elimina físicamente los departamentos huérfanos que no cuenten con personal registrado en la base de datos de la empresa."
    ],
    "correctAnswer": 0,
    "hint": "RIGHT JOIN preserva la tabla derecha (Empleados).",
    "explanation": "El RIGHT JOIN mantiene todas las filas de la tabla de la derecha (Empleados), completando con NULL las columnas de Departamentos si el empleado no tiene departamento asignado.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 5",
    "slideImage": "assets/clases_infographics/clase3_p05.png",
    "type": "single_choice"
  },
  {
    "id": 305,
    "classNum": 3,
    "topic": "FULL OUTER JOIN",
    "unit": "Clase 3",
    "question": "¿Cuál es el resultado de un `FULL OUTER JOIN` entre la tabla Clientes y la tabla Proveedores?",
    "options": [
      "Conserva todas las filas de ambas tablas, rellenando con NULL donde no haya coincidencia en la unión de registros.",
      "Genera el producto cartesiano puro que multiplica la cantidad de filas de Clientes por la cantidad de filas de Pedidos.",
      "Retorna únicamente los clientes con pedidos verificados y descarta cualquier fila que contenga valores nulos en el sistema.",
      "Produce un error de sintaxis porque FULL OUTER JOIN solo está disponible en motores orientados a objetos y grafos."
    ],
    "correctAnswer": 0,
    "hint": "FULL = unión externa completa (incluye todo lo de la izquierda y todo lo de la derecha).",
    "explanation": "FULL OUTER JOIN combina los efectos de LEFT JOIN y RIGHT JOIN, retornando todas las filas de ambas tablas y rellenando con NULLs en los atributos donde no exista match.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 6",
    "slideImage": "assets/clases_infographics/clase3_p06.png",
    "type": "single_choice"
  },
  {
    "id": 306,
    "classNum": 3,
    "topic": "Diferencia de Conjuntos con JOIN",
    "unit": "Clase 3",
    "question": "¿Cómo se obtienen mediante SQL los clientes que NUNCA han realizado ningún pedido?",
    "options": [
      "Utilizando un `LEFT JOIN` hacia pedidos y agregando la condición `WHERE p.id_pedido IS NULL` en el filtrado.",
      "Ejecutando un `INNER JOIN` entre clientes y pedidos con la condición obligatoria `WHERE p.monto = 0`.",
      "Aplicando un `CROSS JOIN` masivo y filtrando en el HAVING mediante la función de agregación `COUNT(*) = 0`.",
      "Realizando un `RIGHT JOIN` hacia clientes e insertando la cláusula condicional `WHERE c.id_cliente IS NULL`."
    ],
    "correctAnswer": 0,
    "hint": "Hacer LEFT JOIN y filtrar en el WHERE aquellas filas donde la clave de la tabla derecha sea NULL.",
    "explanation": "El patrón `LEFT JOIN ... WHERE der.pk IS NULL` es la técnica estándar para encontrar registros de la tabla izquierda que no tienen ninguna fila relacionada en la tabla derecha.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 4",
    "slideImage": "assets/clases_infographics/clase3_p04.png",
    "type": "single_choice"
  },
  {
    "id": 307,
    "classNum": 3,
    "topic": "SELF JOIN",
    "unit": "Clase 3",
    "question": "¿En qué escenario es indispensable utilizar un `SELF JOIN` (auto-unión de una tabla consigo misma)?",
    "options": [
      "Cuando se requiere relacionar jerárquicamente una tabla consigo misma (ej. empleados con su respectivo supervisor en la misma tabla).",
      "Cuando una consulta vincula más de cinco tablas relacionales simultáneamente dentro de una misma transacción concurrente mediante estructuras auxiliares de índices auto-balanceados de tipo árbol B+ en disco.",
      "Cuando dos tablas del esquema poseen exactamente la misma cantidad de tuplas almacenadas físicamente en disco secundario.",
      "Cuando se necesita combinar una tabla relacional con un documento semiestructurado en formato JSON sin clave primaria."
    ],
    "correctAnswer": 0,
    "hint": "Un SELF JOIN relaciona la tabla con sí misma usando alias diferentes (ej. e para empleado y j para jefe).",
    "explanation": "El SELF JOIN es fundamental para consultar estructuras jerárquicas o reflexivas donde una clave foránea apunta a la clave primaria de la misma tabla (ej. `id_jefe` que referencia a `id_empleado`).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 7",
    "slideImage": "assets/clases_infographics/clase3_p07.png",
    "type": "single_choice"
  },
  {
    "id": 308,
    "classNum": 3,
    "topic": "Cláusula USING",
    "unit": "Clase 3",
    "question": "¿Cuándo se puede utilizar la cláusula `USING (id_departamento)` en lugar de `ON e.id_departamento = d.id_departamento`?",
    "options": [
      "Únicamente cuando la columna de combinación tiene exactamente el mismo nombre en ambas tablas a vincular.",
      "En cualquier combinación relacional sin importar si las columnas participantes poseen nombres diferentes.",
      "Exclusivamente en combinaciones de tipo CROSS JOIN que generan el producto cartesiano de dos tablas.",
      "Solo cuando la columna vinculada posee un índice único de tipo Hash definido previamente en el esquema."
    ],
    "correctAnswer": 0,
    "hint": "USING es un atajo sintáctico cuando la columna de enlace se llama igual en ambas tablas.",
    "explanation": "La sintaxis `JOIN tabla USING (columna)` es un atajo estándar de SQL equivalente a `ON t1.columna = t2.columna` que simplifica la consulta cuando el nombre de la clave es idéntico en ambas tablas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 3",
    "slideImage": "assets/clases_infographics/clase3_p03.png",
    "type": "single_choice"
  },
  {
    "id": 309,
    "classNum": 3,
    "topic": "Funciones de Agregación",
    "unit": "Clase 3",
    "question": "¿Cuál es la diferencia fundamental entre `COUNT(*)` y `COUNT(comision)` en una tabla?",
    "options": [
      "`COUNT(*)` cuenta todas las filas del conjunto (incluyendo filas con nulos); `COUNT(columna)` cuenta solo filas con valor no nulo en esa columna.",
      "`COUNT(*)` solo procesa tablas con menos de mil registros; `COUNT(columna)` se utiliza para conjuntos de datos masivos desnormalizados.",
      "`COUNT(*)` suma los valores aritméticos de la clave primaria; `COUNT(columna)` devuelve el promedio de caracteres de la columna evaluada de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL.",
      "`COUNT(*)` arroja error si la tabla contiene valores nulos; `COUNT(columna)` reemplaza los valores desconocidos por el número cero."
    ],
    "correctAnswer": 0,
    "hint": "COUNT(*) cuenta tuplas completas; COUNT(col) ignora los valores NULL.",
    "explanation": "`COUNT(*)` cuenta todas las tuplas que satisfacen el predicado, sin importar sus valores. En cambio, `COUNT(columna)` evalúa la columna especificada y descarta las tuplas con valor NULL.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 8",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "type": "single_choice"
  },
  {
    "id": 310,
    "classNum": 3,
    "topic": "Funciones de Agregación",
    "unit": "Clase 3",
    "question": "Dada una columna con los valores `[100, 200, NULL]`, ¿qué resultado devuelve `AVG(valor)` en SQL estándar?",
    "options": [
      "`AVG` devuelve 150 (ignora el NULL y promedia `300 / 2`); `COUNT` devuelve 2 (cuenta solo valores no nulos).",
      "`AVG` devuelve 100 (convierte el NULL a cero y promedia `300 / 3`); `COUNT` devuelve 3 (cuenta todas las tuplas).",
      "`AVG` devuelve NULL (la presencia de un valor nulo invalida el cálculo); `COUNT` devuelve 0 por error aritmético.",
      "`AVG` arroja una excepción de división por cero en el motor; `COUNT` devuelve 2 ignorando los registros duplicados."
    ],
    "correctAnswer": 0,
    "hint": "Las funciones de agregación (AVG, SUM, MIN, MAX) ignoran automáticamente los valores NULL antes de calcular.",
    "explanation": "Las funciones de agregación en SQL ignoran los valores NULL. AVG calcula la suma de los valores no nulos dividida por la cantidad de elementos no nulos: (100 + 200) / 2 = 150.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 8",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  <div class=\"dataset-table-card\">\n    <div class=\"dataset-card-header\">\n      <span class=\"table-name-tag\">📊 MUESTRA DE DATOS: <code>Columna con NULL</code></span>\n      <span class=\"table-rows-tag\">3 filas</span>\n    </div>\n    <div class=\"table-responsive-box\">\n      <table class=\"dataset-html-table\">\n        <thead>\n          <tr>\n            <th>Fila #</th>\n            <th>Valor de la Columna</th>\n            <th>Tipo / Estado</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td>Fila 1</td><td>100</td><td>Numérico entero</td></tr>\n          <tr><td>Fila 2</td><td>200</td><td>Numérico entero</td></tr>\n          <tr><td>Fila 3</td><td><code>NULL</code></td><td>Valor ausente / desconocido</td></tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"
  },
  {
    "id": 311,
    "classNum": 3,
    "topic": "Cláusula GROUP BY",
    "unit": "Clase 3",
    "question": "¿Cuál es la regla fundamental de proyección en consultas que utilizan la cláusula `GROUP BY`?",
    "options": [
      "Toda columna en la lista de `SELECT` que no esté dentro de una función agregada DEBE aparecer obligatoriamente en la cláusula `GROUP BY`.",
      "Las columnas proyectadas en el `SELECT` deben pertenecer exclusivamente a la clave primaria para permitir el cálculo de funciones agregadas.",
      "El número total de columnas proyectadas en el `SELECT` debe ser exactamente igual a la cantidad de filas agrupadas por la consulta.",
      "No se permite proyectar ninguna columna no numérica cuando la cláusula `GROUP BY` incluye más de dos atributos en su definición."
    ],
    "correctAnswer": 0,
    "hint": "No puedes proyectar un valor individual junto a un grupo a menos que la columna esté en el GROUP BY.",
    "explanation": "Al agrupar filas, el motor no puede determinar qué valor individual mostrar para una columna no agrupada; por lo tanto, toda columna en el SELECT debe estar en el GROUP BY o dentro de una función agregada.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 9",
    "slideImage": "assets/clases_infographics/clase3_p09.png",
    "type": "single_choice"
  },
  {
    "id": 312,
    "classNum": 3,
    "topic": "HAVING vs WHERE",
    "unit": "Clase 3",
    "question": "¿Cuál es la diferencia crucial entre las cláusulas `WHERE` y `HAVING`?",
    "options": [
      "`WHERE` filtra filas individuales ANTES de que se formen los grupos; `HAVING` filtra grupos YA FORMADOS después de la agregación.",
      "`WHERE` solo puede utilizarse en consultas sobre una tabla; `HAVING` es de uso obligatorio cuando intervienen operaciones JOIN mediante estructuras auxiliares de índices auto-balanceados de tipo árbol B+ en disco.",
      "`WHERE` evalúa condiciones sobre funciones de agregación; `HAVING` filtra exclusivamente columnas numéricas sin agrupar.",
      "`WHERE` y `HAVING` son sinónimos sintácticos intercambiables que ejecutan el mismo plan de consulta en el optimizador."
    ],
    "correctAnswer": 0,
    "hint": "WHERE filtra tuplas individuales antes de agrupar; HAVING filtra los grupos resultantes tras la agregación.",
    "explanation": "`WHERE` filtra tuplas individuales antes de que se formen los grupos (por eso no puede evaluar funciones agregadas como `WHERE AVG(salario) > 1000`). `HAVING` filtra los grupos ya creados por el `GROUP BY`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 10",
    "slideImage": "assets/clases_infographics/clase3_p10.png",
    "type": "single_choice"
  },
  {
    "id": 313,
    "classNum": 3,
    "topic": "HAVING vs WHERE",
    "unit": "Clase 3",
    "question": "¿Por qué la consulta `SELECT depto, COUNT(*) FROM Empleados WHERE COUNT(*) > 5 GROUP BY depto;` genera un error de sintaxis?",
    "options": [
      "Porque `WHERE` se ejecuta antes de la agrupación y no puede evaluar funciones de agregación; debe filtrarse usando `HAVING COUNT(*) > 5`.",
      "Porque la función `COUNT(*)` no está permitida en tablas que poseen columnas alfanuméricas como la columna departamento.",
      "Porque la cláusula `GROUP BY` exige que el umbral numérico de filtrado se declare como una constante booleana en el SELECT para preservar la integridad referencial y el aislamiento entre transacciones activas.",
      "Porque el estándar SQL prohíbe el uso de operadores de comparación numérica como mayor que `>` junto a la palabra WHERE."
    ],
    "correctAnswer": 0,
    "hint": "En el momento que se evalúa el WHERE, los grupos aún no existen. El filtro sobre agregados va en HAVING.",
    "explanation": "El motor evalúa WHERE fila por fila antes de agrupar. Para filtrar por el resultado de una función de agregación se debe usar `HAVING COUNT(*) > 5` tras el `GROUP BY`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 10",
    "slideImage": "assets/clases_infographics/clase3_p10.png",
    "type": "single_choice"
  },
  {
    "id": 314,
    "classNum": 3,
    "topic": "Orden de Ejecución SQL",
    "unit": "Clase 3",
    "question": "¿Cuál es el orden lógico de ejecución interno que sigue el motor de base de datos para procesar una consulta SQL?",
    "options": [
      "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT.",
      "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT.",
      "FROM -> SELECT -> WHERE -> HAVING -> GROUP BY -> LIMIT -> ORDER BY.",
      "WHERE -> FROM -> GROUP BY -> SELECT -> HAVING -> ORDER BY -> LIMIT."
    ],
    "correctAnswer": 0,
    "hint": "Primero se cargan las tablas (FROM/JOIN), se filtran filas (WHERE), se agrupan (GROUP BY), se filtran grupos (HAVING) y recién ahí se proyecta (SELECT).",
    "explanation": "El orden lógico comienza obteniendo las tablas y uniones (FROM/JOIN), filtrando filas (WHERE), agrupando (GROUP BY), filtrando grupos (HAVING), proyectando columnas (SELECT), eliminando duplicados (DISTINCT), ordenando (ORDER BY) y paginando (LIMIT).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 11",
    "slideImage": "assets/clases_infographics/clase3_p11.png",
    "type": "single_choice"
  },
  {
    "id": 315,
    "classNum": 3,
    "topic": "Orden de Ejecución SQL",
    "unit": "Clase 3",
    "question": "¿Por qué NO es posible utilizar un alias definido en el SELECT (ej. `SELECT salario * 12 AS anual`) dentro de la cláusula `WHERE`?",
    "options": [
      "Porque la cláusula `WHERE` se evalúa lógicamente antes que el `SELECT`; en ese momento el alias de columna aún no ha sido creado por el motor.",
      "Porque los alias de columna solo son reconocidos cuando se definen sobre campos de tipo fecha o cadenas de caracteres alfanuméricas.",
      "Porque el estándar SQL restringe el uso de alias exclusivamente a consultas que utilicen subconsultas correlacionadas en el FROM.",
      "Porque el optimizador de consultas elimina los alias de columna durante la fase de análisis léxico para reducir el consumo de memoria dentro del catálogo de datos del sistema de gestión de base de datos relacional."
    ],
    "correctAnswer": 0,
    "hint": "Revisa el orden lógico: WHERE se procesa en el paso 2, mientras que SELECT se procesa en el paso 5.",
    "explanation": "Como el motor ejecuta WHERE antes de procesar el SELECT, el alias 'anual' todavía no ha sido creado. En cambio, sí es posible usar el alias en el `ORDER BY` porque se ejecuta después del `SELECT`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 11",
    "slideImage": "assets/clases_infographics/clase3_p11.png",
    "type": "single_choice"
  },
  {
    "id": 316,
    "classNum": 3,
    "topic": "Operadores de Conjuntos",
    "unit": "Clase 3",
    "question": "¿Cuál es la diferencia fundamental entre los operadores `UNION` y `UNION ALL`?",
    "options": [
      "`UNION` elimina las tuplas duplicadas aplicando una operación interna de ordenamiento/hash; `UNION ALL` conserva todos los duplicados y es más veloz.",
      "`UNION` solo puede combinar resultados de una misma tabla física; `UNION ALL` permite unir consultas de diferentes bases de datos remotas.",
      "`UNION` preserva la totalidad de los registros duplicados en el conjunto final; `UNION ALL` descarta automáticamente las filas redundantes.",
      "`UNION` requiere que ambas consultas tengan distinto tipo de datos; `UNION ALL` exige que las columnas compartan el mismo identificador."
    ],
    "correctAnswer": 0,
    "hint": "UNION ALL simplemente concatena las filas sin el costo computacional de buscar y eliminar duplicados.",
    "explanation": "`UNION` combina los resultados de dos consultas ejecutando un paso de deduplicación (sort o hash), mientras que `UNION ALL` concatena directamente los resultados sin verificar duplicados, ofreciendo mayor velocidad.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 12",
    "slideImage": "assets/clases_infographics/clase3_p12.png",
    "type": "single_choice"
  },
  {
    "id": 317,
    "classNum": 3,
    "topic": "Operadores de Conjuntos",
    "unit": "Clase 3",
    "question": "¿Qué requisitos deben cumplir dos consultas SELECT para combinarse mediante `UNION`, `INTERSECT` o `EXCEPT`?",
    "options": [
      "Deben proyectar el mismo número de columnas y sus tipos de datos correspondientes deben ser compatibles en orden de posición.",
      "Deben provenir obligatoriamente de la misma tabla física y compartir la misma clave primaria en sus esquemas relacionales mediante estructuras auxiliares de índices auto-balanceados de tipo árbol B+ en disco.",
      "Deben contener exactamente la misma cantidad de filas y estar indexadas mediante árboles auto-balanceados de tipo B-Tree.",
      "Deben incluir de manera mandatoria la cláusula `GROUP BY` con las mismas funciones de agregación en ambas sentencias."
    ],
    "correctAnswer": 0,
    "hint": "Compatibilidad de tipo y número de columnas: columna 1 con columna 1, columna 2 con columna 2, etc.",
    "explanation": "Los operadores de conjuntos de SQL requieren que ambos SELECT tengan el mismo número de columnas y que las columnas correspondientes en orden posicional posean tipos de datos compatibles entre sí.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 12",
    "slideImage": "assets/clases_infographics/clase3_p12.png",
    "type": "single_choice"
  },
  {
    "id": 318,
    "classNum": 3,
    "topic": "Operadores de Conjuntos",
    "unit": "Clase 3",
    "question": "¿Qué devuelve el operador `INTERSECT` entre dos consultas?",
    "options": [
      "Únicamente las filas que están presentes simultáneamente en el resultado de ambas consultas (intersección matemática).",
      "Todas las filas de ambas consultas combinadas sin descartar los registros duplicados existentes entre ambos conjuntos.",
      "Las filas que aparecen en la primera consulta excluyendo estrictamente aquellas que figuren en la segunda consulta.",
      "El producto cartesiano de los dos conjuntos de datos emparejando cada fila de la primera con la segunda consulta."
    ],
    "correctAnswer": 0,
    "hint": "INTERSECT es la intersección matemática: elementos comunes en A y B.",
    "explanation": "El operador INTERSECT devuelve únicamente aquellas tuplas que aparecen simultáneamente en el resultado de la primera y de la segunda consulta.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 12",
    "slideImage": "assets/clases_infographics/clase3_p12.png",
    "type": "single_choice"
  },
  {
    "id": 319,
    "classNum": 3,
    "topic": "Operadores de Conjuntos",
    "unit": "Clase 3",
    "question": "¿Qué devuelve el operador `EXCEPT` (o `MINUS` en Oracle) entre la consulta A y la consulta B?",
    "options": [
      "Las filas resultantes de la primera consulta que NO están presentes en el resultado de la segunda consulta.",
      "Las filas coincidentes que aparecen en ambas consultas descartando los registros que presenten valores nulos.",
      "La totalidad de las tuplas de ambas consultas reemplazando los campos no coincidentes por el número cero.",
      "El conjunto de filas que pertenecen exclusivamente a la segunda consulta omitiendo los datos de la primera."
    ],
    "correctAnswer": 0,
    "hint": "EXCEPT = A menos B (elementos que están en A pero no en B).",
    "explanation": "El operador EXCEPT (o MINUS) implementa la diferencia de conjuntos del álgebra relacional: retorna todas las tuplas de la consulta A que no aparecen en el resultado de la consulta B.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 12",
    "slideImage": "assets/clases_infographics/clase3_p12.png",
    "type": "single_choice"
  },
  {
    "id": 320,
    "classNum": 3,
    "topic": "Funciones de Agregación",
    "unit": "Clase 3",
    "question": "¿Qué calcula la expresión `COUNT(DISTINCT categoria)` en una tabla de Productos?",
    "options": [
      "La cantidad de valores de categoría únicos y distintos, ignorando repeticiones y excluyendo valores nulos.",
      "El total de tuplas de la tabla multiplicadas por la cantidad de categorías registradas en el catálogo.",
      "La categoría que posee la longitud de texto más extensa entre todos los registros de la columna analizada.",
      "El promedio ponderado de apariciones de cada categoría dentro de la partición de almacenamiento secundario."
    ],
    "correctAnswer": 0,
    "hint": "DISTINCT dentro de COUNT elimina las repeticiones antes de hacer el conteo.",
    "explanation": "Al combinar COUNT con DISTINCT, la función primero descarta los valores duplicados de la columna y luego cuenta cuántos valores únicos y no nulos quedan en la muestra.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 8",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "type": "single_choice"
  },
  {
    "id": 321,
    "classNum": 3,
    "topic": "JOINs y NULLs",
    "unit": "Clase 3",
    "question": "¿Por qué el uso de `NATURAL JOIN` es considerado una mala práctica peligrosa en sistemas de producción?",
    "options": [
      "Une tablas por todas las columnas con igual nombre; añadir columnas de auditoría altera la unión silenciosamente provocando errores graves.",
      "Borra las tablas de la memoria RAM del servidor si la consulta tarda más de diez segundos en retornar los datos al cliente web consumidor.",
      "Es incompatible con motores de base de datos que utilicen codificación de caracteres UTF-8 o tipos de datos numéricos en disco secundario.",
      "Exige reiniciar el servicio del motor relacional tras cada ejecución para liberar los bloqueos de lectura adquiridos en los índices B-Tree."
    ],
    "correctAnswer": 0,
    "hint": "NATURAL JOIN hace matching implícito por nombres iguales de columnas, lo que crea un acoplamiento frágil e impredecible.",
    "explanation": "NATURAL JOIN realiza la unión basada en todas las columnas con nombres idénticos. Si en el futuro se añade una columna común a ambas tablas (ej. `estado` o `timestamp`), la consulta pasará a filtrar por esa columna inesperadamente, corrompiendo los resultados.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 3",
    "slideImage": "assets/clases_infographics/clase3_p03.png",
    "type": "single_choice"
  },
  {
    "id": 322,
    "classNum": 3,
    "topic": "Agrupamiento Múltiple",
    "unit": "Clase 3",
    "question": "En la consulta `SELECT pais, ciudad, COUNT(*) FROM Clientes GROUP BY pais, ciudad`, ¿cómo se generan los grupos?",
    "options": [
      "Se crea un grupo único para cada combinación distinta de país y ciudad.",
      "Se crean grupos independientes para países y luego se mezclan al azar con las ciudades.",
      "Solo se agrupa por país, ignorando la columna ciudad.",
      "Se genera un error porque GROUP BY solo admite una única columna."
    ],
    "correctAnswer": 0,
    "hint": "El agrupamiento compuesto crea un subgrupo por cada par único (país, ciudad).",
    "explanation": "Al especificar múltiples columnas en GROUP BY, el motor agrupa las tuplas que tienen valores idénticos en todas las columnas indicadas, generando un nivel de detalle más fino (subgrupos).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 9",
    "slideImage": "assets/clases_infographics/clase3_p09.png",
    "type": "single_choice"
  },
  {
    "id": 323,
    "classNum": 3,
    "topic": "JOINs Relacionales",
    "unit": "Clase 3",
    "question": "Deseas obtener el listado de todos los Empleados junto al nombre de su Departamento. Si un empleado no tiene departamento, debe figurar igualmente con NULL. Completa el comando de unión:",
    "template": "SELECT e.nombre, d.nombre_depto FROM Empleados e {INPUT} JOIN Departamentos d ON e.id_depto = d.id;",
    "expectedAnswer": "LEFT",
    "hint": "Tipo de unión externa que preserva todas las filas de la tabla de la izquierda (Empleados).",
    "explanation": "El LEFT JOIN asegura que todos los registros de la tabla izquierda (Empleados) aparezcan en el resultado, rellenando con NULL las columnas de la tabla derecha cuando no exista relación.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 4",
    "slideImage": "assets/clases_infographics/clase3_p04.png",
    "type": "fill_in_sql",
    "acceptedAnswers": [
      "LEFT"
    ]
  },
  {
    "id": 324,
    "classNum": 3,
    "topic": "Filtrado de Grupos",
    "unit": "Clase 3",
    "question": "Deseas filtrar los departamentos que tengan un salario promedio superior a 50.000. Completa la cláusula correcta:",
    "template": "SELECT id_depto, AVG(salario) FROM Empleados GROUP BY id_depto {INPUT} AVG(salario) > 50000;",
    "expectedAnswer": "HAVING",
    "hint": "Cláusula que filtra grupos después de aplicar la función de agregación (inicia con H).",
    "explanation": "La cláusula HAVING es la única que permite evaluar y filtrar condiciones basadas en funciones de agregación como AVG() sobre los grupos creados por el GROUP BY.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 10",
    "slideImage": "assets/clases_infographics/clase3_p10.png",
    "type": "fill_in_sql",
    "acceptedAnswers": [
      "HAVING"
    ]
  },
  {
    "id": 325,
    "classNum": 3,
    "topic": "Estructura de Consulta",
    "unit": "Clase 3",
    "question": "Completa las cláusulas faltantes en la consulta para obtener la suma de ventas por vendedor ordenado por total:",
    "codeSnippet": "SELECT id_vendedor, SUM(monto) AS total_ventas\nFROM Ventas\nWHERE fecha >= '2024-01-01'\n[B1] id_vendedor\n[B2] total_ventas DESC;",
    "blanks": [
      {
        "id": "B1",
        "placeholder": "Cláusula de agrupamiento",
        "expected": "GROUP BY"
      },
      {
        "id": "B2",
        "placeholder": "Cláusula de ordenamiento",
        "expected": "ORDER BY"
      }
    ],
    "hint": "Agrupa por vendedor y luego ordena por el total de ventas descendente.",
    "explanation": "La cláusula GROUP BY agrupa las ventas por vendedor para aplicar SUM(), y ORDER BY organiza el conjunto resultante de mayor a menor total.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 11",
    "slideImage": "assets/clases_infographics/clase3_p11.png",
    "type": "code_completion",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  <div class=\"dataset-table-card\">\n    <div class=\"dataset-card-header\">\n      <span class=\"table-name-tag\">📁 TABLA: <code>Ventas</code></span>\n      <span class=\"table-rows-tag\">Estructura</span>\n    </div>\n    <div class=\"table-responsive-box\">\n      <table class=\"dataset-html-table\">\n        <thead>\n          <tr>\n            <th>id_vendedor</th>\n            <th>monto</th>\n            <th>fecha</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td>V01</td><td>$150.000</td><td>2024-01-15</td></tr>\n          <tr><td>V02</td><td>$230.000</td><td>2024-02-10</td></tr>\n          <tr><td>V01</td><td>$180.000</td><td>2024-03-05</td></tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"
  },
  {
    "id": 326,
    "classNum": 3,
    "topic": "Tipos de JOIN",
    "unit": "Clase 3",
    "question": "Relaciona cada tipo de JOIN con el conjunto de tuplas que retorna:",
    "pairs": [
      {
        "key": "INNER JOIN",
        "value": "Solo tuplas con coincidencia en ambas tablas"
      },
      {
        "key": "LEFT JOIN",
        "value": "Todas las tuplas de la izquierda + NULLs en la derecha"
      },
      {
        "key": "RIGHT JOIN",
        "value": "Todas las tuplas de la derecha + NULLs en la izquierda"
      },
      {
        "key": "FULL JOIN",
        "value": "Todas las tuplas de ambas tablas con NULLs donde no hay match"
      }
    ],
    "explanation": "INNER retorna intersección, LEFT preserva la izquierda, RIGHT la derecha y FULL ambas tablas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 6",
    "slideImage": "assets/clases_infographics/clase3_p06.png",
    "type": "matching"
  },
  {
    "id": 327,
    "classNum": 3,
    "topic": "Funciones Agregadas",
    "unit": "Clase 3",
    "question": "Relaciona cada función agregada con su cálculo correspondiente:",
    "pairs": [
      {
        "key": "COUNT(*)",
        "value": "Cuenta el número total de filas incluyendo nulos"
      },
      {
        "key": "AVG(columna)",
        "value": "Calcula el promedio aritmético ignorando nulos"
      },
      {
        "key": "SUM(columna)",
        "value": "Suma los valores numéricos no nulos"
      },
      {
        "key": "MAX(columna)",
        "value": "Obtiene el valor máximo de la columna"
      }
    ],
    "explanation": "COUNT(*) cuenta filas, AVG promedia, SUM suma y MAX obtiene el mayor valor; todas ignoran nulos excepto COUNT(*).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 8",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "type": "matching"
  },
  {
    "id": 328,
    "classNum": 3,
    "topic": "Operadores de Conjuntos",
    "unit": "Clase 3",
    "question": "Relaciona cada operador de conjuntos con su operación algebraica:",
    "pairs": [
      {
        "key": "UNION",
        "value": "Une dos conjuntos eliminando tuplas duplicadas"
      },
      {
        "key": "UNION ALL",
        "value": "Concatena dos conjuntos conservando duplicados"
      },
      {
        "key": "INTERSECT",
        "value": "Retorna únicamente los elementos comunes a ambos"
      },
      {
        "key": "EXCEPT",
        "value": "Retorna elementos del primer conjunto ausentes en el segundo"
      }
    ],
    "explanation": "UNION une sin duplicados, UNION ALL concatena directamente, INTERSECT busca elementos comunes y EXCEPT calcula la diferencia A - B.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 12",
    "slideImage": "assets/clases_infographics/clase3_p12.png",
    "type": "matching"
  },
  {
    "id": 329,
    "classNum": 3,
    "topic": "Filtros WHERE vs HAVING",
    "unit": "Clase 3",
    "question": "Relaciona cada cláusula con el momento exacto en que evalúa sus condiciones:",
    "pairs": [
      {
        "key": "WHERE",
        "value": "Filtra tuplas individuales antes del agrupamiento"
      },
      {
        "key": "HAVING",
        "value": "Filtra grupos tras aplicar funciones de agregación"
      },
      {
        "key": "ORDER BY",
        "value": "Ordena las tuplas finales proyectadas en el SELECT"
      },
      {
        "key": "LIMIT",
        "value": "Restringe la cantidad máxima de filas retornadas al cliente"
      }
    ],
    "explanation": "WHERE filtra antes del GROUP BY, HAVING filtra grupos, ORDER BY ordena al final y LIMIT trunca el resultado.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 11",
    "slideImage": "assets/clases_infographics/clase3_p11.png",
    "type": "matching"
  },
  {
    "id": 330,
    "classNum": 3,
    "topic": "Agregaciones y NULLs",
    "unit": "Clase 3",
    "question": "¿Qué devuelve la consulta `SELECT SUM(salario) FROM Empleados WHERE depto = 'Marketing'` si no hay ningún empleado de Marketing en la tabla?",
    "options": [
      "Devuelve `NULL` (las funciones de agregación sobre un conjunto vacío retornan NULL, excepto `COUNT` que retorna 0).",
      "Devuelve `0` (las funciones de suma retornan siempre cero numérico ante la ausencia de registros coincidentes en la tabla).",
      "Arroja un error de ejecución en el servidor relacional por intentar sumar columnas numéricas sobre conjuntos inexistentes.",
      "Devuelve `-1` como código estándar de estado para indicar que el filtro de la cláusula WHERE no encontró coincidencias."
    ],
    "correctAnswer": 0,
    "hint": "¡Pregunta capciosa de examen! SUM, AVG, MIN, MAX sobre un conjunto vacío retornan NULL. Solo COUNT() devuelve 0.",
    "explanation": "En el estándar SQL, las funciones agregadas `SUM`, `AVG`, `MIN` y `MAX` devuelven `NULL` cuando operan sobre un conjunto de cero filas. Únicamente `COUNT` devuelve el número `0`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 3, pág. 8",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "type": "single_choice"
  },
  {
    "id": 331,
    "classNum": 3,
    "topic": "GROUP BY con COUNT",
    "unit": "Clase 3 - Autoevaluación 3",
    "question": "Si ejecutamos `SELECT id_departamento, COUNT(*) AS cantidad FROM Empleados GROUP BY id_departamento;`, ¿qué cantidad mostrará para el departamento 1?",
    "options": [
      "id_departamento 1: 3 empleados (Ana, Lucía, Valeria) e id_departamento 2: 2 empleados (Carlos, Marcos).",
      "id_departamento 1: 5 empleados e id_departamento 2: 3 empleados en el reporte consolidado de personal.",
      "id_departamento 1: 2 empleados e id_departamento 2: 4 empleados registrados en la nómina corporativa.",
      "id_departamento 1: 8 empleados (la totalidad de la plantilla activa asignada al sector de administración)."
    ],
    "correctAnswer": 0,
    "hint": "Cuenta cuántos empleados tienen id_departamento = 1 en la tabla.",
    "explanation": "El departamento 1 (Ventas) cuenta con 3 empleados (Ana, Lucía, Valeria). Al agrupar por id_departamento, el conteo para el grupo 1 es 3.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 3 (Diapositiva Clase 3, pág. 2)",
    "slideImage": "assets/clases_infographics/clase3_p02.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 332,
    "classNum": 3,
    "topic": "GROUP BY con SUM y ORDER BY",
    "unit": "Clase 3 - Autoevaluación 3",
    "question": "¿Qué departamento encabeza la lista al ejecutar:\n`SELECT id_departamento, SUM(salario) AS total_masa_salarial FROM Empleados GROUP BY id_departamento ORDER BY total_masa_salarial DESC;`?",
    "options": [
      "El departamento 1 con un salario promedio de 68.000 (seguido por el departamento 2 con 50.500).",
      "El departamento 2 con un salario promedio de 75.000 (seguido por el departamento 1 con 62.000).",
      "El departamento 3 con un salario promedio de 81.000 (seguido por el departamento 2 con 58.000).",
      "El departamento 4 con un salario promedio de 90.000 (seguido por el departamento 1 con 70.000)."
    ],
    "correctAnswer": 0,
    "hint": "Suma los salarios de cada departamento: Depto 1 = 65k+72k+67k = 204k.",
    "explanation": "La suma de salarios por depto es: Depto 1 = 65k+72k+67k = 204k; Depto 2 = 48k+59k = 107k; Depto 3 = 53k+45k = 98k; Depto 4 = 81k. El mayor es el Depto 1.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 3 (Diapositiva Clase 3, pág. 2)",
    "slideImage": "assets/clases_infographics/clase3_p02.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 333,
    "classNum": 3,
    "topic": "INNER JOIN con Filtro WHERE",
    "unit": "Clase 3 - Autoevaluación 3",
    "question": "Dada la consulta:\n`SELECT e.nombre, d.nombre_departamento FROM Empleados e INNER JOIN Departamentos d ON e.id_departamento = d.id WHERE e.salario > 60000;`\n¿Qué empleados formarán parte del resultado?",
    "options": [
      "Martín Silva | NULL (aparece con NULL en departamento porque su id_departamento es nulo).",
      "Martín Silva | Sin Departamento (el motor reemplaza automáticamente el valor por defecto).",
      "No aparece Martín Silva porque los LEFT JOIN descartan filas con claves externas nulas.",
      "Martín Silva | Sistemas (se le asigna el departamento con mayor cantidad de colaboradores)."
    ],
    "correctAnswer": 0,
    "hint": "Filtra a quienes ganan más de 60.000 y combínalos con el nombre de su departamento.",
    "explanation": "Los empleados con salario > 60.000 son Ana (65k), Lucía (72k), Diego (81k) y Valeria (67k). Al hacer el INNER JOIN con Departamentos, se obtienen sus nombres vinculados a sus departamentos respectivos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 3 (Diapositiva Clase 3, pág. 4)",
    "slideImage": "assets/clases_infographics/clase3_p04.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 334,
    "classNum": 3,
    "topic": "LEFT JOIN con departamentos sin empleados",
    "unit": "Clase 3 - Autoevaluación 3",
    "question": "Si ejecutamos:\n`SELECT d.nombre_departamento, COUNT(e.id) AS total FROM Departamentos d LEFT JOIN Empleados e ON d.id = e.id_departamento GROUP BY d.nombre_departamento;`\n¿Qué valor mostrará para 'Recursos Humanos' (id = 5)?",
    "options": [
      "Marketing: 0 empleados (aparece con 0 gracias a que `COUNT(e.id)` no contabiliza valores nulos en la tabla izquierda).",
      "Marketing: 1 empleado (porque el RIGHT JOIN genera una fila obligatoria y COUNT(*) la contabiliza como válida).",
      "Marketing no aparece en el resultado porque no cuenta con empleados asociados en la tabla de personal de la empresa.",
      "Marketing: NULL (porque las funciones de agregación retornan nulo ante la ausencia de registros en combinaciones externas)."
    ],
    "correctAnswer": 0,
    "hint": "COUNT(columna) ignora los valores NULL generados por la ausencia de filas en la tabla derecha.",
    "explanation": "El LEFT JOIN preserva todas las filas de la tabla izquierda (Departamentos). Como 'Recursos Humanos' no tiene empleados coincidentes en la tabla derecha, las columnas de e son NULL. Al hacer COUNT(e.id), los valores NULL no se cuentan, resultando en 0.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 3 (Diapositiva Clase 3, pág. 5)",
    "slideImage": "assets/clases_infographics/clase3_p05.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 335,
    "classNum": 3,
    "topic": "JOIN implícito en cláusula WHERE",
    "unit": "Clase 3 - Autoevaluación 3",
    "question": "¿A qué tipo de JOIN equivale la siguiente sintaxis tradicional?\n`SELECT Empleados.nombre, Departamentos.nombre_departamento FROM Empleados, Departamentos WHERE Empleados.id_departamento = Departamentos.id;`",
    "options": [
      "A un INNER JOIN estándar (Theta Join / Equi Join).",
      "A un FULL OUTER JOIN.",
      "A un LEFT OUTER JOIN.",
      "A un CROSS JOIN con producto cartesiano puro sin filtrado."
    ],
    "correctAnswer": 0,
    "hint": "Separar tablas por coma y vincularlas mediante una condición de igualdad en el WHERE es la forma clásica de hacer un INNER JOIN.",
    "explanation": "La sintaxis de separar tablas por coma en el FROM y especificar la condición de enlace en el WHERE equivale semánticamente a un INNER JOIN según el estándar ANSI SQL-92.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 3 (Diapositiva Clase 3, pág. 4)",
    "slideImage": "assets/clases_infographics/clase3_p04.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 336,
    "classNum": 3,
    "topic": "Cláusula HAVING",
    "unit": "Clase 3 - Autoevaluación 3",
    "question": "¿Qué departamentos arrojará la consulta:\n`SELECT id_departamento, COUNT(*) FROM Empleados GROUP BY id_departamento HAVING COUNT(*) > 2;`?",
    "options": [
      "Solo el departamento 1, ya que es el único que cuenta con 3 empleados (el departamento 2 tiene 2).",
      "Los departamentos 1 y 2, dado que ambos superan el umbral mínimo de dos empleados registrados.",
      "Los departamentos 1, 2 y 3, incluyendo las áreas que poseen asignación de presupuesto operativo en el almacenamiento secundario durante el procesamiento concurrente de transacciones.",
      "Ningún departamento califica porque la cláusula HAVING requiere un mínimo de cinco empleados."
    ],
    "correctAnswer": 0,
    "hint": "HAVING filtra grupos calculados: sólo el departamento 1 posee más de 2 empleados (tiene 3).",
    "explanation": "Los conteos por departamento son: Depto 1: 3 empleados; Depto 2: 2 empleados; Depto 3: 2 empleados; Depto 4: 1 empleado. La cláusula HAVING filtra después de agrupar, dejando solo aquellos con COUNT(*) > 2, que es únicamente el departamento 1.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 3 (Diapositiva Clase 3, pág. 3)",
    "slideImage": "assets/clases_infographics/clase3_p03.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 337,
    "classNum": 3,
    "topic": "Cláusula DISTINCT",
    "unit": "Clase 3 - Autoevaluación 3",
    "question": "¿Qué valores devuelve la consulta `SELECT DISTINCT id_departamento FROM Empleados ORDER BY id_departamento ASC;`?",
    "options": [
      "1, 2 y NULL (DISTINCT incluye los valores únicos y preserva una única ocurrencia del valor NULL).",
      "Únicamente los valores 1 y 2, porque la palabra clave DISTINCT descarta siempre los valores nulos.",
      "1, 1, 1, 2, 2 y NULL (mantiene la cantidad original de filas proyectadas en la consulta relacional).",
      "El valor 0 como reemplazo estandarizado de los registros que no poseen departamento asignado."
    ],
    "correctAnswer": 0,
    "hint": "DISTINCT remueve los valores repetidos de la columna listada.",
    "explanation": "DISTINCT suprime los duplicados en el conjunto de resultados. Dado que los empleados pertenecen a los departamentos 1, 2, 3 y 4 (el 5 no tiene empleados), el resultado contiene exactamente 1, 2, 3 y 4.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 3 (Diapositiva Clase 3, pág. 1)",
    "slideImage": "assets/clases_infographics/clase3_p01.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 338,
    "classNum": 3,
    "topic": "COUNT con DISTINCT",
    "unit": "Clase 3 - Autoevaluación 3",
    "question": "¿Qué resultado devuelve `SELECT COUNT(DISTINCT id_departamento) AS deptos_con_personal FROM Empleados;`?",
    "options": [
      "4",
      "5",
      "8",
      "1"
    ],
    "correctAnswer": 0,
    "hint": "Cuenta cuántos códigos de departamento distintos existen entre todos los empleados.",
    "explanation": "COUNT(DISTINCT columna) cuenta la cantidad de valores únicos no nulos presentes en dicha columna. Hay 4 departamentos con personal asignado (1, 2, 3 y 4).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 3 (Diapositiva Clase 3, pág. 1)",
    "slideImage": "assets/clases_infographics/clase3_p01.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 339,
    "classNum": 3,
    "topic": "Operador BETWEEN y LIMIT",
    "unit": "Clase 3 - Autoevaluación 3",
    "question": "¿Qué empleados retornará la consulta:\n`SELECT nombre, salario FROM Empleados WHERE salario BETWEEN 50000 AND 70000 ORDER BY salario ASC LIMIT 3;`?",
    "options": [
      "Marcos Torres (53000), Sofía Romero (59000) y Ana Gómez (65000)",
      "Carlos Pérez (48000), Marcos Torres (53000) y Sofía Romero (59000)",
      "Lucía Fernández (72000), Valeria Díaz (67000) y Ana Gómez (65000)",
      "Diego López (81000) únicamente"
    ],
    "correctAnswer": 0,
    "hint": "BETWEEN incluye los extremos [50000, 70000]. Ordena los clasificados de menor a mayor y toma los 3 primeros.",
    "explanation": "El rango BETWEEN 50000 AND 70000 incluye: Marcos (53k), Sofía (59k), Ana (65k) y Valeria (67k). Ordenados ascendentemente por salario y limitados a 3 registros, obtenemos a Marcos, Sofía y Ana.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 3 (Diapositiva Clase 3, pág. 1)",
    "slideImage": "assets/clases_infographics/clase3_p01.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 401,
    "classNum": 4,
    "topic": "Comandos DML",
    "unit": "Clase 4",
    "question": "¿Cuál es la sintaxis correcta del comando DML `INSERT INTO` para agregar una nueva fila especificando columnas y valores?",
    "options": [
      "`INSERT INTO nombre_tabla (col1, col2, ...) VALUES (val1, val2, ...);`",
      "`ADD INTO nombre_tabla (col1, col2, ...) VALUES (val1, val2, ...);` en el almacenamiento secundario durante el procesamiento concurrente de transacciones.",
      "`INSERT ROW TO nombre_tabla SET col1 = val1, col2 = val2;`",
      "`CREATE RECORD IN nombre_tabla WITH (col1 = val1, col2 = val2);`"
    ],
    "correctAnswer": 0,
    "hint": "La sintaxis estándar es INSERT INTO tabla (columnas) VALUES (valores).",
    "explanation": "La sentencia `INSERT INTO tabla (col1, col2) VALUES (val1, val2)` es el estándar SQL para insertar nuevas tuplas en una relación.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 2",
    "slideImage": "assets/clases_infographics/clase4_p02.png",
    "type": "single_choice"
  },
  {
    "id": 402,
    "classNum": 4,
    "topic": "Comandos DML",
    "unit": "Clase 4",
    "question": "¿Cómo se insertan de forma masiva en una tabla los resultados producidos por una consulta SELECT?",
    "options": [
      "`INSERT INTO tabla_destino (col1, col2) SELECT c1, c2 FROM tabla_origen WHERE condicion;`",
      "`COPY DATA FROM tabla_origen TO tabla_destino WHERE condicion APPLY ALL;`",
      "`MERGE INTO tabla_destino USING tabla_origen ON ALWAYS TRUE INSERT ALL;`",
      "`APPEND ROWS tabla_destino SELECT c1, c2 FROM tabla_origen COMMIT BATCH;`"
    ],
    "correctAnswer": 0,
    "hint": "Se utiliza la combinación `INSERT INTO tabla (cols) SELECT ...` sin la palabra VALUES.",
    "explanation": "`INSERT INTO ... SELECT` permite insertar múltiples tuplas de forma masiva a partir del resultado de una consulta sin requerir la cláusula VALUES.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 3",
    "slideImage": "assets/clases_infographics/clase4_p03.png",
    "type": "single_choice"
  },
  {
    "id": 403,
    "classNum": 4,
    "topic": "Comandos DML",
    "unit": "Clase 4",
    "question": "¿Cuál es la estructura sintáctica estándar del comando `UPDATE` en SQL?",
    "options": [
      "`UPDATE nombre_tabla SET col1 = val1, col2 = val2 WHERE condicion;`",
      "`MODIFY nombre_tabla VALUES (col1 = val1, col2 = val2) WHERE condicion;`",
      "`ALTER TABLE nombre_tabla SET DATA col1 = val1 WHERE condicion;`",
      "`CHANGE nombre_tabla ASSIGN col1 = val1 WHERE condicion IS TRUE;`"
    ],
    "correctAnswer": 0,
    "hint": "UPDATE tabla SET col = val WHERE ...",
    "explanation": "El comando UPDATE modifica los datos existentes en una o más columnas de las filas que cumplan la condición especificada en la cláusula WHERE.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 4",
    "slideImage": "assets/clases_infographics/clase4_p04.png",
    "type": "single_choice"
  },
  {
    "id": 404,
    "classNum": 4,
    "topic": "Peligros en DML",
    "unit": "Clase 4",
    "question": "¿Qué consecuencia catastrófica ocurre si se ejecuta una sentencia `UPDATE Empleados SET salario = 50000;` sin incluir la cláusula `WHERE`?",
    "options": [
      "Se actualizan o modifican absolutamente todas las filas de la tabla sin excepción.",
      "El servidor de base de datos interrumpe la ejecución arrojando un error de sintaxis.",
      "La sentencia solo modifica la primera fila de la tabla y descarta las restantes.",
      "El motor de base de datos revierte automáticamente la transacción por precaución."
    ],
    "correctAnswer": 0,
    "hint": "¡Peligro crítico! Sin WHERE, UPDATE afecta a cada una de las filas de la tabla.",
    "explanation": "En SQL, ejecutar UPDATE o DELETE sin la cláusula WHERE hace que la instrucción se aplique a todas las tuplas de la relación indiscriminadamente.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 4",
    "slideImage": "assets/clases_infographics/clase4_p04.png",
    "type": "single_choice"
  },
  {
    "id": 405,
    "classNum": 4,
    "topic": "Comandos DML",
    "unit": "Clase 4",
    "question": "¿Qué acción realiza la instrucción `DELETE FROM Clientes WHERE id = 100;`?",
    "options": [
      "Elimina permanentemente de la tabla a los clientes que residen en la ciudad de Rosario.",
      "Actualiza el campo ciudad de los clientes asignándoles el valor nulo por defecto.",
      "Crea una copia de seguridad de los clientes de Rosario en el almacenamiento secundario.",
      "Deshabilita temporalmente la cuenta de usuario de los clientes que viven en Rosario."
    ],
    "correctAnswer": 0,
    "hint": "DELETE elimina filas específicas según la condición del WHERE.",
    "explanation": "El comando `DELETE FROM tabla WHERE condicion` elimina del almacenamiento las filas que satisfagan el predicado lógico.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 5",
    "slideImage": "assets/clases_infographics/clase4_p05.png",
    "type": "single_choice"
  },
  {
    "id": 406,
    "classNum": 4,
    "topic": "DELETE vs TRUNCATE vs DROP",
    "unit": "Clase 4",
    "question": "¿Cuáles son las diferencias fundamentales entre `DELETE FROM tabla`, `TRUNCATE TABLE tabla` y `DROP TABLE tabla`?",
    "options": [
      "DELETE es una sentencia DML fila por fila que activa triggers y genera logs en el WAL; TRUNCATE es DDL que desasigna páginas de datos completas, es mucho más veloz, resetea secuencias y no activa triggers row-level.",
      "DELETE es un comando DDL que elimina la estructura física de la tabla en el catálogo; TRUNCATE es una operación DML transaccional que solo vacía las memorias intermedias del búfer sin alterar el almacenamiento en disco.",
      "DELETE desasigna de forma masiva los bloques del sistema de ficheros eludiendo los registros de transacciones; TRUNCATE lee y valida cada tupla individualmente ejecutando los triggers definidos en el esquema.",
      "DELETE y TRUNCATE comparten exactamente el mismo algoritmo de ejecución física en disco, diferenciándose únicamente en los privilegios administrativos requeridos por el rol del usuario que los ejecuta en el servidor."
    ],
    "correctAnswer": 0,
    "hint": "DELETE opera fila por fila (DML), TRUNCATE vacía el almacenamiento masivamente (DDL) y DROP borra la tabla del diccionario (DDL).",
    "explanation": "DELETE es una operación DML fila a fila que dispara triggers y escribe logs detallados. TRUNCATE es un comando DDL que libera páginas de disco velozmente sin filtrar. DROP TABLE elimina tanto los datos como la definición del esquema del catálogo.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 6",
    "slideImage": "assets/clases_infographics/clase4_p06.png",
    "type": "single_choice"
  },
  {
    "id": 407,
    "classNum": 4,
    "topic": "Cláusula RETURNING",
    "unit": "Clase 4",
    "question": "¿Para qué se utiliza la cláusula `RETURNING` (en PostgreSQL y SQLite) en sentencias `INSERT`, `UPDATE` o `DELETE`?",
    "options": [
      "Para obtener inmediatamente valores generados (como el `id` autoincremental asignado o columnas actualizadas) en la misma ejecución sin hacer un SELECT adicional.",
      "Para liberar de inmediato la conexión cliente devolviéndola al pool de conexiones activas del servidor relacional para evitar bloqueos en transacciones concurrentes.",
      "Para forzar la cancelación inmediata de la transacción activa revirtiendo las escrituras en disco secundario mediante un rollback forzado de nivel de aislamiento.",
      "Para retornar el código fuente compilado del procedimiento almacenado ejecutado por el motor relacional en la consola de depuración de la aplicación cliente."
    ],
    "correctAnswer": 0,
    "hint": "RETURNING permite recuperar el id generado o datos modificados en una única operación.",
    "explanation": "La cláusula `RETURNING col1, col2` retorna las columnas especificadas de las filas que acaban de ser insertadas, actualizadas o borradas, evitando una segunda consulta de lectura.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 3",
    "slideImage": "assets/clases_infographics/clase4_p03.png",
    "type": "single_choice"
  },
  {
    "id": 408,
    "classNum": 4,
    "topic": "Subconsultas",
    "unit": "Clase 4",
    "question": "¿Qué es una Subconsulta (Subquery o Consulta Anidada) en SQL?",
    "options": [
      "Una sentencia SELECT anidada dentro de otra sentencia SQL principal (en cláusulas como SELECT, FROM, WHERE o HAVING).",
      "Una cuenta de usuario con privilegios restringidos que solo puede ejecutar lecturas sobre vistas precalculadas.",
      "Una solicitud de datos enviada de manera asíncrona a través de colas de mensajes del sistema operativo anfitrión para preservar la integridad referencial y el aislamiento entre transacciones activas.",
      "Un script de mantenimiento nocturno que desfragmenta los índices de disco en horarios de bajo consumo."
    ],
    "correctAnswer": 0,
    "hint": "Es una consulta interna entre paréntesis dentro de una consulta exterior.",
    "explanation": "Una subconsulta es una consulta SQL incluida dentro de otra sentencia, cuyo resultado es utilizado por la consulta externa para filtrar, proyectar o generar tablas derivadas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 7",
    "slideImage": "assets/clases_infographics/clase4_p07.png",
    "type": "single_choice"
  },
  {
    "id": 409,
    "classNum": 4,
    "topic": "Subconsulta Escalar",
    "unit": "Clase 4",
    "question": "¿Qué define a una Subconsulta Escalar (Scalar Subquery) y dónde puede utilizarse?",
    "options": [
      "Retorna exactamente un único valor (1 fila y 1 columna); puede utilizarse en cualquier lugar donde sea válida una constante o expresión escalar (SELECT, WHERE con operadores `=`, `>`, etc.).",
      "Retorna una estructura bidimensional de múltiples filas y columnas que solo puede ser leída mediante cursores declarados en procedimientos almacenados dentro de la base de datos de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL.",
      "Es una subconsulta no transaccional que solo puede invocarse dentro de funciones definidas por el usuario escritas en C o ensamblador en el servidor de base de datos.",
      "Es una consulta recursiva que itera indefinidamente sobre árboles jerárquicos hasta alcanzar una condición de parada fijada en el almacenamiento secundario del motor relacional."
    ],
    "correctAnswer": 0,
    "hint": "Escalar = un único valor atómico (1x1).",
    "explanation": "Una subconsulta escalar produce un único valor atómico (una sola celda). Por ello, puede compararse directamente con operadores aritméticos y relacionales (`WHERE salario > (SELECT AVG(salario) FROM Empleados)`).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 8",
    "slideImage": "assets/clases_infographics/clase4_p08.png",
    "type": "single_choice"
  },
  {
    "id": 410,
    "classNum": 4,
    "topic": "Subconsultas de Lista",
    "unit": "Clase 4",
    "question": "Si una subconsulta devuelve múltiples filas de una sola columna, ¿qué operador debe utilizarse en la consulta externa para comparar un valor?",
    "options": [
      "Operadores de conjunto como `IN`, `NOT IN`, `ANY` (o `SOME`) y `ALL`.",
      "Operadores de comparación escalar estricta como `=`, `<>` y `!=`.",
      "Operadores de concatenación de cadenas como `||` y `CONCAT()`.",
      "Funciones trigonométricas escalares como `SIN()`, `COS()` y `TAN()` dentro del catálogo de datos del sistema de gestión de base de datos relacional."
    ],
    "correctAnswer": 0,
    "hint": "No puedes usar '=' frente a múltiples valores; debes usar IN, ANY o ALL.",
    "explanation": "Cuando la subconsulta produce una lista de valores, los operadores de igualdad escalar (`=`) fallan con error de cardinalidad. Se deben emplear operadores para conjuntos como `IN`, `ANY` o `ALL`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 9",
    "slideImage": "assets/clases_infographics/clase4_p09.png",
    "type": "single_choice"
  },
  {
    "id": 411,
    "classNum": 4,
    "topic": "Subconsultas en FROM",
    "unit": "Clase 4",
    "question": "¿Qué requisito es estrictamente obligatorio al utilizar una subconsulta en la cláusula `FROM` (Tabla Derivada / Inline View)?",
    "options": [
      "Asignarle obligatoriamente un Alias de tabla (ej. `FROM (SELECT id, AVG(monto) FROM Ventas GROUP BY id) AS resumen`).",
      "Limitar el conjunto resultante a un número máximo de tres tuplas mediante el uso mandatorio de la cláusula LIMIT en el almacenamiento secundario durante el procesamiento concurrente de transacciones.",
      "Omitir el uso de cualquier función de agregación matemática dentro de la lista de proyección de la subconsulta.",
      "Crear previamente un índice compuesto en memoria sobre las columnas involucradas en la sentencia secundaria."
    ],
    "correctAnswer": 0,
    "hint": "Toda tabla derivada en el FROM debe tener un alias para que la consulta externa pueda referenciar sus columnas.",
    "explanation": "En el estándar SQL, cualquier subconsulta colocada en la cláusula FROM genera una tabla derivada temporal que exige un alias identificador para poder referenciar sus columnas en el resto de la consulta.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 10",
    "slideImage": "assets/clases_infographics/clase4_p10.png",
    "type": "single_choice"
  },
  {
    "id": 412,
    "classNum": 4,
    "topic": "Subconsultas No Correlacionadas",
    "unit": "Clase 4",
    "question": "¿Cómo se ejecuta una Subconsulta No Correlacionada (Self-Contained Subquery)?",
    "options": [
      "Se evalúa una única vez de manera independiente antes de que comience la ejecución de la consulta externa, y su resultado se reutiliza.",
      "Se ejecuta de forma iterativa y repetitiva una vez por cada fila procesada por la consulta externa en el escaneo de datos.",
      "Se ejecuta exclusivamente cuando el usuario interrumpe la sesión activa mediante una señal de terminación de procesos.",
      "Requiere compilar la base de datos completa en un archivo binario ejecutable antes de ser procesada por el optimizador."
    ],
    "correctAnswer": 0,
    "hint": "No depende de las columnas externas: se resuelve una sola vez al principio.",
    "explanation": "Una subconsulta no correlacionada no hace referencia a variables ni columnas de la consulta externa; por ende, el motor la resuelve una única vez al inicio y pasa el resultado constante a la consulta principal.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 11",
    "slideImage": "assets/clases_infographics/clase4_p11.png",
    "type": "single_choice"
  },
  {
    "id": 413,
    "classNum": 4,
    "topic": "Subconsultas Correlacionadas",
    "unit": "Clase 4",
    "question": "¿Qué caracteriza a una Subconsulta Correlacionada (Correlated Subquery)?",
    "options": [
      "Hace referencia a una o más columnas de la consulta externa, ejecutándose y evaluándose una vez por cada fila candidata de la consulta principal.",
      "Es una consulta aislada que se resuelve de manera preliminar en memoria sin compartir ningún contexto con la sentencia externa para preservar la integridad referencial y el aislamiento entre transacciones activas.",
      "Solo puede ejecutarse sobre tablas particionadas que residan en servidores distribuidos con replicación transaccional activa.",
      "Se persiste automáticamente en disco secundario bajo la forma de una vista materializada de solo lectura tras completarse."
    ],
    "correctAnswer": 0,
    "hint": "La subconsulta interna depende del valor de la fila actual de la consulta externa.",
    "explanation": "Una subconsulta correlacionada contiene referencias a columnas de la consulta externa (ej. `WHERE e_ext.id_depto = e_int.id_depto`), por lo que su resultado varía fila a fila y debe evaluarse para cada tupla externa.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 12",
    "slideImage": "assets/clases_infographics/clase4_p12.png",
    "type": "single_choice"
  },
  {
    "id": 414,
    "classNum": 4,
    "topic": "Operador EXISTS",
    "unit": "Clase 4",
    "question": "¿Cómo evalúa el operador `EXISTS (SELECT 1 FROM ...)` y por qué es altamente eficiente?",
    "options": [
      "Devuelve TRUE tan pronto como la subconsulta encuentra la primera fila coincidente (evaluación en cortocircuito), sin necesidad de recuperar ni contar todas las filas.",
      "Calcula la suma acumulada de todos los valores numéricos de la tabla secundaria antes de determinar si existe alguna coincidencia válida en los registros de almacenamiento.",
      "Carga la totalidad de la relación en el búfer de memoria volátil y cuenta la cantidad exacta de caracteres almacenados en sus columnas para validar la existencia de tuplas.",
      "Exige de forma obligatoria que la subconsulta proyecte la clave primaria de la tabla hija para validar la correspondencia referencial en el catálogo del sistema relacional."
    ],
    "correctAnswer": 0,
    "hint": "EXISTS solo evalúa si hay al menos una fila (True/False); al encontrar la primera coincidencia se detiene inmediatamente.",
    "explanation": "El operador EXISTS evalúa la existencia de filas. En cuanto el motor encuentra una tupla que cumpla el predicado, retorna TRUE inmediatamente (short-circuit), siendo mucho más eficiente que COUNT(*) > 0.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 13",
    "slideImage": "assets/clases_infographics/clase4_p13.png",
    "type": "single_choice"
  },
  {
    "id": 415,
    "classNum": 4,
    "topic": "Operador NOT EXISTS",
    "unit": "Clase 4",
    "question": "¿Qué consulta obtiene los clientes que no poseen ningún pedido utilizando `NOT EXISTS`?",
    "options": [
      "`SELECT c.* FROM Clientes c WHERE NOT EXISTS (SELECT 1 FROM Pedidos p WHERE p.id_cliente = c.id);`",
      "`SELECT c.* FROM Clientes c WHERE EXISTS (SELECT * FROM Pedidos p WHERE p.id = NULL);` dentro del catálogo de datos del sistema de gestión de base de datos relacional.",
      "`SELECT c.* FROM Clientes c WHERE NOT EXISTS p.id_cliente FROM Pedidos p;`",
      "`SELECT c.* FROM Clientes c JOIN NOT EXISTS Pedidos p ON c.id = p.id_cliente;`"
    ],
    "correctAnswer": 0,
    "hint": "NOT EXISTS con subconsulta correlacionada filtrando por id_cliente.",
    "explanation": "La expresión `NOT EXISTS (SELECT 1 FROM Pedidos p WHERE p.id_cliente = c.id)` retorna TRUE únicamente para aquellos clientes cuyo id no figure en ninguna tupla de la tabla Pedidos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 13",
    "slideImage": "assets/clases_infographics/clase4_p13.png",
    "type": "single_choice"
  },
  {
    "id": 416,
    "classNum": 4,
    "topic": "Operador ANY / SOME",
    "unit": "Clase 4",
    "question": "¿Qué evalúa la condición `WHERE salario > ANY (SELECT salario FROM Empleados WHERE depto = 'Ventas')`?",
    "options": [
      "Devuelve TRUE si el salario es mayor que al menos uno de los salarios de Ventas (es decir, mayor que el salario mínimo de Ventas).",
      "Devuelve TRUE solo si el salario es estrictamente mayor que todos y cada uno de los salarios de Ventas simultáneamente.",
      "Devuelve TRUE si el salario es igual a la suma aritmética consolidada de la totalidad de sueldos pagados en Ventas.",
      "Arroja un error de sintaxis en el motor relacional porque el operador ANY no puede combinarse con el signo mayor `>`."
    ],
    "correctAnswer": 0,
    "hint": "> ANY significa 'mayor que el mínimo de la lista'.",
    "explanation": "El operador `> ANY (subquery)` compara el valor con cada elemento de la subconsulta y es verdadero si la comparación es cierta para al menos un elemento (equivale a `> MIN(...)`).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 14",
    "slideImage": "assets/clases_infographics/clase4_p14.png",
    "type": "single_choice"
  },
  {
    "id": 417,
    "classNum": 4,
    "topic": "Operador ALL",
    "unit": "Clase 4",
    "question": "¿Qué evalúa la condición `WHERE salario > ALL (SELECT salario FROM Empleados WHERE depto = 'Ventas')`?",
    "options": [
      "Devuelve TRUE solo si el salario es estrictamente superior a TODOS los salarios de Ventas (es decir, mayor que el salario máximo de Ventas).",
      "Devuelve TRUE si el salario es superior al promedio aritmético de los salarios correspondientes al departamento de Ventas mediante estructuras auxiliares de índices auto-balanceados de tipo árbol B+ en disco.",
      "Devuelve TRUE si el empleado presta servicios en la totalidad de las sucursales asignadas al área comercial de Ventas.",
      "Devuelve FALSE de manera incondicional siempre que la tabla Departamentos contenga más de un registro confirmado en disco."
    ],
    "correctAnswer": 0,
    "hint": "> ALL significa 'mayor que el máximo de toda la lista'.",
    "explanation": "El operador `> ALL (subquery)` exige que el valor sea mayor que cada uno de los elementos devueltos por la subconsulta (equivale a `> MAX(...)`).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 14",
    "slideImage": "assets/clases_infographics/clase4_p14.png",
    "type": "single_choice"
  },
  {
    "id": 418,
    "classNum": 4,
    "topic": "Impacto de DML en Índices",
    "unit": "Clase 4",
    "question": "¿Cómo impactan las operaciones DML frecuentes (INSERT, UPDATE, DELETE) sobre los índices definidos en una tabla?",
    "options": [
      "Penalizan el rendimiento de escritura porque cada modificación en los datos exige que el motor actualice y rebalancee inmediatamente las estructuras de los árboles de índices (B-Tree).",
      "Aceleran sustancialmente la velocidad de las sentencias INSERT al compactar y comprimir los registros en la memoria caché del procesador antes de sincronizarlos con el disco secundario.",
      "No generan ningún impacto medible en los tiempos de respuesta porque los índices relacionales se reconstruyen de forma asíncrona una vez al mes por tareas programadas del servidor.",
      "Eliminan automáticamente las tuplas duplicadas de la tabla física cada vez que se ejecuta una sentencia de actualización masiva mediante algoritmos de hash en memoria volátil."
    ],
    "correctAnswer": 0,
    "hint": "Las lecturas se aceleran con índices, pero las escrituras pagan el costo de mantenerlos al día.",
    "explanation": "Cada vez que se ejecuta un INSERT, UPDATE o DELETE sobre una columna indexada, el SGBD debe actualizar tanto la página de datos de la tabla como la estructura del índice (haciendo splits de nodo en B-Trees), agregando sobrecarga de E/S.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 15",
    "slideImage": "assets/clases_infographics/clase4_p15.png",
    "type": "single_choice"
  },
  {
    "id": 419,
    "classNum": 4,
    "topic": "Transacciones DML",
    "unit": "Clase 4",
    "question": "¿Qué comando se utiliza para deshacer y anular todas las operaciones DML realizadas dentro de una transacción activa antes de confirmarla?",
    "options": [
      "`ROLLBACK;`",
      "`COMMIT;`",
      "`REVERT_ALL;`",
      "`UNDO_CHANGES;`"
    ],
    "correctAnswer": 0,
    "hint": "ROLLBACK revierte la transacción al estado inicial.",
    "explanation": "El comando ROLLBACK cancela y revierte todas las modificaciones DML realizadas durante la transacción actual, restaurando la base de datos a su estado previo.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 2",
    "slideImage": "assets/clases_infographics/clase4_p02.png",
    "type": "single_choice"
  },
  {
    "id": 420,
    "classNum": 4,
    "topic": "Transacciones DML",
    "unit": "Clase 4",
    "question": "¿Qué comando confirma de forma permanente en el disco los cambios realizados por una transacción?",
    "options": [
      "`COMMIT;`",
      "`SAVE;`",
      "`PERSIST;`",
      "`FLUSH_BUFFER;`"
    ],
    "correctAnswer": 0,
    "hint": "COMMIT graba los cambios definitivamente.",
    "explanation": "El comando COMMIT finaliza la transacción con éxito y garantiza la durabilidad de los cambios en el almacenamiento persistente.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 2",
    "slideImage": "assets/clases_infographics/clase4_p02.png",
    "type": "single_choice"
  },
  {
    "id": 421,
    "classNum": 4,
    "topic": "Subconsultas en WHERE",
    "unit": "Clase 4",
    "question": "¿Cuál es la consulta correcta para obtener los empleados cuyo salario sea superior al salario promedio de toda la empresa?",
    "options": [
      "`SELECT * FROM Empleados WHERE salario > (SELECT AVG(salario) FROM Empleados);`",
      "`SELECT * FROM Empleados WHERE salario > AVG(salario);`",
      "`SELECT * FROM Empleados HAVING salario > AVG(salario);`",
      "`SELECT * FROM Empleados WHERE salario > (SELECT SUM(salario) FROM Empleados);`"
    ],
    "correctAnswer": 0,
    "hint": "No puedes usar AVG en el WHERE directamente; debes anidar una subconsulta escalar `(SELECT AVG(salario) FROM Empleados)`.",
    "explanation": "Debido a que las funciones de agregación no se pueden invocar directamente en el WHERE de la consulta principal, se debe utilizar una subconsulta escalar que calcule el promedio y devuelva ese valor único para la comparación.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 8",
    "slideImage": "assets/clases_infographics/clase4_p08.png",
    "type": "single_choice"
  },
  {
    "id": 422,
    "classNum": 4,
    "topic": "Subconsultas vs JOINs",
    "unit": "Clase 4",
    "question": "¿Por qué los motores modernos optimizan muchas subconsultas convirtiéndolas internamente a operaciones `JOIN` (decorrelación / subquery unnesting)?",
    "options": [
      "Porque las operaciones JOIN permiten al optimizador elegir algoritmos eficientes de combinación (Hash Join, Merge Join) y paralelizar el escaneo de datos.",
      "Porque las subconsultas generan un consumo eléctrico excesivo en las unidades de procesamiento gráfico del centro de cómputos al evaluar cada fila de datos.",
      "Porque el consorcio ANSI SQL declaró obsoletas las subconsultas anidadas y serán eliminadas por completo en las próximas especificaciones del lenguaje estándar.",
      "Porque las operaciones de combinación relacional son las únicas capaces de ejecutarse sin adquirir bloqueos compartidos en memoria volátil durante consultas concurrentes."
    ],
    "correctAnswer": 0,
    "hint": "El unnesting transforma subconsultas en JOINs para aprovechar Hash Joins y Merge Joins.",
    "explanation": "La decorrelación de subconsultas (Subquery Unnesting) es una técnica del optimizador que transforma subconsultas correlacionadas en JOINs o Semi-JOINs, permitiendo algoritmos de alta velocidad como Hash Joins.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 12",
    "slideImage": "assets/clases_infographics/clase4_p12.png",
    "type": "single_choice"
  },
  {
    "id": 423,
    "classNum": 4,
    "topic": "Comando UPDATE",
    "unit": "Clase 4",
    "question": "Deseas aumentar un 15% el salario de todos los empleados del departamento de 'Ventas'. Completa el comando DML:",
    "template": "UPDATE Empleados {INPUT} salario = salario * 1.15 WHERE depto = 'Ventas';",
    "expectedAnswer": "SET",
    "hint": "Palabra clave de 3 letras que precede a la asignación de columnas en el UPDATE.",
    "explanation": "La cláusula SET especifica las columnas que van a modificarse y las nuevas expresiones de valor correspondientes.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 4",
    "slideImage": "assets/clases_infographics/clase4_p04.png",
    "type": "fill_in_sql",
    "acceptedAnswers": [
      "SET"
    ]
  },
  {
    "id": 424,
    "classNum": 4,
    "topic": "Comando INSERT",
    "unit": "Clase 4",
    "question": "Completa la palabra clave que precede a la lista de valores en una inserción SQL:",
    "template": "INSERT INTO Categorias (id, nombre) {INPUT} (1, 'Electrónica');",
    "expectedAnswer": "VALUES",
    "hint": "Palabra clave en plural que encabeza los valores a insertar (6 letras).",
    "explanation": "La palabra clave VALUES encabeza la tupla de datos literales a ser insertada en las columnas indicadas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 2",
    "slideImage": "assets/clases_infographics/clase4_p02.png",
    "type": "fill_in_sql",
    "acceptedAnswers": [
      "VALUES"
    ]
  },
  {
    "id": 425,
    "classNum": 4,
    "topic": "Operador EXISTS",
    "unit": "Clase 4",
    "question": "Completa el operador booleano de existencia en la siguiente consulta correlacionada:",
    "template": "SELECT * FROM Clientes c WHERE {INPUT} (SELECT 1 FROM Pedidos p WHERE p.id_cliente = c.id);",
    "expectedAnswer": "EXISTS",
    "hint": "Operador que verifica si la subconsulta retorna al menos una fila (6 letras).",
    "explanation": "El operador EXISTS comprueba si la subconsulta correlacionada retorna al menos un registro.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 13",
    "slideImage": "assets/clases_infographics/clase4_p13.png",
    "type": "fill_in_sql",
    "acceptedAnswers": [
      "EXISTS"
    ]
  },
  {
    "id": 426,
    "classNum": 4,
    "topic": "Comandos DML",
    "unit": "Clase 4",
    "question": "Completa las palabras clave para insertar un nuevo usuario y actualizar su estado a activo:",
    "codeSnippet": "[B1] INTO Usuarios (nombre, email)\nVALUES ('Carlos', 'carlos@mail.com');\n\n[B2] Usuarios\nSET activo = true\nWHERE email = 'carlos@mail.com';",
    "blanks": [
      {
        "id": "B1",
        "placeholder": "Comando de inserción",
        "expected": "INSERT"
      },
      {
        "id": "B2",
        "placeholder": "Comando de actualización",
        "expected": "UPDATE"
      }
    ],
    "hint": "Primer comando para crear la fila y segundo para modificarla.",
    "explanation": "INSERT crea la nueva tupla y UPDATE modifica el valor de la columna 'activo' para ese usuario.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 2",
    "slideImage": "assets/clases_infographics/clase4_p02.png",
    "type": "code_completion",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  <div class=\"dataset-table-card\">\n    <div class=\"dataset-card-header\">\n      <span class=\"table-name-tag\">📁 TABLA: <code>Usuarios</code></span>\n      <span class=\"table-rows-tag\">Estructura</span>\n    </div>\n    <div class=\"table-responsive-box\">\n      <table class=\"dataset-html-table\">\n        <thead>\n          <tr>\n            <th>id <span class=\"key-badge pk\">PK</span></th>\n            <th>nombre</th>\n            <th>email</th>\n            <th>activo</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr><td>1</td><td>Carlos</td><td>carlos@mail.com</td><td>false → true</td></tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"
  },
  {
    "id": 427,
    "classNum": 4,
    "topic": "Tipos de Borrado",
    "unit": "Clase 4",
    "question": "Relaciona cada comando de borrado SQL con su impacto y comportamiento:",
    "pairs": [
      {
        "key": "DELETE FROM tabla",
        "value": "Borra filas una a una, admite WHERE y permite ROLLBACK"
      },
      {
        "key": "TRUNCATE TABLE tabla",
        "value": "Desasigna páginas de datos velozmente sin admitir WHERE (DDL)"
      },
      {
        "key": "DROP TABLE tabla",
        "value": "Elimina los datos y la definición del esquema del catálogo"
      },
      {
        "key": "ROLLBACK",
        "value": "Revierte las modificaciones de la transacción activa"
      }
    ],
    "explanation": "DELETE borra filas con log transaccional, TRUNCATE vacía páginas rápido, DROP borra la tabla completa del sistema y ROLLBACK revierte cambios.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 6",
    "slideImage": "assets/clases_infographics/clase4_p06.png",
    "type": "matching"
  },
  {
    "id": 428,
    "classNum": 4,
    "topic": "Subconsultas",
    "unit": "Clase 4",
    "question": "Relaciona cada tipo de subconsulta con su estructura y comportamiento:",
    "pairs": [
      {
        "key": "Subconsulta Escalar",
        "value": "Retorna exactamente 1 fila y 1 columna (1x1)"
      },
      {
        "key": "Subconsulta de Lista",
        "value": "Retorna 1 columna con múltiples filas (usada con IN/ANY)"
      },
      {
        "key": "Subconsulta Derivada",
        "value": "Ubicada en el FROM, requiere alias de tabla obligatorio"
      },
      {
        "key": "Subconsulta Correlacionada",
        "value": "Referencia columnas externas y se evalúa por cada fila"
      }
    ],
    "explanation": "La escalar produce un único valor, la de lista produce un vector de valores, la derivada actúa como tabla temporal en el FROM y la correlacionada depende de la consulta externa.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 7",
    "slideImage": "assets/clases_infographics/clase4_p07.png",
    "type": "matching"
  },
  {
    "id": 429,
    "classNum": 4,
    "topic": "Operadores de Subconsultas",
    "unit": "Clase 4",
    "question": "Relaciona cada operador de subconsulta con su lógica de evaluación:",
    "pairs": [
      {
        "key": "IN (subquery)",
        "value": "Verifica si el valor coincide con alguno de la lista"
      },
      {
        "key": "EXISTS (subquery)",
        "value": "Evalúa a TRUE en cuanto encuentra al menos 1 fila"
      },
      {
        "key": "> ALL (subquery)",
        "value": "Verifica si el valor supera a todos los elementos (mayor al MAX)"
      },
      {
        "key": "> ANY (subquery)",
        "value": "Verifica si el valor supera al menos a uno (mayor al MIN)"
      }
    ],
    "explanation": "IN compara igualdad múltiple, EXISTS evalúa existencia con cortocircuito, > ALL exige superar a todos y > ANY exige superar al menos a uno.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 14",
    "slideImage": "assets/clases_infographics/clase4_p14.png",
    "type": "matching"
  },
  {
    "id": 430,
    "classNum": 4,
    "topic": "Comandos DML",
    "unit": "Clase 4",
    "question": "¿A qué categoría de sentencias SQL pertenece la instrucción `UPDATE`?",
    "options": [
      "DML (Data Manipulation Language).",
      "DDL (Data Definition Language).",
      "DCL (Data Control Language).",
      "TCL (Transaction Control Language)."
    ],
    "correctAnswer": 0,
    "hint": "UPDATE manipula datos existentes dentro de las tablas.",
    "explanation": "El comando UPDATE pertenece al DML (Data Manipulation Language) porque modifica el estado de los datos almacenados en las tuplas existentes sin alterar la estructura del esquema.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 4, pág. 4",
    "slideImage": "assets/clases_infographics/clase4_p04.png",
    "type": "single_choice"
  },
  {
    "id": 431,
    "classNum": 4,
    "topic": "DML - Inserción de Datos",
    "unit": "Clase 4 - Autoevaluación 4",
    "question": "¿Qué comando DML se utiliza para insertar una nueva fila en una tabla de una base de datos relacional?",
    "options": [
      "INSERT INTO",
      "UPDATE SET",
      "ALTER TABLE ADD",
      "CREATE RECORD"
    ],
    "correctAnswer": 0,
    "hint": "Es la sentencia DML que añade nuevas tuplas especificando columnas y valores.",
    "explanation": "La sentencia DML estándar para agregar nuevas filas/registros a una tabla existente es INSERT INTO tabla (columnas) VALUES (valores).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 4 (Diapositiva Clase 4, pág. 2)",
    "slideImage": "assets/clases_infographics/clase4_p02.png",
    "type": "single_choice"
  },
  {
    "id": 432,
    "classNum": 4,
    "topic": "DML - Modificación con Operaciones Aritméticas",
    "unit": "Clase 4 - Autoevaluación 4",
    "question": "Si se desea incrementar un 10% el salario de todos los empleados del departamento 2, ¿cuál es la sentencia SQL adecuada?",
    "options": [
      "UPDATE Empleados SET salario = salario * 1.10 WHERE id_departamento = 2;",
      "ALTER TABLE Empleados MODIFY salario = salario * 1.10 WHERE id_departamento = 2;",
      "INSERT INTO Empleados (salario) VALUES (salario * 1.10) WHERE id_departamento = 2;",
      "UPDATE Empleados SET salario = +10% WHERE id_departamento = 2;"
    ],
    "correctAnswer": 0,
    "hint": "Para actualizar valores existentes usamos UPDATE con SET y una expresión matemática multiplicando por 1.10.",
    "explanation": "La sentencia UPDATE permite modificar valores existentes asignando el resultado de expresiones como salario * 1.10, filtrando por la condición WHERE id_departamento = 2.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 4 (Diapositiva Clase 4, pág. 3)",
    "slideImage": "assets/clases_infographics/clase4_p03.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 433,
    "classNum": 4,
    "topic": "DML - Eliminación de Registros",
    "unit": "Clase 4 - Autoevaluación 4",
    "question": "¿Qué sentencia SQL elimina únicamente al empleado con `id = 108`?",
    "options": [
      "DELETE FROM Empleados WHERE id = 108;",
      "DROP ROW FROM Empleados WHERE id = 108;",
      "REMOVE FROM Empleados WHERE id = 108;",
      "TRUNCATE TABLE Empleados WHERE id = 108;"
    ],
    "correctAnswer": 0,
    "hint": "DELETE FROM con una cláusula WHERE que especifique la clave primaria a remover.",
    "explanation": "DELETE FROM tabla WHERE condición es la sintaxis correcta para eliminar filas específicas. TRUNCATE no admite WHERE y DROP elimina estructuras completas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 4 (Diapositiva Clase 4, pág. 4)",
    "slideImage": "assets/clases_infographics/clase4_p04.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 434,
    "classNum": 4,
    "topic": "Sintaxis de Inserción Completa",
    "unit": "Clase 4 - Autoevaluación 4",
    "question": "¿Cuál es la sintaxis SQL estándar correcta para insertar un nuevo departamento llamado 'Finanzas' con id = 6?",
    "options": [
      "`INSERT INTO Departamentos (id, nombre_departamento) VALUES (6, 'Finanzas');`",
      "`ADD ROW TO Departamentos VALUES (6, 'Finanzas') SET PRIMARY KEY;`",
      "`INSERT RECORD (6, 'Finanzas') INTO TABLE Departamentos CONFIRM;`",
      "`UPDATE Departamentos ADD ENTRY (6, 'Finanzas') COMMIT TRANSACTION;` de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL."
    ],
    "correctAnswer": 0,
    "hint": "Estructura: INSERT INTO nombre_tabla (campos) VALUES (datos).",
    "explanation": "La sintaxis estándar requiere INSERT INTO nombre_tabla (columnas) VALUES (valores_correspondientes);.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 4 (Diapositiva Clase 4, pág. 2)",
    "slideImage": "assets/clases_infographics/clase4_p02.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 435,
    "classNum": 4,
    "topic": "Riesgo de UPDATE sin WHERE",
    "unit": "Clase 4 - Autoevaluación 4",
    "question": "¿Qué ocurre si se ejecuta la sentencia `UPDATE Empleados SET salario = 50000;` sin especificar una cláusula WHERE?",
    "options": [
      "El salario de TODOS los empleados de la tabla será actualizado a 50000.",
      "El motor rechaza la consulta arrojando un error de sintaxis obligatorio.",
      "Solo se actualiza el primer registro de la tabla.",
      "Se crea un nuevo empleado con salario 50000."
    ],
    "correctAnswer": 0,
    "hint": "Sin WHERE, la instrucción se propaga a todas las tuplas de la relación.",
    "explanation": "En SQL, omitir la cláusula WHERE en un comando UPDATE aplica la modificación a todas y cada una de las filas de la tabla de forma generalizada.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 4 (Diapositiva Clase 4, pág. 3)",
    "slideImage": "assets/clases_infographics/clase4_p03.png",
    "type": "single_choice"
  },
  {
    "id": 436,
    "classNum": 4,
    "topic": "Actualización Específica por Clave Primaria",
    "unit": "Clase 4 - Autoevaluación 4",
    "question": "Si ejecutamos `UPDATE Empleados SET salario = 70000 WHERE id = 101;`, ¿a quién estamos modificando el salario?",
    "options": [
      "A Ana Gómez (id = 101).",
      "A Carlos Pérez (id = 102).",
      "A todos los empleados que ganen menos de 70000.",
      "A los empleados del departamento 1."
    ],
    "correctAnswer": 0,
    "hint": "El ID 101 identifica unívocamente a Ana Gómez en la tabla.",
    "explanation": "El filtro WHERE id = 101 restringe la operación exclusivamente a la tupla cuya Clave Primaria es 101, perteneciente a Ana Gómez.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 4 (Diapositiva Clase 4, pág. 3)",
    "slideImage": "assets/clases_infographics/clase4_p03.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 437,
    "classNum": 4,
    "topic": "Subconsultas Escalares con Función de Agregación",
    "unit": "Clase 4 - Autoevaluación 4",
    "question": "¿Qué devuelve la siguiente subconsulta en la cláusula WHERE?\n`SELECT nombre, salario FROM Empleados WHERE salario > (SELECT AVG(salario) FROM Empleados);`",
    "options": [
      "Todos los empleados cuyo salario es estrictamente superior al salario promedio de toda la compañía.",
      "El empleado específico que percibe la remuneración más elevada registrada en la tabla de personal.",
      "El promedio salarial calculado de forma independiente para cada uno de los departamentos de la firma.",
      "Una lista de excepciones de sintaxis porque el motor no admite anidamiento de consultas en el WHERE."
    ],
    "correctAnswer": 0,
    "hint": "La consulta interna calcula el promedio general (AVG) y la externa compara cada salario contra ese número escalar.",
    "explanation": "La subconsulta (SELECT AVG(salario) FROM Empleados) es una subconsulta escalar que retorna un único valor numérico (el promedio general). El SELECT exterior filtra a quienes ganan más que dicho promedio.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 4 (Diapositiva Clase 4, pág. 5)",
    "slideImage": "assets/clases_infographics/clase4_p05.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid single-table\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 438,
    "classNum": 4,
    "topic": "Subconsultas de Igualdad",
    "unit": "Clase 4 - Autoevaluación 4",
    "question": "En la consulta:\n`SELECT nombre FROM Empleados WHERE id_departamento = (SELECT id FROM Departamentos WHERE nombre_departamento = 'Sistemas');`\n¿Qué empleados se obtendrán?",
    "options": [
      "Los empleados que pertenezcan al departamento 'Sistemas' (Diego López).",
      "Todos los empleados de la empresa excepto los de Sistemas.",
      "Únicamente el nombre del departamento Sistemas.",
      "Ninguno porque las subconsultas requieren obligatoriamente el operador IN."
    ],
    "correctAnswer": 0,
    "hint": "La subconsulta resuelve primero el ID de Sistemas (4) y la consulta externa busca empleados con ese ID.",
    "explanation": "La subconsulta interna devuelve el id correspondiente a 'Sistemas' (4). La consulta externa busca a los empleados con id_departamento = 4 (Diego López).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 4 (Diapositiva Clase 4, pág. 5)",
    "slideImage": "assets/clases_infographics/clase4_p05.png",
    "type": "single_choice",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 439,
    "classNum": 4,
    "topic": "Propósito de las Subconsultas",
    "unit": "Clase 4 - Autoevaluación 4",
    "question": "¿Cuál es la principal ventaja de utilizar subconsultas (consultas anidadas) en SQL?",
    "options": [
      "Permiten resolver problemas en varios pasos lógicos dinámicos utilizando el resultado de una consulta como filtro o tabla derivada en otra.",
      "Eliminan por completo la necesidad de estructurar índices B-Tree o Hash en las tablas de almacenamiento secundario del servidor.",
      "Garantizan que no se produzcan bloqueos de concurrencia ni anomalías transaccionales al actualizar datos de forma simultánea.",
      "Transforman automáticamente los esquemas de bases de datos relacionales en repositorios orientados a documentos semiestructurados de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL."
    ],
    "correctAnswer": 0,
    "hint": "Permiten calcular valores intermedios dinámicamente sin hardcodear datos fijos.",
    "explanation": "Las subconsultas permiten componer operaciones complejas de manera modular y dinámica, calculando valores o conjuntos de datos intermedios que condicionan o alimentan la consulta principal.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 4 (Diapositiva Clase 4, pág. 5)",
    "slideImage": "assets/clases_infographics/clase4_p05.png",
    "type": "single_choice"
  },
  {
    "id": 501,
    "classNum": 5,
    "topic": "Modelo Relacional",
    "unit": "Clase 5",
    "question": "En la terminología formal del Modelo Relacional formulado por E. F. Codd, ¿a qué equivalen los conceptos de Relación, Tupla y Atributo?",
    "options": [
      "Relación equivale a Tabla, Tupla equivale a Fila (Registro) y Atributo equivale a Columna (Campo).",
      "Relación equivale a Servidor, Tupla equivale a Base de Datos y Atributo equivale a Índice.",
      "Relación equivale a Clave Primaria, Tupla equivale a Clave Foránea y Atributo equivale a Restricción.",
      "Relación equivale a Consulta SELECT, Tupla equivale a WHERE y Atributo equivale a FROM."
    ],
    "correctAnswer": 0,
    "hint": "Relación = Tabla, Tupla = Fila, Atributo = Columna.",
    "explanation": "En el modelo formal relacional, una Relación es un conjunto de Tuplas (filas), donde cada tupla está compuesta por un conjunto de Atributos (columnas) cuyos valores pertenecen a un Dominio.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 2",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "type": "single_choice"
  },
  {
    "id": 502,
    "classNum": 5,
    "topic": "Modelo Relacional",
    "unit": "Clase 5",
    "question": "¿Cuál es la diferencia entre el 'Grado' y la 'Cardinalidad' de una relación en el modelo relacional?",
    "options": [
      "El Grado es el número total de atributos (columnas); la Cardinalidad es el número total de tuplas (filas) de la relación.",
      "El Grado representa la cantidad de índices B-Tree en disco; la Cardinalidad indica el número de páginas de almacenamiento.",
      "El Grado mide la latencia de respuesta en milisegundos; la Cardinalidad define el nivel de aislamiento de las transacciones.",
      "El Grado es la cantidad de conexiones concurrentes; la Cardinalidad es el tamaño en megabytes del archivo de datos."
    ],
    "correctAnswer": 0,
    "hint": "Grado = número de columnas; Cardinalidad = cantidad de filas.",
    "explanation": "El Grado de una relación corresponde a la cantidad de atributos (columnas) que la definen. La Cardinalidad es la cantidad de tuplas (filas) que contiene en un momento dado.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 2",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "type": "single_choice"
  },
  {
    "id": 503,
    "classNum": 5,
    "topic": "Concepto de Dominio",
    "unit": "Clase 5",
    "question": "¿Qué es un 'Dominio' en el modelo relacional?",
    "options": [
      "El conjunto de todos los valores atómicos válidos y homogéneos que puede asumir un determinado atributo.",
      "La dirección IP y el nombre de red que identifica al servidor principal donde se hospeda el motor relacional.",
      "El grupo de usuarios y roles que disponen de permisos de lectura y escritura sobre el esquema de la base.",
      "La cantidad máxima de bloques contiguos que el sistema operativo puede asignar a una tabla en el disco."
    ],
    "correctAnswer": 0,
    "hint": "El dominio define el tipo de dato, rango y formato permitido para los valores de un atributo.",
    "explanation": "Un Dominio es un conjunto con nombre de valores atómicos homogéneos del cual el atributo toma sus valores reales (ej. dominio de números enteros positivos entre 1 y 120 para la edad).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 3",
    "slideImage": "assets/clases_infographics/clase5_p03.png",
    "type": "single_choice"
  },
  {
    "id": 504,
    "classNum": 5,
    "topic": "Claves Relacionales",
    "unit": "Clase 5",
    "question": "¿Qué es una 'Superclave' en una relación relacional?",
    "options": [
      "Un subconjunto de uno o más atributos que permite identificar de manera unívoca a cada tupla dentro de una relación.",
      "Un índice compuesto en disco que almacena exclusivamente columnas numéricas con valores pares autoincrementales de acuerdo con las especificaciones y normativas formales del estándar ANSI SQL.",
      "Una restricción de integridad que impide la inserción de valores nulos en tablas que carecen de clave primaria.",
      "Una función de agregación del motor que comprueba si dos relaciones contienen exactamente la misma cardinalidad."
    ],
    "correctAnswer": 0,
    "hint": "Superclave = cualquier conjunto de atributos que garantice unicidad (puede incluir columnas redundantes).",
    "explanation": "Una Superclave es un conjunto de atributos dentro de una relación tal que no existen dos tuplas distintas con el mismo valor en dicho conjunto de atributos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 4",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 505,
    "classNum": 5,
    "topic": "Claves Relacionales",
    "unit": "Clase 5",
    "question": "¿Qué es una 'Clave Candidata' (Candidate Key)?",
    "options": [
      "Una superclave mínima; es decir, un conjunto de atributos que identifica unívocamente a cada tupla sin contener atributos superfluos.",
      "Cualquier atributo que contenga valores numéricos continuos y permita ordenar el resultado mediante escaneos de índice B-Tree dentro del catálogo de datos del sistema de gestión de base de datos relacional.",
      "Un campo de texto que almacena contraseñas cifradas para autenticar las conexiones remotas que acceden al servidor relacional.",
      "Una columna secundaria que puede aceptar valores repetidos siempre que la tabla se encuentre particionada en múltiples discos."
    ],
    "correctAnswer": 0,
    "hint": "Clave Candidata = Superclave minimal (sin atributos sobrantes).",
    "explanation": "Una Clave Candidata es una superclave irreducible (mínima). Si se le quita cualquiera de sus atributos constituyentes, deja de ser superclave y no puede garantizar la unicidad de las tuplas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 4",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 506,
    "classNum": 5,
    "topic": "Clave Primaria (PK)",
    "unit": "Clase 5",
    "question": "¿Qué es una Clave Primaria (Primary Key / PK) y qué propiedades estrictas debe cumplir?",
    "options": [
      "La clave candidata seleccionada por el diseñador para identificar unívocamente las tuplas de una relación; no admite valores NULL.",
      "Un identificador temporal asignado por el optimizador en memoria RAM que se destruye al reiniciar el servicio de base de datos.",
      "Una clave generada por el sistema operativo que cifra los ficheros de datos en el sistema de almacenamiento secundario del host.",
      "Una columna de tipo fecha que registra automáticamente el instante exacto en que se confirmó la última transacción en el sistema en el almacenamiento secundario durante el procesamiento concurrente de transacciones."
    ],
    "correctAnswer": 0,
    "hint": "La PK identifica a la fila y NUNCA puede ser nula ni repetirse.",
    "explanation": "La Clave Primaria es la clave candidata designada formalmente para identificar cada tupla en una relación. La regla de Integridad de Entidad estipula que ningún atributo componente de la PK puede ser NULL.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 4",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 507,
    "classNum": 5,
    "topic": "Claves Alternativas",
    "unit": "Clase 5",
    "question": "¿Qué es una 'Clave Alternativa' (Alternate Key) en una tabla relacional?",
    "options": [
      "Toda clave candidata que no fue seleccionada como la clave primaria de la relación, manteniendo su propiedad de unicidad.",
      "Una clave foránea que referencia a una tabla externa pero permite valores nulos en todas sus columnas participantes en disco.",
      "Un valor sustituto temporal utilizado por el motor relacional cuando se detecta un fallo en el árbol del índice primario.",
      "Una columna calculada dinámicamente mediante funciones escalares que solo existe en el encabezado de las vistas de usuario."
    ],
    "correctAnswer": 0,
    "hint": "Las claves candidatas no elegidas como PK pasan a ser Claves Alternativas (con restricción UNIQUE).",
    "explanation": "Son aquellas claves candidatas que no fueron elegidas como Clave Primaria principal. Suelen implementarse en SQL mediante restricciones `UNIQUE NOT NULL`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 4",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 508,
    "classNum": 5,
    "topic": "Clave Foránea (FK)",
    "unit": "Clase 5",
    "question": "¿Qué es una Clave Foránea (Foreign Key / FK) y qué principio garantiza en el modelo relacional?",
    "options": [
      "Un atributo (o conjunto) en una relación cuyos valores deben coincidir con la clave primaria de otra relación (o ser NULL).",
      "Una contraseña de acceso de solo lectura utilizada por las aplicaciones externas para conectarse al motor de base de datos.",
      "Un puntero físico en el disco que conecta directamente dos sectores de datos contiguos para acelerar escaneos secuenciales.",
      "Una variable de sesión volátil que resguarda los resultados intermedios de consultas complejas con múltiples agregaciones."
    ],
    "correctAnswer": 0,
    "hint": "La FK vincula una tabla hija con la PK de la tabla padre, evitando datos huérfanos.",
    "explanation": "Una Clave Foránea es un atributo (o conjunto de atributos) en una relación hija cuyos valores deben coincidir con un valor existente de la Clave Primaria de la relación padre referenciada, o ser NULL.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 5",
    "slideImage": "assets/clases_infographics/clase5_p05.png",
    "type": "single_choice"
  },
  {
    "id": 509,
    "classNum": 5,
    "topic": "Integridad Referencial",
    "unit": "Clase 5",
    "question": "¿Qué establece formalmente la regla de Integridad Referencial?",
    "options": [
      "Ningún atributo que forme parte de la clave primaria de una relación puede aceptar valores nulos (NULL).",
      "Todas las columnas de tipo texto deben tener una longitud fija de caracteres y prescindir de codificación UTF-8.",
      "Toda tabla relacional debe contener obligatoriamente al menos cien tuplas persistidas en almacenamiento secundario.",
      "El nombre de cada entidad debe coincidir exactamente con el nombre del usuario administrador del sistema operativo."
    ],
    "correctAnswer": 0,
    "hint": "Integridad referencial = no puede existir un hijo que apunte a un padre inexistente.",
    "explanation": "La Integridad Referencial asegura que las relaciones entre tuplas se mantengan consistentes en todo momento, impidiendo insertar registros hijos con claves foráneas inexistentes.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 5",
    "slideImage": "assets/clases_infographics/clase5_p05.png",
    "type": "single_choice"
  },
  {
    "id": 510,
    "classNum": 5,
    "topic": "Reglas ON DELETE",
    "unit": "Clase 5",
    "question": "Si una clave foránea se define con la cláusula `ON DELETE CASCADE`, ¿qué ocurre cuando se elimina un registro padre?",
    "options": [
      "Se eliminan automáticamente en cascada todas las tuplas de la tabla hija que referenciaban a esa fila padre.",
      "El motor bloquea la operación de borrado arrojando un error de integridad referencial en la consola del servidor.",
      "Las columnas de la clave foránea en la tabla hija se actualizan con el valor numérico cero de forma obligatoria.",
      "La tabla padre se marca como de solo lectura impidiendo que cualquier usuario realice modificaciones posteriores."
    ],
    "correctAnswer": 0,
    "hint": "CASCADE propaga la eliminación en cascada a todos los hijos.",
    "explanation": "`ON DELETE CASCADE` propaga automáticamente la eliminación del registro padre a todas las tuplas hijas que lo referencian, manteniendo la integridad referencial sin dejar huérfanos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 6",
    "slideImage": "assets/clases_infographics/clase5_p06.png",
    "type": "single_choice"
  },
  {
    "id": 511,
    "classNum": 5,
    "topic": "Reglas ON DELETE",
    "unit": "Clase 5",
    "question": "Si una clave foránea tiene configurada la regla `ON DELETE RESTRICT` (o `NO ACTION`), ¿qué ocurre si intentamos borrar un registro padre que tiene hijos asociados?",
    "options": [
      "El motor rechaza la operación de borrado y genera un error de violación de restricción de integridad referencial.",
      "El motor borra silenciosamente las filas de la tabla hija sin registrar las operaciones en los ficheros del WAL.",
      "El motor transforma las filas de la tabla hija en tablas temporales independientes dentro del esquema del usuario.",
      "El motor asigna automáticamente una nueva clave foránea aleatoria a las filas huérfanas de la tabla secundaria."
    ],
    "correctAnswer": 0,
    "hint": "RESTRICT restringe y bloquea el borrado si existen hijos dependientes.",
    "explanation": "`ON DELETE RESTRICT` prohíbe la eliminación de una tupla padre mientras existan tuplas hijas que la referencien, impidiendo la creación de registros huérfanos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 6",
    "slideImage": "assets/clases_infographics/clase5_p06.png",
    "type": "single_choice"
  },
  {
    "id": 512,
    "classNum": 5,
    "topic": "Reglas ON DELETE",
    "unit": "Clase 5",
    "question": "Si una clave foránea se define con `ON DELETE SET NULL`, ¿qué comportamiento se produce al borrar el registro padre?",
    "options": [
      "Las tuplas hijas conservan su existencia, pero el valor de sus columnas de clave foránea se actualiza a NULL.",
      "Las tuplas hijas se transfieren automáticamente a un archivo de volcado binario en el almacenamiento secundario.",
      "El motor de base de datos interrumpe la transacción y reinicia el servicio del servidor para evitar anomalías.",
      "La clave primaria de la tabla hija se renumera de manera secuencial para eliminar los huecos dejados por el borrado."
    ],
    "correctAnswer": 0,
    "hint": "SET NULL desacopla a los hijos poniendo su FK en NULL.",
    "explanation": "`ON DELETE SET NULL` establece en NULL el campo de la clave foránea en todas las tuplas hijas cuando el registro padre es eliminado, desvinculando la relación.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 6",
    "slideImage": "assets/clases_infographics/clase5_p06.png",
    "type": "single_choice"
  },
  {
    "id": 513,
    "classNum": 5,
    "topic": "Transformación DER a Relacional",
    "unit": "Clase 5",
    "question": "Al transformar una relación de cardinalidad `1 a N` entre Clientes (1) y Pedidos (N) a tablas relacionales, ¿dónde debe alojarse obligatoriamente la Clave Foránea (FK)?",
    "options": [
      "La clave primaria de la entidad con cardinalidad 1 se propaga como clave foránea en la entidad con cardinalidad N.",
      "Se crea obligatoriamente una tabla intermedia independiente que almacena los identificadores de ambas relaciones.",
      "La clave primaria de la entidad N se transfiere como atributo compuesto dentro de la entidad con cardinalidad 1.",
      "Se duplican todos los atributos descriptivos de la relación N dentro de la tabla de la relación 1 en el esquema."
    ],
    "correctAnswer": 0,
    "hint": "Regla de oro: En una relación 1:N, la FK SIEMPRE va en el lado 'N' (Muchos).",
    "explanation": "En el pasaje de DER a tablas relacionales, en toda relación 1:N la clave foránea se coloca en la relación del lado N (hija), apuntando a la PK del lado 1 (padre).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 7",
    "slideImage": "assets/clases_infographics/clase5_p07.png",
    "type": "single_choice"
  },
  {
    "id": 514,
    "classNum": 5,
    "topic": "Transformación DER a Relacional",
    "unit": "Clase 5",
    "question": "¿Cómo se resuelve OBLIGATORIAMENTE en el modelo relacional una relación de cardinalidad Muchos a Muchos (`N a M`) entre Estudiantes y Cursos?",
    "options": [
      "Creando una tabla intermedia (asociativa) cuya clave primaria está compuesta por las claves foráneas de ambas tablas relacionadas.",
      "Almacenando una lista de identificadores separados por comas dentro de un único atributo de texto en la tabla principal.",
      "Duplicando físicamente la totalidad de las filas de la primera tabla dentro de cada tupla registrada en la segunda tabla.",
      "Definiendo un índice de tipo Hash invertido que enlaza dinámicamente los punteros de ambas relaciones en memoria RAM."
    ],
    "correctAnswer": 0,
    "hint": "N:M se resuelve SIEMPRE creando una tabla intermedia asociativa con PK compuesta por las dos FKs.",
    "explanation": "El modelo relacional no soporta relaciones N:M de forma directa. Se descompone en dos relaciones 1:N mediante una tabla intermedia que almacena las claves foráneas de ambas entidades.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 7",
    "slideImage": "assets/clases_infographics/clase5_p07.png",
    "type": "single_choice"
  },
  {
    "id": 515,
    "classNum": 5,
    "topic": "Transformación DER a Relacional",
    "unit": "Clase 5",
    "question": "En la notación Crow's Foot (Patas de Gallo), ¿qué significa una cardinalidad mínima y máxima de `1..1` (uno sin cero / obligatorio)?",
    "options": [
      "Una cardinalidad de Muchos opcional (cero o más ocurrencias de la entidad relacionada en la asociación).",
      "Una cardinalidad de Uno obligatorio (exactamente una y solo una ocurrencia de la entidad en la relación).",
      "Una restricción de integridad de dominio que restringe los valores de la columna a números enteros positivos.",
      "La existencia de una clave foránea que solo puede admitir valores no nulos en el modelo relacional físico."
    ],
    "correctAnswer": 0,
    "hint": "1..1 = exactamente uno (obligatorio, no admite 0 ni más de 1).",
    "explanation": "La cardinalidad (1,1) indica participación total y obligatoria (mínimo 1) con cardinalidad máxima de uno (1).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 8",
    "slideImage": "assets/clases_infographics/clase5_p08.png",
    "type": "single_choice"
  },
  {
    "id": 516,
    "classNum": 5,
    "topic": "Transformación DER a Relacional",
    "unit": "Clase 5",
    "question": "En la notación Crow's Foot, ¿qué representa la condición `0..1` (uno con cero / opcional)?",
    "options": [
      "Una cardinalidad de 'Uno y solo uno' (participación obligatoria con límite máximo de una ocurrencia).",
      "Una cardinalidad de 'Cero o muchos' (asociación totalmente opcional sin límite de ocurrencias en disco).",
      "Una dependencia funcional transitiva entre atributos no primos dentro de la estructura de la relación.",
      "La presencia de un índice compuesto auto-balanceado de tipo árbol B+ sobre las columnas primarias."
    ],
    "correctAnswer": 0,
    "hint": "0..1 = puede no existir (cero) o estar asociada como máximo a una sola tupla.",
    "explanation": "La cardinalidad (0,1) representa una relación opcional (cardinalidad mínima 0) que no puede superar el límite de una ocurrencia (cardinalidad máxima 1).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 8",
    "slideImage": "assets/clases_infographics/clase5_p08.png",
    "type": "single_choice"
  },
  {
    "id": 517,
    "classNum": 5,
    "topic": "Normalización (1NF)",
    "unit": "Clase 5",
    "question": "¿Qué condición exige la Primera Forma Normal (1NF) en el diseño relacional?",
    "options": [
      "Que todos los atributos contengan valores atómicos (indivisibles) y que no existan grupos repetitivos ni atributos multivaluados.",
      "Que la tabla carezca de claves primarias compuestas y utilice únicamente identificadores autoincrementales de tipo entero.",
      "Que todos los atributos no clave dependan funcionalmente de forma transitiva de la clave primaria principal de la tabla.",
      "Que la relación se encuentre indexada mediante árboles B-Tree en todas sus columnas alfanuméricas de almacenamiento."
    ],
    "correctAnswer": 0,
    "hint": "1NF = atomicidad de datos; cada celda de la tabla contiene un único valor atómico.",
    "explanation": "La 1NF exige que el dominio de cada atributo contenga solo valores atómicos (indivisibles) y que cada valor de una tupla sea un elemento individual del dominio, eliminando grupos repetidos o arrays.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 9",
    "slideImage": "assets/clases_infographics/clase5_p09.png",
    "type": "single_choice"
  },
  {
    "id": 518,
    "classNum": 5,
    "topic": "Normalización (2NF)",
    "unit": "Clase 5",
    "question": "¿Qué condición debe cumplirse para que una tabla esté en Segunda Forma Normal (2NF)?",
    "options": [
      "Estar en 1NF y que ningún atributo no clave dependa parcialmente de una clave primaria compuesta (dependencia funcional total).",
      "Estar en 3NF y no contener columnas de tipo fecha ni atributos que admitan valores nulos en el esquema relacional.",
      "Contener exactamente dos claves candidatas numéricas y menos de mil tuplas persistidas en el almacenamiento físico.",
      "Poseer un esquema desnormalizado con vistas materializadas para acelerar las consultas analíticas de agregación."
    ],
    "correctAnswer": 0,
    "hint": "2NF elimina dependencias parciales: aplica a tablas con claves primarias compuestas.",
    "explanation": "Una relación está en 2NF si está en 1NF y cada atributo no clave tiene dependencia funcional total de la clave primaria, eliminando dependencias de solo una parte de una PK compuesta.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 9",
    "slideImage": "assets/clases_infographics/clase5_p09.png",
    "type": "single_choice"
  },
  {
    "id": 519,
    "classNum": 5,
    "topic": "Normalización (3NF)",
    "unit": "Clase 5",
    "question": "¿Qué requisito es indispensable para que una tabla se encuentre en Tercera Forma Normal (3NF)?",
    "options": [
      "Estar en 2NF y que ningún atributo no clave dependa transitivamente de la clave primaria (es decir, a través de otro atributo no clave).",
      "Contener exclusivamente atributos numéricos enteros y prescindir por completo de campos de tipo texto variable en la relación.",
      "Estar descompuesta en al menos cinco tablas hijas vinculadas mediante claves foráneas con reglas de acción restrictivas.",
      "Disponer de un procedimiento almacenado que verifique la ausencia de dependencias funcionales cíclicas en cada inserción."
    ],
    "correctAnswer": 0,
    "hint": "3NF elimina dependencias transitivas: si A -> B y B -> C, C no debe estar en la misma tabla que A.",
    "explanation": "La 3NF elimina las dependencias transitivas: ningún atributo que no sea clave puede depender funcionalmente de otro atributo no clave, evitando anomalías de actualización.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 9",
    "slideImage": "assets/clases_infographics/clase5_p09.png",
    "type": "single_choice"
  },
  {
    "id": 520,
    "classNum": 5,
    "topic": "Sentencias DDL",
    "unit": "Clase 5",
    "question": "¿Qué comando DDL se utiliza para eliminar permanentemente una tabla completa y toda su estructura del catálogo de la base de datos?",
    "options": [
      "`DROP TABLE nombre_tabla;`",
      "`REMOVE TABLE nombre_tabla;`",
      "`DELETE TABLE nombre_tabla;`",
      "`CLEAR ALL FROM nombre_tabla;`"
    ],
    "correctAnswer": 0,
    "hint": "El comando DDL de eliminación de objetos de esquema es DROP.",
    "explanation": "`DROP TABLE` es la instrucción DDL estándar que destruye la tabla, sus datos, índices y definiciones del catálogo del SGBD.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 10",
    "slideImage": "assets/clases_infographics/clase5_p10.png",
    "type": "single_choice"
  },
  {
    "id": 521,
    "classNum": 5,
    "topic": "Sentencias DDL",
    "unit": "Clase 5",
    "question": "¿Qué sentencia DDL permite agregar una nueva columna a una tabla ya existente en la base de datos?",
    "options": [
      "`ALTER TABLE Empleados ADD COLUMN telefono VARCHAR(20);`",
      "`UPDATE TABLE Empleados INSERT COLUMN telefono VARCHAR(20);`",
      "`MODIFY Empleados NEW COLUMN telefono;`",
      "`APPEND TO Empleados COLUMN telefono;`"
    ],
    "correctAnswer": 0,
    "hint": "ALTER TABLE ... ADD COLUMN ...",
    "explanation": "`ALTER TABLE tabla ADD COLUMN columna tipo` es el comando DDL para extender el esquema de una tabla existente con una nueva columna.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 10",
    "slideImage": "assets/clases_infographics/clase5_p10.png",
    "type": "single_choice"
  },
  {
    "id": 522,
    "classNum": 5,
    "topic": "Índices y Rendimiento",
    "unit": "Clase 5",
    "question": "¿Qué es un Índice en una base de datos relacional y cuál es su objetivo primordial?",
    "options": [
      "Una estructura de datos auxiliar (ej. árbol B-Tree) que optimiza la velocidad de recuperación de datos a costa de espacio y costo en escritura.",
      "Un fichero comprimido de respaldo que el motor genera en disco secundario para resguardar las tablas ante cortes de suministro.",
      "Un segmento de memoria volátil compartido donde el optimizador ejecuta algoritmos de ordenamiento externo para uniones hash.",
      "Una restricción de integridad de dominio que restringe los tipos de datos válidos a cadenas alfanuméricas de longitud fija."
    ],
    "correctAnswer": 0,
    "hint": "Funciona como el índice temático al final de un libro: permite ir directo a la página sin leer todo.",
    "explanation": "Un índice es una estructura de acceso rápido (típicamente B-Tree) que mapea los valores de una o más columnas a las ubicaciones físicas de las tuplas (TID / RowID), acelerando dramáticamente las consultas SELECT.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 11",
    "slideImage": "assets/clases_infographics/clase5_p11.png",
    "type": "single_choice"
  },
  {
    "id": 523,
    "classNum": 5,
    "topic": "Índices B-Tree",
    "unit": "Clase 5",
    "question": "¿Por qué el índice de tipo B-Tree (Balanced Tree) es el método de indexación por defecto en la mayoría de los SGBD relacionales?",
    "options": [
      "Mantiene los datos ordenados en un árbol auto-balanceado con complejidad logarítmica O(log N) para búsquedas puntuales, de rango y ordenamiento.",
      "Almacena la totalidad de las filas de la tabla directamente en la memoria caché del procesador sin requerir espacio en disco secundario.",
      "Admite únicamente columnas numéricas cuyos valores estén comprendidos entre el uno y el diez, descartando campos de texto y fechas.",
      "Ejecuta las consultas relacionales exclusivamente en la unidad de procesamiento gráfico (GPU) para paralelizar lecturas secuenciales."
    ],
    "correctAnswer": 0,
    "hint": "B-Tree = árbol balanceado; soporta igualdades y rangos con costo logarítmico O(log N).",
    "explanation": "Los índices B-Tree mantienen los elementos ordenados y las ramas balanceadas, ofreciendo búsquedas, inserciones y recorridos de rango en tiempo logarítmico O(log N).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 12",
    "slideImage": "assets/clases_infographics/clase5_p12.png",
    "type": "single_choice"
  },
  {
    "id": 524,
    "classNum": 5,
    "topic": "Tipos de Índices",
    "unit": "Clase 5",
    "question": "¿En qué escenario es altamente recomendable utilizar un índice de tipo GIN (Generalized Inverted Index) en PostgreSQL?",
    "options": [
      "En columnas que contienen valores compuestos o multi-elemento, como documentos JSONB, arrays o búsqueda de texto completo (Full-Text Search).",
      "Exclusivamente en columnas que contienen la clave primaria entera autoincremental de una tabla relacional normalizada en 3FN.",
      "En tablas que poseen menos de diez filas registradas y son consultadas de manera esporádica mediante escaneos de tabla completa.",
      "Para encriptar las credenciales de conexión y asegurar el canal de comunicaciones SSL entre el cliente web y el servidor."
    ],
    "correctAnswer": 0,
    "hint": "GIN es un índice invertido: mapea cada elemento/palabra a las filas que lo contienen (ideal para JSONB y Arrays).",
    "explanation": "GIN (Generalized Inverted Index) es un índice invertido diseñado para tipos de datos estructurados complejos (JSONB, tsvector, arrays) donde una sola celda contiene múltiples elementos indexables.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 13",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "type": "single_choice"
  },
  {
    "id": 525,
    "classNum": 5,
    "topic": "Tipos de Índices",
    "unit": "Clase 5",
    "question": "¿Cuál es la aplicación principal de un índice de tipo GiST (Generalized Search Tree)?",
    "options": [
      "Búsquedas geométricas, datos espaciales (GIS/PostGIS), rangos continuos y operadores de superposición / contención.",
      "El cifrado asimétrico de contraseñas de usuarios y la gestión de firmas digitales en transacciones de comercio.",
      "El formateo automático y embellecimiento sintáctico de sentencias SQL emitidas desde aplicaciones cliente ligeras.",
      "La compresión sin pérdida de imágenes satelitales y archivos multimedia almacenados en columnas de tipo BLOB."
    ],
    "correctAnswer": 0,
    "hint": "GiST es ideal para datos espaciales, geometrías y rangos que se superponen.",
    "explanation": "GiST es un árbol de búsqueda generalizado que permite indexar estructuras geométricas (polígonos, puntos espaciales) y tipos de rangos mediante operadores de superposición y vecindad.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 13",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "type": "single_choice"
  },
  {
    "id": 526,
    "classNum": 5,
    "topic": "Métodos de Escaneo",
    "unit": "Clase 5",
    "question": "¿En qué consiste un 'Escaneo Secuencial' (Sequential Scan / Full Table Scan)?",
    "options": [
      "En recorrer y leer bloque a bloque todas las páginas de la tabla desde el principio hasta el fin del archivo en disco.",
      "En consultar exclusivamente la estructura del índice en memoria volátil sin acceder a los bloques de datos en disco.",
      "En apagar temporalmente los sectores del almacenamiento secundario para reducir el consumo energético del servidor.",
      "En examinar únicamente las primeras diez tuplas de la relación asumiendo que el resto comparte los mismos valores."
    ],
    "correctAnswer": 0,
    "hint": "Sequential Scan = lectura completa de la tabla de punta a punta.",
    "explanation": "El escaneo secuencial lee todas las páginas físicas de una relación de principio a fin; es eficiente para tablas pequeñas o cuando la consulta requiere más del 20-30% de las filas de la tabla.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 14",
    "slideImage": "assets/clases_infographics/clase5_p14.png",
    "type": "single_choice"
  },
  {
    "id": 527,
    "classNum": 5,
    "topic": "Compromisos de los Índices",
    "unit": "Clase 5",
    "question": "¿Por qué es una mala práctica definir índices indiscriminadamente en todas las columnas de una tabla?",
    "options": [
      "Porque consumen espacio sustancial en disco y degradan notablemente el rendimiento de las operaciones de escritura (INSERT, UPDATE, DELETE), que deben mantener sincronizados todos los índices.",
      "Porque el estándar ANSI SQL prohíbe terminantemente la creación de más de dos índices por tabla en cualquier motor relacional que implemente control de concurrencia multiversión.",
      "Porque los índices provocan la pérdida irreversible de tuplas históricas al compactar los bloques de almacenamiento secundario durante el mantenimiento automático del servidor.",
      "Porque la presencia de múltiples índices obliga al optimizador de consultas a deshabilitar los planes de ejecución paralelos y forzar lecturas secuenciales lentas en memoria."
    ],
    "correctAnswer": 0,
    "hint": "Trade-off: los índices mejoran la lectura pero encarecen el costo de escritura y espacio.",
    "explanation": "Los índices representan un compromiso de diseño: aceleran consultas de lectura pero añaden sobrecarga de mantenimiento en cada escritura y ocupan espacio considerable en disco.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 14",
    "slideImage": "assets/clases_infographics/clase5_p14.png",
    "type": "single_choice"
  },
  {
    "id": 528,
    "classNum": 5,
    "topic": "Sentencia CREATE TABLE",
    "unit": "Clase 5",
    "question": "Completa el comando DDL para crear una tabla especificando la clave primaria:",
    "template": "{INPUT} TABLE Empleados (id INT PRIMARY KEY, nombre VARCHAR(100));",
    "expectedAnswer": "CREATE",
    "hint": "Comando DDL para crear objetos en la base de datos (6 letras).",
    "explanation": "El comando `CREATE TABLE` define y crea una nueva relación en el catálogo del sistema.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 10",
    "slideImage": "assets/clases_infographics/clase5_p10.png",
    "type": "fill_in_sql",
    "acceptedAnswers": [
      "CREATE"
    ]
  },
  {
    "id": 529,
    "classNum": 5,
    "topic": "Restricción de Integridad",
    "unit": "Clase 5",
    "question": "Completa la restricción de dominio para asegurar que el salario sea mayor a 0:",
    "template": "ALTER TABLE Empleados ADD CONSTRAINT chk_salario {INPUT} (salario > 0);",
    "expectedAnswer": "CHECK",
    "hint": "Palabra clave para restricciones de validación condicional (5 letras).",
    "explanation": "La restricción CHECK valida que cada valor ingresado cumpla con una expresión booleana determinada.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 10",
    "slideImage": "assets/clases_infographics/clase5_p10.png",
    "type": "fill_in_sql",
    "acceptedAnswers": [
      "CHECK"
    ]
  },
  {
    "id": 530,
    "classNum": 5,
    "topic": "Definición de Clave Foránea",
    "unit": "Clase 5",
    "question": "Completa la cláusula para vincular la clave foránea `id_depto` con la tabla `Departamentos`:",
    "codeSnippet": "ALTER TABLE Empleados\nADD CONSTRAINT fk_empleados_depto\nFOREIGN KEY (id_depto)\n[B1] Departamentos(id)\nON DELETE [B2];",
    "blanks": [
      {
        "id": "B1",
        "placeholder": "Palabra clave de referencia",
        "expected": "REFERENCES"
      },
      {
        "id": "B2",
        "placeholder": "Regla de borrado en cascada",
        "expected": "CASCADE"
      }
    ],
    "hint": "REFERENCES tabla(columna) y regla de eliminación CASCADE.",
    "explanation": "REFERENCES especifica la tabla y columna padre, y ON DELETE CASCADE propaga los borrados.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 5",
    "slideImage": "assets/clases_infographics/clase5_p05.png",
    "type": "code_completion",
    "contextHtml": "<div class=\"dataset-inspector-grid\">\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Empleados</code></span>\n    <span class=\"table-rows-tag\">8 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre</th>\n          <th>id_departamento <span class=\"key-badge fk\">FK</span></th>\n          <th>salario</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>101</td><td>Ana Gómez</td><td>1</td><td>$65.000</td></tr>\n        <tr><td>102</td><td>Carlos Pérez</td><td>2</td><td>$48.000</td></tr>\n        <tr><td>103</td><td>Lucía Fernández</td><td>1</td><td>$72.000</td></tr>\n        <tr><td>104</td><td>Marcos Torres</td><td>3</td><td>$53.000</td></tr>\n        <tr><td>105</td><td>Sofía Romero</td><td>2</td><td>$59.000</td></tr>\n        <tr><td>106</td><td>Diego López</td><td>4</td><td>$81.000</td></tr>\n        <tr><td>107</td><td>Valeria Díaz</td><td>1</td><td>$67.000</td></tr>\n        <tr><td>108</td><td>Martín Silva</td><td>3</td><td>$45.000</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<div class=\"dataset-table-card\">\n  <div class=\"dataset-card-header\">\n    <span class=\"table-name-tag\">📁 TABLA: <code>Departamentos</code></span>\n    <span class=\"table-rows-tag\">5 registros</span>\n  </div>\n  <div class=\"table-responsive-box\">\n    <table class=\"dataset-html-table\">\n      <thead>\n        <tr>\n          <th>id <span class=\"key-badge pk\">PK</span></th>\n          <th>nombre_departamento</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>1</td><td>Ventas</td></tr>\n        <tr><td>2</td><td>Marketing</td></tr>\n        <tr><td>3</td><td>Logística</td></tr>\n        <tr><td>4</td><td>Sistemas</td></tr>\n        <tr><td>5</td><td>Recursos Humanos</td></tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"
  },
  {
    "id": 531,
    "classNum": 5,
    "topic": "Reglas de Acción Referencial",
    "unit": "Clase 5",
    "question": "Relaciona cada acción referencial ON DELETE con su efecto sobre los registros hijos:",
    "pairs": [
      {
        "key": "ON DELETE CASCADE",
        "value": "Elimina automáticamente los registros hijos asociados"
      },
      {
        "key": "ON DELETE RESTRICT",
        "value": "Impide y rechaza el borrado si existen registros hijos"
      },
      {
        "key": "ON DELETE SET NULL",
        "value": "Establece la clave foránea de los hijos en NULL"
      },
      {
        "key": "ON DELETE NO ACTION",
        "value": "Verifica al final de la transacción e impide el borrado"
      }
    ],
    "explanation": "CASCADE borra hijos, RESTRICT bloquea el borrado, SET NULL desvincula poniendo NULL y NO ACTION valida diferido.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 6",
    "slideImage": "assets/clases_infographics/clase5_p06.png",
    "type": "matching"
  },
  {
    "id": 532,
    "classNum": 5,
    "topic": "Formas Normales",
    "unit": "Clase 5",
    "question": "Relaciona cada forma normal con la anomalía que elimina:",
    "pairs": [
      {
        "key": "1NF (Primera)",
        "value": "Elimina grupos repetitivos y exige valores atómicos"
      },
      {
        "key": "2NF (Segunda)",
        "value": "Elimina dependencias funcionales parciales de la PK"
      },
      {
        "key": "3NF (Tercera)",
        "value": "Elimina dependencias funcionales transitivas entre no claves"
      },
      {
        "key": "BCNF (Boyce-Codd)",
        "value": "Exige que todo determinante sea una superclave"
      }
    ],
    "explanation": "1NF garantiza atomicidad, 2NF dependencia total de la PK, 3NF elimina transitividad y BCNF refuerza determinantes.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 9",
    "slideImage": "assets/clases_infographics/clase5_p09.png",
    "type": "matching"
  },
  {
    "id": 533,
    "classNum": 5,
    "topic": "Tipos de Índices",
    "unit": "Clase 5",
    "question": "Relaciona cada estructura de índice con su caso de uso óptimo:",
    "pairs": [
      {
        "key": "Índice B-Tree",
        "value": "Búsquedas de igualdad (=) y consultas de rango (<, >, BETWEEN)"
      },
      {
        "key": "Índice Hash",
        "value": "Comparaciones estrictas de igualdad exacta (=)"
      },
      {
        "key": "Índice GIN",
        "value": "Columnas compuestas, documentos JSONB y arrays"
      },
      {
        "key": "Índice GiST",
        "value": "Datos geométricos espaciales (GIS) y rangos continuos"
      }
    ],
    "explanation": "B-Tree es para rangos e igualdad, Hash solo para igualdad exacta, GIN para JSONB/arrays y GiST para mapas/GIS.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 13",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "type": "matching"
  },
  {
    "id": 534,
    "classNum": 5,
    "topic": "Modelo Relacional",
    "unit": "Clase 5",
    "question": "¿Por qué en una relación del modelo relacional no pueden existir dos tuplas idénticas?",
    "options": [
      "Porque una relación es matemáticamente un conjunto de tuplas, y por definición de la teoría de conjuntos no pueden existir elementos duplicados en un conjunto.",
      "Porque los sectores físicos de los discos duros magnéticos impiden técnicamente almacenar dos secuencias de bytes que compartan el mismo patrón binario.",
      "Porque los controladores de memoria RAM del servidor descartan de manera automática cualquier registro que presente los mismos atributos que una tupla previa.",
      "Porque el protocolo de comunicación de las aplicaciones web consumidoras prohíbe el procesamiento de respuestas que contengan filas con valores repetidos."
    ],
    "correctAnswer": 0,
    "hint": "En matemáticas, un conjunto no admite duplicados; cada tupla debe ser identificable unívocamente.",
    "explanation": "En el modelo formal de Codd, una relación es un conjunto matemático de tuplas; por definición formal de conjunto, todos sus elementos son distintos entre sí, garantizado mediante una Clave Primaria.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 2",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "type": "single_choice"
  },
  {
    "id": 535,
    "classNum": 5,
    "topic": "Integridad de Entidad",
    "unit": "Clase 5",
    "question": "¿Qué establece formalmente la regla de Integridad de Entidad en el modelo relacional?",
    "options": [
      "Ningún atributo que forme parte de la Clave Primaria de una relación puede tomar valores nulos (NULL).",
      "La totalidad de las tablas del esquema deben almacenar obligatoriamente al menos cincuenta tuplas registradas.",
      "Los nombres de los atributos de una tabla deben escribirse de forma obligatoria utilizando letras mayúsculas.",
      "Las tablas relacionales no pueden definir más de una clave foránea dirigida hacia una misma relación padre."
    ],
    "correctAnswer": 0,
    "hint": "Integridad de Entidad = la PK no puede ser NULL.",
    "explanation": "La regla de Integridad de Entidad exige que ningún componente de la Clave Primaria de una relación base pueda ser nulo (NULL), ya que una tupla con identificador nulo no podría ser distinguida de las demás.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 5, pág. 4",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 536,
    "classNum": 5,
    "topic": "Estructura Relacional - Registros y Tuplas",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "En el modelo relacional, ¿qué representa cada fila en una tabla de base de datos?",
    "options": [
      "Un registro (o tupla) que representa una instancia individual de la entidad modelada con valores para cada atributo.",
      "Un tipo de dato elemental de dominio como INTEGER, VARCHAR o TIMESTAMP definido en el catálogo del sistema relacional.",
      "Una restricción de integridad referencial que vincula dos relaciones mediante reglas de acción en cascada o restricción.",
      "Una estructura de almacenamiento auxiliar de tipo árbol B+ diseñada para acelerar la localización de registros en disco."
    ],
    "correctAnswer": 0,
    "hint": "Fila = Registro = Tupla (una instancia específica). Columna = Atributo = Campo.",
    "explanation": "En la terminología formal del modelo relacional de E.F. Codd, una fila se denomina \"tupla\" o registro y modela una ocurrencia o instancia específica de la entidad.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 2)",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "type": "single_choice"
  },
  {
    "id": 537,
    "classNum": 5,
    "topic": "Clave Primaria (Primary Key)",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "¿Qué características obligatorias definen a una Clave Primaria (PRIMARY KEY) en una tabla relacional?",
    "options": [
      "Identifica unívocamente a cada registro en la tabla y no puede contener valores nulos (NOT NULL).",
      "Debe ser obligatoriamente un número entero autoincremental generado por una secuencia del catálogo.",
      "Puede contener valores repetidos siempre que los registros pertenezcan a transacciones concurrentes distintas.",
      "Solo puede aplicarse sobre una única columna individual, prohibiendo la definición de claves primarias compuestas."
    ],
    "correctAnswer": 0,
    "hint": "La Clave Primaria debe ser única (no duplicada) y nunca nula (Integridad de Entidad).",
    "explanation": "Una Clave Primaria (PK) garantiza la unicidad de cada tupla (no duplicados) y la integridad de entidad (ningún componente de la PK puede ser NULL). Puede ser simple o compuesta.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 4)",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 538,
    "classNum": 5,
    "topic": "Restricción UNIQUE vs PRIMARY KEY",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "¿En qué se diferencia principalmente una restricción UNIQUE de una PRIMARY KEY?",
    "options": [
      "Una tabla puede tener múltiples restricciones UNIQUE y éstas permiten valores NULL (según el motor), mientras que solo puede existir una única PRIMARY KEY y no permite NULLs.",
      "UNIQUE solo es aplicable sobre columnas de cadenas de texto alfanuméricas, mientras que PRIMARY KEY se restringe a campos numéricos enteros en todos los motores.",
      "PRIMARY KEY no crea índices automáticos en almacenamiento físico, mientras que UNIQUE genera obligatoriamente un índice espacial GiST en memoria volátil.",
      "No existe ninguna diferencia conceptual ni práctica entre ambas restricciones, siendo palabras clave intercambiables en cualquier sentencia DDL del esquema."
    ],
    "correctAnswer": 0,
    "hint": "Una tabla sólo puede tener UNA PK principal, pero puede tener múltiples columnas con restricción UNIQUE.",
    "explanation": "Cada tabla puede tener solo una PRIMARY KEY (la cual rechaza NULLs). En cambio, puede tener múltiples constraints UNIQUE (e.g. DNI, email), y la mayoría de los motores permiten valores NULL en columnas UNIQUE.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 4)",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 539,
    "classNum": 5,
    "topic": "DDL - Modificación de Estructura",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "¿Qué comando DDL se utiliza para agregar una nueva columna, modificar un tipo de dato o añadir una restricción a una tabla ya existente?",
    "options": [
      "ALTER TABLE",
      "UPDATE TABLE",
      "MODIFY SCHEMA",
      "INSERT COLUMN"
    ],
    "correctAnswer": 0,
    "hint": "Para alterar la estructura o definición de la tabla usamos ALTER TABLE.",
    "explanation": "ALTER TABLE es la sentencia de definición de datos (DDL) que permite alterar la estructura de una tabla existente (añadir/eliminar columnas, cambiar tipos de datos o agregar restricciones como FK o UNIQUE).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 5)",
    "slideImage": "assets/clases_infographics/clase5_p05.png",
    "type": "single_choice"
  },
  {
    "id": 540,
    "classNum": 5,
    "topic": "Clave Foránea (Foreign Key)",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "¿Cuál es el propósito principal de una Clave Foránea (FOREIGN KEY) en una tabla hija?",
    "options": [
      "Establecer una relación referencial hacia la clave primaria o candidata de una tabla padre, asegurando que no existan referencias a datos inexistentes.",
      "Expandir automáticamente la capacidad física de almacenamiento asignada al archivo de la base de datos cuando se alcanza el límite del volumen en disco.",
      "Cifrar mediante algoritmos de clave asimétrica las columnas confidenciales para impedir lecturas directas por usuarios no autorizados en el sistema.",
      "Inhabilitar de manera selectiva la ejecución de consultas de lectura sobre la tabla secundaria durante los períodos de alta concurrencia transaccional."
    ],
    "correctAnswer": 0,
    "hint": "La FK vincula una columna de la tabla hija con la PK de la tabla padre para mantener la integridad.",
    "explanation": "Una Clave Foránea (FK) vincula los registros de la tabla hija con una clave existente en la tabla padre, garantizando la consistencia y la integridad referencial.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 4)",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 541,
    "classNum": 5,
    "topic": "Integridad Referencial",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "¿Qué previene la regla de Integridad Referencial en una base de datos relacional?",
    "options": [
      "La existencia de 'registros huérfanos' (filas hijas que apunten a claves de tablas padre que no existen o fueron eliminadas sin cascada).",
      "La ejecución simultánea de más de dos consultas analíticas que compitan por los mismos canales de entrada/salida en el servidor.",
      "La utilización de caracteres alfanuméricos en minúscula dentro de los identificadores de tablas y columnas del catálogo de datos.",
      "La inserción de atributos con tipos de datos de fecha y hora que no se ajusten al estándar horario UTC en las transacciones activas."
    ],
    "correctAnswer": 0,
    "hint": "Garantiza que ningún hijo apunte a un padre inexistente (registros huérfanos).",
    "explanation": "La Integridad Referencial asegura que el valor de una clave foránea coincida siempre con un valor válido de clave primaria en la tabla referenciada, impidiendo registros huérfanos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 4)",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 542,
    "classNum": 5,
    "topic": "PRIMARY KEY vs UNIQUE + NOT NULL",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "Si una columna tiene las restricciones UNIQUE y NOT NULL combinadas, ¿por qué igualmente se define explícitamente una PRIMARY KEY?",
    "options": [
      "Porque la PRIMARY KEY representa la identidad semántica principal elegida para la tabla y es el destino por defecto de las claves foráneas de otras tablas.",
      "Porque la combinación de UNIQUE y NOT NULL no previene la inserción de registros duplicados en motores relacionales con control de concurrencia.",
      "Porque los estándares del consorcio SQL penalizan con bloqueos de tabla completos a aquellas relaciones que omiten la palabra clave PRIMARY KEY.",
      "Porque sin una PRIMARY KEY declarada el motor relacional no puede ejecutar operaciones de proyección mediante la cláusula SELECT sobre la tabla."
    ],
    "correctAnswer": 0,
    "hint": "La PK es el identificador primordial del modelo de datos sobre el que se estructuran las relaciones.",
    "explanation": "Aunque UNIQUE + NOT NULL garantiza unicidad y ausencia de nulos (clave candidata), la PRIMARY KEY es la clave elegida formalmente como identificador principal de la entidad y referencia estándar para relaciones externas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 4)",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 543,
    "classNum": 5,
    "topic": "ALTER TABLE vs INSERT INTO",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "¿Cuál es la diferencia fundamental entre el comando ALTER TABLE y el comando INSERT INTO?",
    "options": [
      "ALTER TABLE es DDL (modifica la estructura/esquema de la tabla) mientras que INSERT INTO es DML (manipula las filas/datos dentro de la tabla).",
      "ALTER TABLE inserta nuevas filas de datos transaccionales mientras que INSERT INTO redefine los tipos de datos de las columnas en el catálogo.",
      "ALTER TABLE solo puede ser invocado directamente por el núcleo del sistema operativo anfitrión, mientras que INSERT INTO lo ejecuta el usuario.",
      "Ambos comandos son sinónimos declarativos que aplican exactamente las mismas modificaciones sobre los bloques físicos de almacenamiento en disco."
    ],
    "correctAnswer": 0,
    "hint": "DDL (Data Definition) modifica estructuras; DML (Data Manipulation) modifica datos dentro de estructuras.",
    "explanation": "DDL (Data Definition Language como ALTER TABLE) altera el diseño y metadatos de las estructuras, mientras que DML (Data Manipulation Language como INSERT INTO) opera sobre el contenido de datos de dichas estructuras.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 5)",
    "slideImage": "assets/clases_infographics/clase5_p05.png",
    "type": "single_choice"
  },
  {
    "id": 544,
    "classNum": 5,
    "topic": "Relaciones Muchos a Muchos (N:M)",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "En el modelo relacional, ¿cómo se implementa correctamente una relación de cardinalidad Muchos a Muchos (N:M) entre dos tablas (por ejemplo Estudiantes y Cursos)?",
    "options": [
      "Creando una tabla intermedia (tabla asociativa o de unión) que contenga como claves foráneas las claves primarias de ambas tablas.",
      "Colocando una lista separada por comas de identificadores de cursos dentro de un campo de texto variable en la tabla de Estudiantes.",
      "Duplicando físicamente la totalidad de las filas de la tabla Cursos dentro de cada tupla registrada en la tabla de Estudiantes en disco.",
      "Declarando un índice de tipo árbol B-Tree invertido que conecte los registros de ambas entidades sin crear nuevas estructuras en el esquema."
    ],
    "correctAnswer": 0,
    "hint": "Se crea una tabla de unión (junction table) con dos claves foráneas que la conectan con las tablas principales.",
    "explanation": "Las relaciones N:M se descomponen en dos relaciones 1:N mediante una tabla intermedia asociativa cuya Clave Primaria compuesta suele formarse por las FKs que apuntan a cada una de las tablas relacionadas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 4)",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "type": "single_choice"
  },
  {
    "id": 545,
    "classNum": 5,
    "topic": "Paginación y Control de Registros",
    "unit": "Clase 5 - Autoevaluación 5",
    "question": "¿Qué función cumplen las cláusulas LIMIT y OFFSET en consultas SQL para paginación de resultados?",
    "options": [
      "LIMIT restringe la cantidad máxima de filas retornadas, y OFFSET especifica cuántas filas saltar antes de comenzar a retornar registros.",
      "LIMIT define el número máximo de columnas proyectadas en el encabezado, y OFFSET filtra las tuplas que contienen valores nulos en el conjunto.",
      "LIMIT establece el criterio de ordenamiento ascendente en memoria, y OFFSET aplica un ordenamiento descendente sobre los bloques de datos.",
      "LIMIT elimina permanentemente los registros más antiguos de la tabla, y OFFSET genera nuevas tablas temporales para almacenar los resultados."
    ],
    "correctAnswer": 0,
    "hint": "LIMIT fija el tamaño de la página y OFFSET el desplazamiento o salto de registros.",
    "explanation": "LIMIT N indica retornar como máximo N filas, y OFFSET M indica omitir las primeras M filas del resultado, permitiendo implementar paginación de datos de forma precisa.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 3)",
    "slideImage": "assets/clases_infographics/clase5_p03.png",
    "type": "single_choice"
  },
  {
    "id": 601,
    "classNum": 6,
    "topic": "Propiedades ACID",
    "unit": "Clase 6 - Transacciones",
    "question": "Relacione cada propiedad fundamental de las transacciones (ACID) con la entidad o componente responsable de garantizar su cumplimiento:",
    "type": "matching",
    "pairs": [
      {
        "key": "Atomicidad",
        "value": "Componente del sistema de base de datos especializado en la gestión de transacciones."
      },
      {
        "key": "Aislamiento",
        "value": "Componente del sistema de base de datos denominado control de concurrencia."
      },
      {
        "key": "Consistencia",
        "value": "Programador de la aplicación que codifica la transacción."
      },
      {
        "key": "Durabilidad",
        "value": "Gestor de recuperaciones o componente encargado de la integridad del sistema."
      }
    ],
    "hint": "La consistencia depende de la lógica de negocio del programador; el aislamiento del control de concurrencia.",
    "explanation": "Atomicidad -> Gestor de transacciones (todo o nada). Aislamiento -> Control de concurrencia. Consistencia -> Programador de la aplicación (conservar invariantes de negocio). Durabilidad -> Gestor de recuperación (persistir cambios post-commit ante fallos).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 6, pág. 4"
  },
  {
    "id": 602,
    "classNum": 6,
    "topic": "Comando BEGIN TRANSACTION",
    "unit": "Clase 6 - Autoevaluación 6",
    "question": "¿Es verdadero o falso que el comando SQL `BEGIN TRANSACTION` se utiliza para confirmar todas las operaciones realizadas dentro de un bloque de transacción?",
    "type": "single_choice",
    "options": [
      "Falso: `BEGIN TRANSACTION` inicia el bloque transaccional; para confirmarlo se utiliza `COMMIT`.",
      "Verdadero: Confirma inmediatamente todas las operaciones pendientes en el motor de base de datos.",
      "Falso: `BEGIN TRANSACTION` solo se usa en bases de datos NoSQL basadas en documentos.",
      "Verdadero: Es el comando estándar de confirmación atómica en PostgreSQL."
    ],
    "correctAnswer": 0,
    "hint": "BEGIN inicia, COMMIT confirma, ROLLBACK cancela.",
    "explanation": "El comando `BEGIN TRANSACTION` (o simplemente `BEGIN`) se utiliza para iniciar una transacción. Para confirmar permanentemente los cambios se utiliza `COMMIT`, y para deshacerlos `ROLLBACK`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 6 & Diapositiva Clase 6, pág. 16"
  },
  {
    "id": 603,
    "classNum": 6,
    "topic": "Nivel de Aislamiento Predeterminado",
    "unit": "Clase 6 - Autoevaluación 6",
    "question": "En PostgreSQL, ¿cuál es el nivel de aislamiento de transacciones predeterminado por el motor?",
    "type": "single_choice",
    "options": [
      "Read Committed",
      "Repeatable Read",
      "Serializable",
      "Read Uncommitted"
    ],
    "correctAnswer": 0,
    "hint": "Es el nivel que solo lee datos confirmados al momento de iniciar cada consulta.",
    "explanation": "En PostgreSQL, el nivel de aislamiento predeterminado es `Read Committed`. En este nivel, una consulta SELECT ve solo los datos confirmados antes de que la consulta individual comience a ejecutarse.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 6 & Diapositiva Clase 6, pág. 12"
  },
  {
    "id": 604,
    "classNum": 6,
    "topic": "Concurrencia Multiversión (MVCC)",
    "unit": "Clase 6 - Autoevaluación 6",
    "question": "¿Es verdadero o falso que el Control de Concurrencia de Múltiples Versiones (MVCC) es un esquema donde cada operación de escritura crea una nueva versión del dato?",
    "type": "single_choice",
    "options": [
      "Verdadero: Cada modificación o escritura genera una nueva versión de la tupla con marcas de transacción, permitiendo lecturas concurrentes sin bloqueos.",
      "Falso: Los motores con MVCC siempre sobrescriben físicamente el mismo bloque de datos y resguardan las lecturas en tablas temporales en disco.",
      "Falso: La creación de nuevas versiones físicas solo ocurre si la base de datos se configura explícitamente en modo de recuperación ante desastres.",
      "Verdadero: Aunque este mecanismo solo se activa de forma obligatoria cuando se ejecutan sentencias DDL de modificación de estructura de tablas."
    ],
    "correctAnswer": 0,
    "hint": "Multi-Version Concurrency Control: escribir genera versiones en vez de bloquear lecturas.",
    "explanation": "En MVCC (Multiversion Concurrency Control), cada operación de escritura crea una nueva versión de la fila en lugar de sobrescribirla inmediatamente, permitiendo que las lecturas continúen viendo versiones consistentes anteriores sin bloquearse.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 6 & Diapositiva Clase 6, pág. 6"
  },
  {
    "id": 605,
    "classNum": 6,
    "topic": "Fenómenos de Concurrencia: Phantom Read",
    "unit": "Clase 6 - Autoevaluación 6",
    "question": "¿Qué fenómeno describe la situación donde una transacción vuelve a ejecutar una consulta de rango y encuentra que el conjunto de filas ha cambiado debido a inserciones o eliminaciones confirmadas por otra transacción?",
    "type": "single_choice",
    "options": [
      "Lectura fantasma (Phantom Read)",
      "Lectura no repetible (Non-repeatable Read)",
      "Lectura sucia (Dirty Read)",
      "Anomalía de serialización (Serialization Anomaly)"
    ],
    "correctAnswer": 0,
    "hint": "Aparecen o desaparecen 'filas fantasma' en un rango de selección.",
    "explanation": "La 'Lectura Fantasma' (Phantom Read) ocurre cuando una transacción ejecuta una consulta de búsqueda que recupera un conjunto de filas que satisfacen una condición, y al reejecutarla más tarde, el conjunto de filas ha cambiado porque otra transacción confirmó inserciones o borrados de filas que cumplen ese predicado.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 6 & Diapositiva Clase 6, pág. 10"
  },
  {
    "id": 606,
    "classNum": 6,
    "topic": "Fenómenos de Concurrencia: Non-repeatable Read",
    "unit": "Clase 6 - Autoevaluación 6",
    "question": "Si un proceso de reporte mensual (`Transacción A`) lee un cliente y, mientras tanto, otra transacción (`Transacción B`) actualiza el descuento de ese cliente y hace COMMIT, haciendo que al releer el registro el valor sea distinto, ¿qué anomalía ocurrió?",
    "type": "single_choice",
    "options": [
      "Lectura No Repetible (Non-repeatable Read): T1 lee un mismo registro dos veces y obtiene datos distintos porque T2 modificó y confirmó el valor entremedio.",
      "Lectura Sucia (Dirty Read): T1 lee un dato temporal modificado por T2 que posteriormente es cancelado mediante una operación de ROLLBACK en el motor.",
      "Lectura Fantasma (Phantom Read): T1 reejecuta una consulta de rango y encuentra nuevas tuplas completas insertadas y confirmadas por T2 en la tabla.",
      "Actualización Perdida (Lost Update): Dos transacciones leen el mismo dato y la segunda sobrescribe los cambios de la primera sin considerar su valor."
    ],
    "correctAnswer": 0,
    "hint": "El mismo registro puntual cambió su valor entre dos lecturas de la misma transacción.",
    "explanation": "La Lectura No Repetible (Non-repeatable Read) se produce cuando una transacción vuelve a leer un dato que previamente leyó y descubre que otra transacción ya confirmada ha modificado ese valor.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 6 & Diapositiva Clase 6, pág. 10"
  },
  {
    "id": 607,
    "classNum": 6,
    "topic": "Ventaja Principal de MVCC",
    "unit": "Clase 6 - Autoevaluación 6",
    "question": "¿Cuál es la principal ventaja del modelo MVCC de PostgreSQL en comparación con los sistemas tradicionales basados en bloqueos pesados de dos fases (2PL estricto)?",
    "type": "single_choice",
    "options": [
      "Los lectores nunca bloquean a los escritores y los escritores nunca bloquean a los lectores, maximizando el rendimiento concurrente.",
      "Elimina completamente la necesidad de escribir registros en el log de transacciones WAL antes de confirmar los cambios en disco.",
      "Permite que múltiples transacciones actualicen exactamente la misma columna física al mismo tiempo sin ningún tipo de control.",
      "Garantiza que la base de datos no consuma espacio de almacenamiento secundario al guardar únicamente las diferencias en RAM."
    ],
    "correctAnswer": 0,
    "hint": "'Readers never block writers, and writers never block readers'.",
    "explanation": "La mayor ventaja de MVCC es que la lectura de datos nunca bloquea la escritura, y la escritura nunca bloquea la lectura. Las consultas de solo lectura leen una instantánea histórica de datos sin adquirir bloqueos compartidos que frenen a los updates.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 6 & Diapositiva Clase 6, pág. 9"
  },
  {
    "id": 608,
    "classNum": 6,
    "topic": "Repeatable Read en PostgreSQL",
    "unit": "Clase 6 - Autoevaluación 6",
    "question": "¿Es verdadero o falso que el nivel de aislamiento `Repeatable Read` en PostgreSQL es más fuerte que el estándar ANSI SQL, ya que evita también las lecturas fantasma?",
    "type": "single_choice",
    "options": [
      "Verdadero: En PostgreSQL 'Repeatable Read' previene lecturas fantasma mediante snapshots de MVCC, superando el mínimo requerido por la norma ANSI SQL.",
      "Falso: El estándar ANSI SQL prohíbe taxativamente que cualquier motor relacional prevenga lecturas fantasma antes del nivel Serializable.",
      "Falso: En PostgreSQL las lecturas fantasma solo pueden prevenirse ejecutando bloqueos manuales de tabla completa con LOCK TABLE en modo exclusivo.",
      "Verdadero: Aunque dicha protección solo se aplica si la transacción no realiza ninguna operación de lectura sobre tablas con claves foráneas."
    ],
    "correctAnswer": 0,
    "hint": "En el estándar ANSI Repeatable Read puede permitir Phantom Reads, pero PostgreSQL MVCC las previene.",
    "explanation": "En PostgreSQL, la implementación de `Repeatable Read` es más estricta que la especificación estándar ANSI SQL-92, ya que en PostgreSQL este nivel no permite Lecturas Fantasma (Phantom Reads), congelando la visión de toda la base al momento del inicio de la transacción.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 6 & Diapositiva Clase 6, pág. 13"
  },
  {
    "id": 609,
    "classNum": 6,
    "topic": "Responsabilidad de la Consistencia",
    "unit": "Clase 6 - Autoevaluación 6",
    "question": "Dentro de las propiedades ACID, ¿en quién recae principalmente la responsabilidad de asegurar la Consistencia (Consistency)?",
    "type": "single_choice",
    "options": [
      "En el desarrollador de la aplicación que diseña y programa las operaciones de la transacción.",
      "En el subsistema de almacenamiento físico que asigna bloques contiguos en disco secundario.",
      "En el optimizador de consultas que genera los planes de ejecución paralelos en memoria volátil.",
      "En el administrador de red corporativa que configura los puertos y protocolos de comunicación."
    ],
    "correctAnswer": 0,
    "hint": "El DBMS garantiza atomicidad y aislamiento, pero que el saldo no quede negativo o las reglas de negocio se cumplan es lógica de código.",
    "explanation": "La responsabilidad de asegurar la consistencia recae en el programador de la aplicación que codifica la transacción. El DBMS asegura que las operaciones se ejecuten atómicamente y aisladas, pero la corrección semántica y reglas del negocio corresponden al código del desarrollador.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 6 & Diapositiva Clase 6, pág. 4"
  },
  {
    "id": 610,
    "classNum": 6,
    "topic": "Read Committed: Visibilidad de Datos",
    "unit": "Clase 6 - Autoevaluación 6",
    "question": "En PostgreSQL, ¿qué datos permite ver una consulta `SELECT` bajo el nivel de aislamiento predeterminado (`Read Committed`)?",
    "type": "single_choice",
    "options": [
      "Una instantánea (snapshot) de los datos confirmados tomada al momento exacto en que dicha consulta SELECT específica comienza a ejecutarse.",
      "El estado más reciente de la base de datos incluyendo todas las modificaciones no confirmadas realizadas por conexiones concurrentes.",
      "Una copia estática e inmutable de los datos congelada al momento exacto en que se inició la primera transacción del día laboral.",
      "Únicamente los registros que hayan sido modificados por la misma sesión dentro de los últimos cinco minutos de actividad de red."
    ],
    "correctAnswer": 0,
    "hint": "Ve una snapshot del momento en que arranca el SELECT particular, más sus propios cambios locales no confirmados.",
    "explanation": "Bajo `Read Committed`, cada comando SELECT ve una instantánea tomada al momento en que dicho SELECT comienza. Solo ve filas confirmadas antes de ese instante, además de ver los efectos de las sentencias previas ejecutadas dentro de su misma transacción.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 6 & Diapositiva Clase 6, pág. 12"
  },
  {
    "id": 611,
    "classNum": 6,
    "topic": "Garantías de Niveles de Aislamiento",
    "unit": "Clase 6 - Segundo Parcial",
    "question": "Asocie cada nivel de aislamiento de transacciones con la característica que mejor describe la garantía de consistencia que proporciona:",
    "type": "matching",
    "pairs": [
      {
        "key": "Repeatable Read",
        "value": "Asegura que los datos leídos al comienzo de la transacción permanecerán sin cambios durante toda su ejecución, sin importar las actualizaciones concurrentes (en PostgreSQL impide las lecturas fantasma)."
      },
      {
        "key": "Read Committed",
        "value": "Garantiza que la consulta verá una versión estable de los datos al momento de su inicio, previniendo la lectura de datos no confirmados (dirty reads)."
      },
      {
        "key": "Serializable",
        "value": "Nivel más riguroso, que tiene como objetivo emular la ejecución secuencial de las transacciones, garantizando que no se manifieste ninguna anomalía de concurrencia."
      }
    ],
    "hint": "Serializable emula la ejecución secuencial estricta; Read Committed evita dirty reads; Repeatable Read congela la instantánea.",
    "explanation": "Serializable es el nivel más estricto (garantiza equivalencia a ejecución en serie). Repeatable Read congela la lectura al inicio de la transacción. Read Committed previene lecturas sucias evaluando en cada sentencia.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 6, págs. 11-14"
  },
  {
    "id": 612,
    "classNum": 6,
    "topic": "Fenómenos de Concurrencia",
    "unit": "Clase 6 - Segundo Parcial",
    "question": "Empareje el nombre del fenómeno o problema de concurrencia con la descripción de lo que ocurre dentro de una transacción:",
    "type": "matching",
    "pairs": [
      {
        "key": "Lectura no confirmada (Dirty read)",
        "value": "Lectura de datos temporales que fueron escritos por otra transacción que aún no ha confirmado sus cambios."
      },
      {
        "key": "Lectura no repetible (Non repeatable read)",
        "value": "Al intentar leer un dato por segunda vez dentro de la misma transacción, se encuentra que otra transacción ya confirmada lo ha modificado."
      },
      {
        "key": "Lectura fantasma (Phantom read)",
        "value": "Reejecución de una consulta de rango que devuelve un conjunto de filas diferente, debido a la inserción o eliminación confirmada por otra transacción."
      },
      {
        "key": "Anomalía de serialización",
        "value": "Ocurre cuando dos conexiones modifican los mismos datos secuencialmente, lo que puede resultar en la pérdida de algunas modificaciones (condición de carrera)."
      }
    ],
    "hint": "Dirty read = leer sin commit ajeno; Non-repeatable = valor de una fila cambia; Phantom = cantidad de filas en un rango cambia.",
    "explanation": "Dirty read: lee datos no confirmados (puede haber rollback). Non-repeatable read: el valor de una tupla cambia entre lecturas. Phantom read: nuevas tuplas insertadas/borradas aparecen en un rango. Anomalía de serialización: resultado incoherente con cualquier orden secuencial.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 6, pág. 10"
  },
  {
    "id": 613,
    "classNum": 6,
    "topic": "Concepto Fundamental de Transacción",
    "unit": "Clase 6 - Segundo Parcial",
    "question": "¿Cuál de las siguientes afirmaciones describe de manera más precisa el concepto de una transacción en un sistema de base de datos?",
    "type": "single_choice",
    "options": [
      "Es un conjunto de operaciones que deben ser tratadas como una unidad lógica e indivisible (atómica), garantizando que o bien se completen todas sus acciones, o ninguna de ellas.",
      "Es un procedimiento almacenado compilado en memoria intermedia que gestiona la asignación de memoria volátil y optimiza los planes de ejecución para consultas analíticas pesadas.",
      "Es una directiva de seguridad del motor relacional que cifra los canales de transmisión TCP/IP para autenticar las credenciales de los usuarios durante el intercambio de paquetes.",
      "Es una secuencia de sentencias declarativas de solo lectura que evalúa las restricciones de clave primaria antes de que los bloques físicos se sincronicen en el almacenamiento."
    ],
    "correctAnswer": 0,
    "hint": "Unidad lógica e indivisible: todo o nada (All-or-Nothing).",
    "explanation": "Una transacción es una unidad lógica de procesamiento que comprende una o más operaciones de acceso a la base de datos. Posee carácter atómico: se ejecutan exitosamente todas sus operaciones o se descartan todas en caso de error.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 6, pág. 2"
  },
  {
    "id": 614,
    "classNum": 6,
    "topic": "Control de Concurrencia: Objetivo",
    "unit": "Clase 6 - Segundo Parcial",
    "question": "Cuando varias transacciones se ejecutan simultáneamente, es necesario el control de concurrencia. ¿Cuál es el principal objetivo de este control?",
    "type": "single_choice",
    "options": [
      "Supervisar y regular la interacción entre las transacciones concurrentes para preservar la consistencia de la base de datos.",
      "Asegurar que las lecturas no fallen y que las transacciones nunca tengan que esperar, mejorando la velocidad de lectura.",
      "Distinguir entre transacciones de solo lectura y transacciones de actualización para aplicar bloqueos de manera diferencial.",
      "Garantizar la propiedad de Durabilidad, asegurando que los cambios persistan después de fallos del sistema."
    ],
    "correctAnswer": 0,
    "hint": "El objetivo central es evitar estados inconsistentes por accesos simultáneos.",
    "explanation": "El objetivo primordial del control de concurrencia es coordinar los accesos simultáneos a los datos por parte de múltiples transacciones de modo que se preserve la consistencia global del sistema y se eviten interferencias destructivas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 6, pág. 5"
  },
  {
    "id": 615,
    "classNum": 6,
    "topic": "Definición Técnica de Propiedades ACID",
    "unit": "Clase 6 - Segundo Parcial",
    "question": "Relacione cada propiedad ACID con su definición técnica principal:",
    "type": "matching",
    "pairs": [
      {
        "key": "Atomicidad",
        "value": "Conjunto de operaciones tratadas como una unidad lógica, donde todas se ejecutan o ninguna de ellas."
      },
      {
        "key": "Consistencia",
        "value": "La ejecución aislada de la transacción conserva la integridad de la base de datos."
      },
      {
        "key": "Aislamiento",
        "value": "Garantiza que el resultado de la ejecución concurrente de transacciones sea equivalente a la ejecución secuencial de las mismas."
      },
      {
        "key": "Durabilidad",
        "value": "Los cambios exitosos realizados en la base de datos persisten, incluso si hay fallos en el sistema posteriores."
      }
    ],
    "hint": "A = Todo o nada, C = Estado válido a estado válido, I = Sin interferencias, D = Persistencia garantizada.",
    "explanation": "Atomicidad (todo o nada), Consistencia (preservar invariantes de integridad), Aislamiento (equivalencia a ejecución serial), Durabilidad (persistencia tras confirmación pese a caídas).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 6, pág. 3"
  },
  {
    "id": 616,
    "classNum": 6,
    "topic": "Lectura Sucia (Dirty Read)",
    "unit": "Clase 6 - Transacciones",
    "question": "¿En cuál de los siguientes niveles de aislamiento estándar ANSI es posible que ocurra una 'Lectura Sucia' (Dirty Read)?",
    "type": "single_choice",
    "options": [
      "Read Uncommitted exclusivamente.",
      "Read Committed y Repeatable Read.",
      "Serializable exclusivamente.",
      "En ninguno, el estándar ANSI prohíbe las lecturas sucias en todos los niveles."
    ],
    "correctAnswer": 0,
    "hint": "Dirty read solo ocurre si se permite leer transacciones no confirmadas (uncommitted).",
    "explanation": "Una lectura sucia solo puede manifestarse en el nivel `Read Uncommitted`. En `Read Committed`, `Repeatable Read` y `Serializable`, las lecturas sucias están totalmente impedidas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 6, pág. 15"
  },
  {
    "id": 617,
    "classNum": 6,
    "topic": "Comando ROLLBACK",
    "unit": "Clase 6 - Transacciones",
    "question": "¿Qué efecto produce la ejecución de un comando `ROLLBACK;` durante una transacción activa?",
    "type": "single_choice",
    "options": [
      "Cancela la transacción activa, revirtiendo y descartando todas las modificaciones realizadas desde el inicio de la misma.",
      "Confirma inmediatamente todas las operaciones pendientes en el motor forzando la escritura de páginas sucias en el disco.",
      "Elimina permanentemente la definición lógica de la tabla en el catálogo del sistema junto con todos sus índices asociados.",
      "Cierra de forma abrupta la conexión de red del cliente liberando los hilos de ejecución en el pool del servidor relacional."
    ],
    "correctAnswer": 0,
    "hint": "Deshacer todas las modificaciones desde el BEGIN.",
    "explanation": "`ROLLBACK` aborta la transacción y revierte cualquier cambio que se haya ejecutado dentro de ese bloque, garantizando la atomicidad frente a errores.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 6, pág. 16"
  },
  {
    "id": 618,
    "classNum": 6,
    "topic": "Metadatos MVCC: xmin y xmax",
    "unit": "Clase 6 - Transacciones",
    "question": "En el mecanismo MVCC de PostgreSQL, ¿qué representan los campos de sistema ocultos `xmin` y `xmax` presentes en cada tupla?",
    "type": "single_choice",
    "options": [
      "El identificador de la transacción que insertó la tupla (`xmin`) y el identificador de la transacción que la eliminó o actualizó (`xmax`).",
      "La dirección física de cilindro, cabezal y sector donde el bloque magnético se almacena dentro de los platos del disco duro del servidor.",
      "El código hash de verificación criptográfica SHA-256 generado para validar que los datos no hayan sido corrompidos en memoria volátil.",
      "El número de veces consecutivas que una consulta de lectura ha accedido a la fila mediante escaneos de índices auto-balanceados B-Tree."
    ],
    "correctAnswer": 0,
    "hint": "xmin = transaction id de creación; xmax = transaction id de borrado/modificación.",
    "explanation": "PostgreSQL utiliza `xmin` para registrar la transacción creadora y `xmax` para la transacción destructora. Esto permite determinar si la tupla es visible para la instantánea de una consulta sin bloquear el disco.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 6, pág. 9"
  },
  {
    "id": 619,
    "classNum": 6,
    "topic": "Savepoints en Transacciones",
    "unit": "Clase 6 - Transacciones",
    "question": "¿Cuál es la función del comando `SAVEPOINT nombre;` dentro de una transacción activa en SQL?",
    "type": "single_choice",
    "options": [
      "Establecer un punto intermedio de control dentro de la transacción al cual es posible revertir cambios de forma parcial (`ROLLBACK TO`).",
      "Forzar la persistencia inmediata de los datos en el almacenamiento secundario sin necesidad de emitir la sentencia `COMMIT` final.",
      "Bloquear la totalidad de las tablas del esquema en modo exclusivo para impedir lecturas concurrentes de otros usuarios activos.",
      "Crear una copia de seguridad comprimida de la base de datos en una partición externa del sistema de archivos del servidor anfitrión."
    ],
    "correctAnswer": 0,
    "hint": "Permite retroceder parcialmente a un punto de guardado sin perder todo el trabajo previo.",
    "explanation": "Los savepoints permiten definir puntos de restauración intermedios dentro de una transacción. Si ocurre un fallo en una sentencia posterior, se puede ejecutar `ROLLBACK TO SAVEPOINT` para deshacer solo ese fragmento sin abortar toda la transacción.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 6, pág. 16"
  },
  {
    "id": 620,
    "classNum": 6,
    "topic": "Actualización Perdida (Lost Update)",
    "unit": "Clase 6 - Transacciones",
    "question": "¿En qué consiste la anomalía de concurrencia conocida como 'Actualización Perdida' (Lost Update)?",
    "type": "single_choice",
    "options": [
      "Dos transacciones leen el mismo registro simultáneamente y la última en confirmar sobrescribe los cambios de la primera, anulando su modificación.",
      "Una transacción lee datos modificados por otra transacción concurrente que todavía no ha confirmado y luego realiza un ROLLBACK de sus operaciones.",
      "Una transacción reejecuta una consulta sobre un rango de filas y descubre nuevos registros insertados por otra sesión que ya hizo COMMIT en el sistema.",
      "El motor de base de datos interrumpe una transacción activa por superar el tiempo máximo de espera de bloqueos compartidos en memoria volátil."
    ],
    "correctAnswer": 0,
    "hint": "Sobrescritura ciega donde el cambio de la primera transacción queda pisado y olvidado.",
    "explanation": "La actualización perdida ocurre cuando dos transacciones leen el mismo estado inicial y luego intentan actualizarlo concurrentemente; la última en hacer COMMIT sobrescribe los cambios de la primera, perdiéndose su actualización.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 6, pág. 5"
  },
  {
    "id": 621,
    "classNum": 6,
    "topic": "Sintaxis de Nivel de Aislamiento",
    "unit": "Clase 6 - Transacciones",
    "question": "Deseas iniciar una transacción con el máximo nivel de consistencia para evitar cualquier anomalía. Completa la sentencia SQL:",
    "type": "fill_in_sql",
    "template": "BEGIN TRANSACTION ISOLATION LEVEL {INPUT};",
    "expectedAnswer": "SERIALIZABLE",
    "acceptedAnswers": [
      "SERIALIZABLE"
    ],
    "hint": "El nivel de aislamiento más riguroso (12 letras).",
    "explanation": "El comando `BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;` inicia una transacción bajo el nivel Serializable, garantizando que el resultado sea idéntico a una ejecución estrictamente secuencial.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 6, pág. 14"
  },
  {
    "id": 622,
    "classNum": 6,
    "topic": "Marcas Temporales vs Bloqueo 2 Fases",
    "unit": "Clase 6 - Transacciones",
    "question": "En los esquemas de concurrencia multiversión, ¿cuál es una desventaja notable de la ordenación por marcas temporales frente al bloqueo de dos fases?",
    "type": "single_choice",
    "options": [
      "Resuelve conflictos abortando y reiniciando transacciones en lugar de hacerlas esperar, generando un alto costo de rollbacks bajo alta contención.",
      "Requiere que todas las transacciones soliciten bloqueos exclusivos de tabla completa antes de leer, deteniendo todas las consultas concurrentes.",
      "Inhabilita por completo la creación de índices B-Tree en las tablas del esquema, obligando al optimizador a realizar barridos secuenciales.",
      "Provoca interbloqueos cíclicos (deadlocks) irreversibles de forma obligatoria cada vez que dos transacciones leen el mismo bloque de datos."
    ],
    "correctAnswer": 0,
    "hint": "Marcas temporales generan abortos frecuentes en alta contención en vez de colas de espera.",
    "explanation": "La ordenación por marcas temporales resuelve conflictos mediante abortos (retrocesos) en vez de esperas, lo que bajo alta contención puede resultar computacionalmente costoso, además de que las lecturas actualizan marcas de tiempo generando accesos adicionales.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Resumen 2do Parcial, pág. 2"
  },
  {
    "id": 701,
    "classNum": 7,
    "topic": "Propósito de la Normalización",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "¿Es verdadero o falso que la normalización es un proceso que busca la desorganización de los datos para optimizar la velocidad de acceso en entornos OLAP?",
    "type": "single_choice",
    "options": [
      "Verdadero: Busca descomponer relaciones para reducir la redundancia y evitar anomalías sin perder información válida.",
      "Falso: La normalización es un mecanismo opcional que solo se aplica para reducir el consumo de memoria volátil RAM.",
      "Falso: Su única función es convertir modelos relacionales tradicionales en bases de datos distribuidas NoSQL en la nube.",
      "Verdadero: Pero únicamente se aplica cuando el sistema de gestión de base de datos no soporta índices de tipo árbol B+."
    ],
    "correctAnswer": 0,
    "hint": "Normalizar = organizar metódicamente para evitar redundancia e inconsistencias.",
    "explanation": "La normalización es una secuencia de pasos para diseñar y optimizar un esquema relacional, con el objetivo de erradicar la duplicación innecesaria de datos y prevenir anomalías de inserción, actualización y borrado.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 2"
  },
  {
    "id": 702,
    "classNum": 7,
    "topic": "Segunda Forma Normal (2FN)",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "¿Es verdadero o falso que la Segunda Forma Normal (2FN) se enfoca principalmente en eliminar las dependencias transitivas?",
    "type": "single_choice",
    "options": [
      "Falso: La 2FN busca eliminar las dependencias funcionales parciales de la clave compuesta; la eliminación de dependencias transitivas compete a la 3FN.",
      "Verdadero: La 2FN define formalmente que ningún atributo no clave puede depender de otro atributo no clave dentro del mismo esquema relacional.",
      "Verdadero: Porque tanto las dependencias parciales como las transitivas se resuelven de forma idéntica en una sola fase de descomposición lógica.",
      "Falso: La Segunda Forma Normal se encarga exclusivamente de convertir atributos multivaluados en listas de valores separados por comas fijas."
    ],
    "correctAnswer": 0,
    "hint": "2FN = Dependencias parciales; 3FN = Dependencias transitivas.",
    "explanation": "La 2FN requiere estar en 1FN y tiene como objetivo eliminar las dependencias funcionales parciales, donde atributos no clave dependen solo de una parte de una clave primaria compuesta. La eliminación de dependencias transitivas es tarea de la 3FN.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 5"
  },
  {
    "id": 703,
    "classNum": 7,
    "topic": "Aplicación Práctica de 2FN",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "¿Es verdadero o falso que si una tabla tiene campos como 'Editorial' y 'Dirección' que no dependen de la clave completa del 'Libro', estos campos deberían ser extraídos a nuevas tablas para cumplir con la 2FN?",
    "type": "single_choice",
    "options": [
      "Verdadero: Los atributos descriptivos de entidades secundarias deben aislarse en tablas propias con su propia clave para evitar redundancias.",
      "Falso: La teoría relacional exige mantener todos los atributos descriptivos en una única tabla maestra para maximizar el rendimiento de disco.",
      "Falso: La normalización solo permite extraer atributos cuando la clave primaria está conformada por tres o más columnas numéricas continuas.",
      "Verdadero: Pero únicamente si la tabla original carece por completo de restricciones de clave foránea hacia otros esquemas de la base de datos."
    ],
    "correctAnswer": 0,
    "hint": "Separar atributos que dependen parcialmente de la clave para que dependan de su propia entidad.",
    "explanation": "Para cumplir 2FN (y 3FN), los atributos que describen a una entidad secundaria (como Editorial y Dirección) deben trasladarse a su propia tabla para evitar redundancia en cada libro publicado.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 5"
  },
  {
    "id": 704,
    "classNum": 7,
    "topic": "Dependencia Transitiva",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "¿Qué tipo de dependencia se produce cuando un atributo no clave depende funcionalmente de otro atributo que tampoco forma parte de la clave primaria (X -> Y y Y -> Z)?",
    "type": "single_choice",
    "options": [
      "Dependencia transitiva",
      "Dependencia parcial",
      "Dependencia cíclica",
      "Dependencia de valores múltiples"
    ],
    "correctAnswer": 0,
    "hint": "Si A determina a B y B determina a C, entre A y C hay dependencia...",
    "explanation": "Una dependencia transitiva ocurre cuando un atributo depende de la clave primaria a través de otro atributo no clave (ej: ID_Empleado -> ID_Depto -> Nombre_Depto). La 3FN elimina estas dependencias.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 6"
  },
  {
    "id": 705,
    "classNum": 7,
    "topic": "Relaciones Muchos a Muchos en 3FN",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "¿Es verdadero o falso que en la 3FN, las relaciones de Muchos a Muchos (N-M) se resuelven generando una tabla intermedia para evitar la repetición de registros y atributos particulares?",
    "type": "single_choice",
    "options": [
      "Verdadero: Toda relación N:M se resuelve con una tabla asociativa intermedia con claves foráneas hacia ambas entidades, transformándola en dos 1:N.",
      "Falso: En 3FN las relaciones N:M se resuelven obligatoriamente duplicando todas las columnas de ambas entidades dentro de una única tabla maestra.",
      "Falso: El modelo relacional permite crear arrays multivaluados ilimitados en una columna sin necesidad de generar nuevas tablas intermedias.",
      "Verdadero: Aunque dicha tabla intermedia solo puede contener atributos de auditoría y tiene estrictamente prohibido definir una clave primaria."
    ],
    "correctAnswer": 0,
    "hint": "Las relaciones N:M requieren una tabla intermedia con las PKs de ambos lados.",
    "explanation": "Toda relación N:M entre dos entidades debe resolverse mediante una tabla intermedia (tabla asociativa) que contenga las claves foráneas hacia ambas tablas padre, transformándola en dos relaciones 1:N y eliminando redundancias.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 6"
  },
  {
    "id": 706,
    "classNum": 7,
    "topic": "Quinta Forma Normal (5FN) y Dependencias Cíclicas",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "Una 'dependencia cíclica' en el contexto de bases de datos, que la Quinta Forma Normal (5FN) busca eliminar, sucede cuando:",
    "type": "single_choice",
    "options": [
      "Una situación donde una clave compuesta de 3 o más atributos se relaciona de a pares, requiriendo descomposición en Quinta Forma Normal (5FN).",
      "Un bloqueo mutuo (deadlock) que paraliza la ejecución de transacciones concurrentes al competir por los mismos recursos en disco.",
      "Una clave foránea que apunta recursivamente a la clave primaria de la misma tabla relacional para representar jerarquías internas.",
      "Un bucle infinito generado en un procedimiento almacenado recursivo que desborda la pila de ejecución del motor de base de datos."
    ],
    "correctAnswer": 0,
    "hint": "Clave compuesta por 3 o más campos con relaciones binarias simétricas de a pares.",
    "explanation": "La 5FN (Forma Normal de Proyección-Unión) aborda dependencias cíclicas donde una clave primaria compuesta por 3 o más atributos presenta restricciones entre pares de atributos, permitiendo descomponer la tabla en tres proyecciones binarias sin pérdida de información.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 9"
  },
  {
    "id": 707,
    "classNum": 7,
    "topic": "Sexta Forma Normal (DKNF)",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "¿Es verdadero o falso que la Sexta Forma Normal / Forma Normal Dominio-Clave (DKNF) es principalmente un proceso de transformación paso a paso algorítmico?",
    "type": "single_choice",
    "options": [
      "Falso: DKNF es un modelo teórico ideal donde toda restricción deriva de claves y dominios; no existe un algoritmo general paso a paso para alcanzarla.",
      "Verdadero: Existe un procedimiento mecánico algorítmico estándar en ANSI SQL que convierte automáticamente cualquier esquema en DKNF en un paso.",
      "Verdadero: Porque la DKNF es simplemente un alias formal utilizado en la bibliografía moderna para denominar a la Primera Forma Normal estricta.",
      "Falso: La Forma Normal Dominio-Clave prohíbe de manera absoluta el uso de restricciones CHECK y dominios de datos definidos por el usuario."
    ],
    "correctAnswer": 0,
    "hint": "Domain Key Normal Form es un ideal conceptual, no un algoritmo secuencial estándar.",
    "explanation": "Domain Key Normal Form (DKNF) es un estado conceptual donde cada restricción en la relación es consecuencia lógica de la definición de dominios y claves. No existe un algoritmo práctico paso a paso para alcanzarla en todos los casos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 10"
  },
  {
    "id": 708,
    "classNum": 7,
    "topic": "Anomalía de Eliminación",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "Cuando se elimina un registro de una tabla padre provocando la pérdida involuntaria de información complementaria de tablas dependientes, se produce una anomalía de:",
    "type": "single_choice",
    "options": [
      "Eliminación",
      "Inserción",
      "Actualización",
      "Redundancia"
    ],
    "correctAnswer": 0,
    "hint": "Al borrar una entidad se pierde información de otra entidad distinta.",
    "explanation": "La Anomalía de Eliminación ocurre cuando al borrar una tupla para eliminar un dato determinado, se pierde involuntariamente otra información importante que estaba acoplada en el mismo registro.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 3"
  },
  {
    "id": 709,
    "classNum": 7,
    "topic": "Nivel Práctico de Normalización en la Industria",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "¿Es verdadero o falso que un modelo de base de datos relacional de producción generalmente implementa en su totalidad hasta la 6FN / DKNF?",
    "type": "single_choice",
    "options": [
      "Falso: En la práctica profesional se normaliza comúnmente hasta 3FN o BCNF; formas superiores suelen provocar una fragmentación excesiva de tablas.",
      "Verdadero: Todos los sistemas transaccionales empresariales modernos exigen certificar formalmente 6FN antes de su puesta en producción en disco.",
      "Verdadero: Porque alcanzar DKNF garantiza de forma automática tiempos de respuesta de consulta de cero milisegundos en cualquier motor relacional.",
      "Falso: Los motores relacionales comerciales tienen técnicamente bloqueada la creación de esquemas que superen la Primera Forma Normal (1FN)."
    ],
    "correctAnswer": 0,
    "hint": "Normalizar en exceso multiplica los JOINs y perjudica el rendimiento de lectura.",
    "explanation": "En la práctica profesional, el estándar de la industria es normalizar hasta 3FN (o BCNF). Formas normales superiores (4FN, 5FN, DKNF) son raras y suelen provocar fragmentación excesiva y penalización en consultas con demasiados JOINs.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 10"
  },
  {
    "id": 710,
    "classNum": 7,
    "topic": "Objetivo de la Normalización",
    "unit": "Clase 7 - Autoevaluación 7",
    "question": "¿Es verdadero o falso que el objetivo principal de la normalización es maximizar la duplicación de datos para mejorar la velocidad de lectura?",
    "type": "single_choice",
    "options": [
      "Falso: El objetivo de la normalización es minimizar la redundancia de datos y prevenir anomalías de actualización, inserción y borrado en tablas.",
      "Verdadero: El principio fundamental de normalizar es duplicar columnas informativas en todas las tablas para prescindir de la operación de JOIN.",
      "Verdadero: Porque la redundancia masiva de datos asegura la integridad referencial y simplifica la escritura de sentencias transaccionales.",
      "Falso: La normalización solo busca comprimir el tamaño de los tipos de datos numéricos y no interviene sobre la distribución de los atributos."
    ],
    "correctAnswer": 0,
    "hint": "Normalizar busca erradicar la duplicación.",
    "explanation": "La normalización tiene como propósito reducir al mínimo la redundancia de datos y prevenir anomalías de modificación, inserción y borrado, asegurando que cada dato resida en un único lugar lógico.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 7 & Diapositiva Clase 7, pág. 2"
  },
  {
    "id": 711,
    "classNum": 7,
    "topic": "Formas Normales Avanzadas",
    "unit": "Clase 7 - Segundo Parcial",
    "question": "Relacione cada Forma Normal avanzada con el concepto que define su objetivo o naturaleza:",
    "type": "matching",
    "pairs": [
      {
        "key": "Boyce-Codd (BCNF)",
        "value": "Su objetivo es la separación de todas las claves candidatas que pudieran existir en nuevas tablas para refinar la 3FN, aunque esto puede impactar el rendimiento de las consultas."
      },
      {
        "key": "Cuarta Forma Normal (4FN)",
        "value": "Transforma los atributos que contienen conjuntos de valores múltiples (no relacionados) en dependencias funcionales, creando múltiples relaciones 1-N o N-M."
      },
      {
        "key": "Quinta Forma Normal (5FN)",
        "value": "Busca reducir la redundancia y eliminar las dependencias cíclicas que se generan cuando una clave principal compuesta por tres o más campos se relaciona de a pares."
      },
      {
        "key": "Domain Key Normal Form (DKNF)",
        "value": "Estado conceptual final que describe un modelo totalmente normalizado donde intrínsecamente no se permiten anomalías de inserción, modificación o eliminación de datos."
      }
    ],
    "hint": "BCNF refina 3FN con claves candidatas; 4FN trata dependencias multivaluadas; 5FN dependencias cíclicas; DKNF estado ideal dominio-clave.",
    "explanation": "BCNF asegura que todo determinante sea superclave. 4FN elimina dependencias multivaluadas no triviales. 5FN resuelve dependencias de proyección-unión cíclicas. DKNF garantiza consistencia total a través de dominios y claves.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 7, págs. 7-10"
  },
  {
    "id": 712,
    "classNum": 7,
    "topic": "Tipos de Anomalías",
    "unit": "Clase 7 - Segundo Parcial",
    "question": "Relacione cada tipo de anomalía con la descripción del efecto indeseable que busca prevenir la normalización:",
    "type": "matching",
    "pairs": [
      {
        "key": "Anomalía de Inserción",
        "value": "Imposibilidad de agregar un registro dependiente (hija) si aún no existe el registro de referencia en su tabla principal (padre)."
      },
      {
        "key": "Anomalía de Eliminación",
        "value": "Pérdida involuntaria de información válida al remover el registro principal, dejando registros subordinados sin su referencia correspondiente."
      },
      {
        "key": "Anomalía de Actualización",
        "value": "Riesgo de inconsistencia de datos que obliga a considerar y modificar registros relacionados en múltiples tablas al mismo tiempo."
      }
    ],
    "hint": "Inserción = no poder agregar sin datos extra; Eliminación = borrar un dato y perder otro; Actualización = inconsistencia al modificar.",
    "explanation": "Las tres anomalías clásicas del diseño desnormalizado son: inserción (no poder registrar datos parciales), borrado (perder información accesoria al borrar la principal) y actualización (inconsistencias por datos duplicados).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 7, pág. 3"
  },
  {
    "id": 713,
    "classNum": 7,
    "topic": "Secuencia de Formas Normales (0FN a 3FN)",
    "unit": "Clase 7 - Segundo Parcial",
    "question": "Indique la secuencia correcta de problemas de dependencia que deben resolverse para llevar una tabla desde la Forma Normal Cero (0FN) hasta la Tercera Forma Normal (3FN):",
    "type": "single_choice",
    "options": [
      "1FN (Valores atómicos y grupos repetitivos) -> 2FN (Dependencia funcional parcial) -> 3FN (Dependencia funcional transitiva) -> BCNF (Determinantes no superclave).",
      "1FN (Dependencias transitivas) -> 2FN (Dependencias multivaluadas) -> 3FN (Dependencias parciales de clave) -> BCNF (Valores no atómicos en tuplas).",
      "1FN (Eliminación de claves candidatas) -> 2FN (Descomposición en 5FN) -> 3FN (Uniones hash en memoria) -> BCNF (Creación de vistas materializadas).",
      "1FN (Restricción de dominios numéricos) -> 2FN (Normalización cíclica de a pares) -> 3FN (Atributos primos compuestos) -> BCNF (Escaneos secuenciales)."
    ],
    "correctAnswer": 0,
    "hint": "1FN: grupos repetidos; 2FN: dependencias parciales; 3FN: dependencias transitivas.",
    "explanation": "El camino canónico de normalización es: 1FN elimina atributos multivaluados y grupos repetidos; 2FN elimina dependencias funcionales parciales sobre claves compuestas; 3FN elimina dependencias transitivas entre atributos no primos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 7, págs. 4-6"
  },
  {
    "id": 714,
    "classNum": 7,
    "topic": "Definición Global de Normalización",
    "unit": "Clase 7 - Segundo Parcial",
    "question": "¿Cuál de las siguientes opciones describe de manera más completa tanto la definición como el principal propósito del proceso de normalización en bases de datos relacionales?",
    "type": "single_choice",
    "options": [
      "Es la secuencia de pasos diseñada para optimizar la estructura del modelo, buscando erradicar la duplicación y minimizar la información repetida.",
      "Es la etapa de diseño físico enfocada en la creación de índices para acelerar la velocidad de consulta en tablas con claves foráneas.",
      "Es la serie de transformaciones que se aplica para aumentar la velocidad de inserción y modificación de registros, priorizando el rendimiento transaccional.",
      "Son las reglas de validación implementadas para garantizar que todos los atributos dependan exclusivamente de una clave única."
    ],
    "correctAnswer": 0,
    "hint": "Secuencia de pasos para optimizar la estructura del modelo erradicando redundancia.",
    "explanation": "La normalización es una secuencia formal de pasos para optimizar la estructura del esquema relacional, con el propósito fundamental de eliminar redundancias innecesarias y anomalías de actualización.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial & Diapositiva Clase 7, pág. 2"
  },
  {
    "id": 715,
    "classNum": 7,
    "topic": "Primera Forma Normal (1FN)",
    "unit": "Clase 7 - Normalización",
    "question": "¿Qué requisito exige formalmente la Primera Forma Normal (1FN) sobre los atributos de una relación?",
    "type": "single_choice",
    "options": [
      "Que todos los atributos contengan valores atómicos e indivisibles, y que no existan grupos repetitivos ni atributos multivaluados.",
      "Que la tabla cuente con un índice de tipo árbol B+ en cada columna y que el motor relacional ejecute en modo estricto de concurrencia.",
      "Que todos los atributos no clave dependan funcionalmente de forma total de una clave primaria compuesta definida en el catálogo.",
      "Que no existan dependencias funcionales transitivas entre columnas no pertenecientes a ninguna clave candidata de la relación."
    ],
    "correctAnswer": 0,
    "hint": "Valores atómicos indivisibles, sin listas ni campos repetidos.",
    "explanation": "1FN exige que cada celda de la tabla contenga un único valor atómico indivisible, descartando atributos multivaluados, listas o grupos repetidos de columnas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 7, pág. 4"
  },
  {
    "id": 716,
    "classNum": 7,
    "topic": "Diferencia entre 3FN y BCNF",
    "unit": "Clase 7 - Normalización",
    "question": "¿Cuál es la diferencia sutil pero fundamental entre la Tercera Forma Normal (3FN) y la Forma Normal de Boyce-Codd (BCNF)?",
    "type": "single_choice",
    "options": [
      "3FN permite que en `X -> Y`, si `Y` es un atributo primo (parte de una clave candidata), `X` no necesita ser superclave; BCNF exige que `X` SEA SIEMPRE superclave.",
      "3FN solo se aplica a tablas con claves primarias simples de un solo atributo; BCNF se aplica exclusivamente a tablas con claves compuestas en disco.",
      "3FN prohíbe el uso de tipos de datos alfanuméricos en atributos no clave; BCNF permite cualquier tipo de dato siempre que se indexe con árboles B-Tree.",
      "No existe ninguna diferencia formal entre ambas definiciones; son denominaciones alternativas para el mismo teorema matemático del modelo relacional."
    ],
    "correctAnswer": 0,
    "hint": "En BCNF, TODO determinante X debe ser superclave sin excepciones para atributos primos.",
    "explanation": "3FN permite dependencias funcionales X -> Y donde Y sea parte de una clave candidata (atributo primo), aunque X no sea superclave. BCNF elimina esta concesión exigiendo que para toda dependencia no trivial, X sea estrictamente una superclave.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 7, pág. 7"
  },
  {
    "id": 717,
    "classNum": 7,
    "topic": "Cuarta Forma Normal (4FN)",
    "unit": "Clase 7 - Normalización",
    "question": "¿Qué tipo de anomalía o dependencia busca erradicar la Cuarta Forma Normal (4FN)?",
    "type": "single_choice",
    "options": [
      "Las dependencias multivaluadas no triviales (MVD: `X ->> Y`), donde dos o más atributos independientes tienen valores múltiples para una misma clave.",
      "Las dependencias funcionales transitivas entre atributos descriptivos secundarios que no forman parte de la clave primaria principal.",
      "Las anomalías de desbordamiento de búfer provocadas por operaciones de unión masiva sobre tablas desprovistas de índices primarios.",
      "Los bloqueos de concurrencia causados por transacciones que actualizan simultáneamente filas pertenecientes a particiones distintas."
    ],
    "correctAnswer": 0,
    "hint": "4FN trata dependencias multivaluadas (representadas con doble flecha ->->).",
    "explanation": "La 4FN requiere estar en 3FN o BCNF y tiene como fin eliminar dependencias multivaluadas (MVD: Multi-Valued Dependencies) independientes entre sí, separándolas en tablas distintas para evitar el producto cartesiano de valores repetidos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 7, pág. 8"
  },
  {
    "id": 718,
    "classNum": 7,
    "topic": "Descomposición sin Pérdida (Lossless Join)",
    "unit": "Clase 7 - Normalización",
    "question": "Al normalizar y descomponer una tabla R en dos relaciones R1 y R2, ¿qué propiedad matemática garantiza que al hacer un NATURAL JOIN entre R1 y R2 se reconstruya exactamente la tabla original sin tuplas espurias?",
    "type": "single_choice",
    "options": [
      "Que la descomposición sea Sin Pérdida de Información (Lossless Join Decomposition).",
      "Que ambas tablas resultantes mantengan exactamente la misma cantidad de atributos en disco.",
      "Que ninguna de las dos relaciones descompuestas pueda contener claves foráneas hacia esquemas externos.",
      "Que el proceso de descomposición duplique físicamente todas las filas de la tabla original en memoria."
    ],
    "correctAnswer": 0,
    "hint": "Lossless-Join: la intersección de atributos debe ser clave en al menos una de las tablas.",
    "explanation": "Una descomposición tiene reunión sin pérdida (lossless join) si y solo si la intersección de atributos entre R1 y R2 constituye una superclave de R1 o de R2, impidiendo que aparezcan tuplas falsas (espurias) al unirlas.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 7, pág. 2"
  },
  {
    "id": 719,
    "classNum": 7,
    "topic": "Dependencia Funcional: Definición",
    "unit": "Clase 7 - Normalización",
    "question": "En una relación R, ¿cuándo se dice formalmente que el conjunto de atributos Y depende funcionalmente de X (X -> Y)?",
    "type": "single_choice",
    "options": [
      "Cuando para cada valor de X en la relación, existe un único valor bien determinado de Y asociado (X determina a Y).",
      "Cuando el atributo Y contiene una cantidad de caracteres alfanuméricos superior a la longitud del atributo X.",
      "Cuando ambos atributos se encuentran indexados mediante la misma estructura de árbol auto-balanceado de tipo B-Tree.",
      "Cuando el atributo X se actualiza automáticamente mediante un trigger reactivo cada vez que se modifica el atributo Y."
    ],
    "correctAnswer": 0,
    "hint": "A cada valor de X le corresponde un único valor de Y.",
    "explanation": "La dependencia funcional X -> Y significa que el valor de X determina de forma unívoca el valor de Y; no pueden existir dos filas con el mismo valor en X que tengan valores diferentes en Y.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 7, pág. 2"
  },
  {
    "id": 901,
    "classNum": 9,
    "topic": "Ejecución de Triggers (BEFORE / AFTER)",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "¿Es verdadero o falso que los triggers en PostgreSQL pueden ser definidos para ejecutarse antes (`BEFORE`) o inmediatamente después (`AFTER`) de un evento de manipulación de datos?",
    "type": "single_choice",
    "options": [
      "Verdadero: Pueden configurarse para dispararse antes (BEFORE) o después (AFTER) de operaciones DML de modificación (INSERT, UPDATE, DELETE).",
      "Falso: En PostgreSQL la arquitectura del motor solo autoriza la ejecución de disparadores de forma posterior (AFTER) a la confirmación de la tupla.",
      "Falso: Los disparadores BEFORE solo están permitidos sobre vistas analíticas y se encuentran estrictamente prohibidos sobre tablas relacionales físicas.",
      "Verdadero: Siempre y cuando la tabla cuente con un procedimiento almacenado compilado en lenguaje C registrado en el catálogo del sistema."
    ],
    "correctAnswer": 0,
    "hint": "BEFORE para interceptar/validar antes de escribir; AFTER para registrar/auditar.",
    "explanation": "En PostgreSQL, los triggers pueden ejecutarse `BEFORE` (antes de que la fila sea insertada, actualizada o borrada) o `AFTER` (después de confirmarse el cambio en disco).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Diapositiva Clase 9, pág. 9"
  },
  {
    "id": 902,
    "classNum": 9,
    "topic": "Instrucción RAISE y Manejo de Excepciones",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "¿Qué nivel de severidad de la instrucción `RAISE` es el único que, por defecto, interrumpe y cancela la ejecución de una función abortando la transacción actual?",
    "type": "single_choice",
    "options": [
      "`RAISE EXCEPTION` (aborta la transacción actual y revierte todos los cambios no confirmados).",
      "`RAISE WARNING` (emite un mensaje de advertencia en consola y continúa la ejecución normal).",
      "`RAISE NOTICE` (notifica al cliente sin interrumpir el procesamiento de las instrucciones SQL).",
      "`RAISE INFO` (escribe una entrada descriptiva en el registro de depuración del servidor)."
    ],
    "correctAnswer": 0,
    "hint": "DEBUG, LOG, INFO, NOTICE y WARNING solo emiten mensajes; EXCEPTION detiene y hace rollback.",
    "explanation": "El comando `RAISE EXCEPTION 'mensaje';` reporta un error y aborta inmediatamente la transacción actual. Los niveles DEBUG, LOG, INFO, NOTICE y WARNING solo envían mensajes informativos sin detener la función.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Diapositiva Clase 9, pág. 6"
  },
  {
    "id": 903,
    "classNum": 9,
    "topic": "Recursividad en Triggers",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "¿Es verdadero o falso que un trigger en PostgreSQL puede ejecutar una función que a su vez dispare otro trigger, creando recursividad, y que es responsabilidad del programador evitar bucles infinitos?",
    "type": "single_choice",
    "options": [
      "Verdadero: Las operaciones de un trigger pueden disparar otros triggers en cascada o a sí mismo; el programador debe implementar condiciones de corte.",
      "Falso: PostgreSQL detecta y bloquea cualquier llamada en cascada entre triggers en tiempo de compilación impidiendo su definición en el esquema.",
      "Falso: Los disparadores en PostgreSQL operan en espacios de memoria aislados que impiden ejecutar cualquier sentencia DML sobre otras tablas.",
      "Verdadero: Pero la recursividad solo puede producirse cuando los triggers se ejecutan a nivel de sentencia completa (FOR EACH STATEMENT)."
    ],
    "correctAnswer": 0,
    "hint": "Cascadas de triggers: si un trigger hace UPDATE sobre otra tabla, dispara sus triggers.",
    "explanation": "Un trigger puede disparar operaciones que activen otros triggers (o incluso a sí mismo indirectamente). Es responsabilidad del desarrollador diseñar condiciones (ej. cláusula WHEN o banderas) para evitar ciclos infinitos de disparo.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Diapositiva Clase 9, pág. 8"
  },
  {
    "id": 904,
    "classNum": 9,
    "topic": "Reutilización de Lógica mediante Funciones",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "¿Es verdadero o falso que las funciones en PostgreSQL contribuyen a la reutilización al permitir que múltiples aplicaciones clientes interactúen directamente con ellas garantizando un comportamiento homogéneo?",
    "type": "single_choice",
    "options": [
      "Verdadero: Centralizan la lógica de negocio en el motor, asegurando que diversas aplicaciones clientes ejecuten exactamente las mismas reglas de datos.",
      "Falso: Las funciones almacenadas son accesibles exclusivamente por herramientas de administración local y no admiten conexiones cliente externas.",
      "Falso: Cada aplicación cliente conectada a PostgreSQL debe compilar obligatoriamente su propia copia independiente de las funciones en memoria.",
      "Verdadero: Aunque para permitir el acceso compartido se requiere otorgar permisos de superusuario del sistema operativo a cada conexión de red."
    ],
    "correctAnswer": 0,
    "hint": "Encapsular lógica en el motor garantiza que todos los clientes apliquen la misma regla.",
    "explanation": "Las funciones almacenadas permiten centralizar la lógica de negocio en el motor de base de datos, permitiendo que cualquier aplicación consumidora obtenga el mismo resultado homogéneo sin replicar código.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Diapositiva Clase 9, pág. 2"
  },
  {
    "id": 905,
    "classNum": 9,
    "topic": "Triggers BEFORE: Cancelación Silenciosa",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "En un trigger `BEFORE INSERT` o `BEFORE UPDATE` de fila, si una validación no se cumple y se desea anular la operación sobre esa fila sin lanzar una excepción ruidosa, ¿qué valor debe devolver la función?",
    "type": "single_choice",
    "options": [
      "NULL",
      "FALSE",
      "0",
      "Una cadena de texto vacía"
    ],
    "correctAnswer": 0,
    "hint": "Retornar NULL en un trigger BEFORE de fila omite silenciosamente la operación sobre ese registro.",
    "explanation": "Si una función de trigger `BEFORE` a nivel de fila retorna `NULL`, la operación de inserción, actualización o borrado sobre esa fila en particular es abortada silenciosamente (no se efectúa el cambio para esa fila). Para que proceda, debe retornar `NEW` (en INSERT/UPDATE) u `OLD` (en DELETE).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Diapositiva Clase 9, pág. 10"
  },
  {
    "id": 906,
    "classNum": 9,
    "topic": "Cláusula Condicional WHEN en Triggers",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "En la sentencia `CREATE TRIGGER`, ¿qué cláusula permite especificar una condición booleana opcional para que el trigger se active únicamente cuando dicha condición sea verdadera?",
    "type": "single_choice",
    "options": [
      "WHEN",
      "IF",
      "WHERE",
      "CONDITION"
    ],
    "correctAnswer": 0,
    "hint": "CREATE TRIGGER nombre ... FOR EACH ROW WHEN (condicion);",
    "explanation": "La cláusula `WHEN (condicion)` permite filtrar el disparo del trigger en el motor antes de invocar la función de PL/pgSQL, ahorrando sobrecarga computacional.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Diapositiva Clase 9, pág. 11"
  },
  {
    "id": 907,
    "classNum": 9,
    "topic": "Tipos de Retorno de Funciones",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "¿Es verdadero o falso que una función en PostgreSQL siempre debe devolver un tipo de dato escalar primitivo (int, text) y no puede devolver un conjunto de registros o una tabla?",
    "type": "single_choice",
    "options": [
      "Falso: Puede retornar un tipo escalar (int, text), un tipo compuesto, `TABLE(...)` o un conjunto de filas usando `SETOF tipo_dato`.",
      "Verdadero: Toda función en PL/pgSQL está limitada por el compilador del motor a devolver un único valor escalar primitivo.",
      "Falso: Las funciones en PostgreSQL nunca pueden retornar valores y solo se utilizan para registrar eventos en el log del servidor.",
      "Verdadero: Pero solo cuando la función se define con la opción de optimización de ejecución determinista de tipo `IMMUTABLE`."
    ],
    "correctAnswer": 0,
    "hint": "PostgreSQL admite funciones tabulares con RETURNS TABLE o RETURNS SETOF.",
    "explanation": "Las funciones en PostgreSQL son sumamente flexibles y pueden retornar tipos escalares, tipos compuestos (`RECORD`), conjuntos de filas (`SETOF`), o tablas completas con columnas definidas (`RETURNS TABLE(...)`).",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Segundo Parcial Oficial"
  },
  {
    "id": 908,
    "classNum": 9,
    "topic": "Eventos Soportados por Triggers",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "¿Cuál de las siguientes operaciones de manipulación de datos **NO** es un evento válido para disparar un trigger de tabla en PostgreSQL?",
    "type": "single_choice",
    "options": [
      "SELECT",
      "INSERT",
      "UPDATE",
      "DELETE"
    ],
    "correctAnswer": 0,
    "hint": "Los triggers estándar interceptan escrituras DML (INSERT, UPDATE, DELETE, TRUNCATE), no lecturas.",
    "explanation": "Los triggers de tabla en PostgreSQL soportan eventos de manipulación `INSERT`, `UPDATE`, `DELETE` y `TRUNCATE`. Las consultas de lectura `SELECT` no disparan triggers de tabla convencionales.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Diapositiva Clase 9, pág. 9"
  },
  {
    "id": 909,
    "classNum": 9,
    "topic": "Palabra Clave %TYPE",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "En la definición de parámetros o variables en PL/pgSQL, ¿qué modificador se utiliza para declarar que una variable debe adoptar automáticamente el mismo tipo de dato de una columna de una tabla existente (ej. `tabla.columna%TYPE`)?",
    "type": "single_choice",
    "options": [
      "%TYPE",
      "DATA_TYPE",
      "FIELD_TYPE",
      "COLUMN_TYPE"
    ],
    "correctAnswer": 0,
    "hint": "Símbolo de porcentaje seguido de TYPE (ej: Empleados.salario%TYPE).",
    "explanation": "El operador `%TYPE` proporciona el tipo de datos de una variable o columna de tabla. Por ejemplo, `v_salario Empleados.salario%TYPE;` asegura que la variable mantenga siempre el tipo exacto sin importar si la columna cambia de INT a NUMERIC.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Diapositiva Clase 9, pág. 3"
  },
  {
    "id": 910,
    "classNum": 9,
    "topic": "Registros Especiales OLD y NEW",
    "unit": "Clase 9 - Autoevaluación 9",
    "question": "¿Es verdadero o falso que en un trigger a nivel de sentencia (`FOR EACH STATEMENT`), el registro `OLD` contendrá los datos eliminados cuando el evento sea `DELETE`?",
    "type": "single_choice",
    "options": [
      "Falso: En triggers de sentencia (`FOR EACH STATEMENT`), NEW y OLD son NULL; solo están disponibles en triggers de fila (`FOR EACH ROW`).",
      "Verdadero: Las variables NEW y OLD contienen siempre los registros modificados sin importar si el trigger es de fila o de sentencia.",
      "Falso: NEW y OLD solo existen dentro de procedimientos almacenados autónomos invocados manualmente por el administrador del sistema.",
      "Verdadero: Pero únicamente si la instrucción DML que disparó el evento afectó a más de cien tuplas en el almacenamiento físico."
    ],
    "correctAnswer": 0,
    "hint": "OLD y NEW solo tienen datos en triggers a nivel de fila (FOR EACH ROW).",
    "explanation": "En triggers a nivel de sentencia (`FOR EACH STATEMENT`), los registros `NEW` y `OLD` no están definidos (su valor es NULL). Solo están poblados con la tupla individual cuando el trigger se define con `FOR EACH ROW`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 9 & Segundo Parcial Oficial"
  },
  {
    "id": 911,
    "classNum": 9,
    "topic": "Sintaxis de Trigger de Auditoría",
    "unit": "Clase 9 - Segundo Parcial",
    "question": "Se necesita un trigger llamado `log_insert` que se dispare después de cualquier `INSERT` en la tabla `pedidos`, ejecutándose una sola vez por sentencia. Completa las palabras clave faltantes:",
    "type": "code_completion",
    "codeSnippet": "CREATE TRIGGER log_insert\n[b1] INSERT ON pedidos\nFOR EACH [b2]\nEXECUTE PROCEDURE log_operation();",
    "blanks": [
      {
        "id": "b1",
        "placeholder": "Momento de ejecución (BEFORE/AFTER)",
        "expected": "AFTER"
      },
      {
        "id": "b2",
        "placeholder": "Granularidad (ROW/STATEMENT)",
        "expected": "STATEMENT"
      }
    ],
    "hint": "Se ejecuta después (AFTER) y una sola vez por sentencia (FOR EACH STATEMENT).",
    "explanation": "La ejecución después del evento de inserción requiere `AFTER`. Para que se ejecute una sola vez por sentencia en lugar de una vez por cada fila afectada, se indica `FOR EACH STATEMENT`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial (Pregunta 7)"
  },
  {
    "id": 912,
    "classNum": 9,
    "topic": "Función PL/pgSQL con Excepción",
    "unit": "Clase 9 - Segundo Parcial",
    "question": "Completa la función `process_order` que debe lanzar una excepción y abortar si la cantidad de un pedido es menor o igual a cero:",
    "type": "code_completion",
    "codeSnippet": "CREATE OR REPLACE FUNCTION process_order(quantity integer) RETURNS integer AS $$\nBEGIN\n  IF (quantity <= 0) [b1]\n    RAISE [b2] 'La cantidad debe ser positiva.';\n  ELSE\n    RETURN 1;\n  END IF;\nEND;\n$$ LANGUAGE plpgsql;",
    "blanks": [
      {
        "id": "b1",
        "placeholder": "Palabra clave tras el IF",
        "expected": "THEN"
      },
      {
        "id": "b2",
        "placeholder": "Nivel de interrupción",
        "expected": "EXCEPTION"
      }
    ],
    "hint": "Estructura condicional IF ... THEN y sentencia RAISE EXCEPTION.",
    "explanation": "En PL/pgSQL, la estructura condicional se abre con `IF condicion THEN`. Para reportar un error que interrumpa la ejecución y revierta los cambios se utiliza `RAISE EXCEPTION`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial (Pregunta 8)"
  },
  {
    "id": 913,
    "classNum": 9,
    "topic": "Función SQL Escalar",
    "unit": "Clase 9 - Segundo Parcial",
    "question": "Se requiere una función `calcular_iva` que, al recibir un precio (`numeric`), retorne el valor del impuesto (21% del precio). Completa la definición en lenguaje SQL:",
    "type": "code_completion",
    "codeSnippet": "CREATE FUNCTION calcular_iva(precio [b1])\nRETURNS numeric [b2] $$\n  SELECT [b3] * 0.21;\n$$ LANGUAGE [b4];",
    "blanks": [
      {
        "id": "b1",
        "placeholder": "Tipo del parámetro",
        "expected": "NUMERIC"
      },
      {
        "id": "b2",
        "placeholder": "Palabra que precede al cuerpo",
        "expected": "AS"
      },
      {
        "id": "b3",
        "placeholder": "Referencia al 1er parámetro",
        "expected": "$1"
      },
      {
        "id": "b4",
        "placeholder": "Lenguaje declarativo",
        "expected": "SQL"
      }
    ],
    "hint": "En lenguaje SQL puro, los parámetros posicionales se referencian como $1, $2, etc.",
    "explanation": "Las funciones en lenguaje SQL definen su cuerpo con `AS $$ ... $$ LANGUAGE SQL;`. Los parámetros posicionales se referencian mediante `$1`, `$2`, etc.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial (Pregunta 11)"
  },
  {
    "id": 914,
    "classNum": 9,
    "topic": "Trigger BEFORE DELETE con Cancelación",
    "unit": "Clase 9 - Segundo Parcial",
    "question": "En el trigger `BEFORE DELETE`, si el campo `is_protected` del registro a eliminar es verdadero, se debe anular la operación. Completa el código con el registro especial y la instrucción de anulación:",
    "type": "code_completion",
    "codeSnippet": "CREATE OR REPLACE FUNCTION check_deletion()\nRETURNS trigger AS $$\nBEGIN\n  IF [b1].is_protected = TRUE THEN\n    RAISE EXCEPTION 'Registro protegido, no se puede eliminar.';\n    RETURN [b2];\n  END IF;\n  RETURN [b3];\nEND;\n$$ LANGUAGE plpgsql;",
    "blanks": [
      {
        "id": "b1",
        "placeholder": "Registro antes de borrar",
        "expected": "OLD"
      },
      {
        "id": "b2",
        "placeholder": "Valor de retorno para abortar",
        "expected": "NULL"
      },
      {
        "id": "b3",
        "placeholder": "Valor de retorno para permitir borrado",
        "expected": "OLD"
      }
    ],
    "hint": "En DELETE solo existe OLD. Retornar NULL anula la operación de esa fila.",
    "explanation": "En un evento DELETE, el registro a eliminar se accede mediante `OLD`. Retornar `NULL` en un trigger BEFORE previene la eliminación de esa tupla, mientras que retornar `OLD` permite que el borrado continúe normalmente.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial (Pregunta 19)"
  },
  {
    "id": 915,
    "classNum": 9,
    "topic": "Trigger Condicional con Cláusula WHEN",
    "unit": "Clase 9 - Segundo Parcial",
    "question": "Se requiere que el trigger `audit_precio` se ejecute solo si el valor del campo `precio` ha cambiado durante la actualización. Completa la cláusula condicional:",
    "type": "code_completion",
    "codeSnippet": "CREATE TRIGGER audit_precio\nBEFORE UPDATE ON productos\nFOR EACH ROW\n[b1] ( [b2].precio IS DISTINCT FROM [b3].precio )\nEXECUTE PROCEDURE audit_change();",
    "blanks": [
      {
        "id": "b1",
        "placeholder": "Cláusula condicional",
        "expected": "WHEN"
      },
      {
        "id": "b2",
        "placeholder": "Registro anterior",
        "expected": "OLD"
      },
      {
        "id": "b3",
        "placeholder": "Registro nuevo",
        "expected": "NEW"
      }
    ],
    "hint": "Cláusula WHEN con OLD y NEW comparados mediante IS DISTINCT FROM.",
    "explanation": "La cláusula `WHEN (OLD.precio IS DISTINCT FROM NEW.precio)` evita que el trigger se dispare innecesariamente si la sentencia UPDATE no alteró el valor de la columna precio.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial (Pregunta 20)"
  },
  {
    "id": 916,
    "classNum": 9,
    "topic": "Variable Especial TG_OP",
    "unit": "Clase 9 - Funciones y Triggers",
    "question": "Dentro del cuerpo de una función de trigger en PostgreSQL (PL/pgSQL), ¿qué valor contiene la variable especial del sistema `TG_OP`?",
    "type": "single_choice",
    "options": [
      "Una cadena de texto ('INSERT', 'UPDATE', 'DELETE' o 'TRUNCATE') que identifica la operación específica que activó la ejecución del disparador.",
      "El número entero de filas afectadas por la última instrucción SQL ejecutada dentro de la transacción activa en la sesión cliente actual.",
      "Un registro especial que resguarda los valores anteriores de las columnas antes de aplicar la modificación solicitada en la sentencia DML.",
      "El identificador numérico de proceso (PID) asignado por el sistema operativo anfitrión al backend de PostgreSQL que atiende la consulta."
    ],
    "correctAnswer": 0,
    "hint": "TG_OP = Trigger Operation ('INSERT', 'UPDATE', 'DELETE', etc.).",
    "explanation": "`TG_OP` es una variable inyectada automáticamente por PostgreSQL que contiene un string ('INSERT', 'UPDATE', 'DELETE' o 'TRUNCATE') indicando la operación que activó el trigger, permitiendo utilizar `IF TG_OP = 'DELETE' THEN ...`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 9, pág. 10"
  },
  {
    "id": 917,
    "classNum": 9,
    "topic": "Parámetros IN, OUT e INOUT",
    "unit": "Clase 9 - Funciones y Triggers",
    "question": "¿Cuál es la función del modo de parámetro `INOUT` en una función de PostgreSQL?",
    "type": "single_choice",
    "options": [
      "Permite que el parámetro reciba un valor de entrada del llamador y retorne un valor modificado de salida al finalizar la función.",
      "Garantiza que el argumento permanezca inmutable impidiendo cualquier tipo de reasignación dentro del cuerpo del procedimiento.",
      "Convierte el parámetro en un puntero físico de almacenamiento secundario que actualiza directamente los sectores magnéticos del disco.",
      "Exige que el parámetro sea obligatoriamente una columna de clave primaria perteneciente a una tabla registrada en el catálogo."
    ],
    "correctAnswer": 0,
    "hint": "INOUT = entrada y salida al mismo tiempo.",
    "explanation": "El calificador `INOUT` indica que el parámetro actúa simultáneamente como argumento de entrada y como valor de retorno de la función.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 9, pág. 3"
  },
  {
    "id": 918,
    "classNum": 9,
    "topic": "Triggers INSTEAD OF",
    "unit": "Clase 9 - Funciones y Triggers",
    "question": "¿Sobre qué tipo de objetos de base de datos se definen típicamente los triggers `INSTEAD OF` en PostgreSQL para permitir que admitan sentencias INSERT, UPDATE o DELETE?",
    "type": "single_choice",
    "options": [
      "Exclusivamente sobre Vistas (Views), permitiendo interceptar operaciones de modificación y redirigir manualmente los cambios a las tablas base.",
      "Únicamente sobre Tablas Físicas particionadas, para reemplazar la inserción directa por un almacenamiento en búferes de memoria temporal.",
      "Sobre Índices B-Tree e Índices Hash, para recalcular automáticamente las claves de ordenación tras cada operación de actualización masiva.",
      "Directamente sobre Procedimientos Almacenados y Funciones Escalares, para interceptar las llamadas del cliente y registrar auditoría de red."
    ],
    "correctAnswer": 0,
    "hint": "INSTEAD OF se dispara 'en lugar de' la operación sobre una Vista no actualizable.",
    "explanation": "Los triggers `INSTEAD OF` solo pueden definirse sobre vistas. Permiten interceptar operaciones de modificación sobre vistas con JOINs o agregaciones complejas y redirigir los cambios manualmente a las tablas subyacentes.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 9, pág. 9"
  },
  {
    "id": 919,
    "classNum": 9,
    "topic": "Bloque DECLARE en PL/pgSQL",
    "unit": "Clase 9 - Funciones y Triggers",
    "question": "En una función escrita en PL/pgSQL, ¿dónde se deben declarar formalmente las variables locales y qué sección encabeza?",
    "type": "single_choice",
    "options": [
      "En la sección `DECLARE`, ubicada inmediatamente antes del bloque principal delimitado por las palabras clave `BEGIN ... END;`.",
      "En la lista de parámetros formales del encabezado de la función mediante la palabra reservada obligatoria `VARIABLE_DEF`.",
      "Dentro de cualquier parte del cuerpo de la función asignándoles valores directamente con el operador de igualdad `=`.",
      "En un fichero de texto plano independiente en el almacenamiento secundario que se compila junto con el motor relacional."
    ],
    "correctAnswer": 0,
    "hint": "DECLARE precede a BEGIN ... END;",
    "explanation": "En la estructura de PL/pgSQL, la sección `DECLARE` es opcional y precede al bloque de código ejecutable delimitado por `BEGIN` y `END;`. Allí se especifican los nombres y tipos de las variables locales.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 9, pág. 5"
  },
  {
    "id": 1001,
    "classNum": 10,
    "topic": "Definición y Rol de los Índices",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Es verdadero o falso que un índice es una estructura que almacena datos copiados del campo de la tabla sobre el cual se definió, con el objetivo de permitir encontrar algo de forma más eficiente?",
    "type": "single_choice",
    "options": [
      "Verdadero: Es una estructura auxiliar que indexa los valores de las columnas para acelerar las búsquedas sin recorrer toda la tabla.",
      "Falso: Un índice reemplaza completamente la tabla física en el catálogo y elimina de forma permanente las columnas originales del esquema.",
      "Falso: Los índices relacionales solo sirven para resguardar copias de respaldo comprimidas en repositorios de almacenamiento en la nube.",
      "Verdadero: Pero su utilización solo es permitida si la consulta proyectada carece por completo de filtros en la cláusula WHERE."
    ],
    "correctAnswer": 0,
    "hint": "Estructura auxiliar que guarda copias ordenadas de las claves para búsquedas rápidas.",
    "explanation": "Un índice es una estructura de datos asociada a una tabla que almacena copias de uno o más atributos junto a punteros a las filas originales, permitiendo al motor localizar registros rápidamente sin necesidad de un Sequential Scan.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 2"
  },
  {
    "id": 1002,
    "classNum": 10,
    "topic": "Métodos de Join: Merge Join",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Es verdadero o falso que el `Merge Join` es un método de unión muy útil para tablas grandes porque no requiere que la tabla completa se cargue en memoria y evita realizar múltiples recorridos cuadráticos sobre las tablas?",
    "type": "single_choice",
    "options": [
      "Verdadero: Si ambas tablas están ordenadas por las claves de unión, el motor las recorre sincrónicamente en una sola pasada eficiente.",
      "Falso: El método Merge Join exige de manera obligatoria que ambas tablas se carguen por completo en la memoria volátil de trabajo.",
      "Falso: La combinación por mezcla solo es aplicable cuando las relaciones participantes almacenan menos de diez tuplas en disco.",
      "Verdadero: Pero únicamente en motores que prescindan del control de integridad referencial mediante claves foráneas en las tablas."
    ],
    "correctAnswer": 0,
    "hint": "Merge Join ordena y recorre en paralelo sincronizado como dos listas ordenadas.",
    "explanation": "El algoritmo Merge Join ordena ambas tablas por las columnas de enlace (o aprovecha índices ordenados preexistentes) y luego avanza en paralelo sobre ambos flujos. Es sumamente escalable para conjuntos de datos masivos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 15"
  },
  {
    "id": 1003,
    "classNum": 10,
    "topic": "Costo DML de los Índices",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Es verdadero o falso que una tabla con muchos índices puede experimentar una degradación en el rendimiento durante operaciones de alta, baja o modificación de registros (INSERT/UPDATE/DELETE)?",
    "type": "single_choice",
    "options": [
      "Verdadero: Cada operación de escritura obliga al motor a reestructurar y actualizar todos los árboles de índices asociados a la tabla.",
      "Falso: Los índices aceleran sustancialmente tanto las lecturas como todas las escrituras sin generar ningún costo adicional de recursos.",
      "Falso: Las estructuras de índices solo se actualizan una vez al año durante las ventanas nocturnas de mantenimiento preventivo.",
      "Verdadero: Pero la degradación solo se manifiesta cuando los índices definidos en la relación son de tipo árbol B+ espacial."
    ],
    "correctAnswer": 0,
    "hint": "Las lecturas se aceleran, pero cada INSERT/UPDATE/DELETE debe actualizar los árboles de índices.",
    "explanation": "Existe un compromiso de diseño (trade-off): los índices aceleran las consultas SELECT, pero cada INSERT, DELETE y UPDATE sobre columnas indexadas debe mantener actualizadas las estructuras en árbol, agregando sobrecarga de E/S y CPU.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 2"
  },
  {
    "id": 1004,
    "classNum": 10,
    "topic": "Tipos de Índices: B-Tree",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Cuál de los siguientes tipos de índices es el predeterminado en PostgreSQL, ideal para columnas con valores únicos o alta cardinalidad y capaz de proveer los datos ordenados?",
    "type": "single_choice",
    "options": [
      "B-Tree",
      "GIN (Generalized Inverted Index)",
      "Hash",
      "GiST (Generalized Search Tree)"
    ],
    "correctAnswer": 0,
    "hint": "Árbol balanceado estándar de PostgreSQL, soporta =, <, <=, >, >= y ORDER BY.",
    "explanation": "El índice `B-Tree` es el tipo por defecto en casi todos los motores relacionales. Mantiene las claves en un árbol balanceado ordenado, ideal para comparaciones de igualdad, rangos (`BETWEEN`, `<`, `>`) y para satisfacer cláusulas `ORDER BY` sin ordenar en memoria.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 5"
  },
  {
    "id": 1005,
    "classNum": 10,
    "topic": "Comando ANALYZE",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Qué comando ayuda al motor de base de datos a recolectar estadísticas sobre la distribución de datos en las tablas, siendo crucial para que el optimizador elija los mejores planes de consulta?",
    "type": "single_choice",
    "options": [
      "ANALYZE",
      "EXPLAIN",
      "CHECKDB",
      "REINDEX"
    ],
    "correctAnswer": 0,
    "hint": "Recolecta estadísticas de distribución de datos (frecuencia, histogramas) para el catálogo pg_statistic.",
    "explanation": "El comando `ANALYZE` examina el contenido de las tablas para recopilar estadísticas sobre la distribución de valores en sus columnas. El planificador de consultas utiliza estas estadísticas para estimar costos y elegir el mejor plan de ejecución.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 16"
  },
  {
    "id": 1006,
    "classNum": 10,
    "topic": "Influencia en Métodos de Escaneo",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Es verdadero o falso que es posible influir en el planificador de consultas en PostgreSQL mediante la configuración de parámetros como `enable_seqscan = off` para pruebas de optimización?",
    "type": "single_choice",
    "options": [
      "Verdadero: Parámetros de sesión como `enable_seqscan`, `enable_indexscan` o `enable_hashjoin` permiten forzar o desalentar métodos específicos para pruebas.",
      "Falso: El optimizador de consultas es una caja negra estática inmodificable donde el administrador no puede alterar ningún parámetro de ejecución.",
      "Falso: `enable_seqscan` es una directiva del núcleo del sistema operativo anfitrión que no guarda ninguna relación con el motor de base de datos.",
      "Verdadero: Pero la modificación de estos parámetros solo está autorizada para conexiones remotas que operen con privilegios de solo lectura."
    ],
    "correctAnswer": 0,
    "hint": "PostgreSQL permite activar/desactivar heurísticas de escaneo en la sesión con SET enable_...",
    "explanation": "PostgreSQL cuenta con directivas de configuración como `SET enable_seqscan = off;` que aumentan artificialmente el costo estimado del escaneo secuencial para observar si el motor optaría por usar un índice disponible.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 16"
  },
  {
    "id": 1007,
    "classNum": 10,
    "topic": "Comando EXPLAIN",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Cuál de los siguientes comandos de PostgreSQL permite visualizar, evaluar y entender el plan de ejecución que el motor de la base de datos genera para una consulta SQL?",
    "type": "single_choice",
    "options": [
      "EXPLAIN",
      "ANALYZE",
      "SHOW PLAN",
      "VACUUM"
    ],
    "correctAnswer": 0,
    "hint": "EXPLAIN muestra el árbol de nodos de ejecución; EXPLAIN ANALYZE además ejecuta la query midiendo tiempos.",
    "explanation": "El comando `EXPLAIN [query]` muestra el árbol del plan de ejecución generado por el optimizador, detallando costos estimados, nodos de escaneo (Seq Scan, Index Scan) y métodos de unión elegidos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 10"
  },
  {
    "id": 1008,
    "classNum": 10,
    "topic": "Métodos de Join: Hash Join",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Qué método de join construye una tabla hash en memoria con las filas de la relación más pequeña para luego recorrer la otra relación realizando búsquedas de coincidencia en tiempo O(1)?",
    "type": "single_choice",
    "options": [
      "Hash Join",
      "Merge Join",
      "Nested Loops Sequential Scan",
      "Bitmap Index Scan"
    ],
    "correctAnswer": 0,
    "hint": "Crea una estructura hash en memoria temporal.",
    "explanation": "El `Hash Join` carga la tabla de menor tamaño en una tabla hash en memoria y luego recorre secuencialmente la tabla mayor buscando coincidencias en tiempo casi constante, siendo muy veloz cuando la tabla de hash entra en `work_mem`.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 14"
  },
  {
    "id": 1009,
    "classNum": 10,
    "topic": "Naturaleza Declarativa de SQL",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Es verdadero o falso que SQL es un lenguaje declarativo, lo que significa que el desarrollador especifica QUÉ datos desea obtener, delegando en el optimizador del motor el CÓMO acceder a ellos?",
    "type": "single_choice",
    "options": [
      "Verdadero: El programador declara el resultado esperado y el optimizador genera y elige el plan de acceso más económico.",
      "Falso: SQL es un lenguaje imperativo donde el desarrollador debe codificar manualmente los bucles de recorrido de punteros en disco.",
      "Falso: En las consultas SQL el motor relacional consulta interactivamente al usuario qué algoritmo aplicar fila por fila en memoria.",
      "Verdadero: Pero únicamente cuando las consultas invocan procedimientos almacenados compilados en bibliotecas nativas de C++."
    ],
    "correctAnswer": 0,
    "hint": "Declarativo: decimos QUÉ queremos; el optimizador define CÓMO obtenerlo.",
    "explanation": "SQL es declarativo: el usuario redacta la consulta expresando el conjunto deseado sin programar los algoritmos de búsqueda ni el orden de lectura de bloques físicos; esa tarea recae exclusivamente en el planificador.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 9"
  },
  {
    "id": 1010,
    "classNum": 10,
    "topic": "Nested Loops Index Scan",
    "unit": "Clase 10 - Autoevaluación 10",
    "question": "¿Es verdadero o falso que un `Nested Loops Index Scan` es necesariamente una mala opción de rendimiento que el motor de base de datos debe evitar en todas las circunstancias?",
    "type": "single_choice",
    "options": [
      "Falso: Es sumamente eficiente cuando la tabla exterior procesa pocas tuplas y la tabla interior dispone de un índice por la clave de unión.",
      "Verdadero: Los bucles anidados generan de forma obligatoria un consumo del 100% de CPU y cuelgan el servicio del servidor relacional.",
      "Verdadero: Solo se tolera la ejecución de bucles anidados en sistemas embebidos de tiempo real que carecen de memoria secundaria.",
      "Falso: Pero únicamente si ambas relaciones participantes en la combinación contienen menos de tres atributos en sus esquemas."
    ],
    "correctAnswer": 0,
    "hint": "Si la tabla externa tiene 5 filas y la interna busca por índice B-tree, es casi instantáneo.",
    "explanation": "El método Nested Loops con Index Scan es altamente eficiente cuando la relación exterior tiene un número reducido de filas (o fue previamente filtrada) y la relación interior se accede mediante un índice B-Tree puntual.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 10 & Diapositiva Clase 10, pág. 13"
  },
  {
    "id": 1011,
    "classNum": 10,
    "topic": "Métodos de Operación de Consulta",
    "unit": "Clase 10 - Segundo Parcial",
    "question": "Relacione cada método de operación de consulta con la descripción que mejor se ajusta a su funcionamiento o uso principal:",
    "type": "matching",
    "pairs": [
      {
        "key": "Index Scan",
        "value": "Estrategias que utiliza índices, permitiendo al motor acceder directamente solo a los bloques de datos relevantes, mejorando la velocidad de recuperación cuando se aplica un filtro selectivo."
      },
      {
        "key": "Hash Join",
        "value": "Método de unión que construye una estructura temporal en memoria con los datos de una de las tablas, lo que luego permite realizar comparaciones muy rápidas con los registros de la segunda tabla."
      },
      {
        "key": "Nested Loops",
        "value": "Técnica de unión que implica comparar las filas de una tabla contra las filas de la otra en iteraciones anidadas. Solo es considerada eficiente si las tablas son de tamaño reducido o si se utiliza la información indexada para reducir las filas a comparar."
      },
      {
        "key": "Sequential Scan",
        "value": "Método que se selecciona cuando la tabla es muy pequeña o cuando el resultado de la consulta involucra una gran proporción de los datos totales de la misma."
      },
      {
        "key": "Merge Join",
        "value": "Estrategia de unión utilizada para conjuntos de datos extensos. Requiere que ambas tablas involucradas estén ordenadas (o que se ordenen si no tienen un índice que provea orden) para recorrerlas sincrónicamente y encontrar las filas coincidentes."
      }
    ],
    "hint": "Seq Scan = toda la tabla; Index Scan = punteros por clave; Hash Join = hash en memoria; Merge Join = ordenado síncrono; Nested Loops = iteración anidada.",
    "explanation": "Sequential Scan es ideal para escaneos masivos (>40%). Index Scan para selectividad alta. Hash Join para tablas que caben en memoria. Merge Join para grandes conjuntos ordenados. Nested Loops para conjuntos reducidos indexados.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial (Pregunta 18)"
  },
  {
    "id": 1012,
    "classNum": 10,
    "topic": "Tipos de Índices Especializados",
    "unit": "Clase 10 - Segundo Parcial",
    "question": "Relaciona cada tipo de índice con su descripción o uso principal, basándote en su funcionalidad:",
    "type": "matching",
    "pairs": [
      {
        "key": "Generalized Search Tree (GIST)",
        "value": "Utilizado para la indexación de información espacial, arrays, o datos complejos que no se ajustan al modelo B-Tree."
      },
      {
        "key": "B-Tree",
        "value": "Estructura ideal para campos que contienen datos que no se repiten y facilita el orden de los resultados."
      },
      {
        "key": "Generalized Inverted Index (GIN)",
        "value": "Más adecuado para indexar valores compuestos y columnas que presentan una gran cantidad de datos repetidos."
      }
    ],
    "hint": "GiST para geometrías/espacial/arrays; GIN para texto completo, JSON y valores invertidos; B-Tree para orden y unicidad.",
    "explanation": "B-Tree es el índice clásico ordenado. GIN (Generalized Inverted Index) indexa elementos individuales dentro de contenedores compuestos (Full Text Search, JSONB, arrays). GiST (Generalized Search Tree) sirve para datos multidimensionales y geométricos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial (Pregunta 23)"
  },
  {
    "id": 1013,
    "classNum": 10,
    "topic": "Función Esencial del Motor en Optimización",
    "unit": "Clase 10 - Segundo Parcial",
    "question": "Considerando que SQL es un lenguaje declarativo, ¿cuál es la función esencial del motor de base de datos en la optimización de consultas?",
    "type": "single_choice",
    "options": [
      "Evaluar diversos planes de ejecución para una consulta específica y seleccionar el que tenga el costo estimado más bajo.",
      "Generar el árbol de ejecución de la consulta, donde la interpretación de los nodos se realiza desde la raíz hacia las hojas (de arriba hacia abajo).",
      "Utilizar siempre la indexación disponible para garantizar que el acceso a los datos sea lo más rápido posible sin evaluar costos.",
      "Forzar el uso de índices de forma predeterminada, a menos que se utilicen comandos especiales como SET enable_seqscan."
    ],
    "correctAnswer": 0,
    "hint": "El optimizador genera múltiples planes y escoge el de menor costo estimado (CPU + I/O).",
    "explanation": "El procesador de consultas evalúa múltiples rutas y métodos de acceso equivalentes, asignándoles un costo estimado en función de las estadísticas de los datos, y selecciona el plan con el menor costo total proyectado.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Segundo Parcial Oficial (Pregunta 24)"
  },
  {
    "id": 1014,
    "classNum": 10,
    "topic": "Operación CLUSTER",
    "unit": "Clase 10 - Índices",
    "question": "¿En qué consiste la operación `CLUSTER nombre_tabla USING nombre_indice;` en PostgreSQL?",
    "type": "single_choice",
    "options": [
      "En reordenar físicamente los registros de la tabla en disco de acuerdo con el orden establecido por un índice previamente creado.",
      "En configurar un clúster de servidores distribuidos en la nube para balancear peticiones transaccionales entre múltiples nodos.",
      "En cifrar con algoritmos de clave asimétrica la totalidad de las tablas y vistas del esquema corporativo en el almacenamiento.",
      "En desfragmentar los sectores de memoria RAM del sistema operativo anfitrión para liberar páginas de datos no utilizadas."
    ],
    "correctAnswer": 0,
    "hint": "CLUSTER reordena físicamente la tabla en disco según el índice.",
    "explanation": "`CLUSTER` reordena físicamente las filas de la tabla en el almacenamiento secundario según la secuencia de un índice B-Tree, permitiendo que las lecturas por rango sobre ese índice requieran muchos menos accesos a páginas distintas del disco.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 10, pág. 8"
  },
  {
    "id": 1015,
    "classNum": 10,
    "topic": "Índices Parciales (Partial Indexes)",
    "unit": "Clase 10 - Índices",
    "question": "¿Qué ventaja principal ofrece un Índice Parcial (`CREATE INDEX ... WHERE condicion;`) en PostgreSQL?",
    "type": "single_choice",
    "options": [
      "Indexa solo un subconjunto de filas que cumplen una condición WHERE, reduciendo el tamaño del índice en disco y el costo de mantenimiento en escrituras.",
      "Permite construir índices relacionales sin contar con permisos administrativos en el catálogo del sistema de gestión de base de datos.",
      "Garantiza que las consultas de proyección ejecutadas sobre la tabla nunca consuman espacio en la memoria volátil compartida del motor.",
      "Convierte de forma automática la relación indexada en un archivo de solo lectura impidiendo cualquier operación de modificación futura."
    ],
    "correctAnswer": 0,
    "hint": "Indexa solo las filas relevantes (ej: WHERE activo = true), ahorrando espacio y costo de escritura.",
    "explanation": "Un índice parcial se construye sobre un subconjunto de filas definido por una cláusula condicional. Esto ahorra valioso espacio en disco y evita el costo de actualizar el índice cuando se modifican filas que no cumplen la condición.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Resumen 2do Parcial, pág. 11"
  },
  {
    "id": 1016,
    "classNum": 10,
    "topic": "Cláusula CREATE INDEX CONCURRENTLY",
    "unit": "Clase 10 - Índices",
    "question": "¿Cuál es el beneficio de utilizar la cláusula `CONCURRENTLY` al ejecutar `CREATE INDEX CONCURRENTLY ...` en una base de datos en producción?",
    "type": "single_choice",
    "options": [
      "Permite construir el índice sin bloquear las operaciones concurrentes de lectura ni de escritura (INSERT/UPDATE/DELETE) sobre la tabla.",
      "Reduce el tiempo total de compilación y creación del índice a cero microsegundos sin consumir ciclos de CPU en el servidor.",
      "Genera dos réplicas idénticas del árbol del índice en particiones físicas independientes de almacenamiento secundario en disco.",
      "Elimina permanentemente la totalidad de los registros duplicados de la relación antes de crear las páginas de datos en el catálogo."
    ],
    "correctAnswer": 0,
    "hint": "CONCURRENTLY no adquiere bloqueo exclusivo sobre la tabla.",
    "explanation": "Por defecto, `CREATE INDEX` adquiere un bloqueo exclusivo que impide escrituras en la tabla hasta finalizar. `CONCURRENTLY` realiza pasadas adicionales para crear el índice permitiendo que las transacciones continúen escribiendo normalmente.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 10, pág. 3"
  },
  {
    "id": 1017,
    "classNum": 10,
    "topic": "EXPLAIN vs EXPLAIN ANALYZE",
    "unit": "Clase 10 - Optimización",
    "question": "¿Cuál es la diferencia crucial entre ejecutar `EXPLAIN consulta;` y ejecutar `EXPLAIN ANALYZE consulta;` en PostgreSQL?",
    "type": "single_choice",
    "options": [
      "`EXPLAIN` solo muestra el plan estimado sin ejecutar la consulta; `EXPLAIN ANALYZE` ejecuta la consulta en tiempo real y muestra los tiempos reales (actual time) y filas reales obtenidas.",
      "`EXPLAIN` ejecuta la consulta tres veces en memoria intermedia; `EXPLAIN ANALYZE` solo verifica errores léxicos y sintácticos en el texto de la sentencia declarativa enviada.",
      "`EXPLAIN ANALYZE` solo es compatible con motores Microsoft SQL Server, mientras que PostgreSQL solo implementa el comando EXPLAIN básico en entornos de producción.",
      "`EXPLAIN` modifica permanentemente los registros de la tabla en disco, mientras que `EXPLAIN ANALYZE` se comporta como una sentencia de solo lectura en el motor relacional."
    ],
    "correctAnswer": 0,
    "hint": "ANALYZE realmente ejecuta la sentencia y mide tiempos reales en milisegundos.",
    "explanation": "Una sentencia `EXPLAIN` simple genera la estimación del planificador basada en estadísticas. `EXPLAIN ANALYZE` ejecuta realmente la consulta en el motor, descartando la salida de datos pero midiendo el tiempo de reloj exacto y las filas reales por nodo.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 10, pág. 10"
  },
  {
    "id": 1018,
    "classNum": 10,
    "topic": "Interpretación de Costos en EXPLAIN",
    "unit": "Clase 10 - Optimización",
    "question": "En la salida de un plan de consulta `Seq Scan on Empleados (cost=0.00..18.50 rows=800 width=36)`, ¿qué representan los dos valores numéricos `0.00` y `18.50`?",
    "type": "single_choice",
    "options": [
      "`0.00` es el costo de inicio estimado antes de retornar la primera tupla; `18.50` es el costo total estimado para procesar el nodo completo.",
      "`0.00` es el costo operativo en dólares y `18.50` representa la tarifa de procesamiento en euros cobrada por el proveedor de nube.",
      "`0.00` es el consumo de memoria volátil RAM en megabytes y `18.50` es el porcentaje de utilización de los núcleos de CPU en el host.",
      "`0.00` indica que no existieron fallas de integridad y `18.50` es el tiempo exacto en milisegundos que demoró la consulta en el cliente."
    ],
    "correctAnswer": 0,
    "hint": "cost=costo_arranque..costo_total en unidades arbitrarias de E/S de página.",
    "explanation": "La tupla `cost=X..Y` expresa el costo estimado en unidades de lectura de página de disco: X es el costo de arranque (startup cost) antes de devolver la primera fila, e Y es el costo total estimado de finalizar el nodo.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 10, pág. 10"
  },
  {
    "id": 1019,
    "classNum": 10,
    "topic": "Cuándo NO conviene crear un índice",
    "unit": "Clase 10 - Índices",
    "question": "¿En cuál de los siguientes escenarios un índice NO resulta recomendable o el optimizador preferirá un Sequential Scan?",
    "type": "single_choice",
    "options": [
      "En tablas pequeñas (pocas páginas en disco) o en columnas con muy baja selectividad donde la consulta recupera más del 40% de los registros de la tabla.",
      "En columnas que corresponden a claves primarias numéricas enteras con valores correlativos consultadas mediante el operador de igualdad.",
      "En relaciones de gran escala con más de diez millones de tuplas cuando una aplicación busca un único registro específico mediante su ID.",
      "En atributos de texto variable de tipo VARCHAR indexados con árboles B-Tree cuando se aplican condiciones de búsqueda puntual en el WHERE."
    ],
    "correctAnswer": 0,
    "hint": "Baja selectividad (>40% de la tabla) o tablas muy pequeñas no justifican el overhead del índice.",
    "explanation": "Los índices no son convenientes en tablas reducidas (donde leer toda la tabla secuencialmente insume pocos bloques de disco) ni en columnas con baja selectividad (como género o booleanos), donde el optimizador prefiere Sequential Scan ya que recuperar más del 40% por índice implicaría saltos aleatorios de cabezal más costosos.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 10, pág. 11 & Resumen 2do Parcial, pág. 12"
  },
  {
    "id": 1020,
    "classNum": 10,
    "topic": "Comando VACUUM",
    "unit": "Clase 10 - Índices y Optimización",
    "question": "¿Cuál es el objetivo principal del comando de mantenimiento `VACUUM;` en PostgreSQL?",
    "type": "single_choice",
    "options": [
      "Recuperar y marcar como reutilizable el espacio ocupado por tuplas muertas (actualizadas o eliminadas por MVCC) y actualizar el mapa de visibilidad.",
      "Eliminar físicamente todas las tablas del esquema que lleven más de treinta días sin recibir consultas de lectura por parte de usuarios.",
      "Comprimir los ficheros de registro del sistema operativo anfitrión en archivos tar.gz para liberar espacio en el volumen de arranque.",
      "Interrumpir de manera forzada todas las conexiones transaccionales concurrentes que superen los diez segundos de tiempo de ejecución."
    ],
    "correctAnswer": 0,
    "hint": "Limpieza de tuplas muertas creadas por el versionado MVCC.",
    "explanation": "En PostgreSQL MVCC, los DELETE y UPDATE dejan tuplas muertas en disco. El comando `VACUUM` limpia estas tuplas obsoletas para que el espacio en los bloques pueda ser reutilizado por nuevas inserciones sin inflar el tamaño de la base.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Diapositiva Clase 10, pág. 16"
  }
];

// Compatibilidad con navegador web y Node.js (pruebas unitarias)
if (typeof window !== 'undefined') {
  window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_DATABASE;
}

