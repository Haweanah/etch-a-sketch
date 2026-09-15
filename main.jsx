const body = document.body
const btn = document.querySelector(".btn")
const btnDiv = document.querySelector(".btn-div")
const popup = document.querySelector(".popup")
body.appendChild(btnDiv)
btn.textContent = "Choose a grid style"
const mainDiv = document.querySelector("body > div")
function sketchDivs() {
    
    for(let i=0; i<256; i++) {
        const grid = document.createElement("div")
        grid.classList.add("ind-grid")

        mainDiv.appendChild(grid)
        console.log("div added")
        grid.addEventListener("mouseover", () => {
            grid.classList.add("active")
        })
    }
}
sketchDivs();
console.log("testing")

