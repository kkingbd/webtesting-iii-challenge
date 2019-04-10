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
      getByText(/open/i);
      getByText(/unlocked/i);
  })

  test('displays if gate being closed and locked', () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    getByText(/closed/i);
    getByText(/locked/i);
  })

  test('when locked or closed use the red-led class', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    const closedClass = getByText(/closed/i);
    expect(closedClass).toHaveClass('red-led');
  })

  test('when unlocked or open use the green-led class', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    const unlockedClass = getByText(/unlocked/i);
    expect(unlockedClass).toHaveClass('green-led');
  })

});