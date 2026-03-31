/* ═══════════════════════════════════════
   Hero Background — Animated Mesh Gradient
   Smooth flowing aurora/water effect
   ═══════════════════════════════════════ */
(function() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w, h;
  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Color orbs that float and blend
  const orbs = [
    { x: 0.3, y: 0.2, r: 0.45, color: [251, 94, 1],   speed: 0.002,  phase: 0,    drift: 0.25 },
    { x: 0.7, y: 0.5, r: 0.40, color: [38, 198, 218],  speed: 0.0015, phase: 2,    drift: 0.22 },
    { x: 0.2, y: 0.7, r: 0.35, color: [120, 80, 240],  speed: 0.0025, phase: 4,    drift: 0.28 },
    { x: 0.8, y: 0.2, r: 0.30, color: [251, 150, 50],  speed: 0.003,  phase: 1,    drift: 0.20 },
    { x: 0.5, y: 0.8, r: 0.38, color: [0, 180, 200],   speed: 0.0018, phase: 3,    drift: 0.24 },
    { x: 0.6, y: 0.3, r: 0.25, color: [200, 60, 80],   speed: 0.0035, phase: 5,    drift: 0.26 },
  ];

  let time = 0;

  function draw() {
    time++;
    ctx.clearRect(0, 0, w, h);

    // Dark base
    ctx.fillStyle = '#0f1e33';
    ctx.fillRect(0, 0, w, h);

    // Draw each orb
    for (const orb of orbs) {
      const t = time * orb.speed + orb.phase;
      const cx = (orb.x + Math.sin(t * 1.3) * orb.drift + Math.cos(t * 0.7) * orb.drift * 0.5) * w;
      const cy = (orb.y + Math.cos(t * 0.9) * orb.drift + Math.sin(t * 1.1) * orb.drift * 0.5) * h;
      const radius = orb.r * Math.min(w, h) * (1 + Math.sin(t * 0.5) * 0.1);

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]}, 0.35)`);
      gradient.addColorStop(0.4, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]}, 0.15)`);
      gradient.addColorStop(1, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]}, 0)`);

      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    }

    // Reset composite
    ctx.globalCompositeOperation = 'source-over';

    // Subtle noise/dot grid overlay
    ctx.fillStyle = 'rgba(255,255,255,0.015)';
    for (let x = 0; x < w; x += 32) {
      for (let y = 0; y < h; y += 32) {
        ctx.fillRect(x, y, 1, 1);
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
})();
