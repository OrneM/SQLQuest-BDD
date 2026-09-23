// Antigravity BDD: Boss Fight / Revancha Module (Repaso Espaciado & Muerte Súbita)

class BossFightArena {
  constructor() {
    this.bossMaxHp = 100;
    this.bossCurrentHp = 100;
    this.failedQuestions = [];
    this.currentIndex = 0;
    this.lives = 3;
    this.isFighting = false;

    this.initElements();
    this.bindEvents();
  }

  initElements() {
    this.arenaEl = document.getElementById('boss-arena-view');
    this.noErrorsNoticeEl = document.getElementById('boss-no-errors-box');
    this.bossHpFillEl = document.getElementById('boss-hp-fill');
    this.bossHpTextEl = document.getElementById('boss-hp-text');
    this.bossQuestionBoxEl = document.getElementById('boss-question-container');
    this.bossFeedbackBoxEl = document.getElementById('boss-feedback-box');
    this.bossNextBtnEl = document.getElementById('boss-next-btn');
    this.bossValidateBtnEl = document.getElementById('boss-validate-btn');
    this.bossSpriteEl = document.getElementById('boss-sprite');
  }

  bindEvents() {
    const startBossBtn = document.getElementById('start-boss-fight-btn');
    if (startBossBtn) {
      startBossBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(750, 0.08);
        this.startFight();
      });
    }

    const startPracticeBtn = document.getElementById('boss-practice-all-btn');
    if (startPracticeBtn) {
      startPracticeBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(750, 0.08);
        this.startFight(true); // Practice mode with random sample
      });
    }

    if (this.bossNextBtnEl) {
      this.bossNextBtnEl.addEventListener('click', () => {
        window.retroAudio.playBlip(500, 0.05);
        this.nextQuestion();
      });
    }

    if (this.bossValidateBtnEl) {
      this.bossValidateBtnEl.addEventListener('click', () => {
        this.submitBossAnswer();
      });
    }
  }

  loadFailedQuestions() {
    try {
      const stored = localStorage.getItem('retro_bdd_failed_ids');
      const ids = stored ? JSON.parse(stored) : [];
      this.failedQuestions = window.QUESTIONS_DATABASE.filter(q => ids.includes(q.id));
    } catch (e) {
      this.failedQuestions = [];
    }
  }

  refreshView() {
    this.loadFailedQuestions();

    if (this.failedQuestions.length === 0 && !this.isFighting) {
      if (this.noErrorsNoticeEl) this.noErrorsNoticeEl.style.display = 'block';
      if (this.arenaEl) this.arenaEl.style.display = 'none';
    } else if (!this.isFighting) {
      if (this.noErrorsNoticeEl) this.noErrorsNoticeEl.style.display = 'none';
      if (this.arenaEl) this.arenaEl.style.display = 'block';
      const countLabel = document.getElementById('boss-pending-count');
      if (countLabel) countLabel.textContent = this.failedQuestions.length;
    }
  }

  startFight(useAll = false) {
    if (useAll) {
      this.failedQuestions = [...window.QUESTIONS_DATABASE].sort(() => 0.5 - Math.random()).slice(0, 10);
    } else {
      this.loadFailedQuestions();
      if (this.failedQuestions.length === 0) return;
    }

    this.currentIndex = 0;
    this.bossMaxHp = this.failedQuestions.length;
    this.bossCurrentHp = this.failedQuestions.length;
    this.lives = 3;
    this.isFighting = true;

    if (this.noErrorsNoticeEl) this.noErrorsNoticeEl.style.display = 'none';
    if (this.arenaEl) this.arenaEl.style.display = 'block';

    const stageEl = document.getElementById('boss-battle-stage');
    if (stageEl) stageEl.style.display = 'block';

    const introEl = document.getElementById('boss-intro-box');
    if (introEl) introEl.style.display = 'none';

    this.updateBossHP();
    this.renderQuestion();
  }

  updateBossHP() {
    const pct = Math.max(0, Math.round((this.bossCurrentHp / this.bossMaxHp) * 100));
    if (this.bossHpFillEl) this.bossHpFillEl.style.width = `${pct}%`;
    if (this.bossHpTextEl) this.bossHpTextEl.textContent = `HP: ${this.bossCurrentHp} / ${this.bossMaxHp} (${pct}%)`;
  }

  renderQuestion() {
    if (this.currentIndex >= this.failedQuestions.length) {
      this.triggerBossVictory();
      return;
    }

    const q = this.failedQuestions[this.currentIndex];

    if (this.bossFeedbackBoxEl) {
      this.bossFeedbackBoxEl.classList.remove('active', 'feedback-correct', 'feedback-error');
    }
    if (this.bossNextBtnEl) this.bossNextBtnEl.style.display = 'none';
    if (this.bossValidateBtnEl) {
      this.bossValidateBtnEl.style.display = 'inline-flex';
      this.bossValidateBtnEl.disabled = false;
    }

    let html = `
      <div class="question-meta">
        <span class="question-topic-badge">⚡ REVANCHA: ${q.topic}</span>
        <span class="question-unit-badge">${q.unit}</span>
      </div>
      <h3 class="question-title">${q.question}</h3>
    `;

    if (q.type === 'single_choice') {
      html += `<div class="options-list" id="boss-options-list">`;
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
      const templateHtml = q.template.replace('{INPUT}', `<input type="text" id="boss-sql-fill-input" class="sql-fill-input" placeholder="Comando SQL..." autocomplete="off" />`);
      html += `<div class="sql-fill-container">${templateHtml}</div>`;
    } else if (q.type === 'code_completion') {
      let code = q.codeSnippet;
      q.blanks.forEach(b => {
        code = code.replace(`[${b.id}]`, `<input type="text" data-blank-id="${b.id}" class="sql-fill-input boss-blank-input" placeholder="${b.placeholder}" autocomplete="off" />`);
      });
      html += `<div class="code-blank-block">${code}</div>`;
    } else if (q.type === 'matching') {
      html += `<div class="matching-container" id="boss-matching-stage">`;
      html += `<div class="matching-left">`;
      q.pairs.forEach((p, idx) => {
        html += `<div class="matching-card" data-side="left" data-key="${p.key}" data-idx="${idx}">${p.key}</div>`;
      });
      html += `</div><div class="matching-right">`;
      const shuffled = [...q.pairs].sort(() => 0.5 - Math.random());
      shuffled.forEach(p => {
        html += `<div class="matching-card" data-side="right" data-key="${p.key}" data-val="${p.value}">${p.value}</div>`;
      });
      html += `</div></div>`;
    }

    this.bossQuestionBoxEl.innerHTML = html;

    if (q.type === 'single_choice') {
      const optionBtns = this.bossQuestionBoxEl.querySelectorAll('.option-btn');
      optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          optionBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          window.retroAudio.playBlip(650, 0.03);
        });
      });
    }
  }

  submitBossAnswer() {
    const q = this.failedQuestions[this.currentIndex];
    let isCorrect = false;

    if (q.type === 'single_choice') {
      const selected = this.bossQuestionBoxEl.querySelector('.option-btn.selected');
      if (!selected) {
        alert('Selecciona una opción antes de atacar al Boss.');
        return;
      }
      const selectedIdx = parseInt(selected.getAttribute('data-idx'), 10);
      isCorrect = selectedIdx === q.correctAnswer;
    } else if (q.type === 'fill_in_sql') {
      const input = this.bossQuestionBoxEl.querySelector('#boss-sql-fill-input');
      if (!input || !input.value.trim()) {
        alert('Ingresa tu respuesta SQL.');
        return;
      }
      const val = input.value.trim().replace(/\s+/g, ' ').toUpperCase();
      const expected = q.expectedAnswer.trim().replace(/\s+/g, ' ').toUpperCase();
      isCorrect = (val === expected);
    } else if (q.type === 'code_completion') {
      const inputs = this.bossQuestionBoxEl.querySelectorAll('.boss-blank-input');
      let allFilled = true;
      let allMatched = true;
      inputs.forEach(inp => {
        const blankId = inp.getAttribute('data-blank-id');
        const blankDef = q.blanks.find(b => b.id === blankId);
        const userVal = inp.value.trim().replace(/\s+/g, ' ').toUpperCase();
        const expectedVal = blankDef.expected.trim().replace(/\s+/g, ' ').toUpperCase();
        if (!userVal) allFilled = false;
        if (userVal !== expectedVal) allMatched = false;
      });
      if (!allFilled) {
        alert('Completa todos los espacios vacíos.');
        return;
      }
      isCorrect = allMatched;
    } else if (q.type === 'matching') {
      isCorrect = true; // Auto-pass matching in boss mode if simplified
    }

    if (this.bossValidateBtnEl) this.bossValidateBtnEl.style.display = 'none';
    if (this.bossNextBtnEl) this.bossNextBtnEl.style.display = 'inline-flex';

    if (isCorrect) {
      window.retroAudio.playCorrect();
      this.bossCurrentHp--;
      this.updateBossHP();

      // Shake the boss sprite
      if (this.bossSpriteEl) {
        this.bossSpriteEl.style.transform = 'scale(0.8) rotate(15deg)';
        setTimeout(() => {
          this.bossSpriteEl.style.transform = '';
        }, 300);
      }

      // Remove from failed list permanently in localStorage
      this.removeResolvedId(q.id);

      this.showFeedback(true, '⚔️ ¡GOLPE CRÍTICO AL BOSS!', q.explanation, q.citation, q.slideImage);
    } else {
      window.retroAudio.playError();
      this.lives--;
      this.showFeedback(false, '💥 EL BOSS CONTRAATACA (-1 Vida)', q.explanation, q.citation, q.slideImage);

      if (this.lives <= 0) {
        setTimeout(() => {
          alert('¡El Boss te ha derrotado en la revancha! Repasa la teoría e inténtalo de nuevo.');
          this.isFighting = false;
          this.refreshView();
        }, 1000);
        return;
      }
    }
  }

  showFeedback(isCorrect, title, explanation, citation, slideImage = null) {
    if (!this.bossFeedbackBoxEl) return;
    this.bossFeedbackBoxEl.className = `feedback-box active ${isCorrect ? 'feedback-correct' : 'feedback-error'}`;

    let slideHtml = '';
    if (slideImage) {
      slideHtml = `
        <div style="margin: 12px 0; border: 2px solid #283256; background: #000; cursor: pointer; position: relative; max-width: 480px;" onclick="window.openInfographicLightbox('${slideImage}', 'Infografía Explicativa', '${explanation.replace(/'/g, "\\'")}')">
          <img src="${slideImage}" alt="Diapositiva Explicativa" style="width: 100%; height: auto; display: block;">
          <span style="position: absolute; bottom: 6px; right: 6px; background: rgba(0,0,0,0.85); color: var(--neon-yellow); font-family: var(--font-pixel); font-size: 8px; padding: 2px 6px;">🔍 AMPLIAR INFOGRAFÍA</span>
        </div>
      `;
    }

    this.bossFeedbackBoxEl.innerHTML = `
      <div class="feedback-header ${isCorrect ? 'correct' : 'error'}">${title}</div>
      <div class="feedback-explanation">${explanation}</div>
      ${slideHtml}
      <div class="feedback-citation">📖 Fuente: ${citation}</div>
    `;
  }

  nextQuestion() {
    this.currentIndex++;
    this.renderQuestion();
  }

  removeResolvedId(id) {
    try {
      let stored = localStorage.getItem('retro_bdd_failed_ids');
      let list = stored ? JSON.parse(stored) : [];
      list = list.filter(item => item !== id);
      localStorage.setItem('retro_bdd_failed_ids', JSON.stringify(list));

      const badge = document.getElementById('boss-badge-count');
      if (badge) {
        badge.textContent = list.length;
        badge.style.display = list.length > 0 ? 'inline-block' : 'none';
      }
    } catch (e) {}
  }

  triggerBossVictory() {
    this.isFighting = false;
    window.retroAudio.playVictory();
    alert('🏆 ¡FELICITACIONES! Has derrotado al Dragón de Inconsistencias y dominado tus preguntas erróneas.');
    this.refreshView();
  }
}

window.BossFightArena = BossFightArena;
