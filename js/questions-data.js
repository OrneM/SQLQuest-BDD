// Banco Oficial Combinado de Preguntas y Respuestas - Bases de Datos I (UTN BA)
// Total de 134 Preguntas con Tipos Interactivos (SQL Fill, Matching, Code) y Opción Múltiple (100% Aleatorizado)

const QUESTIONS_DATABASE = [
  {
    "id": 1,
    "topic": "Clase 02: Funciones de Agregación",
    "unit": "Unidad 1",
    "type": "matching",
    "question": "Relaciona cada función de agregación SQL con el resultado que devuelve:",
    "pairs": [
      {
        "key": "COUNT(*)",
        "value": "Cantidad total de filas (incluyendo nulos)"
      },
      {
        "key": "AVG(columna)",
        "value": "Promedio de los valores de una columna numérica"
      },
      {
        "key": "MAX(columna)",
        "value": "Valor máximo de una columna"
      },
      {
        "key": "SUM(columna)",
        "value": "Suma de todos los valores de una columna numérica"
      }
    ],
    "explanation": "Las funciones de agregación operan sobre conjuntos de filas: COUNT cuenta registros, AVG calcula promedio aritmético, MAX busca el valor tope y SUM acumula importes.",
    "citation": "Clase 02 - El Embudo de Agregación: COUNT, SUM, AVG, MIN, MAX.",
    "slideImage": "assets/clases_infographics/clase2_p09.png",
    "hint": "COUNT cuenta filas totales (incluyendo nulos si usas *), AVG calcula promedios numéricos, MAX busca el valor tope y SUM acumula importes.",
    "classNum": 2
  },
  {
    "id": 2,
    "topic": "Clase 02 / 04: Lenguaje DDL",
    "unit": "Unidad 1",
    "type": "fill_in_sql",
    "question": "Para crear una base de datos llamada 'autos', completa el comando SQL correcto:",
    "template": "{INPUT} autos;",
    "expectedAnswer": "CREATE DATABASE",
    "caseInsensitive": true,
    "cleanAnswer": "CREATE DATABASE",
    "explanation": "El comando DDL estándar para inicializar un nuevo contenedor de base de datos es `CREATE DATABASE nombre_bd;`.",
    "citation": "Clase 02 - Las 4 Familias de Comandos SQL: DDL (CREATE, ALTER, DROP).",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "hint": "Son dos palabras del sublenguaje DDL: la acción de crear ('CREATE') seguida del tipo de contenedor ('DATABASE').",
    "classNum": 2
  },
  {
    "id": 3,
    "topic": "Clase 02 / 03: Cláusulas DQL",
    "unit": "Unidad 1-2",
    "type": "matching",
    "question": "Relaciona cada cláusula SQL (DQL) con su funcionalidad correspondiente:",
    "pairs": [
      {
        "key": "LIMIT",
        "value": "Restringe el número de filas devueltas en la consulta"
      },
      {
        "key": "OFFSET",
        "value": "Salta un número determinado de filas antes de devolver resultados"
      },
      {
        "key": "WHERE",
        "value": "Filtra filas individuales basadas en una condición lógica"
      },
      {
        "key": "ORDER BY",
        "value": "Ordena los resultados de una consulta de forma ASC o DESC"
      }
    ],
    "explanation": "WHERE filtra tuplas, ORDER BY clasifica el orden de salida, LIMIT acota la cantidad de filas y OFFSET omite los primeros N registros para paginación.",
    "citation": "Clase 02 - Moldeando el Resultado: ORDER BY y LIMIT / OFFSET.",
    "slideImage": "assets/clases_infographics/clase2_p08.png",
    "hint": "WHERE filtra registros antes de agrupar, ORDER BY clasifica según columnas, LIMIT pone un techo de filas y OFFSET salta páginas.",
    "classNum": 2
  },
  {
    "id": 4,
    "topic": "Clase 03: Agrupamiento y Filtros (HAVING)",
    "unit": "Unidad 2",
    "type": "fill_in_sql",
    "question": "Si en una query SQL queremos filtrar los grupos basados en una condición sobre una función de agregación, usaremos la cláusula...",
    "template": "SELECT id_depto, AVG(salario) FROM Empleados GROUP BY id_depto {INPUT} AVG(salario) > 50000;",
    "expectedAnswer": "HAVING",
    "caseInsensitive": true,
    "cleanAnswer": "HAVING",
    "explanation": "`WHERE` filtra filas individuales *antes* de agrupar; `HAVING` filtra los grupos resultantes *después* de aplicar funciones de agregación como COUNT, AVG o SUM.",
    "citation": "Clase 03 - Agrupación y Filtrado Lógico: GROUP BY y HAVING.",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "hint": "Para filtrar sobre el resultado de una función de agregación (como AVG o COUNT) después de agrupar con GROUP BY, no se usa WHERE sino...",
    "classNum": 3
  },
  {
    "id": 5,
    "topic": "Clase 02 / 03: SQL GROUP BY y COUNT",
    "unit": "Unidad 2",
    "type": "code_completion",
    "question": "Dadas las tablas Empleados y Departamentos, completa la consulta para contar cuántos empleados hay en cada departamento:",
    "codeSnippet": "SELECT id_departamento, [BLANK_1](*) AS total_empleados\nFROM empleados\n[BLANK_2] id_departamento;",
    "blanks": [
      {
        "id": "BLANK_1",
        "expected": "COUNT",
        "placeholder": "función"
      },
      {
        "id": "BLANK_2",
        "expected": "GROUP BY",
        "placeholder": "cláusula"
      }
    ],
    "explanation": "Se utiliza `COUNT(*)` para computar el número de filas de cada partición y `GROUP BY id_departamento` para segmentar los datos por dicha columna.",
    "citation": "Clase 02 - Patrón de Consulta 4: Extracción de Métricas con GROUP BY.",
    "slideImage": "assets/clases_infographics/clase2_p14.png",
    "hint": "El primer espacio requiere la función para contar filas ('COUNT') y el segundo la cláusula de dos palabras para agrupar ('GROUP BY').",
    "classNum": 3
  },
  {
    "id": 6,
    "topic": "Clase 04: Lenguaje DML (UPDATE)",
    "unit": "Unidad 4",
    "type": "fill_in_sql",
    "question": "¿Cuál es el comando DML estándar utilizado para modificar datos existentes en una tabla?",
    "template": "{INPUT} Empleados SET salario = salario * 1.10 WHERE id_departamento = 10;",
    "expectedAnswer": "UPDATE",
    "caseInsensitive": true,
    "cleanAnswer": "UPDATE",
    "explanation": "`UPDATE` es el comando DML para modificar valores de columnas en registros existentes de una tabla, usualmente filtrados por `WHERE`.",
    "citation": "Clase 04 - Modificación de Registros Existentes con UPDATE.",
    "slideImage": "assets/clases_infographics/clase4_p09.png",
    "hint": "Es el comando DML para modificar registros existentes acompañado de la cláusula SET.",
    "classNum": 4
  },
  {
    "id": 7,
    "topic": "Clase 03: Relaciones y Joins (INNER JOIN)",
    "unit": "Unidad 3",
    "type": "code_completion",
    "question": "Obtén el nombre del empleado y el nombre del departamento al que pertenece, solo si existe coincidencia en ambas tablas, usando alias:",
    "codeSnippet": "SELECT E.nombre, D.nombre_departamento\nFROM Empleados E\n[BLANK_1] Departamentos D\nON E.id_departamento [BLANK_2] D.id_departamento;",
    "blanks": [
      {
        "id": "BLANK_1",
        "expected": "INNER JOIN",
        "placeholder": "tipo de join"
      },
      {
        "id": "BLANK_2",
        "expected": "=",
        "placeholder": "operador"
      }
    ],
    "explanation": "`INNER JOIN` combina registros de ambas tablas únicamente cuando la condición de igualdad (`ON E.id_departamento = D.id_departamento`) se cumple de forma estricta.",
    "citation": "Clase 03 - Anatomía de los JOINs (I): INNER JOIN en Profundidad.",
    "slideImage": "assets/clases_infographics/clase3_p10.png",
    "hint": "El primer espacio es la cláusula de unión interna ('INNER JOIN') y el segundo es el operador de igualdad ('=').",
    "classNum": 3
  },
  {
    "id": 8,
    "topic": "Clase 04 / 05: Lenguaje DDL (DROP)",
    "unit": "Unidad 4",
    "type": "fill_in_sql",
    "question": "La tabla 'Proyectos' ya no es necesaria y debe ser eliminada por completo de la base de datos. Completa la sentencia SQL:",
    "template": "{INPUT} TABLE Proyectos;",
    "expectedAnswer": "DROP",
    "caseInsensitive": true,
    "cleanAnswer": "DROP",
    "explanation": "El comando DDL `DROP TABLE nombre_tabla;` destruye la tabla, sus definiciones y todos sus registros de manera permanente.",
    "citation": "Clase 05 - Anatomía de la Construcción (DDL): CREATE, ALTER y DROP TABLE.",
    "slideImage": "assets/clases_infographics/clase5_p11.png",
    "hint": "La palabra DDL para destruir permanentemente una tabla del catálogo es DROP.",
    "classNum": 5
  },
  {
    "id": 9,
    "topic": "Clase 02: Operadores de Rango (BETWEEN)",
    "unit": "Unidad 1-4",
    "type": "code_completion",
    "question": "Selecciona el nombre y salario de los empleados cuyo salario esté entre 45000 y 55000 (ambos inclusive):",
    "codeSnippet": "SELECT nombre, salario\nFROM Empleados\nWHERE salario [BLANK_1] 45000 [BLANK_2] 55000;",
    "blanks": [
      {
        "id": "BLANK_1",
        "expected": "BETWEEN",
        "placeholder": "operador de rango"
      },
      {
        "id": "BLANK_2",
        "expected": "AND",
        "placeholder": "conjunción"
      }
    ],
    "explanation": "El operador `BETWEEN min AND max` es inclusivo, equivalente a `(salario >= 45000 AND salario <= 55000)`.",
    "citation": "Clase 02 - Refinando la Búsqueda: Operadores WHERE (Rangos BETWEEN AND, IN).",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "El operador de rango inclusivo en SQL es 'BETWEEN ... AND ...'.",
    "classNum": 2
  },
  {
    "id": 10,
    "topic": "Clase 02: Cláusula ORDER BY",
    "unit": "Unidad 1",
    "type": "fill_in_sql",
    "question": "¿Cuál es la cláusula SQL empleada para ordenar los resultados de una consulta según una o más columnas?",
    "template": "SELECT nombre, salario FROM Empleados {INPUT} salario DESC;",
    "expectedAnswer": "ORDER BY",
    "caseInsensitive": true,
    "cleanAnswer": "ORDER BY",
    "explanation": "`ORDER BY` presenta los registros ordenados por las columnas especificadas, utilizando `ASC` (por defecto) o `DESC`.",
    "citation": "Clase 02 - Moldeando el Resultado: ORDER BY (ASC / DESC).",
    "slideImage": "assets/clases_infographics/clase2_p08.png",
    "hint": "Cláusula de dos palabras para ordenar filas de forma ascendente o descendente.",
    "classNum": 2
  },
  {
    "id": 11,
    "topic": "Clase 04 / 05: Lenguaje DDL (CREATE TABLE)",
    "unit": "Unidad 4",
    "type": "fill_in_sql",
    "question": "Nombra el comando DDL exacto utilizado para crear una nueva tabla en la base de datos:",
    "template": "{INPUT} Clientes (id_cliente INT PRIMARY KEY, nombre VARCHAR(100));",
    "expectedAnswer": "CREATE TABLE",
    "caseInsensitive": true,
    "cleanAnswer": "CREATE TABLE",
    "explanation": "`CREATE TABLE` es la instrucción de DDL para definir el nombre, columnas, tipos de datos y restricciones de una nueva tabla.",
    "citation": "Clase 05 - Anatomía de la Construcción (DDL): CREATE TABLE (Esquema Inicial).",
    "slideImage": "assets/clases_infographics/clase5_p11.png",
    "hint": "Comando DDL de dos palabras para definir una nueva estructura relacional con sus campos.",
    "classNum": 5
  },
  {
    "id": 12,
    "topic": "Clase 02 / 03: Cláusula DISTINCT",
    "unit": "Unidad 1",
    "type": "code_completion",
    "question": "Lista los 'id_departamento' únicos (sin valores repetidos) a los que están asignados los empleados:",
    "codeSnippet": "SELECT [BLANK_1] id_departamento\nFROM Empleados;",
    "blanks": [
      {
        "id": "BLANK_1",
        "expected": "DISTINCT",
        "placeholder": "palabra clave"
      }
    ],
    "explanation": "`SELECT DISTINCT columna` elimina las filas duplicadas del resultado, retornando solo valores únicos.",
    "citation": "Clase 03 - DISTINCT: Eliminando el Ruido (SELECT DISTINCT id_departamento).",
    "slideImage": "assets/clases_infographics/clase3_p12.png",
    "hint": "Palabra clave que se antepone a la lista de columnas de un SELECT para descartar filas duplicadas.",
    "classNum": 3
  },
  {
    "id": 13,
    "topic": "Clase 04: DELETE vs TRUNCATE vs DROP",
    "unit": "Unidad 4",
    "type": "matching",
    "question": "Relaciona cada comando de borrado SQL con su impacto y comportamiento:",
    "pairs": [
      {
        "key": "DELETE FROM tabla",
        "value": "DML: Borra filas con WHERE opcional, es transaccional (genera log/rollback) y mantiene la estructura."
      },
      {
        "key": "TRUNCATE TABLE tabla",
        "value": "DDL: Vacía la tabla de golpe desasignando páginas de datos; reinicia secuencias autoincrementales."
      },
      {
        "key": "DROP TABLE tabla",
        "value": "DDL: Destruye completamente la estructura, datos, índices y metadatos de la tabla en el catálogo."
      }
    ],
    "explanation": "DELETE es DML fila por fila con posibilidad de filtro y rollback; TRUNCATE es DDL de vaciado ultra-rápido; DROP borra la tabla por completo del diccionario.",
    "citation": "Clase 04 - Eliminación de Registros con DELETE vs DDL.",
    "slideImage": "assets/clases_infographics/clase4_p10.png",
    "hint": "DELETE es DML transaccional con WHERE; TRUNCATE es DDL de vaciado instantáneo desasignando páginas; DROP destruye la tabla por completo.",
    "classNum": 4
  },
  {
    "id": 14,
    "topic": "Clase 01: Componentes del DBMS (Storage vs Query Engine)",
    "unit": "Unidad 1",
    "type": "matching",
    "question": "Relaciona cada componente del DBMS con su función arquitectónica:",
    "pairs": [
      {
        "key": "Query Parser / Lexer",
        "value": "Verifica sintaxis SQL y valida objetos contra el catálogo."
      },
      {
        "key": "Query Optimizer",
        "value": "Genera el plan de ejecución de menor costo estimado (Index Scan vs Seq Scan)."
      },
      {
        "key": "Buffer Pool Manager",
        "value": "Mantiene páginas de datos en memoria RAM para minimizar lecturas de disco I/O."
      },
      {
        "key": "WAL / Transaction Log",
        "value": "Garantiza durabilidad (D de ACID) registrando cambios antes de persistir en disco."
      }
    ],
    "explanation": "El DBMS se divide entre el Query Processor (Parser, Optimizador, Ejecutor) y el Storage Engine (Buffer Pool, Page Layout, WAL, Disk).",
    "citation": "Clase 01 - Arquitectura DBMS: Procesador de Consultas y Motor de Almacenamiento.",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "hint": "El Parser revisa sintaxis; el Optimizador busca el plan más rápido; el Buffer Pool guarda páginas en RAM y el WAL garantiza durabilidad.",
    "classNum": 1
  },
  {
    "id": 15,
    "topic": "Clase 05: Restricción CHECK de Dominio",
    "unit": "Unidad 5",
    "type": "fill_in_sql",
    "question": "Completa la restricción de integridad de dominio para asegurar que el salario de un empleado sea mayor a cero:",
    "template": "CREATE TABLE Empleados (id INT PRIMARY KEY, salario DECIMAL(10,2) {INPUT} (salario > 0));",
    "expectedAnswer": "CHECK",
    "caseInsensitive": true,
    "cleanAnswer": "CHECK",
    "explanation": "La restricción `CHECK (condición_booleana)` valida que cada fila cumpla con la regla de negocio antes de permitir la inserción o actualización.",
    "citation": "Clase 05 - Arsenal de Restricciones (Constraints): NOT NULL, UNIQUE, CHECK.",
    "slideImage": "assets/clases_infographics/clase5_p12.png",
    "hint": "Palabra clave de restricción de tabla para validar una expresión booleana sobre los valores de una columna.",
    "classNum": 5
  },
  {
    "id": 16,
    "topic": "Módulo 1: Introducción a los SGBD",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cuál es el objetivo principal de un Sistema de Gestión de Bases de Datos (SGBD)?",
    "options": [
      "Permitir únicamente el almacenamiento físico en disco de archivos planos sin índices.",
      "Almacenar y administrar datos garantizando reducción de redundancia, control de inconsistencia, seguridad e integridad.",
      "Generar hojas de cálculo avanzadas para análisis financiero exclusivamente.",
      "Reemplazar por completo los lenguajes de programación de alto nivel."
    ],
    "correctAnswer": 1,
    "explanation": "Un SGBD / DBMS es un conjunto de programas que permite almacenar, manipular y consultar datos garantizando la reducción de la redundancia no controlada, manteniendo la consistencia, la integridad referencial y la seguridad de los accesos.",
    "citation": "UTN BA - Módulo 1: Introducción a los SGBD / Ventajas del enfoque DBMS.",
    "slideImage": "assets/clases_infographics/clase1_p02.png",
    "hint": "Un SGBD busca superar las limitaciones de los archivos planos evitando datos duplicados y asegurando coherencia y seguridad global.",
    "classNum": 1
  },
  {
    "id": 17,
    "topic": "Módulo 1: Arquitectura del SGBD",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "En la arquitectura funcional de un SGBD, ¿qué función cumple el Administrador de Almacenamiento (Storage Manager)?",
    "options": [
      "Validar la sintaxis de las sentencias DDL ingresadas por el usuario.",
      "Diseñar los diagramas entidad-relación de nivel conceptual.",
      "Traducir las instrucciones SQL a código ejecutable en C++.",
      "Servir de interfaz entre los datos de bajo nivel guardados en la BD y las aplicaciones/consultas enviadas al sistema."
    ],
    "correctAnswer": 3,
    "explanation": "El Storage Manager es el componente del SGBD que intermedia entre la estructura física de almacenamiento en disco (búferes, archivos de datos e índices) y las peticiones del procesador de consultas.",
    "citation": "UTN BA - Módulo 1: Componentes del DBMS (Storage Manager vs Query Processor).",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "hint": "Es el puente entre los bloques y páginas de bajo nivel en el disco y las peticiones lógicas del motor de consultas.",
    "classNum": 1
  },
  {
    "id": 18,
    "topic": "Módulo 1: Independencia de Datos",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cómo se define la independencia física de datos?",
    "options": [
      "La capacidad de modificar el esquema interno/físico (métodos de acceso, estructuras de archivos) sin alterar el esquema conceptual.",
      "La imposibilidad de modificar la estructura de las tablas una vez creadas en el servidor.",
      "La independencia total entre la base de datos y el sistema operativo de la computadora.",
      "La capacidad de cambiar el esquema conceptual sin modificar los esquemas externos o las aplicaciones."
    ],
    "correctAnswer": 0,
    "explanation": "La independencia física permite cambiar la representación física en disco (creación de índices, organización de archivos) sin que ello obligue a reestructurar el esquema conceptual ni las aplicaciones de los usuarios.",
    "citation": "UTN BA - Módulo 1: El Escudo de la Independencia Física de Datos.",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "hint": "Permite cambiar discos, particiones o estructuras de índices sin tocar el diseño lógico ni el código de las aplicaciones.",
    "classNum": 1
  },
  {
    "id": 19,
    "topic": "Módulo 1: Independencia de Datos",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cómo se define la independencia lógica de datos?",
    "options": [
      "La velocidad con la que el motor procesa sentencias SELECT complejos.",
      "La separación entre la placa de red y el servidor de base de datos.",
      "La capacidad de modificar el esquema conceptual (añadir o alterar entidades y atributos) sin tener que reescribir las aplicaciones o vistas externas no afectadas.",
      "La capacidad de cambiar de motor de base de datos sin migrar las tablas."
    ],
    "correctAnswer": 2,
    "explanation": "La independencia lógica garantiza que las modificaciones en la estructura conceptual de la base de datos (por ejemplo, agregar una nueva columna o tabla) no afecten a las aplicaciones que no utilizan dichos elementos.",
    "citation": "UTN BA - Módulo 1: Independencia Lógica de Datos en Arquitectura de 3 Niveles.",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "hint": "Permite agregar nuevas tablas o atributos al esquema conceptual sin romper las vistas ni programas existentes que no los usan.",
    "classNum": 1
  },
  {
    "id": 20,
    "topic": "Módulo 1: Sistemas OLTP vs OLAP",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué diferencia fundamental existe entre un sistema OLTP y un sistema OLAP?",
    "options": [
      "OLTP gestiona operaciones transaccionales diarias, cortas y frecuentes, mientras que OLAP está orientado a análisis de datos históricos para la toma de decisiones.",
      "OLTP no requiere integridad referencial mientras que OLAP sí la exige estrictamente.",
      "OLTP solo funciona con bases de datos jerárquicas y OLAP con bases de datos en red.",
      "OLTP se utiliza para consultas analíticas masivas y OLAP para transacciones operativas en tiempo real."
    ],
    "correctAnswer": 0,
    "explanation": "OLTP (On-Line Transaction Processing) soporta las operaciones del día a día con transacciones rápidas y atómicas. OLAP (On-Line Analytical Processing) consolida volúmenes de datos históricos para análisis multidimensional estratégico.",
    "citation": "UTN BA - Módulo 1: El Dilema Moderno - Operación (OLTP) vs Análisis (OLAP).",
    "slideImage": "assets/clases_infographics/clase1_p11.png",
    "hint": "OLTP es operativo (ventas, transferencias en tiempo real); OLAP es analítico (reportes gerenciales e inteligencia de negocios sobre históricos).",
    "classNum": 1
  },
  {
    "id": 21,
    "topic": "Módulo 1: Características Transaccionales OLTP",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cuál es una característica típica de las transacciones en un sistema OLTP?",
    "options": [
      "Operaciones atómicas, cortas, rápidas y de alta frecuencia con accesos a pocos registros.",
      "Ausencia de mecanismos de control de concurrencia.",
      "Consultas que requieren escaneo completo (Sequential Scan) de múltiples tablas históricas.",
      "Ejecución de procesos batch que duran varias horas afectando millones de filas."
    ],
    "correctAnswer": 0,
    "explanation": "Las operaciones OLTP se caracterizan por ser de duraciones muy breves (milisegundos), afectando a una o unas pocas filas por transacción (ej. un pago, una reserva) con alta tasa de concurrencia.",
    "citation": "UTN BA - Módulo 1: Transacciones ACID en Sistemas OLTP.",
    "slideImage": "assets/clases_infographics/clase1_p11.png",
    "hint": "Piensa en el cobro en un cajero automático o una compra online: ocurre en milisegundos y toca muy pocas filas.",
    "classNum": 1
  },
  {
    "id": 22,
    "topic": "Módulo 1: Sistemas de Archivos vs SGBD",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cuál era un problema grave de los sistemas de procesamiento de archivos planos tradicionales antes de la aparición de los SGBD?",
    "options": [
      "Exceso de normalización automática de datos.",
      "Redundancia e inconsistencia de datos, junto con una fuerte dependencia entre las aplicaciones y la estructura del archivo.",
      "Incapacidad absoluta para guardar números decimales.",
      "Imposibilidad de almacenar archivos de texto en discos rígidos."
    ],
    "correctAnswer": 1,
    "explanation": "En los sistemas de archivos tradicionales, cada aplicación mantenía sus propios datos. Esto provocaba duplicación (redundancia), inconsistencias si un dato cambiaba en un archivo pero no en otro, y acoplamiento rígido del código.",
    "citation": "UTN BA - Módulo 1: El Fin del Caos Estructural - Archivos vs DBMS.",
    "slideImage": "assets/clases_infographics/clase1_p03.png",
    "hint": "Cada programa manejaba su propio archivo: si un cliente cambiaba de domicilio, había que actualizarlo en múltiples archivos manuales.",
    "classNum": 1
  },
  {
    "id": 23,
    "topic": "Módulo 1: Modelo Jerárquico",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "En el modelo de datos jerárquico, ¿cómo se organiza la información?",
    "options": [
      "En una estructura de árbol invertido con relaciones padre-hijo (1 a N).",
      "En colecciones de documentos JSON sin esquema previo.",
      "En una estructura de tablas bidimensionales vinculadas por claves foráneas.",
      "En un grafo orientado donde cualquier nodo puede conectarse libremente con cualquier otro."
    ],
    "correctAnswer": 0,
    "explanation": "El modelo jerárquico representa la información mediante un árbol invertido formado por nodos (registros) vinculados en una jerarquía estricta de padre e hijos.",
    "citation": "UTN BA - Módulo 1: Modelo Jerárquico - El Árbol Invertido.",
    "slideImage": "assets/clases_infographics/clase3_p03.png",
    "hint": "La estructura jerárquica tiene una raíz arriba y se ramifica hacia abajo en forma de árbol invertido.",
    "classNum": 3
  },
  {
    "id": 24,
    "topic": "Módulo 1: Modelo Jerárquico",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "En el modelo jerárquico, ¿cuál es la restricción estricta respecto a las relaciones padre-hijo?",
    "options": [
      "Un registro padre puede tener como máximo un registro hijo.",
      "Un registro hijo solo puede tener un único registro padre.",
      "Un registro hijo puede tener múltiples registros padres.",
      "No se permiten registros que carezcan de hijos."
    ],
    "correctAnswer": 1,
    "explanation": "La regla fundamental de la estructura jerárquica es que un registro hijo debe pertenecer exclusivamente a un solo registro padre (relación 1-N estricta unidireccional).",
    "citation": "UTN BA - Módulo 1: Restricciones de Paternidad en el Modelo Jerárquico.",
    "slideImage": "assets/clases_infographics/clase3_p03.png",
    "hint": "En un árbol estricto, cada nodo hijo tiene un único enlace que sube hacia su único padre directo.",
    "classNum": 3
  },
  {
    "id": 25,
    "topic": "Módulo 1: Navegación en Modelo Jerárquico",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Cómo realiza la navegación el motor en una base de datos de modelo jerárquico?",
    "options": [
      "Utilizando hashes dinámicos en memoria RAM.",
      "Mediante índices B-Tree automáticos en cada columna.",
      "Mediante sentencias SQL declarativas como SELECT e INNER JOIN.",
      "A través de direcciones y punteros físicos en memoria, recorriendo el árbol desde la raíz hacia los hijos."
    ],
    "correctAnswer": 3,
    "explanation": "La navegación en el modelo jerárquico es procedimental: el programador debe escribir código explícito para seguir los punteros físicos almacenados en disco de nodo a nodo.",
    "citation": "UTN BA - Módulo 1: Navegación Física mediante Punteros.",
    "slideImage": "assets/clases_infographics/clase3_p02.png",
    "hint": "Antes de SQL declarativo, los programas debían seguir punteros de memoria y hardware registro por registro.",
    "classNum": 3
  },
  {
    "id": 26,
    "topic": "Módulo 1: Modelo en Red",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "En el modelo de base de datos en red, ¿cómo se denominan los elementos que componen una relación o conjunto (Set)?",
    "options": [
      "Clave Primaria y Clave Foránea.",
      "Dueño (Owner) y Miembro (Member).",
      "Entidad y Atributo.",
      "Padre y Tupla."
    ],
    "correctAnswer": 1,
    "explanation": "El modelo de red define sus relaciones mediante el concepto de 'Set', compuesto por un registro Dueño (Owner) y uno o más registros Miembros (Members).",
    "citation": "UTN BA - Módulo 1: Modelo de Red CODASYL - Sets (Owner / Member).",
    "slideImage": "assets/clases_infographics/clase3_p05.png",
    "hint": "En CODASYL cada conjunto (Set) tiene un registro propietario ('Owner') y registros miembros ('Members').",
    "classNum": 3
  },
  {
    "id": 27,
    "topic": "Módulo 1: Modelo en Red vs Jerárquico",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Qué ventaja principal ofrece el modelo de red en comparación con el modelo jerárquico?",
    "options": [
      "No requiere definir un esquema inicial.",
      "Permite consultas declarativas dinámicas en SQL.",
      "Permite que un registro hijo (miembro) tenga más de un registro padre (dueño), representando grafos complejos.",
      "Elimina totalmente el uso de punteros físicos."
    ],
    "correctAnswer": 2,
    "explanation": "A diferencia del modelo jerárquico (donde cada hijo tiene un solo padre), el modelo de red permite que un registro sea miembro de múltiples conjuntos, admitiendo relaciones N-M complejas.",
    "citation": "UTN BA - Módulo 1: Ventajas del Modelo de Red sobre el Jerárquico.",
    "slideImage": "assets/clases_infographics/clase3_p05.png",
    "hint": "Rompe la restricción del árbol: un nodo miembro puede tener múltiples dueños (Owners), formando una red o grafo.",
    "classNum": 3
  },
  {
    "id": 28,
    "topic": "Módulo 1: Rigidez del Modelo en Red",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Por qué el modelo de red presenta una elevada rigidez y dificultad de mantenimiento?",
    "options": [
      "Porque las búsquedas son siempre secuenciales e imposibles de optimizar.",
      "Porque las relaciones se implementan mediante punteros físicos; cualquier cambio en la estructura exige reescribir las aplicaciones de acceso.",
      "Debido a que no permite guardar valores numéricos.",
      "Porque no soporta concurrencia de ningún tipo."
    ],
    "correctAnswer": 1,
    "explanation": "Al depender de cadenas de punteros físicos entrelazados, alterar el esquema implica reestructurar las rutas de navegación en el código fuente de los programas de aplicación.",
    "citation": "UTN BA - Módulo 1: Matriz Diagnóstica - Rigidez en Modelo de Red.",
    "slideImage": "assets/clases_infographics/clase3_p06.png",
    "hint": "El código dependía de la ubicación física de punteros: cambiar un campo obligaba a reprogramar los accesos.",
    "classNum": 3
  },
  {
    "id": 29,
    "topic": "Módulo 1: Integridad en Modelos Tradicionales",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Qué sucede con la integridad referencial en los modelos jerárquicos tradicionales?",
    "options": [
      "Se implementa mediante desencadenadores (triggers) en el motor.",
      "Impide la eliminación de cualquier registro que tenga un valor NULL.",
      "No se gestiona de forma implícita debido a la falta de claves primarias o campos unívocos, generando riesgo de inconsistencias.",
      "Es gestionada y garantizada automáticamente por el motor de la base de datos."
    ],
    "correctAnswer": 2,
    "explanation": "En el modelo jerárquico clásico no existe el concepto de clave primaria o foránea lógica; la integridad referencial recae totalmente en la lógica del programador, lo que suele derivar en anomalías.",
    "citation": "UTN BA - Módulo 1: Fracturas del Modelo Jerárquico - Integridad Referencial.",
    "slideImage": "assets/clases_infographics/clase3_p04.png",
    "hint": "Al no existir el concepto de Clave Primaria / Foránea lógica, el motor no puede validar automáticamente la consistencia.",
    "classNum": 3
  },
  {
    "id": 30,
    "topic": "Módulo 1: Modelo Orientado a Objetos (OODBMS)",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Qué modelo de datos utiliza referencias directas a objetos y colecciones para resolver relaciones N-M de forma eficiente?",
    "options": [
      "Modelo Relacional estricto.",
      "Modelo Orientado a Objetos (OODBMS).",
      "Modelo Jerárquico tradicional.",
      "Modelo de Archivos Planos."
    ],
    "correctAnswer": 1,
    "explanation": "El modelo orientado a objetos aborda las relaciones N-M mediante atributos multivaluados que almacenan colecciones de referencias de objetos, permitiendo acceso directo a elementos relacionados.",
    "citation": "UTN BA - Módulo 1: Paradigma Orientado a Objetos y Colecciones.",
    "slideImage": "assets/clases_infographics/clase1_p10.png",
    "hint": "Usa identificadores de objeto (OID) y listas o colecciones en memoria para navegar relaciones complejas sin tablas intermedias.",
    "classNum": 1
  },
  {
    "id": 31,
    "topic": "Módulo 1: Concepto de Inconsistencia",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué es la inconsistencia de datos?",
    "options": [
      "El borrado accidental de la base de datos por un corte de energía.",
      "El estado en el que una tabla no tiene filas.",
      "Un error de sintaxis al ejecutar una consulta SQL.",
      "La situación en la que diferentes copias de un mismo dato tienen valores distintos por falta de actualización centralizada."
    ],
    "correctAnswer": 3,
    "explanation": "La inconsistencia se produce cuando la redundancia no está controlada: si el domicilio de un cliente se actualiza en una tabla pero no en otra, la base de datos entra en un estado inconsistente.",
    "citation": "UTN BA - Módulo 1: Inconsistencia y Redundancia de Datos.",
    "slideImage": "assets/clases_infographics/clase1_p03.png",
    "hint": "Ocurre cuando existen múltiples copias de un dato y se modifican de forma despareja, entrando en contradicción.",
    "classNum": 1
  },
  {
    "id": 32,
    "topic": "Módulo 1: Procesador de Consultas",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué componente del SGBD se encarga de analizar sintácticamente, optimizar y generar el plan de ejecución para una consulta?",
    "options": [
      "Administrador de Transacciones.",
      "Administrador de Autorizaciones.",
      "Gestor de Buffer (Buffer Manager).",
      "Procesador de Consultas (Query Processor)."
    ],
    "correctAnswer": 3,
    "explanation": "El Query Processor recibe la consulta en lenguaje declarativo (SQL), evalúa múltiples algoritmos posibles de ejecución y selecciona el plan más eficiente.",
    "citation": "UTN BA - Módulo 1: El Cerebro del DBMS - Procesador de Consultas.",
    "slideImage": "assets/clases_infographics/clase1_p04.png",
    "hint": "Es el 'cerebro' que incluye el parser léxico-sintáctico y el optimizador de costos para generar el Execution Plan.",
    "classNum": 1
  },
  {
    "id": 33,
    "topic": "Módulo 1: Objetivos de OLAP",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "En un entorno OLAP, ¿cuál es el objetivo primordial del procesamiento de los datos?",
    "options": [
      "Facilitar el análisis multidimensional, agregaciones y tendencias para la toma de decisiones gerenciales.",
      "Eliminar completamente el uso de índices.",
      "Registrar las ventas individuales en las cajas de cobro en milisegundos.",
      "Garantizar la máxima velocidad de inserción de filas individuales."
    ],
    "correctAnswer": 0,
    "explanation": "Los sistemas OLAP (Data Warehouses / Datamarts) están diseñados para realizar consultas analíticas complejas (sumas, promedios, comparativas anuales) que ayudan a la estrategia corporativa.",
    "citation": "UTN BA - Módulo 1: Ecosistema OLAP y Data Warehousing.",
    "slideImage": "assets/clases_infographics/clase1_p11.png",
    "hint": "OLAP sirve a la toma de decisiones estratégicas mediante análisis multidimensional de cubos de datos históricos.",
    "classNum": 1
  },
  {
    "id": 34,
    "topic": "Módulo 1: Desnormalización y Almacenamiento",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Cuál es la consecuencia directa de la desnormalización excesiva en modelos de datos tradicionales respecto al almacenamiento?",
    "options": [
      "Eliminación total de las claves foráneas.",
      "Mayor velocidad en las operaciones de modificación (UPDATE).",
      "Gran duplicación de información y un aumento desproporcionado del espacio de almacenamiento ocupado.",
      "Reducción drástica del espacio consumido en disco."
    ],
    "correctAnswer": 2,
    "explanation": "Al desnormalizar o carecer de estructuras relacionales limpias, los mismos datos descriptivos se repiten en miles de registros, multiplicando la necesidad de disco.",
    "citation": "UTN BA - Módulo 1: Impacto de la Redundancia en el Almacenamiento.",
    "slideImage": "assets/clases_infographics/clase3_p04.png",
    "hint": "Repetir datos no normalizados una y otra vez infla innecesariamente el tamaño de las tablas en disco.",
    "classNum": 3
  },
  {
    "id": 35,
    "topic": "Módulo 1: Estandarización ANSI/SPARC",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué organismo de estandarización definió la arquitectura de 3 niveles para SGBD?",
    "options": [
      "ISO / IEC.",
      "ANSI / SPARC.",
      "IEEE.",
      "W3C."
    ],
    "correctAnswer": 1,
    "explanation": "El comité ANSI/X3/SPARC (Study Group on Data Base Management Systems) propuso en 1975 la arquitectura de 3 niveles para lograr la independencia de datos.",
    "citation": "UTN BA - Módulo 1: Estandarización ANSI/SPARC (1975).",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "hint": "Fue propuesto por el comité conjunto ANSI (American National Standards Institute) y SPARC.",
    "classNum": 5
  },
  {
    "id": 36,
    "topic": "Módulo 2: Niveles de Abstracción ANSI/SPARC",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cuántos niveles de abstracción define la arquitectura ANSI/SPARC para sistemas de bases de datos?",
    "options": [
      "2 niveles: Lógico y Físico.",
      "4 niveles: Usuario, Aplicación, Motor y Disco.",
      "1 nivel unificado.",
      "3 niveles: Externo, Conceptual e Interno."
    ],
    "correctAnswer": 3,
    "explanation": "La arquitectura ANSI/SPARC establece 3 niveles de abstracción: Externo (vistas de usuario), Conceptual (esquema lógico global) e Interno (almacenamiento físico en disco).",
    "citation": "UTN BA - Módulo 2: Arquitectura ANSI/SPARC - Los 3 Niveles.",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "hint": "Los 3 niveles clásicos: Externo (vistas), Conceptual (diseño global) e Interno (almacenamiento en bytes).",
    "classNum": 5
  },
  {
    "id": 37,
    "topic": "Módulo 2: Nivel Conceptual ANSI/SPARC",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cuál es una característica distintiva del nivel conceptual en la arquitectura ANSI/SPARC?",
    "options": [
      "Existen múltiples esquemas conceptuales adaptados a cada tipo de usuario.",
      "Es opcional y solo se incluye en bases de datos analíticas OLAP.",
      "Define la longitud exacta en bytes de los sectores de disco y bloques de memoria.",
      "Es único para toda la base de datos y describe qué datos se almacenan y cómo se relacionan entre sí a nivel lógico global."
    ],
    "correctAnswer": 3,
    "explanation": "El nivel conceptual es único y proporciona una visión lógica unificada e integrada de toda la organización de la base de datos, libre de detalles de almacenamiento físico.",
    "citation": "UTN BA - Módulo 2: Características del Nivel Conceptual.",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "hint": "Es único para toda la empresa: define entidades, atributos y relaciones sin importar el hardware.",
    "classNum": 5
  },
  {
    "id": 38,
    "topic": "Módulo 2: Nivel Interno ANSI/SPARC",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "En la arquitectura ANSI/SPARC, ¿cuál es el nivel más cercano al almacenamiento físico en disco?",
    "options": [
      "Nivel Conceptual.",
      "Nivel de Vista de Usuario.",
      "Nivel Interno (o Físico).",
      "Nivel Externo."
    ],
    "correctAnswer": 2,
    "explanation": "El nivel interno define cómo se guardan físicamente los datos en disco, detallando la representación de registros, tipos de campos, direcciones y estructuras de índices.",
    "citation": "UTN BA - Módulo 2: Nivel Interno y Estructuras Físicas.",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "hint": "Es el nivel más bajo, donde se configuran bloques, páginas de memoria y estructuras de archivo en disco.",
    "classNum": 5
  },
  {
    "id": 39,
    "topic": "Módulo 2: Nivel Externo ANSI/SPARC",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué contiene el nivel externo en la arquitectura ANSI/SPARC?",
    "options": [
      "Los archivos binarios del motor ejecutable del SGBD.",
      "Las especificaciones de hardware del servidor.",
      "La representación global de todas las tablas e índices del sistema.",
      "Diversas vistas externas individuales diseñadas según las necesidades de cada usuario o grupo de aplicaciones."
    ],
    "correctAnswer": 3,
    "explanation": "El nivel externo está compuesto por múltiples esquemas o vistas externas que muestran únicamente la parte relevante de la base de datos que le interesa a un usuario específico.",
    "citation": "UTN BA - Módulo 2: Vistas de Usuario en el Nivel Externo.",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "hint": "El nivel externo se adapta a cada rol de usuario (ej. Tesorería ve importes, RRHH ve legajos).",
    "classNum": 5
  },
  {
    "id": 40,
    "topic": "Módulo 2: Separación de Niveles ANSI/SPARC",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "Suponga un registro de empleado que en nivel interno mide 20 bytes (6 código, 4 depto, 10 salario). En nivel conceptual se modela la entidad Empleado. En nivel externo, Tesorería ve todo y RRHH ve solo código y depto. ¿Qué arquitectura permite esta separación?",
    "options": [
      "Modelo Jerárquico Codasyl.",
      "Arquitectura Monolítica de Archivos.",
      "Arquitectura de 3 niveles ANSI/SPARC.",
      "Arquitectura Cliente-Servidor de 2 capas."
    ],
    "correctAnswer": 2,
    "explanation": "Este ejemplo de la Clase 5 ilustra cómo la arquitectura ANSI/SPARC desacopla el almacenamiento físico (20 bytes), el modelo conceptual único (Empleado) y las vistas externas (Tesorería vs RRHH).",
    "citation": "UTN BA - Módulo 2: Ejemplo Integral de Arquitectura de 3 Niveles.",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "hint": "La separación entre almacenamiento de 20 bytes, entidad conceptual y vistas externas de RRHH/Tesorería es el principio central de ANSI/SPARC.",
    "classNum": 5
  },
  {
    "id": 41,
    "topic": "Módulo 2: Lenguajes del SGBD (DDL)",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Con qué lenguaje se define el esquema del nivel conceptual en la arquitectura ANSI/SPARC?",
    "options": [
      "DDL (Data Definition Language).",
      "TCL (Transaction Control Language).",
      "DML (Data Manipulation Language).",
      "DQL (Data Query Language)."
    ],
    "correctAnswer": 0,
    "explanation": "El esquema conceptual se declara utilizando el Lenguaje de Definición de Datos (DDL) para especificar tablas, columnas, tipos de datos y restricciones de integridad.",
    "citation": "UTN BA - Módulo 2: Sublenguaje DDL en la Definición de Esquemas.",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "hint": "DDL (Data Definition Language) contiene sentencias como CREATE TABLE para definir la estructura.",
    "classNum": 2
  },
  {
    "id": 42,
    "topic": "Módulo 2: Clave Primaria (PK)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué es una Clave Primaria (Primary Key) en el modelo relacional?",
    "options": [
      "Una clave que conecta dos tablas de bases de datos distintas.",
      "Un índice secundario utilizado exclusivamente para ordenar los resultados.",
      "Un atributo o conjunto mínimo de atributos que identifica de manera única e unívoca a cada tupla/fila dentro de una tabla.",
      "Una columna que puede contener valores duplicados pero no nulos."
    ],
    "correctAnswer": 2,
    "explanation": "La Clave Primaria es el identificador único de cada fila en una tabla relacional; garantiza que no existan tuplas duplicadas y no admite valores nulos (NOT NULL).",
    "citation": "UTN BA - Módulo 2: Matriz Estructural de Claves - Primary Key (PK).",
    "slideImage": "assets/clases_infographics/clase5_p08.png",
    "hint": "Es el identificador unívoco de cada tupla: no puede repetirse ni ser nulo.",
    "classNum": 5
  },
  {
    "id": 43,
    "topic": "Módulo 2: Clave Foránea (FK)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué es una Clave Foránea (Foreign Key) y cuál es su propósito principal?",
    "options": [
      "Un atributo en una tabla que hace referencia a la Clave Primaria de otra tabla, estableciendo un vínculo y garantizando la integridad referencial.",
      "Una contraseña para restringir el acceso a usuarios externos.",
      "Una clave que se genera automáticamente para acelerar las búsquedas por texto.",
      "El nombre alternativo que se le da a una columna en una consulta SELECT."
    ],
    "correctAnswer": 0,
    "explanation": "La Clave Foránea actúa como puente entre tablas: sus valores deben coincidir con una clave primaria válida en la tabla referenciada o ser nulos.",
    "citation": "UTN BA - Módulo 2: Matriz Estructural de Claves - Foreign Key (FK).",
    "slideImage": "assets/clases_infographics/clase5_p08.png",
    "hint": "Apunta a la Primary Key de otra tabla para vincular registros y evitar huérfanos.",
    "classNum": 5
  },
  {
    "id": 44,
    "topic": "Módulo 2: Integridad Referencial",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué establece el principio de Integridad Referencial?",
    "options": [
      "Que no se pueden hacer consultas JOIN en tablas con más de 1000 filas.",
      "Que ningún valor de clave foránea puede referenciar a un valor de clave primaria inexistente en la tabla padre.",
      "Que todas las tablas deben tener exactamente la misma cantidad de columnas.",
      "Que los nombres de las columnas en dos tablas relacionadas deben ser idénticos."
    ],
    "correctAnswer": 1,
    "explanation": "La integridad referencial asegura la consistencia de las relaciones entre tablas impidiendo que existan claves foráneas 'huérfanas' apuntando a registros inexistentes.",
    "citation": "UTN BA - Módulo 2: Integridad Referencial en Acción.",
    "slideImage": "assets/clases_infographics/clase5_p09.png",
    "hint": "Garantiza que no existan registros hijos apuntando a un padre que no existe.",
    "classNum": 5
  },
  {
    "id": 45,
    "topic": "Módulo 2: Cardinalidad 'Uno sin Cero'",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "Al describir la cardinalidad de una relación, ¿qué implica la condición 'uno sin cero' (cardinalidad mínima 1)?",
    "options": [
      "Que el registro en la tabla de destino es totalmente opcional.",
      "Que el registro debe existir obligatoriamente en la tabla de destino.",
      "Que pueden asociarse infinitos registros en la tabla de destino.",
      "Que el valor de la clave foránea debe ser siempre igual a cero."
    ],
    "correctAnswer": 1,
    "explanation": "Literalmente evaluado en el parcial (Pregunta 10): 'uno sin cero' indica una participación obligatoria (mínimo 1), por lo que el registro relacionado debe existir sí o sí en la tabla de destino.",
    "citation": "UTN BA - Módulo 2: Restricciones de Existencia (Cardinalidad Detallada).",
    "slideImage": "assets/clases_infographics/clase5_p07.png",
    "hint": "'Uno sin cero' significa que la cota inferior no puede ser 0: la existencia es obligatoria.",
    "classNum": 5
  },
  {
    "id": 46,
    "topic": "Módulo 2: Cardinalidad 'Uno con Cero'",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "Al describir la cardinalidad de una relación, ¿qué implica la condición 'uno con cero' (cardinalidad mínima 0)?",
    "options": [
      "Que la tabla de destino solo admite registros borrados.",
      "Que el registro en la tabla de destino es obligatorio.",
      "Que la relación se transforma automáticamente en una relación N-M.",
      "Que la participación es opcional: el registro en la tabla de destino puede existir (máximo 1) o no estar presente (0)."
    ],
    "correctAnswer": 3,
    "explanation": "'Uno con cero' (0 a 1) denota una relación opcional donde la entidad puede estar vinculada a lo sumo con una tupla de la otra tabla, o con ninguna.",
    "citation": "UTN BA - Módulo 2: Restricciones de Existencia - Participación Opcional.",
    "slideImage": "assets/clases_infographics/clase5_p07.png",
    "hint": "Cero a uno (0..1): la participación es opcional, puede no existir registro asociado.",
    "classNum": 5
  },
  {
    "id": 47,
    "topic": "Módulo 2: Resolución de Relaciones N-M",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "¿Cómo se resuelve una relación de cardinalidad Muchos a Muchos (N-M) entre dos entidades en el modelo relacional?",
    "options": [
      "Colocando dos claves foráneas cruzadas en cada una de las tablas originales.",
      "Utilizando un índice GiST multicolumna.",
      "Fusionando ambas entidades en una sola tabla sin claves primarias.",
      "Creando una tabla intermedia (de resolución) cuyas claves foráneas referencien a las claves primarias de ambas tablas originales."
    ],
    "correctAnswer": 3,
    "explanation": "Las relaciones N-M no se pueden implementar directamente con una FK en una de las tablas originales. Se debe descomponer en dos relaciones 1-N mediante una tabla intermedia o de unión.",
    "citation": "UTN BA - Módulo 2: Desentrañando la Relación Muchos a Muchos (N-M).",
    "slideImage": "assets/clases_infographics/clase5_p06.png",
    "hint": "Se crea una tabla asociativa/intermedia que contiene las FKs de ambas entidades.",
    "classNum": 5
  },
  {
    "id": 48,
    "topic": "Módulo 2: Diagramas ER (Crow's Foot)",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "En la notación Patas de Gallo (Crow's Foot) de un diagrama ER, ¿qué símbolo representa la cardinalidad 'muchos'?",
    "options": [
      "Un círculo transparente.",
      "Una línea vertical simple.",
      "Un tridente o ramificación de tres líneas ('pata de gallo').",
      "Un rombo con la letra N."
    ],
    "correctAnswer": 2,
    "explanation": "La notación Crow's Foot utiliza una ramificación de tres líneas al final de la línea de relación para indicar que la entidad del lado correspondiente puede tener 'muchos' registros asociados.",
    "citation": "UTN BA - Módulo 2: Notación Crow's Foot en Diagramas Entidad-Relación.",
    "slideImage": "assets/clases_infographics/clase5_p04.png",
    "hint": "La bifurcación de 3 líneas asemeja la huella de una pata de gallo (Crow's foot).",
    "classNum": 5
  },
  {
    "id": 49,
    "topic": "Módulo 2: Acciones Referenciales (ON DELETE CASCADE)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "Si una clave foránea se define con la regla ON DELETE CASCADE, ¿qué ocurre cuando se elimina un registro en la tabla padre referenciada?",
    "options": [
      "Se eliminan automáticamente todos los registros asociados en la tabla hija que hacían referencia a ese padre.",
      "Se bloquea la tabla padre para futuras inserciones.",
      "Se cancela la operación de borrado y se genera un error de integridad.",
      "Se establece el valor NULL en las claves foráneas de los registros hijos."
    ],
    "correctAnswer": 0,
    "explanation": "ON DELETE CASCADE propaga automáticamente la eliminación a la tabla hija, borrando los registros vinculados para prevenir registros huérfanos.",
    "citation": "UTN BA - Módulo 2: Reglas Referenciales ON DELETE CASCADE.",
    "slideImage": "assets/clases_infographics/clase5_p09.png",
    "hint": "La acción en cascada elimina en cadena a los hijos cuando el registro padre desaparece.",
    "classNum": 4
  },
  {
    "id": 50,
    "topic": "Módulo 2: Acciones Referenciales (ON DELETE SET NULL)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "Si una clave foránea se define con la regla ON DELETE SET NULL, ¿qué ocurre al eliminar el registro correspondiente en la tabla padre?",
    "options": [
      "Las columnas de clave foránea en las filas hijas asociadas se actualizan al valor NULL.",
      "El motor de base de datos se detiene por falla crítica.",
      "Se borran todas las filas de la tabla hija.",
      "Se crea una nueva tabla de respaldo con las filas eliminadas."
    ],
    "correctAnswer": 0,
    "explanation": "ON DELETE SET NULL conserva los registros de la tabla hija pero desvincula la relación asignando el valor NULL a la clave foránea en las filas afectadas.",
    "citation": "UTN BA - Módulo 2: Acciones Referenciales - SET NULL.",
    "slideImage": "assets/clases_infographics/clase5_p09.png",
    "hint": "No borra la fila hija, sino que pone su FK en NULL para indicar que ya no tiene padre asociado.",
    "classNum": 4
  },
  {
    "id": 51,
    "topic": "Módulo 2: Acciones Referenciales (ON DELETE RESTRICT)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué ocurre si se intenta eliminar un registro padre cuya clave foránea tiene la regla ON DELETE RESTRICT y existen registros hijos asociados?",
    "options": [
      "El motor de base de datos impide la eliminación y devuelve un error de violación de integridad referencial.",
      "Se convierten los registros hijos en registros padres.",
      "Se borra primero la tabla hija completa.",
      "Se borra el registro padre y los hijos quedan huérfanos."
    ],
    "correctAnswer": 0,
    "explanation": "ON DELETE RESTRICT (o NO ACTION) prohíbe la eliminación de la tupla padre mientras permanezca referenciada por al menos un registro en la tabla hija.",
    "citation": "UTN BA - Módulo 2: Acciones Referenciales - RESTRICT.",
    "slideImage": "assets/clases_infographics/clase5_p09.png",
    "hint": "RESTRICT frena y aborta la transacción arrojando error para proteger la integridad.",
    "classNum": 4
  },
  {
    "id": 52,
    "topic": "Módulo 2: Terminología Formal Relacional (Tupla)",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "En la terminología formal del Modelo Relacional ideado por Codd, ¿a qué equivale conceptualmente una 'Tupla'?",
    "options": [
      "A una fila o registro de una tabla.",
      "A una columna o atributo de una tabla.",
      "Al nombre de la base de datos.",
      "Al archivo de índice secundario."
    ],
    "correctAnswer": 0,
    "explanation": "En el modelo relacional formal, el término matemático 'Tupla' se corresponde con una fila o registro dentro de una relación (tabla).",
    "citation": "UTN BA - Módulo 2: Elementos de una Tabla - Tupla / Registro.",
    "slideImage": "assets/clases_infographics/clase5_p03.png",
    "hint": "En la teoría formal de Codd: Relación = Tabla, Tupla = Fila/Registro, Atributo = Columna.",
    "classNum": 5
  },
  {
    "id": 53,
    "topic": "Módulo 2: Concepto de Dominio",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué es un Dominio en el modelo relacional?",
    "options": [
      "El servidor donde está alojada la base de datos.",
      "La cantidad máxima de registros que soporta una tabla.",
      "El conjunto de valores homogéneos y atómicos válidos que puede tomar un atributo determinado.",
      "El nombre de la clave primaria compuesta."
    ],
    "correctAnswer": 2,
    "explanation": "El Dominio especifica el tipo de dato y el rango de valores permitidos para una columna (ej. enteros positivos, cadenas de 10 caracteres).",
    "citation": "UTN BA - Módulo 2: Elementos de una Tabla - Dominio de Atributos.",
    "slideImage": "assets/clases_infographics/clase5_p03.png",
    "hint": "Es el universo o conjunto de valores válidos y atómicos asignables a un atributo.",
    "classNum": 5
  },
  {
    "id": 54,
    "topic": "Módulo 2: Conjuntos y Unicidad de Tuplas",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Por qué en una relación relacional no pueden existir dos tuplas idénticas?",
    "options": [
      "Porque conceptualmente una relación es un conjunto de tuplas en sentido matemático, y la presencia de una Clave Primaria garantiza la unicidad de cada fila.",
      "Porque el sistema operativo borra los archivos duplicados.",
      "Porque las tablas solo pueden tener una sola columna.",
      "Porque la cláusula ORDER BY lo impide automáticamente."
    ],
    "correctAnswer": 0,
    "explanation": "Una relación es un conjunto matemático de elementos únicos. La presencia obligatoria de la Clave Primaria asegura que cada tupla sea distinguible de las demás.",
    "citation": "UTN BA - Módulo 2: Teoría de Conjuntos y Claves Primarias.",
    "slideImage": "assets/clases_infographics/clase5_p08.png",
    "hint": "En teoría matemática un conjunto no contiene elementos repetidos; la PK asegura que cada fila sea única.",
    "classNum": 5
  },
  {
    "id": 55,
    "topic": "Módulo 2: Rol de la Tabla Intermedia",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "¿Cuál es el rol de una tabla intermedia o de resolución en una relación N:M entre Clientes y Productos (ej. Pedidos)?",
    "options": [
      "Acelerar las consultas SELECT agregando índices de árbol B.",
      "Permitir el acceso único a cada combinación Cliente-Producto mediante una clave primaria propia o compuesta por ambas claves foráneas.",
      "Evitar que los clientes realicen compras con tarjeta de crédito.",
      "Guardar copias de respaldo de los datos de Clientes."
    ],
    "correctAnswer": 1,
    "explanation": "La tabla intermedia transforma la relación N:M en dos relaciones 1:N limpias, almacenando los atributos propios de la relación (como fecha, cantidad y precio del pedido).",
    "citation": "UTN BA - Módulo 2: Tablas de Resolución en Relaciones N-M.",
    "slideImage": "assets/clases_infographics/clase5_p06.png",
    "hint": "Permite modelar cada intersección Cliente-Producto y almacenar atributos propios (como fecha y cantidad).",
    "classNum": 5
  },
  {
    "id": 56,
    "topic": "Módulo 3: Categorías SQL (DDL)",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿A qué categoría de comandos SQL pertenece la instrucción CREATE TABLE?",
    "options": [
      "TCL (Transaction Control Language).",
      "DDL (Data Definition Language).",
      "DML (Data Manipulation Language).",
      "DQL (Data Query Language)."
    ],
    "correctAnswer": 1,
    "explanation": "CREATE TABLE es una sentencia DDL utilizada para definir la estructura física de una nueva tabla relacional en la base de datos.",
    "citation": "UTN BA - Módulo 3: Las 4 Familias de Comandos SQL (DDL).",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "hint": "DDL se encarga de 'definir' estructuras de tablas, esquemas, índices y vistas.",
    "classNum": 2
  },
  {
    "id": 57,
    "topic": "Módulo 3: Categorías SQL (DML)",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿A qué categoría de comandos SQL pertenece la instrucción UPDATE?",
    "options": [
      "DCL.",
      "DML.",
      "DDL.",
      "DQL."
    ],
    "correctAnswer": 1,
    "explanation": "UPDATE forma parte de DML (Data Manipulation Language), ya que modifica los datos contenidos dentro de los registros existentes sin alterar la estructura de la tabla.",
    "citation": "UTN BA - Módulo 3: Las 4 Familias de Comandos SQL (DML).",
    "slideImage": "assets/clases_infographics/clase2_p04.png",
    "hint": "DML manipula los registros (filas): INSERT, UPDATE, DELETE.",
    "classNum": 4
  },
  {
    "id": 58,
    "topic": "Módulo 3: Borrado de Estructuras (DROP TABLE)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Cuál es la instrucción SQL adecuada para eliminar permanentemente la estructura de la tabla Proyectos y todos sus datos?",
    "options": [
      "ALTER TABLE Proyectos DROP ALL;",
      "DROP TABLE Proyectos;",
      "TRUNCATE SCHEMA Proyectos;",
      "DELETE FROM Proyectos;"
    ],
    "correctAnswer": 1,
    "explanation": "Literalmente evaluado en el parcial (Pregunta 18): DROP TABLE Proyectos; elimina por completo el objeto tabla del diccionario de datos junto con su contenido.",
    "citation": "UTN BA - Módulo 3: Anatomía DDL - DROP TABLE.",
    "slideImage": "assets/clases_infographics/clase5_p11.png",
    "hint": "DROP TABLE destruye tanto los datos como la definición del catálogo de forma permanente.",
    "classNum": 5
  },
  {
    "id": 59,
    "topic": "Módulo 3: Modificación de Estructuras (ALTER TABLE)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué sentencia DDL se utiliza para agregar, modificar o eliminar columnas en una tabla ya existente?",
    "options": [
      "CHANGE TABLE",
      "UPDATE TABLE",
      "MODIFY TABLE",
      "ALTER TABLE"
    ],
    "correctAnswer": 3,
    "explanation": "ALTER TABLE es la sentencia de DDL diseñada para reestructurar la definición de una tabla existente (ej. agregar un campo, cambiar un tipo de dato).",
    "citation": "UTN BA - Módulo 3: Anatomía DDL - ALTER TABLE.",
    "slideImage": "assets/clases_infographics/clase5_p11.png",
    "hint": "Para 'alterar' la estructura física de columnas se usa ALTER TABLE.",
    "classNum": 5
  },
  {
    "id": 60,
    "topic": "Módulo 3: DELETE vs DROP TABLE",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Cuál es la diferencia fundamental entre el comando DELETE y la instrucción DROP TABLE?",
    "options": [
      "DELETE elimina filas individuales o masivas preservando la tabla; DROP TABLE elimina la tabla entera y su definición de la base de datos.",
      "DELETE borra la estructura de la tabla y DROP TABLE borra solo las filas.",
      "DELETE es de DDL y DROP TABLE es de DML.",
      "No hay diferencia; ambos realizan exactamente la misma acción."
    ],
    "correctAnswer": 0,
    "explanation": "DELETE es una operación DML sobre datos; DROP TABLE es una operación DDL sobre la estructura del objeto en la base de datos.",
    "citation": "UTN BA - Módulo 3: Eliminación de Datos vs Destrucción de Esquemas.",
    "slideImage": "assets/clases_infographics/clase4_p10.png",
    "hint": "DELETE borra filas dejando la tabla lista para nuevos INSERTs; DROP borra la tabla del catálogo.",
    "classNum": 4
  },
  {
    "id": 61,
    "topic": "Módulo 3: Sintaxis del UPDATE",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Cómo se estructura la sintaxis estándar del comando UPDATE en SQL?",
    "options": [
      "MODIFY tabla SET columna = valor;",
      "UPDATE tabla WHERE condicion SET columna = valor;",
      "CHANGE columna = valor IN tabla;",
      "UPDATE tabla SET columna = valor WHERE condicion;"
    ],
    "correctAnswer": 3,
    "explanation": "La sintaxis correcta es: UPDATE nombre_tabla SET columna1 = nuevo_valor WHERE condicion_filtrado;",
    "citation": "UTN BA - Módulo 3: Sintaxis Principal del UPDATE.",
    "slideImage": "assets/clases_infographics/clase4_p09.png",
    "hint": "UPDATE tabla SET campo = valor WHERE condicion;",
    "classNum": 4
  },
  {
    "id": 62,
    "topic": "Módulo 3: Peligros de UPDATE/DELETE sin WHERE",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué ocurre si se ejecuta una sentencia UPDATE o DELETE sin especificar la cláusula WHERE?",
    "options": [
      "Se afectan únicamente los primeros 10 registros.",
      "Se actualizan o borran de forma indiscriminada TODOS los registros de la tabla.",
      "La consulta cancela automáticamente por seguridad.",
      "El motor solicita confirmación paso a paso para cada fila."
    ],
    "correctAnswer": 1,
    "explanation": "Sin una cláusula WHERE que restrinja el alcance, UPDATE o DELETE aplican la modificación o eliminación a la totalidad de las filas de la tabla.",
    "citation": "UTN BA - Módulo 3: La Importancia Vital del WHERE en DML.",
    "slideImage": "assets/clases_infographics/clase4_p09.png",
    "hint": "Sin WHERE, la operación no tiene filtro y barre todas las filas de la tabla.",
    "classNum": 4
  },
  {
    "id": 63,
    "topic": "Módulo 3: Cláusula DISTINCT",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Para qué se utiliza la cláusula DISTINCT dentro de una consulta SELECT?",
    "options": [
      "Para eliminar filas duplicadas del conjunto de resultados devuelto por la consulta.",
      "Para filtrar valores nulos en columnas numéricas.",
      "Para ordenar los resultados de forma alfabética implícita.",
      "Para contar la cantidad total de filas en una tabla."
    ],
    "correctAnswer": 0,
    "explanation": "SELECT DISTINCT evalúa la combinación de los campos solicitados y remueve las filas repetidas, mostrando únicamente valores únicos.",
    "citation": "UTN BA - Módulo 3: DISTINCT - Eliminando el Ruido.",
    "slideImage": "assets/clases_infographics/clase3_p12.png",
    "hint": "DISTINCT remueve las tuplas duplicadas del conjunto proyectado.",
    "classNum": 3
  },
  {
    "id": 64,
    "topic": "Módulo 3: SELECT DISTINCT en Acción",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "Si ejecuta SELECT DISTINCT id_departamento FROM Empleados;, ¿qué resultado obtiene?",
    "options": [
      "Una tabla vacía.",
      "Todos los empleados con su departamento repetido por cada proyecto.",
      "La lista de identificadores únicos de departamentos que están asignados al menos a un empleado.",
      "El número total de empleados de la empresa."
    ],
    "correctAnswer": 2,
    "explanation": "Evaluado en el parcial (Pregunta 25): recupera los valores únicos de la columna id_departamento, suprimiendo las repeticiones.",
    "citation": "UTN BA - Módulo 3: Consulta SELECT DISTINCT id_departamento.",
    "slideImage": "assets/clases_infographics/clase3_p12.png",
    "hint": "Devuelve la lista única y sin duplicados de los códigos de departamento presentes en la tabla.",
    "classNum": 3
  },
  {
    "id": 65,
    "topic": "Módulo 3: Operador BETWEEN",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cómo opera el operador de rango BETWEEN ... AND ... en SQL?",
    "options": [
      "Evalúa si un valor se encuentra dentro de un intervalo, siendo INCLUSIVO en ambos extremos (límite inferior y superior).",
      "Se utiliza exclusivamente para comparar fechas, no números.",
      "Reemplaza a la cláusula GROUP BY.",
      "Filtra valores excluyendo de forma estricta los extremos indicados."
    ],
    "correctAnswer": 0,
    "explanation": "BETWEEN evalúa 'campo >= min AND campo <= max', incluyendo de forma inclusiva los dos valores límite declarados.",
    "citation": "UTN BA - Módulo 3: Operadores de Rango - BETWEEN AND.",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "BETWEEN min AND max es inclusivo: incluye tanto el límite inferior como el superior.",
    "classNum": 2
  },
  {
    "id": 66,
    "topic": "Módulo 3: Inclusividad de BETWEEN",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "Si ejecuta WHERE salario BETWEEN 45000 AND 55000, ¿los empleados con salario de 45000 y 55000 quedan incluidos?",
    "options": [
      "Produce un error de tipo de dato.",
      "Sí, quedan incluidos porque el operador BETWEEN es inclusivo en ambos extremos.",
      "Solo se incluye el límite inferior (45000).",
      "No, se excluyen ambos extremos."
    ],
    "correctAnswer": 1,
    "explanation": "Al ser inclusivo, los empleados que ganen exactamente 45.000 o 55.000 forman parte del conjunto resultante.",
    "citation": "UTN BA - Módulo 3: Inclusividad de Límites en BETWEEN.",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "Equivale a salario >= 45000 AND salario <= 55000, por lo que ambos extremos entran.",
    "classNum": 2
  },
  {
    "id": 67,
    "topic": "Módulo 3: Operador IN",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Para qué se utiliza el operador IN en la cláusula WHERE?",
    "options": [
      "Para determinar si un valor coincide con cualquiera de los valores presentes en una lista discreta especificada entre paréntesis.",
      "Para crear índices en memoria en tiempo de ejecución.",
      "Para buscar subcadenas de texto en campos de tipo VARCHAR.",
      "Para verificar si un valor está dentro de un rango continuo numérico."
    ],
    "correctAnswer": 0,
    "explanation": "El operador IN permite simplificar múltiples condiciones OR disjuntas (ej. WHERE id_depto IN (2, 3, 5)).",
    "citation": "UTN BA - Módulo 3: Operador de Conjunto Discreto IN.",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "Comprueba pertenencia a una lista discreta: `WHERE id IN (10, 20, 30)`.",
    "classNum": 2
  },
  {
    "id": 68,
    "topic": "Módulo 3: Comodines LIKE (Guion Bajo)",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "En la cláusula LIKE de SQL, ¿qué representación tiene el comodín guion bajo (_)?",
    "options": [
      "Coincide con cualquier secuencia de cero o más caracteres.",
      "Representa un espacio en blanco obligatorio.",
      "Indica que el texto debe estar en mayúsculas.",
      "Coincide exactamente con un solo carácter cualquiera."
    ],
    "correctAnswer": 3,
    "explanation": "El comodín '_' (underscore) reemplaza a exactamente un único carácter en la posición indicada dentro del patrón.",
    "citation": "UTN BA - Módulo 3: Coincidencia de Patrones con LIKE (_ y %).",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "El guion bajo `_` ocupa exactamente una posición de un único carácter cualquiera.",
    "classNum": 2
  },
  {
    "id": 69,
    "topic": "Módulo 3: Comodines LIKE (Porcentaje)",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "En la cláusula LIKE de SQL, ¿qué representación tiene el comodín porcentaje (%)?",
    "options": [
      "Representa exactamente un único número.",
      "Calcula el porcentaje de filas coincidentes.",
      "Convierte el campo a tipo flotante.",
      "Representa cualquier cadena de texto compuesta por cero, uno o múltiples caracteres."
    ],
    "correctAnswer": 3,
    "explanation": "El comodín '%' sustituye a cualquier cantidad de caracteres (incluyendo la cadena vacía).",
    "citation": "UTN BA - Módulo 3: Comodín de Longitud Variable (%) en LIKE.",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "El signo `%` representa una secuencia de 0, 1 o muchos caracteres.",
    "classNum": 2
  },
  {
    "id": 70,
    "topic": "Módulo 3: Patrón LIKE 'J%'",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cuál es el resultado de la condición WHERE nombre LIKE 'J%'?",
    "options": [
      "Devuelve error porque 'J' requiere estar entre comillas dobles.",
      "Filtra nombres que terminan con la letra 'J'.",
      "Filtra nombres de exactamente una letra 'J'.",
      "Filtra nombres que comienzan con la letra 'J' seguidos de cualquier texto."
    ],
    "correctAnswer": 3,
    "explanation": "'J%' matchea con cualquier cadena cuyo primer carácter sea 'J', sin importar la longitud restante (ej. 'Juan', 'Jose', 'J').",
    "citation": "UTN BA - Módulo 3: Búsquedas Prefijas con LIKE 'J%'.",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "Empieza con 'J' y `%` permite que continúe con cualquier texto o nada.",
    "classNum": 2
  },
  {
    "id": 71,
    "topic": "Módulo 3: Patrón LIKE '_A%'",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué patrón busca la condición WHERE codigo LIKE '_A%'?",
    "options": [
      "Códigos de dos caracteres que empiecen con 'A'.",
      "Códigos que no contengan vocales.",
      "Códigos cuya segunda letra sea obligatoriamente una 'A', precedida por cualquier carácter inicial y seguida de cualquier texto.",
      "Códigos que contengan una 'A' al final."
    ],
    "correctAnswer": 2,
    "explanation": "'_' exige un primer carácter cualquiera, 'A' fija la segunda posición y '%' permite cualquier texto posterior.",
    "citation": "UTN BA - Módulo 3: Combinación de Comodines en LIKE.",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "Primer carácter cualquiera (`_`), segundo carácter 'A', y luego cualquier cosa (`%`).",
    "classNum": 2
  },
  {
    "id": 72,
    "topic": "Módulo 3: Cláusula ORDER BY",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué cláusula de SQL se utiliza para especificar el criterio de ordenamiento del resultado de una consulta?",
    "options": [
      "GROUP BY",
      "ORDER BY",
      "SORT BY",
      "ARRANGE BY"
    ],
    "correctAnswer": 1,
    "explanation": "ORDER BY es la cláusula DQL para definir el orden en que las filas resultantes deben ser entregadas al usuario.",
    "citation": "UTN BA - Módulo 3: Moldeando el Resultado con ORDER BY.",
    "slideImage": "assets/clases_infographics/clase2_p08.png",
    "hint": "Cláusula de dos palabras para ordenar los resultados de un SELECT.",
    "classNum": 2
  },
  {
    "id": 73,
    "topic": "Módulo 3: Sentido por Defecto de ORDER BY",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "Si no se especifica el sentido del ordenamiento en la cláusula ORDER BY, ¿cuál es la dirección por defecto?",
    "options": [
      "Ascendente (ASC).",
      "Orden aleatorio.",
      "Según el orden físico de inserción en disco.",
      "Descendente (DESC)."
    ],
    "correctAnswer": 0,
    "explanation": "En SQL, la dirección de ordenamiento por defecto en ORDER BY es siempre ascendente (ASC).",
    "citation": "UTN BA - Módulo 3: Dirección por Defecto ASC en ORDER BY.",
    "slideImage": "assets/clases_infographics/clase2_p08.png",
    "hint": "Por defecto, SQL ordena de menor a mayor (A a Z, 1 a 9) de forma ascendente.",
    "classNum": 2
  },
  {
    "id": 74,
    "topic": "Módulo 3: Ordenamiento Descendente",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué palabra clave se debe agregar a la cláusula ORDER BY para ordenar los resultados de mayor a menor?",
    "options": [
      "HIGH",
      "REVERSE",
      "DESC",
      "DOWN"
    ],
    "correctAnswer": 2,
    "explanation": "La palabra clave DESC ordena de forma descendente (de mayor a menor para números, de Z a A para cadenas).",
    "citation": "UTN BA - Módulo 3: Modificador DESC en ORDER BY.",
    "slideImage": "assets/clases_infographics/clase2_p08.png",
    "hint": "La abreviatura de 'descendente' en SQL es DESC.",
    "classNum": 2
  },
  {
    "id": 75,
    "topic": "Módulo 3: Operador = vs LIKE",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cuál es la diferencia de comportamiento entre el operador = y el operador LIKE al comparar texto?",
    "options": [
      "No hay diferencia de funcionamiento.",
      "= permite usar el comodín % mientras que LIKE exige coincidencia exacta.",
      "= se usa para números y LIKE exclusivamente para fechas.",
      "= exige coincidencia exacta y completa del texto; LIKE permite búsquedas flexibles basadas en patrones de comodines."
    ],
    "correctAnswer": 3,
    "explanation": "El operador = compara la cadena completa de forma literal; LIKE analiza si la cadena encaja con una plantilla dinámica con comodines.",
    "citation": "UTN BA - Módulo 3: Comparación Literal vs Patrones con LIKE.",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "`=` busca igualdad estricta carácter por carácter; `LIKE` admite comodines `%` y `_`.",
    "classNum": 2
  },
  {
    "id": 76,
    "topic": "Módulo 4: Orden Lógico de Ejecución SELECT",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Cuál es el orden lógico en el que el motor de base de datos procesa las cláusulas de una consulta SELECT?",
    "options": [
      "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY",
      "WHERE -> FROM -> SELECT -> GROUP BY -> HAVING -> ORDER BY",
      "SELECT -> WHERE -> FROM -> GROUP BY -> ORDER BY",
      "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY"
    ],
    "correctAnswer": 0,
    "explanation": "El motor evalúa primero el origen de datos (FROM/JOIN), luego filtra filas (WHERE), agrupa (GROUP BY), filtra grupos (HAVING), proyecta columnas y alias (SELECT) y finalmente ordena (ORDER BY).",
    "citation": "UTN BA - Módulo 4: Pipeline de Datos SQL - Orden Lógico de Ejecución.",
    "slideImage": "assets/clases_infographics/clase2_p10.png",
    "hint": "Primero busca de dónde sacar los datos (FROM), filtra (WHERE), agrupa (GROUP BY), filtra grupos (HAVING), proyecta (SELECT) y ordena (ORDER BY).",
    "classNum": 2
  },
  {
    "id": 77,
    "topic": "Módulo 4: Alcance de Alias en WHERE",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Por qué no se puede utilizar un alias de columna definido en la cláusula SELECT dentro de la cláusula WHERE?",
    "options": [
      "Porque los alias son de uso exclusivo de la cláusula ORDER BY.",
      "Porque la cláusula WHERE solo acepta valores numéricos.",
      "Porque los alias solo están permitidos en consultas que usan JOIN.",
      "Porque la cláusula WHERE es evaluada por el motor antes de procesar la cláusula SELECT, por lo que el alias aún no existe."
    ],
    "correctAnswer": 3,
    "explanation": "Debido al orden lógico de evaluación (FROM -> WHERE -> ... -> SELECT), el alias declarado en SELECT no es reconocido durante la ejecución de WHERE.",
    "citation": "UTN BA - Módulo 4: Orden de Evaluación y Visibilidad de Alias.",
    "slideImage": "assets/clases_infographics/clase2_p10.png",
    "hint": "El motor procesa el WHERE mucho antes que el SELECT: en ese momento el alias no fue creado aún.",
    "classNum": 2
  },
  {
    "id": 78,
    "topic": "Módulo 4: INNER JOIN",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "¿Qué tipo de combinación (JOIN) retorna exclusivamente las filas que encuentran coincidencia en ambas tablas relacionadas?",
    "options": [
      "FULL OUTER JOIN",
      "CROSS JOIN",
      "LEFT JOIN",
      "INNER JOIN"
    ],
    "correctAnswer": 3,
    "explanation": "INNER JOIN realiza la intersección de ambas tablas: solo devuelve aquellas filas cuya condición ON sea verdadera en ambos lados.",
    "citation": "UTN BA - Módulo 4: Anatomía de los JOINs - INNER JOIN.",
    "slideImage": "assets/clases_infographics/clase3_p10.png",
    "hint": "Representa la intersección matemática pura: solo los registros que coinciden en ambas tablas.",
    "classNum": 3
  },
  {
    "id": 79,
    "topic": "Módulo 4: LEFT JOIN y Valores Nulos",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "En una consulta con LEFT JOIN entre las tablas A y B, ¿qué ocurre con las filas de la tabla A que no tienen coincidencia en B?",
    "options": [
      "Quedan excluidas por completo del resultado final.",
      "Se incluyen en el resultado completando las columnas pertenecientes a la tabla B con valores NULL.",
      "Duplican las filas de la tabla A.",
      "Provocan un error de ejecución por falta de coincidencia."
    ],
    "correctAnswer": 1,
    "explanation": "LEFT JOIN preserva la totalidad de los registros de la tabla izquierda (A); si no hay coincidencia en la derecha (B), sus atributos se muestran como NULL.",
    "citation": "UTN BA - Módulo 4: Anatomía de los JOINs - LEFT JOIN.",
    "slideImage": "assets/clases_infographics/clase3_p10.png",
    "hint": "Conserva todo lo de la izquierda (A) y rellena con NULL las columnas de la derecha (B) que no tengan par.",
    "classNum": 3
  },
  {
    "id": 80,
    "topic": "Módulo 4: Función COUNT",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué función de agregación se utiliza para contar la cantidad total de filas o registros que cumplen una condición?",
    "options": [
      "NUMBER()",
      "SUM()",
      "TOTAL()",
      "COUNT()"
    ],
    "correctAnswer": 3,
    "explanation": "COUNT() es la función de agregación encargada de computar la cantidad de filas o valores no nulos presentes en un conjunto de datos.",
    "citation": "UTN BA - Módulo 4: Funciones de Agregación - COUNT().",
    "slideImage": "assets/clases_infographics/clase2_p09.png",
    "hint": "La función en inglés para contar elementos es COUNT().",
    "classNum": 2
  },
  {
    "id": 81,
    "topic": "Módulo 4: COUNT(*) vs COUNT(columna)",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cuál es la diferencia de comportamiento entre COUNT(*) y COUNT(nombre_columna)?",
    "options": [
      "COUNT(*) es más lento y requiere índices B-Tree obligatorios.",
      "COUNT(*) cuenta todas las filas de la tabla (incluyendo nulas); COUNT(columna) cuenta únicamente los registros donde dicha columna tiene valores NO nulos (NOT NULL).",
      "COUNT(*) cuenta solo las filas con valores numéricos y COUNT(columna) cuenta el texto.",
      "No existe ninguna diferencia de resultado."
    ],
    "correctAnswer": 1,
    "explanation": "COUNT(*) evalúa la presencia de filas totales en la tupla; COUNT(columna) ignora las celdas que contienen el valor NULL.",
    "citation": "UTN BA - Módulo 4: COUNT(*) vs COUNT(columna) y Nulos.",
    "slideImage": "assets/clases_infographics/clase2_p09.png",
    "hint": "COUNT(*) cuenta todas las filas de la tabla; COUNT(columna) saltea los valores NULL.",
    "classNum": 2
  },
  {
    "id": 82,
    "topic": "Módulo 4: Función AVG",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué función de agregación calcula el promedio aritmético de los valores contenidos en una columna numérica?",
    "options": [
      "MEAN()",
      "AVERAGE()",
      "AVG()",
      "SUMAVG()"
    ],
    "correctAnswer": 2,
    "explanation": "AVG() es la función de agregación en SQL para calcular la media o promedio aritmético de los valores no nulos de un atributo.",
    "citation": "UTN BA - Módulo 4: Funciones de Agregación - AVG().",
    "slideImage": "assets/clases_infographics/clase2_p09.png",
    "hint": "La abreviatura estándar de 'Average' en SQL es AVG().",
    "classNum": 2
  },
  {
    "id": 83,
    "topic": "Módulo 4: Cláusula GROUP BY",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Para qué se utiliza la cláusula GROUP BY en una consulta SQL?",
    "options": [
      "Para crear índices temporales en disco.",
      "Para agrupar conjuntos de filas que comparten los mismos valores en las columnas especificadas, permitiendo aplicar funciones de agregación por cada grupo.",
      "Para combinar filas de dos bases de datos diferentes.",
      "Para ordenar alfabéticamente las columnas de salida."
    ],
    "correctAnswer": 1,
    "explanation": "GROUP BY colapsa las filas que tienen valores idénticos en los campos indicados para calcular subtotales, promedios o recuentos por categoría.",
    "citation": "UTN BA - Módulo 4: Agrupamiento Lógico con GROUP BY.",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "hint": "Segmenta las filas en grupos según columnas compartidas para calcular métricas por grupo.",
    "classNum": 3
  },
  {
    "id": 84,
    "topic": "Módulo 4: WHERE vs HAVING",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Cuál es la diferencia fundamental entre la cláusula WHERE y la cláusula HAVING?",
    "options": [
      "WHERE filtra grupos y HAVING filtra filas individuales.",
      "No existe diferencia; son sinónimos permutables.",
      "WHERE se aplica sobre filas individuales antes de agrupar; HAVING filtra los grupos resultantes creados por GROUP BY aplicando condiciones sobre funciones de agregación.",
      "WHERE se usa solo en sentencias UPDATE y HAVING solo en SELECT."
    ],
    "correctAnswer": 2,
    "explanation": "WHERE filtra tuplas antes del paso de agregación; HAVING se ejecuta obligatoriamente después de GROUP BY para evaluar agregados (ej. HAVING SUM(ventas) > 100).",
    "citation": "UTN BA - Módulo 4: WHERE vs HAVING - El Momento del Filtro.",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "hint": "WHERE filtra registros individuales antes del agrupamiento; HAVING filtra los grupos ya agrupados.",
    "classNum": 3
  },
  {
    "id": 85,
    "topic": "Módulo 4: Filtrado sobre Agregaciones",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "Si se desea obtener los departamentos cuyo salario total sumado supere los $100.000, ¿dónde se ubica la condición SUM(salario) > 100000?",
    "options": [
      "En la cláusula HAVING.",
      "En la cláusula WHERE.",
      "En la cláusula GROUP BY.",
      "En la cláusula ON del JOIN."
    ],
    "correctAnswer": 0,
    "explanation": "Dado que implica una función de agregación (SUM), la condición no puede colocarse en el WHERE y debe especificarse en el HAVING.",
    "citation": "UTN BA - Módulo 4: Filtrado de Grupos con HAVING.",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "hint": "Cualquier condición que involucre funciones como SUM(), COUNT() o AVG() debe ir en HAVING.",
    "classNum": 3
  },
  {
    "id": 86,
    "topic": "Módulo 4: Error de Agregación en WHERE",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "¿Por qué la consulta SELECT * FROM Empleados WHERE AVG(salario) > 50000; devuelve un error de sintaxis?",
    "options": [
      "Porque falta indicar el nombre de la tabla en el SELECT.",
      "Porque no se pueden utilizar funciones de agregación dentro de la cláusula WHERE, ya que esta se evalúa antes de agrupar los datos.",
      "Porque los empleados no tienen salarios.",
      "Porque la palabra AVG debe escribirse en minúsculas."
    ],
    "correctAnswer": 1,
    "explanation": "Las funciones de agregación sintetizan grupos de filas y por ende no se pueden evaluar en la fase de filtrado de filas individuales (WHERE).",
    "citation": "UTN BA - Módulo 4: Restricciones de Agregación en la Cláusula WHERE.",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "hint": "WHERE se ejecuta fila a fila antes de calcular el promedio, por lo que no acepta AVG().",
    "classNum": 3
  },
  {
    "id": 87,
    "topic": "Módulo 4: Concepto de Subconsulta",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué es una Subconsulta (Subquery) en SQL?",
    "options": [
      "Una consulta SELECT anidada dentro de otra instrucción SQL principal (SELECT, INSERT, UPDATE, DELETE).",
      "Una clave foránea sin nombre.",
      "Un script secundario que se ejecuta en el sistema operativo.",
      "Una vista guardada en la base de datos."
    ],
    "correctAnswer": 0,
    "explanation": "Una subconsulta o subquery es una expresión de selección incluida dentro de los paréntesis de una consulta externa para proveer un filtro o conjunto dinámico.",
    "citation": "UTN BA - Módulo 4: La Lógica de Anidación mediante Subconsultas.",
    "slideImage": "assets/clases_infographics/clase4_p11.png",
    "hint": "Es una sentencia SELECT anidada entre paréntesis dentro de una consulta externa.",
    "classNum": 4
  },
  {
    "id": 88,
    "topic": "Módulo 4: Subconsulta Escalar",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué es una subconsulta escalar?",
    "options": [
      "Una subconsulta que no contiene la cláusula WHERE.",
      "Una subconsulta ejecutada en paralelo por la placa de video.",
      "Una subconsulta que retorna un número ilimitado de filas y columnas.",
      "Una subconsulta que devuelve exactamente un único valor (una sola fila y una sola columna)."
    ],
    "correctAnswer": 3,
    "explanation": "Una subconsulta escalar produce un único dato escalar y puede ser empleada en operadores de comparación relacional simples (=, <, >).",
    "citation": "UTN BA - Módulo 4: Subconsultas Escalares (1 Fila x 1 Columna).",
    "slideImage": "assets/clases_infographics/clase4_p12.png",
    "hint": "Devuelve una matriz de 1x1 (un único dato atómico).",
    "classNum": 4
  },
  {
    "id": 89,
    "topic": "Módulo 4: Subconsultas de Lista y Operador IN",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "Si una subconsulta devuelve una columna con múltiples filas, ¿qué operador debe usar la consulta externa en el WHERE para evaluar el resultado?",
    "options": [
      "El operador BETWEEN.",
      "El operador de igualdad simple =.",
      "El operador LIKE.",
      "El operador IN (o ANY / ALL)."
    ],
    "correctAnswer": 3,
    "explanation": "Al comparar un campo contra un conjunto multievaluado provisto por una subconsulta, se requiere el operador de conjunto IN.",
    "citation": "UTN BA - Módulo 4: Subconsultas de Lista con Operador IN.",
    "slideImage": "assets/clases_infographics/clase4_p12.png",
    "hint": "Para comparar un valor contra una lista de filas se utiliza el operador de pertenencia IN.",
    "classNum": 4
  },
  {
    "id": 90,
    "topic": "Módulo 4: Ubicación de Subconsultas",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿En qué cláusulas de una consulta SELECT es válido incluir una subconsulta?",
    "options": [
      "En ninguna; SQL no soporta anidación.",
      "Exclusivamente en la cláusula WHERE.",
      "En la lista de proyección de SELECT, en la cláusula FROM (como tabla derivada), en WHERE y en HAVING.",
      "Únicamente en la cláusula ORDER BY."
    ],
    "correctAnswer": 2,
    "explanation": "Las subconsultas ofrecen alta flexibilidad en SQL y pueden incorporarse en el SELECT, FROM, WHERE y HAVING según la necesidad del cálculo.",
    "citation": "UTN BA - Módulo 4: Flexibilidad y Ubicación de Subconsultas.",
    "slideImage": "assets/clases_infographics/clase4_p11.png",
    "hint": "Pueden colocarse en el SELECT (escalares), en el FROM (tablas derivadas), en WHERE y en HAVING.",
    "classNum": 4
  },
  {
    "id": 91,
    "topic": "Módulo 4: Cláusula ON en INNER JOIN",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "Al combinar la tabla Empleados (e) y Departamentos (d) mediante INNER JOIN, ¿qué expresión completa adecuadamente la cláusula ON?",
    "options": [
      "ON e.salario GROUP BY d.id_departamento",
      "ON DISTINCT e.id_empleado",
      "ON e.nombre = d.ubicacion",
      "ON e.id_departamento = d.id_departamento"
    ],
    "correctAnswer": 3,
    "explanation": "La condición de acoplamiento estándar equipara la clave foránea del lado N (e.id_departamento) con la clave primaria del lado 1 (d.id_departamento).",
    "citation": "UTN BA - Módulo 4: Condición de Igualdad ON en JOINs.",
    "slideImage": "assets/clases_infographics/clase3_p10.png",
    "hint": "Empareja la Foreign Key de Empleados con la Primary Key de Departamentos: `e.id_departamento = d.id_departamento`.",
    "classNum": 3
  },
  {
    "id": 92,
    "topic": "Módulo 4: Tratamiento de NULLs en Agregaciones",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Cómo reaccionan las funciones de agregación como SUM, AVG, MAX y MIN ante los valores NULL en la columna evaluada?",
    "options": [
      "Ignoran automáticamente las celdas con valores NULL en sus cálculos.",
      "Reemplazan toda la tabla por valores nulos.",
      "Tratan el valor NULL como si fuera un número cero (0).",
      "Devuelven un error fatal y cancelan la consulta."
    ],
    "correctAnswer": 0,
    "explanation": "Salvo COUNT(*), las funciones de agregación excluyen los valores NULL de la muestra antes de efectuar la suma, promedio o búsqueda de extremos.",
    "citation": "UTN BA - Módulo 4: Manejo de Nulos en Funciones de Agregación.",
    "slideImage": "assets/clases_infographics/clase2_p09.png",
    "hint": "Las funciones de agregación descartan silenciosamente los valores NULL de sus cálculos.",
    "classNum": 2
  },
  {
    "id": 93,
    "topic": "Módulo 4: Error por Omitir GROUP BY",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "Si ejecuta SELECT id_departamento, COUNT(*) FROM Empleados; sin colocar la cláusula GROUP BY, ¿qué ocurre?",
    "options": [
      "Se genera un error de sintaxis porque se mezcla una columna individual con una función de agregación sin especificar el criterio de agrupamiento.",
      "Se borra la tabla Empleados.",
      "La consulta devuelve una sola fila con valores aleatorios.",
      "Devuelve el total de filas para cada departamento correctamente."
    ],
    "correctAnswer": 0,
    "explanation": "Toda columna no agregada en la lista del SELECT debe formar parte obligatoria de la cláusula GROUP BY para evitar ambigüedades.",
    "citation": "UTN BA - Módulo 4: Ambigüedad y Reglas del GROUP BY.",
    "slideImage": "assets/clases_infographics/clase2_p14.png",
    "hint": "No puedes pedir una columna simple junto a un COUNT(*) sin indicar el GROUP BY correspondiente.",
    "classNum": 3
  },
  {
    "id": 94,
    "topic": "Módulo 4: Utilidad de los Alias de Tabla",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "¿Qué utilidad aportan los Alias de Tabla (ej. FROM Empleados e INNER JOIN Departamentos d)?",
    "options": [
      "Renombrar físicamente la tabla en el disco rígido.",
      "Duplicar los datos en memoria RAM.",
      "Simplificar la lectura del código, acortar referencias y desambiguar columnas con nombres iguales en diferentes tablas.",
      "Ocultar la estructura de la tabla a la base de datos."
    ],
    "correctAnswer": 2,
    "explanation": "Los alias proveen identificadores sintácticos breves durante la ejecución de la consulta para referenciar campos unívocamente (ej. e.nombre, d.nombre).",
    "citation": "UTN BA - Módulo 4: Desambiguación con Alias de Tabla.",
    "slideImage": "assets/clases_infographics/clase3_p10.png",
    "hint": "Permiten escribir consultas más compactas y diferenciar columnas con nombres idénticos (como `e.id` y `d.id`).",
    "classNum": 3
  },
  {
    "id": 95,
    "topic": "Módulo 4: Columnas Válidas en SELECT con GROUP BY",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "En una consulta con GROUP BY id_departamento, ¿qué campos pueden ser incluidos válidamente en la cláusula SELECT?",
    "options": [
      "Exclusivamente campos de tipo fecha.",
      "Cualquier columna de la tabla sin restricción alguna.",
      "Ningún campo; solo la función COUNT(*).",
      "Únicamente la columna id_departamento (declarada en el GROUP BY) y/o funciones de agregación sobre otros campos."
    ],
    "correctAnswer": 3,
    "explanation": "Para mantener la consistencia del grupo, el SELECT solo puede proyectar los campos por los cuales se agrupó o agregaciones sobre el resto de las columnas.",
    "citation": "UTN BA - Módulo 4: Proyecciones Permitidas tras Agrupamiento.",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "hint": "Solo las columnas agrupadas o expresiones envueltas en funciones de agregación (SUM, AVG, etc.) son válidas.",
    "classNum": 3
  },
  {
    "id": 96,
    "topic": "Módulo 5: Concepto y Finalidad de Índices",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué es un Índice en una base de datos relacional y cuál es su finalidad principal?",
    "options": [
      "Una restricción que impide guardar valores repetidos.",
      "Una copia de seguridad completa de la base de datos.",
      "Un archivo ejecutable del motor de base de datos.",
      "Una estructura de datos auxiliar ordenada que acelera sustancialmente la recuperación de filas durante las operaciones de lectura (SELECT)."
    ],
    "correctAnswer": 3,
    "explanation": "Un índice es una estructura de acceso rápido (como un árbol B) que permite al motor localizar registros sin realizar un escaneo completo de la tabla.",
    "citation": "UTN BA - Módulo 5: Optimizando el Acceso - Índices de Base de Datos.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "Es como el índice temático de un libro: permite ir directo a la página sin leer todo desde el inicio.",
    "classNum": 5
  },
  {
    "id": 97,
    "topic": "Módulo 5: Impacto DML sobre Índices",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Cómo impactan las operaciones DML (INSERT, UPDATE, DELETE) sobre los índices definidos en una tabla?",
    "options": [
      "No tienen ningún impacto; los índices son estáticos y no se modifican.",
      "Aceleran drásticamente las inserciones masivas de datos.",
      "Cada modificación de datos exige que el motor actualice no solo la tabla sino también todos los índices asociados, pudiendo ralentizar las escrituras.",
      "Borran automáticamente los índices B-Tree."
    ],
    "correctAnswer": 2,
    "explanation": "Evaluado en el parcial (Pregunta 2): cada modificación física DML debe reflejarse en los índices de la tabla, generando un costo computacional extra.",
    "citation": "UTN BA - Módulo 5: Overhead de Actualización en Escrituras DML.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "Cada INSERT o DELETE obliga al motor a reordenar y balancear las ramas de los índices en disco.",
    "classNum": 4
  },
  {
    "id": 98,
    "topic": "Módulo 5: Exceso de Índices (Overhead)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Por qué definir un exceso de índices sobre una tabla con alta tasa de escrituras puede ser perjudicial?",
    "options": [
      "Porque se agotan los números enteros disponibles para las claves primarias.",
      "Porque imposibilita hacer consultas INNER JOIN.",
      "Porque la sobrecarga (overhead) de actualizar múltiples índices en cada INSERT o UPDATE degrada seriamente el rendimiento del sistema.",
      "Porque los índices B-Tree consumen el 100% del procesador."
    ],
    "correctAnswer": 2,
    "explanation": "Existe un compromiso entre acelerar lecturas y penalizar escrituras. Mantener demasiados índices en tablas con DML intenso ralentiza el sistema.",
    "citation": "UTN BA - Módulo 5: Compromiso Lectura vs Escritura en Indexación.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "Muchos índices aceleran los SELECTs pero ralentizan en gran medida cada inserción y modificación.",
    "classNum": 5
  },
  {
    "id": 99,
    "topic": "Módulo 5: Índice por Defecto (B-Tree)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Cuál es el tipo de índice que los motores relacionales (como PostgreSQL) crean por defecto al ejecutar CREATE INDEX?",
    "options": [
      "Índice GIN.",
      "Índice GiST.",
      "Índice Hash.",
      "Índice B-Tree (Árbol B)."
    ],
    "correctAnswer": 3,
    "explanation": "B-Tree es el algoritmo de indexación universal por defecto debido a su excelente desempeño balanceado para búsquedas de igualdad y rango.",
    "citation": "UTN BA - Módulo 5: Árboles B-Tree como Estándar por Defecto.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "B-Tree (Balanced Tree) es la estructura estándar creada por omisión en SQL.",
    "classNum": 5
  },
  {
    "id": 100,
    "topic": "Módulo 5: Selectividad y Rendimiento B-Tree",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿En qué tipo de columnas ofrece su máximo rendimiento un índice de tipo B-Tree?",
    "options": [
      "En columnas donde solo se guardan valores NULL.",
      "En campos de imágenes en formato BLOB.",
      "En columnas con millones de valores idénticos repetidos.",
      "En columnas con valores únicos o de muy alta cardinalidad (pocos duplicados)."
    ],
    "correctAnswer": 3,
    "explanation": "B-Tree destaca cuando la selectividad es alta (valores únicos como DNI, ID), permitiendo descartar ramas enteras del árbol en O(log N).",
    "citation": "UTN BA - Módulo 5: Selectividad y Eficiencia de Búsqueda en B-Tree.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "Rinde al máximo en columnas con alta cardinalidad y valores únicos (IDs, documentos, emails).",
    "classNum": 5
  },
  {
    "id": 101,
    "topic": "Módulo 5: Índice GiST",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Cuál es la aplicación principal de un índice de tipo GiST (Generalized Search Tree)?",
    "options": [
      "Es adecuado para datos complejos como arreglos (arrays), clave/valor (hstore) y datos geométricos/espaciales, permitiendo además índices multicolumna.",
      "Desactivar las transacciones OLTP.",
      "Indexar exclusivamente texto sin formato.",
      "Sustituir a las claves primarias numéricas."
    ],
    "correctAnswer": 0,
    "explanation": "Evaluado en el parcial (Pregunta 20): GiST es un marco de indexación extensible ideal para estructuras de datos complejas no escalares.",
    "citation": "UTN BA - Módulo 5: Índices GiST para Datos Complejos y Geoespaciales.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "GiST es un árbol de búsqueda generalizado para datos espaciales (GIS), geometrías, rangos y arreglos.",
    "classNum": 5
  },
  {
    "id": 102,
    "topic": "Módulo 5: Índice GIN",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿En qué escenarios es altamente recomendable la utilización de un índice de tipo GIN (Generalized Inverted Index)?",
    "options": [
      "En datos que contienen múltiples valores por elemento, como documentos de texto completo (Full-Text Search), vectores y documentos JSON/JSONB.",
      "En columnas numéricas consecutivas con valores únicos.",
      "En tablas que solo reciben operaciones DELETE.",
      "En claves foráneas simples de tipo INT."
    ],
    "correctAnswer": 0,
    "explanation": "GIN es un índice invertido que mapea elementos componentes (palabras, claves JSON) con las filas que los contienen, ideal para búsquedas contenidas.",
    "citation": "UTN BA - Módulo 5: Índices Invertidos GIN para JSONB y Texto Completo.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "GIN es un índice invertido perfecto para buscar palabras en texto completo o claves dentro de JSON/JSONB.",
    "classNum": 5
  },
  {
    "id": 103,
    "topic": "Módulo 5: Índices Multicolumna",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué característica avanzada comparten los métodos de indexación B-Tree, GIN y GiST en motores relacionales modernizables?",
    "options": [
      "Todos soportan la creación de índices multicolumna (abarcando más de un atributo).",
      "Todos borran los datos al reiniciar el servidor.",
      "Ninguno puede utilizarse en claves primarias.",
      "Todos requieren que la tabla sea de solo lectura."
    ],
    "correctAnswer": 0,
    "explanation": "Tanto B-Tree como GIN y GiST permiten definir índices compuestos que abarcan dos o más columnas para optimizar filtros combinados.",
    "citation": "UTN BA - Módulo 5: Creación de Índices Compuestos / Multicolumna.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "Permiten indexar combinaciones de columnas (ej. `CREATE INDEX ON tabla(apellido, nombre)`).",
    "classNum": 5
  },
  {
    "id": 104,
    "topic": "Módulo 5: Escaneo Secuencial (Seq Scan)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿En qué consiste un escaneo secuencial (Sequential Scan) en una tabla de base de datos?",
    "options": [
      "En consultar únicamente la memoria RAM caché.",
      "En ordenar la tabla al azar antes de buscar.",
      "En leer el índice B-Tree desde la raíz hasta las hojas.",
      "En recorrer físicamente la tabla bloque por bloque y fila por fila desde el principio hasta el final para evaluar la condición."
    ],
    "correctAnswer": 3,
    "explanation": "El Sequential Scan examina cada tupla de la tabla en disco; es eficiente en tablas muy pequeñas pero ineficiente en tablas masivas sin índices.",
    "citation": "UTN BA - Módulo 5: Mecánica del Sequential Scan vs Index Scan.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "Recorre cada bloque del disco de principio a fin evaluando la condición fila por fila.",
    "classNum": 5
  },
  {
    "id": 105,
    "topic": "Módulo 5: Beneficio de I/O con Índices",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Por qué las consultas SELECT se benefician drásticamente de un índice bien diseñado?",
    "options": [
      "Porque eliminan la necesidad de usar la cláusula WHERE.",
      "Porque convierten las consultas en sentencias DDL automáticamente.",
      "Porque comprimen el tamaño del archivo ejecutable.",
      "Porque permiten al motor saltar directamente a las páginas de disco donde residen los datos requeridos, reduciendo los accesos de E/S (I/O)."
    ],
    "correctAnswer": 3,
    "explanation": "Los índices reducen el número de lecturas de bloques de disco de millones a unas pocas operaciones de punteros.",
    "citation": "UTN BA - Módulo 5: Reducción de Operaciones I/O mediante Índices.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "En lugar de leer millones de bloques en disco, el motor viaja por el árbol directo al bloque exacto.",
    "classNum": 5
  },
  {
    "id": 106,
    "topic": "Módulo 5 / Parcial: Sistemas OLTP",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "(Parcial) ¿Cuál de las siguientes afirmaciones describe con precisión a los sistemas OLTP?",
    "options": [
      "Se basan exclusivamente en el modelo jerárquico tradicional.",
      "Ejecutan consultas analíticas complejas sobre datos históricos de diez años.",
      "No requieren control de concurrencia ni mecanismos de recuperación.",
      "Gestionan transacciones operativas del día a día, caracterizadas por ser cortas, atómicas, rápidas y frecuentes."
    ],
    "correctAnswer": 3,
    "explanation": "Evaluado en el parcial: las arquitecturas OLTP se centran en el soporte de transacciones comerciales inmediatas con alta tasa de operaciones por segundo.",
    "citation": "UTN BA - Examen Parcial: Arquitecturas OLTP.",
    "slideImage": "assets/clases_infographics/clase1_p11.png",
    "hint": "Transacciones operativas rápidas, frecuentes y atómicas del día a día.",
    "classNum": 1
  },
  {
    "id": 107,
    "topic": "Módulo 5 / Parcial: Ausencia de PK en Modelo Jerárquico",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "(Parcial) ¿Qué consecuencia directa provoca la ausencia de claves primarias o campos unívocos en el modelo jerárquico?",
    "options": [
      "La imposibilidad de almacenar cadenas de caracteres.",
      "La conversión de la base de datos a un modelo relacional.",
      "Dificultades para mantener la integridad referencial y riesgo alto de redundancia e inconsistencias de datos.",
      "Un incremento automático en la velocidad de acceso."
    ],
    "correctAnswer": 2,
    "explanation": "Sin identificadores lógicos unívocos, la coherencia de los punteros depende del código del usuario, generando vulnerabilidad ante anomalías.",
    "citation": "UTN BA - Examen Parcial: Limitaciones del Modelo Jerárquico.",
    "slideImage": "assets/clases_infographics/clase3_p04.png",
    "hint": "Sin claves primarias lógicas, la integridad referencial no se puede controlar automáticamente.",
    "classNum": 3
  },
  {
    "id": 108,
    "topic": "Módulo 5 / Parcial: DROP TABLE Proyectos",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "(Parcial) ¿Cuál es la sintaxis SQL exacta para eliminar de la base de datos la tabla Proyectos?",
    "options": [
      "CLEAR TABLE Proyectos;",
      "DELETE TABLE Proyectos;",
      "REMOVE TABLE Proyectos;",
      "DROP TABLE Proyectos;"
    ],
    "correctAnswer": 3,
    "explanation": "Evaluado en la Pregunta 18 del parcial: DROP TABLE Proyectos; borra de forma definitiva el objeto y sus datos.",
    "citation": "UTN BA - Examen Parcial: Comando DDL DROP TABLE.",
    "slideImage": "assets/clases_infographics/clase5_p11.png",
    "hint": "La instrucción DDL estándar para destruir una tabla es DROP TABLE.",
    "classNum": 5
  },
  {
    "id": 109,
    "topic": "Módulo 5 / Parcial: Modificación DML (UPDATE)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "(Parcial) ¿Qué comando DML debe utilizarse para modificar los datos de una o más columnas en filas existentes?",
    "options": [
      "CHANGE",
      "UPDATE",
      "ALTER",
      "MODIFY"
    ],
    "correctAnswer": 1,
    "explanation": "Evaluado en la Pregunta 1 del parcial: el comando UPDATE de DML es el encargado de modificar valores almacenados en las tablas.",
    "citation": "UTN BA - Examen Parcial: Comando DML UPDATE.",
    "slideImage": "assets/clases_infographics/clase4_p09.png",
    "hint": "El comando DML para modificar datos de registros existentes es UPDATE.",
    "classNum": 4
  },
  {
    "id": 110,
    "topic": "Módulo 5 / Parcial: Secuencia Sintáctica SELECT",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "(Parcial) Indique la secuencia correcta de ubicación de las cláusulas en una sentencia SELECT con agrupamiento:",
    "options": [
      "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY",
      "SELECT -> FROM -> HAVING -> GROUP BY -> WHERE -> ORDER BY",
      "SELECT -> WHERE -> FROM -> GROUP BY -> HAVING -> ORDER BY",
      "SELECT -> FROM -> GROUP BY -> WHERE -> HAVING -> ORDER BY"
    ],
    "correctAnswer": 0,
    "explanation": "La secuencia sintáctica obligatoria en SQL exige ubicar WHERE antes de GROUP BY y HAVING inmediatamente después de GROUP BY.",
    "citation": "UTN BA - Examen Parcial: Estructura Sintáctica del SELECT.",
    "slideImage": "assets/clases_infographics/clase2_p10.png",
    "hint": "La sintaxis estándar es: SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY.",
    "classNum": 5
  },
  {
    "id": 111,
    "topic": "Módulo 5 / Parcial: Equivalencia de BETWEEN",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "(Parcial) ¿Qué consulta es conceptualmente equivalente a SELECT * FROM Productos WHERE precio >= 100 AND precio <= 500;?",
    "options": [
      "SELECT * FROM Productos WHERE precio LIKE '100%500';",
      "SELECT * FROM Productos WHERE precio IN (100, 500);",
      "SELECT * FROM Productos WHERE precio BETWEEN 100 AND 500;",
      "SELECT * FROM Productos WHERE precio = 100 OR precio = 500;"
    ],
    "correctAnswer": 2,
    "explanation": "Evaluado en el parcial: BETWEEN 100 AND 500 abarca exactamente la condición de rango inclusivo '>= 100 AND <= 500'.",
    "citation": "UTN BA - Examen Parcial: Equivalencia de BETWEEN.",
    "slideImage": "assets/clases_infographics/clase2_p07.png",
    "hint": "El operador de rango inclusivo equivalente a `>= 100 AND <= 500` es `BETWEEN 100 AND 500`.",
    "classNum": 2
  },
  {
    "id": 112,
    "topic": "Módulo 5 / Parcial: Ubicación de FK en Relación 1-N",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "(Parcial) En una relación 1-N entre Clientes (1) y Pedidos (N), ¿dónde debe alojarse la clave foránea (FK)?",
    "options": [
      "En ambas tablas simultáneamente.",
      "En una tabla externa llamada Sistema.",
      "En la tabla Pedidos.",
      "En la tabla Clientes."
    ],
    "correctAnswer": 2,
    "explanation": "En una relación 1-N, la clave foránea se ubica siempre en la tabla del lado N (Pedidos), apuntando a la clave primaria de la tabla del lado 1 (Clientes).",
    "citation": "UTN BA - Examen Parcial: Regla de Colocación de Claves Foráneas (1-N).",
    "slideImage": "assets/clases_infographics/clase5_p05.png",
    "hint": "En una relación 1 a N, la FK siempre se aloja en la tabla del lado 'Muchos' (Pedidos).",
    "classNum": 5
  },
  {
    "id": 113,
    "topic": "Módulo 5 / Parcial: Responsabilidad Nivel Conceptual",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "(Parcial) ¿Cuál es la responsabilidad del nivel conceptual en la arquitectura ANSI/SPARC?",
    "options": [
      "Representar la estructura lógica global de toda la base de datos, describiendo qué datos se almacenan y sus relaciones.",
      "Realizar respaldos diarios en cinta magnética.",
      "Configurar las pantallas de las aplicaciones cliente.",
      "Definir la distribución de los bytes en los sectores del disco rígido."
    ],
    "correctAnswer": 0,
    "explanation": "Evaluado en el parcial: el esquema conceptual brinda una vista unificada y lógica de todas las entidades y relaciones sin referenciar el soporte físico.",
    "citation": "UTN BA - Examen Parcial: Nivel Conceptual ANSI/SPARC.",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "hint": "Modela la visión lógica unificada de la empresa (entidades y relaciones) independiente del hardware.",
    "classNum": 5
  },
  {
    "id": 114,
    "topic": "Módulo 5 / Parcial: Inconsistencia y Archivos Planos",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "(Parcial) ¿Qué problema genera la falta de normalización y el uso de archivos planos respecto a los datos?",
    "options": [
      "Imposibilidad de conectar el servidor a Internet.",
      "Aparición de redundancia no controlada, riesgo de inconsistencia de datos y anomalías de actualización.",
      "Falta de espacio en la memoria caché.",
      "Bloqueo automático de las consultas SELECT."
    ],
    "correctAnswer": 1,
    "explanation": "Evaluado en el parcial: la redundancia no controlada es la causa raíz de las inconsistencias cuando la misma información se duplica de forma desorganizada.",
    "citation": "UTN BA - Examen Parcial: Redundancia e Inconsistencia en Archivos Planos.",
    "slideImage": "assets/clases_infographics/clase1_p03.png",
    "hint": "Tener datos duplicados sin control genera inconsistencias cuando se actualiza un archivo y otro no.",
    "classNum": 5
  },
  {
    "id": 115,
    "topic": "Módulo 5 / Parcial: Agrupamiento y HAVING",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "(Parcial) ¿Qué consulta SQL obtiene los id_departamento y la cantidad de empleados solo para aquellos departamentos con más de 5 empleados?",
    "options": [
      "SELECT id_departamento, SUM(empleados) FROM Empleados WHERE id_departamento > 5;",
      "SELECT id_departamento, COUNT(*) FROM Empleados GROUP BY id_departamento HAVING COUNT(*) > 5;",
      "SELECT DISTINCT id_departamento FROM Empleados WHERE 5 < COUNT(*);",
      "SELECT id_departamento, COUNT(*) FROM Empleados WHERE COUNT(*) > 5 GROUP BY id_departamento;"
    ],
    "correctAnswer": 1,
    "explanation": "Evaluado en el parcial: la condición sobre la función de agregación COUNT(*) debe incluirse obligatoriamente en la cláusula HAVING posterior al GROUP BY.",
    "citation": "UTN BA - Examen Parcial: GROUP BY y Cláusula HAVING.",
    "slideImage": "assets/clases_infographics/clase3_p08.png",
    "hint": "Para filtrar después de agrupar por departamento con una condición sobre COUNT(*), se utiliza HAVING.",
    "classNum": 3
  },
  {
    "id": 116,
    "topic": "Clase 04 / 05: Índices y Costo DML",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Cómo impactan las operaciones de manipulación de datos (DML) a los índices de una tabla?",
    "options": [
      "Los índices solo afectan el rendimiento de las operaciones de consulta (SELECT), no de las operaciones DML.",
      "Cada operación de creación, modificación o eliminación de un registro en una tabla impacta los índices definidos sobre ella, pudiendo bajar el rendimiento si hay muchos índices.",
      "Para tablas con un gran volumen de datos y muchas actualizaciones, siempre es recomendable tener la menor cantidad de índices posible.",
      "La presencia de muchos índices en una tabla acelera consistentemente todas las operaciones, incluyendo inserciones y actualizaciones."
    ],
    "correctAnswer": 1,
    "explanation": "Cada operación DML (INSERT, UPDATE, DELETE) obliga al motor a reestructurar o balancear los índices asociados en disco (B-Tree splits y rebalanceos). Todo índice acelera las lecturas (SELECT) pero penaliza la velocidad de escritura (Overhead de Actualización).",
    "citation": "Clase 05 - Optimizando el Acceso: Índices y Overhead de Escritura DML.",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "Piensa en qué ocurre físicamente con las páginas del índice al insertar o borrar una fila: ¿el árbol B-Tree permanece inmóvil o debe dividirse (page split) y reordenarse?",
    "classNum": 4
  },
  {
    "id": 117,
    "topic": "Clase 01: Modelo Orientado a Objetos",
    "unit": "Unidad 2-3",
    "type": "single_choice",
    "question": "El modelo de base de datos Orientado a Objetos es eficiente para...",
    "options": [
      "Mantener una estructura jerárquica rígida para garantizar la integridad de los datos.",
      "Procesar grandes volúmenes de datos transaccionales de forma masiva.",
      "Encontrar y acceder a elementos únicos, resolviendo complejidades de relaciones muchos a muchos (N-M) con colecciones.",
      "Realizar consultas analíticas complejas sobre datos históricos."
    ],
    "correctAnswer": 2,
    "explanation": "El modelo OODBMS maneja punteros directos e identidad de objetos (OID), simplificando y acelerando la navegación de relaciones complejas N-M a través de colecciones sin requerir costosos JOINs relacionales.",
    "citation": "Clase 01 - Adaptación a la Complejidad: Paradigma Orientado a Objetos.",
    "slideImage": "assets/clases_infographics/clase1_p10.png",
    "hint": "Los objetos en memoria usan punteros directos e identidad de objeto (OID) con colecciones anidadas, evitando las tablas intermedias y los costosos JOINs del modelo relacional.",
    "classNum": 1
  },
  {
    "id": 118,
    "topic": "Clase 01 / 05: Arquitectura ANSI/SPARC",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor el nivel conceptual en la arquitectura de base de datos ANSI/SPARC?",
    "options": [
      "Es específico para cada usuario final y muestra solo una porción filtrada de la base de datos.",
      "Es único y representa el modelo lógico de cómo se organizan y relacionan los datos para toda la organización.",
      "Se ocupa de la forma en que los datos están almacenados físicamente en bloques y sectores de hardware.",
      "Define las aplicaciones específicas que utilizan los usuarios finales para interactuar con la base de datos."
    ],
    "correctAnswer": 1,
    "explanation": "El nivel conceptual (o lógico global) es único e independiente del hardware; describe la estructura completa de la BD, entidades, atributos y relaciones para toda la empresa.",
    "citation": "Clase 05 - Arquitectura ANSI/SPARC: Nivel Externo, Conceptual e Interno.",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "hint": "La arquitectura ANSI/SPARC tiene 3 niveles: Externo (vistas de usuario), Conceptual (visión lógica global de la organización) e Interno (almacenamiento físico en bytes y sectores).",
    "classNum": 5
  },
  {
    "id": 119,
    "topic": "Clase 01: Inconsistencia y Redundancia",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "Las inconsistencias en una base de datos surgen principalmente cuando...",
    "options": [
      "El mismo dato está representado en múltiples lugares (redundancia) y sus valores no coinciden tras una actualización.",
      "Los metadatos no describen adecuadamente la estructura de los datos.",
      "No se utilizan lenguajes de definición de datos (DDL).",
      "Las aplicaciones no pueden acceder a los datos compartidos."
    ],
    "correctAnswer": 0,
    "explanation": "La inconsistencia es consecuencia directa de la redundancia no controlada: si un dato se almacena en varios sitios y solo se actualiza en uno, los datos entran en contradicción.",
    "citation": "Clase 01 - El Fin del Caos Estructural: Redundancia e Inconsistencia.",
    "slideImage": "assets/clases_infographics/clase1_p03.png",
    "hint": "Si la dirección de un cliente se copia en 4 tablas distintas y se modifica solo en una, la base de datos entra en contradicción o inconsistencia.",
    "classNum": 1
  },
  {
    "id": 120,
    "topic": "Clase 03 / 05: Modelo Relacional (N-M)",
    "unit": "Unidad 3-4",
    "type": "single_choice",
    "question": "En una relación de muchos a muchos (N-M) resuelta por una tabla intermedia, ¿cuál es el propósito principal de esta tabla de resolución?",
    "options": [
      "Eliminar la necesidad de claves foráneas en la relación N-M.",
      "Proporciona un acceso único a cada instancia individual de una relación compleja mediante claves foráneas compuestas.",
      "Se utiliza para definir relaciones uno a uno que no pueden tener valores nulos.",
      "Agrupar registros similares para simplificar las consultas."
    ],
    "correctAnswer": 1,
    "explanation": "El modelo relacional no permite relaciones N-M directas a nivel de tablas. La tabla asociativa o intermedia descompone la relación N-M en dos relaciones 1-N y garantiza el acceso exacto a cada par de instancias.",
    "citation": "Clase 05 - Desentrañando la Relación Muchos a Muchos (N-M) y Tabla Intermedia.",
    "slideImage": "assets/clases_infographics/clase5_p06.png",
    "hint": "En una relación N-M (como Estudiantes y Materias), la tabla intermedia contiene las dos Claves Foráneas (FKs) que vinculan cada par específico de registros.",
    "classNum": 5
  },
  {
    "id": 121,
    "topic": "Clase 03 / 05: Cardinalidad y Modalidad",
    "unit": "Unidad 3-4",
    "type": "single_choice",
    "question": "Cuando se describe la cardinalidad de una relación, ¿qué implica la condición 'uno sin cero' (cardinalidad mínima 1)?",
    "options": [
      "Indica únicamente que la clave primaria es obligatoria.",
      "El registro debe existir obligatoriamente en la tabla de destino (participación total / obligatoria).",
      "El registro puede existir en la tabla de destino, pero es completamente opcional.",
      "El registro no tiene que existir en la tabla de destino jamás."
    ],
    "correctAnswer": 1,
    "explanation": "La cardinalidad mínima 1 ('uno sin cero' o '1..N / 1..1') impone obligatoriedad: cada instancia de la entidad debe estar forzosamente asociada a al menos una instancia de la otra entidad.",
    "citation": "Clase 05 - Restricciones de Existencia: Cardinalidad Detallada (Uno a Muchos).",
    "slideImage": "assets/clases_infographics/clase5_p07.png",
    "hint": "Cardinalidad mínima 1 significa que no se admite el cero: la participación es obligatoria y el registro vinculado debe existir forzosamente.",
    "classNum": 5
  },
  {
    "id": 122,
    "topic": "Clase 01 / 05: Elementos de una Tabla",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué término describe una propiedad o característica específica que distingue a una entidad y posee un conjunto posible de valores (dominio), como la edad o el código de un empleado?",
    "options": [
      "Dominio o conjunto de valores permitidos.",
      "Campo o atributo.",
      "Registro o tupla.",
      "Tabla o relación."
    ],
    "correctAnswer": 1,
    "explanation": "Un campo o atributo es una unidad elemental con nombre y tipo de dato que caracteriza a una entidad (ej. 'salario', 'nombre'). La tupla es la fila completa y el dominio es el conjunto de valores válidos.",
    "citation": "Clase 05 - Elementos de una Tabla: Entidad, Atributo/Campo, Tupla y Dominio.",
    "slideImage": "assets/clases_infographics/clase5_p03.png",
    "hint": "Una columna en una tabla modela una característica o propiedad individual de una entidad, también conocida como...",
    "classNum": 5
  },
  {
    "id": 123,
    "topic": "Clase 05: Arquitectura ANSI/SPARC",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "Si una organización guarda información de empleados y define que cada empleado tiene un código (6 caracteres), un departamento (4 caracteres) y un salario (5 dígitos decimales), ¿a qué nivel de la arquitectura ANSI/SPARC corresponde esta descripción?",
    "options": [
      "Al nivel conceptual, que modela la estructura lógica de la entidad Empleado y sus atributos.",
      "Al nivel externo, que muestra vistas específicas para usuarios de tesorería o RRHH.",
      "Al nivel interno, que se ocupa de la representación física de los datos como un registro de bytes y offsets.",
      "Al nivel de usuario final, que utiliza aplicaciones gráficas para consultas."
    ],
    "correctAnswer": 0,
    "explanation": "El nivel conceptual define qué datos se almacenan (entidades, tipos, longitudes de campos y restricciones) desde una perspectiva lógica global de la organización.",
    "citation": "Clase 05 - Arquitectura ANSI/SPARC: Niveles Externo, Conceptual e Interno.",
    "slideImage": "assets/clases_infographics/clase5_p02.png",
    "hint": "Define la estructura lógica global (entidades, tipos y restricciones de negocio) sin descender a los bytes en disco ni a las vistas parciales de un usuario particular.",
    "classNum": 5
  },
  {
    "id": 124,
    "topic": "Clase 03 / 05: Relaciones 1-N",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "¿Cuál de las siguientes afirmaciones describe con precisión una relación uno a muchos (1-N)?",
    "options": [
      "Un registro de una tabla puede estar asociado con muchos registros de otra tabla, pero cada registro de la segunda tabla se asocia a lo sumo con uno de la primera.",
      "Un registro de una tabla solo puede estar asociado con un único registro de otra tabla en ambos sentidos.",
      "Muchos registros de una tabla pueden estar asociados con muchos registros de otra tabla de forma directa.",
      "Es una relación muy poco común en bases de datos relacionales."
    ],
    "correctAnswer": 0,
    "explanation": "En 1-N (ej. Un Departamento tiene Muchos Empleados), un departamento posee múltiples empleados, pero cada empleado pertenece a un único departamento mediante una clave foránea.",
    "citation": "Clase 05 - Relaciones Estructurales: Uno a Uno (1-1) y Uno a Muchos (1-N).",
    "slideImage": "assets/clases_infographics/clase5_p05.png",
    "hint": "Un departamento puede albergar a muchos empleados, pero cada empleado pertenece a un único departamento.",
    "classNum": 5
  },
  {
    "id": 125,
    "topic": "Clase 01: Sistemas Transaccionales vs Analíticos",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "Los sistemas de bases de datos Transaccionales (OLTP) se caracterizan principalmente por...",
    "options": [
      "Tener políticas de backup y recuperación menos rigurosas debido a la facilidad de recarga de datos.",
      "Consolidar grandes almacenes de datos tipo Data Warehouse para toma de decisiones directivas (OLAP).",
      "Realizar operaciones atómicas, cortas y rápidas (CRUD), centradas en pequeños cambios a la base de datos para mantener la consistencia en tiempo real.",
      "Depender exclusivamente de consultas analíticas complejas que involucran años de datos históricos para generar reportes."
    ],
    "correctAnswer": 2,
    "explanation": "OLTP (Online Transaction Processing) se orienta a operaciones del día a día (altas, bajas, transferencias) con transacciones ACID rápidas y de bajo volumen por operación.",
    "citation": "Clase 01 - El Dilema Moderno: Operación (OLTP) vs Análisis (OLAP).",
    "slideImage": "assets/clases_infographics/clase1_p11.png",
    "hint": "OLTP se enfoca en transacciones del día a día (compras, reservas, transferencias) rápidas y atómicas con alta concurrencia.",
    "classNum": 1
  },
  {
    "id": 126,
    "topic": "Clase 04 / 05: Índices B-Tree",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué característica define mejor a un índice de tipo B-Tree?",
    "options": [
      "Solo admite datos geográficos y no puede utilizarse sobre cadenas de texto.",
      "Almacena datos en un formato bitmap no balanceado sin orden físico.",
      "Se utiliza únicamente para crear índices basados en funciones hash unidireccionales.",
      "Es el tipo de índice por defecto al usar CREATE INDEX, es balanceado y es óptimo para búsquedas exactas y por rango (=, <, >, BETWEEN)."
    ],
    "correctAnswer": 3,
    "explanation": "Los árboles B-Tree (Balanced Tree) son la estructura estándar y más extendida en DBMS: mantienen los datos ordenados en nodos y hojas balanceadas con complejidad O(log N).",
    "citation": "Clase 05 - Optimizando el Acceso: Índices (B-Tree el estándar por defecto).",
    "slideImage": "assets/clases_infographics/clase5_p13.png",
    "hint": "B-Tree (Balanced Tree) es la estructura por defecto en SQL; mantiene nodos balanceados con costo logarítmico O(log N) para comparaciones y rangos.",
    "classNum": 5
  },
  {
    "id": 127,
    "topic": "Clase 03: Modelo Jerárquico",
    "unit": "Unidad 2",
    "type": "single_choice",
    "question": "En el modelo de base de datos jerárquico, ¿cómo se caracterizan las relaciones padre-hijo?",
    "options": [
      "Permiten que un nodo hijo esté asociado a múltiples nodos padre sin duplicar registros.",
      "Son bidireccionales (N-M) nativamente sin restricciones de jerarquía.",
      "Son estructuras en árbol unidireccionales (1-N), donde cada registro hijo tiene exactamente un único registro padre.",
      "Se gestionan exclusivamente mediante tablas intermedias relacionales."
    ],
    "correctAnswer": 2,
    "explanation": "El modelo jerárquico organiza los datos en forma de árbol invertido: cada hijo solo puede tener un único padre (1-N estricto), lo que dificulta modelar relaciones N-M.",
    "citation": "Clase 03 - Modelo Jerárquico: El Árbol Invertido (Relación 1-N Padre-Hijo).",
    "slideImage": "assets/clases_infographics/clase3_p03.png",
    "hint": "En una estructura de árbol jerárquico, cada elemento hijo tiene un único padre apuntándolo directamente.",
    "classNum": 3
  },
  {
    "id": 128,
    "topic": "Clase 05: Claves y Restricciones (PK vs FK)",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Cuál es la diferencia principal entre una Clave Primaria (PK) y una Clave Foránea (FK)?",
    "options": [
      "La PK permite múltiples valores nulos y la FK no admite ningún valor.",
      "La PK identifica de forma única a cada tupla en una tabla y no admite NULL, mientras que la FK referencia a la PK de otra tabla garantizando la integridad referencial.",
      "La PK se utiliza solo en tablas intermedias y la FK en tablas maestras.",
      "No existe diferencia; son sinónimos en el estándar SQL."
    ],
    "correctAnswer": 1,
    "explanation": "La Primary Key asegura unicidad y no nulidad en la propia tabla, mientras que la Foreign Key establece el vínculo hacia la PK de otra tabla garantizando integridad referencial.",
    "citation": "Clase 05 - Matriz Estructural de Claves: Primary Key (PK) vs Foreign Key (FK).",
    "slideImage": "assets/clases_infographics/clase5_p08.png",
    "hint": "La PK identifica de forma única cada fila en su propia tabla, mientras que la FK apunta a la PK de otra tabla para mantener la integridad referencial.",
    "classNum": 5
  },
  {
    "id": 129,
    "topic": "Clase 04: Subconsultas no Correlacionadas",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "En el contexto de SQL, ¿cuándo se evalúa una subconsulta no correlacionada?",
    "options": [
      "Se ejecuta repetidamente una vez por cada fila analizada en la consulta externa.",
      "Se ejecuta en paralelo en un hilo de background sin bloquear.",
      "Solo puede ejecutarse dentro de un comando DROP TABLE.",
      "Se evalúa una única vez antes de ejecutar la consulta principal, y su resultado se utiliza en el WHERE de la consulta externa."
    ],
    "correctAnswer": 3,
    "explanation": "Una subconsulta no correlacionada es independiente de la consulta exterior: el motor la ejecuta una sola vez al inicio y reemplaza el resultado para filtrar la consulta principal.",
    "citation": "Clase 04 - El Flujo de Ejecución de una Subconsulta en Acción (Paso 1 y Paso 2).",
    "slideImage": "assets/clases_infographics/clase4_p13.png",
    "hint": "Al ser independiente de las filas de la consulta exterior, el motor no necesita reevaluarla: la ejecuta una sola vez al inicio.",
    "classNum": 4
  },
  {
    "id": 130,
    "topic": "Clase 01: Independencia de Datos",
    "unit": "Unidad 1",
    "type": "single_choice",
    "question": "¿Qué significa la 'Independencia Física de Datos' en un DBMS?",
    "options": [
      "Que los usuarios pueden inventar tipos de datos no definidos en el catálogo.",
      "Que las claves primarias se generan de forma aleatoria.",
      "Que la base de datos funciona sin necesidad de conexión eléctrica ni hardware.",
      "La capacidad de modificar el esquema físico (ej. cambiar discos, particiones o índices) sin necesidad de reescribir los programas o consultas de aplicación."
    ],
    "correctAnswer": 3,
    "explanation": "La independencia física permite cambiar detalles de almacenamiento, rutas de acceso y estructuras físicas de archivos sin afectar el esquema conceptual ni las aplicaciones de usuario.",
    "citation": "Clase 01 - El Escudo de la Independencia de Datos (Física vs Lógica).",
    "slideImage": "assets/clases_infographics/clase1_p05.png",
    "hint": "Permite cambiar discos, particiones o crear índices físicos sin tener que modificar el código de los programas que consultan la base de datos.",
    "classNum": 1
  },
  {
    "id": 131,
    "topic": "Clase 05: Acciones Referenciales (ON DELETE CASCADE)",
    "unit": "Unidad 4-5",
    "type": "single_choice",
    "question": "Si una clave foránea (FK) se define con la regla `ON DELETE CASCADE`, ¿qué ocurre cuando se elimina un registro en la tabla padre referenciada?",
    "options": [
      "El motor bloquea la eliminación y lanza un error de violación de integridad referencial.",
      "Los registros dependientes permanecen intactos y su clave foránea se establece en NULL.",
      "El motor elimina automáticamente y en cascada todos los registros hijos relacionados en la tabla dependiente.",
      "Se crea una copia de seguridad automática de la tabla secundaria."
    ],
    "correctAnswer": 2,
    "explanation": "`ON DELETE CASCADE` propaga la eliminación: al borrar el registro padre (ej. un Cliente), se eliminan automáticamente todos los registros hijos asociados (sus Facturas/Pedidos).",
    "citation": "Clase 05 - Integridad Referencial en Acción (PK -> FK, ON DELETE CASCADE).",
    "slideImage": "assets/clases_infographics/clase5_p09.png",
    "hint": "La regla 'CASCADE' propaga la eliminación: al borrar el registro padre (ej. un Cliente), se borran automáticamente todas sus filas hijas (Facturas).",
    "classNum": 4
  },
  {
    "id": 132,
    "topic": "Clase 03 / 05: Formas Normales (1NF, 2NF, 3NF)",
    "unit": "Unidad 5",
    "type": "single_choice",
    "question": "¿Qué condición es indispensable para que una tabla se encuentre en Tercera Forma Normal (3NF)?",
    "options": [
      "Debe prescindir por completo de claves foráneas.",
      "Debe estar en 2NF y ningún atributo no clave debe depender transitivamente de la clave primaria (X -> Y -> Z).",
      "Debe contener únicamente columnas numéricas y ningún valor de texto.",
      "Todos los atributos deben tener valores multivaluados o arreglos anidados."
    ],
    "correctAnswer": 1,
    "explanation": "3NF exige estar en 2NF y eliminar dependencias transitivas: los atributos no clave deben depender directa y exclusivamente de la clave primaria, no a través de otro campo no clave.",
    "citation": "Clase 03 - Las Fracturas del Modelo: Duplicidad y Dependencias en Datos.",
    "slideImage": "assets/clases_infographics/clase3_p04.png",
    "hint": "La Tercera Forma Normal (3NF) exige estar en 2NF y eliminar dependencias transitivas (ningún atributo no clave debe depender de otro atributo no clave).",
    "classNum": 3
  },
  {
    "id": 133,
    "topic": "Clase 04: Subconsultas Escalares",
    "unit": "Unidad 4",
    "type": "single_choice",
    "question": "¿Qué es una subconsulta escalar (Scalar Subquery) en SQL?",
    "options": [
      "Una subconsulta que devuelve una lista unidimensional de valores para usar con IN.",
      "Una consulta recursiva que se ejecuta de forma infinita.",
      "Una subconsulta que devuelve exactamente un único valor atómico (1 fila x 1 columna).",
      "Una subconsulta que siempre devuelve una tabla con múltiples columnas para usar en un JOIN."
    ],
    "correctAnswer": 2,
    "explanation": "Una subconsulta escalar retorna una matriz de 1x1 (un solo valor primitivo, como `(SELECT MAX(precio) FROM Productos)`), permitiendo usar operadores de comparación directos (=, >, <).",
    "citation": "Clase 04 - ¿Qué Tipo de Datos Devuelve una Subconsulta? (1. Un Único Valor Escalar).",
    "slideImage": "assets/clases_infographics/clase4_p12.png",
    "hint": "Un escalar es un valor atómico único (una matriz de 1 fila por 1 columna, como el resultado de MAX(precio)).",
    "classNum": 4
  },
  {
    "id": 134,
    "topic": "Clase 03: Operaciones de Conjunto (Teoría de Conjuntos)",
    "unit": "Unidad 3",
    "type": "single_choice",
    "question": "¿Cuál es la diferencia fundamental entre `UNION` y `UNION ALL` al combinar resultados de dos consultas SQL?",
    "options": [
      "No existe diferencia de rendimiento ni de tratamiento de duplicados.",
      "`UNION ALL` requiere que las consultas tengan distinto número de columnas.",
      "`UNION` solo combina tablas numéricas y `UNION ALL` tablas de texto.",
      "`UNION` elimina las filas duplicadas realizando una operación de ordenamiento/hashing, mientras que `UNION ALL` concatena todos los registros preservando duplicados y siendo mucho más rápida."
    ],
    "correctAnswer": 3,
    "explanation": "`UNION` ejecuta internamente un descarte de duplicados (costoso en CPU/memoria). `UNION ALL` simplemente concatena los conjuntos de resultados sin deduplicar, ofreciendo mayor velocidad.",
    "citation": "Clase 03 - El Salto Relacional: Teoría de Conjuntos (Unión U, Intersección ∩).",
    "slideImage": "assets/clases_infographics/clase3_p07.png",
    "hint": "UNION elimina duplicados ordenando o calculando hashes (más lento); UNION ALL simplemente pega todas las filas incluyendo duplicados (mucho más rápido).",
    "classNum": 3
  }
];

