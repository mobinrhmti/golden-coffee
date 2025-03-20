// Theme Management Class
class ThemeManager {
  constructor() {
    this.root = document.documentElement;
    this.themeIcons = {
      dark: '#sun',
      light: '#moon'
    };
    this.themeText = {
      dark: 'تم روشن',
      light: 'تم تیره'
    };
  }

  initializeTheme() {
    const isDark = localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    this.setTheme(isDark ? 'dark' : 'light');
  }

  setTheme(theme) {
    this.root.classList.toggle('dark', theme === 'dark');
    localStorage.theme = theme;
    this.updateThemeUI(theme);
  }

  toggleTheme() {
    const newTheme = this.root.classList.contains('dark') ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  updateThemeUI(theme) {
    const menuThemeSwitcher = document.getElementById('menu-theme-switcher');
    const themeText = document.getElementById('theme-text');

    if (menuThemeSwitcher) {
      menuThemeSwitcher.innerHTML = `<use xlink:href="${this.themeIcons[theme]}"></use>`;
    }

    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
      const useElement = themeSwitcher.querySelector('use');
      if (useElement) {
        useElement.setAttribute('xlink:href', this.themeIcons[theme]);
      }
    }

    if (themeText) {
      themeText.textContent = this.themeText[theme];
    }
  }
}
