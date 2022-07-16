import {MemoryRouter} from 'react-router-dom';

import BackToPreviousPage from './BackToPreviousPage';

export default {
  title: 'Components/BackToPreviousPage',
  component: BackToPreviousPage,
};

const Template = args => (
  <MemoryRouter>
    <BackToPreviousPage />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
