//
//*
//?
//!
////
//! _.throttle(func)
const GPT = "Ctrl + shift + i";
const log = (log) => {
  console.log(log);
};
const dir = (dir) => {
  console.dir(dir);
};

/*const browser = "Edge";
if (browser == 'Edge'){
    alert("You've got the Edge!");
} else if(browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera'){
    alert('Okay we support these browsers too');
} else if(browser == null){
    alert('We hope that this page looks ok!');
}
let abc = "abc";

if(abc.charAt(0) === "a") {
    console.log('да');
}else{
    console.log("не");
}
const list = ["Мороз", "и", "солнце", "день", "чудесный"];
const listLength = list.length;

/*
let listIndex = parseInt(prompt(`Введите номер слова от 1 до ${listLength}:`));
while (listIndex < 1 || listIndex > listLength || isNaN(listIndex)) {
listIndex = parseInt(prompt(`Номер слова должен быть от 1 до ${listLength}. Попробуйте еще раз:`));
}

const newlist = prompt("Введите новое слово:");

list.splice(listIndex - 1, 1, new4list);
const sentence = list.join(" ");

console.log(sentence);

list.splice(list.length -2, 1, "пень");
const answer = list.join(" ");
console.log(answer);*/

/*1*/
/*
let compare = (a, b) =>
a > b ? 1 
    : a < b ? -1 
    : 0;
let a = prompt("a=");
let b = prompt("b=");
console.log(compare(a, b));*/
/*3*/
/*
let list1 = ["иванов", "ппетров", "сидоров"];
let list2 = ["филонов", "изюмов", "кабанов", "дюдарев"];
let list3 = list1.concat(list2);
console.log(list3);*/
/*const array = [2,4,45,3,5];
for(i=array[0]; i <= array.length; array.in){
    console.log(i)
}*/
/*const array = [2,4,45,3,5];
let a= 0;
for(let i=0; i < array.length; i+=1){
    a += array[i];
}*/
/*console.log(a);
function sum(arr){
    let tot= 0;
    for(const item of arr){
    tot+=item;
    }
    return tot;
}*/
/*let a = ["oleg", "oleg2]"];
alert(a.includes("oleg"));
console.log("velcome");*/
/*
let a = ["oleg", "oleg2]"];
let b = prompt("name");
if(a.includes(b)){
    alert("velcome");
}else{
    alert("no");
}
a.includes(b) ? alert('welcom') : alert('no')*/
/*
const weight = prompt("masa");
const height = prompt("rist");
const replaceComaCovertDecimical = function(str){
return Number(str.replace(",", "."));
};
const calcMassIndex = function (h,w){
    w = replaceComaCovertDecimical(w);
    h = replaceComaCovertDecimical(h);
    const  result = w / (h * h);
    return result.toFixed(1);

}
console.log(calcMassIndex(height,weight));*/
/*console.log(str);
    str = str.split("");
    const indexComa = str.indexOF
    console.log(str);*/
/*dz1*/
/*
let number = [3, 6, -1, 8, 2, 10];
let smollerNumb = minNumberFunction(number);
function minNumberFunction(arr) {
let smaller = arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] < smaller) {
smaller = arr[i];
}
}
return smaller;
}
console.log(smollerNumb); */
/*or*/
/*
const a = [1,5,8,10,-1,5];
console.log(Math.min(...a));*/
/*dz3*/
/*
const phrase = ";k; HFBSDHJL Blkjb ljhdsfj hfvbdfl jhvbdfvjhdb"
function toLowCase(paragraph){
    return paragraph.toLowerCase().replaceAll(' ','-');

}
console.log(toLowCase(phrase))*/
/*
const arrFirst = [1,2,3,4,5]
const arrSec = [10,20,30,40,50,60,70,80,90]
function getVeluesFromArray(arr,...arges){
    const result = [];
    for(const item of arges){
        if(arr.includes(item)){
            result.push(item);

        }
    }
    return result;
}
console.log(getVeluesFromArray(arrFirst, 7,5,2,8))
console.log(getVeluesFromArray(arrSec, 57,70,67,78,50))*/
/*
const arrFirst = [1,2,3,4,5]
const arrSec = [10,20,30,40,50,60,70,80,90]
function getVeluesFromArray(arr,...arges){
    const result = [];
    for(const item of arges){
        arr.includes(item)
    }
    return result;
}
console.log(getVeluesFromArray(arrFirst, 7,5,2,8))
console.log(getVeluesFromArray(arrSec, 57,70,67,78,50))*/
/*dz1*/

