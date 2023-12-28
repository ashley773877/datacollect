const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n"
let currentCell = 1
// instead of inidividual variables for each cell, i used aarray "cells" to make the value
let cells = [];
let numColumns = 0;
let rows = [];
let dataObject = [];



for(let i = 0; i < csv.lengths; i++) {
    if (csv[i] === ",") {
        currentCell++;

} else if (csv[i]=== "\n" || i === csv.length - 1) {
    if (rows.length === 0) {
        //first row
        rows.push(cells.slice()); // copy cells to rows array
        numColumns = cells.length; 
    } else {
        const rowDataObject = {};
        for (let j = 0; j < numColumns; j++) {
            const heading = rows[0][j].toLowerCase();
            rowDataObject[heading] = cells[j];
        }
        dataObject.push(rowDataObject);
    }

    console.log(cells.join(','));
    currentCell = 1;
    cells = [];

} else {
    cells[currentCell - 1] = cells[currentCell -1] || '';
    cells[currentCell - 1] += csv[i];

    //updating numcolumns if processing first row
    if (currentCell > numColumns) {
        numColumns = currentCell;
    }
}
}
 console.log("number of columns:" , numColumns);
 console.log("Data Objects:" , dataObject);

// part 4
// remove last element from array
dataObject.pop();

//insert following object at index 1
const newObjectAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
dataObject.splice(1, 0, newObjectAtIndex1);

// Add the object given to the end of the array
const newObjectAtEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
dataObject.push(newObjectAtEnd);

// Logging the updated array
console.log("Updated Data Objects:", dataObject);

