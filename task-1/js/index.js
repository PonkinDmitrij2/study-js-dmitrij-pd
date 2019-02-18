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
  if (this.life < 0) this.life = 0;
}

function fight(person1, person2) {
  const text = 'Бой окончен, победитель:';

  console.log('Идет бой...');

  while (true) {
    person1.damage();
    if (person1.life == 0) {
      console.log(`${text} ${person2.name}`);
      break;
    }

    person2.damage();
    if (person2.life == 0) {
      console.log(`${text} ${person1.name}`);
      break;
    }
  }
}

fight(fighter1, fighter2);
