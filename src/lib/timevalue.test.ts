import * as Timevalue from './timevalue';
import * as Series from './math/series';

const epsilon = .01;

test('pv', () => {
  const r = .09;
  const n = 5;
  const p = 1000;

  expect(p*Timevalue.pv(r, n)).toBeGreaterThan(649.93-epsilon)
  expect(p*Timevalue.pv(r, n)).toBeLessThan(649.93+epsilon)
});

test('"pv"  should "sum CF"', () => {
  const r = .9
  const y = 1
  const n = 10 

  const a = Series.geometric(1/(1+r/y), n, 1);

  expect(Timevalue.pvMulti(r, n)).toEqual(a);
  expect(Timevalue.irr(a, n)).toBeGreaterThanOrEqual(r - epsilon);
  expect(Timevalue.irr(a, n)).toBeLessThanOrEqual(r + epsilon);
});