import * as Bond from './bond';

const epsilon = .01

const c = 5
const n = 4
const i = .0225
const m = 100
const p = 110.41

/** see example on p10 of FRM4
 */
test('"call" should " buyer"', () => {
  const b = Bond.yieldToMaturity(c, n, m, p); //should (be >= i-epsilon/100 and be <= i+epsilon/100)

  expect(b).toBeGreaterThan(i-epsilon/100);
  expect(b).toBeLessThan(i+epsilon/100);
});

test('"bond" should "price"', () => {
  const b = Bond.price(c, n, i , m);

  expect(b).toBeGreaterThan(p-epsilon);
  expect(b).toBeLessThan(p+epsilon)
});
