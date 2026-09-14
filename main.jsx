const mainDiv = document.querySelector("body > div")
function sketchDivs() {
    
    for(let i=0; i<256; i++) {
        const grid = document.createElement("div")
        grid.classList.add("ind-grid")

        mainDiv.appendChild(grid)
        console.log("div added")
    }
}
sketchDivs();
console.log("testing")
