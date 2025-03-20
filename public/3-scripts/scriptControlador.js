function toggleRectangulo() {
    var rectangulo = document.querySelector('.rectangulo-oculto');
    if (rectangulo.style.display === "none" || rectangulo.style.display === "") {
        rectangulo.style.display = "block";
    } else {
        rectangulo.style.display = "none";
    }
}