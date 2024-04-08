let clickCount = 0;

function changeFont() {
    const interactiveButton = document.getElementById('interactive-button');
    const cssPropertyDiv = document.getElementById('css-property');

    switch (clickCount) {
        case 0:
            interactiveButton.style.fontFamily = 'impact';
            cssPropertyDiv.innerHTML = 'font-family: Impact';
            break;
        case 1:
            interactiveButton.style.fontFamily = 'Verdana';
            cssPropertyDiv.innerHTML = 'font-family: Verdana';
            break;
        case 2:
            interactiveButton.style.fontFamily = 'Times New Roman';
            cssPropertyDiv.innerHTML = 'font-family: Times New Roman';
            break;
        case 3:
            interactiveButton.style.fontFamily = 'Courier New';
            cssPropertyDiv.innerHTML = 'font-family: "Courier New"';
            break;
        case 4:
            interactiveButton.style.fontFamily = 'Georgia';
            cssPropertyDiv.innerHTML = 'font-family: Georgia';
            break;
        default:
            interactiveButton.style.fontFamily = 'Arial';
            cssPropertyDiv.innerHTML = 'font-family: Arial';
            clickCount = 0; 
            break;
    }

    clickCount++;
}

function changeColor() {
    const interactiveButton = document.getElementById('interactive-button');
    const cssPropertyDiv = document.getElementById('css-property');

    switch (clickCount) {
        case 0:
            interactiveButton.style.backgroundColor = 'red';
            cssPropertyDiv.innerHTML = 'red';
            break;
        case 1:
            interactiveButton.style.backgroundColor = 'blue';
            cssPropertyDiv.innerHTML = 'blue';
            break;
        case 2:
            interactiveButton.style.backgroundColor = 'orange';
            cssPropertyDiv.innerHTML = 'orange';
            break;
        case 3:
            interactiveButton.style.backgroundColor = 'green';
            cssPropertyDiv.innerHTML = 'font family: "Courier New"';
            break;
        case 4:
            interactiveButton.style.backgroundColor = 'yellow';
            cssPropertyDiv.innerHTML = 'yellow';
            break;
        default:
            interactiveButton.style.backgroundColor = 'red';
            cssPropertyDiv.innerHTML = 'red';
            clickCount = 0; 
            break;
    }

    clickCount++;
}


function changeBorder() {
    const interactiveButton = document.getElementById('interactive-button');
    const cssPropertyDiv = document.getElementById('css-property');

    // Verificando o estado atual e alterando a fonte e o innerHTML de acordo
    switch (clickCount) {
        case 0:
            interactiveButton.style.border = '2px solid black';
            cssPropertyDiv.innerHTML = 'border: 2px solid black;';
            break;
        case 1:
            interactiveButton.style.border = '2px dotted black';
            cssPropertyDiv.innerHTML = 'border: 2px dotted black;';
            break;
        case 2:
            interactiveButton.style.border = '2px dashed black';
            cssPropertyDiv.innerHTML = 'border: 2px dashed black;';
            break;
        case 3:
            interactiveButton.style.border = 'double';
            cssPropertyDiv.innerHTML = 'border: double;';
            break;
        case 4:
            interactiveButton.style.border = 'none';
            cssPropertyDiv.innerHTML = 'border: none;';
            break;
        default:
            
            interactiveButton.style.border = '2px solid black';
            cssPropertyDiv.innerHTML = 'border: 2px solid black;';
            clickCount = 0; 
            break;
    }
 
    clickCount++;
}

document.getElementById('font').addEventListener('click', changeFont);
document.getElementById('color').addEventListener('click', changeColor);
document.getElementById('effect').addEventListener('click', changeBorder);








