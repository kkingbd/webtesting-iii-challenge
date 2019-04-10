// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

afterEach(cleanup);

describe('renders without crashing', () => {

    test('renders the Control component', () => {
      render(<Controls />)
    })

    test('provide buttons to toggle the closed and locked states.', () => {
        const { getByText } = render(<Controls closed={false} locked={true} />);
        getByText(/lock gate/i);
        getByText(/close gate/i);  
    })

    test('disables the lock gate when the gate is open and unlocked', () => {
        const { getByText } = render(<Controls closed={false} locked={false} />);
        const toggleLockButton = getByText(/lock gate/i);
        expect(toggleLockButton).toHaveAttribute('disabled', '');  
    })

    test('the closed toggle button is disabled if the gate is closed', () => {
        const { getByText } = render(<Controls closed={true} />);
        getByText(/open gate/i);
    })

    test('the locked toggle button is disabled if the gate is open', () => {
        const { getByText } = render(<Controls locked={false} />);
        getByText(/Close gate/i);
    })
});