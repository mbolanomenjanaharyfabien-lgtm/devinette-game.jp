const modeSombreBtn = document.querySelector(".mode i:first-child");
const modeClairBtn = document.querySelector(".mode i:last-child");
const chrono = document.querySelector(".chrono p");
const score = document.getElementById("score");
const input = document.querySelector(".input input");
const btn_confirmer = document.querySelector(".bouton .btn:first-child");
const btn_annuler = document.querySelector(".bouton .btn:last-child");
const message = document.querySelector(".message p");

let nombreSecret = Math.floor(Math.random()) + 1;
let tentatives = 3;
let score = 0;
let secondes = 0;
let chronoInterval = null;

btn_confirmer.addEventListener("click", verifier);

btn_annuler.addEventListener("click", () => {
    input.value = "";
    message.textContent = "Saisie annulée";
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") verifier();
});
function verifier() {
    demarrerChrono();
    let valeur = parseInt(inputEl.value);

    if (isNaN(valeur) || valeur < 1 || valeur > 10) {
        message.textContent = "Entre un nombre entre 1 et 10 !";
        return;
    }

    tentatives--;

    if (valeur === nombreSecret) {
        score += 1;
        score.textContent = score;
        message.textContent = ` Gagné ! C'était bien ${nombreSecret}.`;
        finPartie();
    } else if (tentatives > 0) {
        let indice = valeur < nombreSecret ? "plus grand" : "plus petit";
        message.textContent = ` C'est ${indice}. Il te reste ${tentatives} tentative(s).`;
    } else {
        message.textContent = ` Perdu ! C'était ${nombreSecret}.`;
        finPartie();
    }

    inputEl.value = "";
}


function rejouer() {
    nombreSecret = Math.floor(Math.random() * 10) + 1;
    tentatives = 3;
    secondes = 0;
    chronoInterval = null;
    chronoEl.textContent = "00 : 00 : 00";
    input.disabled = false;
    input.value = "";
    message.textContent = "Vous avez trois tentative";
    btn_confirmer.textContent = "Confirmer";
    btn_confirmer.removeEventListener("click", rejouer);
    btn_confirmer.addEventListener("click", verifier);
}
