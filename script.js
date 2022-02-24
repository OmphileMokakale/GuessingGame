let randomNumber = Math.ceil(Math.random()* 100)


// const number_guess = document.querySelector(".number_guess");
// const guess_btn = document.querySelector(".guess_btn");
// const message = document.querySelector(".message");

const GuessNumber = document.querySelector('.guessNumber')
const btnGuess = document.querySelector('.btnGuess')
const message = document.querySelector('.message')
const counter = document.querySelector('.counter')


var count = 0;


function btnClicked() {
    

    const guessedNo = Number(GuessNumber.value);

  

    if( guessedNo < randomNumber){
      message.innerHTML = "Your guess is too low";
      }
      else if( guessedNo > randomNumber){
        message.innerHTML = "Your guess is too high";
      }else{
        message.innerHTML = `Correct, the secret number is ${guessedNo}`;
        randomNumber = Math.ceil(Math.random()* 100)
        count = -1;
        setTimeout(function() { alert("New game starting!"); }, 100);
      }

      if (guessedNo > 100){
        message.innerHTML = "Error, Number Cannot be bigger than 100";
    }
    else if (guessedNo < 0){
        message.innerHTML = "Error, Number Cannot be smaller than 0";
    }

      if (count >= 10)
        return;
        count += 1;  
        randomNumber = Math.ceil(Math.random()* 100)
        
      // console.log("counter:" + count);
      counter.innerHTML = `Chances: ${count}/10`;

      
      setTimeout(function(){
        message.innerHTML = ""
      }, 3000);

      
  
}


    //   function guessBtnClicked() {
    //     const guessedNo = Number(number_guess.value);
    
    //     if (guessedNo < randomNumber) {
    //         message.innerHTML = "Your guess is too low";
    //     } else if (guessedNo > randomNumber) {
    //         message.innerHTML = "Your guess is too high";
    //     } else {
    //         message.innerHTML =  `Correct, the secret number is ${guessedNo}`;
    //     }
    
    
    //     setTimeout(function(){
    //         message.innerHTML = "";
    //     }, 2000);
    
    
    // }
    
    // guess_btn.addEventListener('click', guessBtnClicked)


    btnGuess.addEventListener('click', btnClicked)
