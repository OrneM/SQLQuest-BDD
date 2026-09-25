// Antigravity BDD: Time Attack Module (Modos Aprendiz & Warrior con Selección de 10, 20 o 30 Preguntas)

class TimeAttackExam {
  constructor() {
    this.currentMode = 'apprentice'; // 'apprentice' | 'warrior' | 'dungeon'
    this.selectedDungeonClass = 5; // 1 | 2 | 3 | 4 | 5
    this.selectedQuestionCount = 20; // 10 | 20 | 30
    this.totalDuration = 30 * 60; // default 30 min for 20 questions
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
    this.updateLengthSelectorUI();
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
    // Length choice buttons (10, 20, 30 questions)
    const lengthBtns = document.querySelectorAll('.length-choice-btn');
    lengthBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const count = parseInt(btn.getAttribute('data-count'), 10) || 20;
        this.selectedQuestionCount = count;
        lengthBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        window.retroAudio.playBlip(600, 0.04);
        this.updateLengthSelectorUI();
      });
    });

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

    // Selector y Botón de Modo Dungeon (Por Clase)
    const dungeonSelect = document.getElementById('dungeon-class-selector');
    if (dungeonSelect) {
      dungeonSelect.addEventListener('change', (e) => {
        this.selectedDungeonClass = parseInt(e.target.value, 10) || 5;
        window.retroAudio.playBlip(650, 0.04);
        this.updateLengthSelectorUI();
      });
    }

    const startDungeonBtn = document.getElementById('start-dungeon-btn');
    if (startDungeonBtn) {
      startDungeonBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(750, 0.08);
        this.startNewExam('dungeon', this.selectedDungeonClass);
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
        this.startNewExam(this.currentMode, this.dungeonClass);
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
        this.startNewExam(this.currentMode, this.dungeonClass);
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

  updateLengthSelectorUI() {
    const hintEl = document.getElementById('exam-length-hint-text');
    const warriorTimeText = document.getElementById('warrior-time-text');
    const apprenticeLabel = document.getElementById('start-apprentice-label');
    const warriorLabel = document.getElementById('start-warrior-label');
    const dungeonLabel = document.getElementById('start-dungeon-label');

    const count = this.selectedQuestionCount;
    const minsMap = { 10: 15, 20: 30, 30: 45 };
    const mins = minsMap[count] || 30;

    if (hintEl) {
      if (count === 10) {
        hintEl.textContent = '⚡ 10 Preguntas (15 min en Warrior / Tiempo Libre en Aprendiz & Dungeon)';
      } else if (count === 20) {
        hintEl.textContent = '⚔️ 20 Preguntas (30 min en Warrior / Tiempo Libre en Aprendiz & Dungeon)';
      } else {
        hintEl.textContent = '🏆 30 Preguntas (45 min en Warrior / Tiempo Libre en Aprendiz & Dungeon)';
      }
    }

    if (warriorTimeText) {
      const label = count === 10 ? 'Sprint' : (count === 20 ? 'Estándar' : 'Completo');
      warriorTimeText.textContent = `Límite de ${mins} Minutos (${label})`;
    }

    if (apprenticeLabel) {
      apprenticeLabel.textContent = `🌱 INICIAR MODO APRENDIZ (${count} PREG.)`;
    }

    if (warriorLabel) {
      warriorLabel.textContent = `⚔️ INICIAR MODO WARRIOR (${count} PREG. - ${mins} MIN)`;
    }

    if (dungeonLabel) {
      dungeonLabel.textContent = `🏰 ENTRAR A LA MAZMORRA (CLASE ${this.selectedDungeonClass} - ${count} PREG.)`;
    }
  }

  // Algoritmo Fisher-Yates para barajado 100% aleatorio e impredecible
  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Prepara y aleatoriza opciones por sesión para que las respuestas no sean predecibles
  prepareQuestion(rawQ) {
    const q = JSON.parse(JSON.stringify(rawQ));
    if (q.type === 'single_choice' && Array.isArray(q.options)) {
      const correctOptionText = q.options[q.correctAnswer];
      const shuffledOptions = this.shuffle(q.options);
      q.options = shuffledOptions;
      q.correctAnswer = shuffledOptions.indexOf(correctOptionText);
    }
    return q;
  }

  startNewExam(mode = 'apprentice', dungeonClass = 5) {
    this.currentMode = mode;
    this.dungeonClass = dungeonClass || this.selectedDungeonClass || 5;
    
    // Seleccionar y barajar aleatoriamente del banco
    let basePool = [...window.QUESTIONS_DATABASE];
    if (this.currentMode === 'dungeon') {
      basePool = basePool.filter(q => q.classNum === this.dungeonClass);
    }
    const shuffledPool = this.shuffle(basePool);
    const count = Math.min(this.selectedQuestionCount, shuffledPool.length);
    this.questions = shuffledPool.slice(0, count).map(q => this.prepareQuestion(q));
    
    this.currentIndex = 0;
    this.streak = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.isRunning = true;

    if (this.currentMode === 'apprentice' || this.currentMode === 'dungeon') {
      this.lives = 999;
      this.elapsedSeconds = 0;
      this.totalDuration = 0;
    } else {
      this.maxLives = 3;
      this.lives = 3;
      const minsMap = { 10: 15, 20: 30, 30: 45 };
      const mins = minsMap[this.selectedQuestionCount] || 30;
      this.totalDuration = mins * 60;
      this.remainingSeconds = this.totalDuration;
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

    this.updateLengthSelectorUI();
    this.updateHUD();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      if (!this.isRunning) return;

      if (this.currentMode === 'apprentice' || this.currentMode === 'dungeon') {
        this.elapsedSeconds++;
        this.updateTimerDisplay();
      } else {
        this.remainingSeconds--;
        this.updateTimerDisplay();

        if (this.remainingSeconds <= 0) {
          this.remainingSeconds = 0;
          clearInterval(this.timerInterval);
          const mins = Math.round(this.totalDuration / 60);
          this.triggerGameOver(`¡Se acabó el tiempo límite de ${mins} minutos!`);
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
    } else if (this.currentMode === 'dungeon') {
      const mins = Math.floor(this.elapsedSeconds / 60);
      const secs = this.elapsedSeconds % 60;
      const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      this.timerEl.textContent = `🏰 ${formatted} (MODO DUNGEON: CLASE ${this.dungeonClass})`;
      this.timerEl.classList.remove('warning');
      this.timerEl.style.color = '#c084fc';
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
        heartsContainer.innerHTML = `<span class="hud-lives-apprentice">❤️ ∞ ILIMITADAS</span>`;
      } else if (this.currentMode === 'dungeon') {
        heartsContainer.innerHTML = `<span class="hud-lives-dungeon">🏰 ∞ MAZMORRA C${this.dungeonClass || this.selectedDungeonClass}</span>`;
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

    const isApprenticeOrDungeon = (this.currentMode === 'apprentice' || this.currentMode === 'dungeon');
    let modeBadgeClass = 'mode-warrior';
    let modeBadgeLabel = '⚔️ WARRIOR';
    if (this.currentMode === 'apprentice') {
      modeBadgeClass = 'mode-apprentice';
      modeBadgeLabel = '🌱 APRENDIZ';
    } else if (this.currentMode === 'dungeon') {
      modeBadgeClass = 'mode-dungeon';
      modeBadgeLabel = `🏰 DUNGEON CLASE ${this.dungeonClass}`;
    }

    let html = `
      <div class="question-meta">
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <span class="question-topic-badge">${q.topic}</span>
          <span class="question-unit-badge">${q.unit}</span>
        </div>
        <span class="exam-mode-indicator ${modeBadgeClass}">
          ${modeBadgeLabel}
        </span>
      </div>

      <h3 class="question-title">Pregunta ${currentNum} de ${totalNum}: ${q.question}</h3>
    `;

    // Oracle Hint Section
    if (isApprenticeOrDungeon) {
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

    // Bind Hint Button event in apprentice/dungeon mode
    if (isApprenticeOrDungeon) {
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
        : (this.currentMode === 'dungeon' ? 120 + (this.streak * 20) : 100 + (this.streak * 15));
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

      if (this.currentMode === 'apprentice' || this.currentMode === 'dungeon') {
        // En modo aprendiz o dungeon NO hay pérdida de vidas ni Game Over
        if (this.validateBtnEl) this.validateBtnEl.style.display = 'none';
        if (this.nextBtnEl) this.nextBtnEl.style.display = 'inline-flex';

        const modeMsg = (this.currentMode === 'dungeon') 
          ? `Modo Dungeon (Clase ${this.dungeonClass})` 
          : 'Modo Aprendiz';
        this.showFeedback(false, `¡RESPUESTA INCORRECTA! (${modeMsg}: Sin pérdida de vidas)`, q.explanation, q.citation, q.slideImage);
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

    const duration = (this.currentMode === 'apprentice' || this.currentMode === 'dungeon') 
      ? this.elapsedSeconds 
      : Math.max(1, (this.totalDuration - this.remainingSeconds));

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
      const modeName = this.currentMode === 'warrior' 
        ? 'WARRIOR (EXAMEN HARDCORE)' 
        : (this.currentMode === 'dungeon' ? `DUNGEON (CLASE ${this.dungeonClass})` : 'APRENDIZ');
      statsEl.innerHTML = `
        <div class="modal-stat-line">Modo: <strong class="stat-highlight-mode-danger">${modeName}</strong></div>
        <div class="modal-stat-line">Aciertos: <strong>${this.correctCount} / ${this.questions.length}</strong></div>
        <div class="modal-stat-line">XP Obtenida: <strong class="stat-highlight-xp">+${this.xp} XP</strong></div>
        <p class="modal-stat-note">¡Los conceptos fallados fueron registrados para el modo <strong>REVANCHA / BOSS FIGHT</strong> y tus estadísticas actualizadas!</p>
      `;
    }

    document.getElementById('modal-game-over').classList.add('active');
    this.updateHUD();
  }

  triggerVictory() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isRunning = false;
    window.retroAudio.playVictory();

    const duration = (this.currentMode === 'apprentice' || this.currentMode === 'dungeon') 
      ? this.elapsedSeconds 
      : Math.max(1, (this.totalDuration - this.remainingSeconds));

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
      let modeText = '⚔️ WARRIOR (HARDCORE)';
      if (this.currentMode === 'apprentice') {
        modeText = '🌱 APRENDIZ (SIN ESTRÉS)';
      } else if (this.currentMode === 'dungeon') {
        modeText = `🏰 DUNGEON (CLASE ${this.dungeonClass} CONQUISTADA)`;
      }

      victoryStats.innerHTML = `
        <div class="modal-stat-line grade-line">Calificación Final: <strong class="stat-highlight-grade">${grade} / 10</strong></div>
        <div class="modal-stat-line">Modo Completado: <strong class="stat-highlight-mode">${modeText}</strong></div>
        <div class="modal-stat-line">Preguntas Correctas: <strong>${this.correctCount} / ${this.questions.length}</strong></div>
        <div class="modal-stat-line">XP Total Acumulada: <strong class="stat-highlight-xp">+${this.xp} XP</strong></div>
        <div class="modal-stat-line">Rango Obtenido: <span class="victory-rank-badge">⚔️ Maestro de Bases de Datos</span></div>
      `;
    }

    document.getElementById('modal-victory').classList.add('active');
    this.updateHUD();
  }

  // LocalStorage Spaced Repetition Helpers
  getFailedQuestionIds() {
    try {
      const data = localStorage.getItem('retro_bdd_failed_ids');
      const rawIds = data ? JSON.parse(data) : [];
      if (!Array.isArray(rawIds)) return [];

      const db = window.QUESTIONS_DATABASE || [];
      const dbMap = new Map();
      db.forEach(q => dbMap.set(String(q.id), q));

      const validIds = [];
      const seen = new Set();
      rawIds.forEach(id => {
        const strId = String(id);
        if (dbMap.has(strId) && !seen.has(strId)) {
          seen.add(strId);
          validIds.push(dbMap.get(strId).id);
        }
      });

      if (validIds.length !== rawIds.length || JSON.stringify(validIds) !== JSON.stringify(rawIds)) {
        localStorage.setItem('retro_bdd_failed_ids', JSON.stringify(validIds));
      }
      return validIds;
    } catch (e) {
      return [];
    }
  }

  addFailedQuestionId(id) {
    const list = this.getFailedQuestionIds();
    const strId = String(id);
    const db = window.QUESTIONS_DATABASE || [];
    const qObj = db.find(q => String(q.id) === strId);
    
    if (qObj && !list.includes(qObj.id)) {
      list.push(qObj.id);
      localStorage.setItem('retro_bdd_failed_ids', JSON.stringify(list));
      this.updateHUD();
    }
  }

  removeFailedQuestionId(id) {
    let list = this.getFailedQuestionIds();
    const strId = String(id);
    list = list.filter(item => String(item) !== strId);
    localStorage.setItem('retro_bdd_failed_ids', JSON.stringify(list));
    this.updateHUD();
  }
}

window.TimeAttackExam = TimeAttackExam;
