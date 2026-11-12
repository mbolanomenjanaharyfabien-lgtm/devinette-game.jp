let tentatives = 3;
let scores = 0;
let nombreSecret = Math.floor(Math.random())+1;
function confirmer(){
    let time = document.querySelector(".time")
    let score = document.getElementById("score");
    let input = document.querySelector(".input input")
    let message = document.querySelector(".message p:first-child");
    let alert = document.querySelector(".alert");
    let tentative = document.getElementById("tentative");
    let titre = document.getElementById("titre");
      
    if (input.value < 1 || input.value > 10 || input.value === "") {
        
        titre.textContent = "Entre un nombre entre 1 et 10 !";
        input.value ="";
        tentatives --;
        tentative.innerHTML = tentatives;
        return;
    }
    else if ( input.value != nombreSecret) {
        tentatives --;
        tentative.innerHTML = tentatives;
        return;
    }
    else if  (tentatives === 0 ){
        tentative.innerHTML = "0";
        titre.innerHTML = " Vous avez perdu ! ";
    }
    else {
        titre.innerHTML = " Vous avez gagnier ! ";
        scores ++;
        score.innerHTML = scores;
        
    }   
}

function continuer(){
    let input = document.querySelector(".input input");
    let tentative = document.getElementById("tentative");
    let titre = document.getElementById("titre");
    titre.innerHTML= "Deviner un nombre entre 1 à 10";
    tentative.innerHTML= "3";
    input.value = "";
    tentatives = 3;
    nombreSecret = Math.floor(Math.random() * 10)+1;
    continuer();
    confirmer();
}

// function annuler(){
//     let time = document.querySelector(".time")
//     let score = document.getElementById("score");
//     let input = document.querySelector(".input input")
//     let message = document.querySelector(".message p:first-child");
//     let alert = document.querySelector(".alert");
//     let tentative = document.getElementById("tentative");
//     let titre = document.getElementById("titre"); 
//     titre.innerHTML= "Deviner un nombre entre 1 à 10";
//     input.value = "";
//     tentatives ++;
//     if  (tentatives === 5){
//         tentative.innerHTML = 3;
//         titre.textContent = " Vous avez perdu ! Trop d'annulation ";
//     }
// }

function sombre(){
    document.body.style.backgroundColor ="rgb(12, 18, 32)";
    let header = document.getElementById ("header");
    header.style.backgroundColor = "rgb(12, 18, 32)";
    let mode = document.querySelector(".mode");
    mode.style.backgroundColor = "rgb(12, 18, 32)";
    let main = document.getElementById("main");
    main.style.backgroundColor = " rgb(12, 18, 32)";
    main.style.border = " 2px solid rgb(49, 49, 54)";
    let tab_bord = document.querySelector(".tab_bord");
    tab_bord.style.backgroundColor = "  rgb(12, 18, 32)";
    tab_bord.style.border = " 2px solid rgb(49, 49, 54)";
    let titre = document.getElementById("titre");
    titre.style.colorv= " rgb(49, 49, 54)";
    let input = document.getElementById("input");
    input.style.backgroundColor = " transparent";
    input.style.color = " rgb(49, 49, 54)";  
    let btn = document.querySelector(".btn");  
    btn.firstChild.style.backgroundColor = " transparent"
    btn.firstChild.style.color = " rgb(49, 49, 54)"
    btn.lastChild.style.backgroundColor = " rgb(12, 18, 32)"
    let annuler = document.querySelector(".btn_annuler"); 
    annuler.style.backgroundColor = " rgb(12, 18, 32)"
    annuler.style.border = " 2px solid rgb(49, 49, 54)"
    annuler.style.color = " rgb(49, 49, 54)"

}








// let tentatives = 3;
// let scores = 0;
// let nombreSecret = Math.floor(Math.random());
// function confirmer(){
//     let time = document.querySelector(".time")
//     let score = document.getElementById("score");
//     let input = document.querySelector(".input input")
//     let message = document.querySelector(".message p:first-child");
//     let alert = document.querySelector(".alert");
//     let tentative = document.getElementById("tentative");
//     let titre = document.getElementById("titre");
      
//     if (input.value < 1 || input.value > 10 || input.value === "") {
        
//         titre.textContent = "Entre un nombre entre 1 et 10 !";
//         input.value ="";
//         tentatives --;
//         tentative.innerHTML = tentatives;
//         return;
//     }
//     else if ( input.value != nombreSecret) {
//         tentatives --;
//         tentative.innerHTML = tentatives;
//     }
//     else if  (tentative === 0 ){
//         tentative.innerHTML = 0;
//         titre.innerHTML = " Vous avez perdu ! ";
//     }
//     else if (input.value === nombreSecret) {
//         titre.innerHTML = " Vous avez gagnier ! ";
//         scores ++;
//         score.innerHTML = scores;
        
//     }   
// }

// function continuer(){
//     let time = document.querySelector(".time")
//     let score = document.getElementById("score");
//     let input = document.querySelector(".input input")
//     let message = document.querySelector(".message p:first-child");
//     let alert = document.querySelector(".alert");
//     let tentative = document.getElementById("tentative");
//     let titre = document.getElementById("titre"); 

//     message.innerHTML;
//     titre.innerHTML= "Deviner un nombre entre 1 à 10";
//     input.value = "";
//     nombreSecret = Math.floor(Math.random() * 10);
//     tentatives = 3;
//     continuer();
//     confirmer();
// }

// function annuler(){
//     let time = document.querySelector(".time")
//     let score = document.getElementById("score");
//     let input = document.querySelector(".input input")
//     let message = document.querySelector(".message p:first-child");
//     let alert = document.querySelector(".alert");
//     let tentative = document.getElementById("tentative");
//     let titre = document.getElementById("titre"); 
//     titre.innerHTML= "Deviner un nombre entre 1 à 10";
//     input.value = "";
//     tentatives ++;
//     if  (tentatives === 5){
//         tentative.innerHTML = 3;
//         titre.textContent = " Vous avez perdu ! Trop d'annulation ";
//     }
// }











// let tentatives = 3;
// let scores = 0;
// let nombreSecret = Math.floor(Math.random()) + 1;
// function confirmer(){
//     let time = document.querySelector(".time")
//     let score = document.getElementById("score");
//     let input = document.querySelector(".input input")
//     let message = document.querySelector(".message p:first-child");
//     let alert = document.querySelector(".alert");
//     let tentative = document.getElementById("tentative");
//     let titre = document.getElementById("titre");
      
//     if (input.value < 1 || input.value > 10 || input.value === "") {
        
//         titre.textContent = "Entre un nombre entre 1 et 10 !";
//         input.value ="";
//         tentatives --;
//         tentative.innerHTML = tentatives;
//         return;
//     }
//     else if ( input.value != 3) {
//         tentatives --;
//         tentative.innerHTML = tentatives;
//         return;
//     }
//     else if  (tentatives === 0){
//         tentative.innerHTML = 0;
//         alert.textContent = " Vous avez perdu ! ";
//         message.style.display = "block";
//     }
//     else{
//         titre.innerHTML = " Vous avez gagnier ! ";
//         scores ++;
//         score.innerHTML = scores;
        
//     }   
// }

// function continuer(){
//     let time = document.querySelector(".time")
//     let score = document.getElementById("score");
//     let input = document.querySelector(".input input")
//     let message = document.querySelector(".message p:first-child");
//     let alert = document.querySelector(".alert");
//     let tentative = document.getElementById("tentative");
//     let titre = document.getElementById("titre");   
// }

