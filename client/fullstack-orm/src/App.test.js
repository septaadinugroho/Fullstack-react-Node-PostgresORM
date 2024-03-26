import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from './App';

test('renders App component', async () => {
  render(<App />);
  
  // Waiting for an element with specific text to be rendered
  await waitFor(() => {
    const linkElement = screen.getByText(/Nugroho's-Garage/i);
    expect(linkElement).toBeInTheDocument();
  });
});
