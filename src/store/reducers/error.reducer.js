const initialState = {
  error: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Error":
      return {
        ...state,
        error: action.payload,
      };
    case "Reset Error":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default errorReducer;