/*
function capitalizeWords(str) {
    let words = str.split(" "); 
    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
let str = "dtfgd dfg dfg d df fgdfgd dfdgdfgdfg";
let a = "# ".concat(str);
let b = capitalizeWords(a)
let c = b.replaceAll(" ", "");
console.log(c);*/

/*dz2*/
/*
let array = [1, 0, 2, 0, 3, 4, 0, 5];
let zero = 0;

for (let i = 0; i < array.length - zero; i++) {
if (array[i] === 0) {
    array.splice(i, 1);
    array.push(0);
    zero++;
    i--;
}
}
console.log(array)
if (zero > 0) {
    console.log(array);
} else {
    console.log("в этом списке нет 0");
}*/

/*задача 8 выдео1*/
/*
let userInfo = {
    name: "Вася",
    age: 30,
}
console.log(userInfo);
userInfo.name = "Лена";
console.log(userInfo);
delete userInfo.name;
console.log(userInfo)
*/

/*const a = {a:1, b:2};
const b = {a:3, c:4};
const c ={...a, ...b};
log(c)*/

/*
let b = {
    aa:1,
    bb:2
}
let user = {
    name:"oleg",
    age:14
}
const a = Object.assign(...user, ...b)*/ /*
const shop  = {
    name:["a", "s f"],
    date: "122434",
    style:{
        color:"123",
        bec:"2132",
    },

}*/
// const getUser = function (name) {
//         const user = {
//         name,
//         getName: (a) => {
//             return a;
//         },
//     };
//     return user;
// };

// const newUser = getUser("kir");
// log(newUser.getName('andrew'))*/

/*let array = [1, 0, 2, "a", 3, 4, 0, 5];
let zero = -1;

for (let i = 0; i < array.length - zero; i++) {
if (array[i] === "a") {
    array.splice(i, 1);
    zero++;
    i--;
}
}
console.log(array)
if (zero > 0) {
    console.log(true);
} else {
    console.log(false);
}

let array1 = [1, 0, 2, 0, 3, 4, 0, 5];
let zero1 = 0;
*/

// let array = ["b", "c"];
// let zero = -1;

// for (let i = 0; i < array.length - zero; i++) {
// if (array[i] === "c") {
//     array.splice(i, 1, "a");
//     zero++;
//     i--;
// }
// }
// console.log(array)
// if (zero > 0) {
//     console.log(array);
// } else {
//     console.log("в этом списке нет c");
// }

// const hash = () => { // стрелочная функцыя
//   const data = {}; // создает переменную data
//   Object.defineProperty(data, "add", { //defineProperty-обект, add имя нового свойства, виполняемая функцыя
//     value(key, value) { // создает перременную c key-ключом value-значением
//     data[key] = value;//для свойства add обекта data присваевается значение value которое в дальнейшем примит на себя значения свойств
//     return data;
//     },
// });
// return data;
// };
// console.dir(hash().add('name', 'Mar').add('city', 'Mar').add('born', 'far'));
// //.dir отображает список свойств объектов.
// //внутирь свойства hash с помощю метода add добавляютса свойства name со значением Mar и т.п

/*28.03*/
/*
const shopList = {
    produkts: [
    ],
    getProducts(){
        return this.produkts;
    },
    addProducks(product){
        for(const item of this.produkts){
            if(item.name === product.name){
                item.quantity +=1;                return;
            }
        }
        this.produkts.push({...product, quantity: 1});
    },
    deleteProducts(nameProduct){
    for(const product of this.produkts){
        if(product.name === nameProduct){
            this.produkts.splice(this.produkts.indexOf(product), 1);
            return;
        }
    }
    },
    clear(){
        this.product = [];
    },
    sumPrices(){
        for(const {name, price, quantity} of this.produkts){
            if(name === this.nameProduct){
                return price * quantity;
            }
        }
    },
    sumPrice(){
        return this.produkts.reduce((accum, {price, quantity})  => accum + price * quantity, 0);
    }
};



const user = {
    age: 24,
}
const {age} = user;

console.log(shopList.addProducks({name: "kivi", price: 20}));
console.log(shopList.addProducks({name: "apple", price: 10}));
console.log(shopList.addProducks({name: "apple", price: 10}));
console.log(shopList.addProducks({name: "apple", price: 10}));
console.log(shopList.addProducks({name: "Orang", price: 20}));
console.table(shopList.getProducts());
log(shopList.sumPrice())
log(shopList.sumPrices("apple"))

//     {name: "kivi", price: 89},
//     {name: "Ban", price: 99},
//     {name: "apple", price: 39},
//     {name: "Orang", price: 85}*/

