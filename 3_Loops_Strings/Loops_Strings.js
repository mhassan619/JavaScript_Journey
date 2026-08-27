// console.log("Professor Bakra Academy");
// for(let i=1; i<=5; i++){
//     console.log("Professor Bakra Academy.");
// }
// console.log("loop has been ended");
// let sum = 0;
// for(let i=1;i<=5; i++){
//     sum = sum + i;
// }
// console.log(sum)
// console.log("loop has been ended")

//while loop
// let i = 1;
// while (i<=5){
//     console.log("i =",i);
//     i++;
// }

// do while loop
// let i = 1;
// do {
//     console.log("i = ",i);
//     i++;
// } while (i <= 10);

// for-of-loop
// let str = "ApnaCollege";
// let size = 0;
// for (let i of str) {
//     console.log('i = ',i);
//     size++;
// }
// console.log("String size: ",size);

//for-in-loop
// let student = {
//     name: "Muhammad Hassan",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };
// for (let key in student) {
//     console.log("key=",key,"Value=",student[key]);
// }

// practice question
// for (let i = 0; i<=100; i+=2) {
//     console.log("i =",i);
// }

// Practice Question 2
// let gameNumb = 25;
// let userNum = prompt("Guess the game number: ");
// while (userNum != gameNumb) {
//     userNum = prompt("You entered wrong number. Guess again: ")
// }
// console.log("Congratultions! You entered the right number.")

//strings
// let str = "ApnaCollege";
// let str2 = 'Hassan';
// console.log(str.length, str2.length);
// console.log(str[8]);

// Template Literals / String Interpolation (adding placeholders in a string backtick)
// let specialString = `This is a template literal`;
// console.log(specialString);
// console.log(typeof specialString);
// let obj = {
//     item: "pen",
//     price: 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log("the cost of",obj.item," is",obj.price," rupees.");
// console.log(output);
// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString);
// console.log("Apna\nCollege"); // new line
// console.log("Apna\tCollege"); // tab space
// console.log("Apna\tCollege".length);

//String Methods   // Strings are immutable
// let str = "Apna College";
// console.log(str.toUpperCase());
// let str2 = "HASSAN";
// console.log(str2.toLowerCase());
// let str3 = "      Apna College JS      ";
// console.log(str3.trim());
// let str4 = "01234567";
// console.log(str4.slice(1,6));
// let str5 = "hello";
// console.log(str5.slice(0,3));
// let str1 = "Muhammad";
// let str2 = "Hassan";
// let result = str1.concat(str2);
// let res = str1 + str2;
// console.log(result);
// console.log(res);
// str.replace(searchVal,newVal);
// let str = "hello";
// console.log(str.replace("lo","p"));
// let str1 = "hellololo";
// console.log(str1.replace("lo",'p'));
// console.log(str1.replaceAll("lo","p"));
// str = "ILoveJS";
// str[0] = "S";
// console.log(str.charAt(3));

// Practice Question
let fullname = prompt("Enter your fullname: ");
let username = "@" + fullname + fullname.length;
console.log(username);