import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from '../../../firebase';
import { ResetButton } from '../../ui/Buttons';
import PaperContainer from '../../layout/Container/PaperContainer';
import Comments from '../Comments';
import TextBox from './TextBox';
import Inputs from './Inputs';

const INITIAL_STATE = {
  commentValue: '',
  copied: false,
  studentName: '',
  pronounType: '',
};

class CommentForm extends Component {
  state = { ...INITIAL_STATE };

  onCommentChange = e => {
    this.setState({ commentValue: e.target.value });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  onReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  onNameChange = e => {
    this.setState({ studentName: e.target.value });
  };

  onCommentAdd = () => {
    console.log('comment added');
  };

  render() {
    const { commentValue, copied, studentName } = this.state;

    return (
      <PaperContainer>
        <h3>Form</h3>
        <Comments onCommentAdd={this.onCommentAdd} />
        <Inputs onChange={this.onNameChange} name={studentName} />
        <TextBox
          onChange={this.onCommentChange}
          onCopy={this.onCopy}
          value={commentValue}
          copied={copied}
        />
        <ResetButton onClick={this.onReset} />
      </PaperContainer>
    );
  }
}

CommentForm.propTypes = { firebase: PropTypes.shape({}).isRequired };

export default withFirebase(CommentForm);
