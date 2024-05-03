let simpleColors = ["green", "red", "blue", "rgb(223,224,225)", "#1f2d4e"];
let hexColors = ["a", "b", "c", "d", "e", 'f', 1, 2, 3, 4, 5, 6]

let simpleEl = document.getElementById("simple");
let hexEl = document.getElementById("hex");
let colorEl = document.getElementById("color");
let btnEl = document.getElementById("btn");

simpleEl.addEventListener("click", function(){
        btnEl.addEventListener("click", function(){
        let randomNumber = Math.floor(Math.random() * simpleColors.length);
        let randomColor = simpleColors[randomNumber];
        document.body.style.backgroundColor = randomColor;
        colorEl.textContent = randomColor;
    });
    
});

hexEl.addEventListener("click", function(){
    btnEl.addEventListener("click", function(){
        let hexColor = "#";
        for(i=0; i<6; i++){
        hexColor += hexColors[randomhexColor()];
        document.body.style.backgroundColor = hexColor;
        colorEl.textContent = hexColor;
        }
    });
});

function randomhexColor(){
    return Math.floor(Math.random() * hexColors.length);
}
