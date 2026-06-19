/* tilt.js — subtle 3D tilt on mouse move for elements with [data-tilt] */
(function () {
  const els = document.querySelectorAll('[data-tilt]');
  if (!els.length) return;

  els.forEach((el) => {
    const strength = +(el.dataset.tiltStrength || 10);

    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      const rx = (ny - 0.5) * -strength;
      const ry = (nx - 0.5) * strength;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
    });
  });
})();