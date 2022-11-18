import React from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  inc=()=>{
    this.setState({count:this.state.count+1})
  }
  dec=()=>{
    this.setState({count:this.state.count-1})
  }
  render(){
    return(
      <div className='border border-danger border-2 m-2 p-2'>
        <h1>Lets understand Class Components</h1>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
      </div>
    )
  }
}

export default App;
