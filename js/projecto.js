// projecto.js

function openModal(element) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = element.src;
    document.getElementById("caption").innerHTML = element.alt;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function changeImage(n) {
    let currentImg = document.getElementById("img01");
    let gallery = document.querySelectorAll(".gallery-item img");
    let currentIndex;

    gallery.forEach((img, index) => {
        if (img.src === currentImg.src) {
            currentIndex = index;
        }
    });

    let nextIndex = (currentIndex + n + gallery.length) % gallery.length;
    currentImg.src = gallery[nextIndex].src;
    document.getElementById("caption").innerHTML = gallery[nextIndex].alt;
}
