import React from 'react';
import PropTypes from 'prop-types';
// MUI
import Grid from '@material-ui/core/Grid';
// Internal
import Form from '../../../../layout/Forms/Form';
import PaperContainer from '../../../../layout/Container/PaperContainer';
import { SubmitButton } from '../../../../ui/Buttons';
import TextBox from './TextBox';
import CommentType from './CommentType';
import TermSelect from './TermSelect';
import ShowTermSwitch from './ShowTermSwitch';

const NewCommentForm = props => {
  const {
    onSubmit,
    onChange,
    type,
    term,
    comment,
    isInvalid,
    showTermSelect,
    onCheck
  } = props;
  return (
    <PaperContainer>
      <Form onSubmit={onSubmit} autoComplete='off'>
        <TextBox comment={comment} onChange={onChange} />
        <Grid container direction='row'>
          <Grid item xs={6}>
            <CommentType type={type} onChange={onChange} />
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            <ShowTermSwitch
              showTermSelect={showTermSelect}
              onCheck={onCheck}
              term={term}
            />
          </Grid>
          {showTermSelect ? (
            <Grid item xs={6}>
              <TermSelect term={term} onChange={onChange} />
            </Grid>
          ) : null}
          <SubmitButton disabled={isInvalid}> Submit </SubmitButton>
        </Grid>
      </Form>
    </PaperContainer>
  );
};

NewCommentForm.defaultProps = { type: undefined, comment: undefined };

NewCommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  term: PropTypes.string.isRequired,
  comment: PropTypes.shape({}),
  isInvalid: PropTypes.bool.isRequired,
  showTermSelect: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired
};

export default NewCommentForm;
