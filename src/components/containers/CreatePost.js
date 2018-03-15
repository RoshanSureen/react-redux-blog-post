import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { PostForm } from "../view";

class CreatePost extends Component {
  submitForm(values) {
    this.props.createPost(values, () => this.props.history.push("/"));
  }
  render() {
    return (
      <div>
        <PostForm handleFormSubmit={this.submitForm.bind(this)} />
      </div>
    );
  }
}

const dispatchToProps = dispatch => {
  return {
    createPost: (values, callback)  => dispatch(actions.createPost(values, callback)) 
  }
}

export default connect(null, dispatchToProps)(CreatePost);
