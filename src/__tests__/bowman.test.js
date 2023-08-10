import Bowman from '../Bowman';

test('Bowman creating', () => {
  const bowman = new Bowman('Bill', 'Bowman');
  const expected = {
    name: 'Bill',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});

test('Check throwing type error while Bowman creating', () => {
  expect(() => { const test = (name, type) => new Bowman(name, type); test('Teo', 'Bwman'); }).toThrow('Указан несуществующий тип персонажа');
});
