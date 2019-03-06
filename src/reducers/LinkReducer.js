const initState = {
  links: [],
  addStatus: false,
  addError: null,
  addResult: null,
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

    default:
      return state;
  }
};

export default linkReducer;
