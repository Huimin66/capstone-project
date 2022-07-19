import {MemoryRouter} from 'react-router-dom';

import Header from './Header.js';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = args => <Header />;

export const Default = Template.bind({});
