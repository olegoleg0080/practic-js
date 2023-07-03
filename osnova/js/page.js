const start = program();
function dqs(selector) {return document.querySelector(selector)}
function program(){
const log = (log) => {console.log(log)};
function them() {
    const themeToggle = dqs('#theme-toggle');
    const themImg = dqs('#themImg');
    const body = dqs('body');
themeToggle.addEventListener('click', function() {
    themImg.classList.toggle('darc');
})
//* themeToggle.addEventListener('mouseout', function() {
//*     themImg.classList.remove('darc');
//* })
themeToggle.addEventListener('click', function() {
body.classList.toggle('dark');
})} them();
//* const log = (log) => {console.log(log)};
//* document.querySelector('.b-1').onclick = function(){
//*     this.style.background = 'red';
//* }

//* document.querySelector('.b-1').addEventListener('click', f1);
//* function f1(){
//*     this.style.background = 'red';
//* }
let a = 0;
const hallo = dqs('.hallo');
const context = hallo.innerHTML;
dqs('a').onclick = function(){this.style.background = 'green';}
dqs('.b-1').style.background = 'black';
dqs('.b-1').textContent = "B-0";
dqs('.b-1').addEventListener('click', d); //document.querySelector('.b-1') === this

function d(){
    a += 1;
    if (a % 2 == 0) {
    dqs('.b-1').style.background = 'red';
    this.textContent = "B-2";
    hallo.innerHTML = `${context} red`;
    }else {
    dqs('.b-1').style.background = 'green';
    this.textContent = "B-1";
    hallo.innerHTML = `${context} green`;
    }
}
}

start


