// DOM Part 2
// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";
// div.innerText = "Hello!";
// div.style.visibility = "hidden";

// let newButton = document.createElement("button");
// newButton.innerText = "clik me";
// console.log(newButton);
// let div = document.querySelector("div");
// div.append(newButton);
// div.prepend(newButton);
// div.before(newButton);
// div.after(newButton);
// let para = document.querySelector("p");
// para.after(newButton);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>";
// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();
// newHeading.remove();

// Practice Question 
let button = document.createElement("button");
button.innerText = "Click me";
button.style.backgroundColor = "red";
button.style.color = "white";
document.querySelector("body").prepend(button);

// Question 2
let para = document.querySelector("p");
para.classList.add("newClass");