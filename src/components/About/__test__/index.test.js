import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// this will ensure that after each test, we won't have any leftover memory data that
// could give us false results
afterEach(cleanup);

describe('About component', () => {
    // renders About test
    // test the baseline to verify that the component is rendering
    it('render', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        // render About
        // we'll use the asFragment function, which returns a snapshot of the
        // About component.
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})