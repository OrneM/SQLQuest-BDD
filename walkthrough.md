# Walkthrough: Métricas de Evolución & Scoring Histórico

Se ha diseñado e implementado el nuevo panel de **Métricas de Evolución & Scoring Histórico**, completamente integrado con la identidad visual y branding 8-bit retro de *SQL Quest*.

---

## 📈 1. Nuevo Módulo de Métricas y Analítica (`tab-analytics`)

Se agregó la pestaña de navegación **`📈 EVOLUCIÓN & MÉTRICAS`** en el menú superior con un dashboard de control académico integral:

### 🎴 4 Tarjetas de Métricas Clave (Matching de la referencia)
1. **Nota Promedio**: Calificación media de todos tus exámenes (`8.5 / 10`) con indicador de rango (`🌟 Nivel Promoción` / `⚔️ Aprobado` / `📖 En Entrenamiento`).
2. **Mejor Calificación**: Récord histórico más alto registrado con medalla dorada (`10.0 / 10`).
3. **Velocidad Promedio**: Tiempo medio invertido por pregunta en segundos (`19s / pregunta`).
4. **Evolución / Tendencia**: Comparativa porcentual de progreso respecto a intentos previos (`↗ +55%`) y contador total de simulacros realizados.

---

## 📉 2. Curva de Aprendizaje & Gráfico de Evolución
- **Gráfico de Líneas Canvas 2D Retro**: Trazo cian con resplandor neón (`glow effect`), línea de referencia dorada en el umbral de **Promoción (8.0)**, sombreado de área y puntos interactivos con la nota de cada intento cronológico.
- **Barras de Dominio por Clase**: Nivel de acierto y comprensión desglosado para las 5 clases temáticas de la materia.

---

## 📜 3. Historial de Intentos & Almacenamiento Local
- **Tabla Histórica de Sesiones**: Registra fecha y hora, modo de juego (🌱 Aprendiz vs ⚔️ Warrior), nota obtenida, cantidad de aciertos, tiempo total y etiqueta de estado (`🌟 PROMOCIÓN`, `⚔️ APROBADO`, `📖 REPASO`).
- **Botón `🗑️ Limpiar Historial`**: Permite reiniciar las estadísticas locales con cuadro de confirmación.
- **Mini Widget de Avance**: Integrado en la pantalla de bienvenida de **Time Attack** para ver el resumen de tu evolución antes de iniciar una nueva partida.

---

## 🚀 4. Despliegue
- **GitHub**: `https://github.com/OrneM/SQLQuest-BDD` (Commit: `2463d9a`)
- **Sitio en Vivo (Vercel)**: `https://sql-quest-bdd.vercel.app/`
