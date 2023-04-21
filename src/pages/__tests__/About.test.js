import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../About';

describe('About component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<About />);
    const myComponentElement = getByTestId('about-container');
    expect(myComponentElement).toBeInTheDocument();
  });

  it('has about me paragraph', () => {
    const { getByTestId } = render(<About />);
    const myComponentElement = getByTestId('about-container-par');
    expect(myComponentElement).toBeInTheDocument();
  });

  it('should render "Hi! My name is Abubakar Ummar"', () => {
    render(<About />);
    expect(screen.getByText(/My name is Abubakar Ummar/i)).toBeInTheDocument();
  });

  it('should render "looking for a developer?"', () => {
    render(<About />);
    expect(screen.getByText(/looking for a skilled developer?/i)).toBeInTheDocument();
  });

  it('should render a link to the Github profile', () => {
    render(<About />);
    const link = screen.getByRole('link', { name: /here/i });
    expect(link).toHaveAttribute('href', 'https://www.github.com/Haywayaheadshot');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('should contain an email address', () => {
    render(<About />);
    const email = screen.getByText('haywayaheadshotstrategy.fx@gmail.com');
    expect(email).toBeInTheDocument();
    expect(email).toHaveProperty('tagName', 'SPAN');
  });
});
