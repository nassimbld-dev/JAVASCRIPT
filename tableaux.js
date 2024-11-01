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

// Using the splice method
const fruits = ["Banane", "Pomme", "Cerise", "Poire"];

// Inserting elements at index 2
fruits.splice(2, 0, "Citron", "Kiwi");
console.log(fruits, "Fruits");

// Removing elements at index 3 and 4
const fr = fruits.splice(3, 2);
console.log(fr);
console.log(fruits);

const fruit2 = ['Banane', 'Orange', 'Citron', 'Pomme', 'Mongue'];
const SliceFruit = fruit2.slice(2);
console.log(SliceFruit);
console.log(fruit2);

const fruit3 = ['Banane', 'Orange', 'Citron', 'Pomme', 'Mongue'];
const SliceFruit3 = fruit3.slice(1,3);
console.log(SliceFruit3);

const nombres = [1,2,3,4,5,6,7];
// Afficher de 1 jusqu'a 6

nombres.splice(6);
nombres.slice(0, 6);

const troisquatre= nombres.slice(2,4);
console.log(troisquatre);
