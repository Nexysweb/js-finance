/**
 * beginning at i=0 until n  \sum_{i=f}^n r^i = (1-r^(n+1))/(1-r)
 * @param x: main arg
 * @param n: until
 * @param f: beginning at (by default 0)
 */
export function geometric(x:number, n:number, f:number = 0):number {
  const r = (1 - Math.pow(x, n+1))/(1-x)

  if(f !== 0){
    return r - geometric(x, f-1)
  }
  
  return r;
}