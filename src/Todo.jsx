import React, { Component } from 'react'

export default class Todo extends Component {
  componentWillUnmount(){
    alert("Todo removed")
  }
  render() {
    return (
      <li>
        {this.props.todo}
        <button onClick={()=>{this.props.deleteTodo(this.props.i)}}>Delete</button>
      </li>
    )
  }
}
