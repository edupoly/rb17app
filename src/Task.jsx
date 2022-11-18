import React, { Component } from 'react'

export default class Task extends Component {
  constructor(){
    super();
    this.state={
      title:'',
      status:null
    }
  }
  static getDerivedStateFromProps(props,state){
    if(!state.title){
      state.title = props.todo.title;
      state.status = props.todo.status;
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(this.state,nextState)

    // if(this.props.todo.status!=nextProps.todo.status)
    return true
    // else
    // return false
  }
  render() {
    console.log(this.props.todo.title,"rendered")
    return (
      <div>
        <h4 style={this.state.status?{textDecoration:'line-through'}:{backgroundColor:'indianred'}}>
          {this.state.title}
          <button onClick={()=>{this.props.doneTask(this.props.i)}}>Done</button>
        </h4>
      </div>
    )
  }
}
