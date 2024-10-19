const titres = document.getElementsByClassName("title");
console.log("recupération de tous les éléments contenant la classe title", titres);
const h = document.getElementsByTagName("h2");
console.log("récupération des éléments selon le nom de balise ", h);
const id_demo = document.getElementById("demo");
console.log("récupération des éléments selon l'id ", id_demo);
document.getElementById("demo").innerText = "texte modifié avec innerText";
document.getElementById("demo").innerHTML = "<h2>texte modifié avec innerHTML</h2>";