import React from 'react'
import logo from './logo.svg';
import './App.css';

import FirstComponent from './FirstComponent';
import Todolist from './Todolist';
function App() {
  const [count, setCount] = React.useState(0);
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }
  return (
    <div className='mybox' style={{backgroundColor:'limegreen'}}>
      <button onClick={dec}>Decrement</button>
      {count}
      <button onClick={inc}>Increment</button>
      <FirstComponent></FirstComponent>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
