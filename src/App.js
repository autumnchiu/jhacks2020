import React, {useState, Component} from 'react';
import Schedule from "./components/schedule";
import calculateGenEd from './controller/calculateGenEd.js';
import handleAPI from './controller/handleAPI.js';
import parseTakenClasses from "./controller/parseTakenClasses.js";
import TakenClass from "./components/takenClass.js";
import MainPage from "./components/mainPage.js";

import { unstable_renderSubtreeIntoContainer } from 'react-dom';


const https = require("https");

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onMain: true,
      onTaken: false,
      onSchedule: false,
      mainData: [],
      takenData: [],
      scheduleData: [],
      main_childData: [],
      thing: []
    }
    this.mainCallBack = this.mainCallBack.bind(this)
    this.takenCallBack = this.takenCallBack.bind(this)
    this.scheduleCallBack = this.scheduleCallBack.bind(this)
    this.dumbCallBack = this.dumbCallBack.bind(this)
    this.anotherCallBack = this.anotherCallBack.bind(this)
  }

  mainCallBack = (childData) => {
    this.setState({ mainData: childData, onMain: false, onTaken: true });
  }

  takenCallBack = (childData) => {
    this.setState({ takenData: childData }, this.processTakenData)
  }

  scheduleCallBack = (childData) => {
    this.setState({scheduleData: childData})
  }

  processTakenData = () => {
    this.setState({ allClasses: parseTakenClasses.listAll(this.state.takenData) }, this.setState({ specialGenEds: parseTakenClasses.listGenEds(this.state.takenData) }, this.populateGenEds));
  }

  populateGenEds = () => {
    this.setState({ thing: handleAPI.parseGenEds(this.state.allClasses, this.state.specialGenEds, this.dumbCallBack) })
  }

  dumbCallBack = (result) => {
    this.setState({thing: result}, this.getClassesNeeded)
  }

  getClassesNeeded = () => {
    this.setState({ genEdStillNeeded: calculateGenEd.genEdNeeded(this.state.thing) }, handleAPI.getGenEdsCredits(this.state.allClasses, this.anotherCallBack))
    
  }

  anotherCallBack = (result) => {
    console.log(result)
    this.setState({ coreAlreadyTaken: result }, this.getCoreNeeded)
  }

  getCoreNeeded = () => {
    console.log(this.state.coreAlreadyTaken)
    //console.log(calculateGenEd.coreNeeded(this.state.coreAlreadyTaken, this.state.mainData.major))
    this.setState({onSchedule: true, onTaken: false})
  }

  render() {
    return (
      <div>
        {this.state.onMain && <MainPage parentCallback={this.mainCallBack}/>}
        {this.state.onTaken
          && <TakenClass parentCallback={this.takenCallBack} />}
        {this.state.onSchedule && <Schedule parentCallBack={this.scheduleCallBack} semestersTaken={this.state.mainData.semestersTaken}
          gradYear={this.state.mainData.grad_year} test={this.state.thing} genEdNeeded = {this.state.genEdStillNeeded}/>}
      </div>
    );
  }
}

export default App;
