let n = localStorage.getItem("currentScore") ? parseInt(localStorage.getItem("currentScore")) : 0;
let highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0;

// Met à jour l'affichage au chargement
window.onload = function () {
    let element = document.getElementById("info");
    element.innerHTML = `Tu as détesté ${n} fois Emilien. (High Score: ${highScore})`;
};

function changeInfo() {
    n += 1;
    let element = document.getElementById("info");
    element.innerHTML = `Tu as détesté ${n} fois Emilien. (High Score: ${highScore})`;
    
    // Mise à jour du localStorage
    localStorage.setItem("currentScore", n);
    
    if (n > highScore) {
        highScore = n;
        localStorage.setItem("highScore", highScore);
    }
}

function changeInfo2() {
    n = 0;
    let element = document.getElementById("info");
    element.innerHTML = `Tu as détesté ${n} fois Emilien. (High Score: ${highScore})`;
    
    // Réinitialise seulement le score actuel, pas le high score
    localStorage.setItem("currentScore", n);
    
    // Correction: Empêcher le high score d'augmenter lors du reset
    localStorage.setItem("highScore", highScore);
}
