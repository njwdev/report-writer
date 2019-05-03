import React from 'react';

const NewCommentForm = props => {
  const { onSubmit, onChange, isInvalid } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="comment" onChange={onChange} />
        <select onChange={onChange} name="type">
          <option value="" disabled>
            Choose here
          </option>
          <option value="intro"> Intro </option>
          <option value="positive"> Positive </option>
          <option value="negative"> Negative </option>
          <option value="closing"> Closing </option>
        </select>
        <button type="submit" disabled={isInvalid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCommentForm;
