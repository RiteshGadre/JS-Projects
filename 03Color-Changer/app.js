let button= document.querySelector("button");
let canvas= document.querySelector("#canvas");

button.style.cursor= "pointer";


button.addEventListener("click", changeColor);

function changeColor(){

  let randomColor= "#" + (Math.floor(Math.random()*16777215).toString(16));
  canvas.style.backgroundColor= randomColor;

}
