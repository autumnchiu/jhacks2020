import React, {useState} from 'react';
import  "./mainPage.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',grad_year: 0, major: "", minor: "" };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value + "!"});
  }
  render() {
    return (
      <div class = "div">
      <form className = "form-style">
      <h1 class = "texts">Hello {this.state.username}</h1>
      <br></br>
      <h1  class = "texts">Start your four year plan with us!</h1>
      <label  class = "texts" for ="name">Enter your name: </label>
      <input id = "name"
        type='text'
        onChange={this.myChangeHandler}
      />
      <br></br>
      <label  class = "texts" for = "grad_yr"> Enter your graduation month and year: </label>
      <input id = "grad_yr"
        type='month'
        
      />
      <br></br>
      <label  class = "texts" for ="major">Enter your major: </label>
      <select id="major" name="major">
          <option value="CMSC">CMSC</option>

        </select>
      <br></br>
      <label  class = "texts" for ="minor">Enter your minor: </label>
      <select id="minor" name="minor">
          <option value="MATH">MATH</option>
          <option value="ASTR">ASTR</option>
          <option value="LING">LING</option>

        </select>
      <br></br>

      </form>
      </div>
    );
  }
}

export default MainPage;