// Asynchronous Programming
// console.log("one");
// console.log("two");
// console.log("Three");

// function hello() {
//     console.log("hello");
// }
// setTimeout(hello, 2000);  // 2 seconds = 2000 milli seconds

// console.log("four");
// console.log("five");

// Call backs
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b, sumCallback) {
//     sumCallback(a,b);
// }
// calculator(1,3,sum);
// calculator(67,33,sum);

// const hello = () => {
//     console.log("hello");
// };
// setTimeout(hello,3000);

// Nesting
// let age = 19;
// if (age>=18) {
//     if(age>=60){
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("Child");
// }

// for (let i = 0; i<5; i++) {
//     let str = "";
//     for (let j=0; j<5; j++){
//         str = str + j;
//     }
//     console.log(i,str);
// }

// function getData(dataId, getNextData) {
//     // console.log("data",dataId);
//     setTimeout(() => {
//         console.log("data",dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);
//data1
//data2
//data3

// Call back hell (Nested Callback) (Pyramid of Doom)
// getData(1,() => {
//     console.log("Gettin data2.....");
//     getData(2, () => {
//         console.log("Gettin data3.....");
//         getData(3, () => {
//             console.log("Gettin data4.....")
//             getData(4);

//         });
//     });
// });

// Promises (A concept that solves the problem of callback hell)
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error occured");
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         // console.log("data",dataId);
//         // resolve("success");
//         reject("error");
//         if (getNextData) {
//             getNextData();
//         }
//     }, 5000);
//     });
// }

// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         console.log("I am a promise!");
//         resolve("success");
//         // reject("some error occured 6181")
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fullfilled!",res);
// });

// promise.catch((err) => {
//     console.log("task rejected due to some error",err);
// });

// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("Fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res)=> {
//     // console.log(res);
//     console.log("fetching data2....");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         // console.log(res);
//     });
// });

// console.log("Fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res)=> {
//     console.log(res);
// });

// console.log("Fetching data1...");
// asyncFunc1().then((res)=> {
//     // console.log(res);
//     console.log("fetching data2....");
//     asyncFunc2().then((res) => {
//         // console.log(res);
//     });
// });

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data",dataId);
//         resolve("success");
//         // reject("error");
//     }, 5000);
//     });
// }

// PROMISE CHAIN
// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log("success");
// });

//ASYNC AWAIT
// async function hello() {
//     console.log("Heloo");
// };

// function api() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("Weather data");
//             resolve(200);
//         },2000)
//     });
// };

// async function getWeatherData() {
//     await api();
//     await api();
// };

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
        // reject("error");
    }, 3000);
    });
}

async function getAllData() {
    console.log("Fetching Data1....");
    await getData(1);
    console.log("Fetching Data2....");
    await getData(2);
    console.log("Fetching Data3....");
    await getData(3);
    console.log("Fetching Data4....");
    await getData(4);
    console.log("Fetching Data5....");
    await getData(5);
    console.log("Fetching Data6....");
    await getData(6);
};


// IIFE (Automatically code execute ho jata hai function ko call ni krna parta)
(async function () {
    console.log("Fetching Data1....");
    await getData(1);
    console.log("Fetching Data2....");
    await getData(2);
    console.log("Fetching Data3....");
    await getData(3);
    console.log("Fetching Data4....");
    await getData(4);
    console.log("Fetching Data5....");
    await getData(5);
    console.log("Fetching Data6....");
    await getData(6);
})();