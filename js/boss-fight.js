// Antigravity BDD: Dual Boss Fight / Revancha Module (Repaso Espaciado & Muerte Súbita)
// Boss 1: Titán de las Inconsistencias (1er Parcial - Clases 1 a 5)
// Boss 2: Leviatán Transaccional (2do Parcial - Clases 6, 7, 9 y 10)

class BossFightArena {
  constructor() {
    this.currentBoss = '1'; // '1' | '2'
    this.bossConfigs = {
      '1': {
        id: '1',
        name: 'TITÁN DE LAS INCONSISTENCIAS (B-TREE DRAGON)',
        shortName: 'Titán B-Tree',
        badge: '🐉 1ER PARCIAL',
        classes: [1, 2, 3, 4, 5],
        banner: 'assets/boss_battle.jpg',
        themeClass: 'boss-theme-1',
        purifiedTitle: '¡MAZMORRA DEL 1ER PARCIAL PURIFICADA!',
        purifiedDesc: 'No tienes conceptos pendientes de repaso del 1er Parcial (Clases 1 a 5). ¡Has dominado el modelado relacional, DQL y JOINs!',
        challengeTitle: '¡EL TITÁN DE LAS INCONSISTENCIAS TE DESAFÍA!',
        practiceBtnText: '🔥 ENTRENAR CONTRA EL TITÁN (1ER PARCIAL)',
        startBtnText: '⚔️ ENFRENTAR AL TITÁN AHORA',
        victoryTitle: '¡HAS DERROTADO AL TITÁN DE LAS INCONSISTENCIAS!',
        victoryMsg: '🎉 ¡VICTORIA TOTAL EN EL 1ER PARCIAL! Has purificado todos los fallos de Modelado E-R, Álgebra Relacional, DDL/DQL, Agregaciones y Subqueries.'
      },
      '2': {
        id: '2',
        name: 'LEVIATÁN TRANSACCIONAL (ACID CYBER-HYDRA)',
        shortName: 'Leviatán Transaccional',
        badge: '⚡ 2DO PARCIAL',
        classes: [6, 7, 9, 10],
        banner: 'assets/boss_battle_2do_parcial.jpg',
        themeClass: 'boss-theme-2',
        purifiedTitle: '¡MAZMORRA DEL 2DO PARCIAL PURIFICADA!',
        purifiedDesc: 'No tienes conceptos pendientes del 2do Parcial (Clases 6, 7, 9 y 10). ¡Concurrencia ACID, Normalización 1FN-5FN, Triggers y EXPLAIN bajo control!',
        challengeTitle: '¡EL LEVIATÁN TRANSACCIONAL TE DESAFÍA!',
        practiceBtnText: '⚡ ENTRENAR CONTRA EL LEVIATÁN (2DO PARCIAL)',
        startBtnText: '⚔️ ENFRENTAR AL LEVIATÁN AHORA',
        victoryTitle: '¡HAS DERROTADO AL LEVIATÁN TRANSACCIONAL!',
        victoryMsg: '🎉 ¡VICTORIA TOTAL EN EL 2DO PARCIAL! Has dominado las Transacciones ACID, MVCC, Formas Normales (1FN a 5FN/BCNF), Triggers PL/pgSQL y Optimización EXPLAIN.'
      }
    };

    this.bossMaxHp = 100;
    this.bossCurrentHp = 100;
    this.failedQuestions = [];
    this.boss1Failed = [];
    this.boss2Failed = [];
    this.currentIndex = 0;
    this.lives = 3;
    this.isFighting = false;

    this.initElements();
    this.bindEvents();
    this.selectBoss('1', false);
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

    // Dynamic Dual Boss elements
    this.activeBannerEl = document.getElementById('boss-active-banner');
    this.stageBannerEl = document.getElementById('boss-stage-banner');
    this.stageNameEl = document.getElementById('boss-stage-name');
    this.stageBadgeEl = document.getElementById('boss-stage-badge');
    this.purifiedTitleEl = document.getElementById('boss-purified-title');
    this.purifiedDescEl = document.getElementById('boss-purified-desc');
    this.challengeTitleEl = document.getElementById('boss-challenge-title');
    this.practiceBtnTextEl = document.getElementById('boss-practice-btn-text');
    this.startBossBtnTextEl = document.getElementById('start-boss-btn-text');
    this.battleStageEl = document.getElementById('boss-battle-stage');

    // Selector Cards
    this.card1El = document.getElementById('boss-card-1');
    this.card2El = document.getElementById('boss-card-2');
    this.card1BadgeEl = document.getElementById('boss-card-1-badge');
    this.card2BadgeEl = document.getElementById('boss-card-2-badge');
  }

