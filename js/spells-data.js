// Antigravity BDD: Conjuros SQL - Diccionario Integral de Comandos, Sintaxis y Familias SQL

window.SQL_SPELLS_DATABASE = [
  // =========================================================================
  // 1. DQL (DATA QUERY LANGUAGE) - CONJUROS DE CONSULTA Y PROYECCIÓN
  // =========================================================================
  {
    id: "spell_select_from",
    name: "SELECT ... FROM",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Proyección de Columnas y Origen de Datos",
    description: "Es el conjuro fundamental para recuperar y proyectar datos desde una o más tablas. <code>SELECT</code> define las columnas o expresiones calculadas que se devolverán, mientras que <code>FROM</code> especifica la relación o tabla origen.",
    syntax: "SELECT [DISTINCT] columna1, columna2, ... | *\nFROM nombre_tabla\n[WHERE condicion];",
    example: "SELECT id_empleado, nombre, apellido, salario\nFROM Empleados;",
    exampleLabQuery: "SELECT id_empleado, nombre, apellido, salario, id_departamento\nFROM Empleados;",
    tips: "⚡ Regla de Oro: Evita usar <code>SELECT *</code> en aplicaciones de producción. Especificar las columnas exactas reduce el tráfico de red, optimiza el uso de memoria en el buffer y aprovecha índices de cobertura (Covering Indexes).",
    keywords: ["select", "from", "proyeccion", "consultar", "recuperar", "columnas", "tablas", "dql"]
  },
  {
    id: "spell_where",
    name: "WHERE (Filtros & Operadores)",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Filtrado Condicional de Tuplas a Nivel de Fila",
    description: "Evalúa una condición booleana para cada fila individual antes de cualquier agrupación. Solo aquellas tuplas para las cuales la condición sea verdadera (TRUE) formarán parte del conjunto de resultados.",
    syntax: "SELECT columnas\nFROM nombre_tabla\nWHERE condicion1 AND/OR condicion2\n   OR columna BETWEEN val1 AND val2\n   OR columna IN (val1, val2, ...)\n   OR columna LIKE 'patron%'\n   OR columna IS [NOT] NULL;",
    example: "SELECT nombre, apellido, salario\nFROM Empleados\nWHERE salario >= 50000 AND id_departamento = 4;",
    exampleLabQuery: "SELECT nombre, apellido, salario, id_departamento\nFROM Empleados\nWHERE salario >= 50000 AND id_departamento = 4;",
    tips: "⚠️ Alerta de Invocación: Los valores NULL no pueden compararse con <code>= NULL</code> o <code><> NULL</code>; debe utilizarse obligatoriamente <code>IS NULL</code> o <code>IS NOT NULL</code> debido a la lógica trivaluada de SQL (True, False, Unknown).",
    keywords: ["where", "filtro", "condicion", "operadores", "between", "in", "like", "is null", "and", "or", "not", "dql"]
  },
  {
    id: "spell_order_by",
    name: "ORDER BY (ASC / DESC)",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Ordenamiento del Conjunto de Resultados",
    description: "Ordena las tuplas devueltas de forma ascendente (<code>ASC</code>, por defecto) o descendente (<code>DESC</code>) según una o más columnas. En el modelo relacional puro, las tablas son conjuntos desordenados; el orden solo existe si se especifica esta cláusula.",
    syntax: "SELECT columnas\nFROM nombre_tabla\n[WHERE condicion]\nORDER BY columna1 [ASC | DESC], columna2 [ASC | DESC];",
    example: "SELECT nombre, apellido, salario\nFROM Empleados\nORDER BY salario DESC, apellido ASC;",
    exampleLabQuery: "SELECT nombre, apellido, salario\nFROM Empleados\nORDER BY salario DESC, apellido ASC;",
    tips: "💡 Tip de Sabio: El orden lógico de ejecución de SQL sitúa a <code>ORDER BY</code> casi al final (después de <code>SELECT</code>), por lo que aquí sí es válido referenciar alias de columnas asignados en el SELECT.",
    keywords: ["order by", "asc", "desc", "ordenar", "clasificar", "alfabetico", "ascendente", "descendente", "dql"]
  },
  {
    id: "spell_distinct",
    name: "DISTINCT",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Eliminación de Tuplas Duplicadas",
    description: "Filtra y elimina las filas idénticas redundantes del resultado proyectado, asegurando que cada combinación de valores en las columnas seleccionadas aparezca exactamente una sola vez.",
    syntax: "SELECT DISTINCT columna1, columna2\nFROM nombre_tabla;",
    example: "SELECT DISTINCT id_departamento\nFROM Empleados;",
    exampleLabQuery: "SELECT DISTINCT id_departamento\nFROM Empleados\nORDER BY id_departamento ASC;",
    tips: "⚠️ Costo Computacional: <code>DISTINCT</code> requiere que el motor ordene o aplique una tabla hash a todos los resultados intermedios para identificar duplicados, lo cual incrementa el costo de CPU y memoria temporal.",
    keywords: ["distinct", "duplicados", "unicos", "valores unicos", "sin repetir", "dql"]
  },
  {
    id: "spell_limit_offset",
    name: "LIMIT / OFFSET",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Restricción de Cardinalidad y Paginación",
    description: "Limita la cantidad máxima de filas devueltas por la consulta (<code>LIMIT</code>) y permite omitir una cantidad determinada de registros iniciales (<code>OFFSET</code>), siendo la base para implementar paginación en interfaces.",
    syntax: "SELECT columnas\nFROM nombre_tabla\nORDER BY columna_criterio\nLIMIT cantidad [OFFSET desplazamiento];",
    example: "SELECT nombre, apellido, salario\nFROM Empleados\nORDER BY salario DESC\nLIMIT 3 OFFSET 0; -- Los 3 salarios más altos",
    exampleLabQuery: "SELECT id_empleado, nombre, apellido, salario\nFROM Empleados\nORDER BY salario DESC\nLIMIT 3;",
    tips: "⚡ Regla de Oro: Siempre utiliza <code>LIMIT</code> en conjunto con <code>ORDER BY</code> determinista. Sin un orden explícito, el subconjunto de filas devueltas no es determinista y puede variar entre ejecuciones.",
    keywords: ["limit", "offset", "top", "paginacion", "primeros", "limitar", "cardinalidad", "dql"]
  },
  {
    id: "spell_inner_join",
    name: "INNER JOIN",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Intersección Relacional por Clave de Coincidencia",
    description: "Combina registros de dos tablas basándose en una condición de igualdad relacional (generalmente <code>PK = FK</code>). Solo devuelve aquellas tuplas donde exista coincidencia exacta en ambas relaciones.",
    syntax: "SELECT t1.columna, t2.columna\nFROM Tabla1 t1\nINNER JOIN Tabla2 t2 ON t1.clave_foranea = t2.clave_primaria\n[WHERE condicion];",
    example: "SELECT e.nombre, e.apellido, d.nombre_departamento\nFROM Empleados e\nINNER JOIN Departamentos d ON e.id_departamento = d.id_departamento;",
    exampleLabQuery: "SELECT e.id_empleado, e.nombre, e.apellido, e.salario, d.nombre_departamento\nFROM Empleados e\nINNER JOIN Departamentos d ON e.id_departamento = d.id_departamento\nORDER BY d.nombre_departamento ASC;",
    tips: "💡 Clave de Examen: Si una fila en la tabla de la izquierda no tiene departamento asignado (o su FK es NULL), <code>INNER JOIN</code> la excluirá automáticamente del resultado.",
    keywords: ["inner join", "join", "combinar", "cruce", "interseccion", "on", "relaciones", "clave foranea", "dql"]
  },
  {
    id: "spell_left_join",
    name: "LEFT JOIN (LEFT OUTER JOIN)",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Preservación Total de la Tabla Izquierda",
    description: "Devuelve <em>todas</em> las filas de la tabla izquierda (la indicada en el FROM), y las columnas correspondientes de la tabla derecha si hay coincidencia. Si no hay coincidencia en la tabla derecha, rellena sus campos con <code>NULL</code>.",
    syntax: "SELECT t1.columna, t2.columna\nFROM TablaIzquierda t1\nLEFT JOIN TablaDerecha t2 ON t1.id = t2.id_foraneo;",
    example: "SELECT d.nombre_departamento, e.nombre, e.apellido\nFROM Departamentos d\nLEFT JOIN Empleados e ON d.id_departamento = e.id_departamento;",
    exampleLabQuery: "SELECT d.id_departamento, d.nombre_departamento, COUNT(e.id_empleado) AS cant_empleados\nFROM Departamentos d\nLEFT JOIN Empleados e ON d.id_departamento = e.id_departamento\nGROUP BY d.id_departamento, d.nombre_departamento;",
    tips: "⚡ Técnica Mágica: Para encontrar registros 'huérfanos' o que no tienen relación (ej. Departamentos sin ningún empleado), añade: <code>WHERE e.id_empleado IS NULL</code>.",
    keywords: ["left join", "left outer join", "preservar izquierda", "nulos", "huerfanos", "dql"]
  },
  {
    id: "spell_right_full_join",
    name: "RIGHT JOIN & FULL OUTER JOIN",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Preservación Derecha y Unión Completa",
    description: "<code>RIGHT JOIN</code> preserva todas las filas de la tabla derecha rellenando la izquierda con NULL si no hay match. <code>FULL OUTER JOIN</code> devuelve todas las filas de ambas tablas, uniendo coincidencias y rellenando con NULL donde falte en cualquiera de los dos lados.",
    syntax: "-- RIGHT JOIN\nSELECT t1.col, t2.col FROM T1 t1 RIGHT JOIN T2 t2 ON t1.id = t2.fk;\n\n-- FULL OUTER JOIN\nSELECT t1.col, t2.col FROM T1 t1 FULL JOIN T2 t2 ON t1.id = t2.fk;",
    example: "SELECT e.nombre, d.nombre_departamento\nFROM Empleados e\nFULL OUTER JOIN Departamentos d ON e.id_departamento = d.id_departamento;",
    exampleLabQuery: "-- Emulación de FULL JOIN en SQLite vía UNION de LEFT JOINs\nSELECT e.nombre, d.nombre_departamento\nFROM Empleados e\nLEFT JOIN Departamentos d ON e.id_departamento = d.id_departamento\nUNION\nSELECT e.nombre, d.nombre_departamento\nFROM Departamentos d\nLEFT JOIN Empleados e ON d.id_departamento = e.id_departamento;",
    tips: "💡 Nota de Compatibilidad: Motores ligeros como SQLite no implementan <code>FULL OUTER JOIN</code> ni <code>RIGHT JOIN</code> de forma nativa directa; en su lugar se invierte el orden a <code>LEFT JOIN</code> o se combinan con <code>UNION</code>.",
    keywords: ["right join", "full join", "full outer join", "outer join", "derecha", "union completa", "dql"]
  },
  {
    id: "spell_group_by",
    name: "GROUP BY",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Particionamiento y Agrupación de Filas",
    description: "Colapsa múltiples filas que comparten valores idénticos en columnas clave en una única fila de resumen por grupo. Se utiliza conjuntamente con funciones de agregación como <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MAX</code> y <code>MIN</code>.",
    syntax: "SELECT columna_agrupada, FUNCION_AGREGACION(columna_calculo)\nFROM nombre_tabla\n[WHERE condicion_filas]\nGROUP BY columna_agrupada1, columna_agrupada2;",
    example: "SELECT id_departamento, COUNT(*) AS total_empleados, AVG(salario) AS salario_medio\nFROM Empleados\nGROUP BY id_departamento;",
    exampleLabQuery: "SELECT id_departamento, COUNT(*) AS cant_empleados, ROUND(AVG(salario), 2) AS salario_promedio\nFROM Empleados\nGROUP BY id_departamento\nORDER BY id_departamento ASC;",
    tips: "⚠️ Error Clásico de Parcial: Toda columna que aparezca en el <code>SELECT</code> que NO esté envuelta en una función de agregación DEBE figurar obligatoriamente en la cláusula <code>GROUP BY</code>.",
    keywords: ["group by", "agrupacion", "grupos", "colapsar", "particionar", "resumen", "dql"]
  },
  {
    id: "spell_having",
    name: "HAVING",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Filtrado Condicional Sobre Grupos Agregados",
    description: "Establece condiciones de filtrado sobre los <em>grupos resultantes</em> generados por <code>GROUP BY</code>. A diferencia de <code>WHERE</code>, <code>HAVING</code> opera después de la agregación y puede evaluar funciones como <code>AVG()</code>, <code>COUNT()</code> o <code>SUM()</code>.",
    syntax: "SELECT columna_agrupada, COUNT(*), AVG(columna_num)\nFROM nombre_tabla\n[WHERE condicion_previa_filas]\nGROUP BY columna_agrupada\nHAVING FUNCION_AGREGACION(columna) operador_comparacion valor;",
    example: "SELECT id_departamento, AVG(salario) AS promedio\nFROM Empleados\nGROUP BY id_departamento\nHAVING AVG(salario) > 50000;",
    exampleLabQuery: "SELECT d.nombre_departamento, COUNT(e.id_empleado) AS cant_empleados, ROUND(AVG(e.salario), 2) AS prom_salario\nFROM Departamentos d\nJOIN Empleados e ON d.id_departamento = e.id_departamento\nGROUP BY d.nombre_departamento\nHAVING AVG(e.salario) > 50000;",
    tips: "⚡ Diferencia Vital: <code>WHERE</code> filtra filas individuales ANTES de agrupar y no acepta funciones de agregación. <code>HAVING</code> filtra grupos completos DESPUÉS de agrupar.",
    keywords: ["having", "filtrar grupos", "condicion agregada", "where vs having", "dql"]
  },
  {
    id: "spell_agg_functions",
    name: "Funciones de Agregación (COUNT, SUM, AVG, MIN, MAX)",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Cálculos Estadísticos y Matemáticos sobre Conjuntos",
    description: "Procesan una colección de valores de una columna en múltiples tuplas y calculan un único resultado consolidado.",
    syntax: "SELECT \n  COUNT(*) AS total_filas,\n  COUNT(columna) AS no_nulos,\n  SUM(columna_num) AS suma_total,\n  AVG(columna_num) AS promedio,\n  MIN(columna_num) AS minimo,\n  MAX(columna_num) AS maximo\nFROM nombre_tabla;",
    example: "SELECT COUNT(*) AS total, AVG(salario) AS media, MAX(salario) AS maximo\nFROM Empleados\nWHERE id_departamento = 4;",
    exampleLabQuery: "SELECT \n  COUNT(*) AS total_empleados,\n  ROUND(AVG(salario), 2) AS sueldo_promedio,\n  MIN(salario) AS sueldo_minimo,\n  MAX(salario) AS sueldo_maximo,\n  SUM(salario) AS masa_salarial_total\nFROM Empleados;",
    tips: "💡 Tratamiento de Nulos: <code>COUNT(*)</code> cuenta todas las filas incluyendo NULLs. <code>COUNT(columna)</code>, <code>AVG()</code>, <code>SUM()</code>, <code>MIN()</code> y <code>MAX()</code> ignoran automáticamente los valores NULL.",
    keywords: ["count", "sum", "avg", "min", "max", "agregacion", "promedio", "sumatoria", "conteo", "estadisticas", "dql"]
  },
  {
    id: "spell_subqueries",
    name: "Subconsultas (IN, EXISTS, Escalares)",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Consultas Anidadas en Cláusulas WHERE, FROM o SELECT",
    description: "Una subconsulta o sub-select es una consulta SQL embebida dentro de otra. Puede ser escalar (devuelve 1 fila y 1 columna), de lista (devuelve 1 columna y varias filas para usar con <code>IN</code>), o correlacionada con <code>EXISTS / NOT EXISTS</code>.",
    syntax: "-- Subconsulta Escalar\nSELECT nombre, salario\nFROM Empleados\nWHERE salario > (SELECT AVG(salario) FROM Empleados);\n\n-- Subconsulta con IN\nSELECT * FROM Departamentos\nWHERE id_departamento IN (SELECT DISTINCT id_departamento FROM Empleados);",
    example: "SELECT nombre, apellido, salario\nFROM Empleados\nWHERE salario > (SELECT AVG(salario) FROM Empleados);",
    exampleLabQuery: "SELECT nombre, apellido, salario\nFROM Empleados\nWHERE salario > (SELECT AVG(salario) FROM Empleados)\nORDER BY salario DESC;",
    tips: "⚡ Rendimiento: Las subconsultas correlacionadas se ejecutan una vez por cada fila de la consulta exterior. Muchas veces pueden reescribirse eficientemente utilizando <code>INNER JOIN</code> o <code>LEFT JOIN</code>.",
    keywords: ["subconsulta", "subquery", "in", "exists", "not exists", "escalar", "anidada", "dql"]
  },
  {
    id: "spell_union",
    name: "UNION / UNION ALL",
    category: "dql",
    categoryLabel: "DQL (Consultas)",
    badgeColor: "cyan",
    subtitle: "Fusión Vertical de Conjuntos de Resultados",
    description: "Combina verticalmente los resultados de dos o más consultas <code>SELECT</code> en un único conjunto. Requiere que ambas consultas proyecten exactamente la misma cantidad de columnas con tipos de datos compatibles.",
    syntax: "SELECT col1, col2 FROM TablaA\nUNION [ALL]\nSELECT col1, col2 FROM TablaB;",
    example: "SELECT nombre, 'Empleado' AS tipo FROM Empleados\nUNION ALL\nSELECT nombre_departamento, 'Sector' AS tipo FROM Departamentos;",
    exampleLabQuery: "SELECT nombre AS etiqueta, 'Empleado' AS tipo FROM Empleados\nUNION ALL\nSELECT nombre_departamento AS etiqueta, 'Departamento' AS tipo FROM Departamentos;",
    tips: "⚡ Diferencia Crucial: <code>UNION</code> aplica automáticamente un paso de eliminación de duplicados (equivalente a DISTINCT implícito). <code>UNION ALL</code> conserva todos los registros y es significativamente más rápido.",
    keywords: ["union", "union all", "fusionar", "combinar consultas", "vertical", "dql"]
  },

  // =========================================================================
  // 2. DML (DATA MANIPULATION LANGUAGE) - CONJUROS DE MANIPULACIÓN DE DATOS
  // =========================================================================
  {
    id: "spell_insert_into",
    name: "INSERT INTO",
    category: "dml",
    categoryLabel: "DML (Manipulación)",
    badgeColor: "gold",
    subtitle: "Inserción de Nuevas Tuplas en la Relación",
    description: "Inserta una o más nuevas filas de datos dentro de una tabla existente. Se pueden especificar explícitamente las columnas de destino o basarse en el orden posicional del esquema.",
    syntax: "INSERT INTO nombre_tabla (columna1, columna2, ...)\nVALUES (valor1, valor2, ...),\n       (valor3, valor4, ...);",
    example: "INSERT INTO Empleados (id_empleado, nombre, apellido, salario, id_departamento)\nVALUES (108, 'Martín', 'Fierro', 58000.00, 2);",
    exampleLabQuery: "INSERT INTO Empleados (id_empleado, nombre, apellido, salario, id_departamento)\nVALUES (108, 'Martín', 'Fierro', 58000.00, 2);\n\nSELECT * FROM Empleados WHERE id_empleado = 108;",
    tips: "🌳 Costo en Índices: Cada <code>INSERT</code> no solo añade los bytes en las páginas de datos de la tabla (Heap/Clustered), sino que obliga al motor a actualizar cada uno de los índices secundarios B-Tree asociados.",
    keywords: ["insert into", "insert", "agregar", "crear registro", "nueva fila", "dml"]
  },
  {
    id: "spell_update",
    name: "UPDATE ... SET ... WHERE",
    category: "dml",
    categoryLabel: "DML (Manipulación)",
    badgeColor: "gold",
    subtitle: "Modificación de Valores en Tuplas Existentes",
    description: "Modifica los valores de una o más columnas en las filas que cumplan la condición especificada en la cláusula <code>WHERE</code>.",
    syntax: "UPDATE nombre_tabla\nSET columna1 = nuevo_valor1,\n    columna2 = nuevo_valor2\nWHERE condicion_especifica;",
    example: "UPDATE Empleados\nSET salario = salario * 1.10\nWHERE id_departamento = 4;",
    exampleLabQuery: "UPDATE Empleados\nSET salario = ROUND(salario * 1.10, 2)\nWHERE id_departamento = 4;\n\nSELECT * FROM Empleados WHERE id_departamento = 4;",
    tips: "🚨 PELIGRO MORTAL: Si omites la cláusula <code>WHERE</code> en un <code>UPDATE</code>, se actualizarán TODAS las filas de la tabla sin excepción de manera irreversible (a menos que estés en una transacción abierta).",
    keywords: ["update", "set", "modificar", "actualizar", "editar", "cambiar", "dml"]
  },
  {
    id: "spell_delete",
    name: "DELETE FROM ... WHERE",
    category: "dml",
    categoryLabel: "DML (Manipulación)",
    badgeColor: "gold",
    subtitle: "Eliminación Física Condicional de Tuplas",
    description: "Elimina una o más tuplas de una tabla basándose en una condición. A diferencia de <code>DROP TABLE</code>, la estructura de la tabla y sus índices permanecen intactos.",
    syntax: "DELETE FROM nombre_tabla\nWHERE condicion_especifica;",
    example: "DELETE FROM Empleados\nWHERE id_empleado = 105;",
    exampleLabQuery: "DELETE FROM Empleados\nWHERE id_empleado = 105;\n\nSELECT * FROM Empleados;",
    tips: "⚠️ Clave de Examen: <code>DELETE</code> registra cada fila eliminada en el Transaction Log para permitir <code>ROLLBACK</code>. Si hay claves foráneas referenciando la fila, fallará a menos que esté configurado <code>ON DELETE CASCADE</code>.",
    keywords: ["delete", "delete from", "borrar", "eliminar filas", "remover", "dml"]
  },

  // =========================================================================
  // 3. DDL (DATA DEFINITION LANGUAGE) - CONJUROS DE DEFINICIÓN DE ESQUEMA
  // =========================================================================
  {
    id: "spell_create_table",
    name: "CREATE TABLE",
    category: "ddl",
    categoryLabel: "DDL (Definición)",
    badgeColor: "green",
    subtitle: "Definición y Creación de Nueva Estructura Relacional",
    description: "Crea una nueva tabla en la base de datos definiendo el nombre de las columnas, sus tipos de datos (INT, VARCHAR, DECIMAL, etc.) y las restricciones de integridad (PK, FK, NOT NULL, UNIQUE, CHECK, DEFAULT).",
    syntax: "CREATE TABLE nombre_tabla (\n  columna1 tipo_dato [RESTRICCIONES],\n  columna2 tipo_dato [RESTRICCIONES],\n  CONSTRAINT pk_nombre PRIMARY KEY (columna1),\n  CONSTRAINT fk_nombre FOREIGN KEY (columna2) REFERENCES otra_tabla(id)\n);",
    example: "CREATE TABLE Categorias (\n  id_categoria INT PRIMARY KEY,\n  nombre VARCHAR(50) NOT NULL UNIQUE,\n  activo BOOLEAN DEFAULT 1\n);",
    exampleLabQuery: "CREATE TABLE IF NOT EXISTS Categorias (\n  id_categoria INT PRIMARY KEY,\n  nombre VARCHAR(50) NOT NULL UNIQUE,\n  activo BOOLEAN DEFAULT 1\n);\n\nINSERT INTO Categorias VALUES (1, 'Infraestructura', 1);\nSELECT * FROM Categorias;",
    tips: "💡 Buena Práctica: Siempre declara nombres explícitos para tus restricciones (ej. <code>CONSTRAINT fk_emp_depto FOREIGN KEY...</code>). Facilita enormemente el mantenimiento, debugging y logs de error.",
    keywords: ["create table", "crear tabla", "estructura", "esquema", "columnas", "tipos de datos", "ddl"]
  },
  {
    id: "spell_alter_table",
    name: "ALTER TABLE (ADD, DROP, MODIFY)",
    category: "ddl",
    categoryLabel: "DDL (Definición)",
    badgeColor: "green",
    subtitle: "Modificación Estructural de una Tabla Existente",
    description: "Permite agregar nuevas columnas (<code>ADD</code>), eliminar columnas existentes (<code>DROP COLUMN</code>), cambiar tipos de datos o agregar/quitar restricciones de clave sin necesidad de borrar y recrear la tabla.",
    syntax: "-- Agregar columna\nALTER TABLE nombre_tabla ADD nombre_columna tipo_dato [restricciones];\n\n-- Eliminar columna\nALTER TABLE nombre_tabla DROP COLUMN nombre_columna;\n\n-- Agregar clave foránea\nALTER TABLE nombre_tabla ADD CONSTRAINT fk_nombre FOREIGN KEY (col) REFERENCES otra(id);",
    example: "ALTER TABLE Empleados ADD fecha_ingreso DATE DEFAULT '2026-01-01';",
    exampleLabQuery: "ALTER TABLE Empleados ADD email VARCHAR(100);\n\nSELECT id_empleado, nombre, email FROM Empleados LIMIT 3;",
    tips: "⚡ Impacto en Producción: En tablas con millones de filas, un <code>ALTER TABLE</code> puede requerir bloqueos exclusivos de tabla (Schema Locks) o reescritura de páginas de disco.",
    keywords: ["alter table", "alter", "modificar tabla", "add column", "drop column", "ddl"]
  },
  {
    id: "spell_drop_table",
    name: "DROP TABLE",
    category: "ddl",
    categoryLabel: "DDL (Definición)",
    badgeColor: "green",
    subtitle: "Eliminación Permanente de Tabla y Esquema",
    description: "Destruye completamente la tabla, su esquema de metadatos, todos sus índices asociados y todos los datos contenidos en ella. La operación es irrevocable a nivel DDL.",
    syntax: "DROP TABLE [IF EXISTS] nombre_tabla [CASCADE | RESTRICT];",
    example: "DROP TABLE IF EXISTS Categorias;",
    exampleLabQuery: "CREATE TABLE TempTest (id INT, dato TEXT);\nDROP TABLE TempTest;\n-- La tabla ya no existe en el catálogo",
    tips: "⚠️ Integridad Referencial: Si otra tabla tiene una <code>FOREIGN KEY</code> apuntando a la tabla que deseas borrar, el motor rechazará el <code>DROP TABLE</code> a menos que elimines primero la relación o uses <code>CASCADE</code>.",
    keywords: ["drop table", "drop", "borrar tabla", "destruir tabla", "eliminar esquema", "ddl"]
  },
  {
    id: "spell_truncate_table",
    name: "TRUNCATE TABLE",
    category: "ddl",
    categoryLabel: "DDL (Definición)",
    badgeColor: "green",
    subtitle: "Vaciado Rápido de Datos con Desasignación de Páginas",
    description: "Elimina todas las filas de una tabla de manera ultrarrápida desasignando las páginas de datos en disco y reiniciando contadores de auto-incremento. Opera como comando DDL.",
    syntax: "TRUNCATE TABLE nombre_tabla;",
    example: "TRUNCATE TABLE LogsAuditoria;",
    exampleLabQuery: "-- En SQLite se emula mediante DELETE sin WHERE + VACUUM\nDELETE FROM Asignaciones;\nSELECT COUNT(*) AS total FROM Asignaciones;",
    tips: "⚡ Comparativa de Parcial: A diferencia de <code>DELETE FROM tabla</code> (que borra tupla por tupla y genera logs masivos), <code>TRUNCATE</code> libera directamente las páginas de almacenamiento, pero NO dispara triggers de fila (ROW Triggers).",
    keywords: ["truncate", "truncate table", "vaciar tabla", "delete vs truncate", "ddl"]
  },
  {
    id: "spell_create_index",
    name: "CREATE INDEX & DROP INDEX",
    category: "ddl",
    categoryLabel: "DDL (Definición)",
    badgeColor: "green",
    subtitle: "Estructuras de Aceleración de Búsqueda (B-Tree)",
    description: "Crea un índice secundario sobre una o más columnas para acelerar dramáticamente las consultas con <code>WHERE</code>, <code>JOIN</code> y <code>ORDER BY</code>, evitando escaneos secuenciales completos de tabla (Full Table Scans).",
    syntax: "-- Crear índice secundario\nCREATE [UNIQUE] INDEX idx_nombre ON nombre_tabla (columna1 [ASC|DESC], columna2);\n\n-- Eliminar índice\nDROP INDEX idx_nombre;",
    example: "CREATE INDEX idx_emp_salario ON Empleados (salario DESC);",
    exampleLabQuery: "CREATE INDEX IF NOT EXISTS idx_emp_salario ON Empleados (salario);\n\nEXPLAIN QUERY PLAN SELECT * FROM Empleados WHERE salario > 60000;",
    tips: "🌳 Compromiso Lectura vs Escritura: Los índices aceleran el DQL (lecturas), pero penalizan el DML (INSERT, UPDATE, DELETE) porque cada modificación exige rebalancear el árbol B-Tree.",
    keywords: ["create index", "drop index", "indice", "indices", "b-tree", "btree", "arbol", "performance", "optimizacion", "ddl"]
  },
  {
    id: "spell_create_view",
    name: "CREATE VIEW & DROP VIEW",
    category: "ddl",
    categoryLabel: "DDL (Definición)",
    badgeColor: "green",
    subtitle: "Definición de Vistas Lógicas / Consultas Almacenadas",
    description: "Una vista es una consulta SQL guardada en el catálogo que se comporta como una 'tabla virtual'. No almacena los datos físicamente (salvo vistas materializadas); ejecuta su consulta subyacente cada vez que se referencia.",
    syntax: "-- Crear vista\nCREATE VIEW vista_nombre AS\nSELECT columnas FROM tablas WHERE condicion;\n\n-- Eliminar vista\nDROP VIEW vista_nombre;",
    example: "CREATE VIEW v_empleados_it AS\nSELECT nombre, apellido, salario\nFROM Empleados\nWHERE id_departamento = 4;",
    exampleLabQuery: "CREATE VIEW IF NOT EXISTS v_resumen_deptos AS\nSELECT d.nombre_departamento, COUNT(e.id_empleado) AS cant_empleados\nFROM Departamentos d\nLEFT JOIN Empleados e ON d.id_departamento = e.id_departamento\nGROUP BY d.nombre_departamento;\n\nSELECT * FROM v_resumen_deptos;",
    tips: "🛡️ Seguridad y Abstracción: Las vistas implementan el Nivel Externo de ANSI/SPARC, permitiendo restringir columnas confidenciales (como salarios o contraseñas) a ciertos usuarios.",
    keywords: ["create view", "drop view", "vista", "tabla virtual", "nivel externo", "ddl"]
  },

  // =========================================================================
  // 4. TCL (TRANSACTION CONTROL LANGUAGE) - CONJUROS DE TRANSACCIONES & ACID
  // =========================================================================
  {
    id: "spell_transactions_acid",
    name: "BEGIN, COMMIT & ROLLBACK",
    category: "tcl",
    categoryLabel: "TCL (Transacciones)",
    badgeColor: "magenta",
    subtitle: "Control Transaccional & Garantía de Propiedades ACID",
    description: "Delimitan unidades atómicas de trabajo. <code>BEGIN TRANSACTION</code> inicia la transacción; <code>COMMIT</code> persiste todos los cambios de forma definitiva e irreversible; <code>ROLLBACK</code> cancela y revierte cualquier modificación si ocurre un error.",
    syntax: "BEGIN TRANSACTION;\n\n  UPDATE Cuentas SET saldo = saldo - 500 WHERE id_cuenta = 1;\n  UPDATE Cuentas SET saldo = saldo + 500 WHERE id_cuenta = 2;\n\n-- Si todo fue exitoso:\nCOMMIT;\n-- Si hubo un fallo:\n-- ROLLBACK;",
    example: "BEGIN TRANSACTION;\n  UPDATE Empleados SET salario = salario + 2000 WHERE id_departamento = 1;\nCOMMIT;",
    exampleLabQuery: "BEGIN TRANSACTION;\n  UPDATE Empleados SET salario = salario + 1000 WHERE id_empleado = 101;\nCOMMIT;\n\nSELECT id_empleado, nombre, salario FROM Empleados WHERE id_empleado = 101;",
    tips: "🛡️ Propiedades ACID: Atomicidad (todo o nada), Consistencia (respeta restricciones), Aislamiento (transacciones concurrentes no interfieren) y Durabilidad (los cambios confirmados sobreviven a caídas del sistema).",
    keywords: ["begin", "commit", "rollback", "transaccion", "acid", "atomicidad", "tcl"]
  },
  {
    id: "spell_savepoint",
    name: "SAVEPOINT & ROLLBACK TO",
    category: "tcl",
    categoryLabel: "TCL (Transacciones)",
    badgeColor: "magenta",
    subtitle: "Puntos de Restauración Intermedios en Transacciones",
    description: "Establece un punto de control intermedio dentro de una transacción activa para poder revertir cambios parciales (<code>ROLLBACK TO SAVEPOINT</code>) sin abortar toda la transacción completa.",
    syntax: "SAVEPOINT nombre_punto;\n-- Operaciones SQL intermedias...\nROLLBACK TO SAVEPOINT nombre_punto;\n-- Continuar con la transacción...\nCOMMIT;",
    example: "BEGIN TRANSACTION;\n  INSERT INTO Empleados VALUES (110, 'Ana', 'Rios', 70000, 1);\n  SAVEPOINT sp1;\n  DELETE FROM Empleados WHERE id_empleado = 102;\n  ROLLBACK TO SAVEPOINT sp1; -- Se cancela el DELETE pero se conserva el INSERT\nCOMMIT;",
    exampleLabQuery: "BEGIN TRANSACTION;\n  INSERT INTO Empleados (id_empleado, nombre, apellido, salario, id_departamento) VALUES (110, 'Ana', 'Rios', 70000, 1);\n  SAVEPOINT sp1;\n  UPDATE Empleados SET salario = 999999 WHERE id_empleado = 110;\n  ROLLBACK TO SAVEPOINT sp1;\nCOMMIT;\n\nSELECT * FROM Empleados WHERE id_empleado = 110;",
    tips: "💡 Uso Típico: Muy utilizado en transacciones complejas por lotes donde un error en una operación secundaria no debe arruinar el trabajo previo ya validado.",
    keywords: ["savepoint", "rollback to", "punto de guardado", "checkpoint", "transaccion parcial", "tcl"]
  },

  // =========================================================================
  // 5. DCL (DATA CONTROL LANGUAGE) - CONJUROS DE PERMISOS Y ROLES
  // =========================================================================
  {
    id: "spell_grant_revoke",
    name: "GRANT & REVOKE",
    category: "dcl",
    categoryLabel: "DCL (Permisos)",
    badgeColor: "purple",
    subtitle: "Administración de Privilegios de Seguridad y Acceso",
    description: "<code>GRANT</code> otorga permisos de ejecución de comandos (SELECT, INSERT, UPDATE, etc.) sobre objetos de la base de datos a usuarios o roles. <code>REVOKE</code> retira los privilegios previamente concedidos.",
    syntax: "-- Otorgar permisos\nGRANT SELECT, INSERT ON Empleados TO usuario_analista;\nGRANT ALL PRIVILEGES ON DATABASE Empresa TO admin_rol;\n\n-- Revocar permisos\nREVOKE INSERT ON Empleados FROM usuario_analista;",
    example: "GRANT SELECT ON Departamentos TO rol_estudiante;\nREVOKE DELETE ON Empleados FROM usuario_junior;",
    exampleLabQuery: "-- Nota: DCL opera a nivel de motor servidor (PostgreSQL/MySQL/Oracle).\n-- Ejemplo conceptual:\n-- GRANT SELECT, UPDATE (salario) ON Empleados TO tesoreria_rol;",
    tips: "🛡️ Principio de Menor Privilegio: Cada usuario debe tener únicamente los permisos estrictamente necesarios para su tarea, minimizando el riesgo ante inyecciones SQL o accesos indebidos.",
    keywords: ["grant", "revoke", "permisos", "privilegios", "seguridad", "roles", "usuarios", "dcl"]
  },

  // =========================================================================
  // 6. RESTRICCIONES & CLAVES (CONSTRAINTS) - CONJUROS DE INTEGRIDAD RELACIONAL
  // =========================================================================
  {
    id: "spell_primary_key",
    name: "PRIMARY KEY (Clave Primaria)",
    category: "constraint",
    categoryLabel: "Restricciones (Constraints)",
    badgeColor: "orange",
    subtitle: "Identificador Unívoco Obligatorio de Tupla",
    description: "Garantiza la unicidad absoluta de cada fila en una tabla. Impone automáticamente dos condiciones: <strong>UNICIDAD</strong> (no admite duplicados) y <strong>NOT NULL</strong> (no admite valores nulos). En la mayoría de los motores genera un índice primario (Clustered Index).",
    syntax: "-- Definición en columna única\nid_empleado INT PRIMARY KEY\n\n-- Definición como Constraint de tabla (Clave Primaria Compuesta)\nCONSTRAINT pk_inscripcion PRIMARY KEY (id_alumno, id_curso)",
    example: "CREATE TABLE Clientes (\n  id_cliente INT,\n  cuit VARCHAR(11) NOT NULL,\n  nombre VARCHAR(100),\n  CONSTRAINT pk_clientes PRIMARY KEY (id_cliente)\n);",
    exampleLabQuery: "SELECT id_empleado, nombre, apellido\nFROM Empleados\nWHERE id_empleado = 101;",
    tips: "🔑 Regla Fundamental: Una tabla solo puede tener UNA única Clave Primaria (aunque dicha clave puede estar compuesta por múltiples columnas).",
    keywords: ["primary key", "pk", "clave primaria", "llave primaria", "identificador", "unicidad", "not null", "constraint"]
  },
  {
    id: "spell_foreign_key",
    name: "FOREIGN KEY & Reglas Referenciales",
    category: "constraint",
    categoryLabel: "Restricciones (Constraints)",
    badgeColor: "orange",
    subtitle: "Integridad Referencial entre Tablas Relacionadas",
    description: "Establece un enlace lógico entre una columna en la tabla hija y la Clave Primaria (o Unique) en la tabla padre. Impide que se inserten valores que no existan en la tabla referenciada.",
    syntax: "CONSTRAINT fk_nombre FOREIGN KEY (columna_local)\n  REFERENCES TablaPadre (columna_padre)\n  ON DELETE [CASCADE | SET NULL | RESTRICT | NO ACTION]\n  ON UPDATE [CASCADE | SET NULL | RESTRICT];",
    example: "ALTER TABLE Empleados\nADD CONSTRAINT fk_emp_depto FOREIGN KEY (id_departamento)\nREFERENCES Departamentos (id_departamento)\nON DELETE RESTRICT\nON UPDATE CASCADE;",
    exampleLabQuery: "-- Consulta que demuestra la relación FK entre Empleados y Departamentos\nSELECT e.nombre, e.apellido, d.nombre_departamento\nFROM Empleados e\nJOIN Departamentos d ON e.id_departamento = d.id_departamento;",
    tips: "⚡ Acciones Referenciales:\n• CASCADE: Si se borra/actualiza el padre, se propaga a los hijos.\n• SET NULL: Coloca NULL en la FK de los hijos.\n• RESTRICT: Bloquea el borrado del padre si existen hijos asociados.",
    keywords: ["foreign key", "fk", "clave foranea", "llave foranea", "integridad referencial", "cascade", "restrict", "set null", "constraint"]
  },
  {
    id: "spell_not_null_unique",
    name: "NOT NULL & UNIQUE",
    category: "constraint",
    categoryLabel: "Restricciones (Constraints)",
    badgeColor: "orange",
    subtitle: "Obligatoriedad y Unicidad Secundaria de Atributos",
    description: "<code>NOT NULL</code> prohíbe que una columna contenga valores nulos. <code>UNIQUE</code> garantiza que todos los valores de una columna sean distintos entre sí, pero a diferencia de la PRIMARY KEY, permite registrar valores NULL (según el estándar SQL).",
    syntax: "CREATE TABLE Usuarios (\n  id_usuario INT PRIMARY KEY,\n  email VARCHAR(100) NOT NULL UNIQUE,\n  telefono VARCHAR(20) UNIQUE\n);",
    example: "CREATE TABLE Productos (\n  codigo_barra VARCHAR(30) UNIQUE NOT NULL,\n  nombre VARCHAR(80) NOT NULL\n);",
    exampleLabQuery: "CREATE TABLE IF NOT EXISTS TestUnique (\n  id INT PRIMARY KEY,\n  dni VARCHAR(10) NOT NULL UNIQUE\n);\nINSERT INTO TestUnique VALUES (1, '40123456');\nSELECT * FROM TestUnique;",
    tips: "💡 Clave de Examen: Una tabla puede tener MÚLTIPLES restricciones <code>UNIQUE</code>, pero solo UNA <code>PRIMARY KEY</code>.",
    keywords: ["not null", "unique", "unicidad", "no nulo", "restriccion", "constraint"]
  },
  {
    id: "spell_check_default",
    name: "CHECK & DEFAULT",
    category: "constraint",
    categoryLabel: "Restricciones (Constraints)",
    badgeColor: "orange",
    subtitle: "Reglas de Validación de Negocio & Valores Predeterminados",
    description: "<code>CHECK</code> evalúa una expresión lógica booleana sobre los valores ingresados (ej. <code>salario > 0</code>, <code>edad >= 18</code>). <code>DEFAULT</code> asigna automáticamente un valor preestablecido cuando en el INSERT no se proporciona dato para esa columna.",
    syntax: "CREATE TABLE Cuentas (\n  id_cuenta INT PRIMARY KEY,\n  saldo DECIMAL(12,2) DEFAULT 0.00,\n  estado VARCHAR(10) DEFAULT 'ACTIVA',\n  CONSTRAINT chk_saldo_positivo CHECK (saldo >= 0.00),\n  CONSTRAINT chk_estado_valido CHECK (estado IN ('ACTIVA', 'SUSPENDIDA', 'CERRADA'))\n);",
    example: "CREATE TABLE EmpleadosAudit (\n  id INT PRIMARY KEY,\n  salario DECIMAL(10,2) CHECK (salario > 0),\n  creado_en DATE DEFAULT CURRENT_DATE\n);",
    exampleLabQuery: "CREATE TABLE IF NOT EXISTS CuentasBancarias (\n  id_cuenta INT PRIMARY KEY,\n  saldo DECIMAL(10,2) DEFAULT 0.00 CHECK (saldo >= 0),\n  tipo VARCHAR(10) DEFAULT 'AHORRO'\n);\nINSERT INTO CuentasBancarias (id_cuenta) VALUES (1);\nSELECT * FROM CuentasBancarias;",
    tips: "🛡️ Integridad en el Motor: Las restricciones <code>CHECK</code> garantizan que datos corruptos o ilegales jamás ingresen a la base de datos, independientemente del lenguaje de programación que envíe la consulta.",
    keywords: ["check", "default", "validacion", "regla de negocio", "valor por defecto", "constraint"]
  }
];
