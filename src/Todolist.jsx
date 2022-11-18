import React, { Component } from 'react'
import Todo from './Todo';

export default class Todolist extends Component {
  constructor(){
    super();
    this.state={
      todos:['asdf','kjashk','khajaguda','narayanguda'],
      newtodo:''
    }
  }
  addTodo=()=>{
    if(this.state.newtodo){
      this.setState({todos:[...this.state.todos,this.state.newtodo],newtodo:''},function(){
        document.getElementById('newtodo').value=''
      })
    }
  }
  deleteTodo=(index)=>{
    var c = window.confirm("Are you sure doctor")
    if(c){
      var temp = [...this.state.todos];
      temp.splice(index,1);
      this.setState({todos:[...temp]})
    }
    
  }
  render() {
    console.log("Todolist rendered")
    return (
      <div className='border border-warning border-4 m-2 p-2'>
        <h1>Todolist</h1>
        <input type="text" id='newtodo' onChange={(e)=>{this.setState({newtodo:e.target.value})}}/>
        <button onClick={this.addTodo}>Add Todo</button>
        {
          this.state.todos.map((todo,i)=>{
            return (<Todo key={i} todo={todo} i={i} deleteTodo={this.deleteTodo}></Todo>)
          })
        }
      </div>
    )
  }
}
