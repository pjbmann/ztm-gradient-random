var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var randomBut = document.getElementById("randomColor");

//  === from STACK OVERFLOW === //
//  SCR = https://stackoverflow.com/questions/1484506/random-color-generator
//  function generates random color //
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
// ------------------------ //

// function to apply generated random color as input//
function applyRandomColor() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
}
// ------------------------ //

// function to set color to CSS/Style //
function setGradient() {
    var newColor1 = color1.value;
    var newColor2 = color2.value;
    body.style.background = "linear-gradient(to right,"+newColor1+","+newColor2+")";
    css.textContent = body.style.background + ";";
}
// ------------------------ //

// function for random button to engage when click //
// applyRandomColor();
// setGradient();
function manualRandom() {
    applyRandomColor();
    setGradient();
}
// ------------------------ //

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBut.addEventListener("click", manualRandom);

// initiate page with random color //
applyRandomColor();
setGradient();
// ------------------------ //