        // randomly select rock paper or scissors
let RNG = ['rock', 'paper', 'scissors'];
let userPlay = ['rock', 'paper', 'scissors'];
let computerPoints = 0;
let playerPoints = 0;

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
        // prompt user to make move
   
        // User picks rock
    if (playerSelection === ('rock') && computerSelection === ('rock')) {
        return `Tie! you chose ${playerSelection} and computer also chose ${computerSelection}`;
    } else if (playerSelection === ('rock') && computerSelection === ('paper')) {
        computerPoints += 1;
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === ('rock') && computerSelection === ('scissors')){
        playerPoints += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
       


        // User picks paper
    else if (playerSelection === ('paper') && computerSelection === ('rock')){
        playerPoints += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    
    else if (playerSelection === ('paper') && computerSelection === ('paper'))
    return `Tie! you chose ${playerSelection} and computer also chose ${computerSelection}`;
    else if (playerSelection === ('paper') && computerSelection === ('scissors')){
        computerPoints += 1;
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
       


        // User picks scissors
    else if (playerSelection === ('scissors') && computerSelection === ('rock')){
        computerPoints += 1;
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection === ('scissors') && computerSelection === ('paper')){
        playerPoints += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === ('scissors') && computerSelection === ('scissors'))
    return `Tie! you chose ${playerSelection} and computer also chose ${computerSelection}`;
}
        // plays 5 games, reports winner and thanks for playing
        function game(){
            for (i=1;i<6;i++){
                let playerSelection = prompt('Write rock, paper, or scissors: ').toLowerCase();
                const computerSelection = computerMove()
                console.log('Round: '+i)
                console.log(playGame(playerSelection, computerSelection));
                if (i == 5){
                    if (playerPoints > computerPoints){
                        console.log(`WINNER WINNER! you had ${playerPoints} points and the computer had ${computerPoints} points`)
                    }
                    else if (playerPoints < computerPoints){
                        return console.log(`Aww you lost! you had ${playerPoints} points and the computer had ${computerPoints} points`)
                    }
                    else{
                        return console.log(`Tie you both had ${playerPoints} points`)
                    }
                }
                else{
                    continue
                }
            }
        }
        game();