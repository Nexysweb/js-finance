import React from 'react';
import { render } from '@testing-library/react';
import Router from './router';

console.log(Router)

test('renders learn react link', () => {
  const { getByText } = render(<Router />);
  const linkElement = getByText(/finance/i);
  expect(linkElement).toBeInTheDocument();
});
