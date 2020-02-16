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
        let startYear = this.props.gradYear.parseInt() - 4;
        let yearArr = [];
        // Constructs a year Arr that lists ur proper semesters. For example, if startYear is 2016
        // and gradYear is 2020, arr will look like 
        // [Fall 2016, Spring 2016, Fall 2017, Spring 2017, Fall 2018, Spring 2018, Fall 2019, Spring 2019, Fall 2020, Spring 2020]
        for(let i = startYear; i< this.props.gradYear+1; i++){
            yearArr.push("Fall" + i);
            yearArr.push("Spring" + i);
        }

        let semestersLeft = 8-this.props.semestersTaken;
        let table = []
        
        // Outer loop to create parent.  i =ROWS
        for (let i = 0; i < 4 ; i++) {
          let children = []
          //Inner loop to create children.j = COL
          for (let j = 0; j < semestersLeft; j++) {
              if (i== 0){
                children.push(<td>{`${yearArr[j]}`}</td>)
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
    <table>
        {this.createTable()}
    </table>
    );
    }
  }
  
  export default Schedule;