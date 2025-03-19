const listItems = document.querySelectorAll(".navbar__item");
const listAncors = document.querySelectorAll(".navbar__ancor");
const listIcons = document.querySelectorAll(".navbar__icon");
console.log(listItems);
listItems.forEach(item => {
  item.addEventListener("click", () => {
    // Quitar la clase de todos los elementos
    listItems.forEach(li => li.classList.remove("navbar__item--selected"));
    listAncors.forEach(a => a.classList.remove("navbar__ancor--selected"));
    listIcons.forEach(svg => svg.classList.remove("navbar__icon--selected"));
    // Agregar la clase al elemento clicado
    item.classList.add("navbar__item--selected");
    item.querySelector(".navbar__ancor").classList.add("navbar__ancor--selected");
    item.querySelector(".navbar__icon").classList.add("navbar__icon--selected");
  });
});