import React from 'react'

var Another = React.forwardRef((props,ref)=>{
  return (
    <div className="container border border-danger p-1 m-3">
      <h1>Another</h1>
      <input type='text' placeholder='address' ref={ref} onKeyUp={props.checkaddressenter}></input>
    </div>
  )
}) 

export default Another