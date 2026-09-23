// Antigravity BDD: Time Attack Module (Simulacro de Examen Oficial)

class TimeAttackExam {
  constructor() {
    this.totalDuration = 45 * 60; // 45 minutes in seconds
    this.remainingSeconds = this.totalDuration;
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
        window.retroAudio.playBlip(500, 0.05);
        this.nextQuestion();
      });
    }

    if (this.validateBtnEl) {
      this.validateBtnEl.addEventListener('click', () => {
        this.submitCurrentAnswer();
      });
    }

    const startBtn = document.getElementById('start-exam-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(700, 0.08);
        this.startNewExam();
      });
    }

    const restartGameOverBtn = document.getElementById('restart-after-gameover-btn');
    if (restartGameOverBtn) {
      restartGameOverBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(600, 0.06);
        document.getElementById('modal-game-over').classList.remove('active');
        this.startNewExam();
      });
    }

    const restartVictoryBtn = document.getElementById('restart-after-victory-btn');
    if (restartVictoryBtn) {
      restartVictoryBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(600, 0.06);
        document.getElementById('modal-victory').classList.remove('active');
        this.startNewExam();
      });
    }
  }

  startNewExam() {
    // Pick 25 questions from bank (or all if bank <= 25)
    const allQuestions = [...window.QUESTIONS_DATABASE];
    // Shuffle slightly to give variety while preserving all 25
    this.questions = allQuestions.slice(0, 25);
    
    this.currentIndex = 0;
    this.remainingSeconds = this.totalDuration;
    this.lives = this.maxLives;
    this.streak = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.isRunning = true;

    // Show exam container, hide welcome screen
    const welcomeBox = document.getElementById('exam-welcome-box');
    const runningBox = document.getElementById('exam-running-box');
    if (welcomeBox) welcomeBox.style.display = 'none';
    if (runningBox) runningBox.style.display = 'block';

    this.startTimer();
    this.renderCurrentQuestion();
    this.updateHUD();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      this.updateTimerDisplay();

      if (this.remainingSeconds <= 0) {
        this.remainingSeconds = 0;
        clearInterval(this.timerInterval);
        this.triggerGameOver("¡Se acabó el tiempo de 45 minutos!");
      }
    }, 1000);
  }

  updateTimerDisplay() {
    if (!this.timerEl) return;
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    this.timerEl.textContent = `⏳ ${formatted}`;

    if (this.remainingSeconds < 300) {
      this.timerEl.classList.add('warning');
    } else {
      this.timerEl.classList.remove('warning');
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
    const hearts = document.querySelectorAll('.hud-heart');
    hearts.forEach((h, idx) => {
      if (idx < this.lives) {
        h.classList.remove('empty');
        h.textContent = '❤️';
      } else {
        h.classList.add('empty');
        h.textContent = '🖤';
      }
    });

    // Spaced repetition badge in nav
    const failedIds = this.getFailedQuestionIds();
    const badge = document.getElementById('boss-badge-count');
    if (badge) {
      badge.textContent = failedIds.length;
      badge.style.display = failedIds.length > 0 ? 'inline-block' : 'none';
    }
  }

  renderCurrentQuestion() {
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
    }
    if (this.nextBtnEl) this.nextBtnEl.style.display = 'none';
    if (this.validateBtnEl) {
      this.validateBtnEl.style.display = 'inline-flex';
      this.validateBtnEl.disabled = false;
    }

    let html = `
      <div class="question-meta">
        <span class="question-topic-badge">${q.topic}</span>
        <span class="question-unit-badge">${q.unit}</span>
      </div>
      <h3 class="question-title">Pregunta ${currentNum}: ${q.question}</h3>
    `;

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
      const templateHtml = q.template.replace('{INPUT}', `<input type="text" id="sql-fill-user-input" class="sql-fill-input" placeholder="Comando SQL..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />`);
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

    // Bind question interactions
    if (q.type === 'single_choice') {
      const optionBtns = this.questionContainerEl.querySelectorAll('.option-btn');
      optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
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
        if (lCard.classList.contains('matched')) return;
        leftCards.forEach(c => c.classList.remove('active'));
        lCard.classList.add('active');
        this.selectedMatchLeft = lCard;
        window.retroAudio.playBlip(700, 0.03);
      });
    });

    rightCards.forEach(rCard => {
      rCard.addEventListener('click', () => {
        if (rCard.classList.contains('matched') || !this.selectedMatchLeft) return;
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
    const q = this.questions[this.currentIndex];
    let isCorrect = false;

    if (q.type === 'single_choice') {
      const selected = this.questionContainerEl.querySelector('.option-btn.selected');
      if (!selected) {
        alert('Selecciona una opción antes de validar.');
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
    if (this.validateBtnEl) this.validateBtnEl.style.display = 'none';
    if (this.nextBtnEl) this.nextBtnEl.style.display = 'inline-flex';

    if (isCorrect) {
      window.retroAudio.playCorrect();
      this.correctCount++;
      this.streak++;
      const earnedXp = 100 + (this.streak * 25);
      this.xp += earnedXp;

      // Remove from failed questions in localStorage if resolved
      this.removeFailedQuestionId(q.id);

      this.showFeedback(true, `¡CORRECTO! +${earnedXp} XP (Racha: ${this.streak}🔥)`, q.explanation, q.citation, q.slideImage);
    } else {
      window.retroAudio.playError();
      this.incorrectCount++;
      this.streak = 0;
      this.lives--;

      // Save to spaced repetition failed questions
      this.addFailedQuestionId(q.id);

      this.showFeedback(false, `¡INCORRECTO! -1 Corazón ❤️`, q.explanation, q.citation, q.slideImage);

      if (this.lives <= 0) {
        this.lives = 0;
        this.updateHUD();
        setTimeout(() => {
          this.triggerGameOver("¡Te has quedado sin corazones!");
        }, 1200);
        return;
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
        <div style="margin: 12px 0; border: 2px solid #283256; background: #000; cursor: pointer; position: relative; max-width: 480px;" onclick="window.openInfographicLightbox('${slideImage}', 'Infografía Explicativa', '${explanation.replace(/'/g, "\\'")}')">
          <img src="${slideImage}" alt="Diapositiva Explicativa" style="width: 100%; height: auto; display: block;">
          <span style="position: absolute; bottom: 6px; right: 6px; background: rgba(0,0,0,0.85); color: var(--neon-yellow); font-family: var(--font-pixel); font-size: 8px; padding: 2px 6px;">🔍 AMPLIAR INFOGRAFÍA</span>
        </div>
      `;
    }

    this.feedbackBoxEl.innerHTML = `
      <div class="feedback-header ${isCorrect ? 'correct' : 'error'}">
        ${isCorrect ? '✔ NIVEL SUPERADO' : '✖ RESPUESTA INCORRECTA'} — ${title}
      </div>
      <div class="feedback-explanation">${explanation}</div>
      ${slideHtml}
      <div class="feedback-citation">📖 Fuente: ${citation}</div>
    `;
  }

  nextQuestion() {
    this.currentIndex++;
    this.renderCurrentQuestion();
  }

  triggerGameOver(reason) {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isRunning = false;
    window.retroAudio.playGameOver();

    const reasonEl = document.getElementById('game-over-reason');
    if (reasonEl) reasonEl.textContent = reason;

    const statsEl = document.getElementById('game-over-stats');
    if (statsEl) {
      statsEl.innerHTML = `
        <p>Aciertos: ${this.correctCount} / ${this.questions.length}</p>
        <p>XP Obtenida: ${this.xp}</p>
        <p>¡Las preguntas falladas fueron enviadas al modo <strong>REVANCHA / BOSS FIGHT</strong>!</p>
      `;
    }

    document.getElementById('modal-game-over').classList.add('active');
    this.updateHUD();
  }

  triggerVictory() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isRunning = false;
    window.retroAudio.playVictory();

    const grade = ((this.correctCount / this.questions.length) * 10).toFixed(1);
    const victoryStats = document.getElementById('victory-stats');
    if (victoryStats) {
      victoryStats.innerHTML = `
        <p style="color: var(--neon-yellow); font-size: 16px;">Calificación: <strong>${grade} / 10</strong></p>
        <p>Preguntas Correctas: ${this.correctCount} / ${this.questions.length}</p>
        <p>XP Total Acumulada: ${this.xp}</p>
        <p>Rango Obtenido: <span style="color: var(--neon-cyan);">⚔️ Caballero del B-Tree</span></p>
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
