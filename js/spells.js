// Antigravity BDD: Conjuros SQL - Controlador de UI, Buscador en Vivo y Filtrado por Familias

class SqlSpellsViewer {
  constructor() {
    this.currentCategory = 'all'; // 'all' | 'dql' | 'dml' | 'ddl' | 'tcl' | 'dcl' | 'constraint'
    this.searchQuery = '';
    this.database = window.SQL_SPELLS_DATABASE || [];

    this.initElements();
    this.bindEvents();
    this.renderSpells();
  }

  initElements() {
    this.searchInputEl = document.getElementById('spells-search-input');
    this.clearSearchBtnEl = document.getElementById('spells-clear-search-btn');
    this.categoryPillsContainer = document.getElementById('spells-category-pills');
    this.cardsContainerEl = document.getElementById('spells-cards-container');
    this.countBadgeEl = document.getElementById('spells-count-badge');
    this.activeFilterLabelEl = document.getElementById('spells-active-filter-label');
  }

  bindEvents() {
    // Live Search Input with Instant Filtering
    if (this.searchInputEl) {
      this.searchInputEl.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (this.clearSearchBtnEl) {
          this.clearSearchBtnEl.style.display = this.searchQuery.length > 0 ? 'inline-flex' : 'none';
        }
        this.renderSpells();
      });
    }

    // Clear Search Button
    if (this.clearSearchBtnEl) {
      this.clearSearchBtnEl.addEventListener('click', () => {
        if (this.searchInputEl) {
          this.searchInputEl.value = '';
          this.searchInputEl.focus();
        }
        this.searchQuery = '';
        this.clearSearchBtnEl.style.display = 'none';
        window.retroAudio.playBlip(600, 0.03);
        this.renderSpells();
      });
    }

    // Category Filter Pills delegation
    if (this.categoryPillsContainer) {
      this.categoryPillsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.spell-category-pill');
        if (!btn) return;

        const cat = btn.getAttribute('data-category');
        if (cat) {
          this.currentCategory = cat;
          this.categoryPillsContainer.querySelectorAll('.spell-category-pill').forEach(b => {
            b.classList.remove('active');
          });
          btn.classList.add('active');
          window.retroAudio.playBlip(700, 0.04);
          this.renderSpells();
        }
      });
    }

    // Global copy notification delegation on cards container
    if (this.cardsContainerEl) {
      this.cardsContainerEl.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.copy-spell-btn');
        if (copyBtn) {
          const rawCode = decodeURIComponent(copyBtn.getAttribute('data-code') || '');
          this.copyToClipboard(rawCode, copyBtn);
          return;
        }

        const runLabBtn = e.target.closest('.run-lab-spell-btn');
        if (runLabBtn) {
          const labCode = decodeURIComponent(runLabBtn.getAttribute('data-lab-code') || '');
          this.openInSqlLab(labCode);
          return;
        }
      });
    }
  }

  normalizeString(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/[-_]/g, ' ')           // Normalize dashes and underscores to space
      .trim();
  }

  filterSpells() {
    return this.database.filter(spell => {
      // Category filter
      const matchesCategory = (this.currentCategory === 'all') || (spell.category === this.currentCategory);
      if (!matchesCategory) return false;

      // Search query filter
      if (!this.searchQuery) return true;

      const qNorm = this.normalizeString(this.searchQuery);
      const qTokens = qNorm.split(/\s+/).filter(Boolean);

      const searchableBlob = this.normalizeString([
        spell.name,
        spell.subtitle,
        spell.description,
        spell.syntax,
        spell.example,
        spell.categoryLabel,
        ...(Array.isArray(spell.keywords) ? spell.keywords : [])
      ].join(' '));

      // Match all query tokens (AND search)
      return qTokens.every(token => searchableBlob.includes(token));
    });
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  highlightMatch(text, query) {
    if (!query || !text) return text;
    // Don't break HTML tags if text contains them
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, `<mark class="spell-highlight">$1</mark>`);
  }

  renderSpells() {
    if (!this.cardsContainerEl) return;

    const filtered = this.filterSpells();

    // Update count badge & active label
    if (this.countBadgeEl) {
      this.countBadgeEl.textContent = `${filtered.length} de ${this.database.length} Conjuros`;
    }
    if (this.activeFilterLabelEl) {
      const catNames = {
        all: "Todos los Conjuros",
        dql: "DQL (Data Query Language)",
        dml: "DML (Data Manipulation Language)",
        ddl: "DDL (Data Definition Language)",
        tcl: "TCL (Transaction Control Language)",
        dcl: "DCL (Data Control Language)",
        constraint: "Restricciones & Claves (Constraints)"
      };
      const catText = catNames[this.currentCategory] || "Conjuros";
      const searchSuffix = this.searchQuery ? ` • Búsqueda: "${this.searchQuery}"` : '';
      this.activeFilterLabelEl.textContent = `${catText}${searchSuffix}`;
    }

    if (filtered.length === 0) {
      this.cardsContainerEl.innerHTML = `
        <div class="spells-empty-state">
          <div class="empty-icon">📜✨</div>
          <h3 class="empty-title">¡NINGÚN CONJURO COINCIDE CON TU BÚSQUEDA!</h3>
          <p class="empty-desc">
            No se encontraron conjuros para <strong>"${this.escapeHtml(this.searchQuery)}"</strong> en la categoría seleccionada.<br>
            Prueba buscando términos generales como <code>JOIN</code>, <code>UPDATE</code>, <code>PRIMARY KEY</code> o selecciona <strong>"✨ TODOS"</strong>.
          </p>
          <button class="btn-retro btn-cyan" id="reset-spells-filter-btn" type="button" style="margin-top: 14px;">
            <span>🔄 RESTABLECER FILTROS</span>
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('reset-spells-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.currentCategory = 'all';
          this.searchQuery = '';
          if (this.searchInputEl) this.searchInputEl.value = '';
          if (this.clearSearchBtnEl) this.clearSearchBtnEl.style.display = 'none';
          if (this.categoryPillsContainer) {
            this.categoryPillsContainer.querySelectorAll('.spell-category-pill').forEach(b => {
              b.classList.remove('active');
            });
            const allBtn = this.categoryPillsContainer.querySelector('[data-category="all"]');
            if (allBtn) allBtn.classList.add('active');
          }
          window.retroAudio.playBlip(750, 0.05);
          this.renderSpells();
        });
      }
      return;
    }

    let html = '';

    filtered.forEach((spell) => {
      const encodedSyntax = encodeURIComponent(spell.syntax);
      const encodedLab = encodeURIComponent(spell.exampleLabQuery || spell.example);

      const highlightedName = this.searchQuery ? this.highlightMatch(spell.name, this.searchQuery) : spell.name;
      const highlightedSubtitle = this.searchQuery ? this.highlightMatch(spell.subtitle, this.searchQuery) : spell.subtitle;

      html += `
        <article class="spell-card category-${spell.category}" id="${spell.id}">
          <div class="spell-card-header">
            <div class="spell-header-main">
              <span class="spell-category-tag ${spell.badgeColor}">
                ${spell.categoryLabel}
              </span>
              <h3 class="spell-title">${highlightedName}</h3>
              <p class="spell-subtitle">${highlightedSubtitle}</p>
            </div>
            <div class="spell-header-actions">
              <button class="btn-retro btn-cyan copy-spell-btn" type="button" data-code="${encodedSyntax}" title="Copiar sintaxis al portapapeles">
                <span>📋 COPIAR</span>
              </button>
              <button class="btn-retro btn-green run-lab-spell-btn" type="button" data-lab-code="${encodedLab}" title="Abrir y ejecutar este ejemplo en SQL Lab">
                <span>⚡ PROBAR EN LAB</span>
              </button>
            </div>
          </div>

          <div class="spell-body">
            <div class="spell-desc-box">
              <p class="spell-desc-text">${spell.description}</p>
            </div>

            <div class="spell-code-sections-grid">
              <!-- Bloque de Sintaxis Canónica -->
              <div class="spell-code-column">
                <div class="spell-code-header">
                  <span class="spell-code-title">📐 SINTAXIS OFICIAL</span>
                </div>
                <pre class="spell-code-block"><code>${this.escapeHtml(spell.syntax)}</code></pre>
              </div>

              <!-- Bloque de Ejemplo Práctico de Invocación -->
              <div class="spell-code-column">
                <div class="spell-code-header">
                  <span class="spell-code-title">🔮 EJEMPLO DE INVOCACIÓN</span>
                </div>
                <pre class="spell-code-block example"><code>${this.escapeHtml(spell.example)}</code></pre>
              </div>
            </div>

            <!-- Consejo / Regla de Oro / Alerta de Invocación -->
            <div class="spell-tips-banner">
              <div class="spell-tips-content">
                ${spell.tips}
              </div>
            </div>
          </div>
        </article>
      `;
    });

    this.cardsContainerEl.innerHTML = html;
  }

  copyToClipboard(text, btnElement) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      window.retroAudio.playBlip(900, 0.06);
      const originalHtml = btnElement.innerHTML;
      btnElement.innerHTML = '<span>✔ ¡COPIADO!</span>';
      btnElement.classList.add('btn-green');
      btnElement.classList.remove('btn-cyan');

      setTimeout(() => {
        btnElement.innerHTML = originalHtml;
        btnElement.classList.remove('btn-green');
        btnElement.classList.add('btn-cyan');
      }, 1800);
    }).catch(() => {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      window.retroAudio.playBlip(900, 0.06);
      btnElement.innerHTML = '<span>✔ ¡COPIADO!</span>';
      setTimeout(() => {
        btnElement.innerHTML = '<span>📋 COPIAR</span>';
      }, 1800);
    });
  }

  openInSqlLab(sqlCode) {
    if (!sqlCode) return;
    window.retroAudio.playBlip(800, 0.08);

    // Switch to SQL Lab tab
    const sqlLabTabBtn = document.querySelector('.tab-btn[data-tab="tab-sql-lab"]');
    if (sqlLabTabBtn) {
      sqlLabTabBtn.click();
    }

    // Set editor content
    const editor = document.getElementById('sql-query-editor') || document.getElementById('sql-query-input');
    if (editor) {
      editor.value = sqlCode;
      editor.focus();

      // Pulse highlight effect on editor
      editor.classList.add('editor-target-pulse');
      setTimeout(() => {
        editor.classList.remove('editor-target-pulse');
      }, 1500);

      // Scroll editor into view smoothly
      editor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

window.SqlSpellsViewer = SqlSpellsViewer;
