import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from './store/actions/product.actions'

function Products({ products,deleteProd }) {
  // console.log("Product Props::")
  return (
    <div className="m-2 border border-success border-3 p-2">
      <h1>Products</h1>
      <ul className='d-flex flex-wrap'>
        {
          products.map((product) => {
            return (
              <div className="card p-2 m-2" style={{width:"15rem"}} key={product.id}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    {product.title}
                  </p>
                  <button onClick={()=>{
                    deleteProd(product.id)
                  }}>Delete</button>
                  <Link to={`/editProduct/${product.id}`}>Edit</Link>
                </div>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}
function mapStateToProps(state) {
  return state.products
}
function mapDispatchToProps(dispatch) {
  return {
    deleteProd:(id)=>{
      dispatch(deleteProduct(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)