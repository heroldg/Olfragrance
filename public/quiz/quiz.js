if (!localStorage.getItem('user')) {
    alert('Connectez vous avant de pouvoir jouer');
    document.location.href = '/profilage';
}

const h1Title = document.querySelector('#title');
const divChoices = document.querySelector('#choices');
const buttonValider = document.querySelector('#submit-response');
const imgCheck = document.querySelector('#img-check');

const label1 = document.querySelector('#label-choice-1');
const label2 = document.querySelector('#label-choice-2');
const label3 = document.querySelector('#label-choice-3');
const radio1 = document.querySelector('#choice-1');
const radio2 = document.querySelector('#choice-2');
const radio3 = document.querySelector('#choice-3');



const questions = [
    {
        image: 'quiz/borddemer.jpg',
        title: 'Aimez vous l\'odeur de bord de mer ?',
        choices: ['Oui', 'Indifférent ', 'Non'],
        Response: 'Oui',
    },
    {
        image: 'quiz/foret.jpg',
        title: 'Aimez vous l\'odeur de Fôret d\'automne ?',
        choices: ['Oui', 'indifférent', 'Non'],
        Response: 'Bouquet de fleurs',

    },
    {
        image: 'quiz/herbe.jpg',
        title: 'Aimez vous l\'odeur de  l\'Herbe fraîche ?',
        choices: ['Oui', 'indifférent', 'Non'],
        Response: 'Oui',

    },
    {
        image: 'quiz/bouquetdefleur.jpg',
        title: 'Aimez vous l\'odeur des Bouquet de fleurs ?',
        choices: ['Oui', 'indifférent', 'Non'],
        Response: 'Oui'
    },

    {
        image: 'quiz/encens.jpg',
        title: 'Aimez vous l\'odeur de l\'Encens ?',
        choices: ['Oui', 'indifférent', 'Non'],
        Response: 'Oui'
    },

    {
        image: 'quiz/panierdefruit.jpg',
        title: 'Aimez vous l\'odeur des Panier de fruits ?',
        choices: ['Oui', 'indifférent', 'Non'],
        Response: 'Oui'
    },

    {
        image: 'quiz/orange.jpg',
        title: 'Aimez vous l\'odeur de l\'Orange ?',
        choices: ['Oui', 'indifférent', 'Non'],
        Response: 'Oui'
    },

    {
        image: 'quiz/vanille.jpg',
        title: 'Aimez vous l\'odeur de Vanille ?',
        choices: ['Oui', 'indifférent', 'Non'],
        Response: 'Oui'

    },

    {
        image: 'quiz/cuir.jpg',
        title: 'Aimez vous l\'odeur de cuir ?',
        choices: ['Oui', 'indifférent', 'Non'],
        Response: 'Oui'
    }
];

let questionsIndex = 0;



let score = 0;
let agrumes = 0;
let animales = 0;
let boisees = 0;
let epicees = 0;
let florales = 0;
let fruitees = 0;
let sucrees = 0;
let vertes = 0;
let timer = 0;
// let timerVisible = 0;

/*
 * Chronomètre qui démare au chargement de la page
 */
let interval = setInterval(
    function () {
        timer++;
        buttonValider.textContent = `Valider`;   //'Valider (' + timer + 's)';
    },
    1000
);

nextQuestion();

buttonValider.onclick = function () {
    checkResponse();
    smellProfil();
};
function smellProfil(){
    if(questionsIndex == 1 && radio1.checked){
        agrumes++;
    }
    else if(questionsIndex == 2 && radio1.checked){
        animales++;
    }
    else if(questionsIndex == 3 && radio1.checked){
        boisees++;
    }
    else if(questionsIndex == 4 && radio1.checked){

        epicees++;
    }
    else if(questionsIndex == 5 && radio1.checked){

        florales++;
    }
    else if(questionsIndex == 6 && radio1.checked){
            
        fruitees++;
    }
    else if (questionsIndex == 7 && radio1.checked){
        sucrees++;
    } 
    else if(questionsIndex == 8 && radio1.checked) {
        vertes++;
        
    }

}




/**
 * Fonction qui check la réponse et qui augmente le score
 * 
 */

function checkResponse() {
    console.log(radio1.checked, radio2.checked, radio3.checked);
    if (radio1.checked && label1.textContent == questions[questionsIndex].Response) {
        score++;   
        
    } else if (radio2.checked && label2.textContent == questions[questionsIndex].Response) {
        score++;
    } else if (radio3.checked && label3.textContent == questions[questionsIndex].Response) {
        score++;
    }
    else if (!radio1.checked && !radio2.checked && !radio3.checked) /* (radio1.checked == false && radio2.checked == false && radio3.checked == false) */ {
        alert('Veuillez choisir une réponse!');
        return;
    }
    questionsIndex++;
        console.log();
    // resetInterval2();
    nextQuestion();
}
function nextQuestion() {
    const question = questions[questionsIndex];
    timerVisible = 0;
    if (question) {
        imgCheck.src = question.image;
        h1Title.textContent = question.title;
        label1.textContent = question.choices[0];
        label2.textContent = question.choices[1];
        label3.textContent = question.choices[2];

    } else {
        clearInterval(interval);
        saveScore();
        document.location.href = '/mon-compte';
    }
}

function saveScore() {

    // Récupération
    const pseudo = localStorage.getItem('user');
    let classement = localStorage.getItem('classement');
    if (classement) {
        classement = JSON.parse(classement);
    } else {
        classement = [];
    }

    // Modification
    classement.push({
        pseudo: pseudo,
        score: score,
        timer: timer,
        agrumes: agrumes,
        animales: animales,
        boisees: boisees,
        epicees: epicees,
        florales: florales,
        fruitees: fruitees,
        sucrees: sucrees,
        vertes: vertes,
    });

    // Sauvegarde
    localStorage.setItem('classement', JSON.stringify(classement));
}


console.log(agrumes);
console.log(florales);






// /**
//  * Chronomètre qui revient à 0 à chaque fois qu'on clique sur Valider
//  */
// let interval2;
// function resetInterval2() {
//     timerVisible = 0;
//     if(interval2) {
//         clearInterval(interval2);
//     }
//     interval2 = setInterval(function () {
//         timerVisible++;
//         updateTimerVisible();
//     }, 1000);
//     updateTimerVisible();
// }
// function updateTimerVisible() {
//     buttonValider.textContent = `Valider (${timerVisible}s)`;   //'Valider (' + timer + 's)';
// }
// resetInterval2();
