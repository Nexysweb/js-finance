import * as Misc from './misc';

test('Factorial', () => {
  expect(Misc.factorial(3)).toEqual(6);
  expect(Misc.factorial(6)).toEqual(720);
  expect(Misc.factorial(6, 4)).toEqual(6*5*4);
})


test("Division without rest", () => {
  expect(Misc.divWoRest(7, 3)).toEqual(2);
  expect(Misc.divWoRest(10, 3)).toEqual(3);
});

test('"Slope intercept" should "x return y = mx+b"', () => {
  const a = new Misc.SlopeIntercept(1, 2);

  expect(a.y(4)).toEqual(6);
  expect(a.x(6)).toEqual(4);
});

test(' "x2 return y2 = mx2+b"', () => {
  const a = new Misc.SlopeIntercept(2, 3);

  expect(a.y(5)).toEqual(13);
  expect(a.x(13)).toEqual(5);
});
