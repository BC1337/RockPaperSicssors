// randomly select rock paper or scissors
let RNG = ['rock', 'paper', 'scissors'];
let userPlay = ['rock', 'paper', 'scissors'];


// players choice
function playerMove() {
    let rand = [Math.random(Math.random() * userPlay.length)];
    if (rand <= 0.33) {
        return ('rock');
    } else if (rand <= 0.66) {
        return ('paper');
    } else(rand >= 0.67); {
        return ('scissors');
    }
}

// computers choice
function computerMove() {
    let rando = [Math.floor(Math.random() * RNG.length)];
    if (rando == 0) {
        return ('rock');
    } else if (rando == 1) {
        return ('paper');
    } else(rando == 2); {
        return ('scissors');
    }
}

//battle and declare winner
function playGame(playerSelection, computerSelection) {
    playerSelection = playerMove();
    computerSelection = computerMove();

    playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

    if (playerSelection === ('rock') && computerSelection === ('rock')) {
        return ('Tie game!');
    } else if (playerSelection === ('rock') && computerSelection === ('paper')) {
        return ('You lose, paper beats rock!');
    } else if (playerSelection === ('rock') && computerSelection === ('scissors'))
        return ('You win! Rock beats scissors!')
    else if (playerSelection === ('paper') && computerSelection === ('rock'))
        return ('You win! Paper beats rock!')
    else if (playerSelection === ('paper') && computerSelection === ('paper'))
        return ('Tie game!')
    else if (playerSelection === ('paper') && computerSelection === ('scissors'))
        return ('You lose! Scissors beats paper!')
    else if (playerSelection === ('scissors') && computerSelection === ('rock'))
        return ('You lose! Rock beats scissors!')
    else if (playerSelection === ('scissors') && computerSelection === ('paper'))
        return ('You win! Scissors beats paper!')
    else if (playerSelection === ('scissors') && computerSelection === ('scissors'))
        return ('Tie Game!')
}

function game(){
console.log(playGame())
console.log(playGame())
console.log(playGame())
console.log(playGame())
console.log(playGame())
console.log('Thanks for playing!');
}













//prompt user to select option and play round outputting winner