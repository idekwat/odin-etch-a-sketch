//script here

const container = document.querySelector(".gridContainer");
const promptUser = document.getElementById("resetGrid");


const blackColor = document.getElementById("onlyBlack");
const grayColor = document.getElementById("grayScale");
const removeColor = document.getElementById("eraseColor");
const randomColor = document.getElementById("allColor");

let chosenColor = "";

promptUser.onclick = (event) => {
    promptGrid();
}

blackColor.onclick = (event) => {
    chosenColor = blackColor.value;
    changeColor(chosenColor);
}
grayColor.onclick = (event) => {
    chosenColor = grayColor.value;
    changeColor(chosenColor);
}
removeColor.onclick = (event) => {
    chosenColor = removeColor.value;
    changeColor(chosenColor);
}
randomColor.onclick = (event) => {
    chosenColor = randomColor.value;
    changeColor(chosenColor);
}

function promptGrid() {
    let gridSize = prompt("Choose a grid size", "Between 1 to 100");
    if(gridSize != null & gridSize >0 & gridSize<101) {
        console.log(gridSize);
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize);
    }
    else if(gridSize == null) {
        alert("No Input!");
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
            newSquare.style.height = 700/size + "px";
            newSquare.style.width = 700/size + "px";
            newSquare.style.outline = "1px solid black";
            createRow[b].appendChild(newSquare).className;

            /*
            let shading = 0.0;
            newSquare.onmouseover = () => {
                shading += 0.1
                newSquare.style.background = "rgba(0, 0, 0, " + shading + ")"; 
            } */
        }
    }
    
}

function changeColor(chosenColor) {
    console.log(chosenColor);
    switch(chosenColor) {
        case("blk"):
        createGrid.newSquare.style.background = "black";
    }
}
            /*           
            switch(chosenColor){
                case("blk"): 
                let shading = 0.0;
                createRow.newSquare.onmouseover = () => {
                    shading += 0.1
                    createGrid.newSquare.style.background = "rgba(0, 0, 0, " + shading + ")";
                    }
              //      break;
            //}
        }
    }
}



function() {
    switch()
    case():
    let shading = 0.0;
    createGrid.newSquare.onmouseover = () => {
        shading += 0.1
        createGrid.newSquare.style.background = "rgba(0, 0, 0, " + shading + ")";
    }
    break;
    case():
    createGrid.newSquare.onmouseover = () => {
        shading += 0.1
        createGrid.newSquare.style.background = "";
    }
}*/
