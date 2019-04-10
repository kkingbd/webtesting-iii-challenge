// Test away
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('renders without crashing', () => {

  test('shows the controls and display', () => {
    render(<Dashboard />)
  })

})
