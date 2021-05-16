import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import galleryReducer from "./gallery.reducer";

const rootReducer = combineReducers({
  authReducer,
  galleryReducer,
});

export default rootReducer;
