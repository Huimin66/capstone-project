import {MemoryRouter} from 'react-router-dom';

import ScrollTop from './ScrollTop';

export default {
  title: 'Components/ScrollTop',
  component: ScrollTop,
};

const Template = args => (
  <MemoryRouter>
    <ScrollTop />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
