let str= "010101";
let result= 0;
result= Math.floor(result);

let counter= 0;
for(let i= str.length-1; i>=0; i--){
    if(str[i]== true) result+= Math.pow(2, counter++);
    console.log(result);
}

console.log(result);