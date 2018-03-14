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
  }
};
