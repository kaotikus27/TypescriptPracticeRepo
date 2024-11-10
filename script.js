/* Difficulties */
const ddHard = document.querySelector("#ddHard")
const dnHard = document.querySelector("#dnHard")
const deZ = document.querySelector("#deZ")

let randomNumber = 0;
let attempts = 0;
let attemptsLeft = 4;
let maxNum= 5;
let minNum = 1;
const guess = document.querySelector("#guess");
const btnSubmit = document.querySelector("#btnSubmit")
const btnRestart = document.querySelector("#btnRestart")

/* classElement */
const messageClue = document.getElementById("messageClue");
const messageStatus = document.getElementById("messageStatus");
const attempts_left = document.getElementById("attempts_left");
const attempts_remaining = document.getElementById("attempts_remaining");
const difficulties = document.getElementById("difficulties");
const instruction = document.getElementById("instruction");
instruction.innerText = `"Piece of cake! Just guess a number between 1 and 5!"`
attempts_remaining.innerText=`${attemptsLeft}`
let guessedNumbers =[]

randomNumberGenerator(maxNum)
console.log("default ",randomNumber)

function randomNumberGenerator(maxNum){
  randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  console.log("randomNumberGenerator ",randomNumber)
}

function diffCheck(e){
  console.log("clicked")
  const clickedDiff = parseInt(e.target.innerText)
  if(clickedDiff == 1){
    restartGame()
    difficulties.innerText = `DAMN HARD`
    instruction.innerText = `"Brace yourself: This difficulty is DAMN HARD! Guess the correct number between 1 and 15—but don’t count on luck alone!"`
    dGeneral1.classList.add("checkbtnSelected");
    dGeneral2.classList.remove("checkbtnSelected");
    dGeneral3.classList.remove("checkbtnSelected");
    maxNum = 15
    attemptsLeft = 12;
    attempts_remaining.innerText=`${attemptsLeft}`
    randomNumberGenerator(maxNum)
    console.log(randomNumber)
    console.log("clicked 1" , maxNum)
  } else if ( clickedDiff == 2){
    restartGame()
     difficulties.innerText = `NOT SO HARD`
     instruction.innerText = `"Not so hard, but still tricky! Try your luck and guess the correct number between 1 and 10!"`
    dGeneral1.classList.remove("checkbtnSelected");
    dGeneral2.classList.add("checkbtnSelected");
    dGeneral3.classList.remove("checkbtnSelected");
     maxNum = 10
     attemptsLeft = 8
     attempts_remaining.innerText=`${attemptsLeft}`
    randomNumberGenerator(maxNum)
    console.log(randomNumber)
    console.log("clicked 2" , maxNum)
  }else if (clickedDiff == 3){
    restartGame()
     difficulties.innerText = `EZ`
     instruction.innerText = `"Piece of cake! Just guess a number between 1 and 5!"`
     dGeneral1.classList.remove("checkbtnSelected");
     dGeneral2.classList.remove("checkbtnSelected");
     dGeneral3.classList.add("checkbtnSelected");
     attemptsLeft = 4;
     maxNum = 5;
     attempts_remaining.innerText=`${attemptsLeft}`
     randomNumberGenerator(maxNum)
     console.log(randomNumber)
     console.log("clicked 3" , maxNum)
  } else{
     difficulties.innerText = `select diff first`
  }
}


function checkGuess() {
  let guess = document.getElementById("guess").value;
  console.log('RANDOM NUMBER: ', randomNumber)
  countGuessedNumber(guess)

  if( guess == randomNumber ){
    messageStatus.innerText = `Congrats for ${attempts} attempts you won`
    messageClue.innerText = ``
    messageClue.classList.add('congrats')
    messageStatus.classList.add('congrats')
    gameWin()
  }else if(guess < randomNumber){
    messageClue.innerText = `Too low! try again.`
    messageClue.classList.add('green')
    if(attemptsLeft == 0){
      document.getElementById("btnSubmit").classList.add("notAllowed");
      messageClue.innerText = `Number Of Attempts EXCEED YOU LOSED!`
      messageClue.classList.remove('green')
      messageClue.classList.add('red')
      gameOver()
    }
  }else{
    messageClue.innerText = `Too High! try again.`
    messageClue.classList.remove('green')
    messageClue.classList.add('red')
    if(attemptsLeft == 0){
      document.getElementById("btnSubmit").classList.add("notAllowed");
      messageClue.innerText = `Number Of Attempts EXCEED YOU LOSED!`
      messageClue.classList.remove('green')
      messageClue.classList.add('red')
      gameOver()
    }
  } 
 
}

