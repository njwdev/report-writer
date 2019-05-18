import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Form from '../../../layout/Forms/Form';
import SubmitButton from '../../../ui/Buttons/SubmitButton';

const NewCommentForm = props => {
  const { onSubmit, onChange, type, comment, isInvalid } = props;
  return (
    <Form onSubmit={onSubmit} autoComplete="off">
      <FormControl fullWidth>
        <InputLabel htmlFor="comment">Add comment</InputLabel>
        <Input
          multiline
          value={comment}
          name="comment"
          type="comment"
          id="comment"
          onChange={onChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="type-native-helper">Type</InputLabel>
        <NativeSelect
          value={type}
          onChange={onChange}
          input={<Input name="type" id="type-native-helper" />}
        >
          <option value="" />
          <option value="intro">Intro</option>
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
          <option value="closing">Closing</option>
        </NativeSelect>
        <FormHelperText>Choose which part of the report the comment belongs to</FormHelperText>
      </FormControl>
      <SubmitButton disabled={isInvalid}> Submit </SubmitButton>
    </Form>
  );
};

NewCommentForm.defaultProps = { type: undefined, comment: undefined };

NewCommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  comment: PropTypes.shape({}),
  isInvalid: PropTypes.bool.isRequired,
};

export default NewCommentForm;
