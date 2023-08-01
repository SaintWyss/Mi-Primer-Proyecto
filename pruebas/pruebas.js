function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    star.style.left = `${randomX}px`;
    star.style.top = `${randomY}px`;

    document.querySelector(".star-container").appendChild(star);

    const animationDuration = Math.random() * 5 + 3;
    const animationDelay = Math.random() * 3;

    star.style.animation = `fall ${animationDuration}s linear ${animationDelay}s infinite`;
}

function generateStars(numberOfStars) {
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    generateStars(100); // Puedes ajustar el número de estrellas aquí
});
