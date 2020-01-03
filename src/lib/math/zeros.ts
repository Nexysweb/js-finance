/**
 * secant method
 * caution do not set x so that x._1 == x._2 otherwise will lead to Infty
 * @see https://en.wikipedia.org/wiki/Secant_method
 */
export function secant(x1:number, x2:number, f:(n:number) => number, precision:number = .0001, niterations:number = 1000):number {
  const y = x1 - f(x1)*(x1 - x2)/(f(x1) - f(x2))
  if(Math.abs(y-x1) <= precision || niterations === 0){
    return y
  }
  
  return secant(y, x1, f, precision, niterations-1);
}