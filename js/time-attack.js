// Antigravity BDD: Time Attack Module (Modos Aprendiz & Warrior)

class TimeAttackExam {
  constructor() {
    this.currentMode = 'apprentice'; // 'apprentice' | 'warrior'
    this.totalDuration = 45 * 60; // 45 minutes in seconds for warrior
    this.remainingSeconds = this.totalDuration;
    this.elapsedSeconds = 0;
    this.timerInterval = null;
    this.isRunning = false;

    this.questions = [];
    this.currentIndex = 0;
    this.lives = 3;
    this.maxLives = 3;
    this.xp = parseInt(localStorage.getItem('retro_bdd_xp') || '0', 10);
    this.streak = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;

    // Matching state
    this.selectedMatchLeft = null;
    this.matchedPairs = new Map();

    this.initElements();
    this.bindEvents();
    this.updateHUD();
  }

  initElements() {
    this.timerEl = document.getElementById('exam-timer');
    this.progressFillEl = document.getElementById('exam-progress-fill');
    this.progressTextEl = document.getElementById('exam-progress-text');
    this.questionContainerEl = document.getElementById('question-active-container');
    this.feedbackBoxEl = document.getElementById('question-feedback-box');
    this.nextBtnEl = document.getElementById('exam-next-btn');
    this.validateBtnEl = document.getElementById('exam-validate-btn');
    this.actionButtonsEl = document.getElementById('exam-action-buttons');
  }

