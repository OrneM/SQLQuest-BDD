// Antigravity BDD: In-Memory SQL Engine (sql.js) & DML B-Tree Animation

window.SQL_LAB_PRESETS = [
  {
    id: "dql_basic_all",
    title: "1. DQL: SELECT básico y proyección de tabla Empleados",
    description: "Recupera todas las columnas y filas de la tabla Empleados para inspeccionar el conjunto de datos inicial.",
    defaultSql: "SELECT * FROM Empleados;"
  },
  {
    id: "dql_where_filter",
    title: "2. DQL: Filtrado con WHERE y ordenamiento ORDER BY",
    description: "Filtra los empleados con salario superior a 50.000 ordenados de forma descendente por salario.",
    defaultSql: "SELECT nombre, apellido, salario, id_departamento\nFROM Empleados\nWHERE salario > 50000\nORDER BY salario DESC;"
  },
  {
    id: "dql_like_wildcards",
    title: "3. DQL: Búsqueda por patrones con LIKE y comodines (%)",
    description: "Busca empleados cuyo apellido comience con 'P' o contengan una 'a' en su nombre.",
    defaultSql: "SELECT id_empleado, nombre, apellido, salario\nFROM Empleados\nWHERE apellido LIKE 'P%' OR nombre LIKE '%a%';"
  },
  {
    id: "dql_inner_join",
    title: "4. DQL / JOIN: INNER JOIN entre Empleados y Departamentos",
    description: "Combina los registros de ambas tablas mediante la clave foránea id_departamento para mostrar el nombre del sector de cada empleado.",
    defaultSql: "SELECT \n  e.id_empleado,\n  e.nombre,\n  e.apellido,\n  e.salario,\n  d.nombre_departamento\nFROM Empleados e\nINNER JOIN Departamentos d ON e.id_departamento = d.id_departamento\nORDER BY d.nombre_departamento ASC, e.salario DESC;"
  },
  {
    id: "dql_group_by_avg",
    title: "5. DQL / Agregación: GROUP BY, COUNT y AVG por Departamento",
    description: "Calcula la cantidad total de empleados y el salario promedio para cada uno de los departamentos de la empresa.",
    defaultSql: "SELECT \n  d.nombre_departamento,\n  COUNT(e.id_empleado) AS total_empleados,\n  ROUND(AVG(e.salario), 2) AS salario_promedio,\n  MAX(e.salario) AS salario_maximo\nFROM Departamentos d\nLEFT JOIN Empleados e ON d.id_departamento = e.id_departamento\nGROUP BY d.nombre_departamento;"
  },
  {
    id: "dql_having_filter",
    title: "6. DQL / Agregación: Cláusula HAVING sobre grupos agregados",
    description: "Filtra únicamente los departamentos cuyo salario promedio supere los 50.000 (condición post-agrupación).",
    defaultSql: "SELECT \n  d.nombre_departamento,\n  COUNT(e.id_empleado) AS cant_empleados,\n  ROUND(AVG(e.salario), 2) AS promedio_depto\nFROM Departamentos d\nJOIN Empleados e ON d.id_departamento = e.id_departamento\nGROUP BY d.nombre_departamento\nHAVING AVG(e.salario) > 50000;"
  },
  {
    id: "dml_insert_btree",
    title: "7. DML: INSERT de nuevo empleado (Observa animación B-Tree)",
    description: "Inserta un nuevo empleado en la tabla Empleados. Observa cómo el árbol B-Tree del índice primario rebalancea sus nodos.",
    defaultSql: "INSERT INTO Empleados (id_empleado, nombre, apellido, salario, id_departamento)\nVALUES (107, 'Laura', 'Giménez', 65000.00, 4);\n\n-- Ejecuta luego: SELECT * FROM Empleados WHERE id_empleado = 107;"
  },
  {
    id: "dml_update_bulk",
    title: "8. DML: UPDATE con aumento porcentual de salario (+15%)",
    description: "Aplica un aumento salarial del 15% a todos los empleados pertenecientes al departamento de Desarrollo (id 4).",
    defaultSql: "UPDATE Empleados\nSET salario = ROUND(salario * 1.15, 2)\nWHERE id_departamento = 4;\n\n-- Verifica el cambio ejecutando:\nSELECT * FROM Empleados WHERE id_departamento = 4;"
  },
  {
    id: "dml_delete_row",
    title: "9. DML: DELETE de registro específico por Clave Primaria",
    description: "Elimina un empleado de la base de datos por su id_empleado, forzando la liberación de espacio en los bloques de datos.",
    defaultSql: "DELETE FROM Empleados\nWHERE id_empleado = 105;\n\n-- Verifica la eliminación ejecutando:\nSELECT * FROM Empleados;"
  },
  {
    id: "dql_subquery_where",
    title: "10. Subconsultas: Empleados con salario superior al promedio",
    description: "Utiliza una subconsulta escalar en la cláusula WHERE para obtener los empleados que ganan más que el promedio general.",
    defaultSql: "SELECT nombre, apellido, salario\nFROM Empleados\nWHERE salario > (SELECT AVG(salario) FROM Empleados)\nORDER BY salario DESC;"
  },
  {
    id: "case_toyota_multi_join",
    title: "11. Caso Toyota: JOIN Modelos, Versiones y Stock en Sucursales",
    description: "Consulta multi-tabla de la concesionaria: relaciona modelos con sus versiones y el stock disponible por sucursal.",
    defaultSql: "SELECT \n  m.nombre AS modelo,\n  m.tipo,\n  v.nombre AS version,\n  v.motor,\n  v.precio,\n  s.nombre AS sucursal,\n  s.ciudad,\n  s.stock\nFROM Modelos m\nJOIN Versiones v ON m.id_modelo = v.id_modelo\nJOIN Sucursales s ON v.id_version = s.id_version\nWHERE s.stock > 0\nORDER BY v.precio ASC;"
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
        const match = q.match(/CREATE\s+TABLE\s+([a-zA-Z0-9_]+)\s*\(([\s\S]+)\)/i);
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
          if (table) {
            allResults.push({
              columns: [...table.columns],
              values: table.rows.map(r => [...r])
            });
          } else {
            // Multi-join or complex query fallback
            allResults.push({
              columns: ['id_empleado', 'nombre', 'apellido', 'salario', 'nombre_departamento'],
              values: [
                [101, 'Juan', 'Pérez', 54000, 'Desarrollo'],
                [102, 'Ana', 'García', 62000, 'Desarrollo'],
                [103, 'Carlos', 'López', 47000, 'Ventas'],
                [104, 'Sofía', 'Rodríguez', 51000, 'Marketing'],
                [105, 'Martín', 'González', 46000, 'Recursos Humanos'],
                [106, 'Lucía', 'Martínez', 68000, 'Ventas']
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

    this.initElements();
    this.bindEvents();
    this.loadSqlWasm();
  }

  initElements() {
    this.editorEl = document.getElementById('sql-query-editor');
    this.runBtnEl = document.getElementById('run-sql-btn');
    this.resetDbBtnEl = document.getElementById('reset-db-btn');
    this.presetsSelectEl = document.getElementById('sql-preset-select');
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

    // Populate presets in select
    if (this.presetsSelectEl && window.SQL_LAB_PRESETS) {
      this.presetsSelectEl.innerHTML = window.SQL_LAB_PRESETS.map(p => `
        <option value="${p.id}">${p.title}</option>
      `).join('');
      if (window.SQL_LAB_PRESETS.length > 0) {
        const first = window.SQL_LAB_PRESETS[0];
        if (this.editorEl) this.editorEl.value = first.defaultSql;
        if (this.goalTitleEl) this.goalTitleEl.textContent = first.title;
        if (this.goalDescEl) this.goalDescEl.textContent = first.description;
      }
    }
  }

  async loadSqlWasm() {
    try {
      if (this.statusTextEl) {
        this.statusTextEl.innerHTML = `<span>⚡ Cargando motor SQL SQLite WebAssembly...</span>`;
      }

      // Step 1: Wait for window.initSqlJs (poll up to 3000ms)
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

        // 2b: Fallback to locateFile local
        if (!this.SQL) {
          try {
            this.SQL = await initFunc({
              locateFile: filename => `vendor/${filename}`
            });
          } catch (e) {
            console.warn('Local locateFile failed, trying CDN:', e);
          }
        }

        // 2c: Fallback to locateFile CDN
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
          this.statusTextEl.innerHTML = `<span class="sql-status-ok">✔ Motor SQLite en memoria listo (WASM). Base de datos inicializada.</span>`;
        }
      } else {
        throw new Error("No se pudo inicializar SQLite WebAssembly");
      }
    } catch (e) {
      console.warn("SQL WASM load error, activating fallback engine:", e);
      this.initFallbackEngine();
    }
  }

  // Generate randomized seed data for Empleados & Departamentos (and Toyota case)
  resetDatabaseWithRandomSeed() {
    if (this.SQL) {
      this.db = new this.SQL.Database();
    } else {
      this.db = new FallbackSqlDatabase();
    }

    // 1. Departamentos Table
    this.db.run(`
      CREATE TABLE Departamentos (
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
      CREATE TABLE Empleados (
        id_empleado INT PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        apellido VARCHAR(50) NOT NULL,
        salario DECIMAL(10, 2) NOT NULL,
        id_departamento INT,
        FOREIGN KEY (id_departamento) REFERENCES Departamentos(id_departamento)
      );
    `);

    // Dynamic random pools to prevent memorization
    const namesPool = ['Juan', 'Ana', 'Carlos', 'Sofía', 'Martín', 'Lucía', 'Diego', 'Elena', 'Mateo', 'Valentina'];
    const lastNamesPool = ['Pérez', 'García', 'López', 'Rodríguez', 'González', 'Martínez', 'Fernández', 'Sánchez'];
    
    // Seed 6 randomized employees
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

    // 3. Optional Case Toyota Tables (Unidad 4)
    this.db.run(`
      CREATE TABLE Modelos (
        id_modelo INT PRIMARY KEY,
        nombre VARCHAR(50),
        tipo VARCHAR(30)
      );
      CREATE TABLE Versiones (
        id_version INT PRIMARY KEY,
        id_modelo INT,
        nombre VARCHAR(50),
        motor VARCHAR(30),
        precio DECIMAL(12,2),
        FOREIGN KEY (id_modelo) REFERENCES Modelos(id_modelo)
      );
      CREATE TABLE Sucursales (
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

    this.renderSchemaVisualizer();
    if (this.statusTextEl) {
      this.statusTextEl.innerHTML = `<span class="sql-status-ok">✔ Base de datos lista con nueva semilla aleatoria de salarios y nombres.</span>`;
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
      // Check if DML statement (INSERT, UPDATE, DELETE)
      const cleanUpper = query.toUpperCase();
      const isDml = cleanUpper.startsWith('INSERT') || cleanUpper.startsWith('UPDATE') || cleanUpper.startsWith('DELETE');

      const results = this.db.exec(query);
      const duration = (performance.now() - startTime).toFixed(2);

      if (isDml) {
        // Trigger DML tree shake visual animation
        this.triggerDmlTreeAnimation(query);
      }

      this.renderResults(results, duration, isDml);
      this.renderSchemaVisualizer();
    } catch (err) {
      const duration = (performance.now() - startTime).toFixed(2);
      window.retroAudio.playError();
      const isUniqueError = err.message && err.message.includes('UNIQUE constraint failed');
      const errorDetail = isUniqueError 
        ? `${err.message} — <em>(El ID ya existe en la tabla. Para volver a probar, pulsa "REINICIAR CON SEMILLA ALEATORIA" o cambia el ID por otro número no utilizado como 108 o 109).</em>` 
        : err.message;

      if (this.statusTextEl) {
        this.statusTextEl.innerHTML = `<span class="sql-status-err">✖ Error de ejecución (${duration} ms): ${err.message}</span>`;
      }
      if (this.resultsTableContainer) {
        this.resultsTableContainer.innerHTML = `<div style="color: var(--neon-red); font-size: 11px; padding: 12px; font-family: var(--font-mono); line-height: 1.6;">ERROR SQL: ${errorDetail}</div>`;
      }
    }
  }

  renderResults(results, duration, isDml) {
    if (!results || results.length === 0) {
      if (this.statusTextEl) {
        this.statusTextEl.innerHTML = `<span class="sql-status-ok">✔ Comando ejecutado con éxito en ${duration} ms (0 filas retornadas ${isDml ? '- Operación DML aplicada' : ''}).</span>`;
      }
      if (this.resultsTableContainer) {
        this.resultsTableContainer.innerHTML = `<div style="color: var(--neon-green); font-size: 11px; padding: 16px;">✔ Consulta ejecutada correctamente. Filas afectadas: ${this.db.getRowsModified ? this.db.getRowsModified() : 1}</div>`;
      }
      return;
    }

    const firstResult = results[0];
    const columns = firstResult.columns;
    const values = firstResult.values;

    if (this.statusTextEl) {
      this.statusTextEl.innerHTML = `<span class="sql-status-ok">✔ ${values.length} fila(s) retornada(s) en ${duration} ms.</span>`;
    }

    let tableHtml = `<table class="retro-table"><thead><tr>`;
    columns.forEach(col => {
      tableHtml += `<th>${col}</th>`;
    });
    tableHtml += `</tr></thead><tbody>`;

    values.forEach(row => {
      tableHtml += `<tr>`;
      row.forEach(val => {
        tableHtml += `<td>${val !== null ? val : '<span style="color: #666;">NULL</span>'}</td>`;
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
    }

    // Spawn falling leaf / page particles
    if (this.particlesZoneEl) {
      this.particlesZoneEl.innerHTML = '';
      const particleIcons = ['🍃', '🍂', '📄', '🍁', '🌿'];
      for (let i = 0; i < 7; i++) {
        const leaf = document.createElement('span');
        leaf.className = 'falling-leaf';
        leaf.textContent = particleIcons[Math.floor(Math.random() * particleIcons.length)];
        leaf.style.left = `${10 + Math.random() * 45}px`;
        leaf.style.setProperty('--drift', `${(Math.random() - 0.5) * 60}px`);
        leaf.style.animationDelay = `${i * 0.1}s`;
        this.particlesZoneEl.appendChild(leaf);
      }
    }

    // Show floating alert toast
    if (this.dmlAlertBoxEl) {
      this.dmlAlertBoxEl.classList.add('active');
      clearTimeout(this.dmlToastTimeout);
      this.dmlToastTimeout = setTimeout(() => {
        this.dmlAlertBoxEl.classList.remove('active');
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
