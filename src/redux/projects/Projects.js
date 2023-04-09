import defaultState from './defaultState';

const GET_REPO = 'ABUTHEPORTFOLIO/src/redux/projects/getRepos';

export const getRepos = () => (
  {
    type: GET_REPO,
  }
);

const reposReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPO:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default reposReducer;
