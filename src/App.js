import React, {useState} from 'react';
import MainPage from "./MainPage";
// import Hello from './components/sayHello';



const https = require("https");

function App(){
  
  const [isRed, setRed] = useState(false);
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
      <MainPage/>
      {/* {user.map(user =>(
        <Tweet name ={user.name} message = {user.message}/>
      ))} */}
   
      <h1> Hello Eric u dumb</h1>
      {/* <Hello /> */}
      {/* <Tweet name = "samson" />
      <Tweet name = "eric"/>
      <Tweet name = "dumdumAidan"/> */}
      <button onClick = {increment}>Increment</button>
      <h1>{count}</h1>
      <h1 className = {isRed ? 'red': ""}> change my color</h1>
      
    </div>
  );
}

export default App; 