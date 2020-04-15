var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;



//document.querySelector ('#current-' + activePlayer).textContent = dice;

document.querySelector ('.img-dice').style.visibility = 'hidden';



document.getElementById('current-1').textContent = '0';
document.getElementById('current-2').textContent = '0';
document.getElementById('player-total1').textContent = '0';
document.getElementById('player-total2').textContent = '0';

document.querySelector('#roll-dice-btn').addEventListener('click', function(){
    var dice = Math.floor(Math.random()*6) + 1;

   diceDOM = document.querySelector('.img-dice');

   diceDOM.style.visibility = 'visible';
   diceDOM.src = 'dice-'+dice+'.png';

   if (dice!==1){

       roundScore += dice;
       document.querySelector ('#current-' + activePlayer).textContent = roundScore;

   }else{
        nextPlayer();
   }
    

});

document.getElementById('hold-btn').addEventListener('click', function(){
    scores[activePlayer-1] += roundScore;

    document.querySelector('#player-total' + activePlayer).textContent = scores[activePlayer-1];



    if(scores[activePlayer-1]>= 10){
            document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';
            document.querySelector ('.img-dice').style.visibility = 'hidden';
            document.querySelector ('.CURRENT1').style.visibility = 'hidden';
            document.querySelector ('.CURRENT2').style.visibility = 'hidden';
            document.querySelector('.panel-player'+ activePlayer).classList.add('winner');
            document.querySelector('.panel-player'+ activePlayer).classList.remove('active');


    }else{
        nextPlayer();
    }
    
    

});


function nextPlayer(){
    activePlayer === 1? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';

    document.querySelector('.panel-player1').classList.toggle('active');
    document.querySelector('.panel-player2').classList.toggle('active');

    document.querySelector ('.img-dice').style.visibility = 'hidden';
}