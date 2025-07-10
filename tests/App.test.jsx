import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App.jsx';

describe('App layout with nav', () => {
  it('renders navigation links and cart image', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Homepage/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /shopping cart/i })).toBeInTheDocument();
  });

  it('links have correct hrefs', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Homepage').getAttribute('href')).toBe('/');
    expect(screen.getByText('Shop').getAttribute('href')).toBe('/shop');
    expect(screen.getByRole('img', { name: /shopping cart/i }).closest('a')?.getAttribute('href')).toBe('/cart');
  });
});
