import React from 'react';

function App(){
  const sayHello = () =>{
    console.log('yay');
  }

  const counter =0
  return(
    <div>
      <h1> Hello Aidan u dumb</h1>
      <button onClick={sayHello()}>Click if u agree</button>
    </div>
  );
}

export default App; 