import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addTask } from './store/actions/todolist.actions'

function Todolist({todos,addTodo}) {
  console.log("Todolist rendered")
  const [task, setTask] = useState('')
  return (
    <div className='border border-success border-3 p-1 m-1'>
      <h1>Todolist</h1>
      <input type="text" onChange={(e)=>{setTask(e.target.value)}}/>
      <button onClick={()=>{addTodo(task)}}>Add Task</button>
      <ul>
        {
          todos.map((todo)=>{
            return <li>{todo.title}</li>
          })
        }
      </ul>
    </div>
  )
}
function mapStateToProps(state){
  return state.todolist
}
function mapDispatchToProps(dispatch){
  return {
    addTodo:(newtask)=>{dispatch(addTask(newtask))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)