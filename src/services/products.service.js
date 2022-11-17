import { productUrl } from "./ulrs"
export function getProductDetailsById(id){
  console.log(id)
  return fetch(`${productUrl}${id}`).then(res=>res.json())
}