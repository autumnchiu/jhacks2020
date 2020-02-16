import React, {useState, Component} from 'react';
import Schedule from "./components/schedule";
import calculateGenEd from './controller/calculateGenEd';
import handleAPI from './controller/handleAPI.js';
import parseTakenClasses from "./controller/parseTakenClasses.js";
import TakenClass from "./components/takenClass.js"
import MainPage from "./components/mainPage.js"

import { unstable_renderSubtreeIntoContainer } from 'react-dom';


const https = require("https");

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onMain: true,
      onTaken: false,
      onSchedule: false
    }
    this.mainCallBack = this.mainCallBack.bind(this)
    this.takenCallBack = this.takenCallBack.bind(this)
    
  }
  /*const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(42068);
  const [user, setUsers] = useState([
    {name: 'John', message: "I am john snow"},
    {name: "Aidan", message: "I am a nerdddddd"}
  ]);
  const increment = () =>{
    setCount(count+1);
    setRed(!isRed);
  }
  return(
    <div>
      {user.map(user =>(
        <Tweet name ={user.name} message = {user.message}/>
      ))}
   
      <h1> Hello Eric u dumb</h1>
      <Hello />
      {/* <Tweet name = "samson" />
      <Tweet name = "eric"/>
      <Tweet name = "dumdumAidan"/> */
/*<button onClick = {increment}>Increment</button>
      <h1>{count}</h1>
      <h1 className = {isRed ? 'red': ""}> change my color</h1> 
    }
    </div>
  );*/

  mainCallBack = (childData) => {
    this.setState({ mainData: childData, onMain: false, onTaken: true });
  }
  
  takenCallBack = (childData) => {
    this.setState({ takenData: childData }, this.processTakenData)
  }

  processTakenData = () => {
    this.setState({ allClasses: parseTakenClasses.listAll(this.state.takenData) });
    this.setState({ genEds: parseTakenClasses.listGenEds(this.state.takenData) });
    
    
  }
    
  
  render() {
    return (
      <div>
        {this.state.onMain && <MainPage parentCallback={this.mainCallBack}/>}
        {this.state.onTaken
          && <TakenClass parentCallback={this.takenCallBack} />}
      </div>
    );
  }
}

export default App; 