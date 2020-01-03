import * as Zeros from './zeros';

test('secant', () => {
  const quadratic = (x:number):number => x**2;
  const s = Zeros.secant(-1, 2, quadratic);

  expect(s >= -.1 && s <= .1).toEqual(true);
});