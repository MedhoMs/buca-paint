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