function countGuessedNumber(guess){
  guessedNumbers.push(parseInt(guess))
  attempts++;
  attemptsLeft--;
  attempts_left.innerText=`${attempts}`
  attempts_remaining.innerText=`${attemptsLeft}`
  console.log('GUSSED NUMBER: ',guessedNumbers)
 
}

function restartGame(){
  randomNumberGenerator(maxNum);
  guessedNumbers = [];
  if (maxNum === 5) {
    attemptsLeft = 4; 
  } else if (maxNum === 10) {
    attemptsLeft = 8;
  } else if (maxNum === 15) {
    attemptsLeft = 12;
  }
  attempts = 0; 
  attempts_left.innerText = `${attempts}`;
  attempts_remaining.innerText = `${attemptsLeft}`;
  messageStatus.innerText = '';
  messageClue.innerText = '';
  document.getElementById("btnSubmit").classList.remove("notAllowed");
  messageClue.classList.remove('green', 'red');
  messageStatus.classList.remove('green');
  document.getElementById("guess").value = "";
}

function gameWin(){
  forFunCongrats()
  setTimeout(()=>{
      console.log("you won")
      restartGame()
  },3000)
}

function gameOver(){
  setTimeout(()=>{
    if(guessedNumbers.length >= attempts){
      console.log("you lose")
      restartGame()
    }
  },3000)
  
 
}


/* HAHAHA CREDITS https://codepen.io/masudrana2779/pen/zYaggOr */
function forFunCongrats(){
  const confettiInstance = createConfetti(document.querySelector('.js-container'));
  setTimeout(() => {
    confettiInstance.stop();
  }, 3000);
}

function createConfetti(el) {
  const containerEl = document.createElement('div');
  const elPosition = el.style.position;
  // Ensure the parent element has a position set
  if (elPosition !== 'relative' && elPosition !== 'absolute') {
    el.style.position = 'relative';
  }
  containerEl.classList.add('confetti-container');
  el.appendChild(containerEl);
  // Confetti configuration
  const confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];
  const confettiAnimations = ['slow', 'medium', 'fast'];

  // Declare confettiInterval outside the renderConfetti function
  let confettiInterval;

  function renderConfetti() {
    confettiInterval = setInterval(() => {
      const confettiEl = document.createElement('div');
      const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
      const confettiBackground = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      const confettiLeft = (Math.floor(Math.random() * el.offsetWidth)) + 'px';
      const confettiAnimation = confettiAnimations[Math.floor(Math.random() * confettiAnimations.length)];

      confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;

      // Set a timeout to remove the confetti after 3 seconds
      confettiEl.removeTimeout = setTimeout(function() {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);

      containerEl.appendChild(confettiEl);
    }, 25);
  }

  renderConfetti(); // Start rendering confetti

  // Return an object with a stop method to stop the confetti animation
  return {
    stop: function() {
      clearInterval(confettiInterval); // Stop the interval by clearing it

      // Remove all confetti elements
      const confettiElements = containerEl.querySelectorAll('.confetti');
      confettiElements.forEach(function(confettiEl) {
        confettiEl.parentNode.removeChild(confettiEl); // Remove each confetti element
      });

      // Optionally, remove the container element itself
      containerEl.parentNode.removeChild(containerEl); // Remove the confetti container from the DOM
    }
  };
}




btnSubmit.addEventListener('click', checkGuess);
btnRestart.addEventListener('click', restartGame);
ddHard.addEventListener('click', diffCheck);
dnHard.addEventListener('click', diffCheck);
deZ.addEventListener('click', diffCheck);