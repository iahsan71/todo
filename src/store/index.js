import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
 reducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;