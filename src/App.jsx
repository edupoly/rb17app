import logo from './logo.svg';
import './App.css';
import React,{useCallback, useState} from 'react';
import FirstName from './FirstName';
function App() {
  const [count, setCount] = useState(0)
  const [firstname, setFirstname] = useState('Praveen')
  function inc(){
    setCount(count+1)
  }  
  function dec(){
    setCount(count-1)
  }  
  var makeituppercase = useCallback(()=>{
        setFirstname(firstname.toUpperCase());
  },[firstname])
  
  return (
    <div className='border border-info m-2 p-2'>
      <h3>App</h3>
      <button className='btn btn-danger' onClick={dec}>Decrement</button>
      <span>&nbsp;&nbsp;{count}&nbsp;&nbsp;</span>
      <button className='btn btn-success' onClick={inc}>Increment</button>
      
      <FirstName fn={firstname} makeituppercase={makeituppercase}></FirstName>

    </div>
  );
}

export default App;
