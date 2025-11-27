let paintingArea = document.getElementById("painting-area");
let pintura = document.getElementsByClassName(".paint");
let bigger = document.getElementById("bigger");
let smaller = document.getElementById("smaller");
let colors = document.querySelectorAll("td");


/////////GLOBAL VARIABLES/////////

let mouseIsMoving;
let setBigger;
let selectedColor = "background-color: black;";
let lineId = 0;

/////////GLOBAL VARIABLES/////////


/////////LOGIC/////////

colors.forEach((color) => {
    color.addEventListener("mouseup", function(e) {
        selectedColor = `background-color: ${e.target.id};`
    })
})

/////////LOGIC/////////


/////////EVENTS/////////

bigger.addEventListener("mouseup", function() {
    setBigger = true;
})

smaller.addEventListener("mouseup", function() {
    setBigger = false;
})


document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "z") {
        lineId--;
        let lastDrawedLine = document.querySelectorAll(`#line${lineId}`);
        for (let i = 0; i < lastDrawedLine.length; i++) {
            lastDrawedLine[i].remove();
        }
    }
})

paintingArea.addEventListener("mouseup", function() {
    mouseIsMoving = false;
    lineId++;
})

paintingArea.addEventListener("mousedown", function() {
    mouseIsMoving = true;
})

paintingArea.addEventListener("mousemove", paint);

/////////EVENTS/////////


function paint(e) {
    if (mouseIsMoving === true) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        paintingArea.insertAdjacentHTML("beforeend", `<div class='paint' id='line${lineId}' style='${selectedColor}'></div>`);

        if (setBigger === true) {
            paintingArea.lastChild.classList.add("bigger");
        }

        paintingArea.lastChild.style.left = `${mouseX}px`;
        paintingArea.lastChild.style.top = `${mouseY}px`;
    }
}



/* //////////////AJUSTES DE CLAUDE//////////////

// Variables para guardar la posición anterior del ratón
let lastX = null;
let lastY = null;

paintingArea.addEventListener("mouseup", function() {
    mouseIsMoving = false;
    lineId++;
    lastX = null;
    lastY = null;
})

paintingArea.addEventListener("mousedown", function(e) {
    mouseIsMoving = true;
    lastX = e.clientX;
    lastY = e.clientY;
})

// Función para calcular la distancia entre dos puntos
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Función para crear un punto de pintura
function createPaintPoint(x, y) {
    let div = document.createElement('div');
    div.className = 'paint';
    div.id = `line${lineId}`;
    div.style.cssText = selectedColor;
    
    if (setBigger === true) {
        div.classList.add("bigger");
    }
    
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    
    paintingArea.appendChild(div);
}

function paint(e) {
    if (mouseIsMoving === true) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        
        // Si hay una posición anterior, interpolar puntos entre ambas
        if (lastX !== null && lastY !== null) {
            let dist = distance(lastX, lastY, mouseX, mouseY);
            let steps = Math.ceil(dist / 2); // Un punto cada 2 píxeles aproximadamente
            
            for (let i = 0; i <= steps; i++) {
                let t = i / steps;
                let interpolatedX = lastX + (mouseX - lastX) * t;
                let interpolatedY = lastY + (mouseY - lastY) * t;
                
                createPaintPoint(interpolatedX, interpolatedY);
            }
        } else {
            // Primer punto
            createPaintPoint(mouseX, mouseY);
        }
        
        // Actualizar última posición
        lastX = mouseX;
        lastY = mouseY;
    }
}
*/