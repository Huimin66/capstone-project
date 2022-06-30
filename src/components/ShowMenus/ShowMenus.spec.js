import '@testing-library/jest-dom/extend-expect';

import {render, screen} from '@testing-library/react';

import menusdata from '../../data.js';
import ShowMenus from '../ShowMenus/ShowMenus';

describe('ShowMenus', () => {
  it('find rendered menus in the page', () => {
    render(<ShowMenus menus={menusdata} curClickedCategory="All" />);
    menusdata.forEach(menuItem => {
      expect(screen.getByText(menuItem.name)).toBeInTheDocument();
    });
  });
});

describe('ShowMenus', () => {
  it('find rendered menus in the page', () => {
    render(<ShowMenus menus={menusdata} curClickedCategory="Drinks" />);
    const water = screen.getByText('Water');
    expect(water).toBeInTheDocument();
  });
});
