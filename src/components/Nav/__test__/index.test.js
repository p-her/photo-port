// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup , screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
import { screen } from '@testing-library/prefer-screen-queries'
 
afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
<<<<<<< HEAD
  render(<Nav />);

  expect(screen.getByLabelText('camera')).toHaveTextContent('📸');
=======
     render(<Nav />);

    expect(screen.getByLabelText('camera')).toHaveTextContent('📸');
>>>>>>> develop
  });
})

describe('links are visible', () => {
  it('inserts text into the links', () => {
<<<<<<< HEAD
     render(<Nav />);

    expect(screen.getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(screen.getByTestId('about')).toHaveTextContent('About me');
=======
    render(<Nav />);

    expect(screen.getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(screen.etByTestId('about')).toHaveTextContent('About me');
>>>>>>> develop
  });

})