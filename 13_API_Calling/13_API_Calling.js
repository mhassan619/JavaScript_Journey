const URL = "https://official-joke-api.appspot.com/jokes/random/250";
const jokePara = document.querySelector("#joke");
const btn = document.querySelector("#btn");

const getJokes = async () => {
    console.log("Getting Data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    jokePara.innerText = `${data[10].setup} - ${data[10].punchline}`;
};

btn.addEventListener("click",getJokes);