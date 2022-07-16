import {MemoryRouter} from 'react-router-dom';

import Navigation from './Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const Template = args => (
  <MemoryRouter>
    <Navigation />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
