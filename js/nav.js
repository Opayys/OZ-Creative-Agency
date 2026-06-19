/* nav.js — sticky border on scroll + mobile hamburger toggle */
(function () {
  const nav = document.getElementById('siteNav');
  const hbg = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  if (hbg && links) {
    hbg.addEventListener('click', () => {
      hbg.classList.toggle('open');
      links.classList.toggle('open');
    });
  }
})();