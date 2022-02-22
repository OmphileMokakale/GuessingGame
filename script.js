let randomNumber = Math.ceil(Math.random()* 100)


// const number_guess = document.querySelector(".number_guess");
// const guess_btn = document.querySelector(".guess_btn");
// const message = document.querySelector(".message");

const GuessNumber = document.querySelector('.guessNumber')
const btnGuess = document.querySelector('.btnGuess')
const message = document.querySelector('.message')




function btnClicked() {
    
    const guessedNo = Number(GuessNumber.value);

    if( guessedNo < randomNumber){
      message.innerHTML = "Your guess is too low";
      }
      else if( guessedNo > randomNumber){
        message.innerHTML = "Your guess is too high";
      }else{
        message.innerHTML = `Correct, the secret number is ${guessedNo}`;
      }
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
