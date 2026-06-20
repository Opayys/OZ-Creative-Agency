/* cursor.js — small magnetic dot cursor, grows on interactive elements */
(function () {
  if (window.matchMedia('(max-width: 860px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dot = document.createElement('div');
  dot.id = 'cursorDot';
  document.body.appendChild(dot);

  let mx = 0, my = 0, dx = 0, dy = 0;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
  });

  function loop() {
    dx += (mx - dx) * 0.22;
    dy += (my - dy) * 0.22;
    dot.style.left = dx + 'px';
    dot.style.top = dy + 'px';
    requestAnimationFrame(loop);
  }
  loop();

  const hoverables = 'a, button, .btn, .chip, .flat-card, .clickable-row, [data-tilt], input, textarea, select';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverables)) dot.classList.add('grow');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverables)) dot.classList.remove('grow');
  });
})();