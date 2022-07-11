import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';

import menusdata from '../../data.js';
import ShowMenus from '../ShowMenus/ShowMenus';

import Categories from './Categories.js';

describe('Categories', () => {
  it('Category names', async () => {
    const callback = jest.fn();
    render(
      <MemoryRouter>
        <Categories menus={menusdata} currentClickedCategory="All" handleCategoryClick={callback} />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('ALL'));
    expect(callback).toHaveBeenCalled();
  });

  it('Test category and menus together', async () => {
    const callback = jest.fn();
    render(
      <MemoryRouter>
        <Categories menus={menusdata} currentClickedCategory="Starters" handleCategoryClick={callback} />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('DRINKS'));
    expect(callback).toHaveBeenCalled();

    render(
      <MemoryRouter>
        <ShowMenus menus={menusdata} currentClickedCategory="Starters" />
      </MemoryRouter>
    );
    const cucumber = screen.getByText('Tossed Cucumber in Sauce');
    expect(cucumber).toBeInTheDocument();
  });
});
