import { ADDTODO } from "../action.types"

export function addTask(newtask){
  return {type:ADDTODO,value:newtask}
}