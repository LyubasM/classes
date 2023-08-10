import Daemon from '../Daemon';

test('Daemon creating', () => {
  const daemon = new Daemon('Dill');
  const expected = {
    name: 'Dill',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(expected);
});

test('Check throwing type error while character creating', () => {
  expect(() => { const test = (name, type) => new Daemon(name, type); test('Teo', 'Dmon'); }).toThrow('Указан несуществующий тип персонажа');
});
