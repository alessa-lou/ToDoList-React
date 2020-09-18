import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('renders app', () => {
  render(< App/>);
  const title = "Hello World"
  expect(screen.getByText('Hello World')).toBeInTheDocument()
});
