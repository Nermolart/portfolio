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