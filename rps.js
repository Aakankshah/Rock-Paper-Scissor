
let score = (JSON.parse(localStorage.getItem('score')) ) || {win:0,lose:0,tie:0};

updateScore();

function updateScore()
{
    document.querySelector('.gameScore').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

function resetScore(){
    score.win=0;
    score.lose=0;
    score.tie=0;
    localStorage.removeItem('score');
    updateScore();
}
function playgame(player)
{
    const move = pickCompMove();
    let result='';
    if(player==='scissor')
    {
        if(move==='rock')
        {
            result='You Lose.';
        }
        else if(move==='paper')
        {
            result='You Win.';
        }
        else if(move==='scissor')
        {
            result='Tie.';
        }

        
    }
    else if(player==='paper')
    {
        if(move==='rock')
        {
            result='You Win.';
        }
        else if(move==='paper')
        {
            result='Tie.';
        }
        else if(move==='scissor')
        {
            result='You Lose.';
        }
    }
    else if(player=='rock')
    {
        if(move==='rock')
        {
            result='Tie.';
        }
        else if(move==='paper')
        {
            result='You Lose.';
        }
        else if(move==='scissor')
        {
            result='You Win.';
        }
    }

    if(result==='You Win.')
    {
        score.win++;
    }
    else if(result==='You Lose.')
    {
        score.lose++;
    }
    else if(result==='Tie.')
    {
        score.tie++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScore();

    document.querySelector('.gameResult').innerHTML = `${result}`;
    document.querySelector('.gameMoves').innerHTML =
    (`You 
    <img src = "images/${player}.png" class="${player}"> 
    <img src = "images/${move}.png" class="${move}"> 
    Computer`);
}

function pickCompMove()
{
    let move='';
    const comp = Math.random();
    
    if(comp >= 0 && comp<1/3){
        move = 'rock';
    }
    else if(comp >= 1/3 && comp<2/3){
        move = 'paper';
    }
    else if(comp >= 2/3 && comp<1){
        move = 'scissor';
    }

    return move;
}