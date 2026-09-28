// Antigravity BDD: Blanca Companion & Motivational Inactivity System
// Inspired by Blanca, the user's beloved white cat with magic star wand.

class MichiCompanion {
  constructor() {
    this.inactivityLimitMs = 60 * 1000; // 1 minuto de inactividad
    this.inactivityTimer = null;
    this.bubbleDismissTimer = null;
    this.lastActivityTime = Date.now();
    this.isSpeaking = false;
    this.lastQuoteIndex = -1;

    // Base de datos de frases motivacionales y sabiduría SQL
    this.motivationalQuotes = [
      "¡Miau! 🌟 ¡Respira hondo, guerrera! Un <code>COMMIT</code> más y dominas el examen de BDD.",
      "✨ ¡No dejes que los <code>NULL</code> nublen tu camino! ¡Tú tienes la <code>PRIMARY KEY</code> del éxito!",
      "🐾 ¿Pensando en esa consulta? Recuerda: con calma y un buen <code>JOIN</code>, todo encaja a la perfección.",
      "💖 ¡Descansito de 1 minuto merecido! Pero vamos que el dragón de las bases de datos no se vence solo.",
      "🪄 ¡Abracadabra! Que la fuerza de las transacciones <code>ACID</code> te acompañe en cada ejercicio.",
      "⚡ ¡Los errores son solo <code>ROLLBACKs</code> para volver a intentarlo mejor y más sabia!",
      "😺 ¡Miau! ¿Sabías que un <code>INDEX</code> bien pensado acelera tus consultas? ¡Tú aceleras tu aprendizaje!",
      "🌈 ¡Ánimo, genia! Estás construyendo un conocimiento ultra sólido de SQL. ¡Sigue así!",
      "⭐ <code>SELECT * FROM Habilidades WHERE potencial = 'INFINITO';</code> → ¡Encontré 1 resultado: TÚ!",
      "🐾 Un paso a la vez: primero el <code>FROM</code>, luego el <code>WHERE</code> y después la victoria.",
      "💡 Si te trabas con alguna consulta, pedile una pista al Oráculo. ¡Estoy acá haciéndote hinchada!",
      "🔮 Mis bigotes mágicos presienten que vas a sacar una notaza en Bases de Datos. ¡Confía en vos!",
      "🌟 ¡Recordá que <code>WHERE</code> filtra filas y <code>HAVING</code> filtra grupos! Pequeño tip de Blanca.",
      "🐱 ¡Miau! Tómate un sorbito de agua, estira los hombros y seguimos conquistando la mazmorra.",
      "🚀 ¿Sabías que cada query que practicas hoy te acerca a ser una experta en backend y data? ¡Vamos con todo!",
      "✨ <code>INSERT INTO Futuro (exito, sabiduria) VALUES ('GARANTIZADO', 100);</code> ¡Miau!",
      "🐾 ¡Hasta los motores más potentes necesitan pausas de caché! Pero acá estoy para recordarte tu grandeza.",
      "⚔️ ¡Tu racha de estudio es más fuerte que cualquier bloqueo de base de datos! ¡Adelante!",
      "🪄 ¡Un toque de mi varita mágica y toda la sintaxis de <code>GROUP BY</code> se vuelve cristalina!",
      "💖 ¡Estoy muy orgullosa de todo el esfuerzo que le estás poniendo a estudiar! ¡No aflojes!"
    ];

    this.initDOM();
    this.bindEvents();
    this.resetInactivityTimer();
  }

