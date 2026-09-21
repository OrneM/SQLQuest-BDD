// Antigravity BDD: Grimoire / Biblioteca de Teoría de Clases 1 a 5

const GRIMOIRE_DATA = [
  {
    id: "clase1",
    unit: "Unidad 1",
    badge: "Clase 01",
    title: "Introducción a las Bases de Datos & Arquitectura DBMS",
    topics: [
      "¿Qué es un DBMS?: Software gestor que almacena, recupera y manipula colecciones de datos interrelacionados con metadatos.",
      "Componentes principales: Gestor de almacenamiento y Procesador de consultas (intérprete DDL + compilador DML).",
      "Ventajas vs Archivos: Control centralizado, reducción de redundancia, eliminación de inconsistencias y compartición de datos.",
      "Independencia de datos: Inmunidad de las aplicaciones a cambios en la representación física (hardware/índices) y lógica.",
      "Sistemas OLTP vs OLAP: OLTP maneja transacciones atómicas de alta frecuencia y respuesta inmediata; OLAP consolida históricos para análisis."
    ],
    takeaway: "💡 Clave de examen: La inconsistencia surge cuando un dato duplicado se modifica en un sitio y no en los demás. La arquitectura ANSI/SPARC divide en 3 niveles: Interno, Conceptual y Externo."
  },
  {
    id: "clase2",
    unit: "Unidad 1",
    badge: "Clase 02",
    title: "Estructura de Tablas, Tipos de Datos & Búsquedas Simples",
    topics: [
      "Estructura relacional: Tablas (relaciones), Columnas/Campos (atributos con tipo de dato) y Filas/Registros (tuplas).",
      "Familias de comandos: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT).",
      "Tipos de datos: INT, DECIMAL(p,s), VARCHAR(n), DATE, BOOLEAN.",
      "Funciones de agregación: COUNT(*) cuenta todas las filas, AVG() promedio, SUM() total acumulado, MAX() y MIN().",
      "Filtros y orden: Cláusula WHERE para condiciones lógicas, ORDER BY ASC/DESC, DISTINCT para valores únicos."
    ],
    takeaway: "💡 Clave de examen: COUNT(*) cuenta registros totales incluyendo filas con nulos; las funciones de agregación devuelven un único valor resumen a partir de un grupo de tuplas."
  },
  {
    id: "clase3",
    unit: "Unidad 2 y 3",
    badge: "Clase 03",
    title: "Modelos Jerárquico, Red, Relacional & Consultas Avanzadas",
    topics: [
      "Modelo Jerárquico: Estructura en árbol 1-N estricta (hijo con un único padre). Dificulta relaciones N-M.",
      "Modelo de Red: Permite grafos donde un hijo puede tener múltiples padres (desarrollado por CODASYL).",
      "Modelo Relacional: Percibe la información como tablas de datos tabulares conectados por claves.",
      "Cardinalidad: 1 a 1, 1 a N (un registro asociado a muchos, pero no al revés), N a M (resuelta con tabla asociativa/intermedia).",
      "Agrupamientos: GROUP BY agrupa filas por atributos comunes; HAVING filtra los grupos según condiciones agregadas."
    ],
    takeaway: "💡 Clave de examen: WHERE filtra filas individuales ANTES de agrupar; HAVING filtra grupos DESPUÉS de aplicar GROUP BY y agregaciones."
  },
  {
    id: "clase4",
    unit: "Unidad 4",
    badge: "Clase 04",
    title: "Manipulación de Datos (DML), Subconsultas e Índices",
    topics: [
      "DML en acción: INSERT INTO para nuevas tuplas, UPDATE ... SET ... WHERE para modificar, DELETE FROM ... WHERE para borrar.",
      "DDL destructivo: DROP TABLE borra irreversiblemente una tabla; DROP DATABASE borra la base de datos.",
      "Subconsultas: Consultas anidadas en WHERE o HAVING. No correlacionadas (se ejecutan 1 vez) vs correlacionadas (por cada fila).",
      "Estructuras de Índices: B-Tree (balanceado por defecto, ideal para rangos = < > BETWEEN), GIST (espacial y colecciones complejas), Hash, GIN, BRIN.",
      "Penalización DML: Cada INSERT/UPDATE/DELETE en una tabla debe actualizar todos sus índices (rebalanceo y page splits en B-Tree)."
    ],
    takeaway: "💡 Clave de examen: ¡Costo DML! Muchos índices aceleran las lecturas (SELECT) pero degradan severamente el rendimiento de escrituras (INSERT, UPDATE, DELETE)."
  },
  {
    id: "clase5",
    unit: "Unidad 4",
    badge: "Clase 05",
    title: "Modelo Relacional, Integridad Referencial & Diagrama Entidad-Relación",
    topics: [
      "Claves: Clave Primaria (Primary Key - PK) identifica de forma unívoca a la tupla y es NOT NULL; Clave Foránea (Foreign Key - FK) referencia a la PK de otra relación.",
      "Integridad Referencial: Una FK no puede contener un valor que no exista en la PK de la tabla referenciada (o NULL si es opcional).",
      "Diagramas ER / DER: Entidades (rectángulos), Atributos (óvalos) y Relaciones (rombos/conectores).",
      "Reglas de Transformación a Tablas: En relaciones 1-N, la PK del lado 1 pasa como FK al lado N. En N-M, se genera una tabla intermedia con FK compuesta.",
      "Acciones en Cascada: ON DELETE CASCADE / ON UPDATE CASCADE propagan modificaciones automáticamente."
    ],
    takeaway: "💡 Clave de examen: La arquitectura ANSI/SPARC posee 3 niveles: Externo (vistas de usuario), Conceptual (modelo lógico global) e Interno (almacenamiento físico en bytes)."
  }
];

class GrimoireViewer {
  constructor() {
    this.containerEl = document.getElementById('grimoire-cards-container');
    this.render();
  }

  render() {
    if (!this.containerEl) return;
    let html = '';

    GRIMOIRE_DATA.forEach(item => {
      html += `
        <div class="class-card">
          <div class="class-card-header">
            <span class="class-badge">${item.badge}</span>
            <span class="class-unit-tag">${item.unit}</span>
          </div>
          <h4 class="class-title">${item.title}</h4>
          <ul class="class-topics-list">
            ${item.topics.map(t => `<li>${t}</li>`).join('')}
          </ul>
          <div class="class-key-takeaway">${item.takeaway}</div>
        </div>
      `;
    });

    this.containerEl.innerHTML = html;
  }
}

window.GrimoireViewer = GrimoireViewer;
