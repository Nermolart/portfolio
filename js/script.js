<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
//menu bars
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".menu");

// Abrir el menú
menuIcon.addEventListener("click", function () {
    menu.classList.add("show");
});

// Cerrar el menú con la "X"
closeIcon.addEventListener("click", function () {
    menu.classList.remove("show");
});

// Cerrar el menú si haces clic fuera de él
document.addEventListener("click", function (e) {
    if (!e.target.closest(".menu") && !e.target.closest(".menu-icon")) {
        menu.classList.remove("show");
    }
});


//CV
const ampliableImg = document.querySelector('.ampliable');
const fullscreenContainer = document.getElementById('fullscreen-container');
const fullscreenImg = document.getElementById('fullscreen-img');

// Ampliar la imagen
ampliableImg.addEventListener('click', () => {
    fullscreenImg.src = ampliableImg.src; // Copia la fuente de la imagen
    fullscreenContainer.style.display = 'flex'; // Muestra el contenedor
});

// Cerrar la imagen al hacer clic fuera de ella
fullscreenContainer.addEventListener('click', () => {
    fullscreenContainer.style.display = 'none'; // Oculta el contenedor
});


//FECHA FOOTER
const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear(); // Obtiene el año actual
    yearElement.textContent = currentYear; // Establece el texto del año
=======
const ampliableImg = document.querySelector('.ampliable');
const fullscreenContainer = document.getElementById('fullscreen-container');
const fullscreenImg = document.getElementById('fullscreen-img');

// Ampliar la imagen
ampliableImg.addEventListener('click', () => {
    fullscreenImg.src = ampliableImg.src; // Copia la fuente de la imagen
    fullscreenContainer.style.display = 'flex'; // Muestra el contenedor
});

// Cerrar la imagen al hacer clic fuera de ella
fullscreenContainer.addEventListener('click', () => {
    fullscreenContainer.style.display = 'none'; // Oculta el contenedor
>>>>>>> 391eb95361774bff4526d0ecf59ee67c20394038
});