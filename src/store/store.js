import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter.reducer";
import todoReducer from "./reducers/todo.reducer";
var reducer = combineReducers({todolist:todoReducer,counter:counterReducer})
var store = new createStore(reducer)
export default store;