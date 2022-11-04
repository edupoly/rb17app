import React, { useState } from 'react'
import useCounter from './counterHook'

function H1Counter() {
  var [count,inc,dec] = useCounter(999,9)

  return (
    <div className='border border-dark p-2 m-2'>
      <h1>H1Counter</h1>
      <h1 onClick={inc}>increment</h1>
      <h1>{count}</h1>
      <h1 onClick={dec}>decrement</h1>
    </div>
  )
}

export default H1Counter