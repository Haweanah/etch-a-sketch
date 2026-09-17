const body = document.body
const btn = document.querySelector(".btn")
const btnDiv = document.querySelector(".btn-div")
const popup = document.querySelector(".popup")
body.appendChild(btnDiv)
btn.textContent = "Choose a grid style"
const mainDiv = document.querySelector(".main-div")

btn.addEventListener("click", () => {
    popup.classList.toggle("show")
})
function sketchDivs(size) {
    
    for(let i=0; i< size * size; i++) {
        const grid = document.createElement("div")
        grid.classList.add("ind-grid")
        grid.dataset.darkness = 0
        mainDiv.appendChild(grid)
        console.log("div added")
        grid.addEventListener("mouseover", () => {
            const red = Math.floor(Math.random() * 256)
            const green = Math.floor(Math.random() * 256)
            const blue = Math.floor(Math.random() * 256)

               let darkness = Number(grid.dataset.darkness)
            darkness += 10

            if (darkness > 100) {
                darkness = 100
            }

            grid.dataset.darkness = darkness

            grid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

            // Apply the darkness
            grid.style.filter = `brightness(${100 - darkness}%)`

            grid.classList.add("active")
            
        })
    }
}
mainDiv.style.setProperty("--grid-size", 16);

sketchDivs(16);
console.log("testing")

const gridBtn = document.querySelectorAll(".popup button");


gridBtn.forEach(button => {
    button.addEventListener("click", () => {
        const size = button.dataset.size
        console.log("Selected size:", size);
        mainDiv.innerHTML = ""
        mainDiv.style.setProperty("--grid-size", size);
        sketchDivs(size)
        popup.classList.remove("show")
    })
})