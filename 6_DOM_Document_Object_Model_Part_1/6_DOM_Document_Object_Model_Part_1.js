// console.dir(document);
// console.log(document);
// console.dir(document.body.childNodes);
// console.log(document.body);
// document.body.childNodes[3].innerText = "abcd";
// let heading = document.getElementById("heading");
// console.dir(heading);
// let headings = document.getElementsByClassName("header");
// console.dir(headings);
// console.log(headings);
// let button = document.getElementById("myId");
// console.log(button);
// console.dir(button);
// let paras = document.getElementsByTagName("p");
// console.dir(paras);

// let first_elements = document.querySelector("p");
// console.dir(first_elements);
// let all_elements = document.querySelectorAll("p");
// console.dir(all_elements);

// let first_elements = document.querySelector(".myClass");
// console.dir(first_elements);
// let all_elements = document.querySelectorAll(".myClass");
// console.dir(all_elements);

// let first_elements = document.querySelector("#myId");
// console.dir(first_elements);

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);
// let heading = document.querySelector("h1");
// console.dir(heading);

// Practice Question
// let heading = document.querySelector("h2");
// heading.innerText = heading.innerText + " from the Apna College students";
// console.dir(heading);

// Practice Question 2
let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";
for(let i = 0; i < divs.length; i++){
    divs[i].innerText = `new unique value ${i + 1}`;
};