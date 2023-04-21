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
    const paragraph = getByText('I am excited to offer my skills to help you create your dream product, feature, or website. Please take a moment to browse through my previous projects and skills. If you find yourself impressed with what you see, do not hesitate to reach out to me with your project. I am looking forward to working with you!');
    expect(paragraph).toBeInTheDocument();
  });
});
