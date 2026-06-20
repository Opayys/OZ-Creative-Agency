/* scramble.js — terminal-style decode/scramble-in animation for [data-scramble]
   elements. Plays once when the element enters the viewport. */
(function () {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01#$%&*';
  const els = document.querySelectorAll('[data-scramble]');
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function scramble(el) {
    const final = el.textContent;
    const len = final.length;
    let frame = 0;
    const totalFrames = 18;

    function tick() {
      let out = '';
      for (let i = 0; i < len; i++) {
        const char = final[i];
        if (char === ' ') { out += ' '; continue; }
        const revealAt = (i / len) * totalFrames;
        if (frame >= revealAt + 6) {
          out += char;
        } else if (frame >= revealAt) {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          out += '';
        }
      }
      el.textContent = out;
      frame++;
      if (frame <= totalFrames + 6) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = final;
      }
    }
    tick();
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        scramble(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });

  els.forEach((el) => io.observe(el));
})();