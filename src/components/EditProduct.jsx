import React from 'react'
import { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetailsById } from '../services/products.service'
import { addProduct, updateProduct } from '../store/actions/product.actions'

function EditProducts(props) {

  var {id} = useParams();

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
    getProductDetailsById(id).then(product=>{
      setSelectedProduct({...product})
    })
  }, [])
  
  return (
    <div>
      <h1>Edit Products</h1>
      {
        selectedProduct.id!='' && (
          <div>
            Title:<input type="text" value={selectedProduct.title} onChange={(e)=>{setSelectedProduct({...selectedProduct,title:e.target.value})}}/><br/>
            Price:<input type="text" value={selectedProduct.price} onChange={(e)=>{setSelectedProduct({...selectedProduct,price:e.target.value})}}/><br/>
            Description:<input type="text" value={selectedProduct.description} onChange={(e)=>{setSelectedProduct({...selectedProduct,description:e.target.value})}}/><br/>
            Category:<input type="text" value={selectedProduct.category} onChange={(e)=>{setSelectedProduct({...selectedProduct,category:e.target.value})}}/><br/>
            Image:<input type="text" value={selectedProduct.image} onChange={(e)=>{setSelectedProduct({...selectedProduct,image:e.target.value})}}/><br/>
            Rate:<input type="text" value={selectedProduct.rating.rate} onChange={(e)=>{setSelectedProduct({...selectedProduct,rating:{
              ...selectedProduct.rating,rate:e.target.value
            }})}}/><br/>
            Count:<input type="text" value={selectedProduct.rating.count} onChange={(e)=>{setSelectedProduct({...selectedProduct,rating:{
              ...selectedProduct.rating,count:e.target.value
            }})}}/><br/>
            <button onClick={()=>{
              props.dispatch(updateProduct(selectedProduct))
            }}>Update Product</button>
          </div>
        )
      }
      
    </div>
  )
}

export default connect(store=>store)(EditProducts)
