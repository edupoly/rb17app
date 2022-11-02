import React from 'react'
import Todo from './Todo'

function Todolist() {
  console.log("Todolist component rendered")
  const [todos, setTodos] = React.useState([
    {
      title:'moksha school',
      status:false
    },
    {
      title:'gym',
      status:false
    },
    {
      title:'rent',
      status:true
    },
    {
      title:'car',
      status:false
    },
  ])
  function toggleTodoStatus(ind){
    var temp = [...todos];
    temp[ind].status=!temp[ind].status;
    setTodos([...temp])
  }
  return (
    <div className='mybox' style={{backgroundColor:'burlywood'}}>
      <h3>Todolist</h3>
      {
        todos.map((todo,i)=>{
          return (<Todo todo={todo} i={i} toggleTodoStatus={toggleTodoStatus}></Todo>)
        })
      }
    </div>
  )
}

export default React.memo(Todolist)