import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./reducers/counter.reducer";
import courtriesReducer from "./reducers/countries.reducer";
import todoReducer from "./reducers/todo.reducer";
var reducer = combineReducers({todolist:todoReducer,counter:counterReducer,countries:courtriesReducer})

var store = new createStore(reducer,applyMiddleware(thunk))
export default store;