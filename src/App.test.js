import { render, screen } from '@testing-library/react';
import Router from '../src/application/Router';
import App from './App';

// test('renders learn react link', () => {
//   render(<Router />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('render new tab', () => {
  render(<Router />);
  const tab = screen.getByText(/new/i);
  expect(tab).toBeInTheDocument();
});


// screen.find -> to find asyncronate elements
// screen.get -> to find syncronate elements (they should exist in the app)
// screen.query -> to consult elements that can or can't be into the DOM

// All -> returns all the elements (screen.findAll)
// By -> returns a single element (screen.findBy)

// eslint-disable-next-line testing-library/no-debuggsing-utils
// screen.debug(); -> to make a console.log of the things it founds

//react library test