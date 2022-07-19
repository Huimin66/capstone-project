import {nanoid} from 'nanoid';

import AddToCart from './AddToCart';

const currentMenu = {
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

export default {
  title: 'Components/AddToCart',
  component: AddToCart,
  decorators: [Story => <Story />],
};

const Template = args => <AddToCart {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentMenu: currentMenu,
};
