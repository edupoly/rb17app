import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter.reducer";
import todoReducer from "./reducers/todo.reducer";
var reducer = combineReducers({todoReducer,counterReducer})
var store = new createStore()
