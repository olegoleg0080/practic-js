function animate(){
    ctx3.clearRect(9,0, canvas.width, canvas.height);
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height)
    frogger.draw();
    frogger.update();
    handleObstacles();
    handlScoreBoard()
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height)
    frame++;
    requestAnimationFrame(animate);
}

animate();
// * eventListener
window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if(keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump()
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode];
    frogger.moving = false;
});

function scored(){
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
}

function handlScoreBoard(){
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font ='15px Verbana';
    ctx4.strokeText('Score', 260, 15);
    ctx4.font = '60px Verbana';
    ctx4.fillText(score, 270, 65);
    ctx4.font ='15px Verbana';
    ctx4.strokeText('Collisions: ' + collisionsCount, 10, 175);
    ctx4.strokeText('Game speed: ' + gameSpeed.toFixed(1), 10, 195);
}

// * чо то там много текста
function collision(first, second){
    return !(
        first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y
    );
}
function resetGame() {
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionsCount++;
    gameSpeed = 1;

}