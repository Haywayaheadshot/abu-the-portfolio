import defaultState from './defaultState';

const GET_SKILLS = 'ABUTHEPORTFOLIO/src/redux/skills/getSkills';

export const getSkills = (payload) => (
  {
    type: GET_SKILLS,
    id: payload.id,
    name: payload.title,
    author: payload.author,
    progress: payload.progress,
    currentStatus: payload.currentStatus,
    genre: payload.genre,
  }
);

const skillsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          progress: action.progress,
          currentStatus: action.currentStatus,
          genre: action.genre,
        },
      ];
    default:
      return state;
  }
};

export default skillsReducer;