/*дз*/

// function max(products) {
//     products.sort((p1, b1) => b1.price - p1.price);
//     console.log(`Самый дорогой ${products[0].name}, цена ${products[0].price}`);
// }
// const products = [
//     { name: "Манго", price: 83 },
//     { name: "Банан", price: 59 },
//     { name: "Вишня", price: 37 },
//     { name: "Ківі", price: 94 },
// ];
// log(max(products));

// const user = {
//     age: 24,
//     password: 'йцукен123',
//     agreeToTerms: true,
// }
// const user1 = {
//     age: 40,
//     password: 'sdfsdfdgfdgd',
//     agreeToTerms: false,
// }
// function checkAge(user) {
//     return user.age > 18;
// }
// function checkPassword(user) {
//     return user.password.length >= 8;
// }
// function checkTerms (user) {
//     return user.agreeToTerms === true
// }
// // function validate(obj, ...tests){
// //     for (let i = 0; i<tests.length; i++){
// //         if (tests[i](obj) === false) return false;
// //     }
// //     return true;
// // }
// // log(validate(user, checkAge, checkPassword, checkTerms));

// function createValidator(...tests){
//     return function (obj){
//         for (let i = 0; i<tests.length; i++){
//             if (tests[i](obj) === false) return false;
//         }
//         return true;
//     }
// }
// const validator2 = createValidator(checkAge, checkPassword);
// const validator1 = createValidator(checkAge, checkPassword, checkTerms);
// log(validator1(user));
// log(validator2(user1));

// const numbers = [1,5,11,15,6,78];
// const coleBack = function (e, i){
//     numbers.forEach(coleBack);
// }
// //numbers.forEach((e,i, arr) => {
// //    log(log(`${i}:${e}:---${arr[i]}`));
// //    arr.pop();
// //    log(arr.length)
// //});
// numbers.forEach((e,i, arr) => {
//     if(e === 5){
//         return;
//     }
// }

// const sum = (...arguments) => {
//     return arguments;
// }
// log(sum(1,2,3));

// const products = [
//     {type:"@342424", name:["banana", "kivi",["sdfs"]]},
//     {type:"@342424", name:["banana2", "kivi1"]},
// ];
// const nameProd = products.flatMap(product => product.name);
// // products.forEach(product => nameProd.push(product.name));
// log(nameProd);

// const products = [
//         { name: "Манго", price: 83 },
//         { name: "Банан", price: 59 },
//         { name: "Вишня", price: 37 },
//         { name: "Ківі", price: 94 },
//     ];
//     const result = (products.filter(product => product.price > 50));
//     log(result);

// const storages = [
//     { storage: "Манг", name:  ["sdfdgdfg1", "sdfdsfsd"] },
//     { storage: "Бана", name: ["sdfdgdfg1", "sdfdsfsd1"] },
//     { storage: "Вишн", name: ["sdfdgdfg", "sdfdsfsd2"] },
//     { storage: "Ківі", name: ["sdfdgdfg", "sdfdsfsd3"] },
// ];

// const namesStorages = storages
// .reduce((accum, {name}) => {
//     accum.push(...name);
//     return accum;
// },[])
// const Filtern = namesStorages.filter((e,i) => namesStorages.indexOf(e) === i);
// log(namesStorages)
// log(Filtern)

// let total = 0;
// products.forEach(() => total += price)
// log(total);
// const array1 = [1, 2, 3, 4];

// const total = products.reduce(function(accumulator, product) {
// return accumulator + product.price;
// }, 0 );
// log(total);

// const products = [
//         { name: "Манго", price: 83 },
//         { name: "Банан", price: 59 },
//         { name: "Вишня", price: 37 },
//         { name: "Ківі", price: 94 },
//     ];
//     products.sort((a, b) => a.price - b.price);
//     log(products);

/*forEach*/
// const arr = [5, 6, 7, 8, 9];
// const newArr = [];
// arr.forEach(elem => {
// 	newArr.push(elem * elem);
// });
// log(newArr)

// let arr = [5, 6, 7, 8, 9];
// let sum = 0;
// arr.forEach(function(elem) { //elem елемент к которому ми ето применяем = все елементи масива
// 	sum += elem;
// });
// log(sum)

/*map*/

