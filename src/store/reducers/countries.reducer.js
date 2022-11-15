const initialState = {
  countries:[]
}
export default function courtriesReducer(state=initialState,action){
  if(action.type==='UPDATE_COUNTRIES'){
    return {...state,countries:[...action.payload]}
  }
  return state;
}