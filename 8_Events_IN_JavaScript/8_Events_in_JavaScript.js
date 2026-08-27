// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// };

// btn1.onclick = () => {     // This is overwrite if you trace the event twice
//     console.log("this is final handeler.")
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log("you are inside the div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// btn1.addEventListener("click",() => {
//     console.log("button was clicked - handler 1");
// });
// btn1.addEventListener("click",(evt) => {
//     console.log("button was clicked - handler 2");
//     // console.log(evt);
//     // console.log(evt.type);
//     // console.log(evt.target);
// });

// const handler3 = () => {
//     console.log("button was clicked - handler 3");
// };
// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",() => {
//     console.log("button was clicked - handler 4");
// });

// btn1.removeEventListener("click",handler3);

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click",() => {
    if (currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});