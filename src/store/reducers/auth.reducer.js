import userService from "../../services/user.service";

const initialState = {
  isLoggedIn: userService.isLoggedIn(),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Is logged in":
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
