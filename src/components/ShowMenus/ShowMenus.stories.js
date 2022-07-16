import {MemoryRouter} from 'react-router-dom';

import menusdata from '../../data.js';
import ShowMenus from '../ShowMenus/ShowMenus';

export default {
  title: 'Components/ShowMenus',
  component: ShowMenus,
};

const Template = args => (
  <MemoryRouter>
    <ShowMenus {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  menus: menusdata,
  currentClickedCategory: 'All',
};
