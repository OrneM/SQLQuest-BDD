// Banco Oficial de Preguntas - Bases de Datos I
// Basado en el Primer Parcial Oficial (100% de coincidencia) y las Clases 1 a 5 con Infografías Explicativas

const QUESTIONS_DATABASE = [
  {
    id: 1,
    topic: "Clase 04: Índices y DML",
    unit: "Unidad 4",
    type: "single_choice",
    question: "¿Cómo impactan las operaciones de manipulación de datos (DML) a los índices de una tabla?",
    options: [
      "Para tablas con un gran volumen de datos y muchas actualizaciones, siempre es recomendable tener la menor cantidad de índices posible.",
      "Cada operación de creación, modificación o eliminación de un registro en una tabla impacta los índices definidos sobre ella, pudiendo bajar el rendimiento si hay muchos índices.",
      "La presencia de muchos índices en una tabla acelera consistentemente todas las operaciones, incluyendo inserciones y actualizaciones.",
      "Los índices solo afectan el rendimiento de las operaciones de consulta (SELECT), no de las operaciones DML."
    ],
    correctAnswer: 1,
    explanation: "Cada operación DML (INSERT, UPDATE, DELETE) obliga al motor a reestructurar o balancear los índices asociados en disco (B-Tree page splits y rebalanceos). Por eso, un exceso de índices penaliza severamente la velocidad de escritura.",
    citation: "Clase 04 - Manipulación de datos e Índices.",
    slideImage: "assets/clases_infographics/clase4_p14.png"
  },
  {
    id: 2,
    topic: "Clase 03: Modelos de Datos",
    unit: "Unidad 2-3",
    type: "single_choice",
    question: "El modelo de base de datos Orientado a Objetos es eficiente para...",
    options: [
      "Procesar grandes volúmenes de datos transaccionales de forma masiva.",
      "Mantener una estructura jerárquica rígida para garantizar la integridad de los datos.",
      "Realizar consultas analíticas complejas sobre datos históricos.",
      "Encontrar y acceder a elementos únicos, resolviendo complejidades de relaciones muchos a muchos (N-M) con colecciones."
    ],
    correctAnswer: 3,
    explanation: "El modelo OODBMS maneja punteros directos e identidad de objetos (OID), simplificando y acelerando la navegación de relaciones complejas N-M a través de colecciones sin requerir costosos JOINs relacionales.",
    citation: "Clase 03 - Modelos Jerárquico, Red y Objetos.",
    slideImage: "assets/clases_infographics/clase3_p02.png"
  },
  {
    id: 3,
    topic: "Clase 02: Funciones de Agregación",
    unit: "Unidad 1",
    type: "matching",
    question: "Relaciona cada función de agregación SQL con el resultado que devuelve:",
    pairs: [
      { key: "COUNT(*)", value: "Cantidad total de filas (incluyendo nulos)" },
      { key: "AVG(columna)", value: "Promedio de los valores de una columna numérica" },
      { key: "MAX(columna)", value: "Valor máximo de una columna" },
      { key: "SUM(columna)", value: "Suma de todos los valores de una columna numérica" }
    ],
    explanation: "Las funciones de agregación operan sobre conjuntos de filas: COUNT cuenta registros, AVG calcula promedio aritmético, MAX busca el valor tope y SUM acumula importes.",
    citation: "Clase 02 - Consultas simples. Funciones de agregación.",
    slideImage: "assets/clases_infographics/clase2_p09.png"
  },
  {
    id: 4,
    topic: "Clase 01 / 05: Arquitectura ANSI/SPARC",
    unit: "Unidad 4",
    type: "single_choice",
    question: "¿Cuál de las siguientes afirmaciones describe mejor el nivel conceptual en la arquitectura de base de datos ANSI/SPARC?",
    options: [
      "Es único y representa el modelo lógico de cómo se organizan y relacionan los datos para toda la organización.",
      "Es específico para cada usuario final y muestra solo una porción filtrada de la base de datos.",
      "Define las aplicaciones específicas que utilizan los usuarios finales para interactuar con la base de datos.",
      "Se ocupa de la forma en que los datos están almacenados físicamente en bloques y sectores de hardware."
    ],
    correctAnswer: 0,
    explanation: "El nivel conceptual (o lógico global) es único e independiente del hardware; describe la estructura completa de la BD, entidades, atributos y relaciones para toda la empresa.",
    citation: "Clase 01 / 05 - Bases de Datos Relacionales & Arquitectura ANSI/SPARC.",
    slideImage: "assets/clases_infographics/clase1_p04.png"
  },
  {
    id: 5,
    topic: "Clase 01: Introducción y Consistencia",
    unit: "Unidad 1",
    type: "single_choice",
    question: "Las inconsistencias en una base de datos surgen principalmente cuando...",
    options: [
      "Los metadatos no describen adecuadamente la estructura de los datos.",
      "Las aplicaciones no pueden acceder a los datos compartidos.",
      "El mismo dato está representado en múltiples lugares (redundancia) y sus valores no coinciden tras una actualización.",
      "No se utilizan lenguajes de definición de datos (DDL)."
    ],
    correctAnswer: 2,
    explanation: "La inconsistencia es consecuencia directa de la redundancia no controlada: si un dato se almacena en varios sitios y solo se actualiza en uno, los datos entran en contradicción.",
    citation: "Clase 01 - Introducción a las Bases de Datos / Ventajas del enfoque DBMS.",
    slideImage: "assets/clases_infographics/clase1_p03.png"
  },
  {
    id: 6,
    topic: "Clase 03 / 05: Modelo Relacional (N-M)",
    unit: "Unidad 3-4",
    type: "single_choice",
    question: "En una relación de muchos a muchos (N-M) resuelta por una tabla intermedia, ¿cuál es el propósito principal de esta tabla de resolución?",
    options: [
      "Agrupar registros similares para simplificar las consultas.",
      "Eliminar la necesidad de claves foráneas en la relación N-M.",
      "Se utiliza para definir relaciones uno a uno que no pueden tener valores nulos.",
      "Proporciona un acceso único a cada instancia individual de una relación compleja mediante claves foráneas compuestas."
    ],
    correctAnswer: 3,
    explanation: "El modelo relacional no permite relaciones N-M directas a nivel de tablas. La tabla asociativa o intermedia descompone la relación N-M en dos relaciones 1-N y garantiza el acceso exacto a cada par de instancias.",
    citation: "Clase 03 / 05 - Modelo Relacional / Normalización y tablas asociativas.",
    slideImage: "assets/clases_infographics/clase3_p05.png"
  },
  {
    id: 7,
    topic: "Clase 02 / 04: Lenguaje DDL",
    unit: "Unidad 1",
    type: "fill_in_sql",
    question: "Para crear una base de datos llamada 'autos', completa el comando SQL correcto:",
    template: "{INPUT} autos;",
    expectedAnswer: "CREATE DATABASE",
    caseInsensitive: true,
    cleanAnswer: "CREATE DATABASE",
    explanation: "El comando DDL estándar para inicializar un nuevo contenedor de base de datos es `CREATE DATABASE nombre_bd;`.",
    citation: "Clase 02 / Clase 04 - DDL (Data Definition Language).",
    slideImage: "assets/clases_infographics/clase2_p03.png"
  },
  {
    id: 8,
    topic: "Clase 02 / 03: Cláusulas DQL",
    unit: "Unidad 1-2",
    type: "matching",
    question: "Relaciona cada cláusula SQL (DQL) con su funcionalidad correspondiente:",
    pairs: [
      { key: "LIMIT", value: "Restringe el número de filas devueltas en la consulta" },
      { key: "OFFSET", value: "Salta un número determinado de filas antes de devolver resultados" },
      { key: "WHERE", value: "Filtra filas individuales basadas en una condición lógica" },
      { key: "ORDER BY", value: "Ordena los resultados de una consulta de forma ASC o DESC" }
    ],
    explanation: "WHERE filtra tuplas, ORDER BY clasifica el orden de salida, LIMIT acota la cantidad de filas y OFFSET omite los primeros N registros para paginación.",
    citation: "Clase 02 y 03 - SQL DQL y Búsquedas Avanzadas.",
    slideImage: "assets/clases_infographics/clase2_p08.png"
  },
  {
    id: 9,
    topic: "Clase 03: Agrupamiento y Filtros",
    unit: "Unidad 2",
    type: "fill_in_sql",
    question: "Si en una query SQL queremos filtrar los grupos basados en una condición sobre una función de agregación, usaremos la cláusula...",
    template: "SELECT id_depto, AVG(salario) FROM Empleados GROUP BY id_depto {INPUT} AVG(salario) > 50000;",
    expectedAnswer: "HAVING",
    caseInsensitive: true,
    cleanAnswer: "HAVING",
    explanation: "`WHERE` filtra filas individuales *antes* de agrupar; `HAVING` filtra los grupos resultantes *después* de aplicar funciones de agregación como COUNT, AVG o SUM.",
    citation: "Clase 03 - Consultas avanzadas / GROUP BY y HAVING.",
    slideImage: "assets/clases_infographics/clase2_p11.png"
  },
  {
    id: 10,
    topic: "Clase 03 / 05: Cardinalidad",
    unit: "Unidad 3-4",
    type: "single_choice",
    question: "Cuando se describe la cardinalidad de una relación, ¿qué implica la condición 'uno sin cero' (cardinalidad mínima 1)?",
    options: [
      "El registro debe existir obligatoriamente en la tabla de destino (participación total / obligatoria).",
      "El registro puede existir en la tabla de destino, pero es completamente opcional.",
      "El registro no tiene que existir en la tabla de destino jamás.",
      "Indica únicamente que la clave primaria es obligatoria."
    ],
    correctAnswer: 0,
    explanation: "La cardinalidad mínima 1 ('uno sin cero' o '1..N / 1..1') impone obligatoriedad: cada instancia de la entidad debe estar forzosamente asociada a al menos una instancia de la otra entidad.",
    citation: "Clase 03 / 05 - Cardinalidad y Modelo Entidad-Relación.",
    slideImage: "assets/clases_infographics/clase3_p04.png"
  },
  {
    id: 11,
    topic: "Clase 02 / 03: SQL GROUP BY y COUNT",
    unit: "Unidad 2",
    type: "code_completion",
    question: "Dadas las tablas Empleados y Departamentos, completa la consulta para contar cuántos empleados hay en cada departamento:",
    codeSnippet: "SELECT id_departamento, [BLANK_1](*) AS total_empleados\nFROM empleados\n[BLANK_2] id_departamento;",
    blanks: [
      { id: "BLANK_1", expected: "COUNT", placeholder: "función" },
      { id: "BLANK_2", expected: "GROUP BY", placeholder: "cláusula" }
    ],
    explanation: "Se utiliza `COUNT(*)` para computar el número de filas de cada partición y `GROUP BY id_departamento` para segmentar los datos por dicha columna.",
    citation: "Clase 02 y 03 - Agregaciones y agrupamientos.",
    slideImage: "assets/clases_infographics/clase2_p10.png"
  },
  {
    id: 12,
    topic: "Clase 04: Lenguaje DML",
    unit: "Unidad 4",
    type: "fill_in_sql",
    question: "¿Cuál es el comando DML estándar utilizado para modificar datos existentes en una tabla?",
    template: "{INPUT} Empleados SET salario = salario * 1.10 WHERE id_departamento = 10;",
    expectedAnswer: "UPDATE",
    caseInsensitive: true,
    cleanAnswer: "UPDATE",
    explanation: "`UPDATE` es el comando DML para modificar valores de columnas en registros existentes de una tabla, usualmente filtrados por `WHERE`.",
    citation: "Clase 04 - Manipulación de datos (DML).",
    slideImage: "assets/clases_infographics/clase4_p03.png"
  },
  {
    id: 13,
    topic: "Clase 01 / 02: Conceptos Fundamentales",
    unit: "Unidad 1",
    type: "single_choice",
    question: "¿Qué término describe una propiedad o característica específica que distingue a una entidad y posee un conjunto posible de valores (dominio), como la edad o el código de un empleado?",
    options: [
      "Registro o tupla.",
      "Campo o atributo.",
      "Tabla o relación.",
      "Dominio o conjunto de valores permitidos."
    ],
    correctAnswer: 1,
    explanation: "Un campo o atributo es una unidad elemental con nombre y tipo de dato que caracteriza a una entidad (ej. 'salario', 'nombre'). La tupla es la fila completa y el dominio es el conjunto de valores válidos.",
    citation: "Clase 01 / 02 - Conceptos de Bases de Datos.",
    slideImage: "assets/clases_infographics/clase2_p04.png"
  },
  {
    id: 14,
    topic: "Clase 05: Arquitectura ANSI/SPARC",
    unit: "Unidad 4",
    type: "single_choice",
    question: "Si una organización guarda información de empleados y define que cada empleado tiene un código (6 caracteres), un departamento (4 caracteres) y un salario (5 dígitos decimales), ¿a qué nivel de la arquitectura ANSI/SPARC corresponde esta descripción?",
    options: [
      "Al nivel externo, que muestra vistas específicas para usuarios de tesorería o RRHH.",
      "Al nivel interno, que se ocupa de la representación física de los datos como un registro de bytes y offsets.",
      "Al nivel conceptual, que modela la estructura lógica de la entidad Empleado y sus atributos.",
      "Al nivel de usuario final, que utiliza aplicaciones gráficas para consultas."
    ],
    correctAnswer: 2,
    explanation: "El nivel conceptual define qué datos se almacenan (entidades, tipos, longitudes de campos y restricciones) desde una perspectiva lógica global de la organización.",
    citation: "Clase 05 - Bases de Datos Relacionales / Niveles ANSI/SPARC.",
    slideImage: "assets/clases_infographics/clase1_p04.png"
  },
  {
    id: 15,
    topic: "Clase 03: Relaciones y Joins",
    unit: "Unidad 3",
    type: "code_completion",
    question: "Obtén el nombre del empleado y el nombre del departamento al que pertenece, solo si existe coincidencia en ambas tablas, usando alias:",
    codeSnippet: "SELECT E.nombre, D.nombre_departamento\nFROM Empleados E\n[BLANK_1] Departamentos D\nON E.id_departamento [BLANK_2] D.id_departamento;",
    blanks: [
      { id: "BLANK_1", expected: "INNER JOIN", placeholder: "tipo de join" },
      { id: "BLANK_2", expected: "=", placeholder: "operador" }
    ],
    explanation: "`INNER JOIN` combina registros de ambas tablas únicamente cuando la condición de igualdad (`ON E.id_departamento = D.id_departamento`) se cumple de forma estricta.",
    citation: "Clase 03 - Consultas SQL Avanzadas / INNER JOIN.",
    slideImage: "assets/clases_infographics/clase3_p07.png"
  },
  {
    id: 16,
    topic: "Clase 03: Relaciones 1-N",
    unit: "Unidad 3",
    type: "single_choice",
    question: "¿Cuál de las siguientes afirmaciones describe con precisión una relación uno a muchos (1-N)?",
    options: [
      "Es una relación muy poco común en bases de datos relacionales.",
      "Un registro de una tabla solo puede estar asociado con un único registro de otra tabla en ambos sentidos.",
      "Muchos registros de una tabla pueden estar asociados con muchos registros de otra tabla de forma directa.",
      "Un registro de una tabla puede estar asociado con muchos registros de otra tabla, pero cada registro de la segunda tabla se asocia a lo sumo con uno de la primera."
    ],
    correctAnswer: 3,
    explanation: "En 1-N (ej. Un Departamento tiene Muchos Empleados), un departamento posee múltiples empleados, pero cada empleado pertenece a un único departamento mediante una clave foránea.",
    citation: "Clase 03 - Relaciones 1-1, 1-N y N-M.",
    slideImage: "assets/clases_infographics/clase3_p04.png"
  },
  {
    id: 17,
    topic: "Clase 01: Sistemas Transaccionales vs Analíticos",
    unit: "Unidad 1",
    type: "single_choice",
    question: "Los sistemas de bases de datos Transaccionales (OLTP) se caracterizan principalmente por...",
    options: [
      "Realizar operaciones atómicas, cortas y rápidas (CRUD), centradas en pequeños cambios a la base de datos para mantener la consistencia en tiempo real.",
      "Tener políticas de backup y recuperación menos rigurosas debido a la facilidad de recarga de datos.",
      "Depender exclusivamente de consultas analíticas complejas que involucran años de datos históricos para generar reportes.",
      "Consolidar grandes almacenes de datos tipo Data Warehouse para toma de decisiones directivas (OLAP)."
    ],
    correctAnswer: 0,
    explanation: "OLTP (Online Transaction Processing) se orienta a operaciones del día a día (altas, bajas, transferencias) con transacciones ACID rápidas y de bajo volumen por operación.",
    citation: "Clase 01 - Introducción a las BD / Sistemas OLTP vs OLAP.",
    slideImage: "assets/clases_infographics/clase1_p10.png"
  },
  {
    id: 18,
    topic: "Clase 04: Lenguaje DDL (DROP)",
    unit: "Unidad 4",
    type: "fill_in_sql",
    question: "La tabla 'Proyectos' ya no es necesaria y debe ser eliminada por completo de la base de datos. Completa la sentencia SQL:",
    template: "{INPUT} TABLE Proyectos;",
    expectedAnswer: "DROP",
    caseInsensitive: true,
    cleanAnswer: "DROP",
    explanation: "El comando DDL `DROP TABLE nombre_tabla;` destruye la tabla, sus definiciones y todos sus registros de manera permanente.",
    citation: "Clase 04 - DDL / DROP TABLE.",
    slideImage: "assets/clases_infographics/clase4_p04.png"
  },
  {
    id: 19,
    topic: "Clase 02 / 04: Operadores de Rango",
    unit: "Unidad 1-4",
    type: "code_completion",
    question: "Selecciona el nombre y salario de los empleados cuyo salario esté entre 45000 y 55000 (ambos inclusive):",
    codeSnippet: "SELECT nombre, salario\nFROM Empleados\nWHERE salario [BLANK_1] 45000 [BLANK_2] 55000;",
    blanks: [
      { id: "BLANK_1", expected: "BETWEEN", placeholder: "operador de rango" },
      { id: "BLANK_2", expected: "AND", placeholder: "conjunción" }
    ],
    explanation: "El operador `BETWEEN min AND max` es inclusivo, equivalente a `(salario >= 45000 AND salario <= 55000)`.",
    citation: "Clase 02 / 04 - Consultas simples y operadores SQL.",
    slideImage: "assets/clases_infographics/clase2_p06.png"
  },
  {
    id: 20,
    topic: "Clase 04: Tipos de Índices (GIST)",
    unit: "Unidad 4",
    type: "single_choice",
    question: "¿Cuál es la aplicación principal de un índice de tipo GIST (Generalized Search Tree)?",
    options: [
      "Es ideal únicamente para columnas enteras con claves primarias autoincrementales.",
      "Se utiliza principalmente para comprimir columnas que solo tienen dos valores booleanos.",
      "Es adecuado para indexar datos complejos como geometrías/GIS, arrays, rangos y documentos de texto completo.",
      "Es el índice por defecto de todas las bases de datos relacionales para ordenamientos simples."
    ],
    correctAnswer: 2,
    explanation: "GIST es una estructura de árbol extensible que permite indexar datos multidimensionales, geométricos, espaciales, rangos y colecciones complejas donde B-Tree no aplica.",
    citation: "Clase 04 - Índices avanzados (B-Tree, GIST, GIN, Hash).",
    slideImage: "assets/clases_infographics/clase4_p13.png"
  },
  {
    id: 21,
    topic: "Clase 02: Cláusula ORDER BY",
    unit: "Unidad 1",
    type: "fill_in_sql",
    question: "¿Cuál es la cláusula SQL empleada para ordenar los resultados de una consulta según una o más columnas?",
    template: "SELECT nombre, salario FROM Empleados {INPUT} salario DESC;",
    expectedAnswer: "ORDER BY",
    caseInsensitive: true,
    cleanAnswer: "ORDER BY",
    explanation: "`ORDER BY` presenta los registros ordenados por las columnas especificadas, utilizando `ASC` (por defecto) o `DESC`.",
    citation: "Clase 02 - Consultas simples / DQL.",
    slideImage: "assets/clases_infographics/clase2_p08.png"
  },
  {
    id: 22,
    topic: "Clase 04: Índices B-Tree",
    unit: "Unidad 4",
    type: "single_choice",
    question: "¿Qué característica define mejor a un índice de tipo B-Tree?",
    options: [
      "Se utiliza únicamente para crear índices basados en funciones hash unidireccionales.",
      "Almacena datos en un formato bitmap no balanceado sin orden físico.",
      "Es el tipo de índice por defecto al usar CREATE INDEX, es balanceado y es óptimo para búsquedas exactas y por rango (=, <, >, BETWEEN).",
      "Solo admite datos geográficos y no puede utilizarse sobre cadenas de texto."
    ],
    correctAnswer: 2,
    explanation: "Los árboles B-Tree (Balanced Tree) son la estructura estándar y más extendida en DBMS: mantienen los datos ordenados en nodos y hojas balanceadas con complejidad O(log N).",
    citation: "Clase 04 - Índices B-Tree / Optimización.",
    slideImage: "assets/clases_infographics/clase4_p12.png"
  },
  {
    id: 23,
    topic: "Clase 04: Lenguaje DDL (CREATE)",
    unit: "Unidad 4",
    type: "fill_in_sql",
    question: "Nombra el comando DDL exacto utilizado para crear una nueva tabla en la base de datos:",
    template: "{INPUT} Clientes (id_cliente INT PRIMARY KEY, nombre VARCHAR(100));",
    expectedAnswer: "CREATE TABLE",
    caseInsensitive: true,
    cleanAnswer: "CREATE TABLE",
    explanation: "`CREATE TABLE` es la instrucción de DDL para definir el nombre, columnas, tipos de datos y restricciones de una nueva tabla.",
    citation: "Clase 04 - DDL / Creación de tablas.",
    slideImage: "assets/clases_infographics/clase2_p03.png"
  },
  {
    id: 24,
    topic: "Clase 03: Modelo Jerárquico",
    unit: "Unidad 2",
    type: "single_choice",
    question: "En el modelo de base de datos jerárquico, ¿cómo se caracterizan las relaciones padre-hijo?",
    options: [
      "Permiten que un nodo hijo esté asociado a múltiples nodos padre sin duplicar registros.",
      "Se gestionan exclusivamente mediante tablas intermedias relacionales.",
      "Son estructuras en árbol unidireccionales (1-N), donde cada registro hijo tiene exactamente un único registro padre.",
      "Son bidireccionales (N-M) nativamente sin restricciones de jerarquía."
    ],
    correctAnswer: 2,
    explanation: "El modelo jerárquico organiza los datos en forma de árbol invertido: cada hijo solo puede tener un único padre (1-N estricto), lo que dificulta modelar relaciones N-M.",
    citation: "Clase 03 - Modelo Jerárquico y de Red.",
    slideImage: "assets/clases_infographics/clase3_p02.png"
  },
  {
    id: 25,
    topic: "Clase 02: Cláusula DISTINCT",
    unit: "Unidad 1",
    type: "code_completion",
    question: "Lista los 'id_departamento' únicos (sin valores repetidos) a los que están asignados los empleados:",
    codeSnippet: "SELECT [BLANK_1] id_departamento\nFROM Empleados;",
    blanks: [
      { id: "BLANK_1", expected: "DISTINCT", placeholder: "palabra clave" }
    ],
    explanation: "`SELECT DISTINCT columna` elimina las filas duplicadas del resultado, retornando solo valores únicos.",
    citation: "Clase 02 - Consultas SQL simples / DISTINCT.",
    slideImage: "assets/clases_infographics/clase2_p05.png"
  },
  {
    id: 26,
    topic: "Clase 05: Claves y Restricciones",
    unit: "Unidad 4",
    type: "single_choice",
    question: "¿Cuál es la diferencia principal entre una Clave Primaria (PK) y una Clave Foránea (FK)?",
    options: [
      "La PK identifica de forma única a cada tupla en una tabla y no admite NULL, mientras que la FK referencia a la PK de otra tabla garantizando la integridad referencial.",
      "La PK permite múltiples valores nulos y la FK no admite ningún valor.",
      "La PK se utiliza solo en tablas intermedias y la FK en tablas maestras.",
      "No existe diferencia; son sinónimos en el estándar SQL."
    ],
    correctAnswer: 0,
    explanation: "La Primary Key asegura unicidad y no nulidad en la propia tabla, mientras que la Foreign Key establece el vínculo hacia la PK de otra tabla garantizando integridad referencial.",
    citation: "Clase 05 - Modelo Relacional / Claves primarias y foráneas.",
    slideImage: "assets/clases_infographics/clase5_p03.png"
  },
  {
    id: 27,
    topic: "Clase 04: Subconsultas",
    unit: "Unidad 4",
    type: "single_choice",
    question: "En el contexto de SQL, ¿cuándo se evalúa una subconsulta no correlacionada?",
    options: [
      "Se evalúa una única vez antes de ejecutar la consulta principal, y su resultado se utiliza en el WHERE de la consulta externa.",
      "Se ejecuta repetidamente una vez por cada fila analizada en la consulta externa.",
      "Se ejecuta en paralelo en un hilo de background sin bloquear.",
      "Solo puede ejecutarse dentro de un comando DROP TABLE."
    ],
    correctAnswer: 0,
    explanation: "Una subconsulta no correlacionada es independiente de la consulta exterior: el motor la ejecuta una sola vez al inicio y reemplaza el resultado para filtrar la consulta principal.",
    citation: "Clase 04 - Subconsultas y optimización.",
    slideImage: "assets/clases_infographics/clase4_p06.png"
  },
  {
    id: 28,
    topic: "Clase 01: Independencia de Datos",
    unit: "Unidad 1",
    type: "single_choice",
    question: "¿Qué significa la 'Independencia Física de Datos' en un DBMS?",
    options: [
      "La capacidad de modificar el esquema físico (ej. cambiar discos, particiones o índices) sin necesidad de reescribir los programas o consultas de aplicación.",
      "Que la base de datos funciona sin necesidad de conexión eléctrica ni hardware.",
      "Que los usuarios pueden inventar tipos de datos no definidos en el catálogo.",
      "Que las claves primarias se generan de forma aleatoria."
    ],
    correctAnswer: 0,
    explanation: "La independencia física permite cambiar detalles de almacenamiento, rutas de acceso y estructuras físicas de archivos sin afectar el esquema conceptual ni las aplicaciones de usuario.",
    citation: "Clase 01 - Introducción a las BD / Independencia de Datos.",
    slideImage: "assets/clases_infographics/clase1_p05.png"
  },
  // Nuevas preguntas de refuerzo conceptual basadas en las 5 clases nuevas
  {
    id: 29,
    topic: "Clase 02: Orden Lógico de Ejecución SQL",
    unit: "Unidad 1-2",
    type: "single_choice",
    question: "¿Cuál es el orden lógico en el que el motor de base de datos procesa las cláusulas de una consulta SELECT?",
    options: [
      "FROM/JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT/OFFSET",
      "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT",
      "WHERE -> FROM -> SELECT -> GROUP BY -> HAVING -> ORDER BY",
      "FROM -> SELECT -> WHERE -> ORDER BY -> GROUP BY -> HAVING"
    ],
    correctAnswer: 0,
    explanation: "El motor primero localiza las tablas (FROM/JOIN), filtra filas (WHERE), agrupa (GROUP BY), filtra grupos (HAVING), proyecta columnas y aliases (SELECT), remueve duplicados (DISTINCT), ordena (ORDER BY) y finalmente pagina (LIMIT/OFFSET). ¡Por eso no puedes usar un alias de SELECT en el WHERE!",
    citation: "Clase 02 - Mastering SQL Queries / Orden de Ejecución.",
    slideImage: "assets/clases_infographics/clase2_p14.png"
  },
  {
    id: 30,
    topic: "Clase 05: Acciones Referenciales ON DELETE CASCADE",
    unit: "Unidad 4-5",
    type: "single_choice",
    question: "Si una clave foránea (FK) se define con la regla `ON DELETE CASCADE`, ¿qué ocurre cuando se elimina un registro en la tabla padre referenciada?",
    options: [
      "El motor elimina automáticamente y en cascada todos los registros hijos relacionados en la tabla dependiente.",
      "El motor bloquea la eliminación y lanza un error de violación de integridad referencial.",
      "Los registros dependientes permanecen intactos y su clave foránea se establece en NULL.",
      "Se crea una copia de seguridad automática de la tabla secundaria."
    ],
    correctAnswer: 0,
    explanation: "`ON DELETE CASCADE` propaga la eliminación: al borrar el registro padre (ej. un Cliente), se eliminan automáticamente todos los registros hijos asociados (sus Facturas/Pedidos).",
    citation: "Clase 05 - Relational Data Architecture / Acciones Referenciales.",
    slideImage: "assets/clases_infographics/clase5_p05.png"
  },
  {
    id: 31,
    topic: "Clase 04: DELETE vs TRUNCATE vs DROP",
    unit: "Unidad 4",
    type: "matching",
    question: "Relaciona cada comando de borrado SQL con su impacto y comportamiento:",
    pairs: [
      { key: "DELETE FROM tabla", value: "DML: Borra filas con WHERE opcional, es transaccional (genera log/rollback) y mantiene la estructura." },
      { key: "TRUNCATE TABLE tabla", value: "DDL: Vacía la tabla de golpe desasignando páginas de datos; reinicia secuencias autoincrementales." },
      { key: "DROP TABLE tabla", value: "DDL: Destruye completamente la estructura, datos, índices y metadatos de la tabla en el catálogo." }
    ],
    explanation: "DELETE es DML fila por fila con posibilidad de filtro y rollback; TRUNCATE es DDL de vaciado ultra-rápido; DROP borra la tabla por completo del diccionario.",
    citation: "Clase 04 - Data Manipulation and Subqueries / Borrado de Datos.",
    slideImage: "assets/clases_infographics/clase4_p04.png"
  },
  {
    id: 32,
    topic: "Clase 05: Formas Normales (1NF, 2NF, 3NF)",
    unit: "Unidad 5",
    type: "single_choice",
    question: "¿Qué condición es indispensable para que una tabla se encuentre en Tercera Forma Normal (3NF)?",
    options: [
      "Debe estar en 2NF y ningún atributo no clave debe depender transitivamente de la clave primaria (X -> Y -> Z).",
      "Debe contener únicamente columnas numéricas y ningún valor de texto.",
      "Todos los atributos deben tener valores multivaluados o arreglos anidados.",
      "Debe prescindir por completo de claves foráneas."
    ],
    correctAnswer: 0,
    explanation: "3NF exige estar en 2NF y eliminar dependencias transitivas: los atributos no clave deben depender directa y exclusivamente de la clave primaria, no a través de otro campo no clave.",
    citation: "Clase 05 - Relational Data Architecture / Normalización 3NF.",
    slideImage: "assets/clases_infographics/clase5_p09.png"
  },
  {
    id: 33,
    topic: "Clase 04: Subconsultas Escalares vs Lista vs Tabla",
    unit: "Unidad 4",
    type: "single_choice",
    question: "¿Qué es una subconsulta escalar (Scalar Subquery) en SQL?",
    options: [
      "Una subconsulta que devuelve exactamente un único valor atómico (1 fila x 1 columna).",
      "Una subconsulta que devuelve una lista unidimensional de valores para usar con IN.",
      "Una subconsulta que siempre devuelve una tabla con múltiples columnas para usar en un JOIN.",
      "Una consulta recursiva que se ejecuta de forma infinita."
    ],
    correctAnswer: 0,
    explanation: "Una subconsulta escalar retorna una matriz de 1x1 (un solo valor primitivo, como `(SELECT MAX(precio) FROM Productos)`), permitiendo usar operadores de comparación directos (=, >, <).",
    citation: "Clase 04 - Subconsultas Escalares y de Conjunto.",
    slideImage: "assets/clases_infographics/clase4_p07.png"
  },
  {
    id: 34,
    topic: "Clase 01: Componentes del DBMS (Storage vs Query Engine)",
    unit: "Unidad 1",
    type: "matching",
    question: "Relaciona cada componente del DBMS con su función arquitectónica:",
    pairs: [
      { key: "Query Parser / Lexer", value: "Verifica sintaxis SQL y valida objetos contra el catálogo." },
      { key: "Query Optimizer", value: "Genera el plan de ejecución de menor costo estimado (Index Scan vs Seq Scan)." },
      { key: "Buffer Pool Manager", value: "Mantiene páginas de datos en memoria RAM para minimizar lecturas de disco I/O." },
      { key: "WAL / Transaction Log", value: "Garantiza durabilidad (D de ACID) registrando cambios antes de persistir en disco." }
    ],
    explanation: "El DBMS se divide entre el Query Processor (Parser, Optimizador, Ejecutor) y el Storage Engine (Buffer Pool, Page Layout, WAL, Disk).",
    citation: "Clase 01 - Data Systems Architecture / DBMS Internals.",
    slideImage: "assets/clases_infographics/clase1_p06.png"
  },
  {
    id: 35,
    topic: "Clase 05: Restricción CHECK de Dominio",
    unit: "Unidad 5",
    type: "fill_in_sql",
    question: "Completa la restricción de integridad de dominio para asegurar que el salario de un empleado sea mayor a cero:",
    template: "CREATE TABLE Empleados (id INT PRIMARY KEY, salario DECIMAL(10,2) {INPUT} (salario > 0));",
    expectedAnswer: "CHECK",
    caseInsensitive: true,
    cleanAnswer: "CHECK",
    explanation: "La restricción `CHECK (condición_booleana)` valida que cada fila cumpla con la regla de negocio antes de permitir la inserción o actualización.",
    citation: "Clase 05 - Domain Integrity & Constraints.",
    slideImage: "assets/clases_infographics/clase5_p06.png"
  },
  {
    id: 36,
    topic: "Clase 03: Operaciones de Conjunto (UNION vs UNION ALL)",
    unit: "Unidad 3",
    type: "single_choice",
    question: "¿Cuál es la diferencia fundamental entre `UNION` y `UNION ALL` al combinar resultados de dos consultas SQL?",
    options: [
      "`UNION` elimina las filas duplicadas realizando una operación de ordenamiento/hashing, mientras que `UNION ALL` concatena todos los registros preservando duplicados y siendo mucho más rápida.",
      "`UNION` solo combina tablas numéricas y `UNION ALL` tablas de texto.",
      "`UNION ALL` requiere que las consultas tengan distinto número de columnas.",
      "No existe diferencia de rendimiento ni de tratamiento de duplicados."
    ],
    correctAnswer: 0,
    explanation: "`UNION` ejecuta internamente un descarte de duplicados (costoso en CPU/memoria). `UNION ALL` simplemente concatena los conjuntos de resultados sin deduplicar, ofreciendo mayor velocidad.",
    citation: "Clase 03 - Data Architecture and Querying / Set Operations.",
    slideImage: "assets/clases_infographics/clase3_p12.png"
  }
];

