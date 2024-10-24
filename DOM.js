const titres = document.getElementsByClassName("title");
console.log("recupération de tous les éléments contenant la classe title", titres);
const h = document.getElementsByTagName("h2");
console.log("récupération des éléments selon le nom de balise ", h);
const id_demo = document.getElementById("demo");
document.getElementById("demo").style.color="Blue";
console.log("récupération des éléments selon l'id ", id_demo);
// document.getElementById("demo").innerText = "texte modifié avec innerText";
// document.getElementById("demo").innerHTML = "<h2>texte modifié avec innerHTML</h2>";

function salutation(){
    
    if(id_demo.innerHTML==="Libre pour tout le monde"){
        id_demo.innerHTML="Bonjour tout le monde";
    }
    else{
        id_demo.innerHTML="Libre pour tout le monde";
    }
}
    
    id_demo.onclick=salutation;

    const booklist= document.querySelector("#liste-livres li:nth-child(2).name");
    console.log("Notre élément est " ,booklist);
    const mySelector = document.querySelectorAll("#liste-livres .name");
    console.log("mes elements sont ",mySelector);

