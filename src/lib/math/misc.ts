/*
  factorial function
  @return f(n) = n!
  @param n
  @param k: sometimes the following i required: n!/k! = n(n-1)(n-2)...(n-k)
*/
export const factorial = (n:number, k:number =1, r:number = 1):number => {
  if(n >= k){
    return factorial(n-1, k, n * r)
  }

  return r;
}

/*
  division without rest
  equivalent to floor(7/3)
  7 / 3 = 2
*/
export const divWoRest = (a:number, b :number= 2):number => (a - a%b)/b;

/* 
solve equation of type 
y = mx + b 
for y or x
see http://en.wikipedia.org/wiki/Linear_equation#Slope.E2.80.93intercept_form
*/
export class SlopeIntercept{
  m:number;
  b:number;
  constructor(m:number, b = 0) {
    this.m = m;
    this.b = b;
  }

  y(x:number) { return this.m*x + this.b};
  x(y:number) {return (y - this.b)/this.m};
};