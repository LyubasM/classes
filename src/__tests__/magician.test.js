import Magician from '../Magician';

test('Magician creating', () => {
  const magician = new Magician('Mill', 'Magician');
  const expected = {
    name: 'Mill',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(expected);
});

test('Check throwing type error while character creating', () => {
  expect(() => { const test = (name, type) => new Magician(name, type); test('Teo', 'Mgician'); }).toThrow('Указан несуществующий тип персонажа');
});
