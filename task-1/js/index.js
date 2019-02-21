'use strict';

const fighter1 = {
  name: 'John',
  damage: damage,
  life: 10000000,
};

const fighter2 = {
  name: 'Mike',
  damage: damage,
  life: 10000000,
};

function damage() {
  this.life -= Math.random();
  if (!isLife(this)) {
    this.life = 0;
  }
}

function isLife(person) {
  return person.life > 0;
}

function endFight(name) {
  const text = 'Бой окончен, победитель:';
  console.log(`${text} ${name}`);
}

function fight(person1, person2) {
  console.log('Идет бой...');

  while (isLife(person1) && isLife(person2)) {
    person1.damage();
    person2.damage();
  }

  (!isLife(person1)) ? endFight(person2.name) : endFight(person1.name);
}

fight(fighter1, fighter2);
