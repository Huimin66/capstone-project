import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';

import ScrollTop from './ScrollTop.js';

describe('ScrollTop', () => {
  it('find scrollTop icon in the page', () => {
    render(<ScrollTop />);
    expect(screen.getByTestId('scroll-up')).toBeInTheDocument();
  });
});
