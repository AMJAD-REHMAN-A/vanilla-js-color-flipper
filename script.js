const colors = [
    "red",
    "green",
    "#444444",
    "rgb(200, 200, 200)"
]

const btn = document.getElementById("btn-click");
const color = document.getElementById("color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}