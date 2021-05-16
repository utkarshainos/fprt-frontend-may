import userService from "../../services/user.service";

const initialState = {
  isLoggedIn: userService.isLoggedIn(),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Is logged in": {
      state.isLoggedIn = action.payload;
      return state;
    }

    default:
      return state;
  }
};

export default authReducer;
