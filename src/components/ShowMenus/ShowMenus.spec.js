import '@testing-library/jest-dom/extend-expect';

import {render, screen} from '@testing-library/react';

import menusdata from '../../data.js';
import ShowMenus from '../ShowMenus/ShowMenus';

describe('ShowMenus', () => {
  it('find all menus in the page', () => {
    render(<ShowMenus />);
    menusdata.forEach(menuItem => {
      expect(screen.getByText(menuItem.name)).toBeInTheDocument();
    });
  });
});
