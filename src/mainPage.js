import React, {useState} from 'react';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',grad_year: 0, major: "", minor: "" };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <br></br>
      <h1>Start your four year plan with us!</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <br></br>
      
      </form>
    );
  }
}

export default MainPage;