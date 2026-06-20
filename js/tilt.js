/* tilt.js — 3D tilt with dynamic light-glare sweep for elements with [data-tilt] */
(function () {
  const els = document.querySelectorAll('[data-tilt]');
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  els.forEach((el) => {
    const strength = +(el.dataset.tiltStrength || 10);
    let glare = el.querySelector('.tilt-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'tilt-glare';
      glare.style.cssText = 'position:absolute;inset:0;pointer-events:none;mix-blend-mode:overlay;opacity:0;transition:opacity .3s ease;background:radial-gradient(circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,.55), transparent 55%);';
      const cs = getComputedStyle(el);
      if (cs.position === 'static') el.style.position = 'relative';
      el.appendChild(glare);
    }

    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      const rx = (ny - 0.5) * -strength;
      const ry = (nx - 0.5) * strength;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.015,1.015,1.015)`;
      glare.style.setProperty('--gx', (nx * 100) + '%');
      glare.style.setProperty('--gy', (ny * 100) + '%');
      glare.style.opacity = '1';
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)';
      glare.style.opacity = '0';
    });
  });
})();