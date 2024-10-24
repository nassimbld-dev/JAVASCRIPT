const MyArray = ["Banane", "Pomme", "Cerise", "Poire", 4];

console.log(MyArray, "Mon Tableau");
console.log(MyArray.length, "La longueur de mon tableau MyArray");
console.log(MyArray.toString(), "Affichage des elements du tableau comme chaines de caracteres");
console.log(MyArray.join("/"));

const cars = new Array("BMW", "Citroen", "Renault");

console.log(cars, "Mes Voitures");
let voiture = cars.pop();
// pop supprime le dernier element du tableau
console.log(voiture); // L"element supprimé
console.log(cars); // le tableau après la suppression

let fruit = MyArray.push("Kiwi"); //Ajouter un element a la fin du tableau

console.log(fruit, "Fruit") // Afficher la taille du tableau
console.log(MyArray, "Tableau MyArray")
console.log(MyArray[1]);
MyArray[0] = "Papaye";
console.log(MyArray);

const boys = ["Nassim", "Ahmed", "Massi"];
const girls = ["Lyne", "Kenza", "Alice"];

const myChildren = boys.concat(girls);
console.log(myChildren, "My Children");