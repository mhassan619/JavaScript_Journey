// const student = {
//     fullName: "Muhammad Hassan",
//     marks: 94.4,
//     printMarks: function() {
//         console.log("Marks: ",this.marks);
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };
// const karanArjun1 = {
//     salary: 5000
// };
// const karanArjun2 = {
//     salary: 6000
// };
// const karanArjun3 = {
//     salary: 7000
// };
// const karanArjun4 = {
//     salary: 8000
// };
// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("Tax rate is 20%");
//     },
// };
// karanArjun.__proto__= employee;

// class CarToyota{
//     constructor(brand,mileage) {
//         console.log("New object is creating.");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("Car is starting.");
//     }

//     stop() {
//         console.log("Car is stopping.");
//     }

//     // setBrand(brand) {
//     //     this.brandName = brand;
//     // }
// };
// let fortuner = new CarToyota("Fortuner","New");
// let lexus = new CarToyota("lexus","Old");

// Inheritance in JavaScript
// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent {};
// let obj = new Child();
// let obj1 = new Parent();

// class Person {
//     constructor(name){
//         // console.log("enter parent constructor");
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("Person is eating");
//     }
// }
// class Engineer extends Person {
//     constructor(name){
//         // console.log("enter child constructor");
//         super(name);
//         // this.branch = branch;
//         // console.log("exit child constructor");
//     }
//     work(){
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }
// class Doctor extends Person {
//     work(){
//         console.log("Treat Patients");
//     }
// }
// let hassanobj = new Engineer("Hassan");

// DATA = "secret information";
// class User {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data: ",DATA);
//     }
// }
// class Admin extends User {
//     constructor(name,email){
//         super(name,email);
//     }
//     editData() {
//         DATA = "Some new Value";
//     }
// }

// let student1 = new User("shradha","abc@gmail.com");
// let student2 = new User("hassan","hassan@gmail.com");

// let teacher1 = new User("Dean","deancollege@gmail.com");

// let admin1 = new Admin("admin","admin@gmail.com");

// Errro Handeling
let a = 5;
let b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("a + b =", a+b);
console.log("a + b =", a+b);
try {
    console.log("a + b =", a+c);
} catch (err) {
    console.log(err);
}
console.log("a + b =", a+b);
console.log("a + b =", a+b);
console.log("a + b =", a+b);
console.log("a + b =", a+b);
console.log("a + b =", a+b);