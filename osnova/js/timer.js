// const refs = {
//     start: document.querySelector('.btn-left'),
//     no: document.querySelector('.btn-right'),
//     timer: document.querySelector('.timer'),
// }
// class Timer{
//     constructor({ onTick }){
//         this.data;
//         this.isActive = false;
//         this.onTick = onTick;


//     }
//     init(){
//         const time = this.gettime(0);
//         this.onTick(time);
//     }
//     start(){
//         if(this.isActive){
//             return
//         };
//         this.isActive = true;
//         this.data = Date.now();
//         let stopTime =  setInterval(() => {
//             const data = Date.now() - this.data;
//             const timer = this.gettime(data);
//             this.onTick(timer)
//         }, 1000);
//         refs.no.addEventListener('click', () => clearTimer(stopTime))
//         function clearTimer(timer) {
//             clearInterval(timer);
//             refs.timer.textContent = '00:00:00';
//         }
//     }
//     gettime(date) {
//         const hours = String(Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,'0');
//         const minutes =String(Math.floor((date % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,'0');
//         const second = String(Math.floor((date % (1000 * 60)) / 1000)).padStart(2,'0');
//         return `${hours}:${minutes}:${second}`
//     }
// }
// const timer = new Timer({
//         onTick: updateTimer,
// });
// refs.start.addEventListener('click', timer.start.bind(timer));
// function updateTimer(time) {
//     refs.timer.textContent = time;
// }







// const makeOrder = dish => {
//     const DELEY  = 2000;
// }
// function success (res){
//     console.log('success');
//     console.log(res);
// }
// function error(er) {
//     console.log('error');
//     console.log(er);
// }


const horses = [
    'hrusha',
    'arab',
    'globus',
    'oleg',
    'shinka'
]
console.log('Start');
console.log(`Winer ${1}`);
console.log('End');
function run(horse) {
    return new Promise((resolve, reject) => {
        const time = randomTime(3000, 5000);
        setTimeout(()=>{
            resolve({horse, time})
        },time)
    })
}
//* run(horses[1]).then(res => console.log(res))
const promises = horses.map(horse => run(horse))
//* console.log(promises);
Promise.race(promises).then(({horse, time}) => console.log(`winer ${horse} at ${time}`));
Promise.all(promises).then(res => res.sort((a, b) => a.time - b.time).map(({horse, time}) => console.log(`${horse} at ${time}`)));
function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executePromises(initialDelay, delayIncrement, numPromises) {
    let currentDelay = initialDelay;
    
    for (let i = 1; i <= numPromises; i++) {
    console.log(`Проміс ${i} затримка: ${currentDelay}ms`);
    await delay(currentDelay);
    currentDelay += delayIncrement;
    }
}

const initialDelay = parseInt((prompt('Введіть початкову затримку:') * 1000));
const delayIncrement = parseInt((prompt('Введіть крок збільшення затримки:')) * 1000);
const numPromises = parseInt(prompt('Введіть кількість промісів:'));

executePromises(initialDelay, delayIncrement, numPromises);