import React,{useState} from 'react'
function useCounter(init,step){
  const [count, setCount] = useState(init)
  function inc(){
    setCount(count+step)
  }
  function dec(){
    setCount(count-step)
  }
  return [count,inc,dec]
}
export default useCounter