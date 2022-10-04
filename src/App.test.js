import { render } from '@testing-library/react';
import App from './App';

 test('renders Testing Testing, funker det?', () => {
  render(<App />);
  const linkElement = document.querySelector("p");
   expect(linkElement).toBeInTheDocument("Testing Testing, funker det?");
});
