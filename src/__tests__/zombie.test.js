import Zombie from '../Zombie';

test('Zombie creating', () => {
  const zombie = new Zombie('Uill', 'Zombie');
  const expected = {
    name: 'Uill',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(expected);
});

test('Check throwing type error while character creating', () => {
  expect(() => { const test = (name, type) => new Zombie(name, type); test('Teo', 'Zombee'); }).toThrow('Указан несуществующий тип персонажа');
});
