let randomNumber = Math.ceil(Math.random()* 100)
var count = 0;
var Score = 0;



const GuessNumber = document.querySelector('.guessNumber')
const btnGuess = document.querySelector('.btnGuess')
const btnRefresh = document.querySelector('.btnRefresh')
const message = document.querySelector('.message')
const counter = document.querySelector('.counter')
const points = document.querySelector('.points')



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

      if (count > 10)
        return;
        count += 1;  
        randomNumber = Math.ceil(Math.random()* 100)
      // console.log("counter:" + count);
      counter.innerHTML = `Chances: ${count}/10`;


      if (count <= 3){
        Score = 50;
        points.innerHTML = `Score: ${Score}`;
    }
    else if(count > 3 && count <=6  ){
      Score = 20;
      points.innerHTML = `Score: ${Score}`;
    }
    else if(count > 6 && count <=9  ){
      score = 10;
      points.innerHTML = `Score: ${Score}`;
    }
    else if (count >=10) {
      // document.body.style.backgroundColor = "red";
      alert("youve exhasted your chances please refresh and try again");
        Score = 0;
        points.innerHTML = `Score: ${Score}`;
        alert('Try again');

    }

      
      setTimeout(function(){
        message.innerHTML = ""
      }, 3000);
      
  
}

function refreshBtnClicked (){
  randomNumber = Math.ceil(Math.random()* 100)
  count = 0;
  Score = 0;
  counter.innerHTML = `Chances: ${count}/10`;
  alert("New Number Generated!");
}


    btnGuess.addEventListener('click', btnClicked)
    btnRefresh.addEventListener('click', refreshBtnClicked)

