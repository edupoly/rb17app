import React from 'react'

function Todo(props) {
  console.log(props.title+" Todo component rendered ")
  return (
    <div className='mysmallbox' style={props.status?{backgroundColor:'green',color:'white'}:{backgroundColor:'red',color:'white'}}>
      <b>{props.title}</b>
      <button onClick={()=>{props.toggleTodoStatus(props.i)}}>{props.status?'redo':'done'}</button>
    </div>
  )
}

export default React.memo(Todo)