// Presets de ejercicios interactivos para el SQL Lab
const SQL_LAB_PRESETS = [
  {
    "id": "ex_simple_1",
    "title": "1. Consultas Básicas: Empleados y Salarios",
    "description": "Muestra el nombre, apellido y salario de todos los empleados ordenados por salario descendente.",
    "defaultSql": "SELECT nombre, apellido, salario\nFROM Empleados\nORDER BY salario DESC;",
    "hint": "Usa SELECT, FROM Empleados y ORDER BY salario DESC."
  },
  {
    "id": "ex_join_1",
    "title": "2. INNER JOIN: Empleados y su Departamento",
    "description": "Obtén el nombre del empleado y el nombre de su departamento utilizando un INNER JOIN.",
    "defaultSql": "SELECT E.nombre, E.apellido, D.nombre_departamento, E.salario\nFROM Empleados E\nINNER JOIN Departamentos D ON E.id_departamento = D.id_departamento;",
    "hint": "Une las tablas en E.id_departamento = D.id_departamento."
  },
  {
    "id": "ex_group_1",
    "title": "3. GROUP BY y Agregaciones: Promedio por Depto",
    "description": "Calcula el salario promedio y la cantidad de empleados por departamento.",
    "defaultSql": "SELECT D.nombre_departamento, COUNT(E.id_empleado) AS total_empleados, ROUND(AVG(E.salario), 2) AS salario_promedio\nFROM Departamentos D\nLEFT JOIN Empleados E ON D.id_departamento = E.id_departamento\nGROUP BY D.id_departamento, D.nombre_departamento;",
    "hint": "Agrupa por departamento y usa COUNT() y AVG()."
  },
  {
    "id": "ex_having_1",
    "title": "4. HAVING: Departamentos con Salario Promedio Alto",
    "description": "Filtra aquellos departamentos cuyo salario promedio supere los 50,000.",
    "defaultSql": "SELECT D.nombre_departamento, AVG(E.salario) AS prom_salario\nFROM Empleados E\nINNER JOIN Departamentos D ON E.id_departamento = D.id_departamento\nGROUP BY D.nombre_departamento\nHAVING AVG(E.salario) > 50000;",
    "hint": "Recuerda que para filtrar sobre funciones de agregación se usa HAVING."
  },
  {
    "id": "ex_dml_insert",
    "title": "5. DML INSERT: Contratar Nuevo Desarrollador (¡Costo DML!)",
    "description": "Inserta un nuevo empleado en el departamento de Desarrollo (id 4). ¡Observa el rebalanceo de índices!",
    "defaultSql": "INSERT INTO Empleados (id_empleado, nombre, apellido, salario, id_departamento)\nVALUES (107, 'Valeria', 'Ríos', 68000.00, 4);",
    "hint": "Ejecuta el INSERT y observa la animación del árbol B-Tree perdiendo hojas."
  },
  {
    "id": "ex_dml_update",
    "title": "6. DML UPDATE: Aumento Salarial del 15% (¡Costo DML!)",
    "description": "Aumenta un 15% el salario a los empleados de Ventas (id 3).",
    "defaultSql": "UPDATE Empleados\nSET salario = ROUND(salario * 1.15, 2)\nWHERE id_departamento = 3;",
    "hint": "El UPDATE modificará múltiples registros provocando actualización en los nodos B-Tree."
  },
  {
    "id": "ex_dml_delete",
    "title": "7. DML DELETE: Dar de Baja Registro (¡Costo DML!)",
    "description": "Elimina un empleado por su ID.",
    "defaultSql": "DELETE FROM Empleados\nWHERE id_empleado = 101;",
    "hint": "DELETE elimina la tupla y reorganiza las páginas del índice."
  },
  {
    "id": "ex_subquery",
    "title": "8. Subconsultas: Empleados con Salario sobre la Media",
    "description": "Selecciona los empleados cuyo salario sea superior al promedio general de la empresa.",
    "defaultSql": "SELECT nombre, apellido, salario\nFROM Empleados\nWHERE salario > (SELECT AVG(salario) FROM Empleados);",
    "hint": "Subconsulta no correlacionada en la cláusula WHERE."
  },
  {
    "id": "ex_toyota_case",
    "title": "9. Caso Toyota: Modelos, Versiones y Sucursales",
    "description": "Crea el esquema y consulta el stock de versiones por sucursal.",
    "defaultSql": "SELECT S.nombre AS sucursal, S.ciudad, M.nombre AS modelo, V.nombre AS version, V.motor, V.precio, S.stock\nFROM Sucursales S\nINNER JOIN Versiones V ON S.id_version = V.id_version\nINNER JOIN Modelos M ON V.id_modelo = M.id_modelo\nORDER BY S.ciudad, V.precio DESC;",
    "hint": "Relación de tres tablas del caso de estudio de la Unidad 4."
  }
];

window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;
window.SQL_LAB_PRESETS = SQL_LAB_PRESETS;
