import React from 'react';
import "../App.css";
import "../schedule.css";

class Schedule extends React.Component {
    constructor(props) {
      super(props);
    //   this.state = {};
    }

    sendHandler = () => {
      this.props.parentCallback(this.state);
    }
    
    createTable = () => {

        let map = new Map();
        let set0 = ["CMSC131","MATH140","ENGL101"];
        let set1 = ["CMSC132","MATH141"];
        let set2 = ["CMSC216","CMSC250","MATH240"];
        let set3 = ["CMSC330","CMSC351"];
    
    
        map.set(0,set0);
        map.set(1,set1);
        map.set(2,set2);
        map.set(3,set3);
    

        let startYear = parseInt(this.props.gradYear) - 4;

        let yearArr = [];
        // Constructs a year Arr that lists ur proper semesters. For example, if startYear is 2016
        // and gradYear is 2020, arr will look like 
        // [Fall 2016, Spring 2016, Fall 2017, Spring 2017, Fall 2018, Spring 2018, Fall 2019, Spring 2019, Fall 2020, Spring 2020]
        for(let i = startYear; i< this.props.gradYear+1; i++){
            yearArr.push("Fall " + i.toString());
            yearArr.push("Spring " + (i+1).toString());
        }
        let semTakenIndex = parseInt(this.props.semestersTaken);
        let semestersLeft = 8-this.props.semestersTaken;
        let table = []
        
        // Outer loop to create parent.  i =ROWS
        for (let i = 0; i < 4 ; i++) {  
          let children = []
          //Inner loop to create children.j = COL
          for (let j = 0; j < semestersLeft; j++) {
              if(i==0){
                children.push(<td>{`${yearArr[j+semTakenIndex]}`}</td>)
              }else if((j+semTakenIndex)<4){
                children.push(<td>{`${map.get(j+semTakenIndex).pop()}`}</td>)

              }else{
                children.push(<td>n/a</td>)
              }
          }

                    
              

          
          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table
      }

    render() {
    return (
        <div className = "outer">
            <div>
                <table>
                    {this.createTable()}
                </table>
        </div>
    </div>
    );
    }
  }
  
  export default Schedule;