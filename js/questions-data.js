// Antigravity BDD: Unified Question Database (203 Verified Questions)
// Includes all official syllabus questions and all Autoevaluaciones (Classes 1 to 5).
// Expertly balanced option lengths, interactive table contexts, verified infographics, and high pedagogical quality.

const QUESTIONS_DATABASE = [
  {
    "id": 101,
    "classNum": 1,
    "topic": "SGBD & Arquitectura",
    "unit": "Clase 1",
    "question": "¿Cuál es el objetivo primordial de un Sistema de Gestión de Bases de Datos (SGBD / DBMS)?",
    "options": [
      "Servir de interfaz entre los usuarios/aplicaciones y la base de datos física, garantizando almacenamiento eficiente, seguridad, concurrencia e integridad.",
      "Administrar exclusivamente la memoria caché, los hilos de ejecución de la CPU y la paginación del sistema operativo host para acelerar la renderización gráfica.",
      "Proveer un compilador nativo de código fuente C++ que transforma peticiones web en archivos binarios comprimidos sin ningún tipo de esquema relacional.",
      "Gestionar la topología de red local, los protocolos de enrutamiento TCP/IP y los cortafuegos físicos para balancear la carga de peticiones HTTP en servidores."
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
      "Incompatibilidad con cualquier lenguaje estructurado y requerimiento de almacenamiento en cintas magnéticas.",
      "Redundancia e inconsistencia de datos, dificultad para acceder a los datos y anomalías de acceso concurrente.",
      "Imposibilidad absoluta de almacenar más de cien registros por archivo en cualquier soporte magnético o disco.",
      "Obligatoriedad de recompilar el kernel del sistema operativo ante cada nueva consulta de información registrada."
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
      "La velocidad en milisegundos con la que el motor procesa múltiples funciones de agregación simultáneas.",
      "La duplicación innecesaria de datos en varios archivos, que provoca inconsistencias al modificar información.",
      "El mecanismo de cifrado asimétrico que resguarda los datos sensibles en tránsito entre cliente y servidor.",
      "La capacidad del motor de base de datos para recuperarse automáticamente ante cortes repentinos de energía."
    ],
    "correctAnswer": 1,
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
      "La capacidad de alterar el esquema lógico o las estructuras físicas de almacenamiento sin necesidad de modificar las aplicaciones.",
      "La propiedad de alta disponibilidad que permite a la base de datos operar en servidores remotos sin suministro eléctrico ni acceso a internet.",
      "La facultad de ejecutar consultas analíticas complejas directamente sobre los registros del disco sin la intervención del motor SGBD.",
      "El aislamiento total de las tablas que impide relacionar entidades de diferentes esquemas mediante el uso de claves foráneas relacionales."
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
      "El esquema es el contenido de datos en un instante, mientras que la instancia es la estructura global de tablas e índices.",
      "El esquema es la estructura y diseño lógico de la base de datos; la instancia es el conjunto de datos reales en un momento dado.",
      "El esquema representa los permisos otorgados a los usuarios; la instancia representa los tipos de datos numéricos y de texto.",
      "No existe diferencia conceptual; ambos términos son sinónimos intercambiables en la terminología del modelo relacional."
    ],
    "correctAnswer": 1,
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
      "Diseñar interfaces gráficas de usuario y escribir hojas de estilo CSS para aplicaciones web de comercio electrónico.",
      "Administrar, asegurar, respaldar, monitorear el rendimiento y mantener la disponibilidad global del sistema de base de datos.",
      "Desarrollar controladores de dispositivos y controladores de hardware para impresoras y placas madre del servidor.",
      "Configurar cables de red y conmutadores físicos en las oficinas de los clientes finales de la organización."
    ],
    "correctAnswer": 1,
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
      "Nivel Físico (hardware), Nivel de Enlace de Datos (red) y Nivel de Aplicación (software de usuario).",
      "Nivel Externo (vistas de usuario), Nivel Conceptual (esquema lógico global) y Nivel Interno (almacenamiento físico).",
      "Nivel de Entrada (formularios), Nivel de Proceso (algoritmos en memoria) y Nivel de Salida (reportes impresos).",
      "Nivel de Transacción (ACID), Nivel de Concurrencia (bloqueos) y Nivel de Persistencia (archivos en disco)."
    ],
    "correctAnswer": 1,
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
      "Un grafo dirigido donde cada nodo representa una entidad individual y los punteros físicos en disco definen los caminos de acceso.",
      "Un conjunto de relaciones (tablas) compuestas por tuplas (filas) y atributos (columnas), fundamentadas en la lógica de predicados.",
      "Una jerarquía arborescente estricta donde cada registro hijo posee obligatoriamente un único registro padre en la estructura física.",
      "Un repositorio de documentos no estructurados en formato JSON sin restricciones de integridad referencial ni tipos de datos fijados."
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
      "Una estructura de árbol invertido con relaciones padre-hijo (1:N), donde cada hijo tiene un único padre.",
      "Una red compleja de múltiples conexiones libres donde cualquier registro puede tener múltiples padres e hijos.",
      "Una matriz bidimensional de datos no ordenados vinculados exclusivamente mediante sentencias DML de inserción.",
      "Un almacén de clave-valor optimizado para lecturas rápidas en memoria RAM sin persistencia en disco secundario."
    ],
    "correctAnswer": 0,
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
      "Superar la limitación de padre único del modelo jerárquico, permitiendo relaciones N:M mediante registros y conjuntos.",
      "Reemplazar las sentencias SQL tradicionales por consultas imperativas escritas en lenguaje binario de bajo nivel.",
      "Eliminar por completo la necesidad de almacenar datos en discos magnéticos mediante compresión en memoria.",
      "Impedir que más de un usuario consulte la base de datos simultáneamente para evitar condiciones de carrera."
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
      "DDL define y modifica estructuras de la base de datos (CREATE, ALTER); DML manipula los datos (SELECT, INSERT, UPDATE).",
      "DDL administra permisos y accesos (GRANT, REVOKE); DML controla transacciones y bloqueos de filas (COMMIT, ROLLBACK).",
      "DDL se utiliza únicamente en motores NoSQL; DML se emplea con exclusividad en bases de datos relacionales tradicionales.",
      "DDL es el lenguaje de definición de datos del cliente; DML es el protocolo de comunicación de bajo nivel del servidor."
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
      "Un atributo que puede contener valores repetidos siempre que pertenezca a transacciones de solo lectura.",
      "Un atributo (o conjunto de atributos) que identifica de manera unívoca a cada tupla en una relación y no admite NULL.",
      "Una columna de tipo texto utilizada exclusivamente para almacenar comentarios descriptivos de los usuarios.",
      "Un índice secundario opcional que acelera las consultas de ordenamiento sin garantizar unicidad de registros."
    ],
    "correctAnswer": 1,
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
      "Un atributo en una tabla hija que hace referencia a la clave primaria de una tabla padre, asegurando integridad referencial.",
      "Una contraseña de acceso administrativo cifrada utilizada por los usuarios remotos para conectarse al servidor de base de datos.",
      "Una clave generada por el sistema operativo que cifra los archivos de datos en el almacenamiento secundario del disco duro.",
      "Una variable temporal de sesión que almacena los resultados intermedios de consultas complejas con múltiples agregaciones."
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
      "Un script de respaldo nocturno que comprime todos los archivos de la base de datos en un archivo ejecutable.",
      "Una unidad lógica de trabajo compuesta por una o más operaciones SQL que deben ejecutarse todas o ninguna (todo o nada).",
      "Una instrucción SELECT de solo lectura que consulta información sin generar registros en el log transaccional.",
      "Un procedimiento almacenado que crea automáticamente nuevas tablas temporales cada vez que un usuario inicia sesión."
    ],
    "correctAnswer": 1,
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
      "Asincronismo de transacciones, Concurrencia distribuida, Integridad referencial de datos y Replicación activa en múltiples nodos del cluster.",
      "Atomicidad (todo o nada), Consistencia (estado válido), Aislamiento (independencia) y Durabilidad (persistencia ante fallos del sistema).",
      "Autenticación segura de usuarios, Cifrado en reposo, Indexación automática de columnas y Desfragmentación periódica del disco físico.",
      "Accesibilidad multiplataforma, Compatibilidad con el estándar ANSI SQL, Integración continua de datos y Disponibilidad ininterrumpida."
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
      "Permitir que múltiples transacciones accedan a los datos simultáneamente sin generar inconsistencias ni lecturas sucias.",
      "Forzar a que todas las consultas de los usuarios se ejecuten de manera estrictamente secuencial una tras otra.",
      "Eliminar automáticamente los datos duplicados cada vez que dos transacciones intentan leer la misma tabla física.",
      "Reiniciar el motor de base de datos cuando se detecta una condición de bloqueo mutuo (deadlock) entre procesos."
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
      "Un repositorio de metadatos que almacena información descriptiva sobre las tablas, columnas, restricciones e índices.",
      "Un glosario en formato PDF para los usuarios que explica cómo escribir consultas básicas con la cláusula WHERE.",
      "Un archivo de texto plano donde se registran las contraseñas sin cifrar de todos los operadores del sistema.",
      "Un módulo externo del sistema operativo encargado de verificar la ortografía en las columnas de tipo VARCHAR."
    ],
    "correctAnswer": 0,
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
      "Tablas físicas independientes que duplican el almacenamiento en disco para acelerar las lecturas de reportes.",
      "Consultas almacenadas como tablas virtuales que simplifican consultas complejas y restringen el acceso a datos sensibles.",
      "Pantallas gráficas del sistema operativo donde los usuarios visualizan los logs de eventos del servidor en vivo.",
      "Archivos temporales generados en la memoria RAM que se destruyen automáticamente al cerrar la sesión de red."
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
      "OLTP está optimizado para transacciones rápidas y concurrentes del día a día; OLAP para consultas analíticas sobre grandes volúmenes.",
      "OLTP solo admite operaciones de lectura en memoria; OLAP se utiliza exclusivamente para inserciones masivas en discos magnéticos.",
      "OLTP procesa datos históricos de múltiples años; OLAP se encarga del registro transaccional en tiempo real de compras y pagos.",
      "OLTP requiere lenguajes de programación imperativos; OLAP utiliza exclusivamente sentencias DDL para manipular esquemas relacionales."
    ],
    "correctAnswer": 0,
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
      "Desarrollar el frontend visual y diseñar los logotipos corporativos de las aplicaciones web y móviles de la empresa.",
      "Monitorear el rendimiento, definir políticas de respaldo, gestionar la seguridad y garantizar la integridad del SGBD.",
      "Escribir las campañas de marketing digital y configurar las cuentas de correo electrónico de los empleados.",
      "Reparar físicamente los componentes de hardware dañados y reemplazar fuentes de alimentación en las oficinas."
    ],
    "correctAnswer": 1,
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
      "20 bytes obligatorios, porque ninguna vista puede tener menos bytes que el registro físico subyacente.",
      "28 bytes totales, al sumarse 8 bytes adicionales de metadatos de seguridad por cada vista externa.",
      "0 bytes, ya que las vistas externas residen en memoria virtual sin representar tamaño de datos lógicos."
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
      "Durabilidad (Durability)."
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
      "La discrepancia de velocidad de transmisión entre conexiones Ethernet locales y enlaces de fibra óptica dedicados.",
      "El desajuste conceptual y estructural entre objetos de software (herencia, encapsulamiento) y tablas relacionales planas.",
      "La incompatibilidad de formatos de fecha y hora entre sistemas operativos Windows y distribuciones de Linux.",
      "El conflicto de concurrencia que ocurre cuando dos servidores intentan actualizar la misma partición física de disco."
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
      "El Adaptador de Protocolo de Red del sistema operativo host.",
      "El Mapeo Conceptual / Interno (Conceptual/Internal Mapping).",
      "El Módulo de Renderizado Gráfico del cliente de base de datos.",
      "El Balanceador de Carga de Peticiones HTTP en la nube."
    ],
    "correctAnswer": 1,
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
      "Un conjunto de datos interrelacionados pertenecientes a un mismo contexto, almacenados sistemáticamente para su posterior uso.",
      "Un lenguaje de programación compilado de alto nivel diseñado para maquetar interfaces visuales de usuario y componentes web.",
      "Un dispositivo físico de almacenamiento secundario como un disco de estado sólido, pendrive USB o cinta magnética de datos.",
      "Un archivo temporal de texto plano sin estructura que resguarda variables de sesión volátiles en la memoria RAM del servidor."
    ],
    "correctAnswer": 0,
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
      "Como objetos que integran estado (atributos) y comportamiento (métodos), en lugar de tablas relacionales planas.",
      "Como colecciones de documentos JSON no estructurados almacenados sin validación de tipos ni esquemas fijos.",
      "Como matrices dispersas en memoria RAM gestionadas mediante punteros directos sin persistencia en disco duro.",
      "Como grafos no dirigidos donde cada entidad se representa mediante nodos y aristas ponderadas sin métodos."
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
      "Gestionar el almacenamiento físico, la concurrencia, transacciones, seguridad y recuperación de los datos.",
      "Compilar y optimizar el código JavaScript del navegador para mejorar sustancialmente los tiempos de renderizado visual.",
      "Generar hojas de estilo CSS dinámicas y maquetar reportes imprimibles en formato PDF para los usuarios finales del sistema.",
      "Reemplazar los controladores de red del sistema operativo host para enrutar paquetes TCP/IP de forma nativa en el servidor."
    ],
    "correctAnswer": 0,
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
      "La duplicación innecesaria de información en múltiples lugares, que provoca inconsistencias y sobrecosto de almacenamiento.",
      "El tiempo de latencia en milisegundos que transcurre al ejecutar una consulta de agregación sobre grandes tablas de datos.",
      "El algoritmo de cifrado simétrico que protege los datos durante la transferencia en redes de comunicación públicas e inseguras.",
      "La capacidad del motor de base de datos de reconstruir índices dañados tras una desconexión intempestiva del servidor principal."
    ],
    "correctAnswer": 0,
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
      "Permitir modificar el esquema lógico o físico sin necesidad de reescribir las aplicaciones consumidoras.",
      "Permitir que la base de datos funcione indefinidamente sin alimentación eléctrica ni conexión física a la red local corporativa.",
      "Asegurar que el motor relacional no requiera de un sistema operativo subyacente para gestionar la memoria y los procesos activos.",
      "Garantizar que todos los datos transaccionales se eliminen de manera automática cada vez que se reinicia el servidor de datos."
    ],
    "correctAnswer": 0,
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
      "En una estructura de árbol invertido con relaciones padre-hijo (1:N), donde cada nodo hijo posee un único nodo padre.",
      "En una matriz de dos dimensiones sin jerarquías donde las relaciones se crean mediante claves foráneas dinámicas.",
      "En una red distribuida donde cualquier registro miembro puede conectarse libremente con múltiples registros dueños.",
      "En archivos de registros secuenciales indexados donde el acceso se realiza exclusivamente mediante lectura lineal."
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
      "Una estructura bidimensional compuesta por filas (tuplas o registros) y columnas (campos o atributos tipados).",
      "Un archivo comprimido con extensión .sql que contiene exclusivamente las copias de seguridad de los metadatos.",
      "Un procedimiento almacenado compilado que se dispara de manera automática ante eventos de inserción de datos.",
      "El bloque de memoria caché reservado por el optimizador de consultas para almacenar planes de ejecución temporales."
    ],
    "correctAnswer": 0,
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
      "OLTP está orientado a transacciones rápidas y concurrentes del día a día; OLAP a análisis multidimensional histórico.",
      "OLTP se utiliza exclusivamente para almacenar archivos multimedia pesados; OLAP para gestionar credenciales de acceso de usuarios.",
      "OLTP no utiliza el lenguaje SQL estándar; OLAP requiere sentencias escritas en código binario de bajo nivel para operar en disco.",
      "OLTP procesa datos históricos de décadas consolidados; OLAP registra transacciones operativas en tiempo real en puntos de venta."
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
      "El Sistema de Archivos Planos.",
      "El Modelo Relacional Puro."
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
      "Nivel Conceptual (Lógico Global).",
      "Nivel Interno (Físico en Disco).",
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
      "Especificar qué columnas o expresiones se proyectan en el resultado final de la consulta.",
      "Indicar las condiciones de filtrado que descartan filas antes de agrupar los datos.",
      "Definir el orden ascendente o descendente en que se presentan los registros obtenidos.",
      "Establecer las relaciones de combinación entre dos o más tablas de la base de datos."
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
      "Agrupar las filas que poseen valores idénticos en columnas específicas para aplicar agregaciones.",
      "Filtrar las filas individuales de las tablas antes de cualquier agrupamiento o proyección de datos.",
      "Ordenar el conjunto de resultados de forma ascendente o descendente según los campos indicados.",
      "Limitar la cantidad máxima de registros retornados al cliente mediante valores de paginación."
    ],
    "correctAnswer": 1,
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
      "Compara cadenas de texto ignorando mayúsculas y minúsculas sin importar la codificación.",
      "Evalúa desigualdad estricta entre dos expresiones, equivalente al estándar `<>`.",
      "Asigna un nuevo valor a una columna dentro de una instrucción UPDATE de modificación.",
      "Concatena dos valores alfanuméricos en una única columna de resultado proyectado."
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
      "La condición con OR se evalúa siempre antes que la condición con AND en ausencia de paréntesis.",
      "La condición con AND tiene mayor precedencia que OR; debe usarse paréntesis para alterar el orden.",
      "Ambos operadores tienen la misma prioridad y se evalúan estrictamente de derecha a izquierda.",
      "El motor rechaza la consulta si no se incluyen paréntesis obligatorios en todas las cláusulas."
    ],
    "correctAnswer": 1,
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
      "TRUE (Verdadero), FALSE (Falso) y UNKNOWN (Desconocido).",
      "POSITIVO (+1), NEGATIVO (-1) y NULO (cero absoluto).",
      "VALIDADO, RECHAZADO y PENDIENTE de confirmación.",
      "BINARIO 1, BINARIO 0 y ERROR de tipo de dato."
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
      "`= NULL` siempre evalúa a UNKNOWN (no es TRUE); se debe usar `IS NULL` para verificar nulos.",
      "`= NULL` es la sintaxis recomendada por el estándar ANSI SQL-92 para comprobar valores nulos.",
      "`IS NULL` solo funciona con cadenas de texto y `= NULL` con números enteros o decimales.",
      "No existe ninguna diferencia; ambas expresiones son completamente equivalentes en SQL."
    ],
    "correctAnswer": 0,
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
      "`%` representa exactamente un único carácter y `_` representa cero o más caracteres arbitrarios.",
      "`%` representa cero o más caracteres cualesquiera y `_` representa exactamente un único carácter.",
      "`%` busca números pares en la columna y `_` busca únicamente caracteres alfabéticos en minúscula.",
      "`%` indica búsqueda al inicio de la cadena y `_` indica búsqueda estricta al final del texto."
    ],
    "correctAnswer": 1,
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
      "Es inclusivo; `BETWEEN 10 AND 20` equivale exactamente a `>= 10 AND <= 20`.",
      "Es exclusivo; `BETWEEN 10 AND 20` equivale a `> 10 AND < 20` descartando los límites.",
      "Incluye únicamente el límite inferior (`>= 10 AND < 20`) según la norma SQL.",
      "Solo admite valores enteros positivos, generando error ante números decimales."
    ],
    "correctAnswer": 0,
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
      "Verifica si un valor coincide con alguno de los elementos presentes en una lista explícita.",
      "Calcula el promedio aritmético de los valores contenidos en la lista de argumentos dados.",
      "Inserta un conjunto de nuevos registros en la tabla destino de forma atómica y segura.",
      "Ordena internamente los registros de la consulta antes de proyectar las columnas deseadas."
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
      "Ascendente (de menor a mayor o alfabético A-Z).",
      "Descendente (de mayor a menor o alfabético Z-A).",
      "Aleatorio según el orden físico de inserción en disco.",
      "Por longitud en cantidad de caracteres de la columna."
    ],
    "correctAnswer": 0,
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
      "Ordena primero por `pais` ASC; ante valores iguales de `pais`, ordena por `apellido` DESC.",
      "Aplica el ordenamiento DESC sobre ambas columnas ignorando la palabra clave ASC.",
      "Genera un error de sintaxis porque ORDER BY solo admite una única columna de orden.",
      "Ordena por `apellido` DESC primero y luego reordena toda la tabla por `pais` ASC."
    ],
    "correctAnswer": 0,
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
      "LIMIT restringe la cantidad de filas devueltas y OFFSET indica cuántas filas saltear antes de comenzar.",
      "LIMIT define la cantidad máxima de columnas proyectadas y OFFSET filtra las filas con valores nulos.",
      "LIMIT ordena los datos ascendentemente y OFFSET realiza el ordenamiento descendente de los registros.",
      "LIMIT crea una tabla temporal en memoria y OFFSET elimina los registros duplicados de la consulta."
    ],
    "correctAnswer": 0,
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
      "Renombrar temporalmente la columna en la salida proyectada para mejorar la legibilidad del reporte.",
      "Modificar de forma permanente el nombre físico de la columna en el esquema de la tabla en disco.",
      "Crear un nuevo índice secundario sobre la columna para optimizar búsquedas con filtros WHERE.",
      "Convertir automáticamente los valores de la columna al tipo de dato VARCHAR del motor relacional."
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
      "Permiten acortar las referencias a tablas (`e.nombre`) y son indispensables en consultas con autofusiones.",
      "Duplican la tabla en la memoria RAM del servidor para acelerar las operaciones de inserción masiva.",
      "Crean copias de seguridad automáticas de la tabla en una base de datos secundaria en la nube.",
      "Restringen el acceso a los datos de la tabla permitiendo que solo el usuario administrador la consulte."
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
      "Proyecta una columna calculada con el salario incrementado en un 10% sin modificar los datos de la tabla.",
      "Actualiza de forma permanente la columna salario en el disco duro para todos los empleados de la tabla.",
      "Genera un error de ejecución porque las operaciones matemáticas solo se permiten en cláusulas WHERE.",
      "Crea una nueva tabla en la base de datos con los registros de los empleados que tienen aumento salarial."
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
      "La función `CONCAT(str1, str2)` o el operador estándar `||` (en PostgreSQL, Oracle y SQLite).",
      "El operador aritmético `/` utilizado para dividir y unir fragmentos de texto consecutivamente.",
      "La cláusula `JOIN STRINGS` ubicada dentro del bloque FROM de la consulta de selección de datos.",
      "La palabra clave `MERGE TEXT` aplicada sobre columnas de tipo carácter en bases de datos relacionales."
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
      "Retornar el nombre en mayúsculas y la longitud en cantidad de caracteres del apellido de cada cliente.",
      "Convertir el nombre a minúsculas y truncar el apellido a los primeros 5 caracteres alfanuméricos.",
      "Validar que el nombre no contenga caracteres especiales y que el apellido sea una clave primaria.",
      "Cifrar el nombre del cliente y calcular el hash SHA-256 del apellido para proteger su privacidad."
    ],
    "correctAnswer": 0,
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
      "Redondea al entero más próximo (o decimales indicados), redondea siempre hacia arriba y redondea hacia abajo.",
      "Calcula la raíz cuadrada del número, el valor absoluto positivo y el logaritmo natural en base diez.",
      "Convierte el número a formato monetario, agrega el símbolo de porcentaje y formatea con separador de miles.",
      "Valida que el número sea positivo, rechaza valores impares y trunca los ceros a la derecha del decimal."
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
      "Obtener la fecha/hora actual del sistema y extraer un componente específico como el año, mes o día de la fecha.",
      "Convertir una cadena de texto a formato binario y validar que la fecha no corresponda a un día feriado.",
      "Bloquear las transacciones activas hasta que se cumpla la fecha especificada en el parámetro de entrada.",
      "Calcular la diferencia en nanosegundos entre dos zonas horarias configuradas en el sistema operativo host."
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
      "Retorna el primer valor no nulo de la lista de argumentos evaluados de izquierda a derecha.",
      "Calcula la media geométrica de los números ignorando los registros que contienen valores vacíos.",
      "Reemplaza todos los caracteres de texto por espacios en blanco si la longitud supera el límite.",
      "Convierte obligatoriamente los valores nulos en el número cero sin importar el tipo de dato destino."
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
      "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT.",
      "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT.",
      "WHERE -> FROM -> SELECT -> HAVING -> GROUP BY -> LIMIT -> ORDER BY.",
      "FROM -> SELECT -> WHERE -> ORDER BY -> GROUP BY -> HAVING -> LIMIT."
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
      "Las cláusulas `NULLS FIRST` o `NULLS LAST` al final de la especificación de orden de la columna.",
      "La función `IS NULL ASC` aplicada en la lista de columnas seleccionadas del bloque SELECT.",
      "La instrucción `SET NULL POSITION = TOP` ejecutada antes de lanzar la consulta al servidor.",
      "No es posible controlar la posición de los nulos; el estándar fija que siempre aparezcan al final."
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
      "Definir un carácter de escape mediante `ESCAPE '\\'` para que `\\%` sea tratado como texto literal.",
      "Reemplazar el carácter `%` por el comodín `*` tal como se utiliza en los comandos del sistema operativo.",
      "Escribir la palabra clave `LITERAL` antes del patrón de búsqueda en la condición de la cláusula WHERE.",
      "Encerrar el porcentaje entre corchetes angulares `<%>` para evitar que el motor lo interprete como comodín."
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
      "Implementar lógica condicional de tipo `IF-THEN-ELSE` para retornar valores calculados según las condiciones.",
      "Crear una estructura de bucle iterativo que recorre las tuplas una a una en memoria secundaria de disco.",
      "Capturar y manejar excepciones de ejecución para evitar que las consultas fallen por errores de división por cero.",
      "Declarar variables dinámicas de sesión que se comparten entre diferentes usuarios conectados al motor relacional."
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
      "NOT tiene la máxima prioridad, seguido de AND, y finalmente OR posee la menor precedencia de evaluación.",
      "OR se evalúa primero, luego se evalúa el operador AND, y por último se aplica la negación con NOT.",
      "Todos los operadores booleanos poseen idéntica jerarquía y se procesan estrictamente de izquierda a derecha.",
      "La precedencia depende del tipo de dato de las columnas comparadas en cada término de la expresión lógica."
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
      "Devuelve 0 filas porque `id NOT IN (...)` se expande con `AND id <> NULL`, y al comparar con NULL el resultado es UNKNOWN.",
      "El motor descarta silenciosamente el valor NULL y filtra únicamente los registros con id distinto de 1 y 2 con total normalidad.",
      "El servidor de base de datos interrumpe la consulta arrojando una excepción crítica de tipo NULL_POINTER_EXCEPTION en consola.",
      "Retorna todas las filas de la tabla sin aplicar ningún filtro porque la presencia de NULL anula la condición WHERE por completo."
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
    "type": "fill_in_sql"
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
    "type": "fill_in_sql"
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
      "Lucía Fernández ($72.000)",
      "Ana Gómez ($65.000)",
      "Carlos Pérez ($48.000)",
      "Sofía Romero ($59.000)"
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
      "$45.000 (Martín Silva)",
      "$48.000 (Carlos Pérez)",
      "$53.000 (Marcos Torres)",
      "$81.000 (Diego López)"
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
      "5 empleados (Ana: 65k, Lucía: 72k, Sofía: 59k, Diego: 81k y Valeria: 67k)",
      "3 empleados (Carlos Pérez: 48k, Marcos Torres: 53k y Martín Silva: 45k)",
      "6 empleados (todos los registrados excepto Carlos Pérez y Martín Silva)",
      "8 empleados (la totalidad de la nómina de trabajadores de la empresa)"
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
      "Diego López (Sistemas)",
      "Lucía Fernández (Ventas)",
      "Marcos Torres (Logística)",
      "Valeria Díaz (Ventas)"
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
      "Diego López ($81.000)",
      "Lucía Fernández ($72.000)",
      "Valeria Díaz ($67.000)",
      "Ana Gómez ($65.000)"
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
      "Ana Gómez (101) y Carlos Pérez (102)",
      "Lucía Fernández (103) y Marcos Torres (104)",
      "Diego López (106) y Valeria Díaz (107)",
      "Martín Silva (108) y Sofía Romero (105)"
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
      "Marcos Torres (104) y Sofía Romero (105)",
      "Ana Gómez (101) y Carlos Pérez (102)",
      "Lucía Fernández (103) y Marcos Torres (104)",
      "Diego López (106) y Valeria Díaz (107)"
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
      "8 empleados",
      "5 empleados",
      "10 empleados",
      "6 empleados"
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
      "$68.000 (promedio de Ana: 65k, Lucía: 72k y Valeria: 67k en Depto 1)",
      "$62.000 (promedio general de toda la nómina de empleados de la empresa)",
      "$81.000 (salario máximo alcanzado dentro del departamento de Ventas)",
      "$59.000 (promedio salarial de los departamentos de Marketing y Logística)"
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
      "El producto cartesiano que combina cada fila de la Tabla A con todas y cada una de las filas de la Tabla B.",
      "Únicamente las filas de la Tabla A que posean valores coincidentes en la clave primaria de la Tabla B.",
      "La unión de conjuntos que elimina de forma automática las filas duplicadas entre ambas tablas de datos.",
      "Un conjunto vacío porque las consultas sin condición ON explícita son rechazadas por el compilador SQL."
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
      "Únicamente las filas que cumplen la condición de enlace especificada en la cláusula ON en ambas tablas.",
      "Todas las filas de la tabla izquierda, completando con NULL las columnas de la tabla derecha no coincidentes.",
      "La totalidad de los registros de ambas tablas, independientemente de si satisfacen la condición de unión.",
      "Solo los registros de la tabla derecha que no posean ninguna correspondencia en la tabla izquierda vinculada."
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
      "Descarta a los clientes que no tengan pedidos registrados para retornar exclusivamente compras efectivas y válidas.",
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
      "Preserva todos los empleados; si un empleado no tiene departamento asignado, las columnas de departamento son NULL.",
      "Conserva todos los departamentos y descarta a los empleados que no pertenezcan al departamento de Sistemas de la empresa.",
      "Equivale a un INNER JOIN tradicional porque la palabra clave RIGHT es ignorada por los optimizadores relacionales modernos.",
      "Elimina físicamente los departamentos huérfanos que no cuenten con personal registrado en la base de datos de la compañía."
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
      "Conserva todas las filas de ambas tablas, rellenando con NULL donde no haya coincidencia en la unión.",
      "Genera el producto cartesiano puro que multiplica la cantidad de filas de Clientes por la cantidad de filas de Pedidos.",
      "Retorna únicamente los clientes con pedidos verificados y descarta cualquier fila que contenga valores nulos en el sistema.",
      "Produce un error de sintaxis porque FULL OUTER JOIN solo está disponible en bases de datos orientadas a objetos y grafos."
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
      "Usando `LEFT JOIN Pedidos p ON c.id = p.id_cliente WHERE p.id IS NULL` (Anti-Join por clave).",
      "Usando `INNER JOIN Pedidos p ON c.id = p.id_cliente WHERE p.monto = 0` (búsqueda de monto nulo).",
      "Usando `CROSS JOIN Pedidos p WHERE c.id <> p.id_cliente` (producto cartesiano con desigualdad).",
      "Usando `FULL JOIN Pedidos p ON c.id = p.id_cliente WHERE c.id IS NULL` (filtro sobre tabla izquierda)."
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
      "Cuando una tabla se une consigo misma para representar jerarquías recursivas, como empleados y sus jefes o supervisores.",
      "Cuando se requiere duplicar una tabla en un disco secundario para balancear la carga de lecturas transaccionales.",
      "Cuando se unen dos tablas diferentes que comparten exactamente el mismo nombre en esquemas de usuarios distintos.",
      "Cuando se necesita reiniciar los contadores de secuencias autoincrementales sin utilizar sentencias DDL como ALTER."
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
      "Cuando la columna de unión tiene exactamente el mismo nombre y tipo de dato en ambas tablas a relacionar.",
      "Cuando las tablas a unir pertenecen a dos motores de base de datos relacionales físicamente distintos.",
      "Cuando se requiere realizar una unión no equitativa utilizando operadores de rango como `<`, `>` o `BETWEEN`.",
      "Cuando la consulta no contiene cláusula WHERE ni funciones agregadas de cálculo como SUM o COUNT en el SELECT."
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
      "`COUNT(*)` cuenta todas las tuplas de la tabla; `COUNT(comision)` cuenta solo las filas con valor no nulo en esa columna.",
      "`COUNT(*)` cuenta únicamente las filas con valores pares; `COUNT(comision)` suma el importe total de las comisiones.",
      "`COUNT(*)` descarta automáticamente los registros nulos; `COUNT(comision)` genera error si encuentra valores nulos.",
      "Ambas expresiones son sinónimos idénticos y devuelven con exactitud el mismo número en cualquier consulta SQL."
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
      "150 (calcula `(100 + 200) / 2`, descartando automáticamente el valor NULL del promedio).",
      "100 (calcula `(100 + 200 + 0) / 3`, reemplazando el valor NULL por un cero numérico).",
      "NULL (porque cualquier función matemática que encuentra un valor NULL retorna NULL).",
      "Error de compilación al procesar columnas numéricas que contienen datos incompletos."
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
      "Cualquier columna en el `SELECT` que no esté en una función agregada DEBE estar presente en la cláusula `GROUP BY`.",
      "Todas las columnas numéricas de la tabla deben incluirse obligatoriamente dentro de la cláusula WHERE de filtrado.",
      "No se pueden utilizar funciones agregadas como COUNT o SUM si la consulta contiene más de dos tablas vinculadas.",
      "La cláusula GROUP BY debe especificarse antes de la cláusula FROM en la estructura de la consulta relacional."
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
      "`WHERE` filtra filas individuales antes de agrupar; `HAVING` filtra grupos ya consolidados tras el agrupamiento.",
      "`HAVING` se ejecuta antes de la lectura de tablas en el `FROM` y `WHERE` se evalúa después del `ORDER BY` final.",
      "`WHERE` solo puede operar sobre columnas de tipo alfanumérico y `HAVING` exclusivamente sobre campos numéricos.",
      "No existe diferencia semántica; ambas palabras clave son sinónimos intercambiables en cualquier motor SQL."
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
      "Porque `WHERE` se evalúa antes de agrupar y no puede evaluar funciones agregadas; debe utilizarse `HAVING COUNT(*) > 5`.",
      "Porque la función `COUNT(*)` solo puede invocarse dentro del bloque SELECT y nunca como criterio de evaluación.",
      "Porque el motor relacional exige que la columna de agrupamiento sea obligatoriamente una clave primaria entera.",
      "Porque no se pueden combinar cláusulas WHERE y GROUP BY dentro de una misma sentencia de consulta relacional."
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
      "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY.",
      "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY.",
      "WHERE -> FROM -> GROUP BY -> SELECT -> HAVING -> ORDER BY.",
      "FROM -> SELECT -> WHERE -> ORDER BY -> GROUP BY -> HAVING."
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
      "Porque la cláusula `WHERE` se evalúa lógicamente antes de la fase de proyección `SELECT` donde se crean los alias.",
      "Porque los alias de columnas solo pueden contener caracteres numéricos y no identificadores de texto en SQL.",
      "Porque el estándar SQL prohíbe el uso de alias en cualquier consulta que contenga operaciones aritméticas simples.",
      "Porque los alias solo existen en la memoria del cliente web y el motor de base de datos nunca los recibe en red."
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
      "`UNION` elimina automáticamente filas duplicadas del resultado final; `UNION ALL` conserva todos los registros.",
      "`UNION` solo combina tablas numéricas y `UNION ALL` se utiliza exclusivamente para concatenar campos de texto.",
      "`UNION ALL` borra los datos de las tablas físicas originales mientras que `UNION` crea vistas virtuales en disco.",
      "`UNION` une tablas en sentido horizontal (columnas) y `UNION ALL` en sentido vertical (filas) sucesivamente."
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
      "Tener la misma cantidad de columnas proyectadas y tipos de datos compatibles en el mismo orden posicional.",
      "Tener exactamente el mismo nombre físico de tabla y pertenecer al mismo esquema de usuario en el servidor.",
      "Ejecutarse obligatoriamente de forma simultánea por dos conexiones de red independientes en la base de datos.",
      "Contar con la misma cantidad de tuplas en disco y compartir una clave foránea común entre ambas entidades."
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
      "Únicamente las filas que están presentes en AMBOS conjuntos de resultados simultáneamente.",
      "Todas las filas del primer conjunto excluyendo las filas que aparecen en el segundo conjunto.",
      "El producto cartesiano resultante de multiplicar todas las filas de ambas consultas combinadas.",
      "La suma consolidada de los valores numéricos de las columnas de ambas tablas de datos analizadas."
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
      "Las filas que aparecen en la consulta A pero que NO están presentes en el resultado de la consulta B (diferencia A - B).",
      "La concatenación de todas las tuplas de ambas consultas eliminando únicamente los valores nulos encontrados.",
      "Las tuplas comunes que figuran en ambas consultas de manera idéntica a la operación de intersección de datos.",
      "Un conjunto de registros ordenados de forma descendente sin importar si existen coincidencias entre las fuentes."
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
      "El número de categorías distintas y únicas existentes, sin contar duplicados ni valores nulos.",
      "La cantidad total de registros de productos multiplicada por el número de categorías del sistema.",
      "El valor promedio del precio de venta de los artículos clasificados dentro de cada categoría.",
      "La longitud en caracteres del nombre de la categoría con mayor cantidad de productos asociados."
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
      "Une tablas por todas las columnas con igual nombre; añadir columnas de auditoría altera la unión silenciosamente.",
      "Borra las tablas de la memoria RAM del servidor si la consulta tarda más de diez segundos en retornar los datos al cliente web.",
      "Es incompatible con bases de datos que utilicen codificación de caracteres UTF-8 o tipos de datos numéricos flotantes en disco.",
      "Exige reiniciar el servicio de base de datos tras cada ejecución para liberar los bloqueos de lectura adquiridos en los índices."
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
      "Se crea un grupo único e independiente para cada combinación distinta de país y ciudad.",
      "Se agrupa únicamente por país, descartando la columna ciudad en la formación de grupos.",
      "Se generan grupos separados para países y luego se combinan aleatoriamente con las ciudades.",
      "Se produce un error de sintaxis porque la cláusula GROUP BY solo admite una única columna."
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
    "type": "fill_in_sql"
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
    "type": "fill_in_sql"
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
      "3 empleados (Ana Gómez, Lucía Fernández y Valeria Díaz)",
      "2 empleados (Carlos Pérez y Marcos Torres de Logística)",
      "1 empleado (Diego López del departamento de Sistemas)",
      "4 empleados (Ana Gómez, Carlos Pérez, Marcos y Diego)"
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
      "Departamento 1 con masa salarial de $204.000",
      "Departamento 2 con masa salarial de $107.000",
      "Departamento 3 con masa salarial de $98.000",
      "Departamento 4 con masa salarial de $81.000"
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
      "Ana Gómez (Ventas), Lucía Fernández (Ventas), Diego López (Sistemas) y Valeria Díaz (Ventas)",
      "Carlos Pérez (Marketing), Marcos Torres (Logística) y Martín Silva (Logística de la empresa)",
      "Sofía Romero (Marketing) y Diego López (Sistemas) como únicos empleados con salario calificado",
      "Todos los 8 empleados registrados en la nómina general de la base de datos de la organización"
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
      "0 (porque `COUNT(e.id)` no cuenta los valores NULL generados en el LEFT JOIN)",
      "1 (porque la fila de Recursos Humanos existe en la tabla de Departamentos)",
      "NULL (porque la columna e.id resulta NULL al no haber empleados vinculados)",
      "Error de sintaxis al intentar agrupar registros sin coincidencias en el JOIN"
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
      "A un FULL OUTER JOIN con preservación de tablas.",
      "A un LEFT OUTER JOIN priorizando la tabla izquierda.",
      "A un CROSS JOIN con producto cartesiano sin filtrar."
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
      "Únicamente el id_departamento = 1 (con 3 empleados).",
      "Los id_departamento 1, 2 y 3 (con 7 empleados totales).",
      "Todos los departamentos que tengan al menos 1 empleado.",
      "Ningún departamento, la condición HAVING descarta todo."
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
      "1, 2, 3, 4 (valores únicos de departamentos con personal)",
      "1, 2, 3, 4, 5 (todos los departamentos registrados en total)",
      "1, 1, 1, 2, 2, 3, 3, 4 (todas las filas con repeticiones)",
      "8 (la cantidad total de registros de la tabla Empleados)"
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
      "4 departamentos con personal asignado",
      "5 departamentos totales en el catálogo",
      "8 empleados registrados en la nómina",
      "1 único departamento con personal activo"
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
      "Marcos Torres ($53k), Sofía Romero ($59k) y Ana Gómez ($65k)",
      "Carlos Pérez ($48k), Marcos Torres ($53k) y Sofía Romero ($59k)",
      "Lucía Fernández ($72k), Valeria Díaz ($67k) y Ana Gómez ($65k)",
      "Diego López ($81k), Lucía Fernández ($72k) y Valeria Díaz ($67k)"
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
      "`INSERT INTO nombre_tabla (columnas) VALUES (valores);`",
      "`ADD NEW RECORD INTO nombre_tabla VALUES (valores);`",
      "`CREATE ROW IN nombre_tabla WITH VALUES (valores);`",
      "`UPDATE nombre_tabla INSERT (columnas) VALUES (valores);`"
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
      "Separar cada tupla de valores entre paréntesis con comas dentro de la misma sentencia `VALUES (...)`.",
      "Ejecutar obligatoriamente un comando `COMMIT` individual después de cada fila insertada en la tabla.",
      "Crear un archivo CSV temporal en el servidor para que el motor lo importe mediante sentencias de red.",
      "Utilizar la palabra clave `REPEAT VALUES` especificando el número total de tuplas a registrar en disco."
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
      "Insertar en una tabla de destino el conjunto de datos resultante de ejecutar una consulta SELECT.",
      "Crear una nueva tabla en disco y copiar únicamente la estructura de columnas sin transferir filas.",
      "Actualizar los valores de una tabla existente basándose en las filas seleccionadas de otra fuente.",
      "Comparar dos tablas y eliminar de forma automática los registros duplicados entre ambas entidades."
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
      "`UPDATE nombre_tabla SET columna = nuevo_valor WHERE condicion;`",
      "`MODIFY TABLE nombre_tabla SET columna = nuevo_valor WHERE condicion;`",
      "`CHANGE nombre_tabla VALUES (columna = nuevo_valor) WHERE condicion;`",
      "`ALTER DATA IN nombre_tabla SET columna = nuevo_valor WHERE condicion;`"
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
      "Se actualizan indiscriminadamente TODAS las filas de la tabla con el nuevo valor especificado.",
      "El motor rechaza la consulta y emite un error de sintaxis obligatorio por ausencia de condición.",
      "Solo se modifica el primer registro físico almacenado en el bloque de almacenamiento de disco.",
      "La sentencia se cancela automáticamente por el protector de transacciones del servidor de datos."
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
      "`DELETE` es DML (borra con WHERE, genera log); `TRUNCATE` es DDL (vacía la tabla rápido); `DROP` elimina la estructura de la tabla.",
      "`DELETE` borra la base de datos completa; `TRUNCATE` borra las credenciales de usuarios; `DROP` reinicia los servicios del servidor.",
      "`TRUNCATE` solo opera en tablas temporales en memoria; `DELETE` solo opera en vistas; `DROP` desfragmenta los índices físicos.",
      "No existen diferencias técnicas; los tres comandos son sinónimos exactos intercambiables en todos los motores relacionales."
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
      "Obtener inmediatamente valores generados (como IDs autoincrementales) tras un INSERT, UPDATE o DELETE.",
      "Liberar la conexión de red y devolver el hilo de ejecución al pool de conexiones del servidor de base de datos.",
      "Forzar un rollback inmediato de la transacción activa en caso de que alguna columna contenga valores nulos.",
      "Retornar el código fuente compilado en C del plan de ejecución generado por el optimizador relacional."
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
      "Escalar (1 valor), De Fila (1 tupla de varias columnas) y De Tabla (conjunto de múltiples filas y columnas).",
      "Temporal (en memoria RAM), Permanente (en disco físico) y Distribuida (en múltiples servidores en la nube).",
      "Indexada (utiliza índices B-Tree), Secuencial (recorre la tabla completa) y Hash (con función de dispersión).",
      "Recursiva (con sentencias WITH), Iterativa (con bucles WHILE) y Paralela (con múltiples subprocesos)."
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
      "Retorna exactamente un único valor (1 fila y 1 columna); puede utilizarse donde se admita una expresión o constante.",
      "Retorna una tabla de múltiples columnas y filas; solo puede utilizarse como origen de datos en la cláusula FROM.",
      "Retorna un conjunto de valores booleanos; solo puede ejecutarse dentro de procedimientos almacenados en Java.",
      "Es una subconsulta sin cláusula WHERE que genera un producto cartesiano con todas las tablas del esquema lógico."
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
      "`IN` evalúa pertenencia a un conjunto devuelto por la subconsulta; `NOT IN` con valores NULL puede evaluar a UNKNOWN.",
      "`IN` solo admite constantes numéricas fijas; `NOT IN` permite evaluar subconsultas que contengan texto variable.",
      "`IN` crea una tabla temporal en disco para cada fila; `NOT IN` ejecuta la subconsulta una única vez en memoria.",
      "No existe diferencia de evaluación; ambos operadores ignoran los valores nulos generados por la subconsulta."
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
      "Evalúa si la subconsulta correlacionada devuelve al menos una fila (retorna TRUE/FALSE sin transferir datos reales).",
      "Cuenta el número exacto de filas devueltas por la subconsulta y compara el total contra el límite configurado.",
      "Verifica si la tabla destino existe en el catálogo del sistema antes de ejecutar la sentencia DML principal.",
      "Valida que ninguna columna de la subconsulta contenga claves foráneas que apunten a registros inexistentes."
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
      "Una subconsulta que hace referencia a columnas de la consulta externa y se evalúa una vez por cada fila procesada.",
      "Una subconsulta independiente que se ejecuta una sola vez al inicio antes de evaluar la consulta exterior principal.",
      "Una consulta recursiva que itera de forma indefinida hasta alcanzar una condición de parada en memoria secundaria.",
      "Una consulta anidada dentro de una vista que no puede contener funciones agregadas como SUM, AVG o COUNT."
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
      "Tablas derivadas (o inline views) que deben tener obligatoriamente un alias de tabla asignado en la consulta.",
      "Vistas materializadas que se guardan físicamente en el disco duro y se actualizan mediante tareas programadas.",
      "Tablas del catálogo del sistema que almacenan metadatos sobre los índices y restricciones de integridad activas.",
      "Subconsultas escalares que solo pueden proyectar una única columna numérica de tipo entero autoincremental."
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
      "`> ALL` exige que el valor sea mayor que TODOS los valores devueltos; `> ANY` exige que sea mayor que AL MENOS UNO.",
      "`> ALL` exige que coincida con al menos un valor de la lista; `> ANY` exige que sea mayor que el promedio general.",
      "`> ALL` solo funciona con columnas de texto; `> ANY` se utiliza exclusivamente con campos de fecha y hora del sistema.",
      "Ambos operadores son sinónimos idénticos y equivalen exactamente al uso del operador de pertenencia relacional `IN`."
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
      "Definir conjuntos de resultados temporales nombrados mediante la cláusula `WITH` que mejoran la modularidad y legibilidad.",
      "Crear tablas físicas permanentes en el esquema de base de datos que persisten tras finalizar la sesión de conexión.",
      "Establecer bloqueos de exclusión mutua sobre tablas críticas durante la ejecución de transacciones concurrentes.",
      "Importar librerías de funciones matemáticas externas escritas en lenguajes de programación como C o Python."
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
      "Una CTE que hace referencia a sí misma mediante `UNION ALL`, ideal para recorrer estructuras jerárquicas y grafos.",
      "Una consulta anidada que genera un bucle infinito en el servidor hasta agotar el espacio en disco disponible.",
      "Un procedimiento almacenado que se invoca a sí mismo mediante llamadas de red entre diferentes servidores.",
      "Una tabla temporal que duplica sus registros automáticamente cada vez que se ejecuta una sentencia de selección."
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
      "`BEGIN` inicia la transacción, `COMMIT` guarda los cambios permanentemente y `ROLLBACK` deshace las operaciones.",
      "`BEGIN` bloquea el servidor, `COMMIT` reinicia el servicio de base de datos y `ROLLBACK` borra los índices físicos.",
      "`BEGIN` declara las variables de sesión, `COMMIT` valida la sintaxis y `ROLLBACK` exporta los datos a un archivo CSV.",
      "`BEGIN` crea el esquema de usuario, `COMMIT` asigna permisos y `ROLLBACK` revoca los accesos administrativos."
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
      "Penalizan el rendimiento de escritura porque cada modificación exige actualizar los árboles de índices correspondientes.",
      "Aceleran las escrituras en disco al comprimir los datos en memoria caché antes de insertarlos en las tablas físicas.",
      "No tienen ningún impacto en el rendimiento porque los índices solo se reconstruyen una vez por semana de noche.",
      "Eliminan automáticamente las restricciones de clave foránea para permitir inserciones ultra rápidas sin validación."
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
      "Insertar un registro o, si ya existe por conflicto de clave primaria/única, actualizar sus columnas existentes de forma atómica.",
      "Eliminar registros duplicados de una tabla física y reconstruir todos los índices secundarios asociados en disco.",
      "Fusionar dos bases de datos físicamente separadas en un único repositorio relacional mediante replicación en red.",
      "Convertir automáticamente sentencias DML tradicionales en operaciones DDL de modificación de esquema relacional."
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
      "Impide borrar la fila padre si tiene hijos (RESTRICT/NO ACTION) o propaga el borrado a los hijos si se configuró CASCADE.",
      "Elimina siempre de forma automática toda la base de datos padre cuando se borra un único registro en la tabla hija.",
      "Convierte los registros hijos en tablas independientes sin ninguna relación referencial con el resto del modelo de datos.",
      "Genera una excepción de hardware que interrumpe la conexión de red de todos los clientes conectados al servidor."
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
      "`DELETE FROM Empleados WHERE id_departamento IN (SELECT id FROM Departamentos WHERE activo = false);`",
      "`DELETE FROM Empleados USING Departamentos WHERE Empleados.id_departamento = Departamentos.id AND activo = false;`",
      "`DELETE Empleados FROM Empleados INNER JOIN Departamentos ON Empleados.id_departamento = Departamentos.id WHERE activo = false;`",
      "`REMOVE FROM Empleados WHERE EXISTS (SELECT 1 FROM Departamentos WHERE Departamentos.id = Empleados.id_departamento AND activo = false);`"
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
      "Actualizar columnas de una tabla utilizando valores provenientes de otra tabla relacionada mediante una condición de unión.",
      "Crear una nueva clave foránea entre dos tablas durante la ejecución de una sentencia de selección de solo lectura.",
      "Modificar de forma permanente el tipo de dato de una columna en ambas tablas simultáneamente sin usar sentencias DDL.",
      "Combinar dos tablas en memoria para exportar el resultado a un archivo binario comprimido en el sistema operativo."
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
    "options": [
      "Los optimizadores modernos suelen transformar subconsultas no correlacionadas en JOINs equivalentes para mejorar el plan de ejecución.",
      "Las subconsultas siempre se ejecutan diez veces más rápido que cualquier JOIN porque operan directamente en memoria RAM.",
      "El estándar SQL prohíbe el uso de JOINs en consultas que contengan más de tres tablas relacionadas en el bloque FROM.",
      "Los JOINs nunca utilizan índices en disco mientras que las subconsultas crean índices temporales automáticos en cada paso."
    ],
    "correctAnswer": 0
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
    "options": [
      "`EXISTS` se detiene tan pronto encuentra la primera fila coincidente, mientras que `COUNT(*) > 0` cuenta todas las filas antes de evaluar.",
      "`COUNT(*) > 0` es siempre más rápido que `EXISTS` porque los motores relacionales guardan el conteo total en memoria caché.",
      "`EXISTS` solo puede utilizarse con números enteros positivos y `COUNT(*) > 0` con columnas de tipo carácter o alfanumérico.",
      "Ambas expresiones generan idéntico plan de ejecución en todos los motores sin ninguna diferencia en el tiempo de procesamiento."
    ],
    "correctAnswer": 0
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
    "type": "fill_in_sql"
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
      "Debe ser una subconsulta escalar que retorne como máximo un único valor (1 fila y 1 columna) por cada registro procesado.",
      "Debe retornar una tabla de múltiples columnas para poder combinarse con los demás campos proyectados en el resultado.",
      "No puede hacer referencia a columnas de la consulta externa bajo ninguna circunstancia en la sintaxis relacional estándar.",
      "Solo puede ejecutarse si la tabla consultada contiene menos de cien registros almacenados en el disco secundario."
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
      "INSERT INTO (DML de inserción)",
      "UPDATE SET (DML de modificación)",
      "ALTER TABLE (DDL de estructura)",
      "CREATE RECORD (comando no estándar)"
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
      "INSERT INTO Departamentos (id, nombre_departamento) VALUES (6, 'Finanzas');",
      "ADD ROW TO Departamentos VALUES (6, 'Finanzas') AS NEW ENTRY;",
      "INSERT RECORD (6, 'Finanzas') INTO TABLE Departamentos;",
      "UPDATE Departamentos ADD VALUES (6, 'Finanzas') WHERE id = 6;"
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
      "El salario de TODOS los empleados de la tabla será modificado a 50000.",
      "El motor rechaza la consulta arrojando un error de sintaxis obligatorio.",
      "Solo se actualiza el primer registro físico presente en el archivo de datos.",
      "Se crea un nuevo registro de empleado con salario 50000 sin afectar los demás."
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
      "A Ana Gómez (registro con id = 101).",
      "A Carlos Pérez (registro con id = 102).",
      "A todos los empleados que ganen menos de 70000.",
      "A los empleados pertenecientes al departamento 1."
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
      "El empleado individual que posee el salario más elevado registrado en la tabla de nómina de la empresa.",
      "El promedio salarial calculado de forma independiente para cada uno de los departamentos de la empresa.",
      "Una lista de errores de compilación porque las cláusulas WHERE no admiten subconsultas de agregación."
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
      "Los empleados pertenecientes al departamento de Sistemas (Diego López).",
      "Todos los empleados de la empresa excepto los que pertenecen a Sistemas.",
      "Únicamente el nombre y código identificador del departamento Sistemas.",
      "Ningún registro, produce error porque las subconsultas requieren el operador IN."
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
      "Resolver problemas modulares dinámicamente usando el resultado de una consulta como filtro en otra.",
      "Reemplazar completamente la necesidad de crear índices secundarios sobre las tablas de la base de datos.",
      "Impedir que ocurran bloqueos de exclusión mutua durante la ejecución de transacciones concurrentes.",
      "Convertir automáticamente bases de datos relacionales tradicionales en almacenes no estructurados NoSQL."
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
      "`CREATE TABLE nombre (columna1 tipo restriccion, columna2 tipo, ...);`",
      "`MAKE TABLE nombre WITH COLUMNS (columna1 tipo, columna2 tipo);`",
      "`NEW RELATION nombre (columna1 tipo, columna2 tipo, ...);`",
      "`DEFINE TABLE STRUCTURE nombre (columna1 tipo, columna2 tipo);`"
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
      "`INTEGER` (enteros), `VARCHAR(n)` (texto variable), `DECIMAL(p,s)` (números exactos) y `DATE` (fechas).",
      "`NUMBER` (texto), `STRING` (enteros), `BOOLEAN` (decimales) y `TIMESTAMP` (caracteres fijos).",
      "`BINARY` (fechas), `CHAR` (números flotantes), `FLOAT` (texto largo) y `TEXT` (enteros cortos).",
      "`BLOB` (números enteros), `INT` (imágenes binarias), `DATE` (textos) y `VARCHAR` (fechas)."
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
      "Garantiza unicidad de cada tupla, impide valores NULL y crea automáticamente un índice único.",
      "Permite valores duplicados siempre que pertenezcan a transacciones de solo lectura en la base de datos.",
      "Debe aplicarse obligatoriamente sobre una única columna y no admite claves compuestas por dos campos.",
      "Solo se puede definir sobre columnas de tipo entero autoincremental en motores relacionales modernos."
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
      "Una clave primaria conformada por dos o más columnas que juntas garantizan la unicidad de cada registro.",
      "Una tabla que posee dos claves primarias independientes aplicadas en diferentes columnas físicas.",
      "Una clave foránea que apunta simultáneamente a dos tablas padre diferentes en el mismo esquema.",
      "Un índice secundario que solo permite búsquedas exactas sobre columnas de tipo fecha y hora."
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
      "`FOREIGN KEY (columna_hija) REFERENCES tabla_padre(columna_padre)`",
      "`LINK TO TABLE tabla_padre USING (columna_hija = columna_padre)`",
      "`CONNECT FOREIGN KEY columna_hija WITH tabla_padre.columna_padre`",
      "`RELATION TO tabla_padre ON (columna_hija -> columna_padre)`"
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
      "`CASCADE` borra hijos en cascada, `RESTRICT` impide el borrado del padre y `SET NULL` pone NULL en la FK hija.",
      "`CASCADE` bloquea la tabla padre, `RESTRICT` borra las filas hijas y `SET NULL` reinicia la base de datos.",
      "`CASCADE` solo funciona en inserciones, `RESTRICT` en actualizaciones y `SET NULL` en sentencias SELECT.",
      "Las tres opciones realizan la misma acción de borrado físico sin diferencias de comportamiento relacional."
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
      "Asegura que no existan valores duplicados en la columna, permitiendo valores NULL (según el motor).",
      "Impide que los usuarios administradores modifiquen los valores de la columna tras su inserción.",
      "Convierte de forma automática todos los textos de la columna a letras mayúsculas en el disco.",
      "Restringe la tabla para que solo pueda contener un único registro almacenado en memoria física."
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
      "Exige que la columna contenga obligatoriamente un valor definido en cada inserción, rechazando nulos.",
      "Asigna de forma automática el número cero cuando no se proporciona un valor en la sentencia INSERT.",
      "Convierte los valores de la columna en cadenas de texto vacías si se intenta insertar un valor NULL.",
      "Permite valores nulos únicamente si la tabla no posee una clave primaria definida en su estructura."
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
      "Validar que los valores insertados o modificados en una columna cumplan una condición lógica o rango.",
      "Comprobar periódicamente que el servidor de base de datos disponga de espacio libre en el disco duro.",
      "Verificar que la contraseña del usuario cumpla con las políticas de complejidad criptográfica exigidas.",
      "Limitar el número máximo de consultas SELECT concurrentes que se pueden ejecutar sobre la tabla."
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
      "Asignar un valor predeterminado a una columna cuando la sentencia de inserción no especifica ningún dato.",
      "Reemplazar los valores existentes en la tabla por valores nulos cada vez que se reinicia el servidor.",
      "Definir el orden predeterminado en que se proyectan las columnas al ejecutar `SELECT * FROM tabla`.",
      "Crear una copia de seguridad automática de la columna en un archivo de texto en el sistema operativo."
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
      "`ALTER TABLE nombre ADD columna tipo;` / `DROP COLUMN columna;` / `ALTER COLUMN columna TYPE tipo;`",
      "`MODIFY TABLE nombre INSERT columna;` / `DELETE COLUMN columna;` / `CHANGE COLUMN columna;`",
      "`UPDATE STRUCTURE nombre ADD columna;` / `REMOVE columna;` / `SET TYPE columna tipo;`",
      "`CHANGE TABLE nombre ADD FIELD columna;` / `DROP FIELD columna;` / `RETYPE columna tipo;`"
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
      "`DROP TABLE` elimina la tabla y su estructura; `TRUNCATE` vacía los datos rápidamente conservando la estructura.",
      "`DROP TABLE` borra solo los datos pares; `TRUNCATE` borra los datos impares manteniendo las claves foráneas.",
      "`TRUNCATE` borra la base de datos completa del disco; `DROP TABLE` solo borra los índices secundarios.",
      "No existe diferencia; ambos comandos son sinónimos idénticos en todos los motores de bases de datos."
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
      "Ningún atributo que forme parte de la Clave Primaria puede tomar valores nulos (NOT NULL obligatorio).",
      "Todas las tablas del esquema relacional deben contener al menos diez tuplas registradas en el disco.",
      "Los nombres de las relaciones y de las columnas deben escribirse obligatoriamente en mayúsculas.",
      "No se pueden utilizar claves foráneas compuestas por más de dos columnas en el diseño relacional."
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
      "Toda clave foránea no nula debe coincidir con un valor existente de clave primaria en la tabla referenciada.",
      "Todas las tablas de la base de datos deben tener obligatoriamente al menos dos claves foráneas activas.",
      "Las claves foráneas no pueden apuntar a tablas que pertenezcan al mismo esquema de base de datos.",
      "Los valores de las claves foráneas deben ser números enteros correlativos sin saltos en la secuencia."
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
      "Todos los valores de una columna deben pertenecer al conjunto de valores válidos definidos por su tipo de dato y restricciones.",
      "El nombre de la base de datos debe coincidir con el nombre de dominio DNS registrado por la empresa en los servidores de internet.",
      "Las tablas solo pueden crearse dentro de esquemas que pertenezcan al usuario administrador del sistema operativo del servidor host.",
      "Los tipos de datos de las columnas deben ser exclusivamente cadenas de texto de longitud fija (CHAR) sin admitir campos variables."
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
      "El proceso de descomponer relaciones para minimizar redundancias, evitar anomalías y preservar la integridad.",
      "La técnica de comprimir archivos de base de datos en discos secundarios para reducir el espacio ocupado.",
      "El procedimiento de encriptar las contraseñas y datos bancarios antes de transmitirlos por la red local.",
      "La conversión de esquemas relacionales a estructuras multidimensionales orientadas a Business Intelligence."
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
      "Todos los atributos son atómicos (indivisibles), no existen grupos repetitivos y cada fila es única.",
      "La tabla tiene exactamente una clave foránea que apunta a una tabla padre en el mismo esquema.",
      "Todos los registros de la tabla poseen la misma longitud física en bytes en el disco secundario.",
      "No existen columnas con nombres duplicados en diferentes tablas de la misma base de datos relacional."
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
      "Está en 1NF y ningún atributo no clave depende parcialmente de una clave primaria compuesta (dependencia funcional total).",
      "Tiene exactamente dos claves primarias numéricas y no contiene columnas con valores de fecha y hora registrados en disco.",
      "Almacena menos de mil registros por partición física y no utiliza índices de tipo B-Tree en su estructura de almacenamiento.",
      "Todas sus columnas de texto han sido convertidas al tipo VARCHAR con longitud máxima menor a cincuenta caracteres alfanuméricos."
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
      "Está en 2NF y ningún atributo no clave depende transitivamente de la clave primaria (no hay dependencias X -> Y -> Z).",
      "Posee tres tablas intermedias asociativas para modelar relaciones muchos a muchos entre entidades maestras.",
      "Tiene todas sus columnas cifradas mediante algoritmos simétricos de tres claves independientes en reposo.",
      "Ha eliminado todos los índices secundarios para acelerar al máximo las operaciones DML de inserción masiva."
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
      "Una variante más estricta de 3NF donde para cada dependencia funcional `X -> Y`, `X` debe ser una superclave.",
      "Un modelo de normalización aplicado exclusivamente a bases de datos relacionales distribuidas en la nube.",
      "Una regla que exige que todas las claves primarias de la base de datos contengan al menos tres columnas.",
      "Un algoritmo de particionamiento de tablas que divide las relaciones según el rango de fechas de inserción."
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
      "Introducir redundancia controlada para evitar JOINs costosos y acelerar lecturas, aumentando la complejidad de escritura.",
      "Eliminar todas las claves foráneas del modelo para permitir que los usuarios inserten datos sin restricciones.",
      "Convertir tablas relacionales en archivos de texto plano para reducir los costos de licencias de software.",
      "Desfragmentar los índices del disco duro para recuperar espacio libre tras operaciones masivas de borrado."
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
      "Estructura auxiliar en disco que agiliza búsquedas y ordenamientos evitando el escaneo completo de la tabla (Full Table Scan).",
      "Un archivo de texto en el servidor donde se registran los nombres de los usuarios que inician sesión en el sistema.",
      "Una copia de seguridad comprimida de la base de datos que se almacena automáticamente en un servidor remoto.",
      "Un módulo de seguridad del sistema operativo que previene accesos no autorizados a los puertos de red del motor."
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
      "Mantiene los datos ordenados en un árbol auto-balanceado con complejidad logarítmica O(log N) para búsquedas, rangos y orden.",
      "Almacena todos los registros en memoria RAM sin consumir ningún espacio de almacenamiento en el disco secundario del servidor.",
      "Solo admite columnas numéricas con valores enteros del uno al diez, rechazando campos de texto y fechas en la indexación.",
      "Ejecuta las consultas exclusivamente en la unidad de procesamiento gráfico (GPU) para acelerar el procesamiento de datos masivos."
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
      "El índice Clustered define el orden físico real de los datos en disco (1 por tabla); el Non-Clustered guarda punteros a las filas.",
      "El índice Clustered solo funciona en columnas de texto; el Non-Clustered se utiliza exclusivamente en claves primarias numéricas.",
      "El índice Clustered se destruye al reiniciar el servidor; el Non-Clustered permanece guardado permanentemente en el disco.",
      "No existe diferencia técnica; ambos términos representan la misma estructura de árbol B-Tree en todos los motores."
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
      "El optimizador puede utilizar el índice si la consulta filtra por la primera columna (prefijo izquierdo `A`) o `(A, B)`.",
      "El índice solo se utiliza si la consulta filtra obligatoriamente por la columna `B` de forma aislada en el WHERE.",
      "El índice se descarta automáticamente si la consulta incluye operadores de comparación como `<>` o `BETWEEN`.",
      "El motor relacional exige que ambas columnas pertenezcan a tablas diferentes vinculadas mediante un INNER JOIN."
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
      "`CREATE INDEX idx_nombre ON tabla (columna);` / `CREATE UNIQUE INDEX idx_nombre ON tabla (columna);`",
      "`MAKE INDEX idx_nombre FOR tabla USING columna;` / `SET UNIQUE INDEX ON tabla (columna);`",
      "`NEW INDEX ON tabla (columna);` / `ADD UNIQUE INDEX idx_nombre TO tabla (columna);`",
      "`DEFINE INDEX idx_nombre IN tabla WITH columna;` / `BUILD UNIQUE INDEX ON tabla (columna);`"
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
      "Consumen espacio adicional en disco y ralentizan las operaciones de escritura (INSERT, UPDATE, DELETE) al tener que actualizarse.",
      "Eliminan automáticamente los datos históricos de las tablas físicas si superan un límite de almacenamiento configurado.",
      "El estándar SQL limita a un máximo de dos índices por servidor, bloqueando la creación de nuevos esquemas de datos.",
      "Provocan que las consultas de selección SELECT tarden el doble de tiempo en retornar los resultados a los clientes."
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
    "options": [
      "`CREATE VIEW vista_nombre AS SELECT ...;`",
      "`MAKE VIEW vista_nombre WITH QUERY SELECT ...;`",
      "`NEW VIRTUAL TABLE vista_nombre AS SELECT ...;`",
      "`DEFINE VIEW vista_nombre FROM QUERY SELECT ...;`"
    ],
    "correctAnswer": 0
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
    "options": [
      "Guarda físicamente el resultado de la consulta en disco para lecturas ultra rápidas y requiere refresco periódico.",
      "Es una vista que se ejecuta exclusivamente en la memoria RAM y se destruye automáticamente al cerrar la conexión.",
      "Es una tabla temporal que no permite la creación de índices ni la ejecución de consultas con cláusulas WHERE.",
      "Es una vista que solo puede consultar datos de tablas que no posean claves primarias ni restricciones de integridad."
    ],
    "correctAnswer": 0
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
      "Porque una relación es matemáticamente un conjunto de tuplas, y por definición formal los conjuntos no contienen elementos duplicados.",
      "Porque los discos magnéticos y de estado sólido solo permiten almacenar números pares y rechazan bloques idénticos.",
      "Porque la memoria RAM del servidor descarta automáticamente las cadenas de texto que se repiten en diferentes variables.",
      "Porque las directivas de los navegadores web modernos prohíben la transmisión de filas repetidas en paquetes HTTP."
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
      "Todas las tablas deben contener obligatoriamente al menos cien registros registrados en el disco secundario.",
      "Los nombres de las tablas y de los atributos deben escribirse siempre en letras mayúsculas en el código SQL.",
      "No se pueden utilizar claves foráneas que apunten a tablas del mismo esquema de base de datos relacional."
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
      "Un registro (o tupla) que representa una instancia individual de la entidad con valores para cada atributo.",
      "Un tipo de dato de dominio como INTEGER, VARCHAR o DATE utilizado para definir columnas de la tabla.",
      "Una restricción de integridad referencial que vincula dos tablas del esquema mediante claves foráneas.",
      "Un índice secundario de árbol B+ utilizado por el optimizador para agilizar búsquedas en el disco duro."
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
      "Debe ser obligatoriamente de tipo numérico secuencial autoincremental en todos los motores SQL.",
      "Puede contener valores repetidos siempre que correspondan a transacciones de solo lectura en red.",
      "Solo puede aplicarse sobre una única columna física, impidiendo la definición de claves compuestas."
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
      "Una tabla puede tener varias restricciones UNIQUE (admiten NULLs); solo puede tener una PRIMARY KEY (no admite NULLs).",
      "UNIQUE solo funciona en columnas de texto y PRIMARY KEY se utiliza exclusivamente en campos numéricos enteros.",
      "PRIMARY KEY no crea índices automáticos en disco mientras que la restricción UNIQUE siempre crea árboles B+.",
      "No existe ninguna diferencia técnica ni sintáctica; ambas restricciones son sinónimos idénticos en SQL."
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
      "ALTER TABLE (DDL de modificación de esquema)",
      "UPDATE TABLE (DML de modificación de datos)",
      "MODIFY SCHEMA (comando no estándar)",
      "INSERT COLUMN (sintaxis no válida en SQL)"
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
      "Establecer una relación referencial hacia la clave de una tabla padre, asegurando que no existan referencias a datos inexistentes.",
      "Aumentar de manera automática el tamaño del almacenamiento en disco cuando la base de datos alcanza su capacidad máxima.",
      "Encriptar mediante algoritmos criptográficos las contraseñas de los usuarios en las tablas de autenticación del sistema.",
      "Impedir que los usuarios finales realicen consultas de selección SELECT sobre columnas confidenciales de la tabla."
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
      "La existencia de 'registros huérfanos' (filas hijas que apunten a claves de tablas padre que no existen en el sistema).",
      "Que se ejecuten más de dos consultas simultáneas al mismo tiempo en el procesador del servidor de base de datos.",
      "Que los nombres de las columnas contengan caracteres en minúscula o espacios en blanco en su definición de esquema.",
      "Que se utilicen tipos de datos de fecha y hora en tablas que no posean una clave primaria compuesta definida."
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
      "Porque la PRIMARY KEY representa la identidad semántica principal elegida y es el destino por defecto de las claves foráneas.",
      "Porque la combinación de UNIQUE y NOT NULL no impide que los usuarios inserten valores duplicados en la columna.",
      "Porque los motores relacionales prohíben la creación de tablas que contengan columnas con la restricción UNIQUE.",
      "Porque sin una PRIMARY KEY explícita los motores no permiten ejecutar consultas SELECT con la cláusula WHERE."
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
      "ALTER TABLE es DDL (modifica la estructura/esquema); INSERT INTO es DML (manipula los datos dentro de la tabla).",
      "ALTER TABLE inserta nuevos datos en disco; INSERT INTO modifica los tipos de datos de las columnas de la tabla.",
      "ALTER TABLE solo puede ser ejecutado por el sistema operativo host y nunca por un usuario administrador de SQL.",
      "Ambos comandos realizan exactamente la misma operación de actualización de metadatos en cualquier motor relacional."
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
      "Creando una tabla intermedia (asociativa o de unión) que contenga como claves foráneas las claves primarias de ambas tablas.",
      "Colocando una lista separada por comas de identificadores numéricos dentro de un único campo de texto en la tabla principal.",
      "Duplicando toda la tabla de Cursos dentro de cada fila de Estudiantes para almacenar las inscripciones registradas.",
      "No es posible representar relaciones Muchos a Muchos en bases de datos relacionales según las reglas de normalización."
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
      "LIMIT restringe la cantidad máxima de filas retornadas; OFFSET especifica cuántas filas saltar antes de comenzar a retornar.",
      "LIMIT define la cantidad máxima de columnas proyectadas; OFFSET filtra los registros que contienen valores nulos en disco.",
      "LIMIT ordena ascendentemente los registros; OFFSET ejecuta el ordenamiento descendente de las tuplas del resultado.",
      "LIMIT borra registros antiguos del almacenamiento; OFFSET crea nuevas tablas temporales en la memoria del servidor."
    ],
    "correctAnswer": 0,
    "hint": "LIMIT fija el tamaño de la página y OFFSET el desplazamiento o salto de registros.",
    "explanation": "LIMIT N indica retornar como máximo N filas, y OFFSET M indica omitir las primeras M filas del resultado, permitiendo implementar paginación de datos de forma precisa.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 3)",
    "slideImage": "assets/clases_infographics/clase5_p03.png",
    "type": "single_choice"
  }
];

if (typeof window !== 'undefined') {
  window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_DATABASE;
}
