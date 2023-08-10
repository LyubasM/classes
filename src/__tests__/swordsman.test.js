import Swordsman from '../Swordsman';

test('Swordsman creating', () => {
  const swordsman = new Swordsman('Sill', 'Swordsman');
  const expected = {
    name: 'Sill',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(expected);
});

test('Check throwing type error while character creating', () => {
  expect(() => { const test = (name, type) => new Swordsman(name, type); test('Teo', 'Swordman'); }).toThrow('Указан несуществующий тип персонажа');
});
