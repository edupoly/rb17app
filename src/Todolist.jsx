import React from 'react'

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
  return (
    <div className='mybox' style={{backgroundColor:'burlywood'}}>
      <h3>Todolist</h3>
      {
        todos.map((todo)=>{
          return (<li>{todo.title}</li>)
        })
      }
    </div>
  )
}

export default React.memo(Todolist)