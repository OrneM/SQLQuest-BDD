// Antigravity BDD: Grimorio Interactivo & Biblioteca Ilustrada de Conceptos (Clases 1 a 5)

const GRIMOIRE_CHAPTERS = [
  {
    id: "clase1",
    unit: "Unidad 1",
    badge: "Clase 01",
    title: "Arquitectura de Sistemas de Datos & Modelo DBMS",
    pdfFile: "BDD/Clase 1/Data_Systems_Architecture.pdf",
    summary: "Fundamentos de bases de datos, componentes del DBMS, independencia de datos y contraste entre sistemas transaccionales (OLTP) y analíticos (OLAP).",
    slides: [
      {
        file: "assets/clases_infographics/clase1_p02.png",
        title: "Definición y Rol del DBMS",
        caption: "El DBMS como capa intermedia entre el usuario/aplicaciones y los datos físicos."
      },
      {
        file: "assets/clases_infographics/clase1_p03.png",
        title: "Arquitectura ANSI/SPARC (3 Niveles)",
        caption: "Nivel Externo (vistas), Nivel Conceptual (esquema lógico global) y Nivel Interno (almacenamiento en bytes)."
      },
      {
        file: "assets/clases_infographics/clase1_p05.png",
        title: "Componentes del Motor de Base de Datos",
        caption: "Gestor de Almacenamiento (Storage Engine) y Procesador de Consultas (DDL Interpreter + DML Compiler)."
      },
      {
        file: "assets/clases_infographics/clase1_p08.png",
        title: "Independencia de Datos (Lógica y Física)",
        caption: "Inmunidad de las aplicaciones frente a cambios en la estructura física del disco o índices."
      },
      {
        file: "assets/clases_infographics/clase1_p10.png",
        title: "Sistemas OLTP vs OLAP",
        caption: "OLTP: Transacciones atómicas, rápidas y del día a día. OLAP: Análisis histórico y Data Warehouses."
      }
    ],
    sections: [
      {
        subtitle: "1. ¿Qué es un DBMS y qué problemas resuelve?",
        content: `Un <strong>DBMS (DataBase Management System)</strong> es un conjunto de software especializado que gestiona colecciones estructuradas de datos junto a sus metadatos (datos que describen datos).<br><br>
        <strong>Ventajas clave frente a los sistemas de archivos tradicionales:</strong>
        <ul class="grimoire-bullets">
          <li><strong>Control centralizado:</strong> Evita que cada aplicación tenga su propio archivo aislado.</li>
          <li><strong>Reducción drástica de la redundancia:</strong> Los datos se almacenan una sola vez.</li>
          <li><strong>Eliminación de inconsistencias:</strong> La inconsistencia ocurre cuando el mismo dato está duplicado en múltiples lugares y sus valores no coinciden tras una actualización.</li>
          <li><strong>Compartición segura:</strong> Múltiples usuarios y procesos acceden concurrentemente sin interferencias destructivas.</li>
        </ul>`
      },
      {
        subtitle: "2. La Arquitectura ANSI/SPARC de 3 Niveles",
        content: `La arquitectura estándar define tres niveles de abstracción para garantizar la independencia de los datos:
        <ul class="grimoire-bullets">
          <li><strong>Nivel Externo (Vistas de Usuario):</strong> El más cercano a los usuarios finales. Presenta vistas personalizadas y filtradas (ej. la vista de RRHH solo ve legajos, mientras Tesorería ve cuentas bancarias).</li>
          <li><strong>Nivel Conceptual (Lógico Global):</strong> <em>Único para toda la organización</em>. Modela la estructura lógica completa (entidades, atributos, relaciones y restricciones) sin importar qué hardware se utilice.</li>
          <li><strong>Nivel Interno (Físico):</strong> Se ocupa del almacenamiento real en bloques, cilindros de disco, ordenamiento físico de bytes y punteros.</li>
        </ul>`
      },
      {
        subtitle: "3. OLTP vs OLAP: Dos Mundos de Bases de Datos",
        content: `
        <table class="grimoire-comparison-table">
          <thead>
            <tr>
              <th>Característica</th>
              <th>OLTP (On-Line Transaction Processing)</th>
              <th>OLAP (On-Line Analytical Processing)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Objetivo</strong></td>
              <td>Operaciones del día a día (ventas, transferencias, altas).</td>
              <td>Análisis estratégico, reportes directivos y Data Warehouse.</td>
            </tr>
            <tr>
              <td><strong>Tipo de Operaciones</strong></td>
              <td>Lecturas y escrituras atómicas (CRUD), cortas y ultrarrápidas.</td>
              <td>Consultas complejas sobre millones de registros históricos.</td>
            </tr>
            <tr>
              <td><strong>Nivel de Detalle</strong></td>
              <td>Datos actuales y altamente detallados.</td>
              <td>Datos consolidados, históricos y resumidos.</td>
            </tr>
          </tbody>
        </table>`
      }
    ],
    takeaway: "💡 Clave de Examen: La inconsistencia surge de la redundancia no controlada. El nivel conceptual en ANSI/SPARC es ÚNICO y define la lógica global de las entidades."
  },
  {
    id: "clase2",
    unit: "Unidad 1",
    badge: "Clase 02",
    title: "Estructura de Tablas, Tipos de Datos & Búsquedas Simples (DQL)",
    pdfFile: "BDD/Clase 2/Mastering_SQL_Queries.pdf",
    summary: "Estructura tabular, familias SQL (DDL, DML, DQL), funciones de agregación, filtros WHERE, DISTINCT y ordenamiento con ORDER BY.",
    slides: [
      {
        file: "assets/clases_infographics/clase2_p02.png",
        title: "Anatomía Estructural de una Tabla",
        caption: "Tablas (Entidades), Columnas (Atributos/Tipos) y Filas (Tuplas/Instancias de datos)."
      },
      {
        file: "assets/clases_infographics/clase2_p04.png",
        title: "Tipos de Datos SQL Fundamentales",
        caption: "INT, DECIMAL(p,s), VARCHAR(n), CHAR(n), DATE y BOOLEAN."
      },
      {
        file: "assets/clases_infographics/clase2_p06.png",
        title: "Las Familias del Lenguaje SQL",
        caption: "DDL (Estructuras: CREATE, ALTER, DROP), DML (Datos: INSERT, UPDATE, DELETE) y DQL (Consultas: SELECT)."
      },
      {
        file: "assets/clases_infographics/clase2_p08.png",
        title: "Funciones de Agregación en SQL",
        caption: "COUNT(*), AVG(), SUM(), MAX(), MIN() y su comportamiento con nulos."
      },
      {
        file: "assets/clases_infographics/clase2_p12.png",
        title: "Filtros con WHERE y Operadores de Rango",
        caption: "Comparadores (=, <>, <, >), BETWEEN ... AND ..., LIKE y operadores lógicos."
      }
    ],
    sections: [
      {
        subtitle: "1. Familias de Comandos en el Ecosistema SQL",
        content: `SQL se divide en 3 ramas principales:
        <ul class="grimoire-bullets">
          <li><strong>DDL (Data Definition Language):</strong> Define o altera la estructura de la base de datos (<code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>).</li>
          <li><strong>DML (Data Manipulation Language):</strong> Inserta, modifica o borra datos dentro de las tablas (<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>).</li>
          <li><strong>DQL (Data Query Language):</strong> Consulta y recupera información (<code>SELECT</code>).</li>
        </ul>`
      },
      {
        subtitle: "2. Funciones de Agregación",
        content: `Las funciones de agregación procesan múltiples tuplas y devuelven un único valor de resumen:
        <ul class="grimoire-bullets">
          <li><code>COUNT(*)</code>: Cuenta la <em>cantidad total de registros</em> de la consulta, incluyendo valores nulos.</li>
          <li><code>COUNT(columna)</code>: Cuenta registros con valor informado (no nulo) en esa columna.</li>
          <li><code>AVG(columna)</code>: Calcula el promedio matemático sobre columnas numéricas.</li>
          <li><code>SUM(columna)</code>: Acumula la sumatoria de valores numéricos.</li>
          <li><code>MAX(columna)</code> / <code>MIN(columna)</code>: Obtiene el valor tope o mínimo.</li>
        </ul>`
      },
      {
        subtitle: "3. Cláusulas DQL Esenciales: WHERE, ORDER BY, DISTINCT",
        content: `
        <ul class="grimoire-bullets">
          <li><code>SELECT DISTINCT columna</code>: Filtra tuplas duplicadas retornando valores unívocos.</li>
          <li><code>WHERE condicion</code>: Filtra tuplas individuales antes de cualquier procesamiento.</li>
          <li><code>ORDER BY col ASC/DESC</code>: Ordena el resultado de la consulta. Si no se especifica, por defecto es <code>ASC</code>.</li>
          <li><code>LIMIT n OFFSET m</code>: <code>LIMIT</code> restringe la cantidad de filas y <code>OFFSET</code> salta <em>m</em> registros para paginación.</li>
        </ul>`
      }
    ],
    takeaway: "💡 Clave de Examen: COUNT(*) incluye nulos. BETWEEN min AND max es siempre INCLUSIVO. ORDER BY ordena los resultados y DISTINCT suprime duplicados."
  },
  {
    id: "clase3",
    unit: "Unidad 2 y 3",
    badge: "Clase 03",
    title: "Modelos Jerárquico, Red & Relacional. Joins y Agrupamientos",
    pdfFile: "BDD/Clase 3/Data_Architecture_and_Querying.pdf",
    summary: "Evolución de modelos de datos (Jerárquico, Red, Relacional, OODBMS), cardinalidad (1-1, 1-N, N-M), INNER JOIN y agrupación con GROUP BY / HAVING.",
    slides: [
      {
        file: "assets/clases_infographics/clase3_p02.png",
        title: "El Modelo Jerárquico (Árbol Invertido)",
        caption: "Estructura 1-N rígida: cada registro hijo tiene estrictamente un único padre."
      },
      {
        file: "assets/clases_infographics/clase3_p04.png",
        title: "El Modelo de Red (CODASYL)",
        caption: "Estructura en grafo donde un nodo hijo puede tener múltiples nodos padres."
      },
      {
        file: "assets/clases_infographics/clase3_p06.png",
        title: "El Modelo Relacional & Tablas",
        caption: "Desacopla almacenamiento físico; relaciones construidas a través de claves foráneas."
      },
      {
        file: "assets/clases_infographics/clase3_p08.png",
        title: "Resolución de Relaciones Muchos a Muchos (N-M)",
        caption: "Uso de tabla asociativa/intermedia con clave foránea compuesta."
      },
      {
        file: "assets/clases_infographics/clase3_p10.png",
        title: "Agrupamientos: GROUP BY vs HAVING",
        caption: "WHERE filtra tuplas antes de agrupar; HAVING filtra grupos tras aplicar agregaciones."
      },
      {
        file: "assets/clases_infographics/clase3_p12.png",
        title: "INNER JOIN en Acción",
        caption: "Combinación estricta de tablas basada en la coincidencia de claves (ON E.id = D.id)."
      }
    ],
    sections: [
      {
        subtitle: "1. Comparación de Modelos Tradicionales",
        content: `
        <ul class="grimoire-bullets">
          <li><strong>Modelo Jerárquico:</strong> Los datos se organizan como un árbol de arriba hacia abajo. Las relaciones son <em>unidireccionales 1-N</em>: cada registro hijo tiene exactamente un único padre. Es ineficiente para modelar relaciones N-M.</li>
          <li><strong>Modelo de Red:</strong> Permite grafos multidireccionales donde un hijo puede tener múltiples padres (desarrollado por CODASYL).</li>
          <li><strong>Modelo Orientado a Objetos (OODBMS):</strong> Eficiente para encontrar elementos únicos y resolver relaciones complejas N-M mediante punteros directos e identidad de objeto (OID), sin requerir JOINs costosos.</li>
          <li><strong>Modelo Relacional:</strong> Basa su potencia en el Álgebra Relacional: la información se percibe como tablas (relaciones) y los operadores producen siempre nuevas relaciones conceptuales.</li>
        </ul>`
      },
      {
        subtitle: "2. Cardinalidad y Tablas Intermedias",
        content: `
        <ul class="grimoire-bullets">
          <li><strong>1 a 1 (1-1):</strong> Un registro de A se asocia con máximo uno de B. Poco común; se usa para seguridad o evitar columnas con exceso de NULL.</li>
          <li><strong>1 a Muchos (1-N):</strong> Un registro de A se asocia con muchos de B, pero cada registro de B pertenece únicamente a uno de A. La PK de A viaja a B como Foreign Key (FK).</li>
          <li><strong>Muchos a Muchos (N-M):</strong> <em>No se puede modelar directamente en tablas relacionales</em>. Se resuelve creando una <strong>tabla asociativa o intermedia</strong> que descompone la relación en dos relaciones 1-N y proporciona acceso único a cada instancia.</li>
        </ul>`
      },
      {
        subtitle: "3. Agrupamientos: La Regla de Oro GROUP BY y HAVING",
        content: `
        <div class="grimoire-rule-box">
          <strong>⚡ Regla Fundamental de Examen:</strong><br>
          • <code>WHERE</code>: Filtra filas individuales <em>ANTES</em> de agrupar. No puede recibir funciones de agregación (ej. es inválido escribir <code>WHERE AVG(salario) > 50000</code>).<br>
          • <code>HAVING</code>: Filtra los grupos resultantes <em>DESPUÉS</em> de agrupar y admite funciones de agregación (ej. <code>GROUP BY id_depto HAVING AVG(salario) > 50000</code>).
        </div>`
      }
    ],
    takeaway: "💡 Clave de Examen: En el modelo jerárquico el hijo tiene un único padre. Las relaciones N-M se resuelven con tabla intermedia. HAVING filtra grupos basados en funciones de agregación."
  },
  {
    id: "clase4",
    unit: "Unidad 4",
    badge: "Clase 04",
    title: "Manipulación de Datos (DML), Subconsultas e Índices B-Tree",
    pdfFile: "BDD/Clase 4/Data_Manipulation_and_Subqueries.pdf",
    summary: "Comandos DML (INSERT, UPDATE, DELETE), subconsultas escalares y de lista, estructuras de índices (B-Tree, GiST, GIN) y el costo DML en índices.",
    slides: [
      {
        file: "assets/clases_infographics/clase4_p06.png",
        title: "Las 4 Familias del SQL",
        caption: "DDL para estructuras, DML para datos y DQL para consultas."
      },
      {
        file: "assets/clases_infographics/clase4_p08.png",
        title: "Sintaxis de INSERT INTO (Simple y en Lote)",
        caption: "Inserción de registros únicos o múltiples tuplas en una sola transacción."
      },
      {
        file: "assets/clases_infographics/clase4_p09.png",
        title: "Modificación de Datos con UPDATE",
        caption: "UPDATE tabla SET col = val WHERE condicion. ¡Cuidado: sin WHERE modifica toda la tabla!"
      },
      {
        file: "assets/clases_infographics/clase4_p10.png",
        title: "Eliminación con DELETE vs DROP",
        caption: "DELETE borra filas; DROP destruye la tabla entera y sus metadatos."
      },
      {
        file: "assets/clases_infographics/clase4_p11.png",
        title: "Mecánica de Subconsultas (Anidación SQL)",
        caption: "Consulta interna se ejecuta primero y pasa su resultado a la consulta externa."
      },
      {
        file: "assets/clases_infographics/clase4_p13.png",
        title: "Flujo de Ejecución de una Subconsulta",
        caption: "Ejemplo: SELECT * FROM empleados WHERE salario > (SELECT AVG(salario) FROM empleados)."
      }
    ],
    sections: [
      {
        subtitle: "1. Manipulación de Datos (DML)",
        content: `
        <ul class="grimoire-bullets">
          <li><code>INSERT INTO tabla (c1, c2) VALUES (v1, v2);</code>: Crea nuevos registros.</li>
          <li><code>UPDATE tabla SET c1 = v1 WHERE condicion;</code>: Modifica tuplas existentes. La cláusula <code>WHERE</code> es crítica para no alterar toda la tabla por error.</li>
          <li><code>DELETE FROM tabla WHERE condicion;</code>: Elimina tuplas específicas.</li>
          <li><code>DROP TABLE tabla;</code>: Comando DDL que <strong>destruye la estructura</strong>, definiciones, índices y todos los datos permanentemente.</li>
        </ul>`
      },
      {
        subtitle: "2. Tipos de Índices: B-Tree, GiST, GIN y Hash",
        content: `Los índices son estructuras de datos que aceleran las consultas (SELECT) evitando escaneos secuenciales (Full Table Scan):
        <ul class="grimoire-bullets">
          <li><strong>B-Tree (Balanced Tree):</strong> El índice estándar por defecto. Estructura balanceada ideal para valores únicos, ordenamientos y búsquedas por rango (<code>=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>BETWEEN</code>).</li>
          <li><strong>GiST (Generalized Search Tree):</strong> Estructura extensible ideal para datos complejos: geometrías/GIS, polígonos, rangos temporales y arrays.</li>
          <li><strong>GIN (Generalized Inverted Index):</strong> Óptimo para columnas con muchos duplicados, documentos JSON y búsqueda de texto completo.</li>
          <li><strong>Hash Index:</strong> Solo sirve para comparaciones de igualdad exacta (<code>=</code>); no soporta rangos.</li>
        </ul>`
      },
      {
        subtitle: "3. ¡El Costo DML en los Índices! (Concepto Clave)",
        content: `
        <div class="grimoire-rule-box" style="border-left-color: var(--neon-red);">
          <strong>⚠️ Impacto de DML en Índices:</strong><br>
          Cada operación <code>INSERT</code>, <code>UPDATE</code> o <code>DELETE</code> impacta a todos los índices definidos sobre la tabla. El motor debe reorganizar nodos, rebalancear el árbol y realizar divisiones de página (<em>Page Splits</em>).<br>
          <strong>Conclusión:</strong> Demasiados índices aceleran las lecturas (SELECT) pero penalizan gravemente la velocidad de escritura y actualización.
        </div>`
      }
    ],
    takeaway: "💡 Clave de Examen: B-Tree es el índice por defecto para búsquedas por rango. GIST es para datos complejos/geometrías. Las operaciones DML penalizan el rendimiento si hay exceso de índices."
  },
  {
    id: "clase5",
    unit: "Unidad 4",
    badge: "Clase 05",
    title: "Arquitectura Relacional, Claves, Integridad & Diagrama DER",
    pdfFile: "BDD/Clase 5/Relational_Data_Architecture.pdf",
    summary: "Claves primarias, foráneas y únicas, restricciones (Constraints), integridad referencial y modelado Entidad-Relación con notación Crow's Foot.",
    slides: [
      {
        file: "assets/clases_infographics/clase5_p02.png",
        title: "Niveles de Abstracción ANSI/SPARC",
        caption: "Externo (Vistas), Conceptual (Tablas relacionales) e Interno (Almacenamiento)."
      },
      {
        file: "assets/clases_infographics/clase5_p04.png",
        title: "Notación de Pata de Cuervo (Crow's Foot)",
        caption: "Simbología de cardinalidad en diagramas DER: 1:1, 1:N y N:M."
      },
      {
        file: "assets/clases_infographics/clase5_p08.png",
        title: "Matriz Estructural de Claves (PK vs UK vs FK)",
        caption: "Primary Key (no nulo, único), Unique Key (único, admite nulo) y Foreign Key (referencia)."
      },
      {
        file: "assets/clases_infographics/clase5_p09.png",
        title: "Integridad Referencial en Acción",
        caption: "Garantiza que una clave foránea apunte siempre a una tupla existente en la tabla padre."
      },
      {
        file: "assets/clases_infographics/clase5_p12.png",
        title: "Arsenal de Restricciones (Constraints)",
        caption: "NOT NULL, UNIQUE, PRIMARY KEY, CHECK y REFERENCES."
      },
      {
        file: "assets/clases_infographics/clase5_p15.png",
        title: "La Consulta Maestra: Anatomía del SELECT Completo",
        caption: "SELECT -> FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT."
      }
    ],
    sections: [
      {
        subtitle: "1. Matriz de Claves y Restricciones",
        content: `
        <table class="grimoire-comparison-table">
          <thead>
            <tr>
              <th>Tipo de Clave</th>
              <th>Propósito</th>
              <th>¿Admite NULL?</th>
              <th>¿Admite Duplicados?</th>
              <th>Límite por Tabla</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Primary Key (PK)</strong></td>
              <td>Identificador único maestro de la tupla.</td>
              <td>❌ NO</td>
              <td>❌ NO</td>
              <td>1 por tabla</td>
            </tr>
            <tr>
              <td><strong>Unique Key (UK)</strong></td>
              <td>Garantiza unicidad en columnas secundarias (ej. DNI, email).</td>
              <td>✔ SÍ (un único NULL)</td>
              <td>❌ NO</td>
              <td>Múltiples</td>
            </tr>
            <tr>
              <td><strong>Foreign Key (FK)</strong></td>
              <td>Enlaza con la PK de otra tabla garantizando Integridad Referencial.</td>
              <td>✔ SÍ (si es opcional)</td>
              <td>✔ SÍ (en 1-N)</td>
              <td>Múltiples</td>
            </tr>
          </tbody>
        </table>`
      },
      {
        subtitle: "2. Constraints (Restricciones de Integridad)",
        content: `
        <ul class="grimoire-bullets">
          <li><code>NOT NULL</code>: El campo es estrictamente obligatorio.</li>
          <li><code>UNIQUE</code>: Prohíbe valores repetidos entre registros.</li>
          <li><code>PRIMARY KEY</code>: Fusión de <code>NOT NULL + UNIQUE</code>.</li>
          <li><code>CHECK (condicion)</code>: Valida reglas lógicas personalizadas (ej. <code>CHECK (precio > 0)</code>).</li>
          <li><code>REFERENCES tabla(col)</code>: Define la clave foránea hacia la tabla padre.</li>
          <li><code>ON DELETE CASCADE</code>: Si se borra el padre, se borran automáticamente sus hijos vinculados.</li>
        </ul>`
      },
      {
        subtitle: "3. Anatomía de la Consulta SQL Maestra",
        content: `El orden lógico de ejecución de una consulta SQL completa es:
        <div class="code-blank-block" style="font-size: 13.5px; line-height: 1.8;">
SELECT columnas, AVG(precio)<br>
FROM tabla_a<br>
INNER JOIN tabla_b ON tabla_a.id = tabla_b.id_fk<br>
WHERE condicion_fila<br>
GROUP BY tabla_a.categoria<br>
HAVING COUNT(*) > 5<br>
ORDER BY AVG(precio) DESC<br>
LIMIT 10 OFFSET 0;
        </div>`
      }
    ],
    takeaway: "💡 Clave de Examen: La PK no admite NULL y es única. La FK impone Integridad Referencial. El orden de filtrado es: WHERE (filas) -> GROUP BY -> HAVING (grupos) -> ORDER BY."
  }
];

