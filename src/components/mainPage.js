import React, {useState} from 'react';
import  "./mainPageA.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',grad_year: 0, major: "", minor: "", semestersTaken: 0 };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value + "!"});
  }
  sendHandler = () => {
    this.props.parentCallback(this.state);
  }
  gradYearHandler = (event) => {
    this.setState({grad_year: event.target.value})
    
  }

  majorHandler = (event) => {
    this.setState({major: event.target.value})
  }

  minorHandler = (event) => {
    this.setState({major: event.target.value})
  }

  semestersTakenHandler = (event) =>{
    this.setState({semestersTaken: event.target.value})
  }

  render() {
    return (
      <div className = "div">
      <div className = "innerdiv">
      <form className = "form-style">
      <h1 className = "texts">Hello {this.state.username}</h1>

      <h1  className = "texts">Start your four year plan with us!</h1>
      <br></br>
      <label  className = "texts" name = "name">Enter your name: </label>
      <input id = "name"
        type='text'
        className = "input"
        onChange={this.myChangeHandler}
      />
      <br></br>
      <br></br>
      <label  className = "texts" name = "grad_yr"> Enter your graduation month and year: </label>
      <input id = "grad_yr"
        type='month'
        className = "inputGra"
        onChange= {this.gradYearHandler}
      />
      <br></br>
      <br></br>
      <label  className = "texts" >Enter your major: </label>
      <select id="major" name="major" className = "input" onChange = {this.majorHandler}>
          <option className= "options">Select One</option>
          <option value="CMSC">CMSC</option>

        </select>
      <br></br>
      <br></br>
      <label  className = "texts" name = "minor">Enter your minor: </label>
      <select id="minor" name="minor" className = "input" onChange = {this.minorHandler}>
          <option className= "options">Select One</option>
          <option value="MATH">MATH</option>
          <option value="ASTR">ASTR</option>
          <option value="LING">LING</option>

        </select>
      <br></br>
      <label  className = "texts" name = "semestersTaken"> Enter the number of semesters you've FINSIHED at UMD: </label>
      <input id = "semestersTaken"
        type="text"
        onChange= {this.semestersTakenHandler}
      />
      <br></br>
      <input type="submit" value="Submit" onClick = {this.sendHandler} />
      </form>
      </div >
      </div>

    );
  }
}

export default MainPage;