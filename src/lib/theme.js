export function applyInitialTheme() {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }