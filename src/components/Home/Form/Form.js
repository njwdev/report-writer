import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div>
        <h1>Form</h1>
        Comment form here should include:
        <ul>
          <li>Name input</li>
          <input />
          <li>Male / female pronouns select</li>
          <li>'Includes' search box</li>
          <input type="search" />
        </ul>
      </div>
    );
  }
}

export default CommentForm;