// const arr = [5, 6, 7, 8, 9];
// const newArr = [];
// arr.map(elem => {
//     newArr.push(elem * elem);
// });
// log(newArr)

// let arr = [1, 2, 3, 4, 5];

// let check = arr.every(function(elem) {
// 	if (elem >= 50) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(check);

// let arr = [-1, -2, -3, 4];

// let check = arr.some(function(elem) {
// 	if (elem <= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(check);

/*filter*/
// const arr = [1, -3, 5, 6, -7, 8, 9, -11];
// function func(elem){return elem % 2 == 0};
// const newArr = arr.filter(func);
// log(newArr);

// const arr = ["123456","123","123456789"];
// function str5(elem) {
//     return elem.length >= 5;
// };
// const len5 = arr.filter(str5)
// log(len5)

// var arr = [1, 'string', [3, 4], 5, [6, 7]];
// function func(elem){return Array.isArray(elem)}; что делает етот код
// var newArr = arr.filter(func);
// log(newArr);

// const arr = [1, -3, 5, 6, -7, 8, 9, -11];
// const arrMin = [];
// function func(elem) {
//     if (elem <= 0) {
//         arrMin.push(elem)
//     } else {

//     }
// }
// const newArr = arr.filter(func);
// log(arrMin);

/*reduse*/
// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);
// console.log(result);

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let answer = 0;
// let result = arr.reduce(function(sum, elem) { //reduceRigyt
// 	if (elem == 0) {
// 		answer = sum;
// 	} else {
// 		return sum + elem;
// 	}
// });
// if(answer == undefined){answer = result};
// log(answer);

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let answer = 0;
// let anslen = [];
// let result = arr.reduce(function(sum, elem) { //reduceRigyt
// 	if (sum >= 10) {
// 		answer = sum;
// 	} else {
//         anslen += elem;
// 		return sum + elem;
// 	}
// });
// log(anslen.length);

// const product = {
//     name: "apple",
//     price: 25,
//     showPrice(){
//         log(this.price);
//     },
// }
// function callAction(action){
//     action()
// }
// callAction(product.showPrice);

// const showName = function() {
//     log('this',this);
//     log('this.name',this.name);
// }
// // showName();
// const user = {
//     name: 'oleg',
// }
// user.showUserName = showName;
// user.showUserName();
// // const fnB = user.showName;
// // log(fnB);
// // fnB();

// const userB = {
//     name: 'oleg',
//     age: 40,
// }
// // log(userB);
// // userB.changeName('masha')
// const apdateName = function (newName){
//     log('kiril', this);
//     this.name = newName;
// }
// // userB.changeName = apdateName;

// log(userB);
// const apdateNameUserB = apdateName.bind(userB);

// apdateNameUserB('kiril');
// log(userB)

//?  const createTiacher = function(teacher) {
//?      const teacherLesson = function(lesson) {
//?          log(`${teacher} викладає ${lesson}`);
//?      }
//?      return teacherLesson;
//?  }
//?  const andrew = createTiacher('andrew');
//?  andrew('inform');
//?  andrew('метем');
//?  const oleg = createTiacher('oleg');
//?  oleg('укр мову');

//! const leater = ["a","A","b","B"];
//! leater.sort((a,b) => a.localeCompare(b))
//! log(leater);

//* const letme = function(callback) {
//*     const nameUser = prompt('name = ');
//*     callback(nameUser);
//* }
//* const greet = function(name) {
//*     log(`hello ${name}`)
//* }
//* letme(greet);

//? const makeProduct = function (name, price, callback) {
//?     const id = Math.floor(Math.random() * 1000);
//?     const product = {name,price,id};
//?     callback(product);
//? }
//?     const showProduct = function(product){
//?     console.log(product);
//?     }
//?     makeProduct('Oleg', 1, showProduct);

//*  const maceshef = function(shef) {
//*      const macedish = function(dish) {
//*          log(`${shef} викладає ${dish}`);
//*      }
//*      return macedish;
//*  }
//*  const andrew = maceshef('andrew');
//*  andrew('inform');
//*  andrew('метем');
//*  const oleg = maceshef('oleg');
//*  oleg('укр мову');

//! ДЗ 5.04

//! 1
//* let arra = [1,2,3,4,5,6];
//* function call(elem) {
//*     elem.forEach(element => log(element += 1));
//* }
//* function each(array, callback) {
//*     call(array);
//*     return arra;
//* }
//* log(each(arra, call));

