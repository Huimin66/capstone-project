import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import menusdata from '../../data.js';
import ShowMenus from '../ShowMenus/ShowMenus';

import Categories from './Categories.js';
import useCategories from './useCategories';

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

  it('Test function getAlternativeCategorie', () => {
    const {getAlternativeCategorie} = useCategories();
    const menuCategories = getAlternativeCategorie(menusdata);
    expect(menuCategories).toStrictEqual(['All', 'Mains', 'Starters', 'Drinks', 'Pastries']);
  });

  it('Test function getAlternativeCategorie', () => {
    const {getCategoriesAndSort} = useCategories();
    const sortBy = ['All', 'Starters', 'Mains', 'Pastries', 'Drinks'];
    const sortedMenuCategories = getCategoriesAndSort(menusdata, sortBy);
    expect(sortedMenuCategories).toStrictEqual(['All', 'Starters', 'Mains', 'Pastries', 'Drinks']);
  });
});
