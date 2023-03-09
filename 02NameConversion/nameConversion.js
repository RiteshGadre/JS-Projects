let letter = document.querySelector("#text");
let button = document.querySelector("#convert-btn");
let camelCase = document.querySelector("#camel-case");
// riteshGadre
let pascalCase = document.querySelector("#pascal-case");
// RiteshGadre
let snakeCase = document.querySelector("#snake-case");
// ritesh_gadre
let screamingSnakeCase = document.querySelector("#screaming-snake-case");
// RITESH_GADRE
let kebabCase = document.querySelector("#kebab-case");
// riitesh-gadre
let screamingKebabCase = document.querySelector("#screaming-kebab-case");
// Ritesh-Gadre


let s1 = "hhjkhksdk";
let s2 = s1.toLowerCase;

function changeCamelCase(arr) {
    return arr.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
  
      return firstLetter + rest;
    });
}


function changePascalCase(arr){
    return arr.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const rest = word.slice(1).toLowerCase();
    
        return firstLetter + rest;
    });
    
}


function changeSnakeCase(text){
    let str = text.toLowerCase();
    str = str.split(" ");
    str = str.join("_");
    return str;
}

function changeScreamingSnakeCase(text){
    let str = text.toUpperCase();
    str = str.split(" ");
    str = str.join("_");
    return str;
}

function changeKebabCase(text){
    let str = text.toLowerCase();
    str = str.split(" ");
    str = str.join("-");
    return str;
}

function changeScreamingKebabCase(text){
    let str = text.toUpperCase();
    str = str.split(" ");
    str = str.join("-");
    return str;
}

function changeCases(){
    let text = document.querySelector("input").value;
    let camelCaseLetter = changeCamelCase(text.split(" ")).join("");
    let firstLetter = camelCaseLetter.charAt(0).toLowerCase();
    let res = camelCaseLetter.slice(1);
    camelCase.innerHTML = firstLetter + res;
    pascalCase.innerHTML = changePascalCase(text.split(" ")).join("");;
    snakeCase.innerHTML = changeSnakeCase(text);
    screamingSnakeCase.innerHTML = changeScreamingSnakeCase(text);
    kebabCase.innerHTML = changeKebabCase(text);
    screamingKebabCase.innerHTML = changeScreamingKebabCase(text);

}

button.addEventListener("click", changeCases);