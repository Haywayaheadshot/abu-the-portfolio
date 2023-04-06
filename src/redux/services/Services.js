import defaultState from './defaultState';

const GET_SERVICE = 'ABUTHEPORTFOLIO/src/redux/services/getServices';

export const getServices = (payload) => (
  {
    type: GET_SERVICE,
    id: payload.id,
    title: payload.title,
    author: payload.author,
    progress: payload.progress,
    currentStatus: payload.currentStatus,
    genre: payload.genre,
  }
);

const serviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SERVICE:
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

export default serviceReducer;