// Presets de ejercicios interactivos para el SQL Lab
const SQL_LAB_PRESETS = [
  {
    id: "ex_simple_1",
    title: "1. Consultas Básicas: Empleados y Salarios",
    description: "Muestra el nombre, apellido y salario de todos los empleados ordenados por salario descendente.",
    defaultSql: "SELECT nombre, apellido, salario\nFROM Empleados\nORDER BY salario DESC;",
    hint: "Usa SELECT, FROM Empleados y ORDER BY salario DESC."
  },
  {
    id: "ex_join_1",
    title: "2. INNER JOIN: Empleados y su Departamento",
    description: "Obtén el nombre del empleado y el nombre de su departamento utilizando un INNER JOIN.",
    defaultSql: "SELECT E.nombre, E.apellido, D.nombre_departamento, E.salario\nFROM Empleados E\nINNER JOIN Departamentos D ON E.id_departamento = D.id_departamento;",
    hint: "Une las tablas en E.id_departamento = D.id_departamento."
  },
  {
    id: "ex_group_1",
    title: "3. GROUP BY y Agregaciones: Promedio por Depto",
    description: "Calcula el salario promedio y la cantidad de empleados por departamento.",
    defaultSql: "SELECT D.nombre_departamento, COUNT(E.id_empleado) AS total_empleados, ROUND(AVG(E.salario), 2) AS salario_promedio\nFROM Departamentos D\nLEFT JOIN Empleados E ON D.id_departamento = E.id_departamento\nGROUP BY D.id_departamento, D.nombre_departamento;",
    hint: "Agrupa por departamento y usa COUNT() y AVG()."
  },
  {
    id: "ex_having_1",
    title: "4. HAVING: Departamentos con Salario Promedio Alto",
    description: "Filtra aquellos departamentos cuyo salario promedio supere los 50,000.",
    defaultSql: "SELECT D.nombre_departamento, AVG(E.salario) AS prom_salario\nFROM Empleados E\nINNER JOIN Departamentos D ON E.id_departamento = D.id_departamento\nGROUP BY D.nombre_departamento\nHAVING AVG(E.salario) > 50000;",
    hint: "Recuerda que para filtrar sobre funciones de agregación se usa HAVING."
  },
  {
    id: "ex_dml_insert",
    title: "5. DML INSERT: Contratar Nuevo Desarrollador (¡Costo DML!)",
    description: "Inserta un nuevo empleado en el departamento de Desarrollo (id 4). ¡Observa el rebalanceo de índices!",
    defaultSql: "INSERT INTO Empleados (id_empleado, nombre, apellido, salario, id_departamento)\nVALUES (105, 'Valeria', 'Ríos', 68000.00, 4);",
    hint: "Ejecuta el INSERT y observa la animación del árbol B-Tree perdiendo hojas."
  },
  {
    id: "ex_dml_update",
    title: "6. DML UPDATE: Aumento Salarial del 15% (¡Costo DML!)",
    description: "Aumenta un 15% el salario a los empleados de Ventas (id 3).",
    defaultSql: "UPDATE Empleados\nSET salario = ROUND(salario * 1.15, 2)\nWHERE id_departamento = 3;",
    hint: "El UPDATE modificará múltiples registros provocando actualización en los nodos B-Tree."
  },
  {
    id: "ex_dml_delete",
    title: "7. DML DELETE: Dar de Baja Registro (¡Costo DML!)",
    description: "Elimina un empleado por su ID.",
    defaultSql: "DELETE FROM Empleados\nWHERE id_empleado = 101;",
    hint: "DELETE elimina la tupla y reorganiza las páginas del índice."
  },
  {
    id: "ex_subquery",
    title: "8. Subconsultas: Empleados con Salario sobre la Media",
    description: "Selecciona los empleados cuyo salario sea superior al promedio general de la empresa.",
    defaultSql: "SELECT nombre, apellido, salario\nFROM Empleados\nWHERE salario > (SELECT AVG(salario) FROM Empleados);",
    hint: "Subconsulta no correlacionada en la cláusula WHERE."
  },
  {
    id: "ex_toyota_case",
    title: "9. Caso Toyota: Modelos, Versiones y Sucursales",
    description: "Crea el esquema y consulta el stock de versiones por sucursal.",
    defaultSql: "SELECT S.nombre AS sucursal, S.ciudad, M.nombre AS modelo, V.nombre AS version, V.motor, V.precio, S.stock\nFROM Sucursales S\nINNER JOIN Versiones V ON S.id_version = V.id_version\nINNER JOIN Modelos M ON V.id_modelo = M.id_modelo\nORDER BY S.ciudad, V.precio DESC;",
    hint: "Relación de tres tablas del caso de estudio de la Unidad 4."
  }
];

window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;
window.SQL_LAB_PRESETS = SQL_LAB_PRESETS;
