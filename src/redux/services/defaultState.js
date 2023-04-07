import { v4 as uuidv4 } from 'uuid';
// import { FaReact } from 'react-icons/fa';

const defaultState = [
  {
    id: uuidv4(),
    name: 'Front-End',
    icon: 'FaReact',
    offers: [],
  },
  {
    id: uuidv4(),
    name: 'Back-End',
    icon: 'SiRubyonrails',
  },
  {
    id: uuidv4(),
    name: 'Project Manager',
    icon: 'SiGithub',
  },
];

export default defaultState;
