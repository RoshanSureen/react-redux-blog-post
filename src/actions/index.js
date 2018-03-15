import constants from "../constants";
import { APIManager } from "../utils";

export default {
  fetchPosts: () => {
    return dispatch => {
      APIManager.get("/api/posts", (err, response) => {
        if (err) {
          console.log("error: " + err);
        }
        dispatch({
          type: constants.POSTS_RECEIVED,
          posts: response.data
        });
      });
    };
  },
  createPost: (values, callback) => {
    return dispatch => {
      APIManager.post("/api/posts", values, (err, response) => {
        if (err) {
          console.log("error: " + err);
        } else {
          callback();
        }
      });
    };
  },
  fetchSinglePost: id => {
    return dispatch => {
      APIManager.getById("/api/posts", id, (err, response) => {
        if (err) {
          console.log("error: " + err);
        }
        dispatch({
          type: constants.SINGLE_POST_RECEIVED,
          post: response.data
        });
      });
    };
  },
  deletePost: (id, callback) => {
    return dispatch => {
      APIManager.delete("/api/posts", id, (err, response) => {
        if (err) {
          console.log("error: " + err);
        } else {
          callback();
        }
        dispatch({
          type: constants.POST_DELETED,
          id
        });
      });
    };
  }
};
