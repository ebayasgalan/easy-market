import { render, screen } from '@testing-library/react';
import CartCount from '../../components/CartCount';

describe('<CartCount/>', () => {
  it('Renders', () => {
    render(<CartCount count={10} />);
  });
  it('Matches snapshot', () => {
    const { container } = render(<CartCount count={12} />);
    expect(container).toMatchSnapshot();
  });
  it('updates via props', async () => {
    const { container, rerender, debug } = render(<CartCount count={11} />);
    expect(container.textContent).toBe('11');
    // Update the props
    rerender(<CartCount count="12" />);
    expect(container.textContent).toBe('12');
    // expect(container).toMatchSnapshot();
  });
});