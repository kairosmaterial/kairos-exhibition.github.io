// ===== Language Toggle =====
(function () {
  const toggle = document.getElementById('lang-toggle');
  const html = document.documentElement;
  let currentLang = 'zh';

  function applyLang(lang) {
    currentLang = lang;
    html.lang = lang === 'zh' ? 'zh' : 'en';

    // Swap text for all elements with data-zh / data-en
    document.querySelectorAll('[data-zh][data-en]').forEach(function (el) {
      el.textContent = el.getAttribute('data-' + lang);
    });

    // Update toggle button label
    toggle.textContent = lang === 'zh' ? 'EN' : '中';
  }

  toggle.addEventListener('click', function () {
    applyLang(currentLang === 'zh' ? 'en' : 'zh');
  });

  // Init
  applyLang('zh');
})();
