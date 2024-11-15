// src/__tests__/HomePage.test.jsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

describe('HomePage', () => {
  test('renders main elements', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/20% OFF/i)).toBeInTheDocument();
    expect(screen.getByText(/All/i)).toBeInTheDocument();
  });
});

// src/setupTests.js
import '@testing-library/jest-dom';