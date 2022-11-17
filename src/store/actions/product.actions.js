import { productUrl } from "../../services/ulrs"
export function getProducts(){
  return (dispatch)=>{
    fetch(productUrl)
    .then(res=>res.json())
    .then(products=>dispatch({type:'LOAD_PRODUCTS',payload:[...products]}))
  }
}
export function deleteProduct(productId){
  return (dispatch)=>{
    fetch(`${productUrl}/${productId}`,{
      method:'DELETE'
    }).then((res)=>{
      alert("Deleted")
      dispatch(getProducts())
    })
  }
}
export function addProduct(product){
  return (dispatch)=>{
    fetch(productUrl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product) // body data type must match "Content-Type" header
    })
    .then(()=>{
      alert("Product added")
      dispatch(getProducts())
    })
  }
}
export function updateProduct(product){
  return (dispatch)=>{
    fetch(`${productUrl}${product.id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product) // body data type must match "Content-Type" header
    })
    .then(()=>{
      alert("Product Updated")
      dispatch(getProducts())
    })
  }
}