  bindEvents() {
    if (this.nextBtnEl) {
      this.nextBtnEl.addEventListener('click', () => {
        if (!this.isRunning) return;
        window.retroAudio.playBlip(500, 0.05);
        this.nextQuestion();
      });
    }

    if (this.validateBtnEl) {
      this.validateBtnEl.addEventListener('click', () => {
        if (!this.isRunning) return;
        this.submitCurrentAnswer();
      });
    }

    // Botones de inicio de modo en la pantalla de bienvenida
    const startApprenticeBtn = document.getElementById('start-apprentice-btn');
    if (startApprenticeBtn) {
      startApprenticeBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(700, 0.08);
        this.startNewExam('apprentice');
      });
    }

    const startWarriorBtn = document.getElementById('start-warrior-btn');
    if (startWarriorBtn) {
      startWarriorBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(700, 0.08);
        this.startNewExam('warrior');
      });
    }

    // Legacy or generic start button fallback
    const startBtn = document.getElementById('start-exam-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(700, 0.08);
        this.startNewExam('warrior');
      });
    }

    // Modal Game Over Buttons
    const restartGameOverBtn = document.getElementById('restart-after-gameover-btn');
    if (restartGameOverBtn) {
      restartGameOverBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(600, 0.06);
        document.getElementById('modal-game-over').classList.remove('active');
        this.startNewExam(this.currentMode);
      });
    }

    const closeGameOverBtn = document.getElementById('close-game-over-btn');
    if (closeGameOverBtn) {
      closeGameOverBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(400, 0.05);
        document.getElementById('modal-game-over').classList.remove('active');
        this.returnToModeSelection();
      });
    }

    // Modal Victory Buttons
    const restartVictoryBtn = document.getElementById('restart-after-victory-btn');
    if (restartVictoryBtn) {
      restartVictoryBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(600, 0.06);
        document.getElementById('modal-victory').classList.remove('active');
        this.startNewExam(this.currentMode);
      });
    }

    const closeVictoryBtn = document.getElementById('close-victory-btn');
    if (closeVictoryBtn) {
      closeVictoryBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(400, 0.05);
        document.getElementById('modal-victory').classList.remove('active');
        this.returnToModeSelection();
      });
    }

    // Exit to mode selection button in running screen
    const exitExamBtn = document.getElementById('exam-exit-btn');
    if (exitExamBtn) {
      exitExamBtn.addEventListener('click', () => {
        if (confirm('¿Deseas salir del examen actual y regresar al menú de selección de modo?')) {
          this.returnToModeSelection();
        }
      });
    }
  }

  startNewExam(mode = 'apprentice') {
    this.currentMode = mode;
    
    // Pick 25 questions from the full bank (shuffled)
    const allQuestions = [...window.QUESTIONS_DATABASE];
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    this.questions = shuffled.slice(0, 25);
    
    this.currentIndex = 0;
    this.streak = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.isRunning = true;

    if (this.currentMode === 'apprentice') {
      this.lives = 999;
      this.elapsedSeconds = 0;
    } else {
      this.maxLives = 3;
      this.lives = 3;
      this.remainingSeconds = 45 * 60; // 45 minutes
    }

    // Show exam container, hide welcome screen
    const welcomeBox = document.getElementById('exam-welcome-box');
    const runningBox = document.getElementById('exam-running-box');
    if (welcomeBox) welcomeBox.style.display = 'none';
    if (runningBox) runningBox.style.display = 'block';

    this.startTimer();
    this.renderCurrentQuestion();
    this.updateHUD();
  }

  returnToModeSelection() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isRunning = false;

    const welcomeBox = document.getElementById('exam-welcome-box');
    const runningBox = document.getElementById('exam-running-box');
    if (welcomeBox) welcomeBox.style.display = 'block';
    if (runningBox) runningBox.style.display = 'none';

    document.getElementById('modal-game-over').classList.remove('active');
    document.getElementById('modal-victory').classList.remove('active');

    this.updateHUD();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      if (!this.isRunning) return;

      if (this.currentMode === 'apprentice') {
        this.elapsedSeconds++;
        this.updateTimerDisplay();
      } else {
        this.remainingSeconds--;
        this.updateTimerDisplay();

        if (this.remainingSeconds <= 0) {
          this.remainingSeconds = 0;
          clearInterval(this.timerInterval);
          this.triggerGameOver("¡Se acabó el tiempo límite de 45 minutos!");
        }
      }
    }, 1000);
  }

  updateTimerDisplay() {
    if (!this.timerEl) return;

    if (this.currentMode === 'apprentice') {
      const mins = Math.floor(this.elapsedSeconds / 60);
      const secs = this.elapsedSeconds % 60;
      const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      this.timerEl.textContent = `⏱️ ${formatted} (MODO APRENDIZ: SIN LÍMITE)`;
      this.timerEl.classList.remove('warning');
      this.timerEl.style.color = 'var(--neon-green)';
    } else {
      const mins = Math.floor(this.remainingSeconds / 60);
      const secs = this.remainingSeconds % 60;
      const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      this.timerEl.textContent = `⏳ ${formatted} (MODO WARRIOR)`;

      if (this.remainingSeconds < 300) {
        this.timerEl.classList.add('warning');
      } else {
        this.timerEl.classList.remove('warning');
        this.timerEl.style.color = 'var(--neon-yellow)';
      }
    }
  }

  updateHUD() {
    // XP
    const hudXp = document.getElementById('hud-xp-val');
    if (hudXp) hudXp.textContent = this.xp;
    localStorage.setItem('retro_bdd_xp', this.xp);

    // Streak
    const hudStreak = document.getElementById('hud-streak-val');
    if (hudStreak) {
      hudStreak.textContent = `🔥 ${this.streak}x`;
    }

    // Hearts / Lives
    const heartsContainer = document.getElementById('hud-hearts-container');
    if (heartsContainer) {
      if (this.currentMode === 'apprentice') {
        heartsContainer.innerHTML = `<span style="color: var(--neon-green); font-family: var(--font-pixel); font-size: 11px;">❤️ ∞ ILIMITADAS</span>`;
      } else {
        let heartsHtml = '';
        for (let i = 0; i < this.maxLives; i++) {
          if (i < this.lives) {
            heartsHtml += `<span class="hud-heart">❤️</span>`;
          } else {
            heartsHtml += `<span class="hud-heart empty">🖤</span>`;
          }
        }
        heartsContainer.innerHTML = heartsHtml;
      }
    }

    // Spaced repetition badge in nav
    const failedIds = this.getFailedQuestionIds();
    const badge = document.getElementById('boss-badge-count');
    if (badge) {
      badge.textContent = failedIds.length;
      badge.style.display = failedIds.length > 0 ? 'inline-block' : 'none';
    }
  }

  renderCurrentQuestion() {
    if (!this.isRunning) return;

    if (this.currentIndex >= this.questions.length) {
      this.triggerVictory();
      return;
    }

    const q = this.questions[this.currentIndex];
    this.matchedPairs.clear();
    this.selectedMatchLeft = null;

    // Update progress
    const currentNum = this.currentIndex + 1;
    const totalNum = this.questions.length;
    const pct = Math.round((this.currentIndex / totalNum) * 100);
    if (this.progressFillEl) this.progressFillEl.style.width = `${pct}%`;
    if (this.progressTextEl) this.progressTextEl.textContent = `${currentNum} / ${totalNum}`;

    // Hide feedback and reset button state
    if (this.feedbackBoxEl) {
      this.feedbackBoxEl.classList.remove('active', 'feedback-correct', 'feedback-error');
      this.feedbackBoxEl.innerHTML = '';
    }
    if (this.nextBtnEl) this.nextBtnEl.style.display = 'none';
    if (this.validateBtnEl) {
      this.validateBtnEl.style.display = 'inline-flex';
      this.validateBtnEl.disabled = false;
    }

    const isApprentice = this.currentMode === 'apprentice';

    let html = `
      <div class="question-meta">
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <span class="question-topic-badge">${q.topic}</span>
          <span class="question-unit-badge">${q.unit}</span>
        </div>
        <span class="exam-mode-indicator ${isApprentice ? 'mode-apprentice' : 'mode-warrior'}">
          ${isApprentice ? '🌱 APRENDIZ' : '⚔️ WARRIOR'}
        </span>
      </div>

      <h3 class="question-title">Pregunta ${currentNum}: ${q.question}</h3>
    `;

    // Oracle Hint Section
    if (isApprentice) {
      html += `
        <div class="oracle-hint-container">
          <button class="btn-retro btn-cyan hint-trigger-btn" id="ask-oracle-hint-btn" type="button">
            <span>💡 PEDIR PISTA DEL ORÁCULO</span>
          </button>
          <div class="oracle-hint-box" id="oracle-hint-box" style="display: none;">
            <div class="oracle-hint-header">🔮 PISTA DEL ORÁCULO CONCEPTUAL</div>
            <div class="oracle-hint-body">${q.hint || "Analiza detenidamente la definición teórica y las opciones disponibles."}</div>
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="oracle-hint-container">
          <button class="btn-retro hint-trigger-btn disabled" disabled type="button" title="Pistas bloqueadas en Modo Warrior">
            <span>🔒 PISTAS BLOQUEADAS (MODO WARRIOR)</span>
          </button>
        </div>
      `;
    }

    if (q.type === 'single_choice') {
      html += `<div class="options-list" id="current-options-list">`;
      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((opt, idx) => {
        html += `
          <button class="option-btn" data-idx="${idx}">
            <span class="opt-letter">${letters[idx]}</span>
            <span class="opt-text">${opt}</span>
          </button>
        `;
      });
      html += `</div>`;
    } else if (q.type === 'fill_in_sql') {
      const templateHtml = q.template.replace('{INPUT}', `<input type="text" id="sql-fill-user-input" class="sql-fill-input" placeholder="Escribe el comando SQL aquí..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />`);
      html += `
        <div class="sql-fill-container">
          ${templateHtml}
        </div>
      `;
    } else if (q.type === 'code_completion') {
      let code = q.codeSnippet;
      q.blanks.forEach(b => {
        code = code.replace(`[${b.id}]`, `<input type="text" data-blank-id="${b.id}" class="sql-fill-input blank-input" placeholder="${b.placeholder}" autocomplete="off" />`);
      });
      html += `<div class="code-blank-block">${code}</div>`;
    } else if (q.type === 'matching') {
      html += `<div class="matching-container" id="matching-stage">`;
      html += `<div class="matching-left">`;
      q.pairs.forEach((p, idx) => {
        html += `<div class="matching-card" data-side="left" data-key="${p.key}" data-idx="${idx}">${p.key}</div>`;
      });
      html += `</div><div class="matching-right">`;
      // Shuffle right side
      const shuffled = [...q.pairs].sort(() => 0.5 - Math.random());
      shuffled.forEach((p, idx) => {
        html += `<div class="matching-card" data-side="right" data-key="${p.key}" data-val="${p.value}">${p.value}</div>`;
      });
      html += `</div></div>`;
    }

    this.questionContainerEl.innerHTML = html;

    // Bind Hint Button event in apprentice mode
    if (isApprentice) {
      const hintBtn = document.getElementById('ask-oracle-hint-btn');
      const hintBox = document.getElementById('oracle-hint-box');
      if (hintBtn && hintBox) {
        hintBtn.addEventListener('click', () => {
          window.retroAudio.playBlip(750, 0.08);
          hintBox.style.display = (hintBox.style.display === 'none') ? 'block' : 'none';
          hintBtn.innerHTML = (hintBox.style.display === 'none') 
            ? '<span>💡 PEDIR PISTA DEL ORÁCULO</span>' 
            : '<span>💡 OCULTAR PISTA</span>';
        });
      }
    }

    // Bind question interactions
    if (q.type === 'single_choice') {
      const optionBtns = this.questionContainerEl.querySelectorAll('.option-btn');
      optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (!this.isRunning) return;
          optionBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          window.retroAudio.playBlip(650, 0.03);
        });
      });
    } else if (q.type === 'matching') {
      this.bindMatchingEvents();
    }
  }

  bindMatchingEvents() {
    const leftCards = this.questionContainerEl.querySelectorAll('.matching-card[data-side="left"]');
    const rightCards = this.questionContainerEl.querySelectorAll('.matching-card[data-side="right"]');

    leftCards.forEach(lCard => {
      lCard.addEventListener('click', () => {
        if (!this.isRunning || lCard.classList.contains('matched')) return;
        leftCards.forEach(c => c.classList.remove('active'));
        lCard.classList.add('active');
        this.selectedMatchLeft = lCard;
        window.retroAudio.playBlip(700, 0.03);
      });
    });

    rightCards.forEach(rCard => {
      rCard.addEventListener('click', () => {
        if (!this.isRunning || rCard.classList.contains('matched') || !this.selectedMatchLeft) return;
        const leftKey = this.selectedMatchLeft.getAttribute('data-key');
        const rightKey = rCard.getAttribute('data-key');

        if (leftKey === rightKey) {
          // Correct pair
          this.selectedMatchLeft.classList.remove('active');
          this.selectedMatchLeft.classList.add('matched');
          rCard.classList.add('matched');
          this.matchedPairs.set(leftKey, true);
          window.retroAudio.playCorrect();
          this.selectedMatchLeft = null;
        } else {
          // Wrong pair
          window.retroAudio.playError();
          this.selectedMatchLeft.classList.remove('active');
          this.selectedMatchLeft = null;
        }
      });
    });
  }

  submitCurrentAnswer() {
    if (!this.isRunning) return;

    const q = this.questions[this.currentIndex];
    let isCorrect = false;

    if (q.type === 'single_choice') {
      const selected = this.questionContainerEl.querySelector('.option-btn.selected');
      if (!selected) {
        alert('Por favor, selecciona una opción antes de validar.');
        return;
      }
      const selectedIdx = parseInt(selected.getAttribute('data-idx'), 10);
      isCorrect = selectedIdx === q.correctAnswer;

      const allBtns = this.questionContainerEl.querySelectorAll('.option-btn');
      allBtns.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctAnswer) btn.classList.add('correct');
        else if (idx === selectedIdx && !isCorrect) btn.classList.add('incorrect');
      });
    } else if (q.type === 'fill_in_sql') {
      const input = this.questionContainerEl.querySelector('#sql-fill-user-input');
      if (!input || !input.value.trim()) {
        alert('Ingresa tu respuesta SQL antes de validar.');
        return;
      }
      const val = input.value.trim().replace(/\s+/g, ' ').toUpperCase();
      const expected = q.expectedAnswer.trim().replace(/\s+/g, ' ').toUpperCase();
      isCorrect = (val === expected);
      input.disabled = true;
      input.style.borderColor = isCorrect ? 'var(--neon-green)' : 'var(--neon-red)';
    } else if (q.type === 'code_completion') {
      const inputs = this.questionContainerEl.querySelectorAll('.blank-input');
      let allFilled = true;
      let allMatched = true;

      inputs.forEach(inp => {
        const blankId = inp.getAttribute('data-blank-id');
        const blankDef = q.blanks.find(b => b.id === blankId);
        const userVal = inp.value.trim().replace(/\s+/g, ' ').toUpperCase();
        const expectedVal = blankDef.expected.trim().replace(/\s+/g, ' ').toUpperCase();

        if (!userVal) allFilled = false;
        if (userVal !== expectedVal) allMatched = false;
        inp.disabled = true;
        inp.style.borderColor = (userVal === expectedVal) ? 'var(--neon-green)' : 'var(--neon-red)';
      });

      if (!allFilled) {
        alert('Completa todos los espacios vacíos.');
        inputs.forEach(inp => inp.disabled = false);
        return;
      }
      isCorrect = allMatched;
    } else if (q.type === 'matching') {
      isCorrect = (this.matchedPairs.size === q.pairs.length);
    }

    this.handleAnswerResult(isCorrect, q);
  }

  handleAnswerResult(isCorrect, q) {
    if (isCorrect) {
      window.retroAudio.playCorrect();
      this.correctCount++;
      this.streak++;
      const earnedXp = (this.currentMode === 'warrior') 
        ? 150 + (this.streak * 30)
        : 100 + (this.streak * 15);
      this.xp += earnedXp;

      // Remove from failed questions in localStorage if resolved
      this.removeFailedQuestionId(q.id);

      if (this.validateBtnEl) this.validateBtnEl.style.display = 'none';
      if (this.nextBtnEl) this.nextBtnEl.style.display = 'inline-flex';

      this.showFeedback(true, `¡CORRECTO! +${earnedXp} XP (Racha: ${this.streak}🔥)`, q.explanation, q.citation, q.slideImage);
    } else {
      window.retroAudio.playError();
      this.incorrectCount++;
      this.streak = 0;

      // Save to spaced repetition failed questions
      this.addFailedQuestionId(q.id);

      if (this.currentMode === 'apprentice') {
        // En modo aprendiz NO hay pérdida de vidas ni Game Over
        if (this.validateBtnEl) this.validateBtnEl.style.display = 'none';
        if (this.nextBtnEl) this.nextBtnEl.style.display = 'inline-flex';

        this.showFeedback(false, `¡RESPUESTA INCORRECTA! (Modo Aprendiz: Sin pérdida de vidas)`, q.explanation, q.citation, q.slideImage);
      } else {
        // En modo warrior SÍ se descuenta vida
        this.lives--;
        this.updateHUD();

        if (this.lives <= 0) {
          this.lives = 0;
          this.isRunning = false;
          if (this.timerInterval) clearInterval(this.timerInterval);

          // Bloquear completamente la posibilidad de continuar respondiendo o avanzar
          if (this.validateBtnEl) {
            this.validateBtnEl.disabled = true;
            this.validateBtnEl.style.display = 'none';
          }
          if (this.nextBtnEl) {
            this.nextBtnEl.disabled = true;
            this.nextBtnEl.style.display = 'none';
          }

          // Deshabilitar todos los controles de la pregunta
          const allInputs = this.questionContainerEl.querySelectorAll('input, button');
          allInputs.forEach(el => el.disabled = true);

          this.showFeedback(false, `¡INCORRECTO! -1 Corazón (0 VIDAS RESTANTES)`, q.explanation, q.citation, q.slideImage);

          setTimeout(() => {
            this.triggerGameOver("¡Te has quedado sin corazones en el Modo Warrior!");
          }, 800);
          return;
        } else {
          if (this.validateBtnEl) this.validateBtnEl.style.display = 'none';
          if (this.nextBtnEl) this.nextBtnEl.style.display = 'inline-flex';

          this.showFeedback(false, `¡INCORRECTO! -1 Corazón ❤️ (${this.lives} restantes)`, q.explanation, q.citation, q.slideImage);
        }
      }
    }

    this.updateHUD();
  }

  showFeedback(isCorrect, title, explanation, citation, slideImage = null) {
    if (!this.feedbackBoxEl) return;
    this.feedbackBoxEl.className = `feedback-box active ${isCorrect ? 'feedback-correct' : 'feedback-error'}`;
    
    let slideHtml = '';
    if (slideImage) {
      slideHtml = `
        <div style="margin: 14px 0; border: 2px solid #283256; background: #000; cursor: pointer; position: relative; max-width: 480px;" onclick="window.openInfographicLightbox('${slideImage}', 'Infografía Explicativa', '${explanation.replace(/'/g, "\\'")}')">
          <img src="${slideImage}" alt="Diapositiva Explicativa" style="width: 100%; height: auto; display: block;">
          <span style="position: absolute; bottom: 6px; right: 6px; background: rgba(0,0,0,0.85); color: var(--neon-yellow); font-family: var(--font-pixel); font-size: 8px; padding: 3px 7px;">🔍 AMPLIAR INFOGRAFÍA</span>
        </div>
      `;
    }

    this.feedbackBoxEl.innerHTML = `
      <div class="feedback-header ${isCorrect ? 'correct' : 'error'}">
        ${isCorrect ? '✔ CONCEPTO DOMINADO' : '✖ REPASO REQUERIDO'} — ${title}
      </div>
      <div class="feedback-explanation">${explanation}</div>
      ${slideHtml}
      <div class="feedback-citation">📖 Fuente: ${citation}</div>
    `;
  }

  nextQuestion() {
    if (!this.isRunning) return;
    this.currentIndex++;
    this.renderCurrentQuestion();
  }

  triggerGameOver(reason) {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isRunning = false;
    window.retroAudio.playGameOver();

    const duration = (this.currentMode === 'apprentice') 
      ? this.elapsedSeconds 
      : Math.max(1, (45 * 60 - this.remainingSeconds));

    if (window.analyticsManager) {
      window.analyticsManager.recordAttempt({
        mode: this.currentMode,
        correct: this.correctCount,
        total: this.questions.length,
        durationSeconds: duration,
        xpEarned: this.xp
      });
    }

    const reasonEl = document.getElementById('game-over-reason');
    if (reasonEl) reasonEl.textContent = reason;

    const statsEl = document.getElementById('game-over-stats');
    if (statsEl) {
      statsEl.innerHTML = `
        <p>Modo: <strong style="color: var(--neon-red);">WARRIOR (EXAMEN HARDCORE)</strong></p>
        <p>Aciertos: <strong>${this.correctCount} / ${this.questions.length}</strong></p>
        <p>XP Obtenida: <strong>${this.xp}</strong></p>
        <p style="margin-top: 10px; color: var(--neon-yellow);">¡Los conceptos fallados fueron registrados para el modo <strong>REVANCHA / BOSS FIGHT</strong> y tus estadísticas actualizadas!</p>
      `;
    }

    document.getElementById('modal-game-over').classList.add('active');
    this.updateHUD();
  }

  triggerVictory() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isRunning = false;
    window.retroAudio.playVictory();

    const duration = (this.currentMode === 'apprentice') 
      ? this.elapsedSeconds 
      : Math.max(1, (45 * 60 - this.remainingSeconds));

    if (window.analyticsManager) {
      window.analyticsManager.recordAttempt({
        mode: this.currentMode,
        correct: this.correctCount,
        total: this.questions.length,
        durationSeconds: duration,
        xpEarned: this.xp
      });
    }

    const grade = ((this.correctCount / this.questions.length) * 10).toFixed(1);
    const victoryStats = document.getElementById('victory-stats');
    if (victoryStats) {
      victoryStats.innerHTML = `
        <p style="color: var(--neon-yellow); font-size: 16px;">Calificación Final: <strong>${grade} / 10</strong></p>
        <p>Modo Completado: <strong>${this.currentMode === 'apprentice' ? '🌱 APRENDIZ (SIN ESTRÉS)' : '⚔️ WARRIOR (HARDCORE)'}</strong></p>
        <p>Preguntas Correctas: ${this.correctCount} / ${this.questions.length}</p>
        <p>XP Total Acumulada: ${this.xp}</p>
        <p>Rango Obtenido: <span style="color: var(--neon-cyan);">⚔️ Maestro de Bases de Datos</span></p>
      `;
    }

    document.getElementById('modal-victory').classList.add('active');
    this.updateHUD();
  }

  // LocalStorage Spaced Repetition Helpers
  getFailedQuestionIds() {
    try {
      const data = localStorage.getItem('retro_bdd_failed_ids');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  addFailedQuestionId(id) {
    const list = this.getFailedQuestionIds();
    if (!list.includes(id)) {
      list.push(id);
      localStorage.setItem('retro_bdd_failed_ids', JSON.stringify(list));
    }
  }

  removeFailedQuestionId(id) {
    let list = this.getFailedQuestionIds();
    list = list.filter(item => item !== id);
    localStorage.setItem('retro_bdd_failed_ids', JSON.stringify(list));
  }
}

window.TimeAttackExam = TimeAttackExam;
