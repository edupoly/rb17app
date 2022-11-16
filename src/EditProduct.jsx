import React from 'react'
import { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProduct } from './store/actions/product.actions'

function EditProducts(props) {
  console.log(props)
  var {id} = useParams();
  console.log("id::",id)
  const [selectedProduct, setSelectedProduct] = useState({
    "id":'',
    "title":'',
    "price": 0,
    "description": "",
    "category": "",
    "image": "",
    "rating": {
        "rate": 0,
        "count": 0
    }
  })
  useEffect(() => {
    
  }, [])
  
  return (
    <div>
      <h1>Edit Products</h1>
      <div>
        Title:<input type="text" onChange={(e)=>{setSelectedProduct({...selectedProduct,title:e.target.value})}}/><br/>
        Price:<input type="text" onChange={(e)=>{setSelectedProduct({...selectedProduct,price:e.target.value})}}/><br/>
        Description:<input type="text" onChange={(e)=>{setSelectedProduct({...selectedProduct,description:e.target.value})}}/><br/>
        Category:<input type="text" onChange={(e)=>{setSelectedProduct({...selectedProduct,category:e.target.value})}}/><br/>
        Image:<input type="text" onChange={(e)=>{setSelectedProduct({...selectedProduct,image:e.target.value})}}/><br/>
        Rate:<input type="text" onChange={(e)=>{setSelectedProduct({...selectedProduct,rating:{
          ...selectedProduct.rating,rate:e.target.value
        }})}}/><br/>
        Count:<input type="text" onChange={(e)=>{setSelectedProduct({...selectedProduct,rating:{
          ...selectedProduct.rating,count:e.target.value
        }})}}/><br/>
        <button onClick={()=>{
          props.dispatch(editProduct(selectedProduct))
          console.log(selectedProduct)
        }}>Edit Product</button>
      </div>
    </div>
  )
}

export default connect(store=>store)(EditProducts)
