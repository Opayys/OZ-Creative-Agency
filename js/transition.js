/* transition.js — flat curtain wipe between internal page navigations */
(function () {
  document.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;

    a.addEventListener('click', (e) => {
      e.preventDefault();
      const curtain = document.createElement('div');
      curtain.style.cssText =
        'position:fixed;inset:0;z-index:9999;background:#0E0E0E;' +
        'transform:scaleY(0);transform-origin:bottom;' +
        'animation:curtainIn .45s cubic-bezier(.77,0,.175,1) forwards';
      document.body.appendChild(curtain);
      setTimeout(() => { window.location.href = href; }, 430);
    });
  });
})();