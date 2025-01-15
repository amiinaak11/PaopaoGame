function StartGame() {
    let MyArray = [
        "Yamal",
        "Messi",
        "Neymar",
        "lewa",
        "Gavi",
        "Pedri",
        "Suarez",
        "Raphinha",
        "Cubarsi",
        "Ter Stegen",
        "Pena",
        "Hektor",
        "Martinez",
        "Olmo",
        "de jong",
    ]
    MyArray = [...MyArray, ...MyArray]
    MyArray.sort(()=> Math.random() - 0.5)
    let Md = document.getElementById("GameBoard")
    Md.innerText = ""
    MyArray.forEach(element => {
        let cell = document.createElement("div")
        Md.appendChild(cell)
        cell.innerText = element
        cell.classList.add("cell", "cellHide")
        cell.addEventListener("click", ()=>{
            Validate(cell)
        })
    });
}


let FirstWord = null
let mypoints = 0
let mydivpoints = document.getElementById("points")
function Validate(cell) {
    cell.classList.remove("cellHide")
    cell.classList.add("cellShown")
    
    if (!FirstWord) {
        setTimeout(()=>{
            FirstWord = cell
        },350)
    }else if (FirstWord.innerText == cell.innerText && FirstWord !== cell) {
        setTimeout(()=>{
            FirstWord.style.visibility = "Hidden"
            cell.style.visibility = "Hidden"
            FirstWord = null
            mypoints += 1
            mydivpoints.innerText = mypoints
        },350)
    }else {
        setTimeout(()=>{
            cell.classList.remove("cellShown")
            cell.classList.add("cellHide")
            FirstWord.classList.remove("cellShown")
            FirstWord.classList.add("cellHide")
            FirstWord = null
        },350)
    }    
}
window.onload = StartGame



let timep = document.getElementById("d2")
let sec = 60
setInterval(()=>{
    timep.innerText = sec
    sec--
    if (sec == 0){
        sec = 60
        mypoints = 0
        mydivpoints.innerText = mypoints
        StartGame()
    }
},1000)