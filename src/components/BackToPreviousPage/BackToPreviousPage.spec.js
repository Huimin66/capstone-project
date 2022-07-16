import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import BackToPreviousPage from './BackToPreviousPage.js';

describe('BackToPreviousPage', () => {
  it('find BackToPreviousPage in the page', () => {
    render(
      <MemoryRouter>
        <BackToPreviousPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId('goback')).toBeInTheDocument();
  });
});
