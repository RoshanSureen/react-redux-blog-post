import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../actions";

class SinglePost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSinglePost(id);
  }
  handleDelete() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => this.props.history.push("/"));
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="text-xs-left">
          <Link className="btn btn-primary" to="/">
            Back To Index
          </Link>
          <button onClick={this.handleDelete.bind(this)} className="btn btn-danger pull-xs-right">Delete Post</button>
        </div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const stateToProps = (state, ownProps) => {
  return {
    post: state.posts.newPost[ownProps.match.params.id]
  };
};
const dispatchToProps = dispatch => {
  return {
    fetchSinglePost: id => dispatch(actions.fetchSinglePost(id)),
    deletePost: (id, callback) => dispatch(actions.deletePost(id, callback))
  };
};

export default connect(stateToProps, dispatchToProps)(SinglePost);
