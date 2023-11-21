/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite nella tabella qui sotto.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

*/


// Questo è il file che contiene tutto il codice JS della pagina web

let ourTeam = [
    {
        nameSurname: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "./img/wayne-barnett-founder-ceo.jpg" 
    },

    {
        nameSurname: "Angela Caroll",
        role: "Chief Editor",
        photo: "./img/angela-caroll-chief-editor.jpg"
    },

    {
        nameSurname: "Walter Gordon",
        role: "Office Manager",
        photo: "./img/walter-gordon-office-manager.jpg"
    },

    {
        nameSurname: "Angela Lopez",
        role: "Social Media Manager",
        photo: "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        nameSurname: "Scott Estrada",
        role: "Developer",
        photo: "./img/scott-estrada-developer.jpg"
    },

    {
        nameSurname: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "./img/barbara-ramos-graphic-designer.jpg"
    }

];

console.log(ourTeam);




for (let i = 0; i < ourTeam.length; i++) {
    console.log("Nome:", ourTeam[i].nameSurname);
    console.log("Ruolo:", ourTeam[i].role);
    console.log("Foto:", ourTeam[i].photo);
    console.log("");

    
}


for (let i = 0; i < ourTeam.length; i++) {

document.getElementById("cards").innerHTML += `

    <div class="card col-3 m-3">
        <img src="${ourTeam[i].photo}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-text">${ourTeam[i].nameSurname}</h5>
            <p>${ourTeam[i].role}</p>
        </div>
    </div>

`
}




   



// ------------ FUNZIONI ---------------------
