import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super();
    this.state={
      count:0
    }
  }
  static getDerivedStateFromProps(props, state){
    if(state.count===0){
      state.count=props.initialValue
    }
  }
  shouldComponentUpdate(){
    if(this.state.count===200){
      return true
    }
    return false
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