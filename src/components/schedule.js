import React from 'react';
import "../App.css";
import "../schedule.css";
function schedule(props){
    return(
        <div class="box">
            <div class = "year">
                <div class = "fall">
                    <h3>Fall - Semester 1</h3>
                    <p>{props.s1}</p>
                </div>
                <div class = "spring">
                    <h3>Spring - Semester 2</h3>
                    <p>{props.s2}</p>                   
                </div>
            </div>
            <div class = "year">
                <div class = "fall">
                    <h3>Fall - Semester 3</h3>
                    <p>{props.s3}</p>                
                </div>
                <div class = "spring">
                    <h3>Spring - Semester 4</h3>
                    <p>{props.s4}</p>               
                </div>
            </div>
            <div class = "year">
                <div class = "fall">
                    <h3>Fall - Semester 5</h3>
                    <p>{props.s5}</p>                
                </div>
                <div class = "spring">
                    <h3>Spring - Semester 6</h3>
                    <p>{props.s6}</p>                
                </div>
            </div>
            <div class = "year">
                <div class = "fall">
                    <h3>Fall - Semester 7</h3>
                    <p>{props.s7}</p>                
                </div>
                <div class = "spring">
                    <h3>Spring - Semester 8</h3>
                    <p>{props.s8}</p>                
                </div>
            </div>  
            <br></br>
            <h4>Notes:</h4>
            <br></br>
            <p>{props.notes}</p>
        </div> 
    );
}

export default schedule;