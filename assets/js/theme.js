(function () {
  var key = 'pref-theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(key, theme); } catch (e) {}
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var isDark = theme === 'dark';
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      var moon = btn.querySelector('[data-icon-dark]');
      var sun  = btn.querySelector('[data-icon-light]');
      if (moon && sun) {
        moon.classList.toggle('d-none', !isDark);
        sun.classList.toggle('d-none',  isDark);
      }
      btn.title = isDark ? 'Light mode' : 'Dark mode';
    }
  }

  // Initialzustand (falls pre-init Script fehlt, hier Fallback):
  var initial = document.documentElement.getAttribute('data-theme');
  if (!initial) {
    var stored = localStorage.getItem(key);
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    initial = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initial);
  }
  apply(initial);

  // OS-Präferenz-Änderung respektieren, solange der Nutzer nichts explizit gewählt hat
  if (window.matchMedia) {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener && mql.addEventListener('change', function (e) {
      if (!localStorage.getItem(key)) {
        apply(e.matches ? 'dark' : 'light');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
        apply(next);
      });
    }
  });
})();
