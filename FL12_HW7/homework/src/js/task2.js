'use strict';

//Step 1
let isPlay = confirm('Do you want to play a game?');

if(!isPlay) {
  alert('You did not become a billionaire, but can.');
}

//Step 2 and 3
let minNum = 0;
let maxNum = 8;
let userNum;
let attempts = 3;
let totalPrize = 0;
let prizes = [100, 50, 25];
// let prize_1 = 100;
// let prize_2 = 50;
// let prize_3 = 25;
let leftAttempts;
let isLose = false;
// let curPrize;

if(isPlay) {
  //Do a loop 'do while' while the User is plaing
  do {
    let randNum = Math.floor( minNum + Math.random() * (maxNum + 1 - minNum) );
    // curPrize = prize_1;
    leftAttempts = attempts;

    for(; leftAttempts > 0; leftAttempts--) {
      userNum = prompt(`\
        Choose a roulette pocket number from 0 to 8 \n\
        Attempts left: ${leftAttempts} \n\
        Total prize: ${totalPrize}$ \n\
        Possible prize on current attempt: ${prizes[leftAttempts - 1]}$`, '');

      if(!userNum) {
        break;
      }

      if(userNum) {
        if(randNum == userNum) {
          totalPrize += prizes[leftAttempts - 1];
        } else {
          isLose = true;
          alert('Thank you for your participation.');
          isPlay = confirm('Do you want to play again?');
        }
      }

    }

  } while (userNum || isLose);

}
