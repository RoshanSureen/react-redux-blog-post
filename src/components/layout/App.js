import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Posts, CreatePost, SinglePost } from "../containers";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/posts/new" component={CreatePost} />
            <Route path="/posts/:id" component={SinglePost} />
            <Route path="/" component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
