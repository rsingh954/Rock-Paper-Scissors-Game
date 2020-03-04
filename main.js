let result;

const btn = document.querySelectorAll('button');
btn.forEach((buttons) => {
  buttons.addEventListener('click', (e)=> {
    game(buttons.name);
    if(buttons.name === 'reset'){
      Reset();
    }
  })

})
//Why did I not need to intialize computerChoice?// 
//When I defined computerChoice it would not let me reference it in game() function but since I removed the declaration it is fine.
function computerPlay(){
  let algo = Math.floor((Math.random()*10));
  if (algo <= 3){
    computerChoice = "rock";       
  }
  else if (algo > 3 && algo < 6){
    computerChoice = "paper";
  } 
  else if (algo >= 6 && algo <= 9){
    computerChoice = "scissors";
  } 
  return computerChoice;
}

function playRound(playerSelection, computerSelection = computerPlay()){
  
  if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
    result = "You win!" + ' ' +  `${playerSelection.toLowerCase()} beats ${computerSelection}`;
  }
  else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
    result = "You win!" + ' ' +  `${playerSelection.toLowerCase()} beats ${computerSelection}`;
  }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
    result = "You win!" + ' ' +  `${playerSelection.toLowerCase()} beats ${computerSelection}`;
  }
  else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
    result = "You lose!" + ' ' +  `${computerSelection} beats ${playerSelection.toLowerCase()}`;
  }
  else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
    result = "You lose!" + ' ' +  `${computerSelection} beats ${playerSelection.toLowerCase()}`;;
  }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
    result = "You lose!" + ' ' +  `${computerSelection} beats ${playerSelection.toLowerCase()}`;;
  }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
    result = "You tie!" + ' ' + `You both chose ${playerSelection.toLowerCase()}`;
  }
  else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){
    result = "You tie!" + ' ' + `You both chose ${playerSelection.toLowerCase()}`;
  }
  else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
    result = "You tie!" + ' ' + `You both chose ${playerSelection.toLowerCase()}`;
  }
  else if(playerSelection.toLowerCase() === "reset"){
    Reset();
  }
  
  return result;
}

//We use global variables
var results;
var winner = 0;
var loser = 0;
var tie = 0;
var round = 1;

function game(playerSelection){ 
  const playerScore = document.getElementById('playerScore');
  const computerScore = document.getElementById('computerScore');
  const tieScore = document.getElementById('tieScore');

  if(round === 0){
    round = 1;

  }
    if(round <= 5 && round > 0){  
    let results = playRound(playerSelection);
    console.log(round); 

    //We use ! as a seperator 
    if(results.split('!')[0] === "You win"){
      winner++;
      playerScore.innerText += `Round ${round}: ` + result + '\n';
      console.log(results);  
      console.log('You:' + winner + '|' + 'CPU:' + loser);         
    }
    else if(results.split('!')[0] === "You lose"){
      loser++;
      playerScore.innerText += `Round ${round}: ` + result + '\n';
      console.log(results);  
      console.log('You:' + winner + '|' + 'CPU:' + loser);           
    }
    else if(results.split('!')[0] === "You tie"){
      tie++;
      playerScore.innerText += `Round ${round}: ` + result + '\n';
      console.log(results);  
      console.log('You:' + winner + '|' + 'CPU:' + loser); 
    }


    if (computerChoice === "paper" || round === 6){
      cpuPaperOption.style.visibility = "visible";
      cpuRockOption.style.visibility = "hidden";
      cpuScissorsOption.style.visibility = "hidden";
    }

    else if (computerChoice === "rock" || round === 6){
      cpuPaperOption.style.visibility = "hidden";
      cpuScissorsOption.style.visibility = "hidden";
      cpuRockOption.style.visibility = "visible";
    }

    else if (computerChoice === "scissors" || round === 6){
      cpuScissorsOption.style.visibility = "visible";
      cpuPaperOption.style.visibility = "hidden";
      cpuRockOption.style.visibility = "hidden";
    }

    round++; 


    //Last round   
    if(round === 6 && winner > loser){
      alert("You Win");
    }
    else if(round === 6 && loser > winner){
      alert("You Lose");
    }
    else if(round === 6 && loser === winner){
      alert("You Tie");
    }
  }      
}

function Reset(){
var result;
var results;
winner = 0;
loser = 0;
tie = 0;
round = 0;
playerScore.innerText ='';
computerScore.innerText = '';
tieScore.innerText = '';
cpuPaperOption.style.visibility = "hidden";
cpuScissorsOption.style.visibility = "hidden";
cpuRockOption.style.visibility = "hidden";
}


//Why do we need assign const?
const computerSelection = computerPlay(); 
const playerSelection = ""; 


const cpuRockOption = document.getElementById("rock-cpu");
const cpuPaperOption = document.getElementById("paper-cpu");
const cpuScissorsOption = document.getElementById("scissors-cpu"); 
