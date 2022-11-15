export function getProducts(){
  return (dispatch)=>{
    fetch('http://localhost:4000/products')
    .then(res=>res.json())
    .then(products=>dispatch({type:'LOAD_PRODUCTS',payload:[...products]}))
  }
}
export function deleteProduct(productId){
  return (dispatch)=>{
    fetch(`http://localhost:4000/products/${productId}`,{
      method:'DELETE'
    }).then((res)=>{
      alert("Deleted")
      dispatch(getProducts())
    })
  }
}