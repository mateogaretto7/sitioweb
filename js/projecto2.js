// Guarda las imágenes y la posición actual
const images = document.querySelectorAll('.gallery-item img');
let currentIndex = 0;

function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    currentIndex = Array.from(images).indexOf(img);
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}
