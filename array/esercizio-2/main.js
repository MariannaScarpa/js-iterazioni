console.log("Programma numeri interi > 5");

//array con 5 numeri

const numeri = [7, 5, 10, 2, 3];

//ciclo for e console.log con i numeri maggiori di 5

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > 5) {
        console.log(numeri[i]);
    }
}

//console.log con numero di elementi in array

console.log(numeri.length);