//! 2
//* let a = 0;
//* function makeCounter() {
//*     a += 1;
//*     //? console.clear(a)
//*     log(a);
//* }
//* makeCounter()
//* makeCounter()
//* makeCounter()
//* makeCounter()

//! 3
//* const password = prompt("your password");
//* const passwordList = ["1234", "005430","oleg_oleg"];
//* function savePassword(password) {
//*     if (password === "") {
//*         return "пожалуйста введите пароль";
//*     } else if (passwordList.includes(password)) {
//*         return true;
//*     } else{
//*         return false;
//*     }
//* }
//* log(savePassword(password));

//! 4
//* const a = 100;
//* const dis = 10;
//* function discount(a) {
//*     function disc(a) {
//*         log(a - a/100*dis);
//*     }
//*     return disc(a);
//* }
//* discount(a);

//! 5
//* const a =[2,4,5,6,7]
//* function firstNumb(e) {
//*     for (let i = 0; i < e.length; i++) {
//*     if (e[i] % 2 !== 0) {
//*         return e[i];
//*     }
//*     }
//* }
//* log(firstNumb(a));

//! 09.04

//? function User({name, age} = {}){
//?     this.name = name;
//?     this.age = age;
//? }
//? User.prototype.changeAge = function(newAge) {
//?     this.age = newAge
//? }
//? const userA = new User({name:'oleg', age: 14});
//? log(userA);
//? userA.changeAge(30);
//? log(userA)

//? function Product(name, price) {
//?     this.name = name;
//?     this.price = price;
//? }
//? function Food(name, price) {
//?     Product.call(this, name, price);
//?     this.category = 'food';
//? }
//? const myFood = new Food('chees', 5);
//? log(myFood);

//? class Car{
//?     static marca;
//?     test = 'my test';
//?     #brand;
//?     #storage = 'Artem';
//?     static author = 'oleg';
//?     constructor({brand, model, price, color = 'blue'} = {}) {
//?         log('first run')
//?         this.#brand = brand;
//?         this._model = model;
//?         this.price = price;
//?         this.color = color;
//? }
//? chanhePrice(newPrice){
//?     this.price = newPrice;
//? }
//? get brand(){
//?     return this.#brand;
//? }
//? set brand(brand){
//?     this.#brand = brand;
//? }
//? get model(){
//?     return this._model;
//? }
//? myStorage(){
//?     return this.#storage;
//? }
//? }
//? console.dir(Car)
//? const myCarA = new Car({brand:'Audy', model:'i8', price:35000});
//? log(myCarA);

//! 11.04

//* function Product(name, price,quantity) {
//*     this.name = name,
//*     this.price = price,
//*     this.quantity = quantity,
//*     this.getPrice = function() {
//*       return this.price * this.quantity
//*     };
//* }
//* const products = new Product("бархатные тяги", 999.99, 2);
//* console.table(products.name, products.getPrice())

//*||

//? class Products{
//?     constructor({name, price,quantity}) {
//?         this.name = name;
//?         this.price = price;
//?         this.quantity = quantity;
//?     }
//?     get totaPrice(){
//?         return this.price * this.quantity
//?     }
//? }
//? const product = new Products({name:"бархатные тяги", price: 999.99, quantity: 1});
//? console.log(product);
//? log(product.totaPrice)

//* class Product {
//*     constructor(id, name, price) {
//* this.id = id;
//* this.name = name;
//* this.price = price;
//*     }
//*     getPriceWithTax() {
//*       return this.price * 1.2;
//*     }
//*     getPriceWithDiscount() {
//*       return this.price * 0.9;
//*     }
//* }
//*
//*
//* class Baket {
//*     constructor() {
//* this.products = [];
//*     }
//*     addProduct(product) {
//* this.products.push(product);
//*     }
//*     getTotalPriceWithTax() {
//* let totalPrice = 0;
//* this.products.forEach((product) => {
//*         totalPrice += product.getPriceWithTax();
//* });
//* return totalPrice;
//*     }
//*     getTotalPriceWithDiscount() {
//* let totalPrice = 0;
//* this.products.forEach((product) => {
//*         totalPrice += product.getPriceWithDiscount();
//* });
//* return totalPrice;
//*     }
//* }
//*
//*
//* const product1 = new Product(1, 'Product1', 100);
//* const product2 = new Product(2, 'манго', 100);
//*
//* const baket = new Baket();
//* baket.addProduct(product1);
//* baket.addProduct(product2);
//*
//* console.log(baket.getTotalPriceWithTax());
//* console.log(baket.getTotalPriceWithDiscount());

