console.log("Programma somma di numeri interi");


/*
prendo il numero inserito e prendo ogni numero intero fino al numero inserito
faccio la somma di tutti e la stampo
*/


const numero = prompt("Inserisci un numero");

let numeroIntero = parseInt(numero);

let somma = 0;

for (let i = 1; i <= numeroIntero; i++) {
    somma = somma + i;

}

console.log(`la somma dei numeri da 1 a ${numeroIntero} è ${somma}`)






