import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home Component', () => {
  test('renders social media icons', () => {
    const { getByTestId } = render(<Home />);
    const socialMediaIcons = getByTestId('social-media-icons');
    expect(socialMediaIcons).toBeInTheDocument();
  });

  test('renders landing page name', () => {
    const { getByText } = render(<Home />);
    const landingPageName = getByText('ABUBAKAR UMMAR');
    expect(landingPageName).toBeInTheDocument();
  });

  test('renders paragraph', () => {
    const { getByText } = render(<Home />);
    const paragraph = getByText('I can help you build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, try not to hestiate to contact me.');
    expect(paragraph).toBeInTheDocument();
  });
});
