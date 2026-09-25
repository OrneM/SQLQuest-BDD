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
      const rawIds = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(rawIds)) throw new Error('Invalid format');

      const db = window.QUESTIONS_DATABASE || [];
      const dbMap = new Map();
      db.forEach(q => dbMap.set(String(q.id), q));

      const validQuestions = [];
      const validCanonicalIds = [];
      const seen = new Set();

      rawIds.forEach(id => {
        const strId = String(id);
        if (dbMap.has(strId) && !seen.has(strId)) {
          seen.add(strId);
          const q = dbMap.get(strId);
          validQuestions.push(q);
          validCanonicalIds.push(q.id);
        }
      });

      // Sanitize stored IDs if obsolete/stale keys or duplicates were present
      if (validCanonicalIds.length !== rawIds.length || JSON.stringify(validCanonicalIds) !== JSON.stringify(rawIds)) {
        localStorage.setItem('retro_bdd_failed_ids', JSON.stringify(validCanonicalIds));
      }

      this.failedQuestions = validQuestions;
    } catch (e) {
      this.failedQuestions = [];
    }
    this.updateBadge();
    return this.failedQuestions;
  }

  updateBadge() {
    const badge = document.getElementById('boss-badge-count');
    if (badge) {
      const count = this.failedQuestions ? this.failedQuestions.length : 0;
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-block' : 'none';
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

      const introEl = document.getElementById('boss-intro-box');
      if (introEl) introEl.style.display = 'block';

      const stageEl = document.getElementById('boss-battle-stage');
      if (stageEl) stageEl.style.display = 'none';

      const countLabel = document.getElementById('boss-pending-count');
      if (countLabel) countLabel.textContent = this.failedQuestions.length;
    }
    this.updateBadge();
  }

  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

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

  startFight(useAll = false) {
    if (useAll) {
      const pool = this.shuffle([...window.QUESTIONS_DATABASE]);
      this.failedQuestions = pool.slice(0, 10).map(q => this.prepareQuestion(q));
    } else {
      this.loadFailedQuestions();
      if (this.failedQuestions.length === 0) return;
      this.failedQuestions = this.shuffle(this.failedQuestions).map(q => this.prepareQuestion(q));
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
      this.bossFeedbackBoxEl.innerHTML = '';
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
      
      <div class="oracle-hint-container">
        <button class="btn-retro btn-cyan hint-trigger-btn" id="boss-oracle-hint-btn" type="button">
          <span>💡 PEDIR PISTA DEL ORÁCULO</span>
        </button>
        <div class="oracle-hint-box" id="boss-oracle-hint-box" style="display: none;">
          <div class="oracle-hint-header">🔮 PISTA DEL ORÁCULO</div>
          <div class="oracle-hint-body">${q.hint || "Reflexiona sobre los fundamentos teóricos aprendidos en clase."}</div>
        </div>
      </div>
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

    // Hint toggle
    const hintBtn = document.getElementById('boss-oracle-hint-btn');
    const hintBox = document.getElementById('boss-oracle-hint-box');
    if (hintBtn && hintBox) {
      hintBtn.addEventListener('click', () => {
        window.retroAudio.playBlip(750, 0.08);
        hintBox.style.display = (hintBox.style.display === 'none') ? 'block' : 'none';
        hintBtn.innerHTML = (hintBox.style.display === 'none') 
          ? '<span>💡 PEDIR PISTA DEL ORÁCULO</span>' 
          : '<span>💡 OCULTAR PISTA</span>';
      });
    }

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
      isCorrect = true;
    }

    if (this.bossValidateBtnEl) this.bossValidateBtnEl.style.display = 'none';
    if (this.bossNextBtnEl) this.bossNextBtnEl.style.display = 'inline-flex';

    if (isCorrect) {
      window.retroAudio.playCorrect();
      this.bossCurrentHp--;
      this.updateBossHP();

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
      this.showFeedback(false, `💥 EL BOSS CONTRAATACA (${this.lives} Vidas Restantes)`, q.explanation, q.citation, q.slideImage);

      if (this.lives <= 0) {
        setTimeout(() => {
          alert('¡El Boss te ha derrotado en la revancha! Repasa la teoría en el Grimorio e inténtalo de nuevo.');
          this.isFighting = false;
          this.refreshView();
        }, 500);
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
        <div style="margin: 14px 0; border: 2px solid #283256; background: #000; cursor: pointer; position: relative; max-width: 480px;" onclick="window.openInfographicLightbox('${slideImage}', 'Infografía Explicativa', '${explanation.replace(/'/g, "\\'")}')">
          <img src="${slideImage}" alt="Diapositiva Explicativa" style="width: 100%; height: auto; display: block;">
          <span style="position: absolute; bottom: 6px; right: 6px; background: rgba(0,0,0,0.85); color: var(--neon-yellow); font-family: var(--font-pixel); font-size: 8px; padding: 3px 7px;">🔍 AMPLIAR INFOGRAFÍA</span>
        </div>
      `;
    }

    this.bossFeedbackBoxEl.innerHTML = `
      <div class="feedback-header ${isCorrect ? 'correct' : 'error'}">
        ${isCorrect ? '✔ DAÑO INFLIGIDO' : '✖ FALLASTE EL ATAQUE'} — ${title}
      </div>
      <div class="feedback-explanation">${explanation}</div>
      ${slideHtml}
      <div class="feedback-citation">📖 Fuente: ${citation}</div>
    `;
  }

  nextQuestion() {
    this.currentIndex++;
    this.renderQuestion();
  }

  triggerBossVictory() {
    this.isFighting = false;
    window.retroAudio.playVictory();
    alert('🎉 ¡HAS DERROTADO AL TITÁN DE LAS INCONSISTENCIAS! Todos los conceptos han sido dominados.');
    this.refreshView();
  }

  removeResolvedId(id) {
    try {
      const stored = localStorage.getItem('retro_bdd_failed_ids');
      const rawIds = stored ? JSON.parse(stored) : [];
      const strTarget = String(id);
      
      const db = window.QUESTIONS_DATABASE || [];
      const dbMap = new Map();
      db.forEach(q => dbMap.set(String(q.id), q));

      const updatedIds = [];
      const updatedQuestions = [];
      const seen = new Set();

      if (Array.isArray(rawIds)) {
        rawIds.forEach(item => {
          const strItem = String(item);
          if (strItem !== strTarget && dbMap.has(strItem) && !seen.has(strItem)) {
            seen.add(strItem);
            const q = dbMap.get(strItem);
            updatedIds.push(q.id);
            updatedQuestions.push(q);
          }
        });
      }

      localStorage.setItem('retro_bdd_failed_ids', JSON.stringify(updatedIds));
      this.failedQuestions = updatedQuestions;
      this.updateBadge();
    } catch (e) {}
  }
}

window.BossFightArena = BossFightArena;
