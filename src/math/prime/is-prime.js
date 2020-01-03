import React from 'react';
import {Prime} from '../../lib/math';

export default props => {
  const [ value, setValue ] = React.useState(null);
  const [ isValuePrime, setIsValuePrime ] = React.useState(null);

  const onChange = a => {
    const v = Number(a.target.value);
    setValue(v);
    setIsValuePrime(null);
  }

  const onSubmit = e => {
    e.preventDefault()
    if (value === null) {
      console.warn('No input given');
      return;
    }

    setIsValuePrime(Prime.isPrime(value));
  }

  const renderPrime = () => {
    if (isValuePrime === null) {
      return null;
    }

    return <span>{value} is {isValuePrime.isPrime === false ? 'not' : ''} a prime number! <small>Computation time: {isValuePrime.elapsed}ms</small></span>;
  }

  return <React.Fragment>
    <form onSubmit={onSubmit}>
      <input type="number" onChange={onChange}/>
      <button type="submit" onClick={onSubmit}>Is {value} a prime number?</button>
    </form>
    {renderPrime()}
  </React.Fragment>
}