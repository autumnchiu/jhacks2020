import React from 'react';
import "./App.css";
function Tweet(props){
    return(
        <div className = "tweet">
            <h1> Name: {props.name} </h1>
            <h1> Message: {props.message} </h1>
        </div>
    );
}

export default Tweet;