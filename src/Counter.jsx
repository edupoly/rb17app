import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  constructor(props){
    super();
    this.state={
      count:props.initialValue
    }
  }
  inc=()=>{
    this.setState({count:this.state.count+this.props.step})
  }
  dec=()=>{
    this.setState({count:this.state.count-this.props.step})
  }
  render(){
    console.log("Counter",this.props.initialValue,"rendered")
    return(
      <div className='border border-info border-4 m-2 p-2'>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
      </div>
    )
  }
}

export default Counter;