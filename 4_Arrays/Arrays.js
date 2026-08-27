// Arrays in JS
// let marks = [97,82,75,64,36];
// console.log(marks);
// console.log(marks.length); //property
// let heroes = ["Iron man","thor","Hulk",'spiderman',"Shaktimna","antman"];
// console.log(heroes);
// console.log(heroes.length);
// for (let i = 0; i<marks.length; i++) {
//     console.log(marks[i]);
// }
// for (let i = 0; i<heroes.length; i++) {
//     console.log(heroes[i]);
// }
// marks[0] = 61;
// console.log(marks);
// let heroes = ["Iron man","thor","Hulk",'spiderman',"Shaktimna","antman"];
// for (let hero of heroes) {
//     console.log(hero);
// }
// let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }

// Practice Question
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let mark of marks) {
//     sum += mark;
// }
// console.log("Average:",sum / marks.length);

// Practice Question
// let prices = [250,645,300,900,50];
// let i = 0;
// for (let price of prices) {
//     // console.log(`Price at index ${i} = ${price} before offer.`)
//     let discount = price * 0.1;
//     prices[i] = prices[i] - discount;
//     console.log(`Price at index ${i} = ${prices[i]} after offer.`)
//     i++;
// };
// for (let i = 0; i<prices.length; i++){
//     let discount = prices[i] * 0.10;
//     prices[i] -= discount
// }
// console.log(prices)

// Arrays methods
// let items = ["Potatoa","Apple","Litchi","Tomato"];
// console.log(items);
// items.push("Chips");
// console.log(items);
// items.push("Paneer","Pan");
// console.log(items);
// let deletedItem = items.pop();
// console.log(items);
// console.log("Deleted Item:",deletedItem);
// let marks = [97,86,54,36];
// console.log(items)
// console.log(items.toString());
// console.log(items);
// console.log(marks.toString());
// let marvel_heroes = ["thor","spiderman","ironman"];
// let dc_heroes = ["superman","batman"];
// let indian_heroes = ['Krish',"Shaktiman","Flying Jutt"];
// let heroes = marvel_heroes.concat(dc_heroes,indian_heroes);
// console.log(heroes);
// marvel_heroes.unshift("antman");
// console.log(marvel_heroes);
// let deletedValue = marvel_heroes.shift();
// console.log(marvel_heroes);
// console.log("Deleted: ",deletedValue);
// let marvelHeroes = ["Thor","ironman","antman","Dr Strange","spiderman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));
// let arr = [1,2,3,4,5,6,7,8,];
//add element
// arr.splice(2,0,101);
// arr.splice(3,1);
// Replace element
// arr.splice(3,1,101);
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.splice(0,1);
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);