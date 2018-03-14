import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/layout";
import { Provider } from "react-redux";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store.configureStore()}>
    <div className="container">
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
