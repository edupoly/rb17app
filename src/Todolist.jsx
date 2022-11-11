import React,{useState} from 'react'
import { connect } from 'react-redux'

function Todolist(props) {
  const [task, setTask] = useState('')
  return (
    <div className='border border-success border-3 p-1 m-1'>
      <h1>Todolist</h1>
      <input type="text" onChange={(e)=>{setTask(e.target.value)}}/>
      <button onClick={()=>{props.dispatch({type:'ADDTODO',value:task})}}>Add Task</button>
      <ul>
        {
          props.todolist.todos.map((todo)=>{
            return <li>{todo.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default connect(function(store){return store})(Todolist)