import React, { Component } from 'react';

class HomeForm extends Component {
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default HomeForm;
