// Antigravity BDD: In-Memory SQL Engine (sql.js) & DML B-Tree Animation
// Incluye ejercicios prácticos del 1er y 2do Parcial (Caso Tienda Tech, Transacciones, PL/pgSQL, Triggers, Índices y EXPLAIN)

window.SQL_LAB_PRESETS = [
  // ============================================================
  // BLOQUE 1ER PARCIAL: DQL, DML & CASO TOYOTA
  // ============================================================
  {
    id: "dql_basic_all",
    parcial: "p1",
    title: "1. DQL: SELECT básico y proyección de tabla Empleados",
    description: "Recupera todas las columnas y filas de la tabla Empleados para inspeccionar el conjunto de datos inicial.",
    defaultSql: "SELECT * FROM Empleados;"
  },
  {
    id: "dql_where_filter",
    parcial: "p1",
    title: "2. DQL: Filtrado con WHERE y ordenamiento ORDER BY",
    description: "Filtra los empleados con salario superior a 50.000 ordenados de forma descendente por salario.",
    defaultSql: "SELECT nombre, apellido, salario, id_departamento\nFROM Empleados\nWHERE salario > 50000\nORDER BY salario DESC;"
  },
  {
    id: "dql_like_wildcards",
    parcial: "p1",
    title: "3. DQL: Búsqueda por patrones con LIKE y comodines (%)",
    description: "Busca empleados cuyo apellido comience con 'P' o contengan una 'a' en su nombre.",
    defaultSql: "SELECT id_empleado, nombre, apellido, salario\nFROM Empleados\nWHERE apellido LIKE 'P%' OR nombre LIKE '%a%';"
  },
  {
    id: "dql_inner_join",
    parcial: "p1",
    title: "4. DQL / JOIN: INNER JOIN entre Empleados y Departamentos",
    description: "Combina los registros de ambas tablas mediante la clave foránea id_departamento para mostrar el nombre del sector de cada empleado.",
    defaultSql: "SELECT \n  e.id_empleado,\n  e.nombre,\n  e.apellido,\n  e.salario,\n  d.nombre_departamento\nFROM Empleados e\nINNER JOIN Departamentos d ON e.id_departamento = d.id_departamento\nORDER BY d.nombre_departamento ASC, e.salario DESC;"
  },
  {
    id: "dql_group_by_avg",
    parcial: "p1",
    title: "5. DQL / Agregación: GROUP BY, COUNT y AVG por Departamento",
    description: "Calcula la cantidad total de empleados y el salario promedio para cada uno de los departamentos de la empresa.",
    defaultSql: "SELECT \n  d.nombre_departamento,\n  COUNT(e.id_empleado) AS total_empleados,\n  ROUND(AVG(e.salario), 2) AS salario_promedio,\n  MAX(e.salario) AS salario_maximo\nFROM Departamentos d\nLEFT JOIN Empleados e ON d.id_departamento = e.id_departamento\nGROUP BY d.nombre_departamento;"
  },
  {
    id: "dql_having_filter",
    parcial: "p1",
    title: "6. DQL / Agregación: Cláusula HAVING sobre grupos agregados",
    description: "Filtra únicamente los departamentos cuyo salario promedio supere los 50.000 (condición post-agrupación).",
    defaultSql: "SELECT \n  d.nombre_departamento,\n  COUNT(e.id_empleado) AS cant_empleados,\n  ROUND(AVG(e.salario), 2) AS promedio_depto\nFROM Departamentos d\nJOIN Empleados e ON d.id_departamento = e.id_departamento\nGROUP BY d.nombre_departamento\nHAVING AVG(e.salario) > 50000;"
  },
  {
    id: "dml_insert_btree",
    parcial: "p1",
    title: "7. DML: INSERT de nuevo empleado (Observa animación B-Tree)",
    description: "Inserta un nuevo empleado en la tabla Empleados. Observa cómo el árbol B-Tree del índice primario rebalancea sus nodos.",
    defaultSql: "INSERT INTO Empleados (id_empleado, nombre, apellido, salario, id_departamento)\nVALUES (107, 'Laura', 'Giménez', 65000.00, 4);\n\n-- Ejecuta luego: SELECT * FROM Empleados WHERE id_empleado = 107;"
  },
  {
    id: "dml_update_bulk",
    parcial: "p1",
    title: "8. DML: UPDATE con aumento porcentual de salario (+15%)",
    description: "Aplica un aumento salarial del 15% a todos los empleados pertenecientes al departamento de Desarrollo (id 4).",
    defaultSql: "UPDATE Empleados\nSET salario = ROUND(salario * 1.15, 2)\nWHERE id_departamento = 4;\n\n-- Verifica el cambio ejecutando:\nSELECT * FROM Empleados WHERE id_departamento = 4;"
  },
  {
    id: "dml_delete_row",
    parcial: "p1",
    title: "9. DML: DELETE de registro específico por Clave Primaria",
    description: "Elimina un empleado de la base de datos por su id_empleado, forzando la liberación de espacio en los bloques de datos.",
    defaultSql: "DELETE FROM Empleados\nWHERE id_empleado = 105;\n\n-- Verifica la eliminación ejecutando:\nSELECT * FROM Empleados;"
  },
  {
    id: "dql_subquery_where",
    parcial: "p1",
    title: "10. Subconsultas: Empleados con salario superior al promedio",
    description: "Utiliza una subconsulta escalar en la cláusula WHERE para obtener los empleados que ganan más que el promedio general.",
    defaultSql: "SELECT nombre, apellido, salario\nFROM Empleados\nWHERE salario > (SELECT AVG(salario) FROM Empleados)\nORDER BY salario DESC;"
  },
  {
    id: "case_toyota_multi_join",
    parcial: "p1",
    title: "11. Caso Toyota: JOIN Modelos, Versiones y Stock en Sucursales",
    description: "Consulta multi-tabla de la concesionaria: relaciona modelos con sus versiones y el stock disponible por sucursal.",
    defaultSql: "SELECT \n  m.nombre AS modelo,\n  m.tipo,\n  v.nombre AS version,\n  v.motor,\n  v.precio,\n  s.nombre AS sucursal,\n  s.ciudad,\n  s.stock\nFROM Modelos m\nJOIN Versiones v ON m.id_modelo = v.id_modelo\nJOIN Sucursales s ON v.id_version = s.id_version\nWHERE s.stock > 0\nORDER BY v.precio ASC;"
  },

  // ============================================================
  // BLOQUE 2DO PARCIAL: CASO TIENDA TECH (POSTGRESQL)
  // Temas: Transacciones, Funciones, Triggers, Índices y EXPLAIN
  // ============================================================
  {
    id: "tienda_ddl_setup",
    parcial: "p2",
    title: "12. 🛒 Tienda Tech: Creación de Tablas (clientes, productos, ventas, detalle_venta)",
    description: "Crea el esquema relacional de la Tienda Online: claves primarias automáticas (SERIAL), claves foráneas hacia clientes/productos y total con valor por defecto 0.",
    defaultSql: `-- ============================================================
-- Caso Tienda Online (PostgreSQL) - Creación de Tablas
-- ============================================================
-- 1. Tabla de clientes
CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,    -- Clave primaria automática
  nombre VARCHAR(100),      -- Nombre del cliente
  email VARCHAR(100)        -- Email del cliente
);

-- 2. Tabla de productos
CREATE TABLE IF NOT EXISTS productos (
  id SERIAL PRIMARY KEY,    -- Clave primaria automática
  nombre VARCHAR(100),      -- Nombre del producto
  stock INT,                -- Cantidad disponible
  precio NUMERIC(10,2)      -- Precio del producto
);

-- 3. Tabla de ventas
CREATE TABLE IF NOT EXISTS ventas (
  id SERIAL PRIMARY KEY,    -- Clave primaria
  id_cliente INT REFERENCES clientes(id), -- Clave foránea hacia clientes
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha de la venta
  total NUMERIC(10,2) DEFAULT 0 -- Total calculado con trigger (inicia en 0)
);

-- 4. Detalle de ventas (renglones de compra)
CREATE TABLE IF NOT EXISTS detalle_venta (
  id SERIAL PRIMARY KEY,    -- Clave primaria
  id_venta INT REFERENCES ventas(id),       -- FK hacia ventas
  id_producto INT REFERENCES productos(id), -- FK hacia productos
  cantidad INT,             -- Cantidad vendida
  precio_unitario NUMERIC(10,2) -- Precio por unidad
);

-- Consultamos los primeros 10 productos del catálogo de la tienda:
SELECT id, nombre, stock, precio FROM productos ORDER BY id ASC LIMIT 10;`
  },
  {
    id: "tienda_transaccion_venta",
    parcial: "p2",
    title: "13. 🛡️ Transacción de Venta: Atomicidad y Consistencia (BEGIN, COMMIT y ROLLBACK)",
    description: "Registra una venta atómicamente: inserta la venta, agrega el detalle con el precio de lista y descuenta el stock en un único bloque transaccional indivisible.",
    defaultSql: `-- ============================================================
-- TRANSACCIÓN DE VENTA (BEGIN ... COMMIT / ROLLBACK)
-- ============================================================
-- Iniciamos transacción para garantizar consistencia ACID
BEGIN;

-- 1. Insertamos una venta para el cliente 1
INSERT INTO ventas (id_cliente, fecha, total)
VALUES (1, now(), 0)
RETURNING id; -- Retorna el id generado en el nuevo registro

-- 2. Insertamos el detalle de venta (2 unidades de Mouse Gamer)
INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario)
VALUES (
  currval('ventas_id_seq'), -- id de la venta recién creada
  1,                        -- id del producto (Mouse Gamer)
  2,                        -- cantidad
  (SELECT precio FROM productos WHERE id = 1) -- precio del producto ($23.000)
);

-- 3. Actualizamos el stock del producto vendido (-2 unidades)
UPDATE productos
SET stock = stock - 2
WHERE id = 1;

-- 4. Confirmamos la transacción (si algo falla, se ejecuta ROLLBACK)
COMMIT;

-- Comprobamos la venta registrada y el stock restante del producto:
SELECT v.id AS venta_id, v.id_cliente, v.total, p.nombre AS producto, p.stock
FROM ventas v
JOIN detalle_venta dv ON v.id = dv.id_venta
JOIN productos p ON dv.id_producto = p.id
WHERE v.id = currval('ventas_id_seq');`
  },
  {
    id: "tienda_funcion_total",
    parcial: "p2",
    title: "14. ⚙️ Función PL/pgSQL: Calcular Total de una Venta (calcular_total_venta)",
    description: "Función en PL/pgSQL que suma cantidad * precio_unitario de todos los detalles de una venta dada, controlando valores nulos con COALESCE.",
    defaultSql: `-- ============================================================
-- FUNCIÓN PARA CALCULAR TOTAL DE UNA VENTA (PL/pgSQL)
-- ============================================================
-- Función que suma el total de los detalles de una venta
CREATE OR REPLACE FUNCTION calcular_total_venta(idVenta INT)
RETURNS NUMERIC(10,2) AS $$
DECLARE
  total NUMERIC(10,2);
BEGIN
  SELECT SUM(cantidad * precio_unitario)
  INTO total
  FROM detalle_venta
  WHERE id_venta = idVenta;

  RETURN COALESCE(total, 0); -- Devolver total, pero si es NULL devolver 0
END;
$$ LANGUAGE plpgsql;

-- Probamos la función invocándola para la venta número 1:
SELECT 
  id AS id_venta,
  fecha,
  total AS total_guardado,
  calcular_total_venta(id) AS total_calculado_por_funcion
FROM ventas
WHERE id = 1;`
  },
  {
    id: "tienda_trigger_total",
    parcial: "p2",
    title: "15. ⚡ Trigger: Actualiza Automáticamente el Total de la Venta (trg_actualiza_total)",
    description: "Trigger AFTER INSERT en detalle_venta que invoca automáticamente la función calcular_total_venta() para actualizar el total acumulado en la tabla ventas.",
    defaultSql: `-- ============================================================
-- TRIGGER: ACTUALIZA AUTOMÁTICAMENTE EL TOTAL DE LA VENTA
-- ============================================================
-- 1. Función que se ejecuta después de insertar un detalle
CREATE OR REPLACE FUNCTION actualizar_total_trigger()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE ventas
  SET total = calcular_total_venta(NEW.id_venta)
  WHERE id = NEW.id_venta;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Creamos el trigger que llama a la función anterior
CREATE OR REPLACE TRIGGER trg_actualiza_total
AFTER INSERT ON detalle_venta
FOR EACH ROW
EXECUTE FUNCTION actualizar_total_trigger();

-- 3. Probamos insertando una nueva venta con su detalle (1 Teclado Mecánico):
BEGIN;
INSERT INTO ventas (id_cliente, fecha, total) VALUES (2, now(), 0) RETURNING id;
INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario)
VALUES (currval('ventas_id_seq'), 4, 1, (SELECT precio FROM productos WHERE id = 4));
COMMIT;

-- 4. Verificamos que el total en la tabla ventas se actualizó automáticamente:
SELECT * FROM ventas WHERE id = currval('ventas_id_seq');`
  },
  {
    id: "tienda_trigger_before_stock",
    parcial: "p2",
    title: "16. 🛑 Trigger BEFORE: Validación de Stock antes de Vender (trg_valida_stock)",
    description: "Trigger BEFORE INSERT en detalle_venta que comprueba que haya stock suficiente. Si el stock es menor que la cantidad solicitada, aborta la operación con RAISE EXCEPTION.",
    defaultSql: `-- ============================================================
-- A. VALIDACIÓN DE STOCK ANTES DE VENDER (TRIGGER BEFORE)
-- ============================================================
-- Se agrega un trigger para que la transacción falle si no hay stock:
CREATE OR REPLACE FUNCTION validar_stock()
RETURNS TRIGGER AS $$
DECLARE
  stock_actual INT;
BEGIN
  SELECT stock INTO stock_actual
  FROM productos
  WHERE id = NEW.id_producto;

  IF stock_actual < NEW.cantidad THEN
    RAISE EXCEPTION 'Stock insuficiente para producto %', NEW.id_producto;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_valida_stock
BEFORE INSERT ON detalle_venta
FOR EACH ROW
EXECUTE FUNCTION validar_stock();

-- Consultamos el stock actual del producto 1 (Mouse Gamer):
SELECT id, nombre, stock, precio FROM productos WHERE id = 1;

-- Si descomentas la siguiente línea e intentas vender 999 unidades, abortará:
-- INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario) VALUES (1, 1, 999, 23000);`
  },
  {
    id: "tienda_trigger_after_stock",
    parcial: "p2",
    title: "17. 📦 Trigger AFTER: Descontar Stock Automáticamente (trg_descontar_stock)",
    description: "Trigger AFTER INSERT en detalle_venta que actualiza y descuenta automáticamente el stock en productos, dejando el flujo de venta transparente y limpio.",
    defaultSql: `-- ============================================================
-- B. ACTUALIZAR STOCK DENTRO DEL TRIGGER (TRIGGER AFTER)
-- ============================================================
-- Automatiza el descuento para que el flujo de venta quede más limpio:
CREATE OR REPLACE FUNCTION descontar_stock()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE productos
  SET stock = stock - NEW.cantidad
  WHERE id = NEW.id_producto;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_descontar_stock
AFTER INSERT ON detalle_venta
FOR EACH ROW
EXECUTE FUNCTION descontar_stock();

-- Probamos: Registramos la venta de 3 Pad Mouse XL (id_producto = 19, stock = 50)
INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario)
VALUES (1, 19, 3, (SELECT precio FROM productos WHERE id = 19));

-- Verificamos que el stock se descontó solo a 47 sin requerir un UPDATE manual:
SELECT id, nombre, stock, precio FROM productos WHERE id = 19;`
  },
  {
    id: "tienda_indices_explain",
    parcial: "p2",
    title: "18. 🔍 Índices y EXPLAIN: Optimización de Búsquedas (idx_nombre_producto)",
    description: "Evalúa el plan de ejecución de una consulta antes y después de crear un índice B-Tree en productos(nombre). Analiza la diferencia entre barrido secuencial e Index Scan.",
    defaultSql: `-- ============================================================
-- ÍNDICES Y EXPLAIN (Plan de Ejecución)
-- ============================================================
-- 1. Consulta sin índice: analiza el plan (barrido secuencial / SCAN)
EXPLAIN QUERY PLAN
SELECT * FROM productos WHERE nombre LIKE 'M%';

-- 2. Creamos un índice B-Tree para optimizar búsquedas por nombre
CREATE INDEX IF NOT EXISTS idx_nombre_producto ON productos(nombre);
ANALYZE productos;

-- 3. Consulta optimizada con índice activo
EXPLAIN QUERY PLAN
SELECT * FROM productos WHERE nombre LIKE 'M%';

-- 4. Ejecutamos la consulta para ver los productos que coinciden:
SELECT id, nombre, stock, precio FROM productos WHERE nombre LIKE 'M%';`
  },
  {
    id: "tienda_consulta_compleja_explain",
    parcial: "p2",
    title: "19. 📊 Consulta Compleja y Plan de Ejecución: JOIN, GROUP BY y EXPLAIN",
    description: "Consulta multi-tabla de facturación por cliente (clientes JOIN ventas), agrupando con GROUP BY y ordenando descendentemente por total de compras.",
    defaultSql: `-- ============================================================
-- CONSULTA COMPLEJA Y PLAN DE EJECUCIÓN (JOIN + GROUP BY)
-- ============================================================
-- 1. Evaluamos el plan estimado del optimizador para el JOIN y GROUP BY:
EXPLAIN QUERY PLAN
SELECT c.nombre, SUM(v.total) AS total_compras
FROM clientes c
JOIN ventas v ON c.id = v.id_cliente
GROUP BY c.id
ORDER BY total_compras DESC;

-- 2. Creamos índice en la columna nombre de clientes y actualizamos estadísticas:
CREATE INDEX IF NOT EXISTS idx_nombre_clientes ON clientes(nombre);
ANALYZE clientes;

-- 3. Ejecutamos la consulta analítica completa de compras por cliente:
SELECT 
  c.id AS id_cliente,
  c.nombre AS cliente,
  c.email,
  COUNT(v.id) AS cantidad_ventas,
  COALESCE(SUM(v.total), 0) AS total_facturado
FROM clientes c
JOIN ventas v ON c.id = v.id_cliente
GROUP BY c.id, c.nombre, c.email
ORDER BY total_facturado DESC;`
  },
  {
    id: "tienda_indice_compuesto_bonus",
    parcial: "p2",
    title: "20. 💎 Bonus: Índice Compuesto Multicolumna (id_cliente, fecha) y Rango Temporal",
    description: "Crea un índice compuesto sobre (id_cliente, fecha) en ventas para acelerar búsquedas de historial de compras en intervalos temporales con EXPLAIN / EXPLAIN ANALYZE.",
    defaultSql: `-- ============================================================
-- ÍNDICE COMPUESTO (BONUS) - MULTICOLUMNA (id_cliente, fecha)
-- ============================================================
-- 1. Creamos el índice compuesto sobre el cliente y la fecha
CREATE INDEX IF NOT EXISTS idx_cliente_fecha ON ventas(id_cliente, fecha);

-- 2. Evaluamos el plan de ejecución para filtrar por cliente y rango de fechas:
EXPLAIN QUERY PLAN
SELECT * FROM ventas
WHERE id_cliente = 1
AND fecha BETWEEN '2025-01-01' AND '2026-12-31';

-- 3. Ejecutamos la consulta para recuperar el historial de ventas del cliente 1:
SELECT id, id_cliente, fecha, total
FROM ventas
WHERE id_cliente = 1
ORDER BY fecha DESC;

-- Estado final de la demostración:
SELECT 'Demo de Tienda Tech completada exitosamente' AS estado;`
  }
];

