const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n"
let currentcell = 1;
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = ''; 



for(let i = 0; i < csv.lengths; i++) {
    console.log(csv[i]);

}

if (csv[i] === ",") {
    currentcell++
} else if (csv[i] === "\n") {
    console.log(cell1, cell2, cell3, cell4);
    currentcell = 1;
    cell1 = '';
    cell2 = '';
    cell3 = '';
    cell4 = '';


    
} else {
    if (currentcell === 1) {
        cell1 += csv[i];
}   else if (currentcell === 2) {
    cell2 += csv[i];
} else if (currentcell === 3) {
    cell3 = csv[i];
} else if (currentcell === 4) {
    cell4 += csv[i];
}
    
} 

