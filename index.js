const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n"
let currentCell = 1
// instead of inidividual variables for each cell, i used aarray "cells" to make the value
let cells = [];
let numColumns = 0;



for(let i = 0; i < csv.lengths; i++) {
    if (csv[i] === ",") {
        currentCell++;

} else if (csv[i]=== "\n" || i === csv.length - 1) {
    console.log(cells.join(','));
    currentCell = 1;
    cells = ['', '', '', '',];

} else {
    cells[currentCell - 1] += csv[i];
}
}

//part 2


