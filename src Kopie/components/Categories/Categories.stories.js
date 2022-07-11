import menusdata from '../../data.js';

import Categories from './Categories.js';

export default {
  title: 'Components/Categories',
  component: Categories,
  argTypes: {handleCategoryClick: {action: 'handleCategoryClick'}},
};

const Template = args => <Categories {...args} />;

export const Default = Template.bind({});
Default.args = {
  menus: menusdata,
  curClickedCategory: 'All',
};
