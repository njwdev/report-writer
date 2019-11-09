import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Form from '../../../layout/Forms/Form';
import PaperContainer from '../../../layout/Container/PaperContainer';
import { SubmitButton } from '../../../ui/Buttons';

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
        <FormControl fullWidth>
          <TextField
            multiline
            variant='outlined'
            label='Add comment'
            value={comment}
            name='comment'
            type='comment'
            id='comment'
            onChange={onChange}
          />
        </FormControl>
        <Grid container direction='row'>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor='type-native-helper'>Type</InputLabel>
              <NativeSelect
                value={type}
                onChange={onChange}
                input={<Input name='type' id='type-native-helper' />}
              >
                <option value='' />
                <option value='intro'>Intro</option>
                <option value='positive'>Positive</option>
                <option value='negative'>Negative</option>
                <option value='closing'>Closing</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'center' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={showTermSelect}
                  onChange={onCheck}
                  color='secondary'
                  disabled={term !== 'any'}
                />
              }
              label='Term specific?'
              labelPlacement='start'
            />
          </Grid>
          {showTermSelect ? (
            <Grid item xs={6}>
              <FormControl fullWidth style={{ marginTop: '5px' }}>
                <InputLabel htmlFor='type-native-helper'>Term</InputLabel>
                <NativeSelect
                  value={term}
                  onChange={onChange}
                  input={<FilledInput name='term' id='type-native-helper' />}
                >
                  <option value='any'>Any</option>
                  <option value='first'>First</option>
                  <option value='second'>Second</option>
                  <option value='third'>Third</option>
                  <option value='summer'>Summer Course</option>
                </NativeSelect>
              </FormControl>
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
