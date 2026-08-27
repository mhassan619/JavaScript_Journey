// function myFunction(){
//     console.log("Welcome to Apna Colllege");
//     console.log("We are learning js");
// }
// myFunction();
// function myFunction2(msg,n) {
//     console.log(msg);
// }
// myFunction2("I love Python",100);
// function sum(a,b) {
//     // console.log(a + b);
//     s = a + b;
//     return s;
// }
// let val = sum(345,678);
// console.log(val);
// function sum(a,b) {
//     return a + b;
// }
// const arrowsum = (a, b) => {
//     console.log(a+b);
// }
// function multiply(a,b){
//     return a * b;
// }
// let arrowmultiple = (a, b) => {
//     return a * b;
// }
// const printHello = () => {
//     console.log("Hello World!");
// }

// Practice Question 1
// function vowels_count(str){
//     let count = 0;
//     for(let alpha of str.toLowerCase()){
//         if(alpha === 'a'|| alpha === 'e' || alpha === 'o' || alpha === 'i' || alpha === 'u'){
//             count += 1;
//         }
//     }
//     return count;
// }
// let count = vowels_count("hello");
// console.log("Number of vowels in your string: ",count);

// Practice Question 2 (using arrow function)
// let count_vowels = (str) => {
//     let count = 0;
//     for(let alpha of str.toLowerCase()){
//         if(alpha === 'a'|| alpha === 'e' || alpha === 'o' || alpha === 'i' || alpha === 'u'){
//             count += 1;
//         }
//     }
//     return count;
// }

// function abc(){
//     console.log("hello");
// }
// function myFunc(abc){
//     return abc;
// }

// let arr = [1,2,3,4,5];
// let arr = ["Hassan","Mohsan","Ahsan"];
// arr.forEach(function printVal(val) {
//     console.log(val);
// });
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// });
// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(),idx);
// });
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(),idx,arr);
// });

// Practice Question 
// let arr = [2,3,4,5,6,34,56,99];
// arr.forEach((num) => {
//     console.log("Square of numb",num," =",num ** 2);
// });
// let calSquare = (num) => {
//     console.log("Square of numb",num," =",num ** 2);
// };
// arr.forEach(calSquare);

// Map
// let numb = [10,20,30,40,50,60];
// let newArr = numb.map((val) => {
//     return val ** 2;
// });
// console.log(newArr);

// Filter
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let evenArr = arr.filter((val) => {
//     return val%2 === 0;
// });
// console.log(evenArr);

// Reduce
// let arr = [1,2,3,4];
// const output = arr.reduce((res,curr) => {
//     return res + curr;
// });
// console.log(output);

// Maximum number 
// let arr = [5,6,100,7,8,99,88,98];
// let output = arr.reduce((prev,curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output);

// Practice Question
// let marks = [87,93,64,99,86];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);

// Practice Question 2
let n = prompt("enter a size of array: ");
let arr = [];
console.log(arr);
for(let i = 1; i <= n; i++){
    arr.push(i);
};
console.log(arr);
let sum = arr.reduce((val,curr) => {
    return val + curr;
});
console.log("Sum of array: ",sum);
let product = arr.reduce((val,curr) => {
    return val * curr;
});
console.log("Factorial of array: ",product);