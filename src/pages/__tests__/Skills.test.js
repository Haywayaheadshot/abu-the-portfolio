import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Skills from '../Skills';

const mockSkills = [
  {
    id: 1,
    title: 'JavaScript',
    skillArray: [
      {
        skill: 'React',
        level: 'Advanced',
      },
      {
        skill: 'Node',
        level: 'Advanced',
      },
      {
        skill: 'ES6',
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 2,
    title: 'CSS',
    skillArray: [
      {
        skill: 'Sass',
        level: 'Advanced',
      },
      {
        skill: 'Less',
        level: 'Advanced',
      },
      {
        skill: 'Bootstrap',
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 3,
    title: 'Testing',
    skillArray: [
      {
        skill: 'Jest',
        level: 'Advanced',
      },
      {
        skill: 'React Testing Library',
        level: 'Advanced',
      },
    ],
  },
];

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Skills', () => {
  beforeEach(() => {
    useSelector.mockImplementation(() => mockSkills);
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should render Skills component', () => {
    render(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('should render skills correctly', () => {
    render(<Skills />);
    const skillTitles = screen.getAllByTestId('skill');
    expect(skillTitles.length).toBe(mockSkills.length);
    expect(skillTitles[0]).toHaveTextContent(mockSkills[0].title);
    expect(skillTitles[1]).toHaveTextContent(mockSkills[1].title);
    expect(skillTitles[2]).toHaveTextContent(mockSkills[2].title);
  });
});
