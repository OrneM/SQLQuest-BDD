// Antigravity BDD: Main Application Orchestrator (V2)

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Components
  const exam = new window.TimeAttackExam();
  const bossArena = new window.BossFightArena();
  const sqlLab = new window.SqlLabEngine();
  const der = new window.DerEngine();
  const grimoire = new window.GrimoireViewer();

  // Navigation Tabs Switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }

      window.retroAudio.playBlip(550, 0.03);

      // Special triggers on tab activation
      if (targetTabId === 'tab-boss-fight') {
        bossArena.refreshView();
      } else if (targetTabId === 'tab-der-engine') {
        setTimeout(() => der.renderDiagram(), 100);
      }
    });
  });

  // Sound Toggle Button
  const soundToggleBtn = document.getElementById('toggle-sound-btn');
  const soundIcon = document.getElementById('sound-status-icon');

  function updateSoundUI() {
    if (window.retroAudio.isMuted()) {
      if (soundIcon) soundIcon.textContent = '🔇 MUTE';
      if (soundToggleBtn) soundToggleBtn.classList.remove('btn-green');
    } else {
      if (soundIcon) soundIcon.textContent = '🔊 AUDIO ON';
      if (soundToggleBtn) soundToggleBtn.classList.add('btn-green');
    }
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      window.retroAudio.toggleMute();
      updateSoundUI();
    });
    updateSoundUI();
  }

  // CRT Scanlines Mode Toggle (Off -> Soft -> Arcade)
  const crtToggleBtn = document.getElementById('toggle-crt-btn');
  const crtIcon = document.getElementById('crt-status-icon');
  const crtOverlay = document.getElementById('crt-overlay-layer');
  const crtVignette = document.getElementById('crt-vignette-layer');

  let crtMode = localStorage.getItem('retro_crt_mode') || 'soft'; // 'off', 'soft', 'arcade'

  function applyCrtMode(mode) {
    crtMode = mode;
    localStorage.setItem('retro_crt_mode', mode);

    if (mode === 'off') {
      if (crtOverlay) crtOverlay.classList.add('disabled');
      if (crtVignette) crtVignette.classList.add('disabled');
      if (crtIcon) crtIcon.textContent = '📺 CRT: OFF';
      if (crtToggleBtn) crtToggleBtn.className = 'btn-retro';
    } else if (mode === 'soft') {
      if (crtOverlay) {
        crtOverlay.classList.remove('disabled');
        crtOverlay.style.opacity = '0.25';
      }
      if (crtVignette) crtVignette.classList.remove('disabled');
      if (crtIcon) crtIcon.textContent = '📺 CRT: SUAVE';
      if (crtToggleBtn) crtToggleBtn.className = 'btn-retro btn-cyan';
    } else if (mode === 'arcade') {
      if (crtOverlay) {
        crtOverlay.classList.remove('disabled');
        crtOverlay.style.opacity = '0.65';
      }
      if (crtVignette) crtVignette.classList.remove('disabled');
      if (crtIcon) crtIcon.textContent = '📺 CRT: RETRO';
      if (crtToggleBtn) crtToggleBtn.className = 'btn-retro btn-magenta';
    }
  }

  if (crtToggleBtn) {
    crtToggleBtn.addEventListener('click', () => {
      window.retroAudio.playBlip(600, 0.04);
      if (crtMode === 'soft') applyCrtMode('off');
      else if (crtMode === 'off') applyCrtMode('arcade');
      else applyCrtMode('soft');
    });
    applyCrtMode(crtMode);
  }

  // Audio unlock listener on first user interaction
  const unlockAudio = () => {
    window.retroAudio.ensureContext();
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('keydown', unlockAudio);
  };
  document.addEventListener('click', unlockAudio);
  document.addEventListener('keydown', unlockAudio);

  // Close Modals handler
  const closeGameOverBtn = document.getElementById('close-game-over-btn');
  if (closeGameOverBtn) {
    closeGameOverBtn.addEventListener('click', () => {
      document.getElementById('modal-game-over').classList.remove('active');
    });
  }

  const closeVictoryBtn = document.getElementById('close-victory-btn');
  if (closeVictoryBtn) {
    closeVictoryBtn.addEventListener('click', () => {
      document.getElementById('modal-victory').classList.remove('active');
    });
  }

  // Close Lightbox modal handler
  const closeLightboxBtn = document.getElementById('close-lightbox-btn');
  const lightboxModal = document.getElementById('modal-infographic-lightbox');
  if (closeLightboxBtn && lightboxModal) {
    closeLightboxBtn.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }
});
