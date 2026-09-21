# ⚔️ SQL Quest: Bases de Datos I (Edición Retro 8-Bit)

Plataforma educativa interactiva y gamificada inspirada en videojuegos de aventuras clásicos de los años 80 (tipo *The Legend of Zelda* / *NES*), con simulación óptica de monitor CRT (scanlines), motor de base de datos en memoria (`sql.js`), simulacro de examen contrarreloj de 45 minutos, sistema de repaso espaciado con Boss Fight, animación visual del costo DML en árboles B-Tree y editor de diagramas DER en vivo con Mermaid.js.

---

## 🎮 Características y Módulos Principales

### 1. 🎨 Estética Retro 8-Bit & Chiptune Audio
- **Fuentes Pixeladas**: Integración de `'Press Start 2P'`, `'VT323'` y `'Share Tech Mono'`.
- **Filtro CRT Scanlines**: Líneas de barrido óptico y resplandor neón arcade (`crt-overlay` y `crt-vignette`).
- **Paleta Neón**: Verde terminal (`#39ff14`), cian arcade (`#00f0ff`), magenta neón (`#ff007f`), oro/moneda (`#ffd700`) y rubí (`#ff2a44`).
- **HUD Dinámico**: Indicador de Vidas (❤️❤️❤️), Puntos de Experiencia (XP), Contador de Racha de fuego (🔥) y botón de audio.
- **Sintetizador Web Audio API**: Sonidos 8-bit generados proceduralmente (Level Up / Secret chimes, Error buzz, Laser blips, DML Tree shake y Victory fanfare).

### 2. ⏳ Módulo "Time Attack" (Simulacro de Examen Oficial)
- **Banco de 25 preguntas reales** correspondientes al 100% del **Primer Parcial Oficial** y contenidos de las **Clases 1 a 5**.
- **Tipos de preguntas**: Opción múltiple, completar sentencias SQL, rellenar espacios en código y emparejamiento de conceptos.
- **Reloj estricto de 45 minutos**: Alerta visual cuando quedan menos de 5 minutos y pantalla de Game Over si el tiempo expira.
- **Feedback pedagógico inmediato**: Explicación detallada y cita de la diapositiva/clase correspondiente tras cada respuesta.
- **Persistencia de errores**: Registro automático de preguntas falladas en `localStorage` para el modo Revancha.

### 3. 💀 Módulo "Revancha / Boss Fight" (Repaso Espaciado & Muerte Súbita)
- Carga las preguntas falladas directamente de `localStorage`.
- Batalla en muerte súbita contra el **"Titán de las Inconsistencias / Dragón de Datos"**.
- Cada respuesta correcta resta HP al Boss y purga el error de la memoria local.
- Incluye modo de entrenamiento opcional cuando la mazmorra está purificada.

### 4. 💻 Sandbox "SQL Lab" (Motor en Memoria SQLite WebAssembly)
- Ejecución real en el navegador mediante `sql.js` (SQLite WASM).
- **Semilla Aleatoria Anti-Memorización**: Cada recarga o clic en *"Reiniciar con Semilla Aleatoria"* genera una variación procedimental en salarios, nombres, cargos y departamentos.
- **Explorador de Esquema**: Visualización en tiempo real de tablas (`Departamentos`, `Empleados`, `Modelos`, `Versiones`, `Sucursales`), tipos de datos, claves primarias [PK] y claves foráneas [FK].
- **Selector de Presets**: Ejercicios estructurados del temario oficial (Consultas simples, Joins, GROUP BY/HAVING, subconsultas, DML y el Caso Concesionaria Toyota de la Unidad 4).

### 5. 🌳 Animación "Costo DML" (Impacto en Árbol B-Tree)
- Al ejecutar con éxito operaciones que modifican datos (`INSERT`, `UPDATE`, `DELETE`), la aplicación dispara una animación pixel-art de un árbol de índices sacudiéndose violentamente y perdiendo hojas/páginas, acompañada de sonido chiptune y un cuadro de diálogo explicativo sobre la penalización por rebalanceo y divisiones de página (*Page Splits*) en índices B-Tree.

### 6. 📊 Motor de Diagramas DER en Vivo
- Integración de `Mermaid.js` en pantalla dividida (*Split-Screen*).
- **Editor a la izquierda**: Con plantillas precargadas (Empleados-Departamentos 1:N, Caso Toyota N:M, E-Commerce Clientes-Pedidos-Productos).
- **Visualizador a la derecha**: Diagrama SVG interactivo con filtros CSS de contraste y estética 8-bit.

### 7. 📜 Grimorio de Clases (Biblioteca de Teoría)
- Resumen interactivo de las **Clases 1 a 5** y **Unidades 1 a 4**:
  - **Clase 01**: Introducción a DBMS, Arquitectura ANSI/SPARC, Independencia de datos, OLTP vs OLAP.
  - **Clase 02**: Estructura de tablas, tipos de datos, comandos DDL/DML/DQL, funciones de agregación (`COUNT`, `AVG`, `SUM`, `MAX`, `MIN`), filtros y orden.
  - **Clase 03**: Modelos Jerárquico y de Red, Relaciones (1-1, 1-N, N-M), `GROUP BY` y `HAVING`.
  - **Clase 04**: DML profundo, Índices (B-Tree, GIST, GIN, Hash), costo DML y subconsultas.
  - **Clase 05**: Modelo Relacional, Integridad Referencial, Claves (PK, FK) y Diagramas Entidad-Relación (DER).

---

## 🚀 Cómo Ejecutar la Aplicación

Para abrir la aplicación en cualquier navegador:

1. **Opción 1: Servidor Local (Recomendado)**
   ```bash
   python3 -m http.server 8080
   ```
   Luego abre tu navegador en `http://localhost:8080/index.html`.

2. **Opción 2: Abrir directamente `index.html`**
   Puedes abrir el archivo `index.html` con cualquier navegador web moderno (Google Chrome, Firefox, Safari, Edge).
