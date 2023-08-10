import Undead from '../Undead';

test('Undead creating', () => {
  const undead = new Undead('Uill', 'Undead');
  const expected = {
    name: 'Uill',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(expected);
});

test('Check throwing type error while character creating', () => {
  expect(() => { const test = (name, type) => new Undead(name, type); test('Teo', 'Undd'); }).toThrow('Указан несуществующий тип персонажа');
});