// class Warrior{
//     constructor({name, xp, health}={}){
//     this.name= name;
//     this.xp = xp;
//     this.health = health;
//     this._weapon = weapon;
//     }
//     set weapon(value){
//         this._weapon = value;
//     }
//     get weapon(){
//         return this.value;
//     }
//     geinXP(amout){
//         log(`${this.name} get ${amout} XP`);
//         this.xp += amout;
//     }
// }
// class Mage{
//     constructor({name, xp, health}={}){
//     this.name= name;
//     this.xp = xp;
//     this.health = health;
//     this.weapon = weapon;
//     this._spels = [];
//     }
//     set spels(value){
//         this._spels.push(value);
//     }
//     get spels(){
//         return this.spels;
//     }
//     geinXP(amout){
//         log(`${this.name} get ${amout} XP`);
//         this.xp += amout;
//     }
// }
//! ДЗ 15.04

//! Задача 1
//* class Vehicle{
//*     constructor(name){
//*         this.name = name;
//*         this.run = false;
//*     }
//*     start(){
//*         this.run = true;
//*         log(`${this.name} заведена`);
//*     }
//*     stop(){
//*         this.run = false;
//*         log(`${this.name} остоновилса`);
//*     }
//* }
//* class Car extends Vehicle{
//*     constructor(name, numDors){
//*         super(name);
//*         this.numDors = numDors;
//*     }
//*     honk(){
//*         if (this.run) {
//*             log(`${this.name} сигналит`);
//*         } else {
//*             log(`${this.name} машина не заведена`);
//*         }
//*     }
//* }
//* class Motorcycle extends Vehicle{
//*     constructor(name, numWheels){
//*     super(name);
//*     this.numWheels = numWheels;
//*     }
//*     wheelie(){
//*         if (this.run) {
//*             log(`${this.name} зробив відкос`);
//*         } else{
//*             log(`${this.name} не заведён`);
//*         }
//*     }
//* }
//* class Boat extends Vehicle{
//*     constructor(name, lenghth){
//*     super(name);
//*     this.lenghth = lenghth;
//*     }
//*     anchor(){
//*         if (this.run) {
//*             log(`${this.name} зробив відкос`);
//*         } else{
//*             log(`${this.name} не заведён`);
//*         }
//*     }
//* }
//* const car = new Car('Toyota Land Cruiser',4);
//* log(car.numDors)
//* car.start();
//* car.honk();
//* car.stop();
//* const myMotorcycle = new Motorcycle('myMoto', 0);
//* myMotorcycle.start();
//* myMotorcycle.wheelie();
//* myMotorcycle.stop();

//! Задача 2
//* class User {
//*     constructor(name, email) {
//*     this.name = name;
//*     this.email = email;
//*     }
//*     login(){
//*         log(`${this.name} залогинился`)
//*     }
//*     logout(){
//*         log(`${this.name} вышeл`)
//*     }
//* }
//* class Admin extends User{
//*     constructor(name, email, admin, rules) {
//*         super(name, email);
//*         this.admin = admin;
//*         this.rules = rules;
//*     }
//*     deleteAccount(user){
//*         log(`Акаунт пользователя ${user.name} бил удален ${admin.name} по причине нарушения правила сообщества ${admin.rules}`)
//*     }
//*     toAdmin(user){
//*         log(`${user.name} был повышент до администратора`)
//*     }
//* }
//* class Moderator extends User {
//*     constructor(name, email, canDeleteMessage) {
//*         super(name, email);
//*         this.canDeleteMessage = canDeleteMessage;
//*     }
//*     deleteMessage(messageID){
//*         log(`Сообщение "${messageID}" было удалено`)
//*     }
//* }
//* const user = new User('ilia','pupileia-lox@gmail.com');
//* user.login();
//* const admin = new Admin('Maria','masha@gmail.com','',1.3);
//* admin.login();
//* admin.deleteAccount(user);
//* const moderator = new Moderator('Ivan','ivanovuch',true);
//* moderator.login();
//* moderator.deleteMessage(123)
//* moderator.logout();

//! 18.04