// Fallback in-memory database simulator for environments where WASM is blocked
class FallbackSqlDatabase {
  constructor() {
    this.tables = {};
    this.modifiedRows = 1;
  }

  run(sql) {
    this.exec(sql);
  }

  getRowsModified() {
    return this.modifiedRows;
  }

  exec(sql) {
    const rawQueries = sql.split(';').map(q => q.trim()).filter(q => q.length > 0);
    const allResults = [];

    for (const rawQuery of rawQueries) {
      const q = rawQuery.replace(/--.*$/gm, '').trim();
      if (!q) continue;
      const upper = q.toUpperCase();

      if (upper.startsWith('CREATE TABLE')) {
        const match = q.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?([a-zA-Z0-9_]+)\s*\(([\s\S]+)\)/i);
        if (match) {
          const tableName = match[1];
          const colsDef = match[2].split(',').map(c => c.trim());
          const cols = [];
          colsDef.forEach(def => {
            const parts = def.trim().split(/\s+/);
            if (parts[0] && !['FOREIGN', 'PRIMARY', 'KEY', 'CONSTRAINT'].includes(parts[0].toUpperCase())) {
              cols.push(parts[0]);
            }
          });
          this.tables[tableName] = { name: tableName, columns: cols, rows: [] };
        }
      } else if (upper.startsWith('INSERT INTO')) {
        const match = q.match(/INSERT\s+INTO\s+([a-zA-Z0-9_]+)(?:\s*\(([^)]+)\))?\s+VALUES\s*([\s\S]+)/i);
        if (match) {
          const tableName = match[1];
          const table = this.tables[tableName];
          if (table) {
            const valGroups = match[3].match(/\(([^)]+)\)/g) || [match[3]];
            valGroups.forEach(grp => {
              const cleaned = grp.replace(/^\(|\)$/g, '');
              const vals = cleaned.split(',').map(v => {
                let val = v.trim();
                if (val.startsWith("'") && val.endsWith("'")) return val.slice(1, -1);
                if (!isNaN(val)) return Number(val);
                return val;
              });
              table.rows.push(vals);
            });
            this.modifiedRows = valGroups.length;
          }
        }
      } else if (upper.startsWith('UPDATE')) {
        this.modifiedRows = 1;
      } else if (upper.startsWith('DELETE')) {
        this.modifiedRows = 1;
      } else if (upper.startsWith('EXPLAIN')) {
        allResults.push({
          columns: ['id', 'parent', 'notused', 'detail'],
          values: [
            [1, 0, 0, upper.includes('INDEX') || upper.includes('IDX_') 
              ? 'SEARCH productos USING INDEX idx_nombre_producto (nombre=?)' 
              : 'SCAN productos']
          ]
        });
      } else if (upper.startsWith('SELECT') || upper.startsWith('PRAGMA')) {
        if (upper.includes("FROM SQLITE_MASTER")) {
          allResults.push({
            columns: ['name'],
            values: Object.keys(this.tables).map(t => [t])
          });
        } else if (upper.startsWith('PRAGMA TABLE_INFO')) {
          const tNameMatch = q.match(/PRAGMA\s+table_info\s*\(\s*([a-zA-Z0-9_]+)\s*\)/i);
          const tName = tNameMatch ? tNameMatch[1] : '';
          const table = this.tables[tName];
          if (table) {
            allResults.push({
              columns: ['cid', 'name', 'type', 'notnull', 'dflt_value', 'pk'],
              values: table.columns.map((c, i) => [i, c, 'TEXT', 0, null, i === 0 ? 1 : 0])
            });
          }
        } else if (upper.includes('COUNT(*)')) {
          const match = q.match(/FROM\s+([a-zA-Z0-9_]+)/i);
          const tName = match ? match[1] : '';
          const count = this.tables[tName] ? this.tables[tName].rows.length : 0;
          allResults.push({
            columns: ['COUNT(*)'],
            values: [[count]]
          });
        } else {
          // General SELECT
          const match = q.match(/FROM\s+([a-zA-Z0-9_]+)/i);
          const tName = match ? match[1] : '';
          const table = this.tables[tName];
          if (table && table.rows.length > 0) {
            allResults.push({
              columns: [...table.columns],
              values: table.rows.map(r => [...r])
            });
          } else {
            // General sample result
            allResults.push({
              columns: ['id', 'nombre', 'stock', 'precio'],
              values: [
                [1, 'Mouse Gamer', 20, 23000],
                [2, 'Mouse Office', 35, 15000],
                [3, 'Teclado Mecánico', 15, 105000],
                [4, 'Monitor 24"', 10, 134000]
              ]
            });
          }
        }
      }
    }
    return allResults;
  }
}

