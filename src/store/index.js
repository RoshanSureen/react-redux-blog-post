import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { PostsReducer } from "../reducers";

var store;
export default {
  configureStore: () => {
    const reducer = combineReducers({
      posts: PostsReducer,
      form: formReducer
    });
    store = createStore(reducer, applyMiddleware(thunk));
    return store;
  },
  currentStore: () => {
    return store;
  }
};
