import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import Navigation from './Navigation.js';

describe('Navigation', () => {
  it('find Navigation in the page', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    expect(screen.getByTestId('menus-icon')).toBeInTheDocument();
  });
});
