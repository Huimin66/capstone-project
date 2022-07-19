import Header from './Header.js';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [Story => <Story />],
};

const Template = args => <Header />;

export const Default = Template.bind({});
