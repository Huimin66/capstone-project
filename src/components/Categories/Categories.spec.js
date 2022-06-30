import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import menusdata from '../../data.js';
import ShowMenus from '../ShowMenus/ShowMenus';

import Categories from './Categories.js';

describe('Categories', () => {
  it('Category names', async () => {
    const callback = jest.fn();
    render(<Categories menus={menusdata} curClickedCategory="All" handleCategoryClick={callback} />);

    const user = userEvent.setup();
    await user.click(screen.getByText('ALL'));
    expect(callback).toHaveBeenCalled();
  });

  it('Test category and menus together', async () => {
    const callback = jest.fn();
    render(<Categories menus={menusdata} curClickedCategory="Starters" handleCategoryClick={callback} />);

    const user = userEvent.setup();
    await user.click(screen.getByText('DRINKS'));
    expect(callback).toHaveBeenCalled();

    render(<ShowMenus menus={menusdata} curClickedCategory="Starters" />);
    const cucumber = screen.getByText('Tossed Cucumber in Sauce');
    expect(cucumber).toBeInTheDocument();
  });
});
