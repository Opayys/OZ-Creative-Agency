/* magnetic.js — buttons with [data-magnetic] gently follow the cursor
   within their bounds, then spring back on mouse leave. */
(function () {
  const els = document.querySelectorAll('[data-magnetic]');
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(max-width: 760px)').matches) return;

  els.forEach((el) => {
    const strength = +(el.dataset.magneticStrength || 0.35);

    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) * strength;
      const dy = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0,0)';
    });
  });
})();