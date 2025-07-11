import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App.jsx';

// Mock fetch for the App's useEffect
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, title: 'Test Product', price: 10, description: '', image: '' },
      ]),
    })
  );
});

describe('App layout with nav', () => {
  it('renders navigation links and cart image', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Wait for data to load before testing the UI
    await screen.findByText('Homepage');
    await screen.findByText('Shop');

    expect(screen.getByText(/Homepage/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /shopping cart/i })).toBeInTheDocument();
  });

  it('links have correct hrefs', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await screen.findByText('Homepage');

    expect(screen.getByText('Homepage').getAttribute('href')).toBe('/');
    expect(screen.getByText('Shop').getAttribute('href')).toBe('/shop');
    expect(screen.getByRole('img', { name: /shopping cart/i }).closest('a')?.getAttribute('href')).toBe('/cart');
  });
});
