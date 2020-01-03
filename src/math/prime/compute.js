import React from 'react';
import {Prime} from '../../lib/math';

export default props => {
  const [ value, setValue ] = React.useState(null);
  const [ primes, setPrimes ] = React.useState(null);

  const onChange = a => {
    const v = Number(a.target.value);
    setValue(v);
  }

  const onSubmit = e => {
    e.preventDefault()
    if (value === null) {
      console.warn('No input given');
      return;
    }

    setPrimes(Prime.compute(value));
  }

  const renderPrimes = () => {
    if (primes === null) {
      return null;
    }

    return <code>{JSON.stringify(primes)}</code>;
  }

  return <React.Fragment>
    <form onSubmit={onSubmit}>
      <input type="number" onChange={onChange} placeholder="max value"/>
      <button type="submit" onClick={onSubmit}>Compute prime numbers</button>
    </form>
    {renderPrimes()}
  </React.Fragment>
}