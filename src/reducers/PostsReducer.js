import constants from "../constants";
import _ from "lodash";

var initialState = {
  list: {}
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case constants.POSTS_RECEIVED:
      updated["list"] = _.mapKeys(action.posts, "id");
      return updated;

    default:
      return state;
  }
};