class GrimoireViewer {
  constructor() {
    this.containerEl = document.getElementById('grimoire-cards-container');
    this.activeChapter = "clase1";
    this.render();
  }

  render() {
    if (!this.containerEl) return;

    let html = `
      <!-- Chapter Selector Pills -->
      <div class="grimoire-nav-pills">
        ${GRIMOIRE_CHAPTERS.map(ch => `
          <button class="grimoire-pill-btn ${ch.id === this.activeChapter ? 'active' : ''}" data-chapter-id="${ch.id}">
            <span>${ch.badge}</span>
          </button>
        `).join('')}
      </div>
    `;

    const ch = GRIMOIRE_CHAPTERS.find(c => c.id === this.activeChapter) || GRIMOIRE_CHAPTERS[0];

    html += `
      <article class="grimoire-active-article">
        <!-- Chapter Header -->
        <div class="grimoire-chapter-hero">
          <div class="grimoire-chapter-meta">
            <span class="class-badge">${ch.badge}</span>
            <span class="class-unit-tag">${ch.unit}</span>
            <span class="grimoire-source-tag">📚 Fuente Oficial: ${ch.pdfFile.split('/').pop()}</span>
          </div>
          <h3 class="grimoire-chapter-heading">${ch.title}</h3>
          <p class="grimoire-chapter-summary">${ch.summary}</p>
        </div>

        <!-- Infographics Visual Carousel / Gallery -->
        <div class="grimoire-infographics-section">
          <div class="grimoire-section-header">
            <h4 class="grimoire-section-title">🖼️ INFOGRAFÍAS Y DIAGRAMAS CONCEPTUALES DE LA CLASE</h4>
            <span style="font-size: 11px; color: var(--text-muted);">(Haz clic en cualquier imagen para verla en pantalla completa)</span>
          </div>
          <div class="grimoire-slides-gallery">
            ${ch.slides.map((s, idx) => `
              <div class="grimoire-slide-card" data-img-src="${s.file}" data-img-title="${s.title}" data-img-caption="${s.caption}">
                <div class="grimoire-slide-thumb-wrapper">
                  <img src="${s.file}" alt="${s.title}" class="grimoire-slide-img" loading="lazy">
                  <span class="slide-zoom-badge">🔍 AMPLIAR</span>
                </div>
                <div class="grimoire-slide-info">
                  <h5 class="slide-title">${s.title}</h5>
                  <p class="slide-caption">${s.caption}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Deep Theory Sections -->
        <div class="grimoire-sections-list">
          ${ch.sections.map(sec => `
            <div class="grimoire-section-block">
              <h4 class="grimoire-block-title">${sec.subtitle}</h4>
              <div class="grimoire-block-content">${sec.content}</div>
            </div>
          `).join('')}
        </div>

        <!-- Exam Tip Takeaway -->
        <div class="class-key-takeaway" style="margin-top: 24px;">
          ${ch.takeaway}
        </div>
      </article>
    `;

    this.containerEl.innerHTML = html;
    this.bindEvents();
  }

  bindEvents() {
    // Tab switching
    const pills = this.containerEl.querySelectorAll('.grimoire-pill-btn');
    pills.forEach(p => {
      p.addEventListener('click', () => {
        this.activeChapter = p.getAttribute('data-chapter-id');
        window.retroAudio.playBlip(600, 0.04);
        this.render();
      });
    });

    // Lightbox click on slides
    const slideCards = this.containerEl.querySelectorAll('.grimoire-slide-card');
    slideCards.forEach(card => {
      card.addEventListener('click', () => {
        const src = card.getAttribute('data-img-src');
        const title = card.getAttribute('data-img-title');
        const caption = card.getAttribute('data-img-caption');
        window.openInfographicLightbox(src, title, caption);
        window.retroAudio.playBlip(700, 0.04);
      });
    });
  }
}

// Lightbox helper
window.openInfographicLightbox = function(src, title, caption) {
  const modal = document.getElementById('modal-infographic-lightbox');
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const captionEl = document.getElementById('lightbox-caption');

  if (modal && imgEl && titleEl && captionEl) {
    imgEl.src = src;
    titleEl.textContent = title;
    captionEl.textContent = caption;
    modal.classList.add('active');
  }
};

window.GrimoireViewer = GrimoireViewer;
