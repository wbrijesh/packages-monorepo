import { render } from '@testing-library/react';

import Compose from './compose';

describe('Compose', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Compose />);
    expect(baseElement).toBeTruthy();
  });
});
