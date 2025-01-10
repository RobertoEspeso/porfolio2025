const list = document.querySelector('.technologies__list');

// Duplicar elementos para asegurar que el carrusel se vea continuo
const clone = list.innerHTML;
list.innerHTML += clone;