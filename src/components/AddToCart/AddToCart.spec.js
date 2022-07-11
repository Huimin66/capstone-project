import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {nanoid} from 'nanoid';

import AddToCart from './AddToCart.js';

const currentMenuData = {
  id: nanoid(),
  name: 'Kung Pao chicken',
  image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491336/menu/Kung-Pao-chicken_owdyqj.jpg',
  price: 9.9,
  category: 'Mains',
  ingredients: 'chicken breast, peanuts, chili peppers, soy sauce, baking soda, cornstarch, salt, oil',
  taste: 'Spicy, Salty, Sweet',
  spiciness: 3,
  reviews: [
    {
      id: nanoid(),
      image: 'https://res.cloudinary.com/ddbcljw3g/image/upload/v1656491336/menu/Kung-Pao-chicken_owdyqj.jpg',
      guest: 'Guest A',
      text: 'This was the best Kung Pao chicken I have ever had.',
    },
    {
      id: nanoid(),
      image: '',
      guest: 'Guest B',
      text: 'Very spicy, too much for me, but everyone else loved it.',
    },
    {
      id: nanoid(),
      image: '',
      guest: 'Guest C',
      text: 'We also prefer cashews over the peanuts but either tastes good.',
    },
  ],
};

describe('AddToCart', () => {
  it('find price of the current dish in the page', () => {
    render(<AddToCart currentmenu={currentMenuData} />);
    expect(screen.getByText('9.9€')).toBeInTheDocument();
  });

  it('find add to cart button in the page', () => {
    render(<AddToCart currentMenu={currentMenuData} />);
    expect(screen.getByText('ADD TO CART')).toBeInTheDocument();
  });
});
