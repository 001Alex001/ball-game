const game = document.querySelector('.game');
const player1Inpute = document.querySelector('.player1');
const player2Inpute = document.querySelector('.player2');
const startBtn = document.querySelector('.start');

startBtn.addEventListener('click',function(){
    const player1 = player1Inpute.value;
    const player2 = player2Inpute.value;
    if(!player1 || !player2){
        alert('gri annuner')
    }else{
        game.remove()
        start()
        start1()
    }

})