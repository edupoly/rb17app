import React from 'react'

function FirstName(props) {
  console.log("First Name re rendered")
  return (
    <div className='border border-danger m-2 p-2'>
      <h1>FirstName:{props.fn}</h1>
      <button onClick={props.makeituppercase}>Make it Upper case</button>
    </div>
  )
}

export default React.memo(FirstName)