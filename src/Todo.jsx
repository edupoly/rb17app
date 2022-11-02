import React from 'react'

function Todo(props) {
  console.log(props.todo.title+" Todo component rendered ")
  return (
    <div className='mysmallbox' style={props.todo.status?{backgroundColor:'green',color:'white'}:{backgroundColor:'red',color:'white'}}>
      <b>{props.todo.title}</b>
      <button onClick={()=>{props.toggleTodoStatus(props.i)}}>{props.todo.status?'redo':'done'}</button>
    </div>
  )
}

export default React.memo(Todo)