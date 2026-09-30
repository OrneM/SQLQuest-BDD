// Banco de Preguntas y Ejercicios Prácticos de Bases de Datos I (UTN BA)
// Total de preguntas: 203 (Clases 1 a 5, Autoevaluaciones, Ejercicios Prácticos DML/DQL y Modelado)

const QUESTIONS_DATABASE = [
  {
    "id": 101,
    "classNum": 1,
    "topic": "SGBD & Arquitectura",
    "unit": "Clase 1",
    "question": "¿Cuál es el objetivo primordial de un Sistema de Gestión de Bases de Datos (SGBD / DBMS)?",
    "options": [
      "Servir de interfaz entre los usuarios/aplicaciones y la base de datos física, garantizando almacenamiento eficiente, seguridad, concurrencia e integridad.",
      "Reemplazar al sistema operativo en la gestión de memoria RAM y periféricos de hardware.",
      "Ejecutar código compilado en C++ para renderizar interfaces gráficas de usuario.",
      "Comprimir archivos en formato ZIP para reducir espacio en el disco duro."
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
      "Incompatibilidad total con cualquier tipo de lenguaje de programación estructurado.",
      "Redundancia e inconsistencia de datos, dificultad para acceder a los datos y anomalías de acceso concurrente.",
      "Obligatoriedad de contar con procesadores cuánticos para abrir archivos de texto.",
      "Imposibilidad de almacenar más de 100 registros por archivo en cualquier soporte magnético."
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
      "Consorcio W3C (1994).",
      "Fundación Apache Software.",
      "Comité ANSI / X3 / SPARC (1975).",
      "Comité IEEE 802.11."
    ],
    "correctAnswer": 2,
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
      "Nivel Frontend, Nivel Backend y Nivel de Red.",
      "Nivel de Presentación, Nivel de Negocio y Nivel de Persistencia.",
      "Nivel de Memoria RAM, Nivel de Caché y Nivel de Disco Rígido.",
      "Nivel Externo (Vistas), Nivel Conceptual (Lógico Global) y Nivel Interno (Físico)."
    ],
    "correctAnswer": 3,
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
      "Gestionar los bloques físicos de lectura/escritura en los cilindros del disco magnético.",
      "Diseñar la interfaz visual y la combinación de colores que ve el usuario en su navegador web.",
      "Asignar la dirección IP y el puerto de conexión del servidor de base de datos."
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
      "El cableado de red y los protocolos TCP/IP utilizados para transmitir consultas.",
      "Las diferentes vistas de usuario personalizadas, mostrando solo la información relevante para cada perfil y ocultando el resto por seguridad.",
      "El número de sectores y pistas en los platos del disco duro del servidor.",
      "El código ensamblador ejecutado directamente por la CPU."
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
      "Las reglas de negocio de la empresa plasmadas en diagramas de clases UML.",
      "El listado de permisos y roles de los usuarios del sistema.",
      "La estructura física de almacenamiento de los datos en disco, tamaños de registro en bytes, punteros, compresión e indexación.",
      "La sintaxis de las consultas SQL enviadas por las aplicaciones cliente."
    ],
    "correctAnswer": 2,
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
      "La capacidad de desconectar el cable de red del servidor sin interrumpir las consultas activas.",
      "La propiedad que permite cambiar las reglas de negocio sin modificar los tipos de datos de las columnas.",
      "La independencia del personal de TI respecto al mantenimiento de los equipos de hardware.",
      "La capacidad de modificar el esquema interno (ej. agregar un índice o cambiar de disco) sin tener que alterar el esquema conceptual ni los programas de aplicación."
    ],
    "correctAnswer": 3,
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
      "La capacidad de modificar el esquema conceptual (ej. agregar una nueva entidad o atributo) sin tener que reescribir los esquemas externos ni las aplicaciones existentes que no usan esos datos.",
      "La capacidad de ejecutar consultas SQL sin utilizar operadores booleanos como AND u OR.",
      "La propiedad de evitar el uso de memoria RAM mediante el almacenamiento exclusivo en memoria ROM.",
      "La posibilidad de ejecutar el motor de base de datos sin un sistema operativo instalado."
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
      "Permite que un nodo hijo tenga múltiples nodos padres formando un grafo abierto arbitrario sin restricciones.",
      "Organiza los datos en una estructura de árbol donde cada registro hijo tiene exactamente un único registro padre (relaciones 1:N).",
      "Representa toda la información mediante tablas bidimensionales compuestas por filas y columnas sin punteros visibles.",
      "Utiliza exclusivamente documentos JSON anidados sin esquema rígido."
    ],
    "correctAnswer": 1,
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
      "Eliminó completamente el uso de punteros físicos en el disco duro.",
      "Introdujo el lenguaje declarativo SQL para consultas sin navegación manual.",
      "Permitió que un registro miembro (hijo) pudiera pertenecer a múltiples conjuntos y tener más de un registro dueño (padre), formando grafos.",
      "Permitió almacenar audio y video sin consumir espacio en disco."
    ],
    "correctAnswer": 2,
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
      "Alan Turing, fundamentado en la teoría de máquinas de estado finito.",
      "John von Neumann, fundamentado en la arquitectura de buses de memoria.",
      "Tim Berners-Lee, fundamentado en el protocolo de hipertexto HTTP.",
      "Edgar F. Codd, fundamentado en la teoría matemática de conjuntos y la lógica de predicados de primer orden."
    ],
    "correctAnswer": 3,
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
      "Porque consume menos del 1% de memoria RAM comparado con cualquier base de datos relacional.",
      "Porque no requiere ningún tipo de disco duro para persistir la información.",
      "Porque elimina la necesidad de realizar copias de seguridad (backups)."
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
      "Ejecutar consultas analíticas masivas que leen millones de filas históricas para generar reportes estratégicos trimestrales.",
      "Gestionar las operaciones transaccionales del día a día con alto volumen de lecturas y escrituras puntuales, rápidas, atómicas y concurrentes.",
      "Servir de almacén de datos (Data Warehouse) con esquemas en estrella desnormalizados.",
      "Entrenar modelos de redes neuronales profundas en tarjetas gráficas."
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
      "Optimizado para inserciones y actualizaciones bancarias de alta frecuencia fila por fila.",
      "Requiere normalización estricta en 5ta Forma Normal para evitar cualquier tipo de redundancia.",
      "Optimizado para consultas complejas de agregación sobre grandes volúmenes de datos históricos (Data Warehouses / Cubos) para la toma de decisiones estratégicas.",
      "Bloquea la base de datos completa cada vez que un usuario realiza una lectura de un solo registro."
    ],
    "correctAnswer": 2,
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
      "El Administrador de Bloqueos de Red (Network Lock Driver).",
      "El Controlador de Interrupciones del Teclado.",
      "La Unidad Aritmético Lógica (ALU) del microprocesador.",
      "El Procesador y Optimizador de Consultas (Query Processor & Optimizer)."
    ],
    "correctAnswer": 3,
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
      "El Administrador de Almacenamiento (Storage Manager / Buffer Manager).",
      "El Renderizador de Fuentes Tipográficas.",
      "El Transpilador de Lenguaje Natural.",
      "El Módulo de Compilación Just-In-Time de Javascript."
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
      "Un libro impreso en papel con las instrucciones de instalación del servidor.",
      "Una estructura interna donde el SGBD almacena los Metadatos (definiciones de tablas, columnas, tipos de datos, índices y privilegios).",
      "Un archivo de texto temporal que se destruye cada vez que se reinicia el servidor.",
      "Un catálogo de precios comerciales para adquirir licencias de software."
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
      "Al fallo mecánico del motor del disco duro al intentar leer un sector dañado.",
      "A la escritura de código SQL con errores de ortografía en los nombres de las tablas.",
      "A la situación en la que existen copias redundantes del mismo dato con valores diferentes y contradictorios en distintos lugares.",
      "A la diferencia de velocidad entre la memoria caché y la memoria RAM principal."
    ],
    "correctAnswer": 2,
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
      "Escribir exclusivamente el código HTML y CSS de las aplicaciones web cliente.",
      "Diseñar los logotipos y materiales de marketing de los productos de la empresa.",
      "Atender llamadas de soporte técnico para formatear computadoras de escritorio.",
      "Gestionar la seguridad, respaldos, afinamiento de rendimiento (tuning), disponibilidad y mantenimiento global del SGBD."
    ],
    "correctAnswer": 3,
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
      "20 bytes obligatorios, porque ninguna vista puede tener menos bytes que el registro físico.",
      "40 bytes, debido a la duplicación de datos requerida por el nivel conceptual.",
      "0 bytes, porque las vistas externas no ocupan ningún tipo de dato."
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
      "La diferencia de velocidad en megabytes por segundo entre un cable Ethernet y un cable de fibra óptica.",
      "El desajuste en los tamaños de pantalla entre monitores de escritorio y teléfonos móviles.",
      "La dificultad conceptual y técnica de mapear objetos de lenguajes orientados a objetos (con herencia, polimorfismo y punteros) a tablas relacionales planas bidimensionales.",
      "Un error que ocurre cuando se instalan dos versiones distintas de PostgreSQL en la misma computadora."
    ],
    "correctAnswer": 2,
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
      "El Adaptador de Corriente Alterna del servidor.",
      "El Protocolo DNS de resolución de nombres de dominio.",
      "El Motor de Renderizado WebKit.",
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
      "Es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso.",
      "Es un lenguaje de programación utilizado exclusivamente para diseñar interfaces de usuario.",
      "Es un dispositivo físico de almacenamiento secundario como un disco rígido o pendrive.",
      "Es un archivo de texto plano no estructurado que almacena variables de sesión temporales."
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
      "Como objetos que combinan estado (atributos) y comportamiento (métodos), en lugar de tablas con filas y columnas.",
      "Únicamente a través de documentos JSON anidados sin ningún tipo de esquema.",
      "Mediante punteros directos en memoria RAM sin persistencia en disco secundario.",
      "A través de grafos de nodos no dirigidos y aristas ponderadas."
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
      "Gestionar el almacenamiento físico, la recuperación, concurrencia, seguridad e integridad de los datos en el almacenamiento secundario.",
      "Compilar y optimizar código JavaScript del lado del cliente en el navegador.",
      "Diseñar las hojas de estilo CSS para la visualización de reportes de negocio.",
      "Reemplazar los controladores de red del sistema operativo host."
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
      "Es la duplicación innecesaria de la misma información en múltiples lugares, lo que puede causar inconsistencias y desperdicio de almacenamiento.",
      "Es la velocidad de respuesta de una consulta compleja con múltiples agregaciones.",
      "Es el protocolo de encriptación de datos en tránsito entre el cliente y el servidor.",
      "Es la capacidad de una base de datos de recuperarse automáticamente ante cortes de energía."
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
      "Permite modificar el esquema lógico (tablas/vistas) o físico (índices/almacenamiento en disco) sin tener que reescribir las aplicaciones que consumen los datos.",
      "Que la base de datos puede funcionar sin conexión a internet ni energía eléctrica.",
      "Que el servidor de base de datos no depende de ningún sistema operativo para ejecutarse.",
      "Que los datos se borran automáticamente cada vez que se reinicia el servidor."
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
      "En una estructura de árbol invertido con relaciones padre-hijo (1 a N), donde cada nodo hijo tiene un único padre.",
      "En una matriz bidimensional no orientada sin jerarquías.",
      "Como una red donde cualquier nodo puede tener múltiples padres y múltiples hijos libremente.",
      "En tablas independientes vinculadas únicamente mediante sentencias DML de inserción."
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
      "Una estructura bidimensional compuesta por filas (tuplas o registros) y columnas (campos o atributos).",
      "Un archivo binario comprimido con extensión .sql que contiene la copia de seguridad.",
      "Un procedimiento almacenado que se ejecuta automáticamente al insertar datos.",
      "El espacio de memoria caché que utiliza el motor para almacenar índices temporales."
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
      "OLTP está optimizado para transacciones rápidas, concurrentes y operativas del día a día; OLAP está orientado a consultas analíticas complejas y reportes sobre grandes volúmenes históricos.",
      "OLTP solo admite lectura de datos, mientras que OLAP solo admite inserciones.",
      "OLTP se utiliza exclusivamente en aplicaciones móviles y OLAP en sistemas operativos de escritorio.",
      "OLTP no utiliza SQL mientras que OLAP requiere código binario en lenguaje ensamblador."
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
      "Especificar las columnas o expresiones calculadas que formarán la proyección del resultado.",
      "Filtrar las filas que cumplen una condición booleana específica.",
      "Indicar el nombre de la tabla de origen desde donde se leen los datos.",
      "Definir el orden ascendente o descendente en el que se presentan las filas."
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
      "Porque está prohibido por el estándar ANSI SQL-92 y genera errores en PostgreSQL.",
      "Porque transfiere columnas innecesarias por la red, consume memoria extra e impide el uso eficiente de índices de solo cobertura (covering indexes).",
      "Porque borra automáticamente los índices de la tabla consultada.",
      "Porque convierte todos los tipos de datos numéricos a texto."
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
      "Agrupar las filas que comparten un mismo valor en una columna.",
      "Definir alias temporales para renombrar columnas en el resultado.",
      "Filtrar y restringir las filas que deben procesarse evaluando un predicado lógico (verdadero / falso / desconocido).",
      "Ordenar las filas de forma ascendente o descendente."
    ],
    "correctAnswer": 2,
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
      "!= y !== exclusivamente.",
      "== y === exclusivamente.",
      "NOT EQUAL y DIFFERENT exclusivamente.",
      "<> (estándar ISO) y != (ampliamente soportado)."
    ],
    "correctAnswer": 3,
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
      "Porque NULL es una palabra reservada que solo puede utilizarse dentro de la cláusula ORDER BY.",
      "Porque los motores relacionales convierten automáticamente NULL al número cero (0).",
      "Porque el estándar SQL requiere que NULL se compare exclusivamente utilizando el operador LIKE."
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
      "La suma algebraica de comisión, bono y cero.",
      "El primer valor de la lista que no sea NULL; si todos son NULL, devuelve 0.",
      "El promedio ponderado de los tres valores.",
      "Un valor booleano TRUE si alguna de las tres columnas es mayor a cero."
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
      "Solo se incluye el límite superior (30), pero no el 20.",
      "Solo se incluye el límite inferior (20), pero no el 30.",
      "Sí, el operador BETWEEN en SQL es inclusivo en ambos extremos (`edad >= 20 AND edad <= 30`).",
      "No, BETWEEN es estrictamente exclusivo (`edad > 20 AND edad < 30`)."
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
      "Exactamente un único carácter obligatorio.",
      "Cualquier número entero del 0 al 9.",
      "El inicio obligado de una palabra sin espacios."
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
      "`'A%'`",
      "`'A__'` (letra A seguida de dos guiones bajos)",
      "`'A*2'`",
      "`'A..'`"
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
      "Suma el código de departamento con el salario y ordena por el total resultante.",
      "Ignora la columna departamento y ordena exclusivamente por salario.",
      "Alterna una fila ordenada por departamento y la siguiente por salario."
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
      "Reemplazando los NULLs por números negativos obligatoriamente en el WHERE.",
      "Configurando una variable de entorno en el sistema operativo del servidor.",
      "No es posible controlar la posición de los NULLs en ninguna versión de SQL."
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
      "Solo los empleados que pertenezcan a Ventas e IT al mismo tiempo y ganen más de $50.000.",
      "Todos los empleados de la empresa sin excepción.",
      "Únicamente los empleados de IT que ganen menos de $50.000."
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
      "Para modificar permanentemente el nombre de la columna en el disco duro.",
      "Para forzar que el cálculo se ejecute de manera asíncrona.",
      "Para indicar que la columna es una clave foránea."
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
      "TO_CAPS(texto).",
      "STRING_MAX(texto).",
      "CAPITALIZE_ALL(texto)."
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
      "JOIN_TEXT(cad1, cad2).",
      "APPEND(cad1, cad2).",
      "MERGE_STR(cad1, cad2)."
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
      "Devuelve el tamaño del archivo de base de datos en megabytes.",
      "Calcula la cantidad de tuplas almacenadas en la tabla.",
      "Mide el tiempo de respuesta del servidor en milisegundos."
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
      "`SPLIT_DATE(fecha_nacimiento, 1)`"
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
      "`SWITCH (condicion) { CASE valor1: break; }`",
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
      "`ILIKE` solo permite buscar números y `LIKE` solo texto.",
      "`ILIKE` es un comando DDL y `LIKE` es un comando DML.",
      "`ILIKE` requiere conexión a internet para conectarse a un diccionario."
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
      "El motor ignora silenciosamente el NULL y filtra solo por 1 y 2 con normalidad.",
      "El servidor de base de datos se bloquea y reinicia el servicio.",
      "La consulta devuelve todas las filas de la tabla sin aplicar ningún filtro."
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
      "Carlos Pérez | 48000",
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
      "3 empleados",
      "6 empleados",
      "8 empleados"
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
      "Calcula el salario máximo de toda la empresa = 81000.",
      "Suma todos los salarios de la empresa y los divide por 8.",
      "Calcula el promedio salarial de los departamentos 2, 3 y 4."
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
      "50 filas, donde cada fila de A se combina con todas las filas de B.",
      "15 filas (5 + 10).",
      "5 filas, tomando solo las filas coincidentes.",
      "0 filas (error de sintaxis en el motor)."
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
      "Únicamente aquellas tuplas de ambas tablas donde la condición de igualdad se cumple (intersección exacta de claves).",
      "Todas las tuplas de la tabla A, contengan o no coincidencias en la tabla B.",
      "Todas las tuplas de ambas tablas rellenando con NULL los campos sin coincidencia.",
      "Solo las tuplas que no coinciden en ninguna de las dos tablas."
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
      "Devuelve todas las filas de la tabla izquierda (Clientes); si un cliente no tiene pedidos, sus columnas de Pedidos se completan con valores `NULL`.",
      "Devuelve exclusivamente los clientes que tengan al menos 3 pedidos registrados.",
      "Devuelve únicamente las filas de la tabla derecha (Pedidos).",
      "Elimina a los clientes que no tienen pedidos de la base de datos."
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
      "Garantiza que todos los empleados (tabla derecha) aparezcan en el resultado, incluso si no tienen asignado un departamento.",
      "Garantiza que todos los departamentos aparezcan aunque no tengan empleados.",
      "Convierte la consulta en un escaneo de solo lectura sin bloqueos.",
      "Ordena el resultado alfabéticamente de la Z a la A obligatoriamente."
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
      "La combinación de todas las filas de ambas tablas: filas coincidentes unidas, y filas no coincidentes de ambos lados completadas con NULLs.",
      "La intersección exacta de registros que sean al mismo tiempo clientes y proveedores.",
      "El producto cartesiano de ambas tablas sin evaluar ninguna condición.",
      "Un error fatal porque SQL no permite unir tablas con nombres distintos."
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
      "`SELECT c.* FROM Clientes c LEFT JOIN Pedidos p ON c.id = p.id_cliente WHERE p.id IS NULL;`",
      "`SELECT c.* FROM Clientes c INNER JOIN Pedidos p ON c.id = p.id_cliente WHERE p.id = 0;`",
      "`SELECT c.* FROM Clientes c CROSS JOIN Pedidos p WHERE c.id <> p.id_cliente;`",
      "`SELECT c.* FROM Clientes c RIGHT JOIN Pedidos p ON c.id = p.id_cliente;`"
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
      "Para modelar relaciones recursivas o jerarquías dentro de la misma tabla (ej. obtener el nombre del empleado y el nombre de su jefe desde la tabla `Empleados`).",
      "Para duplicar el número de filas de una tabla antes de hacer un backup.",
      "Para unir dos bases de datos ubicadas en servidores físicos diferentes.",
      "Para calcular el logaritmo natural de una columna numérica."
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
      "Cuando la columna de unión tiene exactamente el mismo nombre y tipo de dato en ambas tablas.",
      "Únicamente cuando ambas tablas tienen menos de 10 registros.",
      "Solo si la consulta no incluye ninguna cláusula WHERE.",
      "Siempre que se utilice una base de datos NoSQL."
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
      "`COUNT(*)` cuenta el número total de filas (incluyendo filas con NULLs), mientras que `COUNT(comision)` cuenta únicamente las filas donde la columna `comision` no es NULL.",
      "`COUNT(*)` solo cuenta los números pares y `COUNT(comision)` los números impares.",
      "No existe ninguna diferencia, ambas funciones devuelven siempre el mismo número.",
      "`COUNT(comision)` suma los valores monetarios en lugar de contar registros."
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
      "150 (calcula `(100 + 200) / 2`, ignorando el valor NULL).",
      "100 (calcula `(100 + 200 + 0) / 3`).",
      "NULL (porque cualquier operación con NULL da NULL).",
      "Error de división por cero."
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
      "Cualquier columna que aparezca en el `SELECT` y no esté dentro de una función de agregación (SUM, AVG, etc.) DEBE estar incluida obligatoriamente en la cláusula `GROUP BY`.",
      "No se puede utilizar la cláusula WHERE si la consulta ya tiene GROUP BY.",
      "Todas las tablas deben tener exactamente la misma cantidad de filas.",
      "El GROUP BY solo puede aplicarse sobre columnas de tipo fecha."
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
      "`WHERE` filtra filas individuales ANTES del agrupamiento y no admite funciones de agregación; `HAVING` filtra grupos de filas DESPUÉS de aplicar las funciones de agregación.",
      "`HAVING` se ejecuta antes que el `FROM` y `WHERE` después del `ORDER BY`.",
      "`WHERE` solo funciona con cadenas de texto y `HAVING` solo con números enteros.",
      "No hay diferencia, son palabras sinónimas intercambiables."
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
      "Porque las funciones de agregación como `COUNT(*)` no pueden ubicarse en la cláusula `WHERE`; la condición de grupo debe ir en la cláusula `HAVING COUNT(*) > 5`.",
      "Porque la función COUNT(*) requiere obligatoriamente el uso de alias con AS.",
      "Porque la cláusula GROUP BY debe escribirse antes que la cláusula WHERE.",
      "Porque el número 5 debe escribirse en letras ('CINCO')."
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
      "1. FROM/JOIN -> 2. WHERE -> 3. GROUP BY -> 4. HAVING -> 5. SELECT -> 6. DISTINCT -> 7. ORDER BY -> 8. LIMIT.",
      "1. SELECT -> 2. FROM -> 3. WHERE -> 4. ORDER BY -> 5. GROUP BY.",
      "1. ORDER BY -> 2. LIMIT -> 3. SELECT -> 4. FROM -> 5. WHERE.",
      "1. GROUP BY -> 2. HAVING -> 3. WHERE -> 4. FROM -> 5. SELECT."
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
      "Porque la cláusula `WHERE` se evalúa lógicamente ANTES que la cláusula `SELECT`, por lo que el alias aún no existe cuando el WHERE se ejecuta.",
      "Porque los alias de columna solo pueden contener letras minúsculas.",
      "Porque el estándar SQL prohíbe el uso de multiplicaciones matemáticas.",
      "Porque los alias solo son válidos dentro de la consola del sistema operativo."
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
      "`UNION` elimina automáticamente las filas duplicadas del resultado final (requiere ordenar/hashear), mientras que `UNION ALL` conserva todos los duplicados y es mucho más rápido.",
      "`UNION` solo combina tablas numéricas y `UNION ALL` solo tablas de texto.",
      "`UNION ALL` borra los datos de la tabla física original.",
      "`UNION` une tablas en sentido horizontal (columnas) y `UNION ALL` en sentido vertical."
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
      "Ambas consultas deben proyectar exactamente la misma cantidad de columnas y los tipos de datos correspondientes deben ser compatibles en orden posicional.",
      "Ambas tablas deben tener exactamente el mismo nombre de tabla en la base de datos.",
      "Las consultas deben ejecutarse obligatoriamente al mismo tiempo por dos usuarios diferentes.",
      "No se requiere ninguna compatibilidad; se pueden unir consultas de 1 columna con consultas de 20 columnas libremente."
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
      "Únicamente las filas que están presentes en AMBOS conjuntos de resultados.",
      "Todas las filas del primer conjunto menos las del segundo conjunto.",
      "El producto cartesiano de ambas consultas.",
      "La suma de los valores monetarios de ambas tablas."
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
      "Las filas que aparecen en la consulta A pero que NO están presentes en la consulta B (diferencia de conjuntos A - B).",
      "La suma de todas las filas de A y B sin ninguna exclusión.",
      "Las filas que aparecen en B pero no en A exclusivamente.",
      "Un error si las tablas tienen más de 100 registros."
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
      "La cantidad total de productos multiplicada por las categorías.",
      "El precio promedio de los productos de cada categoría.",
      "La longitud en caracteres del nombre de la categoría más larga."
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
      "Porque une automáticamente las tablas por TODAS las columnas que tengan el mismo nombre sin advertencia; si se agrega una columna de auditoría como `fecha_creacion` en ambas tablas, la condición de unión cambiará silenciosamente y romperá los resultados.",
      "Porque NATURAL JOIN borra las tablas de la memoria RAM.",
      "Porque no es compatible con bases de datos que utilicen codificación UTF-8.",
      "Porque requiere reiniciar el servidor de base de datos después de cada consulta."
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
      "Devuelve 0 obligatoriamente.",
      "Genera un error de ejecución en el servidor.",
      "Devuelve -1."
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
      "3 (Ana Gómez, Lucía Fernández y Valeria Díaz)",
      "2",
      "1",
      "5"
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
      "Departamento 1 con una masa salarial de $204.000",
      "Departamento 2 con $107.000",
      "Departamento 3 con $98.000",
      "Departamento 4 con $81.000"
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
      "Carlos Pérez, Marcos Torres y Martín Silva",
      "Sofía Romero y Diego López únicamente",
      "Todos los 8 empleados de la empresa"
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
      "0 (ya que ningún empleado tiene asignado id_departamento = 5)",
      "1",
      "NULL",
      "Error de ejecución"
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
      "Únicamente el id_departamento = 1 (con 3 empleados).",
      "Los id_departamento 1, 2 y 3.",
      "Todos los departamentos de la base de datos.",
      "Ninguno, produce un error de compilación."
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
      "1, 2, 3, 4 (eliminando las repeticiones de los 8 empleados)",
      "1, 2, 3, 4, 5",
      "1, 1, 1, 2, 2, 3, 3, 4",
      "8"
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
      "`INSERT INTO Clientes (id, nombre, email) VALUES (1, 'Juan Pérez', 'juan@mail.com');`",
      "`INSERT INTO Clientes SET id = 1, nombre = 'Juan Pérez';`",
      "`ADD ROW TO Clientes (1, 'Juan Pérez', 'juan@mail.com');`",
      "`CREATE ROW IN Clientes VALUES (1, 'Juan Pérez');`"
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
      "`INSERT INTO Empleados_Historico (id, nombre) SELECT id, nombre FROM Empleados WHERE activo = false;`",
      "`INSERT INTO Empleados_Historico VALUES (SELECT * FROM Empleados);`",
      "`COPY SELECT * FROM Empleados TO Empleados_Historico;`",
      "`UPDATE Empleados_Historico FROM SELECT * FROM Empleados;`"
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
      "`UPDATE tabla SET columna1 = valor1, columna2 = valor2 WHERE condicion;`",
      "`MODIFY tabla (columna1 = valor1) WHERE condicion;`",
      "`UPDATE COLUMNS OF tabla SET valor1 WHERE condicion;`",
      "`ALTER tabla UPDATE columna1 = valor1;`"
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
      "TODOS los empleados de la tabla pasarán a tener un salario de $50.000, modificando la totalidad de las filas de la tabla.",
      "El motor SQL rechaza la consulta arrojando un error de sintaxis.",
      "Solo se actualiza el primer registro de la tabla física.",
      "Se crea una nueva tabla vacía llamada Empleados_50000."
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
      "Elimina la tupla correspondiente al cliente con id = 100 de la tabla Clientes.",
      "Borra la columna llamada 'id' de la definición de la tabla.",
      "Elimina la tabla Clientes completa junto con sus índices del disco.",
      "Pone el saldo del cliente 100 en cero sin borrar la fila."
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
      "`DELETE` es DML (borra fila por fila, genera log transaccional, permite WHERE y ROLLBACK); `TRUNCATE` es DDL (desasigna páginas de datos rápido, no admite WHERE); `DROP TABLE` es DDL y elimina la estructura y metadatos del catálogo.",
      "`DELETE` borra la base de datos, `TRUNCATE` borra usuarios y `DROP` borra contraseñas.",
      "`TRUNCATE` solo funciona en tablas temporales y `DELETE` solo en vistas.",
      "No hay diferencias; los tres comandos son idénticos y sinónimos exactos."
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
      "Para devolver la conexión al pool de conexiones del servidor.",
      "Para hacer un rollback forzado de la transacción.",
      "Para retornar el código fuente en C del motor de base de datos."
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
      "Un usuario de base de datos con permisos limitados de lectura.",
      "Una consulta que se envía por correo electrónico a los administradores.",
      "Un script en Bash que crea copias de seguridad cada noche."
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
      "Retorna una tabla de 100 columnas y 100 filas obligatoriamente.",
      "Solo puede utilizarse dentro de procedimientos almacenados en Java.",
      "Es una subconsulta que no puede tener cláusula WHERE."
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
      "El operador de igualdad simple `=`.",
      "El operador de concatenación `||`.",
      "La función trigonométrica `SIN()`."
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
      "Limitar el resultado a un máximo de 3 filas con LIMIT.",
      "No incluir ningún tipo de función de agregación en la subconsulta.",
      "Crear un índice en memoria antes de ejecutarla."
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
      "Se evalúa una y otra vez por cada fila procesada en la consulta externa.",
      "Se ejecuta únicamente cuando el usuario presiona Ctrl + C en la terminal.",
      "Requiere compilar la base de datos en un archivo binario ejecutable."
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
      "Solo puede escribirse utilizando lenguaje Python embebido.",
      "No permite el uso de la cláusula WHERE.",
      "Se guarda automáticamente como una vista materializada en disco."
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
      "Calcula la suma de todos los números primos de la tabla.",
      "Carga la tabla entera en memoria RAM y cuenta cuántos caracteres tiene.",
      "Requiere que la subconsulta devuelva obligatoriamente la columna 'id'."
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
      "`SELECT c.* FROM Clientes c WHERE EXISTS (SELECT * FROM Pedidos p WHERE p.id = NULL);`",
      "`SELECT c.* FROM Clientes c WHERE NOT EXISTS p.id_cliente;`",
      "`SELECT c.* FROM Clientes c JOIN NOT EXISTS Pedidos;`"
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
      "Devuelve TRUE solo si el salario es mayor que todos los salarios de Ventas simultáneamente.",
      "Devuelve TRUE si el salario es igual a la suma total de salarios de Ventas.",
      "Devuelve un error porque ANY no se puede combinar con el signo mayor `>`."
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
      "Devuelve TRUE si el salario es mayor que el promedio de salarios de Ventas.",
      "Devuelve TRUE si el empleado trabaja en todas las sucursales de Ventas.",
      "Devuelve FALSE siempre que la tabla Ventas tenga más de una fila."
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
      "Aceleran las inserciones al comprimir los datos en memoria.",
      "No tienen ningún impacto porque los índices solo se actualizan una vez al año.",
      "Eliminan automáticamente los registros duplicados de la tabla física."
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
      "Porque las subconsultas consumen el doble de electricidad en el procesador.",
      "Porque el lenguaje SQL va a eliminar las subconsultas en futuras versiones.",
      "Porque los JOINs solo funcionan en modo oscuro."
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
      "INSERT INTO Departamentos (id, nombre_departamento) VALUES (6, 'Finanzas');",
      "ADD ROW TO Departamentos VALUES (6, 'Finanzas');",
      "INSERT RECORD (6, 'Finanzas') INTO Departamentos;",
      "UPDATE Departamentos ADD (6, 'Finanzas');"
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
      "El empleado que posee el salario más alto de la tabla.",
      "El promedio salarial de cada departamento por separado.",
      "Una lista de errores porque no se pueden anidar consultas en el WHERE."
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
      "Reemplazan completamente la necesidad de crear índices en la base de datos.",
      "Impiden que ocurran bloqueos de concurrencia en transacciones concurrentes.",
      "Convierten automáticamente bases de datos relacionales en bases de datos NoSQL."
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
      "El Grado es el número total de Atributos (columnas), mientras que la Cardinalidad es el número total de Tuplas (filas).",
      "El Grado es el número de filas y la Cardinalidad es el número de columnas.",
      "El Grado mide el tamaño en megabytes y la Cardinalidad el número de índices.",
      "El Grado representa la velocidad de lectura y la Cardinalidad la velocidad de escritura."
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
      "El conjunto de todos los valores atómicos válidos y permitidos que puede tomar un determinado atributo.",
      "El nombre del servidor web donde corre la aplicación.",
      "La dirección IP pública del cluster de base de datos.",
      "El listado de contraseñas de los usuarios administradores."
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
      "Cualquier conjunto de uno o más atributos que permite identificar de forma unívoca y sin ambigüedad a cada tupla de la relación.",
      "Una clave que permite saltarse todas las restricciones de seguridad.",
      "Una contraseña maestra de recuperación en caso de olvido.",
      "Una clave que almacena exclusivamente números binarios."
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
      "Una Superclave mínima, es decir, un conjunto unívoco de atributos del cual no se puede eliminar ningún atributo sin perder la propiedad de unicidad.",
      "Un usuario que aspira a ser administrador de la base de datos.",
      "Una tabla que todavía no ha sido guardada en disco.",
      "Una columna que contiene únicamente valores NULL."
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
      "La clave candidata elegida por el diseñador para identificar unívocamente las tuplas; no admite valores duplicados ni valores NULL (Integridad de Entidad).",
      "Cualquier columna numérica que admita números negativos y valores nulos.",
      "Una vista de sólo lectura creada por el administrador del sistema.",
      "Un archivo temporal generado automáticamente por el sistema operativo."
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
      "Cualquier clave candidata que NO fue seleccionada como la Clave Primaria de la tabla (ej. el DNI o Email si la PK elegida es `id_usuario`).",
      "Una clave que se utiliza únicamente cuando el servidor principal se apaga.",
      "Una columna que cambia de nombre aleatoriamente.",
      "Un índice que solo funciona en días festivos."
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
      "Un atributo en una relación que hace referencia a la Clave Primaria de otra relación (o de sí misma), garantizando el principio de Integridad Referencial.",
      "Una contraseña que permite conectarse a servidores ubicados en el extranjero.",
      "Una columna que contiene únicamente texto en idioma inglés.",
      "Un identificador que solo se almacena en la memoria caché del navegador."
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
      "Que la base de datos no debe contener valores de clave foránea huérfanos sin correspondencia en la clave primaria de la tabla padre referenciada.",
      "Que todas las tablas deben tener exactamente 10 columnas obligatorias.",
      "Que no se pueden utilizar números decimales en las claves primarias.",
      "Que los backups deben realizarse exclusivamente en cintas magnéticas."
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
      "Se eliminan automáticamente todos los registros hijos asociados en la tabla referenciante.",
      "El motor SQL bloquea la operación y emite un error de violación de integridad.",
      "Las claves foráneas de los registros hijos se ponen en NULL.",
      "Se apaga el servidor de base de datos de inmediato."
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
      "El motor impide y rechaza la eliminación arrojando un error de violación de clave foránea, protegiendo a los registros hijos.",
      "Se borra el padre y todos los hijos automáticamente.",
      "Se borran los hijos pero el padre se conserva en una tabla de auditoría.",
      "El registro padre se renombra con la palabra 'ELIMINADO'."
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
      "El valor de la clave foránea en todos los registros hijos asociados se actualiza automáticamente a `NULL` (la columna FK debe admitir nulos).",
      "Los registros hijos se borran completamente del disco duro.",
      "La tabla entera se llena de ceros.",
      "El motor convierte la tabla hija en un archivo de texto plano."
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
      "En la tabla del lado 'Muchos' (Pedidos), referenciando a la Clave Primaria de Clientes.",
      "En la tabla del lado 'Uno' (Clientes).",
      "Obligatoriamente en una tabla intermedia adicional con 5 columnas.",
      "En ninguna tabla, porque las relaciones 1:N no utilizan claves foráneas."
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
      "Creando una Tabla Intermedia (o asociativa, ej. `Inscripciones`) cuya Clave Primaria compuesta estará formada por las Claves Foráneas de ambas tablas relacionadas.",
      "Colocando un array de IDs de cursos en una columna de texto en Estudiantes.",
      "Duplicando la tabla Estudiantes 10 veces en el disco.",
      "Fusionando ambas entidades en una sola tabla sin claves primarias."
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
      "Que cada ocurrencia de la entidad debe participar OBLIGATORIAMENTE en la relación y con un MÁXIMO de una sola asociación.",
      "Que la entidad puede tener entre 0 y 100 relaciones opcionales.",
      "Que la entidad no tiene ninguna clave primaria.",
      "Que la tabla se encuentra desnormalizada."
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
      "Participación opcional (mínimo 0) con un límite máximo de una sola asociación (máximo 1).",
      "Participación obligatoria con infinitas asociaciones.",
      "Una relación de muchos a muchos sin resolver.",
      "Un error en el diagrama entidad-relación."
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
      "Que todos los atributos contengan exclusivamente valores atómicos (indivisibles), sin grupos repetitivos, listas ni arrays dentro de una misma celda.",
      "Que todas las tablas tengan al menos un índice B-Tree creado.",
      "Que no existan claves foráneas en la base de datos.",
      "Que todos los nombres de columnas tengan menos de 5 letras."
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
      "Debe estar en 1NF y ningún atributo no clave debe tener dependencias funcionales parciales (todo atributo no clave debe depender de la Clave Primaria COMPLETA).",
      "Debe tener exactamente dos claves primarias numéricas.",
      "Debe almacenar menos de 1000 registros por partición.",
      "No debe contener ninguna columna de tipo fecha."
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
      "Debe estar en 2NF y no deben existir dependencias funcionales transitivas (ningún atributo no clave debe depender de otro atributo no clave).",
      "Debe tener exactamente 3 tablas relacionadas mediante INNER JOIN.",
      "Debe ser ejecutada en un cluster de 3 servidores réplica.",
      "Debe almacenar datos en formato XML comprimido."
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
      "Una estructura de datos auxiliar en disco que permite localizar y acceder a filas específicas a gran velocidad sin necesidad de realizar un escaneo secuencial completo de la tabla.",
      "Un registro de los nombres de usuario que iniciaron sesión.",
      "Una copia comprimida de la base de datos guardada en la nube.",
      "Un programa antivirus instalado en el servidor."
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
      "Porque mantiene los datos ordenados en un árbol auto-balanceado con complejidad O(log N), siendo extraordinariamente eficiente tanto para búsquedas de igualdad (`=`) como para consultas de rango (`<`, `<=`, `>`, `>=`, `BETWEEN`).",
      "Porque no ocupa ningún espacio en disco duro.",
      "Porque solo permite almacenar números del 1 al 10.",
      "Porque se ejecuta exclusivamente en la tarjeta gráfica del servidor."
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
      "Exclusivamente en columnas que contienen la clave primaria entera autoincremental.",
      "En tablas que solo tienen una única fila.",
      "Para acelerar la conexión SSH al servidor."
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
      "Encriptación de contraseñas bancarias.",
      "Formateo automático de código SQL.",
      "Compresión de imágenes en formato PNG."
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
      "En consultar únicamente el índice en memoria sin tocar el disco.",
      "En apagar los discos duros para ahorrar energía eléctrica.",
      "En leer únicamente las primeras 5 filas de la tabla."
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
      "Porque los índices borran automáticamente los datos históricos de la empresa.",
      "Porque el estándar SQL limita a un máximo de 2 índices por servidor.",
      "Porque los índices provocan que las consultas SELECT se vuelvan 100 veces más lentas."
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
      "Porque el disco duro solo permite guardar números pares.",
      "Porque la memoria RAM rechaza las filas duplicadas.",
      "Porque está prohibido por los navegadores web modernos."
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
      "Todas las tablas deben contener al menos 100 registros.",
      "Los nombres de las tablas deben escribirse obligatoriamente en mayúsculas.",
      "No se pueden utilizar claves foráneas en bases de datos relacionales."
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
      "Un tipo de dato de dominio como INTEGER o VARCHAR.",
      "Una restricción de integridad referencial.",
      "Un índice de árbol B+ para optimizar búsquedas en disco."
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
      "Debe ser de tipo numérico secuencial autoincremental de forma obligatoria.",
      "Puede repetirse siempre que pertenezca a diferentes transacciones concurrentes.",
      "Solo puede aplicarse sobre una única columna, nunca sobre múltiples columnas compuestas."
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
      "UNIQUE solo funciona en cadenas de texto y PRIMARY KEY solo en números enteros.",
      "PRIMARY KEY no crea índices automáticos mientras que UNIQUE sí lo hace.",
      "No existe ninguna diferencia técnica ni sintáctica entre ambas."
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
      "Aumentar automáticamente el tamaño del disco cuando la base de datos se llena.",
      "Encriptar las contraseñas de los usuarios en la base de datos.",
      "Evitar que los usuarios realicen consultas de tipo SELECT en la tabla."
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
      "Que se ejecuten más de dos consultas al mismo tiempo en el servidor.",
      "Que los nombres de las columnas contengan caracteres en minúscula.",
      "Que se utilicen tipos de datos de fecha en las tablas."
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
      "Porque UNIQUE y NOT NULL no impiden que se inserten valores duplicados.",
      "Porque los motores relacionales prohíben crear tablas sin la cláusula UNIQUE.",
      "Porque sin PRIMARY KEY no se pueden ejecutar sentencias SELECT."
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
      "ALTER TABLE inserta datos y INSERT INTO modifica las columnas.",
      "ALTER TABLE solo puede ser ejecutado por el sistema operativo y no por el usuario administrador.",
      "Ambos comandos hacen exactamente lo mismo en cualquier motor SQL estándar."
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
      "Colocando una lista separada por comas de IDs de cursos dentro de un campo de texto en Estudiantes.",
      "Duplicando la tabla de Cursos dentro de cada registro de Estudiantes.",
      "No es posible representar relaciones Muchos a Muchos en bases de datos relacionales."
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
      "LIMIT define la cantidad máxima de columnas y OFFSET filtra los registros nulos.",
      "LIMIT ordena ascendentemente y OFFSET ordena descendentemente.",
      "LIMIT borra registros antiguos y OFFSET crea nuevas tablas temporales."
    ],
    "correctAnswer": 0,
    "hint": "LIMIT fija el tamaño de la página y OFFSET el desplazamiento o salto de registros.",
    "explanation": "LIMIT N indica retornar como máximo N filas, y OFFSET M indica omitir las primeras M filas del resultado, permitiendo implementar paginación de datos de forma precisa.",
    "citation": "UTN BA - Cátedra Bases de Datos I - Autoevaluación 5 (Diapositiva Clase 5, pág. 3)",
    "slideImage": "assets/clases_infographics/clase5_p03.png",
    "type": "single_choice"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUESTIONS_DATABASE;
}
