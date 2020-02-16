import React from 'react'
import "./App.css"
function Hello(){
    const sayHello = () =>{
        console.log('yay');
      }
    return (
        <div className ="helloButton">
        <button onClick={sayHello}>Click if u agree</button>
        </div>
    );
}

export default Hello;