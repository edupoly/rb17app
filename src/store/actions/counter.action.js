import {INC,DEC} from '../action.types'
export function increment(){
  return {type:INC}
}
export function decrement(){
  return {type:DEC}
}