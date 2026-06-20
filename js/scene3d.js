/* scene3d.js — dependency-free pseudo-3D wireframe node network.
   Renders a rotating cluster of connected nodes on a <canvas data-scene3d>.
   No WebGL/Three.js needed — uses manual perspective projection on 2D canvas,
   styled to match the flat ledger aesthetic (ink lines, moss/rust nodes). */
(function () {
  const canvases = document.querySelectorAll('[data-scene3d]');
  if (!canvases.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  canvases.forEach((canvas) => initScene(canvas));

  function initScene(canvas) {
    const ctx = canvas.getContext('2d');
    const density = +(canvas.dataset.density || 22);
    const radius = +(canvas.dataset.radius || 1);
    let W, H, DPR;
    let rotX = 0.4, rotY = 0;
    let targetRotY = 0;
    let autoRotate = true;
    let nodes = [];
    let edges = [];

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.width = rect.width * DPR;
      H = canvas.height = rect.height * DPR;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    }
    window.addEventListener('resize', resize);
    resize();

    // Generate points roughly on a sphere (fibonacci sphere distribution)
    function buildNodes() {
      nodes = [];
      const n = density;
      const offset = 2 / n;
      const increment = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < n; i++) {
        const y = i * offset - 1 + offset / 2;
        const r = Math.sqrt(1 - y * y);
        const phi = i * increment;
        nodes.push({
          x: Math.cos(phi) * r,
          y: y,
          z: Math.sin(phi) * r,
        });
      }
      // connect nearby nodes
      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < 0.62) edges.push([i, j]);
        }
      }
    }
    buildNodes();

    function project(p) {
      // rotate around Y then X
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      let x = p.x * cosY - p.z * sinY;
      let z = p.x * sinY + p.z * cosY;
      let y = p.y;

      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      let y2 = y * cosX - z * sinX;
      let z2 = y * sinX + z * cosX;

      const scale = 1.7 / (1.7 - z2 * 0.9); // perspective
      const sx = W / 2 + x * (Math.min(W, H) * 0.34) * scale * radius;
      const sy = H / 2 + y2 * (Math.min(W, H) * 0.34) * scale * radius;
      return { x: sx, y: sy, z: z2, scale };
    }

    let mx = 0, lastInteract = 0;
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mx = (e.clientX - rect.left) / rect.width - 0.5;
      targetRotY = mx * 1.1;
      lastInteract = performance.now();
    });
    canvas.addEventListener('mouseleave', () => { lastInteract = 0; });

    const inkColor = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#0E0E0E';
    const mossColor = getComputedStyle(document.documentElement).getPropertyValue('--moss').trim() || '#3D5C3A';
    const rustColor = getComputedStyle(document.documentElement).getPropertyValue('--rust').trim() || '#C4471E';
    const stoneColor = getComputedStyle(document.documentElement).getPropertyValue('--stone').trim() || '#8B8478';

    function frame(t) {
      ctx.clearRect(0, 0, W, H);

      const interacting = performance.now() - lastInteract < 1400;
      if (!interacting) {
        rotY += 0.0028;
      } else {
        rotY += (targetRotY - rotY) * 0.04;
      }

      const projected = nodes.map(project);

      // edges
      ctx.lineWidth = 1 * DPR;
      edges.forEach(([a, b]) => {
        const pa = projected[a], pb = projected[b];
        const avgZ = (pa.z + pb.z) / 2;
        const op = Math.max(0.05, Math.min(0.5, (avgZ + 1) / 2.2));
        ctx.strokeStyle = hexToRgba(inkColor, op * 0.55);
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      });

      // nodes
      projected.forEach((p, i) => {
        const op = Math.max(0.25, Math.min(1, (p.z + 1) / 1.6));
        const r = 2.4 * DPR * p.scale;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        const color = i % 7 === 0 ? mossColor : (i % 11 === 0 ? rustColor : inkColor);
        ctx.fillStyle = hexToRgba(color, op);
        ctx.fill();
      });

      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    function hexToRgba(hex, alpha) {
      hex = hex.replace('#', '').trim();
      if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }
  }
})();