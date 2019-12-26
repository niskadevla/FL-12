'use strict';

//Step 1
let isPlay = confirm('Do you want to play a game?');

if(!isPlay) {
  alert('You did not become a billionaire, but can.');
}

//Step 2 and 3
let minNum = 0;
let maxNum = 8;
let maxNumInc = 4;
let userNum;
let attempts = 3;
let totalPrize = 0;
let prize_1 = 25;
let prize_2 = 50;
let prize_3 = 100;
let prizes = [prize_1, prize_2, prize_3];
let prizeInc = 2;
let attemptsLeft;

if(isPlay) {
  //Do a loop 'do while' while the User is plaing
  quit:
  do {
    let randNum = Math.floor( minNum + Math.random() * (maxNum + 1 - minNum) );
    attemptsLeft = attempts;
    //Loop for 3 attempts
    for(; attemptsLeft > 0; attemptsLeft--) {
      userNum = prompt(`\
        Choose a roulette pocket number from 0 to ${maxNum} \n\
        Attempts left: ${attemptsLeft} \n\
        Total prize: ${totalPrize}$ \n\
        Possible prize on current attempt: ${prizes[attemptsLeft - 1]}$`, '');

      //If cancel quit the game
      if(!userNum) {
        break quit;
      }
      //If User entered data:
      if(userNum) {
        //String to Number
        userNum = +userNum;
        //If won:
        if(randNum === userNum) {
          totalPrize += prizes[attemptsLeft - 1];
          alert(`\
            Congratulation, you won!\n\
            Your prize is: ${totalPrize}$`);
          isPlay = confirm('Do you want to continue?');
          maxNum += maxNumInc;
          prizes = prizes.map(prize => prize * prizeInc);
          break;
        } else if(attemptsLeft === 1) { //If lose:
          alert(`\
            Thank you for your participation.\n\
            Your prize is: ${totalPrize}`);
          isPlay = confirm('Do you want to play again?');
        }
      }
    }

  } while (isPlay);
}
