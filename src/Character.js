const charactersList = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10 || !charactersList.includes(type)) {
      throw new Error('Введены некорректные параметры');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = '';
    this.defence = '';
  }
}
