import ShowMenus from '../ShowMenus/ShowMenus';
import menusdata from '../../data.js';

export default {
  title: 'Components/ShowMenus',
  component: ShowMenus,
};

const Template = args => <ShowMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  menus: menusdata,
  curClickedCategory: 'All',
};
