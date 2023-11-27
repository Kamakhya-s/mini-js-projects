const randomNumber= parseInt(Math.random()*100+1);
//eventlistner on subt;
const submit=document.querySelector('#subt');
//user input take
const input=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lOh=document.querySelector('.lowOrHi');
const start=document.querySelector('.resultParas');
const p=document.createElement('p');

let prevGuess =[];
let numGuess =1;
let playGame=true;
if(playGame)
{
  submit.addEventListener('click',function(e)
  {
    e.preventDefault();
    const guess= parseInt(input.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {

if(isNaN(guess))
{
  alert("Please enter valid number");
}
else if (guess <1 )
{
  alert ("please enter number greater than 0");
}
else if (guess>100){
  alert ("please enter number less than 100");
}
else{
  prevGuess.push(guess);
  if(numGuess===11)
  {
    cleanGuess(guess);
    displayMessage(`game Over, random number was ${randomNumber}`);
    endGame();
  }
  else 
  {
    cleanGuess(guess);
    checkGuess(guess);
  }
}
}
function checkGuess(guess) {
  if(guess===randomNumber)
  {
    displayMessage("you guesss right");

endGame()  }
 else if(guess< randomNumber)
 {
  displayMessage("number is too low");
 }
 else if(guess > randomNumber)
 {
  displayMessage("nmuber is too high");
 }
}
function displayMessage(message) {
  lOh.innerHTML=`<h2>${ message}</h2>`;
}
function cleanGuess(guess) {
  input.value='';
  guessSlot.innerHTML+= ` ${guess};`;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`;
}
function endGame() {
  input.value=''
  input.setAttribute('disabled','')
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame"> start new game</h2>`;
  start.appendChild(p);
  playGame=false;
  newGame();
}
function newGame() {
}
const newgameButton=document.querySelector("#newGame")
newgameButton.addEventListener('click', function(e)
{
  const randomNumber= parseInt(Math.random()*100+1);
  prevGuess=[];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess} `;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  
  playGame = true;
});




// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }

