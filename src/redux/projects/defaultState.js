import { v4 as uuidv4 } from 'uuid';

const defaultState = [
  {
    id: uuidv4(),
    title: 'Legend Of The Seeker',
    author: 'Terry Goodkind',
    progress: '64%',
    currentStatus: '17',
    genre: 'Thriller',
  },
];

export default defaultState;
