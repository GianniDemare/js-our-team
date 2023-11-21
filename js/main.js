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
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        photo: "./img/wayne-barnett-founder-ceo.jpg" 
    },

    {
        name: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
        photo: "./img/angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        photo: "./img/walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        photo: "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
        photo: "./img/scott-estrada-developer.jpg"
    },

    {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        photo: "./img/barbara-ramos-graphic-designer.jpg"
    }

];

console.log(ourTeam);

let card = document.getElementById("cards");


for (let i = 0; i < ourTeam.length; i++) {
    console.log("Nome:", ourTeam[i].name);
    console.log("Cognome:", ourTeam[i].surname);
    console.log("Ruolo:", ourTeam[i].role);
    console.log("Foto:", ourTeam[i].photo);
    console.log("");

    
}






   



// ------------ FUNZIONI ---------------------
