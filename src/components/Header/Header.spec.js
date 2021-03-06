import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';

import Header from './Header.js';

describe('Header', () => {
  it('find header in the page', () => {
    render(<Header />);

    expect(screen.getByText('JOYFEEL WOK')).toBeInTheDocument();
  });
});
