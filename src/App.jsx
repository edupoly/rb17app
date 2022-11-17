import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import Another from './Another';

function App() {
  var firstnameRef=useRef();
  var lastnameRef=useRef();
  var addRef = useRef();
  var ageRef = useRef();
  useEffect(()=>{
    firstnameRef.current.focus();
  },[])
  function checkEnter(e){
    console.log(firstnameRef.current.value)
    if(e.key==='Enter'){
      lastnameRef.current.focus();
    }
  }
  function checkLastNameEnter(e){
    if(e.key==='Enter'){
      addRef.current.focus()
    }
  }
  function checkAddressEnter(e){
    if(e.key==='Enter'){
      ageRef.current.focus()
    }
  }
  return (
    <div className="container border border-info p-1">
      <h1>Welcome</h1>
      <input type="text" ref={firstnameRef} placeholder="First name" onKeyUp={checkEnter}/><br></br>
      <input type="text" ref={lastnameRef} placeholder="Last name" onKeyUp={checkLastNameEnter}/><br></br>
      <Another ref={addRef} checkaddressenter={checkAddressEnter}></Another>
      <input type="text" placeholder='age' ref={ageRef}></input>
    </div>
  );
}

export default App;
