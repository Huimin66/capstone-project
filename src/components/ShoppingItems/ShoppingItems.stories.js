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

export default {
  title: 'Components/ShoppingItems',
  component: ShoppingItems,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = args => <ShoppingItems {...args} />;

export const Default = Template.bind({});
Default.args = {
  shoppingItems: shoppingItems,
};
