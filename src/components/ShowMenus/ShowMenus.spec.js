import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

import menusdata from '../../data.js';
import ShowMenus from '../ShowMenus/ShowMenus';

describe('ShowMenus', () => {
  it('find rendered menus in the page', () => {
    render(
      <MemoryRouter>
        <ShowMenus menus={menusdata} currentClickedCategory="All" />
      </MemoryRouter>
    );
    menusdata.forEach(menuItem => {
      expect(screen.getByText(menuItem.name)).toBeInTheDocument();
    });
  });
});

describe('ShowMenus', () => {
  it('find rendered menus in the page', () => {
    render(
      <MemoryRouter>
        <ShowMenus menus={menusdata} currentClickedCategory="Drinks" />
      </MemoryRouter>
    );
    const water = screen.getByText('Water');
    expect(water).toBeInTheDocument();
  });
});
