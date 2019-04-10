// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('renders without crashing', () => {

  test('renders the Display component', () => {
    render(<Display />)
  })

  test('displays if gate is open and unlocked', ()=>{
      const {getByText} = render(<Display locked={false} closed ={false} />)
  })
})