// This code prints hello  world
/* this is a code that prints hello world 
on our console */
// console.log("Hello World!");
// This is a comment

// let a = 5;
// let b = 2;
// console.log("a = ",5,"& b = ",2);
// console.log("a + b =",a + b);
// let c = a + b;
// console.log("a + b =",c);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a**b);

// unary operators (increment and decrement)
// let a = 5;
// let b = 2;
// console.log("a = ",a,"& b = ",b)
// a = a + 1; // 6
// a++; // 6
// b--; // 1
// console.log("a = ",a);
// console.log("b = ",b);

/*  Post Increment (a++) || Pre Increment (++a)
Post Decrement (a--) || Pre Decrement (--a)
*/
// let c = 10;
// let d = 20;
// console.log("c = ",c," & d = ",d);
// console.log("++c = ",++c);
// console.log("c++ = ",c++);
// console.log("a = ",c);
// console.log("--d = ", --d);
// console.log("d-- = ",d--);
// console.log("d = ",d);

// Assignment Operators
// let a = 5;
// let b = 2;
// // a += 4; // a = a + 4
// // a -= 4;
// // a *= 4;
// // a /= 4;
// // a %= 4;
// a **= 4;
// console.log("a = ",a);

// Comaprison Operators
// let a = 5;
// let b = 2;
// // b = 5;
// // a = "2";  // 5 is equal to "5"
// console.log("a == b", a==b);
// console.log("a != b", a != b);

// // Strict version (===)
// let c = 5;
// let d = "5";
// d = 10;
// console.log("c == d",c === d);
// console.log("c !== d",c!==d);
// console.log("c = ",c,"& d = ",d)
// console.log("c > d = ",c>d);
// console.log("c >= d = ",c >= d);
// console.log("c < d = ",c<d);
// console.log("c <= d = ",c<=d);

// Logical Operators
// let a = 6;
// let b = 5;
// let cond1 = a > b;
// let cond2 = a === 5;
// console.log("cond1 && cond2 = ",cond1 && cond2);
// console.log("cond1 OR cond2 = ",cond1 || cond2);
// console.log("!(6<5) =",!(a<b));

// Conditional Statements
// let age = 7;
// if (age >= 18){
//     console.log("You can drive");
// }
// if (age < 18){
//     console.log("You cannot drive.")
// }
// let mode = "dark";
// let color;
// if(mode == "dark"){
//     color = "black";
// }
// if (mode == "light"){
//     color = "white";
// }
// console.log(color);
// let mode = "light";
// let color;
// if(mode == "dark"){
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);
// let age = 25;
// if (age > 18){
//     console.log("You can vote")
// } else {
//     console.log("You cannot vote")
// }
// let n = 5;
// n = 10;
// if (n%2 === 0){
//     console.log("Number",n," is even")
// } else {
//     console.log("Number",n," is odd")
// }
// let mode = "dark";
// mode = "pink";
// let color;
// if(mode == "dark"){
//     color = "black";
// } else if (mode === "blue"){
//     color = "blue";
// } else if (mode == "pink"){
//     color = "pink";
// } else {
//     color = "light";
// }
// console.log(color);

// Ternary Operator
// let age = 20;
// age = 16;
// let result = age > 18 ? "adult":"Not adult";
// console.log(result);
// age = 24;
// age > 18 ? console.log("adult"):console.log("Not adult");

//MDN Docs (learn for latest features)

// alert("Hello Hassan");
// let name = prompt("Hello");
// console.log(name);

// Practice Question 1
// let n = prompt("enter a number: ");
// if (n%5===0){
//     console.log(n,"is the multiple of 5.");
// } else {
//     console.log(n,"is not multiple of 5.");
// }
// let grade;
// let numb = prompt("enter your number: ")
// if (numb >= 80 && numb <= 100){
//     grade = "A";
// } else if(numb >= 70 && numb < 80){
//     grade = "B";
// } else if(numb >= 60 && numb < 70){
//     grade = "C";
// } else if(numb>=50 && numb < 60){
//     grade = "D";
// } else if(numb < 50){
//     grade = "F";
// } else {
//     console.log("Please enter numbers between 1 to 100");
// } 
// console.log("Your grade is: ",grade)