/**
 * computes primed up to a certain level
 * @param  max     last/max value to test
 * @param  {Array}  primes array of pre computed primes
 * @return list of primes until max
 */
export function compute(max: number, primes:number[] = [3]):number[] {
  // go through all numbers starting at 
  const lastPrime = primes[primes.length - 1];
  for (let i = lastPrime + 2; i <= max ; i=i+2) {

    //console.log(`testing ${i}`)
    // go throuth primes alreadyc omputed
    for (let j = 0; j < primes.length; j++) {
      const p = primes[j];

      if (p*p > i) {
        primes.push(i);
        break;
      }
      // check if number of interest can be divided with prime tested
      const isNotPrime = i % p === 0;
      //console.log(`testing ${i} % ${primes[j]} = ${i % primes[j]} === 0`)

      if (isNotPrime === true) {
        break;
      }
    }
  }

  // add '2' to the list of primes (it was ommitted earlier for efficiency reasons)
  primes.unshift(2);

  return primes;
}

interface isPrimeReturn {
  isPrime: boolean;
  elapsed: number;
}

export function isPrime(n:number):isPrimeReturn {
  const start = Date.now();
  const primes = compute(n);
  const isPrime = primes.includes(n);
  const end = Date.now();
  const elapsed = end - start; // time in milliseconds
  console.log(`it took ${elapsed}`);

  return {isPrime, elapsed};
}