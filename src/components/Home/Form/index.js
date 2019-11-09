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
  termType: 'any'
};

class CommentForm extends Component {
  state = { ...INITIAL_STATE };

  onCommentChange = e => {
    this.setState({ commentValue: e.target.value });
  };

  onNameChange = e => {
    this.setState({ studentName: e.target.value });
  };

  onPronounSelect = e => {
    this.setState({ pronounType: e.target.value });
  };

  onTermSelect = e => {
    this.setState({ termType: e.target.value });
  };

  onCommentAdd = comment => {
    const { commentValue } = this.state;
    const selectedComment = comment;
    const newComment = commentValue + selectedComment;
    this.setState({ commentValue: newComment });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  onReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const {
      commentValue,
      copied,
      studentName,
      pronounType,
      termType
    } = this.state;
    const isValid = studentName !== '' && pronounType !== '';

    return (
      <PaperContainer>
        <Inputs
          onNameChange={this.onNameChange}
          onPronounSelect={this.onPronounSelect}
          onTermSelect={this.onTermSelect}
          name={studentName}
          pronounType={pronounType}
          termType={termType}
        />
        <Comments
          onCommentAdd={this.onCommentAdd}
          name={studentName}
          pronoun={pronounType}
          disabled={!isValid}
          termType={termType}
        />
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
