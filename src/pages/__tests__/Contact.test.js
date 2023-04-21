import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../Contact';

describe('Contact', () => {
  test('renders Contact component', () => {
    render(<Contact />);
    const headerText = screen.getByText(/Tell Me About Your Project/i);
    expect(headerText).toBeInTheDocument();

    const whatsapp = screen.getByText(/Whatsapp/i);
    expect(whatsapp).toBeInTheDocument();

    const linkedin = screen.getByText(/Linkedin/i);
    expect(linkedin).toBeInTheDocument();

    const email = screen.getByText(/ummarabubakar@outlook.com/i);
    expect(email).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText('Name');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('type', 'text');

    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');

    const messageInput = screen.getByPlaceholderText('Message');
    expect(messageInput).toBeInTheDocument();
    expect(messageInput).toHaveAttribute('type', 'text area');

    const submitBtn = screen.getByRole('button', { name: 'Submit' });
    expect(submitBtn).toBeInTheDocument();
  });
});
