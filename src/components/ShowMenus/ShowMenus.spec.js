import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import menusdata from '../../data.js';
import ShowMenus from '../ShowMenus/ShowMenus';

describe('ShowMenus', () => {
  it('find rendered menus in the page', () => {
    render(
      <BrowserRouter>
        <ShowMenus menus={menusdata} curClickedCategory="All" />
      </BrowserRouter>
    );
    menusdata.forEach(menuItem => {
      expect(screen.getByText(menuItem.name)).toBeInTheDocument();
    });
  });
});

describe('ShowMenus', () => {
  it('find rendered menus in the page', () => {
    render(
      <BrowserRouter>
        <ShowMenus menus={menusdata} curClickedCategory="Drinks" />
      </BrowserRouter>
    );
    const water = screen.getByText('Water');
    expect(water).toBeInTheDocument();
  });
});
