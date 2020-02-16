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
   
        let startYear = parseInt(this.props.gradYear) - 4;

        let yearArr = [];
        // Constructs a year Arr that lists ur proper semesters. For example, if startYear is 2016
        // and gradYear is 2020, arr will look like 
        // [Fall 2016, Spring 2016, Fall 2017, Spring 2017, Fall 2018, Spring 2018, Fall 2019, Spring 2019, Fall 2020, Spring 2020]
        for(let i = startYear; i< this.props.gradYear+1; i++){
            yearArr.push("Fall " + i.toString());
            yearArr.push("Spring " + (i+1).toString());
        }

        let semestersLeft = 8-this.props.semestersTaken;
        let table = []
        
        // Outer loop to create parent.  i =ROWS
        for (let i = 0; i < 4 ; i++) {
          let children = []
          //Inner loop to create children.j = COL
          for (let j = 0; j < semestersLeft; j++) {
              if (i== 0){
                children.push(<td>{`${yearArr[j+(8-semestersLeft)]}`}</td>)
              }else{
                  children.push(<td>{`Class ${i}`}</td>)
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