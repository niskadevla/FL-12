'use strict';

const myFighter1 = new Fighter({
  name: 'Maximus',
  damage: 20,
  hp: 100,
  strength: 30,
  agility: 25
});

const myFighter2 = new Fighter({
  name: 'Commodus',
  damage: 25,
  hp: 90,
  strength: 25,
  agility: 20
});

function Fighter(obj) {
  const amountHP = obj.hp;
  let wins = 0;
  let losses = 0;

  this.getName = () => obj.name;
  this.getDamage = () => obj.damage;
  this.getStrength = () => obj.strength;
  this.getAgility = () => obj.agility;
  this.getHealth = () => obj.hp;

  this.attack = (defender) => {
    let maxPerc = 100;
    let probability = maxPerc - (defender.getStrength() + defender.getAgility());
    let random = Math.floor( Math.random() * (maxPerc + 1));

    let arr = [];
    for(let i = 0; i < maxPerc; i++) {
      arr[i] = i < probability;
    }

    let success = arr[random];
    if(success) {
      defender.dealDamage(this.getDamage());
      console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
    } else {
      console.log(`${defender.getName()} attack missed`);
    }
  }

  this.dealDamage = (damage) => {
    let curHP = this.getHealth();
    let restHP = curHP - damage < 0 ? 0 : curHP - damage;
    obj.hp = restHP;
  }

  this.heal = (hp) => {
    let curHP = this.getHealth();
    let restHP = curHP + hp < amountHP ? curHP + hp : amountHP;
    obj.hp = restHP;
  }

  this.addWin = () => ++wins;
  this.addLoss = () => ++losses;

  this.logCombatHistory = () => {
    console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);
  }
}


function battle(fighter1, fighter2) {
  if(fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
    return;
  }
  if(fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
    return;
  }

  while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0 ) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
  }

  if(fighter1.getHealth() > 0) {
    console.log(`${fighter1.getName()} has won!`);
    fighter1.addWin();
    fighter2.addLoss();
  } else {
    console.log(`${fighter2.getName()} has won!`);
    fighter2.addWin();
    fighter1.addLoss();
  }
}

battle(myFighter1, myFighter2);
