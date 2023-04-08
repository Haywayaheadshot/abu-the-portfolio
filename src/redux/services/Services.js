import defaultState from './defaultState';

const GET_SERVICE = 'ABUTHEPORTFOLIO/src/redux/services/getServices';

export const getServices = () => (
  {
    type: GET_SERVICE,
  }
);

const serviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SERVICE:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default serviceReducer;
