const jokeContainer= document.querySelector(".joke");
const btn= document.querySelector(".btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}

btn.addEventListener("click",getJoke);
getJoke();

// async function generateJoke() {
//     // const apiUrl = 'https://official-joke-api.appspot.com/jokes/random';
//     // const response = await fetch(apiUrl);
//     // const jokeData = await response.json();
//     // const joke = `${jokeData.setup} ${jokeData.punchline}`;
//     // jokes.innerHTML = joke;
    
// }