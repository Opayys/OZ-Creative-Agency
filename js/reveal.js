/* reveal.js — IntersectionObserver-based scroll reveal for .rv and .rv-stagger elements */
(function () {
  const els = document.querySelectorAll('.rv, .rv-stagger');
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => io.observe(el));
})();