(function() {
  const key = "pref-theme";
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  function setTheme(value) {
    if (value === "dark" || value === "light") {
      root.setAttribute("data-theme", value);
      localStorage.setItem(key, value);
    } else {
      root.setAttribute("data-theme", "auto");
      localStorage.removeItem(key);
    }
  }

  // Initialize
  const stored = localStorage.getItem(key);
  if (stored) setTheme(stored); else setTheme("auto");

  if (btn) {
    btn.addEventListener("click", function() {
      const now = root.getAttribute("data-theme");
      setTheme(now === "dark" ? "light" : "dark");
    });
  }
})();
