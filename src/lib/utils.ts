const DEFAULT_THEME = 'light';
export type ColorTheme = 'light' | 'dark';

export const setColorTheme = (theme: ColorTheme): void => {
  localStorage.setItem('colorTheme', theme);
  document.documentElement.setAttribute('data-theme', theme);
};

export const getColorTheme = (): ColorTheme => {
  const theme = localStorage.getItem('colorTheme');
  if (!theme) {
    return DEFAULT_THEME;
  } else {
    theme;
  }
};
