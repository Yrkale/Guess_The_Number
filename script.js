'use strict';


let secretNumber=Math.trunc(Math.random()*20)+1;

let score=20;
let hightscore=0;

document.querySelector('.check').addEventListener('click',function(){

const guess=document.querySelector('.guess').value;

if(!guess){
    document.querySelector('.message').textContent='No Number';
} 
else if(guess==secretNumber)
{
    document.querySelector('.message').textContent='currect guess';
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').textContent=secretNumber;
    if(hightscore<score)
    {
        hightscore=score;
    }
    document.querySelector('.highscore').textContent=hightscore;




}
else if (guess>secretNumber && score>1)
{
    document.querySelector('.message').textContent='value is High';
    score--;
    document.querySelector('.score').textContent=score;
}
else if(guess<secretNumber && score>1)
{
    document.querySelector('.message').textContent='value is too Small';
    score--;
    document.querySelector('.score').textContent=score;

}
else{
    document.querySelector('.message').textContent='You loss the Game';
    document.querySelector('body').style.backgroundColor='Red';

}   

});


document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='';







});