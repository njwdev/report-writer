import React from 'react';

const NewCommentForm = props => {
  const { onSubmit, onChange, isInvalid, success, error } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="comment" onChange={onChange} />
        <select onChange={onChange} name="type">
          <option value="intro"> Intro </option>
          <option value="positive"> Positive </option>
          <option value="negative"> Negative </option>
          <option value="closing"> Closing </option>
        </select>
        <button type="submit" disabled={isInvalid}>
          Submit
        </button>
      </form>
      {success ? (
        <p>
          Comment added successfully <a href="/admin/comments">Back</a>
        </p>
      ) : null}
      {error ? error : null}
    </div>
  );
};

export default NewCommentForm;
