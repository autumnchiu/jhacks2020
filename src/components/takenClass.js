import React, {useState} from 'react';
import "./takenClass.css";

class TakenClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classes: '' };
  }
  myChangeHandler = (event) => {
    this.setState({classes: event.target.value});
  }
  sendHandler = (e) => {
    this.props.parentCallback(this.state.classes);
  }
  render() {
    return (
      <div>
        <h2>Input the classes you have taken (for example: CMSC131) in the text box below, each class seperated by commas.</h2>
        <br></br>
        <p>If you have taken a Gen-Ed where you have a choice as to what requirement it fullfills, state what you are having it count for (for example: ARHU275 DSSP)</p>
        <br></br>
      
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      
      <br></br>
        <button onClick={this.sendHandler}>Process</button>
        </div>
    );
  }
}

export default TakenClass;