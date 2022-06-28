import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import ShowMenus from './ShowMenus.js';
import menusdata from '../data.js';

describe('ShowMenus', () => {
  it('find all menus in the page', () => {
    render(<ShowMenus />);
    menusdata.forEach(menuItem => {
      expect(screen.getByText(menuItem.name)).toBeInTheDocument();
    });
  });
});