  bindEvents() {
    // Boss Card Selectors
    if (this.card1El) {
      this.card1El.addEventListener('click', () => {
        if (this.isFighting) {
          if (!confirm('Hay una batalla en curso contra el Boss actual. ¿Deseas retirarte para cambiar de Boss?')) return;
          this.isFighting = false;
        }
        window.retroAudio.playBlip(700, 0.05);
        this.selectBoss('1');
      });
    }

    if (this.card2El) {
      this.card2El.addEventListener('click', () => {
        if (this.isFighting) {
          if (!confirm('Hay una batalla en curso contra el Boss actual. ¿Deseas retirarte para cambiar de Boss?')) return;
          this.isFighting = false;
        }
        window.retroAudio.playBlip(850, 0.05);
        this.selectBoss('2');
      });
    }

    const backToHubBtn = document.getElementById('boss-back-to-hub-btn');
    if (backToHubBtn) {
      backToHubBtn.addEventListener('click', () => {
        if (this.isFighting) {
          if (!confirm('¿Deseas retirarte de la arena de combate? El progreso del asalto actual se pausará.')) return;
          this.isFighting = false;
        }
        window.retroAudio.playBlip(400, 0.05);
        this.refreshView();
      });
    }

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
        this.startFight(true); // Practice mode with questions from selected boss scope
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

  selectBoss(bossId, playFeedback = true) {
    if (!this.bossConfigs[bossId]) bossId = '1';
    this.currentBoss = bossId;
    const cfg = this.bossConfigs[bossId];

    // Update active card styling
    if (this.card1El && this.card2El) {
      this.card1El.classList.toggle('active', bossId === '1');
      this.card2El.classList.toggle('active', bossId === '2');
    }

    // Update banners and visual texts
    if (this.activeBannerEl) this.activeBannerEl.src = cfg.banner;
    if (this.stageBannerEl) this.stageBannerEl.src = cfg.banner;
    if (this.stageNameEl) this.stageNameEl.textContent = cfg.name;
    if (this.stageBadgeEl) this.stageBadgeEl.textContent = cfg.badge;
    if (this.purifiedTitleEl) this.purifiedTitleEl.textContent = cfg.purifiedTitle;
    if (this.purifiedDescEl) this.purifiedDescEl.textContent = cfg.purifiedDesc;
    if (this.challengeTitleEl) this.challengeTitleEl.textContent = cfg.challengeTitle;
    if (this.practiceBtnTextEl) this.practiceBtnTextEl.textContent = cfg.practiceBtnText;
    if (this.startBossBtnTextEl) this.startBossBtnTextEl.textContent = cfg.startBtnText;

    // Theming class on battle stage
    if (this.battleStageEl) {
      this.battleStageEl.classList.remove('boss-theme-1', 'boss-theme-2');
      this.battleStageEl.classList.add(cfg.themeClass);
    }

    this.refreshView();
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

      // Sanitize stored IDs if stale keys or duplicates were present
      if (validCanonicalIds.length !== rawIds.length || JSON.stringify(validCanonicalIds) !== JSON.stringify(rawIds)) {
        localStorage.setItem('retro_bdd_failed_ids', JSON.stringify(validCanonicalIds));
      }

      // Partition questions by Boss / Parcial
      this.boss1Failed = validQuestions.filter(q => q.classNum <= 5);
      this.boss2Failed = validQuestions.filter(q => [6, 7, 9, 10].includes(q.classNum));

      // Active boss failed list
      this.failedQuestions = (this.currentBoss === '2') ? this.boss2Failed : this.boss1Failed;
    } catch (e) {
      this.boss1Failed = [];
      this.boss2Failed = [];
      this.failedQuestions = [];
    }

    this.updateCardBadges();
    this.updateBadge();
    return this.failedQuestions;
  }

  updateCardBadges() {
    const c1 = this.boss1Failed ? this.boss1Failed.length : 0;
    const c2 = this.boss2Failed ? this.boss2Failed.length : 0;

    if (this.card1BadgeEl) {
      this.card1BadgeEl.textContent = c1 > 0 ? `${c1} ERRORES PENDIENTES` : `PURIFICADO ✔`;
      this.card1BadgeEl.className = `boss-card-pending-badge ${c1 > 0 ? 'has-errors' : 'purified'}`;
    }

    if (this.card2BadgeEl) {
      this.card2BadgeEl.textContent = c2 > 0 ? `${c2} ERRORES PENDIENTES` : `PURIFICADO ✔`;
      this.card2BadgeEl.className = `boss-card-pending-badge ${c2 > 0 ? 'has-errors' : 'purified'}`;
    }
  }

