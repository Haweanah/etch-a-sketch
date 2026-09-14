const grid = document.createElement("div")
grid.classList.add("ind-grid")
function sketchDivs() {
    for(i=0; i<254; i++) {
        body.appendChild(grid)
        console.log("div added")
    }
}
sketchDivs();
console.log("testing")