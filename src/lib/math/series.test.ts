import * as Series from './series';

test('geometric', () => {
  const epsilon = .000001
  expect(Series.geometric(.1, 3)).toEqual(1.111);
  expect(Series.geometric(.1, 0)).toEqual(1);
  expect(Series.geometric(.1, 3, 1)).toBeGreaterThan(.111-epsilon);
  expect(Series.geometric(.1, 3, 1)).toBeLessThan(.111+epsilon);
});