function les18041() {
  const values = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "React" },
    { name: "Vue" },
    { name: "Next.js" },
    { name: "Mobx" },
    { name: "Redux" },
    { name: "React Router" },
    { name: "GraphQl" },
    { name: "PostgreQl" },
    { name: "MongoDB" },
  ];
  const refs = {
    listEl: document.querySelector(".lessons"),
    input: document.querySelector(".inputLesson"),
    add: document.querySelector(".js-btn"),
    no: document.querySelector(".jss-btn"),
  };
  refs.input.addEventListener("input", heand);
  //! filter
  function heand(event) {
    const filter = event.currentTarget.value;
    const listFilter = values.filter((e) =>
      e.name.toLowerCase().includes(filter.toLowerCase())
    );
    refs.listEl.innerHTML = "";
    refs.listEl.append(...createListItem(listFilter));
    log(listFilter);
  }
  //! Задача 1
  //? function createList() {
  //?     const listEl = document.querySelector('.lessons');
  //?     values.forEach(value => {
  //?     const itemEl = document.createElement('li');
  //?     itemEl.classList.add('lesson');
  //?     itemEl.textContent = value.name;
  //?     listEl.append(itemEl);
  //?     });
  //? }
  //?createList();
  //!
  refs.add.addEventListener("click", onAddBtnClick);
  function onAddBtnClick(event) {
    const itemEl = document.createElement("li");
    itemEl.classList.add("lesson");
    itemEl.textContent = refs.input.value;
    refs.input.value = "";
    refs.listEl.append(itemEl);
  }
  const listEl = document.querySelector(".lessons");
  function createListItem(values) {
    return values.map((value) => {
      const itemEl = document.createElement("li");
      itemEl.classList.add("lesson");
      itemEl.textContent = value.name;
      return itemEl;
    });
  }
  listEl.append(...createListItem(values));
  //!
  //* const listEl = document.querySelector('.lessons')
  //* const itemEl = document.createElement('li');
  //* itemEl.classList.add('lesson')
  //* itemEl.textContent = 'hi Oleg';
  //* listEl.append(itemEl);
  //* dir(listEl);
  //* log(itemEl);
  //* log(listEl);
  //* for (const value of values) {
  //*     const itemEl = document.createElement('li');
  //* }
}
les18041();
//! Задача 2

//! Дз 20.04
//! Задача 1
function dz2004() {
  const refs = {
    div1: document.querySelector(".div-remuve-js1"),
    div2: document.querySelector(".div-remuve-js2"),
    div3: document.querySelector(".div-remuve-js3"),
    btn1: document.querySelector(".remove-js1"),
    btn2: document.querySelector(".remove-js2"),
    btn3: document.querySelector(".remove-js3"),
  };
  refs.btn1.addEventListener("mouseover", () => {
    refs.btn1.innerHTML = "Delete?";
  });
  refs.btn1.addEventListener("mouseout", () => {
    refs.btn1.innerHTML = "remove this button";
  });
  refs.btn2.addEventListener("mouseover", () => {
    refs.btn2.innerHTML = "Delete?";
  });
  refs.btn2.addEventListener("mouseout", () => {
    refs.btn2.innerHTML = "remove this button";
  });
  refs.btn3.addEventListener("mouseover", () => {
    refs.btn3.innerHTML = "Delete?";
  });
  refs.btn3.addEventListener("mouseout", () => {
    refs.btn3.innerHTML = "remove this button";
  });
  refs.btn1.addEventListener("click", () => refs.div1.remove());
  refs.btn2.addEventListener("click", () => refs.div2.remove());
  refs.btn3.addEventListener("click", () => refs.div3.remove());
}
dz2004();
//! Задача 2
function dz2104() {
  let input1 = document.getElementById("input-jsa");
  let input2 = document.getElementById("input-jsb");
  let btnInput = document.querySelector(".btn-input-js");
  btnInput.addEventListener("click", inputRe);
  function inputRe() {
    if (input1.value !== "" && input2.value === "") {
      input2.value = input1.value;
      input1.value = "";
    } else if (input2.value !== "" && input1.value === "") {
      input1.value = input2.value;
      input2.value = "";
    }
  }
}
dz2104();

//! 23.04
function les2304() {
  const refs = {
    allBtn: document.querySelectorAll(".btn"),
    btnContainer: document.querySelector(".wrapp-btn"),
  };
  refs.btnContainer.addEventListener("click", onClickBtn);

  function onClickBtn(event) {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }
    const bgValue = event.target.dataset.value;
    changeBody(bgValue);
    console.log("click");
  }
  function changeBody(bg) {
    let body = (document.body.style.backgroundColor = bg);
  }
}

