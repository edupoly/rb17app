const initialState={
  todos:[
    {
      title:'pay rent',
      status:false
    },
    {
      title:'complete workshop series',
      status:false
    },
    {
      title:'Book tickets',
      status:true
    }
  ]
}
function todoReducer(state=initialState,action){
  if(action.type==='ADDTODO'){
    var newtask = {
      title:action.value,
      status:false
    }
    return {...state,todos:[...state.todos,newtask]}
  }
  return state
}
export default todoReducer;