import { v4 as uuidv4 } from 'uuid';

const defaultState = [
  {
    id: uuidv4(),
    title: 'Front-End Developer',
    skillArray: [{
      skill: 'HTML',
      level: 'Advanced',
    },
    {
      skill: 'Bootstrap',
      level: 'Intermediate',
    },
    {
      skill: 'Tailwind',
      level: 'Intermediate',
    },
    {
      skill: 'CSS',
      level: 'Advanced',
    },
    {
      skill: 'React',
      level: 'Intermediate',
    },
    {
      skill: 'Redux',
      level: 'Advanced',
    },
    {
      skill: 'JavaScript',
      level: 'Intermediate',
    },
    {
      skill: 'TypeScript',
      level: 'Intermediate',
    },
    ],
  },
  {
    id: uuidv4(),
    title: 'Back-End Developer',
    skillArray: [{
      skill: 'Ruby',
      level: 'Intermediate',
    },
    {
      skill: 'Postgresql',
      level: 'Intermediate',
    },
    {
      skill: 'Ruby On Rails',
      level: 'Intermediate',
    },
    {
      skill: 'Kanban',
      level: 'Advanced',
    },
    {
      skill: 'Databases',
      level: 'Intermediate',
    },
    {
      skill: 'Googling',
      level: 'Advanced',
    },
    {
      skill: 'AI Prompt',
      level: 'Intermediate',
    },
    ],
  },
  {
    id: uuidv4(),
    title: 'Tools and Methods',
    skillArray: [{
      skill: 'Responsive Development',
      level: 'Advanced',
    },
    {
      skill: 'RSpec',
      level: 'Intermediate',
    },
    {
      skill: 'Netlify',
      level: 'Intermediate',
    },
    {
      skill: 'TDD',
      level: 'Advanced',
    },
    {
      skill: 'Jest',
      level: 'Intermediate',
    },
    {
      skill: 'Chrome Dev Tool',
      level: 'Intermediate',
    },
    {
      skill: 'React Testing Library',
      level: 'Intermediate',
    },
    {
      skill: 'Git',
      level: 'Advanced',
    },
    {
      skill: 'Github',
      level: 'Advanced',
    },
    ],
  },
  {
    id: uuidv4(),
    title: 'Professional',
    skillArray: [{
      skill: 'Remote Pair-Programming',
      level: 'Advanced',
    },
    {
      skill: 'Teamwork',
      level: 'Advanced',
    },
    {
      skill: 'Mentoring',
      level: 'Intermediate',
    },
    {
      skill: 'Cross-cultural Communication',
      level: 'Advanced',
    },
    ],
  },
];

export default defaultState;
