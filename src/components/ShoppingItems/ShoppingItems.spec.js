import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {nanoid} from 'nanoid';
import {MemoryRouter} from 'react-router-dom';

import ShoppingItems from './ShoppingItems.js';

const shoppingItems = [
  {
    id: nanoid(),
    name: 'Kung Pao Chicken',
    image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491336/menu/Kung-Pao-chicken_owdyqj.jpg',
    price: 9.9,
    quantity: 1,
  },
];

describe('ShoppingItems', () => {
  it('find shopping items in the page', () => {
    render(
      <MemoryRouter>
        <ShoppingItems shoppingItems={shoppingItems} />
      </MemoryRouter>
    );
    shoppingItems.forEach(shoppingItem => {
      expect(screen.getByText('Kung Pao Chicken')).toBeInTheDocument();
    });
  });
});
