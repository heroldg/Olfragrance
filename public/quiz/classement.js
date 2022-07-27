let classement = localStorage.getItem('classement');
if (classement) {
    classement = JSON.parse(classement);
} else {
    classement = [];
}

let graphique = document.getElementById('graphique');
console.log(graphique);

console.log(classement);

const divClassement = document.querySelector('#classement');

let classementDansOrdre = [];

for (let i = 0; i < classement.length; i++) {
    // let { score, timer, pseudo } = classement[i];
    let score = classement[i].score;
    let timer = classement[i].timer;
    let pseudo = classement[i].pseudo;
    let agrumes = (classement[i].agrumes * 100) - timer + Math.floor(Math.random() * score);
    let boisees = (classement[i].boisees * 100) - timer + Math.floor(Math.random() * score);
    let animales = (classement[i].animales * 100) - timer + Math.floor(Math.random() * score);
    let epicees = (classement[i].epicees * 100) - timer + Math.floor(Math.random() * score);
    let florales = (classement[i].florales * 100) - timer + Math.floor(Math.random() * score);
    let fruitees = (classement[i].fruitees * 100) - timer + Math.floor(Math.random() * score);
    let sucrees = (classement[i].sucrees * 100) - timer + Math.floor(Math.random() * score);
    let vertes = (classement[i].vertes * 100) - timer + Math.floor(Math.random() * score);
    console.log(score, timer, pseudo);
    let total = score;

    agrumes < 0 ? agrumes = 40 : agrumes = agrumes;
    boisees < 0 ? boisees = 40 : boisees = boisees;
    animales < 0 ? animales = 40 : animales = animales;
    epicees < 0 ? epicees = 40 : epicees = epicees;
    florales < 0 ? florales = 40 : florales = florales;
    fruitees < 0 ? fruitees = 40 : fruitees = fruitees;
    sucrees < 0 ? sucrees = 40 : sucrees = sucrees;
    vertes < 0 ? vertes = 40 : vertes = vertes;

    classementDansOrdre.push({
        pseudo: pseudo,
        total: total,
        agrumes: agrumes,
        boisees: boisees,
        animales: animales,
        epicees: epicees,
        florales: florales,
        fruitees: fruitees,
        sucrees: sucrees,
        vertes: vertes,
        timer: timer,

    });

    console.log(classementDansOrdre[i]);
}

// Voir : https://www.azur-web.com/astuces/javascript-trier-tableau-objet
classementDansOrdre = classementDansOrdre.sort(function (a, b) {
    if (a.total < b.total) {
        return 1;
    } else if (a.total > b.total) {
        return -1;
    }
    return 0;
});

for (let i = 0; i < classementDansOrdre.length; i++) {
    divClassement.innerHTML += `
        <tr>
            <td>#${i + 1}</td>
            <td>${classementDansOrdre[i].pseudo}</td>
            <td>${classementDansOrdre[i].agrumes}%</td>
            <td>${classementDansOrdre[i].boisees}%</td>
            <td>${classementDansOrdre[i].animales}%</td>
            <td>${classementDansOrdre[i].epicees}%</td>
            <td>${classementDansOrdre[i].florales}%</td>
            <td>${classementDansOrdre[i].fruitees}%</td>
            <td>${classementDansOrdre[i].sucrees}%</td>
            <td>${classementDansOrdre[i].vertes}%</td>
            </tr>
    `;
    graphique.innerHTML += ` 
        <div class="barre col-4">
        <h3 class="">Pseudo : ${classement[i].pseudo} </h3>
     <dl class="tailleh20"><dt class="equipe1">Agrumes</dt><dd style="width:${classementDansOrdre[i].agrumes}%;background:linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(117, 190, 21, 0.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[i].agrumes}%</dd></dl>
    
    
    <dl class="tailleh80"><dt class="equipe3">Boisées</dt><dd style="width:${classementDansOrdre[i].boisees}%;background:linear-gradient(217deg, rgba(255, 196, 0, 0.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(190, 123, 21, 0.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(30, 175, 163, 0.8), rgba(229, 255, 0, 0.466) 70.71%);">${classementDansOrdre[i].boisees}%</dd></dl>
    
    
    <dl class="tailleh20"><dt class="equipe2">Animales</dt><dd style="width:${classementDansOrdre[i].animales}%;background:linear-gradient(217deg, rgba(255, 0, 0, 0.329), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(117, 84, 35, 0.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(15, 15, 128, 0.541), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[i].animales}%</dd></dl>
    
    
    <dl class="tailleh30"><dt class="equipe4">Épicées</dt><dd style="width:${classementDansOrdre[i].epicees}%;background:linear-gradient(217deg, rgba(194, 124, 124, 0.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(190, 123, 21, 0.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(255, 123, 0, 0.8), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[i].epicees}%</dd></dl>
    
    
    <dl class="tailleh60"><dt class="equipe5">Florales</dt><dd style="width:${classementDansOrdre[i].florales}%;background:linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(55, 190, 21, 0.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(229, 255, 0, 0.8), rgba(136, 255, 0, 0) 70.71%);">${classementDansOrdre[i].florales}%</dd></dl>
    
    
    <dl class="tailleh50"><dt class="equipe6">Fruitées</dt><dd style="width:${classementDansOrdre[i].fruitees}%;background:linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(190, 123, 21, 0.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[i].fruitees}%</dd></dl>
    
    
    <dl class="tailleh50"><dt class="equipe7">Sucrées</dt><dd style="width:${classementDansOrdre[i].sucrees}%;background:linear-gradient(217deg, rgba(255, 208, 0, 0.623), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(190, 123, 21, 0.8), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(208, 255, 0, 0.8), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[i].sucrees}%</dd></dl>
    
    
    <dl class="tailleh50"><dt class="equipe8">Vertes</dt><dd style="width:${classementDansOrdre[i].vertes}%;background:linear-gradient(217deg, rgba(0, 255, 55, 0.582), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(49, 190, 21, 0.8), rgba(0, 255, 128, 0.247) 70.71%),
    linear-gradient(336deg, rgba(145, 255, 0, 0.329), rgba(0,0,255,0) 70.71%);">${classementDansOrdre[i].vertes}%</dd></dl> </div> </div>`;
    
    

};    

console.log(classement);
console.log(classementDansOrdre.findIndex(element => element.nom === "Agrumes"));