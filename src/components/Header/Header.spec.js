import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import Header from './Header.js';

describe('Header', () => {
  it('find header in the page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('JOYFEEL WOK')).toBeInTheDocument();
  });
});
