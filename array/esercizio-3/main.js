console.log("Programmma metodi degli array");

//array con color

const colori = ['rosso', 'verde', 'blu', 'giallo'];
console.log(colori);
//Aggiunfo la 'viola' alla fine dell'array

colori.push('viola');
console.log(colori);

//riumuovo il primo elemento 'rosso'

colori.shift('rosso');
console.log(colori);

//controllo se 'blu' è presente

console.log(colori.includes('blu'));

//creo una copia con i primi due valori

const primi = colori.slice(0, 2);
console.log(primi);

//unisco gli elementi con |

const lista = colori.join('|');
console.log(lista);