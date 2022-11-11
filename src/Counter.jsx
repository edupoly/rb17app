import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
  console.log("Props of Counter ",props)
  return (
    <div className='border border-3 border-info p-1 m-1'>
      <h1>Count:{props.counter.count}</h1>
      <button onClick={()=>{props.dispatch({type:'INC'})}}>Incremet</button>
      <button onClick={()=>{props.dispatch({type:'DEC'})}}>Decrement</button>
    </div>
  )
}

export default connect(function(store){return store})(Counter)