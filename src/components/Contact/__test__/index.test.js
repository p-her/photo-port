// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup)

describe('Contact component renders', () => {
  it('renders', () => {
  render(<Contact />);
});


})


it('renders', () => {
   render(<Contact />)
  expect(screen.getByTestId('h1tag')).toHaveTextContent('Contact me')
})
 


describe('Contact snapshot', () => { 
    it('renders', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
      })

 })

 describe('render contact button', () => {
    it('renders', () => {
        render(<Contact />)
       expect(screen.getByTestId('button')).toHaveTextContent('Submit')
     })
 })