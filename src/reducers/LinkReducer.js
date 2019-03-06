const initState = {
  links: [],
  addStatus: false,
  addError: null,
  addResult: null,
  getStatus: false,
  getError: null,
};

const linkReducer = (state = initState, action) => {
  const nextState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case 'ADD_LINK_REQUEST':
      nextState.addStatus = payload.status;
      return nextState;

    case 'ADD_LINK_FAILURE':
      nextState.addError = payload.error;
      return nextState;

    case 'ADD_LINK_SUCCESS':
      nextState.addResult = payload.json;
      nextState.links.push(payload.json);
      return nextState;

    case 'ADD_LINK_FLUSH':
      nextState.addStatus = false;
      nextState.addError = null;
      nextState.addResult = null;
      return nextState;

    case 'GET_LINKS_REQUEST':
      nextState.getStatus = payload.status;
      return nextState;

    case 'GET_LINKS_SUCCESS':
      nextState.getStatus = 'OK';
      nextState.links = payload.links;
      return nextState;

    case 'GET_LINKS_FAILURE':
      nextState.getStatus = 'ERROR';
      nextState.getError = payload.error;
      return nextState;

    default:
      return state;
  }
};

export default linkReducer;
