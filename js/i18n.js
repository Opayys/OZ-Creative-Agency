/* i18n.js — lightweight bilingual switcher (Indonesian default / English)
   Usage: add data-i18n="key" to any element's text, or data-i18n-html="key"
   if the string contains inline tags. Translations live in the DICT object
   below, keyed by page so the dictionary stays manageable. */
(function () {
  const DICT = {
    common: {
      nav_home: { id: 'beranda', en: 'home' },
      nav_projects: { id: 'proyek', en: 'projects' },
      nav_services: { id: 'layanan', en: 'services' },
      nav_contact: { id: 'kontak', en: 'contact' },
      footer_tagline: {
        id: 'Fullstack · AI Engineering · Blockchain. Membangun dari Jambi, Indonesia.',
        en: 'Fullstack · AI Engineering · Blockchain. Built from Jambi, Indonesia.'
      },
      footer_nav: { id: 'navigasi', en: 'navigation' },
      footer_projects: { id: 'proyek', en: 'projects' },
      footer_connect: { id: 'terhubung', en: 'connect' },
      footer_built: { id: 'dibangun oleh', en: 'built by' },
      footer_loc: { id: 'jambi, indonesia', en: 'jambi, indonesia' },
      btn_contact_us: { id: 'hubungi kami', en: 'contact us' },
      btn_view_services: { id: 'lihat layanan', en: 'view services' },
      btn_view_work: { id: 'lihat hasil kerja', en: 'view our work' },
      btn_view_details: { id: 'lihat detail lengkap', en: 'view full details' },
      btn_live_demo: { id: 'demo langsung', en: 'live demo' },
      btn_github: { id: 'github', en: 'github' },
      status_live: { id: 'aktif / live', en: 'live / active' },
      status_internal: { id: 'internal', en: 'internal' }
    }
  };

  const STORAGE_KEY = 'oz_lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'id';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    updateSwitcherUI(lang);
  }

  function lookup(key) {
    for (const ns in DICT) {
      if (DICT[ns][key]) return DICT[ns][key];
    }
    return null;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const entry = lookup(el.dataset.i18n);
      if (entry && entry[lang]) el.textContent = entry[lang];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const entry = lookup(el.dataset.i18nHtml);
      if (entry && entry[lang]) el.innerHTML = entry[lang];
    });
    // Toggle elements that are language-specific blocks
    document.querySelectorAll('[data-lang-id]').forEach((el) => {
      el.style.display = lang === 'id' ? '' : 'none';
    });
    document.querySelectorAll('[data-lang-en]').forEach((el) => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
  }

  function updateSwitcherUI(lang) {
    document.querySelectorAll('.lang-switch [data-lang-btn]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();
    applyLang(lang);
    updateSwitcherUI(lang);

    document.querySelectorAll('.lang-switch [data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.dataset.langBtn));
    });
  });
})();