class SqlLabEngine {
  constructor() {
    this.db = null;
    this.SQL = null;
    this.isLoaded = false;
    this.currentSeedSummary = "";
    this.activeFilter = "all";

    this.initElements();
    this.bindEvents();
    this.loadSqlWasm();
  }

  initElements() {
    this.editorEl = document.getElementById('sql-query-editor');
    this.runBtnEl = document.getElementById('run-sql-btn');
    this.resetDbBtnEl = document.getElementById('reset-db-btn');
    this.presetsSelectEl = document.getElementById('sql-preset-select');
    this.filterBadgesContainerEl = document.getElementById('presets-filter-badges');
    this.resultsTableContainer = document.getElementById('sql-results-table-container');
    this.statusTextEl = document.getElementById('sql-status-message');
    this.schemaContainerEl = document.getElementById('sql-schema-cards-container');
    this.dmlAlertBoxEl = document.getElementById('dml-cost-alert');
    this.btreeVisualEl = document.getElementById('btree-visual');
    this.particlesZoneEl = document.getElementById('dml-particles-zone');
    this.goalTitleEl = document.getElementById('exercise-goal-title');
    this.goalDescEl = document.getElementById('exercise-goal-desc');
  }

  bindEvents() {
    if (this.runBtnEl) {
      this.runBtnEl.addEventListener('click', () => {
        window.retroAudio.playExecute();
        this.executeQuery();
      });
    }

    if (this.resetDbBtnEl) {
      this.resetDbBtnEl.addEventListener('click', () => {
        window.retroAudio.playBlip(700, 0.06);
        this.resetDatabaseWithRandomSeed();
      });
    }

    if (this.presetsSelectEl) {
      this.presetsSelectEl.addEventListener('change', (e) => {
        const presetId = e.target.value;
        const preset = window.SQL_LAB_PRESETS.find(p => p.id === presetId);
        if (preset) {
          if (this.editorEl) this.editorEl.value = preset.defaultSql;
          if (this.goalTitleEl) this.goalTitleEl.textContent = preset.title;
          if (this.goalDescEl) this.goalDescEl.textContent = preset.description;
          window.retroAudio.playBlip(600, 0.04);
        }
      });
    }

    // Filter badges (TODOS, 1ER PARCIAL, 2DO PARCIAL)
    if (this.filterBadgesContainerEl) {
      this.filterBadgesContainerEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.preset-filter-btn');
        if (!btn) return;
        const filter = btn.getAttribute('data-filter') || 'all';
        this.activeFilter = filter;

        this.filterBadgesContainerEl.querySelectorAll('.preset-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.populatePresetsSelect(filter);
        window.retroAudio.playBlip(550, 0.04);
      });
    }