//! ||
function inputQubs() {
    const refs = {
        boxCont: document.querySelector('.box'),
        create: document.querySelector('[data-create]'),
        input: document.querySelector('.qontiti'),
    };
    let boxSize = 30;
    refs.create.addEventListener('click', onClickBtn);
    function onClickBtn(event) {
        const inputValue = refs.input.value;
        refs.boxCont.append(...createBox(inputValue))
    }
    function createBox(inputValue) {
      const container = document.getElementById("box");
      boxSize = 30;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
        const boxl =[]
        for (let i = 0; i < inputValue; i+=1) {
            const box = document.createElement('div');
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;
            boxSize+=10;
            box.style.backgroundColor = `#ff0000`;
            boxl.push(box);
    }
    return boxl;
}
}
inputQubs();
function valid() {
  const refs = {
    input: document.querySelector('.inputlight'),
    button: document.querySelector('.yes'),
  };

  refs.button.addEventListener('click', validate);

  function validate(event) {
    const inputEl = refs.input;
    if (inputEl.value.length === 6) {
      inputEl.classList.add('validate');
      inputEl.classList.remove('no-validate');
    } else {
      inputEl.classList.remove('validate');
      inputEl.classList.add('no-validate');
    }
  }
}valid();
les2304();

function dz2404() {
  const refs = {
    firstNameInput: document.querySelector('.first-name'),
    enableFirstNameButton: document.querySelector('.enable-first-name'),
    lastNameInput: document.querySelector('.last-name'),
    enableLastNameButton: document.querySelector('.enable-last-name'),
    ageInput: document.querySelector('.age'),
    enableAgeButton: document.querySelector('.enable-age'),
    submitButton: document.querySelector('.submit'),
  };
  
  refs.enableFirstNameButton.addEventListener('click', () => {
    if (refs.firstNameInput.disabled) {
      refs.firstNameInput.disabled = false;
      refs.enableFirstNameButton.textContent = 'Заблокувати';
    } else {
      refs.firstNameInput.disabled = true;
      refs.enableFirstNameButton.textContent = 'Редагувати';
    }
  });
  
  refs.enableLastNameButton.addEventListener('click', () => {
    if (refs.lastNameInput.disabled) {
      refs.lastNameInput.disabled = false;
      refs.enableLastNameButton.textContent = 'Заблокувати';
    } else {
      refs.lastNameInput.disabled = true;
      refs.enableLastNameButton.textContent = 'Редагувати';
    }
  });
  
  refs.enableAgeButton.addEventListener('click', () => {
    if (refs.ageInput.disabled) {
      refs.ageInput.disabled = false;
      refs.enableAgeButton.textContent = 'Заблокувати';
    } else {
      refs.ageInput.disabled = true;
      refs.enableAgeButton.textContent = 'Редагувати';
    }
  });
  
  refs.submitButton.addEventListener('click', () => {
    const firstName = refs.firstNameInput.value;
    const lastName = refs.lastNameInput.value;
    const age = refs.ageInput.value;
  
    const data = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
  
    console.log(data);
  });
}dz2404()
function les2504() {
  const refs = {
    allBtn: document.querySelectorAll(".btn-d"),
    btnContainer: document.querySelector(".cont6"),
  };
  
  refs.btnContainer.addEventListener("click", onClickBtn);
  
  function onClickBtn(e) {
    const btnEl = e.target;
    if (e.target.nodeName !== "BUTTON") {
      return;
    }
    btnEl.classList.toggle("activ");
    saveLocalStorage();
    const a = localStorage.getItem("activValues")
    log(a)
    
  }
  function saveLocalStorage() {
    const activEl = document.querySelectorAll(".activ");
    const activValue = Array.from(activEl, (el) => el.dataset.value);
    localStorage.setItem("activValues", JSON.stringify(activValue));
  }
  function loadFromLocalStorage() {
    const activValuesJson = localStorage.getItem("activValues");
    if (activValuesJson) {
      const activValue = JSON.parse(activValuesJson);
      activValue.forEach((bg) => {
        const btnEl = document.querySelector(`[data-value="${bg}"]`);
        if (btnEl) {
          btnEl.classList.add("activ");
        }
      });
    }
  }
  
  loadFromLocalStorage();
  // localStorage.clear();
}les2504()
function dz2804() {
  const refs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    submit: document.querySelector('#submit'),
    clear: document.querySelector('#clear-locstor'),
  }
  refs.submit.addEventListener('click', saveData);
  refs.clear.addEventListener('click', clearData);
  function saveData() {
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
  }
  function clearData() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  if (name && email) {
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
  }
}dz2804()
