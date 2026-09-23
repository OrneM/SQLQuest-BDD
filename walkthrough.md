# Walkthrough: Modos de Juego (Aprendiz vs Warrior), Pistas del Oráculo y Corrección de Vidas

Se han implementado las mecánicas de selección de modos de juego, el sistema de pistas pedagógicas y la corrección estricta del flujo de vidas y Game Over.

---

## 🎮 1. Dos Modos de Juego en la Práctica de Examen

En la pantalla inicial de bienvenida de la Práctica de Examen se presentan dos tarjetas de selección de modo:

### 🌱 **Modo Aprendiz (Estudio y Comprensión Conceptual)**
- 💚 **Vidas Ilimitadas**: No existe castigo por fallar; no se descuentan corazones ni hay Game Over. En el HUD se muestra `❤️ ∞ ILIMITADAS`.
- ⏱️ **Tiempo Libre / Ilimitado**: Sin temporizador regresivo que te apure (`⏱️ 00:15 (MODO APRENDIZ: SIN LÍMITE)`).
- 💡 **Pistas del Oráculo Activas**: Botón `💡 PEDIR PISTA DEL ORÁCULO` disponible en cada pregunta que despliega un consejo o mnemotecnia conceptual antes de responder.
- 📖 **Explicaciones e Infografías**: Al responder (sea correcto o incorrecto), se muestra la explicación didáctica y la lámina oficial de la materia para aprender el concepto de inmediato.

### ⚔️ **Modo Warrior (Simulacro Oficial de Parcial Hardcore)**
- ❤️ **3 Vidas Estrictas**: Cada error resta un corazón (`❤️❤️❤️` ➔ `❤️❤️🖤` ➔ `❤️🖤🖤` ➔ `🖤🖤🖤`).
- ⏳ **Límite de 45 Minutos**: Temporizador de cuenta regresiva oficial con alerta visual roja en los últimos 5 minutos.
- 🔒 **Sin Pistas**: El botón de pistas aparece bloqueado (`🔒 PISTAS BLOQUEADAS (MODO WARRIOR)`).
- 🔥 **Multiplicador de Racha y XP x2**: Bonificación especial para estudiantes que buscan la excelencia.

---

## 🛑 2. Corrección del Bug de Vidas y Bloqueo de Game Over
- **Bloqueo Inmediato**: En Modo Warrior, al perder el 3er corazón (`lives === 0`):
  - `this.isRunning` se establece en `false` de inmediato.
  - Se detiene el temporizador (`clearInterval`).
  - Se oculta el botón `SIGUIENTE PREGUNTA` y se deshabilita `VALIDAR RESPUESTA`.
  - Se deshabilitan todas las opciones e inputs para impedir que el usuario continúe respondiendo tras perder.
  - Se despliega el modal de **Game Over** tras 800ms con estadísticas y opción de reiniciar o volver al menú.
- **Botón de Salida Grácil**: Se agregó el botón `🏳️ SALIR AL MENÚ DE MODOS` en la barra de acciones para abandonar o cambiar de modo en cualquier momento sin bugs.

---

## 🔮 3. Sistema de Pistas Pedagógicas ("Pistas del Oráculo")
- Se redactaron e integraron pistas conceptuales personalizadas para **todas las 36 preguntas** del banco de datos (`js/questions-data.js`).
- También se integró el botón de pistas en el modo **Boss Fight (Revancha)** para asistir al estudiante en los conceptos donde tuvo dificultades previas.

---

## 🚀 4. Despliegue
- **GitHub**: `https://github.com/OrneM/SQLQuest-BDD` (Commit: `f5eec85`)
- **Sitio en Vivo (Vercel)**: `https://sql-quest-bdd.vercel.app/`
