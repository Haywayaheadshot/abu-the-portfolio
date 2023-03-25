import defaultState from './defaultState';

const GET_REPO = 'ABUTHEPORTFOLIO/src/redux/projects/getRepos';

export const getRepos = (payload) => (
  {
    type: GET_REPO,
    id: payload.id,
    title: payload.title,
    author: payload.author,
    progress: payload.progress,
    currentStatus: payload.currentStatus,
    genre: payload.genre,
  }
);

const reposReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPO:
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

export default reposReducer;
