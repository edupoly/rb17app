import React from 'react'
import Counter from './Counter';
import Todolist from './Todolist';
import Todoliststaus from './Todoliststaus';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      myname:''
    }
  }
  render(){
    return(
      <div className='border border-danger border-2 m-2 p-2'>
        <h1>Lets understand Class Components:{this.state.myname}</h1>
        <input type="text" onChange={(e)=>{this.setState({myname:e.target.value})}}/>
        <Counter initialValue={100} step={10}></Counter>
        {/* <Counter initialValue={10} step={5}></Counter> */}
        <Todolist></Todolist>
        <Todoliststaus></Todoliststaus>
      </div>
    )
  }
}

export default App;
