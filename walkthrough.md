# Walkthrough: Auditoría y Corrección Integral de Infografías Conceptuales

Se realizó una auditoría profunda sobre las **36 preguntas del Banco Oficial** en [questions-data.js](file:///Users/ornelamarielmansilla/Documents/ProyectosIt/PaginaWebBDD/js/questions-data.js) cruzándolas contra el contenido extraído mediante OCR de las 72 diapositivas de alta resolución en `assets/clases_infographics/`.

---

## 🎯 Correcciones Principales Identificadas

| Pregunta / Tema | Infografía Anterior (Errónea) | Infografía Corregida | Diapositiva Real |
|---|---|---|---|
| **P20 (Índice GIST)** | `clase4_p06.png` *(Flujo de subconsultas)* | `clase5_p13.png` | **Optimizando el Acceso: Índices (B-Tree, GIN, GiST para datos complejos)** |
| **P23 (DDL CREATE TABLE)** | `clase2_p04.png` *(Tipos de datos numéricos/texto)* | `clase5_p11.png` | **Anatomía de la Construcción (DDL): CREATE TABLE (Esquema Inicial)** |
| **P19 (BETWEEN / AND)** | `clase2_p06.png` *(SELECT vs WHERE)* | `clase2_p07.png` | **Refinando la Búsqueda: Operadores WHERE (BETWEEN AND, IN, LIKE)** |
| **P15 (INNER JOIN)** | `clase3_p06.png` *(El salto relacional conceptual)* | `clase3_p10.png` | **Anatomía de los JOINs (I): INNER JOIN con sintaxis y diagrama de intersección** |
| **P30 (ON DELETE CASCADE)** | `clase5_p05.png` *(Relaciones 1-1 y 1-N)* | `clase5_p09.png` | **Integridad Referencial en Acción: PK -> FK y Cláusula ON DELETE CASCADE** |
| **P13 (Campo / Atributo)** | `clase2_p04.png` *(Familias de comandos)* | `clase5_p03.png` | **Elementos de una Tabla: Entidad, Atributo/Campo, Tupla y Dominio** |
| **P25 (SELECT DISTINCT)** | `clase2_p05.png` *(Gramática de consulta)* | `clase3_p12.png` | **DISTINCT: Eliminando el Ruido (SELECT DISTINCT id_departamento)** |
| **P27 (Subconsulta No Correlacionada)** | `clase4_p06.png` *(Ecosistema SQL)* | `clase4_p13.png` | **El Flujo de Ejecución de una Subconsulta en Acción (Paso 1 y Paso 2)** |
| **P33 (Subconsulta Escalar)** | `clase4_p07.png` *(DML activo)* | `clase4_p12.png` | **¿Qué Tipo de Datos Devuelve una Subconsulta? (1. Un Único Valor Escalar)** |
| **P35 (Restricción CHECK)** | `clase5_p06.png` *(Relación N-M)* | `clase5_p12.png` | **Arsenal de Restricciones (Constraints): NOT NULL, UNIQUE, CHECK, DEFAULT** |
| **P36 (UNION vs UNION ALL)** | `clase3_p12.png` *(DISTINCT)* | `clase3_p07.png` | **El Salto Relacional: Teoría de Conjuntos (Unión U, Intersección ∩)** |

---

## 🔍 Matriz Completa de Mapeo (36 Preguntas)

Todas las preguntas del banco ahora poseen coherencia absoluta entre el concepto evaluado, la explicación teórica, la pista del oráculo y la infografía mostrada:

1. **Q01 (Índices & Costo DML)** ➔ `clase5_p13.png` (*Overhead de escritura en índices*)
2. **Q02 (Modelo Orientado a Objetos)** ➔ `clase1_p10.png` (*Paradigma Orientado a Objetos y OID*)
3. **Q03 (Funciones de Agregación)** ➔ `clase2_p09.png` (*COUNT, SUM, AVG, MIN, MAX*)
4. **Q04 (ANSI/SPARC Nivel Conceptual)** ➔ `clase5_p02.png` (*Nivel Externo, Conceptual e Interno*)
5. **Q05 (Inconsistencia y Redundancia)** ➔ `clase1_p03.png` (*Redundancia e Inconsistencia en DBMS*)
6. **Q06 (Relación N-M y Tabla Intermedia)** ➔ `clase5_p06.png` (*Solución Arquitectónica con Tabla Intermedia*)
7. **Q07 (DDL CREATE DATABASE)** ➔ `clase2_p04.png` (*Las 4 Familias SQL: DDL CREATE/ALTER/DROP*)
8. **Q08 (Cláusulas DQL)** ➔ `clase2_p08.png` (*ORDER BY, LIMIT y OFFSET*)
9. **Q09 (HAVING vs WHERE)** ➔ `clase3_p08.png` (*Agrupación y Filtrado Lógico: GROUP BY & HAVING*)
10. **Q10 (Cardinalidad 'Uno sin Cero')** ➔ `clase5_p07.png` (*Restricciones de Existencia: Uno a Muchos*)
11. **Q11 (GROUP BY & COUNT)** ➔ `clase2_p14.png` (*Patrón de Consulta: GROUP BY y Métricas*)
12. **Q12 (DML UPDATE)** ➔ `clase4_p09.png` (*Modificación de Registros con UPDATE*)
13. **Q13 (Campo / Atributo / Dominio)** ➔ `clase5_p03.png` (*Entidad, Atributo/Campo, Tupla y Dominio*)
14. **Q14 (ANSI/SPARC Tipos de Datos)** ➔ `clase5_p02.png` (*Esquema Conceptual Global*)
15. **Q15 (INNER JOIN con Alias)** ➔ `clase3_p10.png` (*INNER JOIN y Cruce de Tablas con ON*)
16. **Q16 (Relación 1-N)** ➔ `clase5_p05.png` (*Relaciones 1-1 y 1-N en Profundidad*)
17. **Q17 (Sistemas OLTP vs OLAP)** ➔ `clase1_p11.png` (*Operación Diaria OLTP vs Análisis OLAP*)
18. **Q18 (DDL DROP TABLE)** ➔ `clase5_p11.png` (*DROP TABLE vs ALTER/CREATE*)
19. **Q19 (Operador BETWEEN AND)** ➔ `clase2_p07.png` (*Operadores WHERE y Rangos BETWEEN*)
20. **Q20 (Índices GiST)** ➔ `clase5_p13.png` (*B-Tree, GIN, GiST para Datos Complejos y GIS*)
21. **Q21 (ORDER BY)** ➔ `clase2_p08.png` (*Mecánicas de Ordenamiento ASC/DESC*)
22. **Q22 (Índices B-Tree)** ➔ `clase5_p13.png` (*Árboles B-Tree estándar balanceados*)
23. **Q23 (DDL CREATE TABLE)** ➔ `clase5_p11.png` (*Anatomía DDL: CREATE TABLE inicial*)
24. **Q24 (Modelo Jerárquico)** ➔ `clase3_p03.png` (*Árbol Invertido 1-N Padre-Hijo*)
25. **Q25 (SELECT DISTINCT)** ➔ `clase3_p12.png` (*Eliminando el Ruido: SELECT DISTINCT*)
26. **Q26 (Claves PK vs FK)** ➔ `clase5_p08.png` (*Matriz Estructural de Claves PK, UK, FK*)
27. **Q27 (Subconsulta No Correlacionada)** ➔ `clase4_p13.png` (*Flujo de Ejecución en 2 Pasos*)
28. **Q28 (Independencia Física)** ➔ `clase1_p05.png` (*Inmunidad frente a cambios de almacenamiento*)
29. **Q29 (Orden Lógico SELECT)** ➔ `clase2_p10.png` (*Pipeline SQL: FROM -> WHERE -> GROUP BY...*)
30. **Q30 (ON DELETE CASCADE)** ➔ `clase5_p09.png` (*Integridad Referencial y Reglas en Cascada*)
31. **Q31 (DELETE vs TRUNCATE vs DROP)** ➔ `clase4_p10.png` (*Borrado específico vs Total*)
32. **Q32 (Formas Normales & 3NF)** ➔ `clase3_p04.png` (*Eliminación de Duplicidad y Dependencias*)
33. **Q33 (Subconsulta Escalar)** ➔ `clase4_p12.png` (*Retorno de Valor Atómico Escalar 1x1*)
34. **Q34 (Componentes del DBMS)** ➔ `clase1_p04.png` (*Query Processor vs Storage Engine*)
35. **Q35 (Restricción CHECK)** ➔ `clase5_p12.png` (*Arsenal de Constraints: CHECK de dominio*)
36. **Q36 (UNION vs UNION ALL)** ➔ `clase3_p07.png` (*Matemática de Conjuntos: Unión e Intersección*)
