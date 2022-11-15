const initialState = {
  products:[]
}
export default function productsReducer(state=initialState,action){

  if(action.type==='LOAD_PRODUCTS'){
    return {...state,products:[...action.payload]}
  }

  return state
}