export function openInNewTab(url: string) {
  if (!window) {
    console.warn('window não está definido.');
    return;
  }
  const win = window.open(url, '_blank')
  if (!win) {
    console.warn('Não foi possível abrir a nova aba.');
    return;
  }

  win.focus();
}