  updateBadge() {
    const badge = document.getElementById('boss-badge-count');
    if (badge) {
      const totalCount = (this.boss1Failed ? this.boss1Failed.length : 0) + (this.boss2Failed ? this.boss2Failed.length : 0);
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'inline-block' : 'none';
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
    const cfg = this.bossConfigs[this.currentBoss];

    if (useAll) {
      // Practice mode: take random sample strictly from this boss's curriculum
      const pool = (window.QUESTIONS_DATABASE || []).filter(q => cfg.classes.includes(q.classNum));
      const shuffledPool = this.shuffle(pool);
      this.failedQuestions = shuffledPool.slice(0, 10).map(q => this.prepareQuestion(q));
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
    const cfg = this.bossConfigs[this.currentBoss];
    this.matchedPairs = new Set();
    this.selectedMatchLeft = null;

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
        <span class="question-topic-badge">⚡ ${cfg.badge}: ${q.topic}</span>
        <span class="question-unit-badge">${q.unit}</span>
      </div>
      <h3 class="question-title">${q.question}</h3>
      
      ${q.contextHtml ? `
        <div class="question-dataset-context">
          <div class="dataset-context-header">
            <span class="dataset-icon">📊</span>
            <span class="dataset-title">TABLAS Y DATOS DE REFERENCIA (CONTEXTO SQL)</span>
          </div>
          <div class="dataset-context-body">
            ${q.contextHtml}
          </div>
        </div>
      ` : ''}
      
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
        const k = (p.key !== undefined) ? p.key : p.left;
        html += `<div class="matching-card" data-side="left" data-key="${k}" data-idx="${idx}">${k}</div>`;
      });
      html += `</div><div class="matching-right">`;
      const shuffled = [...q.pairs].sort(() => 0.5 - Math.random());
      shuffled.forEach(p => {
        const k = (p.key !== undefined) ? p.key : p.left;
        const v = (p.value !== undefined) ? p.value : p.right;
        html += `<div class="matching-card" data-side="right" data-key="${k}" data-val="${v}">${v}</div>`;
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
    } else if (q.type === 'matching') {
      this.bindBossMatchingEvents();
    }
  }

  bindBossMatchingEvents() {
    const leftCards = this.bossQuestionBoxEl.querySelectorAll('.matching-card[data-side="left"]');
    const rightCards = this.bossQuestionBoxEl.querySelectorAll('.matching-card[data-side="right"]');

    leftCards.forEach(lCard => {
      lCard.addEventListener('click', () => {
        if (!this.isFighting || lCard.classList.contains('matched')) return;
        leftCards.forEach(c => c.classList.remove('active'));
        lCard.classList.add('active');
        this.selectedMatchLeft = lCard;
        window.retroAudio.playBlip(700, 0.03);
      });
    });

    rightCards.forEach(rCard => {
      rCard.addEventListener('click', () => {
        if (!this.isFighting || rCard.classList.contains('matched') || !this.selectedMatchLeft) return;
        const leftKey = this.selectedMatchLeft.getAttribute('data-key');
        const rightKey = rCard.getAttribute('data-key');

        if (leftKey === rightKey) {
          this.selectedMatchLeft.classList.remove('active');
          this.selectedMatchLeft.classList.add('matched');
          rCard.classList.add('matched');
          this.matchedPairs.add(leftKey);
          window.retroAudio.playCorrect();
          this.selectedMatchLeft = null;
        } else {
          window.retroAudio.playError();
          this.selectedMatchLeft.classList.remove('active');
          this.selectedMatchLeft = null;
        }
      });
    });
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
      if (this.matchedPairs.size < q.pairs.length) {
        alert('Por favor, une todos los pares conceptuales antes de atacar al Boss.');
        return;
      }
      isCorrect = (this.matchedPairs.size === q.pairs.length);
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
          alert(`¡El Boss te ha derrotado en la revancha! Repasa la teoría en el Grimorio e inténtalo de nuevo.`);
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
    const cfg = this.bossConfigs[this.currentBoss];
    alert(cfg.victoryMsg);
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
      
      // Update local partitions
      this.boss1Failed = updatedQuestions.filter(q => q.classNum <= 5);
      this.boss2Failed = updatedQuestions.filter(q => [6, 7, 9, 10].includes(q.classNum));
      this.failedQuestions = (this.currentBoss === '2') ? this.boss2Failed : this.boss1Failed;

      this.updateCardBadges();
      this.updateBadge();
    } catch (e) {}
  }
}

window.BossFightArena = BossFightArena;
