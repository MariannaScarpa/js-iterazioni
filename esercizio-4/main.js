const soglia = 18;


for (let i = 1; i <= 4; i++) {
    const voto = prompt(`Inserisci il voto:${i}`);

    if (voto < soglia) {
        console.log("Voto Insufficiente");
    } else {
        console.log("Voto Sufficiente");
    }
}


console.log(`Sufficienza=${soglia}`);
