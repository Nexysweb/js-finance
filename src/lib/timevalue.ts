import * as Zeros from './math/zeros';

/**
 *  future value
 *  FV/PV = (1 + i/y)^n
*/
export const fv = (r:number, n:number):number => Math.pow(1+r, n);

/**
 * 
 *  present value
 *  PV/FV = 1/(1 + i/y)^n
*/
export const pv = (r:number, n:number):number => 1/fv(r, n); //pow((1+r/y), -n)

/**
 *  Sum of same cash flow over years 
 *  returns sum of present value interest (begins at 1)
 *  \sum_{i=1}^N 1/(1+r)^i
*/
export const pvMulti = (r:number, n:number):number => (1 - Math.pow(1+r, -n))/r;

/**
 * 
 * @param  p [description]
 * @param  n [description]
 * @return internal rate of return
 */
export const irr = (p:number, n:number):number => {

  const f = (x:number):number => -p +pvMulti(x, n);

  return Zeros.secant(-.2, 1.5, f)
}
  
/**
 * perpetuity
 * pyMulti when n -> infinity
 */
export const perpetuity = (r:number, y = 1) => 1/r/y

export const fvUneven = (cf:number, r:number, s = 0) => cfUneven(cf, r, fv, s)

export const pvUneven = (cf:number, r:number, s = 0) => cfUneven(cf, r, pv, s)

export const cfUneven = (cf:number, r:number, f:(r:number, n:number) => number, s = 0) => {
  if (cf === null) {
    return s;
  }

  return 0;//cfUneven(cc, r, f, s+c*f(r, n));
}
