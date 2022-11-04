import React, { useState } from 'react'
import useCounter from './counterHook'

function ButtonCounter() {
  var [count,inc,dec]=useCounter(200,10);
  return (
    <div className='border border-danger p-2 m-2'>
      ButtonCounter
      <button onClick={inc}>Increment</button>
      {count}
      <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default ButtonCounter