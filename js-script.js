//script here

const gridsHere = document.querySelector(".gridContainer");
const size = 16;

function makeGrid() {
    for(let a=0;a<size;a++) {
        for(let b=0; b<size;b++) {
            const createGrid = document.createElement("div");
            createGrid.textContent = "A = " + a + "\nB = " + b;
            gridsHere.appendChild(createGrid);
            console.log("A = " + a + ", B = " + b);
        }
    }
}
makeGrid();
