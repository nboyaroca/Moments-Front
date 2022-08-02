import { render, screen } from '@testing-library/react';
import Router from '../src/application/Router';

// Abans de cada test renderitza el Router
beforeEach( () => {
  render(<Router />);
});

// test('renders learn react link', () => {
//   render(<Router />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// TEST PER SABER SI HI HA EL TEXT NEW
test('renders new tab', () => {
  // render(<Router />); no cal si el tenim a beforeEach
  const tab = screen.getByText(/new/i);
  expect(tab).toBeInTheDocument();
});

// TEST PER SABER SI HI HA EL NEW BUTTON
test('renders new button', () => {
  const button = screen.getByRole("button", {name: /new/i});
  // const button = screen.getByRole("link", {name: /new/i}); també funciona
  expect(button).toBeInTheDocument();
})
;


// screen.find -> to find asyncronate elements
// screen.get -> to find syncronate elements (they should exist in the app)
// screen.query -> to consult elements that can or can't be into the DOM, eg Modals

// All -> returns all the elements (screen.findAll)
// By -> returns a single element (screen.findBy)

// eslint-disable-next-line testing-library/no-debuggsing-utils
// screen.debug(); -> to make a console.log of the things it founds

//react library test