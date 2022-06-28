import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ShowMenus from './ShowMenus.js';

describe('ShowMenus', () => {
  it('find any menu in the menu list', () => {
    render(<ShowMenus />);
    const menuItem = screen.findByText('Kung Pao chicken');
    expect(menuItem).toBeInTheDocument();
  });
});
