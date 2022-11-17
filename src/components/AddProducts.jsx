import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../store/actions/product.actions'

function AddProducts(props) {
  console.log(props)
  const [newproduct, setNewproduct] = useState({
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
  return (
    <div>
      <h1>AddProducts</h1>
      <div>
        Title:<input type="text" onChange={(e)=>{setNewproduct({...newproduct,title:e.target.value})}}/><br/>
        Price:<input type="text" onChange={(e)=>{setNewproduct({...newproduct,price:e.target.value})}}/><br/>
        Description:<input type="text" onChange={(e)=>{setNewproduct({...newproduct,description:e.target.value})}}/><br/>
        Category:<input type="text" onChange={(e)=>{setNewproduct({...newproduct,category:e.target.value})}}/><br/>
        Image:<input type="text" onChange={(e)=>{setNewproduct({...newproduct,image:e.target.value})}}/><br/>
        Rate:<input type="text" onChange={(e)=>{setNewproduct({...newproduct,rating:{
          ...newproduct.rating,rate:e.target.value
        }})}}/><br/>
        Count:<input type="text" onChange={(e)=>{setNewproduct({...newproduct,rating:{
          ...newproduct.rating,count:e.target.value
        }})}}/><br/>
        <button onClick={()=>{
          props.dispatch(addProduct(newproduct))
          console.log(newproduct)
        }}>Add Product</button>
      </div>
    </div>
  )
}

export default connect(store=>store)(AddProducts)