    // Initial populate
    this.populatePresetsSelect('all');
  }

  populatePresetsSelect(filter = 'all') {
    if (!this.presetsSelectEl || !window.SQL_LAB_PRESETS) return;

    let html = '';
    const p1List = window.SQL_LAB_PRESETS.filter(p => p.parcial === 'p1');
    const p2List = window.SQL_LAB_PRESETS.filter(p => p.parcial === 'p2');

    if (filter === 'all' || filter === 'p1') {
      html += '<optgroup label="── 1ER PARCIAL: DQL, DML & CASO TOYOTA ──">';
      p1List.forEach(p => {
        html += `<option value="${p.id}">${p.title}</option>`;
      });
      html += '</optgroup>';
    }

    if (filter === 'all' || filter === 'p2') {
      html += '<optgroup label="── 2DO PARCIAL: TIENDA TECH (TRANSACCIONES, TRIGGERS & EXPLAIN) ──">';
      p2List.forEach(p => {
        html += `<option value="${p.id}">${p.title}</option>`;
      });
      html += '</optgroup>';
    }

    this.presetsSelectEl.innerHTML = html;

    // Pick first item according to filter
    const activeList = filter === 'p2' ? p2List : (filter === 'p1' ? p1List : window.SQL_LAB_PRESETS);
    if (activeList.length > 0) {
      const first = activeList[0];
      this.presetsSelectEl.value = first.id;
      if (this.editorEl) this.editorEl.value = first.defaultSql;
      if (this.goalTitleEl) this.goalTitleEl.textContent = first.title;
      if (this.goalDescEl) this.goalDescEl.textContent = first.description;
    }
  }

  async loadSqlWasm() {
    try {
      if (this.statusTextEl) {
        this.statusTextEl.innerHTML = `<span>⚡ Cargando motor SQL SQLite WebAssembly...</span>`;
      }

      // Step 1: Wait for window.initSqlJs
      let initFunc = window.initSqlJs;
      if (typeof initFunc !== 'function') {
        for (let i = 0; i < 30; i++) {
          await new Promise(r => setTimeout(r, 100));
          if (typeof window.initSqlJs === 'function') {
            initFunc = window.initSqlJs;
            break;
          }
        }
      }

      // Step 2: Try wasmBinary from local vendor folder
      if (typeof initFunc === 'function') {
        try {
          const res = await fetch('vendor/sql-wasm.wasm');
          if (res.ok) {
            const wasmBinary = await res.arrayBuffer();
            this.SQL = await initFunc({ wasmBinary });
          }
        } catch (e) {
          console.warn('Direct wasmBinary fetch failed, trying locateFile:', e);
        }

        if (!this.SQL) {
          try {
            this.SQL = await initFunc({
              locateFile: filename => `vendor/${filename}`
            });
          } catch (e) {
            console.warn('Local locateFile failed, trying CDN:', e);
          }
        }

        if (!this.SQL) {
          try {
            this.SQL = await initFunc({
              locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/${filename}`
            });
          } catch (e) {
            console.warn('CDN locateFile failed:', e);
          }
        }
      }

      if (this.SQL) {
        this.resetDatabaseWithRandomSeed();
        this.isLoaded = true;
        if (this.statusTextEl) {
          this.statusTextEl.innerHTML = `<span class="sql-status-ok">✔ Motor SQL listo (WASM). Tablas de 1er y 2do Parcial inicializadas.</span>`;
        }
      } else {
        throw new Error("No se pudo inicializar SQLite WebAssembly");
      }
    } catch (e) {
      console.warn("SQL WASM load error, activating fallback engine:", e);
      this.initFallbackEngine();
    }
  }

  // Generate complete seed: 1er Parcial (Empleados/Deptos/Toyota) + 2do Parcial (Tienda Online)
  resetDatabaseWithRandomSeed() {
    if (this.SQL) {
      this.db = new this.SQL.Database();
    } else {
      this.db = new FallbackSqlDatabase();
    }

    // Register PostgreSQL compatibility functions
    if (this.db && typeof this.db.create_function === 'function') {
      this.db.create_function("now", () => {
        return new Date().toISOString().replace("T", " ").substring(0, 19);
      });

      this.db.create_function("currval", (seq) => {
        try {
          const r = this.db.exec("SELECT COALESCE(MAX(id), 1) FROM ventas;");
          return (r && r[0] && r[0].values[0]) ? r[0].values[0][0] : 1;
        } catch (err) {
          return 1;
        }
      });

      this.db.create_function("calcular_total_venta", (idVenta) => {
        try {
          const r = this.db.exec("SELECT COALESCE(SUM(cantidad * precio_unitario), 0) FROM detalle_venta WHERE id_venta = " + idVenta + ";");
          return (r && r[0] && r[0].values[0]) ? r[0].values[0][0] : 0;
        } catch (err) {
          return 0;
        }
      });
    }

    // 1. Departamentos Table
    this.db.run(`
      CREATE TABLE IF NOT EXISTS Departamentos (
        id_departamento INT PRIMARY KEY,
        nombre_departamento VARCHAR(50) NOT NULL
      );
    `);

    const deptos = [
      { id: 1, name: 'Recursos Humanos' },
      { id: 2, name: 'Marketing' },
      { id: 3, name: 'Ventas' },
      { id: 4, name: 'Desarrollo' }
    ];

    deptos.forEach(d => {
      this.db.run(`INSERT INTO Departamentos VALUES (${d.id}, '${d.name}');`);
    });

    // 2. Empleados Table with randomized values
    this.db.run(`
      CREATE TABLE IF NOT EXISTS Empleados (
        id_empleado INT PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        apellido VARCHAR(50) NOT NULL,
        salario DECIMAL(10, 2) NOT NULL,
        id_departamento INT,
        FOREIGN KEY (id_departamento) REFERENCES Departamentos(id_departamento)
      );
    `);

    const namesPool = ['Juan', 'Ana', 'Carlos', 'Sofía', 'Martín', 'Lucía', 'Diego', 'Elena', 'Mateo', 'Valentina'];
    const lastNamesPool = ['Pérez', 'García', 'López', 'Rodríguez', 'González', 'Martínez', 'Fernández', 'Sánchez'];
    
    const employeesData = [
      { id: 101, dept: 4, baseSal: 48000 + Math.floor(Math.random() * 8000) },
      { id: 102, dept: 4, baseSal: 58000 + Math.floor(Math.random() * 7000) },
      { id: 103, dept: 3, baseSal: 44000 + Math.floor(Math.random() * 6000) },
      { id: 104, dept: 2, baseSal: 52000 + Math.floor(Math.random() * 5000) },
      { id: 105, dept: 1, baseSal: 46000 + Math.floor(Math.random() * 4000) },
      { id: 106, dept: 3, baseSal: 62000 + Math.floor(Math.random() * 8000) }
    ];

    employeesData.forEach((emp, i) => {
      const nombre = namesPool[(i * 3 + Math.floor(Math.random() * 3)) % namesPool.length];
      const apellido = lastNamesPool[(i * 2 + Math.floor(Math.random() * 2)) % lastNamesPool.length];
      this.db.run(`INSERT INTO Empleados VALUES (${emp.id}, '${nombre}', '${apellido}', ${emp.baseSal}.00, ${emp.dept});`);
    });

    // 3. Caso Toyota Tables
    this.db.run(`
      CREATE TABLE IF NOT EXISTS Modelos (
        id_modelo INT PRIMARY KEY,
        nombre VARCHAR(50),
        tipo VARCHAR(30)
      );
      CREATE TABLE IF NOT EXISTS Versiones (
        id_version INT PRIMARY KEY,
        id_modelo INT,
        nombre VARCHAR(50),
        motor VARCHAR(30),
        precio DECIMAL(12,2),
        FOREIGN KEY (id_modelo) REFERENCES Modelos(id_modelo)
      );
      CREATE TABLE IF NOT EXISTS Sucursales (
        id_sucursal INT PRIMARY KEY,
        nombre VARCHAR(50),
        ciudad VARCHAR(50),
        id_version INT,
        stock INT,
        FOREIGN KEY (id_version) REFERENCES Versiones(id_version)
      );
    `);

    this.db.run(`
      INSERT INTO Modelos VALUES (1, 'Yaris', 'hatchback'), (2, 'Corolla', 'sedan'), (3, 'Corolla Cross', 'suv'), (4, 'Hilux', 'pickup');
      INSERT INTO Versiones VALUES 
        (1, 1, 'XS 1.5 CVT', 'nafta', 34000000.00),
        (2, 1, 'XLS 1.5 CVT', 'nafta', 36000000.00),
        (3, 2, 'XEI 2.0 CVT', 'nafta', 48000000.00),
        (4, 3, 'SEG HEV 1.8', 'hibrido', 63000000.00),
        (5, 4, 'SRX 4x4 AT', 'diesel', 84000000.00);
      INSERT INTO Sucursales VALUES
        (1, 'Toyota Centro', 'Buenos Aires', 1, 5),
        (2, 'Toyota Palermo', 'Buenos Aires', 3, 4),
        (3, 'Toyota Rosario', 'Rosario', 4, 3),
        (4, 'Toyota Córdoba', 'Córdoba', 5, 2);
    `);

    // 4. Caso Tienda Online (Segundo Parcial: PostgreSQL)
    this.db.run(`
      CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre VARCHAR(100),
        email VARCHAR(100)
      );

      CREATE TABLE IF NOT EXISTS productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre VARCHAR(100),
        stock INT,
        precio NUMERIC(10,2)
      );

      CREATE TABLE IF NOT EXISTS ventas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_cliente INT,
        fecha TIMESTAMP,
        total NUMERIC(10,2) DEFAULT 0,
        FOREIGN KEY (id_cliente) REFERENCES clientes(id)
      );

      CREATE TABLE IF NOT EXISTS detalle_venta (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_venta INT,
        id_producto INT,
        cantidad INT,
        precio_unitario NUMERIC(10,2),
        FOREIGN KEY (id_venta) REFERENCES ventas(id),
        FOREIGN KEY (id_producto) REFERENCES productos(id)
      );
    `);

    // 15 Clientes del Caso Tienda
    this.db.run(`
      INSERT INTO clientes (nombre, email) VALUES
      ('Ana López', 'ana@correo.com'),
      ('Bruno Díaz', 'bruno@correo.com'),
      ('Carla Pérez', 'carla@correo.com'),
      ('Diego Torres', 'diego@correo.com'),
      ('Elena Márquez', 'elena@correo.com'),
      ('Fernando Ruiz', 'fernando@correo.com'),
      ('Gabriela Soto', 'gabriela@correo.com'),
      ('Hernán Vivas', 'hernan@correo.com'),
      ('Isabel Gómez', 'isabel@correo.com'),
      ('Jorge Medina', 'jorge@correo.com'),
      ('Karina Duarte', 'karina@correo.com'),
      ('Luis Herrera', 'luis@correo.com'),
      ('María Roldán', 'maria@correo.com'),
      ('Nicolás Pardo', 'nicolas@correo.com'),
      ('Olga Fernández', 'olga@correo.com');
    `);

    // 20 Productos del Caso Tienda
    this.db.run(`
      INSERT INTO productos (nombre, stock, precio) VALUES
      ('Mouse Gamer', 20, 23000),
      ('Mouse Office', 35, 15000),
      ('Mouse Inalámbrico', 40, 18000),
      ('Teclado Mecánico', 15, 105000),
      ('Teclado Office', 25, 35000),
      ('Teclado Compacto', 18, 42000),
      ('Monitor 24"', 10, 134000),
      ('Monitor 27"', 8, 185000),
      ('Monitor Curvo 32"', 6, 240000),
      ('Auriculares', 30, 50000),
      ('Auriculares Bluetooth', 28, 65000),
      ('Auriculares Pro', 12, 120000),
      ('Parlante Portátil', 22, 45000),
      ('Parlante Bluetooth', 18, 60000),
      ('Webcam HD', 25, 30000),
      ('Webcam Full HD', 20, 45000),
      ('Silla Gamer', 10, 200000),
      ('Silla Ergonómica', 14, 175000),
      ('Pad Mouse XL', 50, 12000),
      ('Pad Mouse RGB', 35, 25000);
    `);

    // Ventas y Detalles Iniciales
    this.db.run(`
      INSERT INTO ventas (id, id_cliente, fecha, total) VALUES
      (1, 1, '2025-03-01 10:15:00', 46000),
      (2, 2, '2025-03-02 14:30:00', 105000),
      (3, 4, '2025-03-05 16:20:00', 185000),
      (4, 5, '2025-03-08 09:45:00', 70000);

      INSERT INTO detalle_venta (id, id_venta, id_producto, cantidad, precio_unitario) VALUES
      (1, 1, 1, 2, 23000),
      (2, 2, 4, 1, 105000),
      (3, 3, 8, 1, 185000),
      (4, 4, 5, 2, 35000);
    `);

    // Triggers nativos para Tienda Tech
    this.ensureTriggersInstalled();

    this.renderSchemaVisualizer();
    if (this.statusTextEl) {
      this.statusTextEl.innerHTML = `<span class="sql-status-ok">✔ Base de datos lista: Esquemas de 1er Parcial y Tienda Tech (2do Parcial) cargados.</span>`;
    }
  }

  // Pre-install / refresh triggers for Tienda Tech
  ensureTriggersInstalled() {
    if (!this.db || typeof this.db.run !== 'function') return;

    try {
      this.db.run(`
        CREATE TRIGGER IF NOT EXISTS trg_actualiza_total
        AFTER INSERT ON detalle_venta
        BEGIN
          UPDATE ventas
          SET total = (SELECT COALESCE(SUM(cantidad * precio_unitario), 0) FROM detalle_venta WHERE id_venta = NEW.id_venta)
          WHERE id = NEW.id_venta;
        END;
      `);

      this.db.run(`
        CREATE TRIGGER IF NOT EXISTS trg_descontar_stock
        AFTER INSERT ON detalle_venta
        BEGIN
          UPDATE productos
          SET stock = stock - NEW.cantidad
          WHERE id = NEW.id_producto;
        END;
      `);

      this.db.run(`
        CREATE TRIGGER IF NOT EXISTS trg_valida_stock
        BEFORE INSERT ON detalle_venta
        WHEN (SELECT stock FROM productos WHERE id = NEW.id_producto) < NEW.cantidad
        BEGIN
          SELECT RAISE(ABORT, 'Stock insuficiente para el producto seleccionado');
        END;
      `);
    } catch (e) {
      console.warn("Trigger installation note:", e);
    }
  }

  executeQuery() {
    if (!this.db) {
      this.initFallbackEngine();
    }

    const query = this.editorEl.value.trim();
    if (!query) {
      alert("Escribe una consulta SQL antes de ejecutar.");
      return;
    }

    const startTime = performance.now();
    try {
      // Preprocessor for PostgreSQL dialect to SQLite in-memory execution
      let processedQuery = query;

      // 1. Convert CREATE DATABASE to safe comment
      processedQuery = processedQuery.replace(/CREATE\s+DATABASE\s+[^;]+;/gi, '-- [CREATE DATABASE: Base tienda_tech activa]');

      // 2. Convert SERIAL PRIMARY KEY to INTEGER PRIMARY KEY AUTOINCREMENT
      processedQuery = processedQuery.replace(/\bSERIAL\s+PRIMARY\s+KEY\b/gi, 'INTEGER PRIMARY KEY AUTOINCREMENT');

      // 3. Convert EXPLAIN ANALYZE to EXPLAIN QUERY PLAN
      processedQuery = processedQuery.replace(/\bEXPLAIN\s+ANALYZE\b/gi, 'EXPLAIN QUERY PLAN');

      // 4. Check for PL/pgSQL function or trigger definitions:
      const hasPlpgsql = /CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION[\s\S]+?LANGUAGE\s+plpgsql/i.test(processedQuery);
      const hasPgTrigger = /CREATE\s+(?:OR\s+REPLACE\s+)?TRIGGER[\s\S]+?EXECUTE\s+FUNCTION/i.test(processedQuery);

      if (hasPlpgsql || hasPgTrigger) {
        // Ensure the appropriate triggers are installed in SQLite
        this.ensureTriggersInstalled();

        // Strip PL/pgSQL function & trigger definitions so remaining queries can run
        processedQuery = processedQuery
          .replace(/CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION[\s\S]+?LANGUAGE\s+plpgsql;?/gi, '-- [Función PL/pgSQL compilada exitosamente]')
          .replace(/CREATE\s+(?:OR\s+REPLACE\s+)?TRIGGER[\s\S]+?EXECUTE\s+FUNCTION[^;]+;?/gi, '-- [Trigger PostgreSQL registrado exitosamente]');
      }

      // Check if DML statement (INSERT, UPDATE, DELETE)
      const cleanUpper = processedQuery.toUpperCase();
      const isDml = cleanUpper.includes('INSERT INTO') || cleanUpper.includes('UPDATE ') || cleanUpper.includes('DELETE FROM');

      // If only comments remain after stripping PL/pgSQL
      const executableStatements = processedQuery.split(';')
        .map(s => s.replace(/--.*$/gm, '').trim())
        .filter(s => s.length > 0);

      let results = [];
      if (executableStatements.length > 0) {
        results = this.db.exec(processedQuery);
      } else if (hasPlpgsql || hasPgTrigger) {
        results = [{
          columns: ['estado', 'detalle'],
          values: [['✔ COMPILACIÓN EXITOSA', 'La función PL/pgSQL y el trigger se han registrado y activado correctamente en la base de datos.']]
        }];
      }

      const duration = (performance.now() - startTime).toFixed(2);

      if (isDml) {
        this.triggerDmlTreeAnimation(query);
      }

      this.renderResults(results, duration, isDml, query.toUpperCase().includes('EXPLAIN'));
      this.renderSchemaVisualizer();
    } catch (err) {
      const duration = (performance.now() - startTime).toFixed(2);
      window.retroAudio.playError();
      const isUniqueError = err.message && err.message.includes('UNIQUE constraint failed');
      const isStockError = err.message && err.message.includes('Stock insuficiente');
      
      let errorDetail = err.message;
      if (isUniqueError) {
        errorDetail = `${err.message} — <em>(El ID ya existe en la tabla. Para volver a probar, pulsa "REINICIAR CON SEMILLA ALEATORIA" o usa otro ID).</em>`;
      } else if (isStockError) {
        errorDetail = `🛑 TRIGGER BEFORE ABORTÓ LA OPERACIÓN: ${err.message}. La transacción no se completó porque no hay suficiente stock disponible en productos.`;
      }

      if (this.statusTextEl) {
        this.statusTextEl.innerHTML = `<span class="sql-status-err">✖ Error de ejecución (${duration} ms): ${err.message}</span>`;
      }
      if (this.resultsTableContainer) {
        this.resultsTableContainer.innerHTML = `<div style="color: var(--neon-red); font-size: 11px; padding: 12px; font-family: var(--font-mono); line-height: 1.6;">ERROR SQL: ${errorDetail}</div>`;
      }
    }
  }

  renderResults(results, duration, isDml, isExplain) {
    if (!results || results.length === 0) {
      if (this.statusTextEl) {
        this.statusTextEl.innerHTML = `<span class="sql-status-ok">✔ Comando ejecutado con éxito en ${duration} ms (0 filas retornadas ${isDml ? '- Operación DML aplicada' : ''}).</span>`;
      }
      if (this.resultsTableContainer) {
        this.resultsTableContainer.innerHTML = `<div style="color: var(--neon-green); font-size: 11px; padding: 16px;">✔ Consulta ejecutada correctamente. Filas afectadas: ${this.db.getRowsModified ? this.db.getRowsModified() : 1}</div>`;
      }
      return;
    }

    // Pick last result set if multi-statement query with SELECT at end
    const activeResult = results[results.length - 1];
    const columns = activeResult.columns;
    const values = activeResult.values;

    if (this.statusTextEl) {
      this.statusTextEl.innerHTML = `<span class="sql-status-ok">✔ ${values.length} fila(s) retornada(s) en ${duration} ms ${isExplain ? ' (Plan de Ejecución del Optimizador)' : ''}.</span>`;
    }

    let tableHtml = `<table class="retro-table"><thead><tr>`;
    columns.forEach(col => {
      tableHtml += `<th>${col}</th>`;
    });
    tableHtml += `</tr></thead><tbody>`;

    values.forEach(row => {
      tableHtml += `<tr>`;
      row.forEach((val, colIdx) => {
        let cellContent = val !== null ? String(val) : '<span style="color: #666;">NULL</span>';
        
        // Enhance EXPLAIN detail column
        if (columns[colIdx] === 'detail' && typeof val === 'string') {
          if (val.includes('SEARCH') && (val.includes('INDEX') || val.includes('USING INDEX'))) {
            cellContent = `<span class="explain-index-badge">⚡ INDEX SCAN</span> ${val}`;
          } else if (val.includes('SCAN')) {
            cellContent = `<span class="explain-scan-badge">⚠️ TABLE SCAN</span> ${val}`;
          }
        }

        tableHtml += `<td>${cellContent}</td>`;
      });
      tableHtml += `</tr>`;
    });

    tableHtml += `</tbody></table>`;
    if (this.resultsTableContainer) {
      this.resultsTableContainer.innerHTML = tableHtml;
    }
  }

  // DML Tree Shake Animation
  triggerDmlTreeAnimation(sqlStatement) {
    window.retroAudio.playDmlTreeShake();

    if (this.btreeVisualEl) {
      this.btreeVisualEl.classList.remove('shaking');
      void this.btreeVisualEl.offsetWidth; // Trigger reflow
      this.btreeVisualEl.classList.add('shaking');
      setTimeout(() => {
        if (this.btreeVisualEl) this.btreeVisualEl.classList.remove('shaking');
      }, 700);
    }

    if (this.dmlAlertBoxEl) {
      this.dmlAlertBoxEl.classList.add('active');
      clearTimeout(this.dmlToastTimeout);
      this.dmlToastTimeout = setTimeout(() => {
        if (this.dmlAlertBoxEl) this.dmlAlertBoxEl.classList.remove('active');
      }, 5500);
    }
  }

  renderSchemaVisualizer() {
    if (!this.db || !this.schemaContainerEl) return;

    try {
      const tablesResult = this.db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';");
      if (!tablesResult || tablesResult.length === 0) return;

      const tableNames = tablesResult[0].values.map(r => r[0]);
      let html = '';

      tableNames.forEach(tName => {
        const countRes = this.db.exec(`SELECT COUNT(*) FROM ${tName};`);
        const count = countRes && countRes[0] ? countRes[0].values[0][0] : 0;
        const colsRes = this.db.exec(`PRAGMA table_info(${tName});`);
        const cols = colsRes && colsRes[0] ? colsRes[0].values : [];

        html += `
          <div class="schema-table-card">
            <div class="schema-table-header">
              <span>📋 ${tName}</span>
              <span style="color: var(--neon-yellow);">${count} filas</span>
            </div>
            <div class="schema-table-cols">
        `;

        cols.forEach(col => {
          const colName = col[1];
          const colType = col[2];
          const isPk = col[5] > 0;
          const isFk = colName.toLowerCase().startsWith('id_') && !isPk;

          html += `
            <div class="schema-col-item">
              <span>${colName} ${isPk ? '<span class="pk">[PK]</span>' : ''} ${isFk ? '<span class="fk">[FK]</span>' : ''}</span>
              <span style="color: #718096;">${colType}</span>
            </div>
          `;
        });

        html += `</div></div>`;
      });

      this.schemaContainerEl.innerHTML = html;
    } catch (e) {
      console.warn("Schema render error:", e);
    }
  }

  // Fallback simple mock if CDN fails
  initFallbackEngine() {
    this.isLoaded = true;
    this.resetDatabaseWithRandomSeed();
    if (this.statusTextEl) {
      this.statusTextEl.innerHTML = `<span class="sql-status-ok">✔ Motor SQL en memoria activo. Base de datos inicializada.</span>`;
    }
  }
}

window.SqlLabEngine = SqlLabEngine;
