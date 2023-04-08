import defaultState from './defaultState';

const GET_SKILLS = 'ABUTHEPORTFOLIO/src/redux/skills/getSkills';

export const getSkills = () => (
  {
    type: GET_SKILLS,
  }
);

const skillsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default skillsReducer;
