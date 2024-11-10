/* OLD */
/* let maxNum = 100;
let minNum = 1;
let attempts = 0;
let guess ;
let running = true;
let answer;

const playerAnswer = document.getElementById("playerAnswer");
const playerGuess = document.getElementById("playerGuess") ;
const btn1 = document.getElementById("btn1")

function getRandomInt(maxNum , minNum){
    answer = Math.floor(Math.random() * (maxNum - minNum +1) + minNum); 
    return  answer;
}

function fun1(){
    playerGuess.innerHTML = playerAnswer.value;
    getRandomInt(5, 1)
    console.log(playerGuess.innerHTML, "answer gues " , answer ,"<  the answer")
}

btn1.addEventListener('click',fun1)


function playTheGame(){
    
    while(running){
        guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`)
        // guess = document.getElementById('guess');
        guess = playerGuess.innerHTML = playerAnswer.value;
        console.log(typeof guess, guess);
        if(isNaN(guess)){
            window.alert("please enter a valid number");
            console.log(answer)
        }
        else if(guess < minNum || guess > maxNum){
            window.alert("please enter a valid number");
            console.log(answer)
        }
        else{
            attempts++;
            if(guess < answer){
                window.alert("TOO LOW! Try Again");
                console.log(answer)
            }
            else if( guess > answer){
                window.alert("TOO HIGH! Try Again");
                console.log(answer)
            }
            else{
                window.alert(`Correct ${answer} , Attempts ${attempts}`);
                running = false;
            }
        }
    }
    
}
 */

/* new */
let maxNum = 10;
let minNum = 1;
const randomNumber = Math.floor(Math.random() * (maxNum - minNum +1) + minNum); 
let attempts = 0;
const guess = document.querySelector("#guess");
const btnSubmit = document.querySelector("#btnSubmit")
console.log(randomNumber)

function checkGuess(){
    let guess = document.getElementById("guess").value;
    console.log(guess )
    
    if(guess < 1 || guess > 10){
        document.getElementById("messageClue").innerText = `Enter Between 1 - 10`
        return
    }
   attempts++;
   if(guess == randomNumber){
    document.getElementById("messageStatus").innerText = `Congrats for ${attempts} attempts you won` 
    document.getElementById("messageClue").innerText = ``
    
}
   else if(guess < randomNumber){
     document.getElementById("messageClue").innerText = `Too low! try again.`
   }
   else{
     document.getElementById("messageClue").innerText = `Too High! try again.`
   }
  
}

btnSubmit.addEventListener('click',checkGuess);
