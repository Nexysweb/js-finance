import * as AppUtil from './prime';

test('comupte', () => {
  expect(AppUtil.compute(10)).toEqual([2, 3, 5, 7]);
})


test('isprimes', () => {
  const r = AppUtil.isPrime(32);
  expect(r.isPrime).toEqual(false);
})