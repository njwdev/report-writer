import React from 'react';

const TextBox = props => {
  const {} = props;
  return (
    <div>
      <h1>Text Box</h1>
      <div style={{ border: '1px solid red' }}>
        This is where the chosen phrases will go. It should be editable
      </div>
      <button>copy</button>
    </div>
  );
};

export default TextBox;
