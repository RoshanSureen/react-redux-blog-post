import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { PostsReducer } from "../reducers";

var store;
export default {
  configureStore: () => {
    const reducer = combineReducers({
      posts: PostsReducer
    });
    store = createStore(reducer, applyMiddleware(thunk));
    return store;
  },
  currentStore: () => {
    return store;
  }
};
