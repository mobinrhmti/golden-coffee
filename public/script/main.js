// Main Application Entry Point
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Theme Manager
  const themeManager = new ThemeManager();
  themeManager.initializeTheme();

  // Theme switcher event listeners
  const themeSwitcher = document.getElementById('theme-switcher');
  themeSwitcher?.addEventListener('click', () => themeManager.toggleTheme());

  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  mobileThemeToggle?.addEventListener('click', () => themeManager.toggleTheme());

  // Initialize Navigation Manager
  const navigationManager = new NavigationManager();
  navigationManager.initialize();
});
