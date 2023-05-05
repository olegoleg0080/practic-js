const refs = {
    start: document.querySelector('.btn-left'),
    no: document.querySelector('.btn-right'),
    timer: document.querySelector('.timer'),
}
class Timer{
    constructor({ onTick }){
        this.data;
        this.isActive = false;
        this.onTick = onTick;


    }
    init(){
        const time = this.gettime(0);
        this.onTick(time);
    }
    start(){
        if(this.isActive){
            return
        };
        this.isActive = true;
        this.data = Date.now();
        setInterval(() => {
            const data = Date.now() - this.data;
            const timer = this.gettime(data);
            this.onTick(timer)
        }, 1000);
    }
    gettime(date) {
        const hours = String(Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,'0');
        const minutes =String(Math.floor((date % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,'0');
        const second = String(Math.floor((date % (1000 * 60)) / 1000)).padStart(2,'0');
        return `${hours}:${minutes}:${second}`
    }
}
const timer = new Timer({
        onTick: updateTimer,
});
refs.start.addEventListener('click', timer.start.bind(timer));
function updateTimer(time) {
    refs.timer.textContent = time;
}