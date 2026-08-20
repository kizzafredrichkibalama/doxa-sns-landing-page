document.querySelector('.mobile-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
  document.querySelector('.nav-buttons')?.classList.toggle('open');
});