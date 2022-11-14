import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from './store/actions/counter.action'

function Counter(props) {
  console.log("Counter rendered")
  return (
    <div className='border border-3 border-info p-1 m-1'>
      <h1>Count:{props.count}</h1>
      <button onClick={()=>{props.inc()}}>Incremet</button>
      <button onClick={()=>{props.dec()}}>Decrement</button>
    </div>
  )
}
function mapStateToProps(state){
  return state.counter
}
function mapDispatchToProps(dispatch){
  return {
    inc:()=>{dispatch(increment())},
    dec:()=>{dispatch(decrement())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)