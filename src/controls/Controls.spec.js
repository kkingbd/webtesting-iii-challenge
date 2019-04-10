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
});