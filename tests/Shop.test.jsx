import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: () => ({
      products: [
        { id: 1, title: 'Mock Product 1', image: '', price: 10 },
        { id: 2, title: 'Mock Product 2', image: '', price: 20 },
      ],
      onAdd: vi.fn(),
    }),
  };
});

vi.mock('../src/components/Card.jsx', () => ({
  default: ({ product }) => (
    <div data-testid="card">{product.title}</div>
  )
}));

import Shop from '../src/components/Shop';

describe('Shop component', () => {
  it('renders catalog heading', () => {
    render(<Shop />);
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });

  it('renders product cards from context', () => {
    render(<Shop />);
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(2);
    expect(cards[0]).toHaveTextContent('Mock Product 1');
    expect(cards[1]).toHaveTextContent('Mock Product 2');
  });
});
