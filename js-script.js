//script here

const container = document.querySelector(".gridContainer");

const sizeInput = document.querySelector('input');
const submitButton = document.querySelector('button');

const size = 16;
/*
submitButton.onclick = (event) => {
    const size = sizeInput.value;
    sizeInput.value = '';
    createGrid(size);
} */

function createGrid(size) {
    for(let a = 0; a < size; a++) {
        let createRow = document.createElement("div");
        container.appendChild(createRow).className = "rowGuide";
    }
    let createRow =  document.getElementsByClassName("rowGuide")

    for(let b = 0; b < createRow.length; b++) {
        for(let c = 0; c < size; c++) {
            let newSquare = document.createElement("div");
            createRow[b].appendChild(newSquare).className = "fullGrid";
        }
    }
}

createGrid(size);