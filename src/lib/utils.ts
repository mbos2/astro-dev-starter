export const setColorTheme = () => {
  const theme = localStorage.getItem('colorTheme');
    
  if (!theme) {
    localStorage.setItem('colorTheme', 'dark');
    return document.documentElement.setAttribute('data-theme', 'dark');
  }

  document.documentElement.removeAttribute('data-theme');
  localStorage.removeItem('colorTheme');
}

export const initColorTheme = () => {
  const theme = localStorage.getItem('colorTheme');
  if(theme) {
    return document.documentElement.setAttribute('data-theme', theme); 
  }
  document.documentElement.removeAttribute('data-theme');
}