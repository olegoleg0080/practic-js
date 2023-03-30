/*const log = function(log) {
console.log(log); 
}
log(1)*/
"Ctrl + shift + i"
const log = (log) => {console.log(log)};
const dir = (dir) => {console.dir(dir)};

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
/*dz1*//*
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
/*or*//*
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
console.log(getVeluesFromArray(arrSec, 57,70,67,78,50))*//*
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





/*dz2*//*
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





/*задача 8 выдео1*//*
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
const a = Object.assign(...user, ...b)*//*
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




/*28.03*//*
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
/*
function max(products) {
    products.sort((p1, b1) => b1.price - p1.price);
    console.log(`Самый дорогой ${products[0].name}, цена ${products[0].price}`);
}
const products = [
    { name: "Манго", price: 83 },
    { name: "Банан", price: 59 },
    { name: "Вишня", price: 37 },
    { name: "Ківі", price: 94 },
];
log(max(products));

*/
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

const a = 0; 