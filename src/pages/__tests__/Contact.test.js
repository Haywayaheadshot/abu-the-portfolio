import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../Contact';

describe('Contact', () => {
  test('renders Contact component', () => {
    render(<Contact />);
    const headerText = screen.getByText(/Contact Me/i);
    expect(headerText).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText('Name');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('type', 'text');

    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'text');

    const messageInput = screen.getByPlaceholderText('Message');
    expect(messageInput).toBeInTheDocument();
    expect(messageInput).toHaveAttribute('type', 'text area');

    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    expect(submitBtn).toBeInTheDocument();
  });
});