  initDOM() {
    // Check if widget already exists
    if (document.getElementById('michi-companion-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'michi-companion-widget';
    widget.className = 'michi-companion-container';

    widget.innerHTML = `
      <!-- Speech Bubble Dialog Box -->
      <div id="michi-speech-bubble" class="michi-speech-bubble" style="display: none;">
        <div class="michi-bubble-header">
          <span class="michi-bubble-title">✨ BLANCA DICE:</span>
          <button id="michi-bubble-close" class="michi-bubble-close-btn" type="button" title="Cerrar mensaje">✖</button>
        </div>
        <div id="michi-bubble-text" class="michi-bubble-text"></div>
        <div class="michi-bubble-tail"></div>
      </div>

      <!-- Cat Avatar & Glowing Star Pedestal -->
      <div id="michi-avatar-btn" class="michi-avatar-wrapper" title="✨ ¡Haz clic en Blanca para recibir motivación o un tip SQL!" role="button" tabindex="0">
        <div class="michi-magic-aura"></div>
        <div class="michi-sparkles-container">
          <span class="michi-star s1">✦</span>
          <span class="michi-star s2">★</span>
          <span class="michi-star s3">✨</span>
          <span class="michi-star s4">✦</span>
        </div>
        <img src="assets/michi_magic_cutout.png" onerror="this.src='assets/michi_magic.png'" alt="Blanca - Tu compañera de estudio BDD" class="michi-sprite-img" id="michi-sprite">
        <div class="michi-name-badge">
          <span class="michi-paw">🐾</span> BLANCA
        </div>
      </div>
    `;

    document.body.appendChild(widget);

    this.containerEl = widget;
    this.bubbleEl = document.getElementById('michi-speech-bubble');
    this.bubbleTextEl = document.getElementById('michi-bubble-text');
    this.avatarBtnEl = document.getElementById('michi-avatar-btn');
    this.closeBtnEl = document.getElementById('michi-bubble-close');
    this.spriteEl = document.getElementById('michi-sprite');
  }

  bindEvents() {
    // Activity events across window to reset inactivity timer
    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'];
    let lastEventThrottle = 0;

    activityEvents.forEach(evt => {
      window.addEventListener(evt, () => {
        const now = Date.now();
        if (now - lastEventThrottle > 1000) {
          lastEventThrottle = now;
          this.handleUserActivity();
        }
      }, { passive: true });
    });

    // Click on Michi avatar
    if (this.avatarBtnEl) {
      this.avatarBtnEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.triggerCheer(e);
      });

      this.avatarBtnEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.triggerCheer(e);
        }
      });
    }

    // Close button on speech bubble
    if (this.closeBtnEl) {
      this.closeBtnEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.hideSpeechBubble();
      });
    }
  }

  handleUserActivity() {
    this.lastActivityTime = Date.now();
    this.resetInactivityTimer();
  }

  resetInactivityTimer() {
    if (this.inactivityTimer) clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(() => {
      this.triggerInactivitySpeech();
    }, this.inactivityLimitMs);
  }

  getRandomQuote() {
    let index = Math.floor(Math.random() * this.motivationalQuotes.length);
    if (index === this.lastQuoteIndex && this.motivationalQuotes.length > 1) {
      index = (index + 1) % this.motivationalQuotes.length;
    }
    this.lastQuoteIndex = index;
    return this.motivationalQuotes[index];
  }

  triggerInactivitySpeech() {
    const quote = this.getRandomQuote();
    this.speak(quote, true);
  }

  triggerCheer(e) {
    // Play meow and magic sparkle sound
    if (window.retroAudio) {
      if (typeof window.retroAudio.playMeow === 'function') {
        window.retroAudio.playMeow();
      }
      setTimeout(() => {
        if (typeof window.retroAudio.playMagicSparkle === 'function') {
          window.retroAudio.playMagicSparkle();
        }
      }, 150);
    }

    // Cheer animation on sprite
    if (this.avatarBtnEl) {
      this.avatarBtnEl.classList.remove('michi-cheer-anim');
      void this.avatarBtnEl.offsetWidth; // trigger reflow
      this.avatarBtnEl.classList.add('michi-cheer-anim');
    }

    // Spawn heart particles
    this.spawnHeartParticles(e);

    // Speak a fresh quote
    const quote = this.getRandomQuote();
    this.speak(quote, false);
  }

  spawnHeartParticles(e) {
    const rect = this.avatarBtnEl ? this.avatarBtnEl.getBoundingClientRect() : { left: window.innerWidth - 80, top: window.innerHeight - 80 };
    const origins = [
      { x: rect.left + 30, y: rect.top + 20, icon: '💖' },
      { x: rect.left + 70, y: rect.top + 10, icon: '✨' },
      { x: rect.left + 50, y: rect.top + 40, icon: '⭐' },
      { x: rect.left + 80, y: rect.top + 30, icon: '🐾' }
    ];

    origins.forEach((orig, idx) => {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.className = 'michi-heart-particle';
        particle.textContent = orig.icon;
        particle.style.left = `${orig.x + (Math.random() * 20 - 10)}px`;
        particle.style.top = `${orig.y + (Math.random() * 20 - 10)}px`;
        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1300);
      }, idx * 120);
    });
  }

  speak(text, isAutoInactivity = false) {
    if (!this.bubbleEl || !this.bubbleTextEl) return;

    if (isAutoInactivity && window.retroAudio && typeof window.retroAudio.playMeow === 'function') {
      window.retroAudio.playMeow();
    }

    this.bubbleTextEl.innerHTML = text;
    this.bubbleEl.style.display = 'block';
    this.isSpeaking = true;

    // Auto-dismiss after 11 seconds
    if (this.bubbleDismissTimer) clearTimeout(this.bubbleDismissTimer);
    this.bubbleDismissTimer = setTimeout(() => {
      this.hideSpeechBubble();
    }, 11000);

    // Re-arm inactivity timer
    this.resetInactivityTimer();
  }

  hideSpeechBubble() {
    if (!this.bubbleEl) return;
    this.bubbleEl.style.display = 'none';
    this.isSpeaking = false;
    if (this.bubbleDismissTimer) clearTimeout(this.bubbleDismissTimer);
  }
}

// Global initialization upon DOM ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.michiCompanion = new MichiCompanion();
  });
  // Fallback in case DOM is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    if (!window.michiCompanion) {
      window.michiCompanion = new MichiCompanion();
    }
  }
}
