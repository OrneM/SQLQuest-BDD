# Walkthrough: Integración del Banco Oficial de 100 Preguntas (UTN BA)

Se ha integrado el **Banco Oficial de 100 Preguntas y Respuestas de Práctica de Bases de Datos I (UTN BA - Primer Parcial Integrador)** en [questions-data.js](file:///Users/ornelamarielmansilla/Documents/ProyectosIt/PaginaWebBDD/js/questions-data.js) con infografías de alta resolución, pistas pedagógicas y explicaciones técnicas del solucionario oficial.

---

## 📚 Estructura de los 5 Módulos Integrados

1. **Módulo 1: Introducción a las BD, SGBD y Evolución de Modelos (Preguntas 1 a 20)**
   - Objetivos del SGBD, Storage Manager, Procesador de Consultas.
   - Independencia física y lógica de datos.
   - Sistemas OLTP vs OLAP y transacciones ACID.
   - Evolución de modelos: Archivos planos, Modelo Jerárquico (árbol invertido 1-N), Modelo en Red CODASYL (Sets, Owner/Member) y Modelo Orientado a Objetos (OODBMS / OID).
   - Estandarización ANSI/SPARC.

2. **Módulo 2: Arquitectura ANSI/SPARC y Modelo Relacional (Preguntas 21 a 40)**
   - 3 niveles de abstracción: Externo (vistas), Conceptual (esquema lógico global) e Interno (físico/disco).
   - Lenguaje DDL en la definición de esquemas.
   - Conceptos formales: Relación (Tabla), Tupla (Fila), Atributo (Columna), Dominio.
   - Clave Primaria (PK), Clave Foránea (FK) e Integridad Referencial.
   - Cardinalidad y modalidad ('uno sin cero' 1..N vs 'uno con cero' 0..1).
   - Resolución de relaciones N-M con Tablas Intermedias/Asociativas.
   - Acciones Referenciales: `ON DELETE CASCADE`, `ON DELETE SET NULL`, `ON DELETE RESTRICT`.

3. **Módulo 3: Lenguaje SQL I - DDL, DML y Consultas Simples (Preguntas 41 a 60)**
   - Taxonomía SQL: DDL (`CREATE`, `ALTER`, `DROP`) vs DML (`INSERT`, `UPDATE`, `DELETE`) vs DQL (`SELECT`).
   - Comportamiento de `DELETE` vs `DROP TABLE` vs `TRUNCATE`.
   - Modificación segura con `UPDATE` y la criticidad de la cláusula `WHERE`.
   - Descarte de duplicados con `SELECT DISTINCT`.
   - Operadores de comparación y rango: `BETWEEN ... AND ...` (inclusivo), `IN (...)`, `LIKE` con comodines `%` y `_`.
   - Ordenamiento con `ORDER BY` (`ASC` por defecto vs `DESC`).

4. **Módulo 4: Consultas Avanzadas, JOINs, Agregaciones y Subconsultas (Preguntas 61 a 80)**
   - Pipeline y orden lógico de ejecución del `SELECT`: `FROM/JOIN` ➔ `WHERE` ➔ `GROUP BY` ➔ `HAVING` ➔ `SELECT` ➔ `ORDER BY`.
   - Visibilidad de alias de columnas en el ciclo de vida de la query.
   - Tipos de combinación: `INNER JOIN` (intersección) y `LEFT JOIN` (preservación con `NULL`s).
   - Funciones de agregación: `COUNT(*)`, `COUNT(columna)`, `AVG()`, `SUM()`, `MIN()`, `MAX()` y tratamiento de nulos.
   - Agrupamiento con `GROUP BY` y filtrado posterior sobre funciones de agregación con `HAVING`.
   - Subconsultas escalares (1x1), subconsultas de lista (`IN`) y anidaciones válidas en `SELECT`, `FROM`, `WHERE` y `HAVING`.

5. **Módulo 5: Índices, Rendimiento y Examen Parcial Integrador (Preguntas 81 a 100)**
   - Concepto y finalidad de los índices: reducción de operaciones I/O.
   - Impacto de escrituras DML (Overhead de actualización, splits y rebalanceos).
   - Tipos de índices: `B-Tree` (estándar balanceado), `GiST` (datos complejos, espaciales, GIS), `GIN` (invertido para JSONB, vectores y FTS).
   - Índices multicolumna y costo de `Sequential Scan` vs `Index Scan`.
   - Conjunto de ejercitación directa del examen parcial integrador.

---

## 🎮 Mejoras en la Selección de Examen (10, 20, 30, 50 y 100)

Se amplió el selector de preguntas con 5 configuraciones adaptadas al ritmo del estudiante:
- ⚡ **10 Preguntas**: Modo Sprint (15 min en Warrior).
- ⚔️ **20 Preguntas**: Modo Estándar (30 min en Warrior).
- 🏆 **30 Preguntas**: Modo Completo (45 min en Warrior).
- 🔥 **50 Preguntas**: Modo Gran Reto (75 min en Warrior).
- 👑 **100 Preguntas**: Banco Total UTN (150 min en Warrior / Tiempo Libre en Aprendiz).
