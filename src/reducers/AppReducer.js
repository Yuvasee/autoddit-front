const initState = {
};

const appReducer = (state = initState, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case 'ACTION_TYPE':
      /* ... */
      return nextState;

    default:
      return state;
  }
};

export default appReducer;
