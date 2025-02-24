import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importe o MemoryRouter
import App from './App';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const logoImage = screen.getByRole('img', {name: 'logo' })
  expect(logoImage).toBeInTheDocument()
  // screen.debug()
});