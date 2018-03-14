import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../actions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Create New Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    posts: state.posts.list
  };
};
const dispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(actions.fetchPosts(dispatch))
  };
};

export default connect(stateToProps, dispatchToProps)(Posts);
