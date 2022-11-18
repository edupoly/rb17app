import React, { Component } from 'react'
import Task from './Task';

export default class Todoliststaus extends Component {
  constructor(){
    super();
    this.state={
      todos:[
        {
          title:'welcome drinks',
          status:false
        },
        {
          title:'Baloons',
          status:true
        },
        {
          title:'Cake',
          status:false
        },
        {
          title:'Chocolates',
          status:false
        },
      ]
    }
  }
  doneTask=(ind)=>{
    var temp = [...this.state.todos];
    temp[ind].status=!temp[ind].status;
    this.setState({todos:[...temp]})
  }
  render() {
    return (
      <div>
        <h1>Todolist with Status</h1>
        {
          this.state.todos.map((todo,i)=>{
            return (<Task todo={todo} key={i} i={i} doneTask={this.doneTask}></Task>)
          })
        }
      </div>
    )
  }
}
