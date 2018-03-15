import constants from "../constants";
import _ from "lodash";

var initialState = {
  newPost: {},
  list: {}
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case constants.SINGLE_POST_RECEIVED:
      // const post = action.post;
      // updated["newPost"] = {...updated["list"]};
      // updated["newPost"][post.id] = post;
      updated["newPost"] = {...updated["list"], [action.post.id]: action.post}
      return updated;

    case constants.POSTS_RECEIVED:
      updated["list"] = _.mapKeys(action.posts, "id");
      return updated;

    default:
      return state;
  }
};
