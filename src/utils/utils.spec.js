import '@testing-library/jest-dom';

import menusdata from '../data.js';
import {getAlternativeCategorie, getCategoriesAndSort} from './utils.js';

describe('Categories', () => {
  it('Test function getAlternativeCategorie', () => {
    const menuCategories = getAlternativeCategorie(menusdata);
    expect(menuCategories).toStrictEqual(['All', 'Mains', 'Starters', 'Drinks', 'Pastries']);
  });

  it('Test function getAlternativeCategorie', () => {
    const sortBy = ['All', 'Starters', 'Mains', 'Pastries', 'Drinks'];
    const sortedMenuCategories = getCategoriesAndSort(menusdata, sortBy);
    expect(sortedMenuCategories).toStrictEqual(['All', 'Starters', 'Mains', 'Pastries', 'Drinks']);
  });
});
