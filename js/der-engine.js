// Antigravity BDD: Live DER Diagram Engine with Mermaid.js & 8-Bit Retro Styling

class DerEngine {
  constructor() {
    this.editorEl = document.getElementById('der-code-editor');
    this.viewportEl = document.getElementById('der-canvas-render');
    this.renderBtnEl = document.getElementById('der-render-btn');
    this.presetSelectEl = document.getElementById('der-preset-select');
    this.debounceTimer = null;

    this.presets = {
      emp_dept: `erDiagram
    DEPARTAMENTOS ||--o{ EMPLEADOS : "pertenece"
    
    DEPARTAMENTOS {
        int id_departamento PK
        string nombre_departamento
    }
    
    EMPLEADOS {
        int id_empleado PK
        string nombre
        string apellido
        decimal salario
        int id_departamento FK
    }`,

      toyota_case: `erDiagram
    MODELOS ||--|{ VERSIONES : "posee"
    VERSIONES ||--o{ SUCURSALES : "distribuido_en"
    
    MODELOS {
        int id_modelo PK
        string nombre
        string tipo
    }
    
    VERSIONES {
        int id_version PK
        int id_modelo FK
        string nombre
        string motor
        decimal precio
    }
    
    SUCURSALES {
        int id_sucursal PK
        string nombre
        string ciudad
        int id_version FK
        int stock
    }`,

      ecommerce_full: `erDiagram
    CLIENTES ||--o{ PEDIDOS : "realiza"
    PEDIDOS ||--|{ DETALLE_PEDIDOS : "contiene"
    PRODUCTOS ||--o{ DETALLE_PEDIDOS : "referenciado_en"
    
    CLIENTES {
        int id_cliente PK
        string nombre
        string email
    }
    
    PEDIDOS {
        int id_pedido PK
        int id_cliente FK
        date fecha
        decimal total
    }
    
    DETALLE_PEDIDOS {
        int id_detalle PK
        int id_pedido FK
        int id_producto FK
        int cantidad
        decimal subtotal
    }
    
    PRODUCTOS {
        int id_producto PK
        string nombre
        decimal precio
    }`
    };

    this.initMermaid();
    this.bindEvents();
  }

  initMermaid() {
    if (typeof window.mermaid !== 'undefined') {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          darkMode: true,
          background: '#0a0d1a',
          primaryColor: '#12162b',
          primaryBorderColor: '#00f0ff',
          primaryTextColor: '#ffd700',
          lineColor: '#39ff14',
          secondaryColor: '#1b203a',
          tertiaryColor: '#0a0d1a'
        },
        er: {
          diagramPadding: 20,
          layoutDirection: 'TB',
          entityPadding: 15,
          useMaxWidth: true
        }
      });
      this.renderDiagram();
    } else {
      // Retry in 500ms
      setTimeout(() => this.initMermaid(), 500);
    }
  }

  bindEvents() {
    if (this.editorEl) {
      this.editorEl.value = this.presets.emp_dept;
      this.editorEl.addEventListener('input', () => {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => this.renderDiagram(), 400);
      });
    }

    if (this.renderBtnEl) {
      this.renderBtnEl.addEventListener('click', () => {
        window.retroAudio.playExecute();
        this.renderDiagram();
      });
    }

    if (this.presetSelectEl) {
      this.presetSelectEl.addEventListener('change', (e) => {
        const key = e.target.value;
        if (this.presets[key]) {
          this.editorEl.value = this.presets[key];
          window.retroAudio.playBlip(600, 0.04);
          this.renderDiagram();
        }
      });
    }
  }

  async renderDiagram() {
    if (!this.viewportEl || !this.editorEl) return;
    if (typeof window.mermaid === 'undefined') return;

    const code = this.editorEl.value.trim();
    if (!code) {
      this.viewportEl.innerHTML = '<span style="color: var(--text-muted);">Editor vacío. Escribe tu código Mermaid DER.</span>';
      return;
    }

    try {
      const id = 'mermaid-svg-' + Date.now();
      const { svg } = await window.mermaid.render(id, code);
      this.viewportEl.innerHTML = svg;
    } catch (err) {
      console.warn("Mermaid render error:", err);
      this.viewportEl.innerHTML = `<div style="color: var(--neon-red); font-size: 11px; padding: 16px; font-family: var(--font-mono);">⚠️ Sintaxis DER incompleta o con errores:<br>${err.message || 'Verifica la sintaxis del diagrama.'}</div>`;
    }
  }
}

window.DerEngine = DerEngine;
