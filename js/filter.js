/* filter.js — category filter tabs for the projects page */
(function () {
  const tabs = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('[data-cat]');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;

      items.forEach((item) => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.style.transition = 'opacity .3s ease';
        item.style.opacity = show ? '1' : '0';
        item.style.pointerEvents = show ? '' : 'none';
        item.style.position = show ? '' : 'absolute';
      });
    });
  });
})();