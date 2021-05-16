import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import galleryReducer from "./gallery.reducer";
import errorReducer from "./error.reducer";

const rootReducer = combineReducers({
  authReducer,
  galleryReducer,
  errorReducer,
});

export default rootReducer;
