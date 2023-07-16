const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];

const btn = document.getElementById("btn-click");
const color = document.getElementById("color");

btn.addEventListener("click", function() {
    let hexCode = "#"
    for(let i = 0; i<6; i++){
        hexCode += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexCode;
    color.textContent = hexCode;
    color.style.color = hexCode;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}