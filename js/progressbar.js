// Escuchamos el evento de scroll
window.addEventListener('scroll', () => {
  // Calculamos el porcentaje de scroll
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Actualizamos la variable CSS personalizada
  document.documentElement.style.setProperty('--scroll', `${scrollPercent}%`);
});
