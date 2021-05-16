import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
