import axios from "axios";

const ROOT_URL = "http://reduxblog.herokuapp.com";
const API_KEY = "?key=rsureen2975";

export default {
  get: (endpoint, callback) => {
    const url = ROOT_URL + endpoint + API_KEY;
    axios
      .get(url)
      .then(response => callback(null, response))
      .catch(err => callback(err, null));
  },
  post: (endpoint, params, callback) => {
    const url = ROOT_URL + endpoint + API_KEY;
    axios
      .post(url, {
        title: params.title,
        categories: params.categories,
        content: params.content
      })
      .then(response => callback(null, response))
      .catch(err => callback(err, null));
  }
};
