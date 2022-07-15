import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import BackToPreviousPage from './BackToPreviousPage.js';
import {MemoryRouter} from 'react-router-dom';

describe('BackToPreviousPage', () => {
  it('find BackToPreviousPage in the page', () => {
    const {getByTestId} = render(
      <MemoryRouter>
        <BackToPreviousPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId('goback')).toBeInTheDocument();
  });
});
