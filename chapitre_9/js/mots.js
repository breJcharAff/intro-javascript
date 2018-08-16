/*
Exercice : saisie d'une liste de mots
*/
var mots = [];
var mot = "";
for (var i = 0; mot !== "stop"; i++) {
    mot = prompt("Saisir un mot ou 'stop' pour arreter.");
    mots[i] = mot;
}
mots.forEach(function (mot) {
   console.log(mot); 
});
