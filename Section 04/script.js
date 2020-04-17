var scores, roundScore, activePlayer, gamePlaying, previous, max_score;

init();

//document.querySelector ('#current-' + activePlayer).textContent = dice;



document.querySelector('#roll-dice-btn').addEventListener('click', function(){
   if (gamePlaying && max_score !== undefined){

            
            var dice_1 = Math.floor(Math.random()*6) + 1;
            var dice_2 = Math.floor(Math.random()*6) + 1;

            console.log(previous);

        diceDOM_1 = document.querySelector('#dice1');
        diceDOM_2 = document.querySelector('#dice2');

        diceDOM_1.style.visibility = 'visible';
        diceDOM_1.src = 'dice-'+dice_1+'.png';

        diceDOM_2.style.visibility = 'visible';
        diceDOM_2.src = 'dice-'+dice_2+'.png';

        if (previous === [6,6] && (dice_1 === 6 && dice_2 === 6)){
                
            scores[activePlayer-1] = 0;
            document.querySelector('#player-total' + activePlayer).textContent = scores[activePlayer-1];
            nextPlayer();

        }else if (dice_1 !== 1 && dice_2 !== 1){
                      
            roundScore = roundScore+ dice_1 + dice_2;
            previous = [dice_1,dice_2];
            document.querySelector ('#current-' + activePlayer).textContent = roundScore;
            console.log(dice_1, dice_2);
            

        }else{
            nextPlayer();
        }
    };

});

document.getElementById('hold-btn').addEventListener('click', function(){
    if (gamePlaying && max_score !== undefined){
    scores[activePlayer-1] += roundScore;
    document.querySelector('#player-total' + activePlayer).textContent = scores[activePlayer-1];



    if(scores[activePlayer-1]>= max_score){
            document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';

            document.querySelector ('#dice1').style.visibility = 'hidden';
            document.querySelector ('#dice2').style.visibility = 'hidden';
            
            document.querySelector ('.CURRENT1').style.visibility = 'hidden';
            document.querySelector ('.CURRENT2').style.visibility = 'hidden';
            
            document.querySelector('.panel-player'+ activePlayer).classList.add('winner');
            document.querySelector('.panel-player'+ activePlayer).classList.remove('active');
            
            gamePlaying = false;


    }else{
        nextPlayer();
    }
};
    

});
    

function nextPlayer(){
    activePlayer === 1? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;

    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';

    document.querySelector('.panel-player1').classList.toggle('active');
    document.querySelector('.panel-player2').classList.toggle('active');

    document.querySelector ('#dice1').style.visibility = 'hidden';
    document.querySelector ('#dice2').style.visibility = 'hidden';
};


document.querySelector('#new-game').addEventListener('click', function(){

    document.querySelector('#yourScore').style.display = 'block';
    init();

});

function init(){
        scores = [0,0];
        roundScore = 0;
        activePlayer = 1;
        gamePlaying = true;

    document.querySelector ('#dice1').style.visibility = 'hidden';
    document.querySelector ('#dice2').style.visibility = 'hidden';
    
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    
    document.getElementById('player-total1').textContent = '0';
    document.getElementById('player-total2').textContent = '0';


    document.querySelector ('.CURRENT1').style.visibility = 'visible';
    document.querySelector ('.CURRENT2').style.visibility = 'visible';

    document.querySelector('.panel-player1').classList.remove('winner');
    document.querySelector('.panel-player2').classList.remove('winner');

    document.querySelector('.panel-player1').classList.remove('active');
    document.querySelector('.panel-player2').classList.remove('active');

    document.querySelector('.panel-player'+ activePlayer).classList.add('active');
    
    document.querySelector('#name-1').textContent = 'PLAYER 1';
    document.querySelector('#name-2').textContent = 'PLAYER 2';
};


document.getElementById('ok').addEventListener('click', function(){

    max_score = document.querySelector('.set_score').value;

    document.querySelector('#yourScore').style.display = 'none';

})


document.getElementById('close').addEventListener('click', function(){
    document.querySelector('.container1').style.display = 'none';

});

document.getElementById('help').addEventListener('click', function(){
    document.querySelector('.container1').style.display = 'block';
});

