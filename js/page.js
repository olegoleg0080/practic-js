const start = program();
function dqs(selector) {return document.querySelector(selector)}
function program(){// const log = (log) => {console.log(log)};
// document.querySelector('.b-1').onclick = function(){
//     this.style.background = 'red';
// }

// document.querySelector('.b-1').addEventListener('click', f1);
// function f1(){
//     this.style.background = 'red';
// }
let a = 0;
dqs('.b-1').style.background = 'black';
dqs('.b-1').textContent = "B-0";
dqs('.b-1').addEventListener('click', f) //document.querySelector('.b-1') === this
function f(){
    a += 1;
    if (a % 2 == 0) {
    dqs('.b-1').style.background = 'red';
    this.textContent = "B-2";
    }else {
    dqs('.b-1').style.background = 'blue';
    this.textContent = "B-1";
    }
}};
start



