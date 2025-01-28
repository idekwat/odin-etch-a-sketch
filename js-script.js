//script here

const container = document.querySelector(".gridContainer");
const promptUser = document.getElementById("resetGrid");



promptUser.onclick = (event) => {
    promptGrid();
}

function promptGrid() {
    let gridSize = prompt("Choose a grid size", "Between 1 to 100");
    if(gridSize != null & gridSize >0 & gridSize<101 & gridSize%1 == 0) {
        console.log(gridSize);
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize);
    }
    else if(gridSize == null) {
    }
    else if(gridSize%1 != 0) {
        alert("No Decimal Numbers!");
    }
    else{
        alert("Invalid Input! ");
    }
}

let size = 16;
createGrid(size);

function createGrid(size) {
    for(let a = 0; a < size; a++) {
        let rowDivs = document.createElement("div");
        container.appendChild(rowDivs).className = "rowGuide";
    } 
    let createRow =  document.getElementsByClassName("rowGuide");

    for(let b = 0; b < size; b++) {
        for(let c = 0; c < size; c++) {
            let newSquare = document.createElement("div");
            newSquare.className = "squareHere";
            newSquare.style.height = 700/size + "px";
            newSquare.style.width = 700/size + "px";
            newSquare.style.outline = "1px solid black";
            createRow[b].appendChild(newSquare);
            newSquare.onmouseover = (event) => {
                let redRandomizer = Math.random()*255;
                let greenRandomizer = Math.random()*255;
                let blueRandomizer = Math.random()*255;
                newSquare.style.background = "rgb(" + redRandomizer + ", " + greenRandomizer +
                ", " + blueRandomizer + ")";
            } 
            }
        }
    }

    /*
const blackColor = document.getElementById("onlyBlack");
const grayColor = document.getElementById("grayScale");
const removeColor = document.getElementById("eraseColor");
const randomColor = document.getElementById("allColor");

blackColor.onclick = (event) => {
    chosenColor = blackColor.value;
    colorGrid(chosenColor);
}
grayColor.onclick = (event) => {
    chosenColor = grayColor.value;
    colorGrid(chosenColor);
}
removeColor.onclick = (event) => {
    chosenColor = removeColor.value;
    colorGrid(chosenColor);
}
randomColor.onclick = (event) => {
    chosenColor = randomColor.value;
    colorGrid(chosenColor);
}
let chosenColor = ""; */

/*
function colorGrid(chosenColor) {
    let colorHere = document.querySelector(".squareHere");
    switch(chosenColor) {
        default:
        colorHere.onmouseover = (event) => {
            colorHere.style.background = "black";
        } 
        break;
        case("gry"):
        let opacity = 0.1;
        colorHere.onmouseover = (event) => {
            colorHere.style.background = "rgba(0, 0, 0, " + opacity + ")";
            opacity += 0.1;
        } 
        break;        
        case("ers"):
        colorHere.onmouseover = (event) => {
            colorHere.style.background = "white";
        } 
        break;
        case("rnd"):
        colorHere.onmouseover = (event) => {
            let redRandomizer = Math.random()*255;
            let greenRandomizer = Math.random()*255;
            let blueRandomizer = Math.random()*255;
            colorHere.style.background = "rgb(" + redRandomizer + ", " + greenRandomizer +
            ", " + blueRandomizer + ")";
        } 
        break;
    } 
} */