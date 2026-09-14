const body = document.body
function sketchDivs() {
    
    for(let i=0; i<255; i++) {
        const grid = document.createElement("div")
        grid.classList.add("ind-grid")

        body.appendChild(grid)
        console.log("div added")
    }
}
sketchDivs();
console.log("testing")
