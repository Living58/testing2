import { render } from '@testing-library/react';
import { Counter } from './Counter';

it('should check that p changes color', () => {
    render(<Counter />)
  
    const paragraph = document.querySelector('p')
    expect(paragraph).toHaveStyle("color: blue")
  })
