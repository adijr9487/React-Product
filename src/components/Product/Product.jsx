import React from 'react'
import './Product.css'

const Product = (props) => {
  return (
    <div className='Product'>
      <div className='card-box'>
        <div className='label-value'>
          <p>{props.product.title}</p>
          <label>Title</label>
        </div>
        <img className='image' src={props.product.thumbnail} alt='Key Holder' />
        <div className='label-value'>
          <p>{props.product.discription}</p>
          <label>Description</label>
        </div>
        <div className='label-value'>
          <p style={{'fontSize': '2rem'}}>${props.product.price}</p>
        </div>
        <hr />
        <div className='details'>
          <div className='label-value'>
            <p>{props.product.rating}</p>
            <label>Rating</label>
          </div>
          <div className='label-value'>
            <p>{props.product.stock}</p>
            <label>Stock</label>
          </div>
          <div className='label-value'>
            <p>{props.product.brand}</p>
            <label>Brand</label>
          </div>
          <div className='label-value'>
            <p>{props.product.category}</p>
            <label>Category</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

// "id": 30,
// "title": "Key Holder",
// "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
// "price": 30,
// "discountPercentage": 2.92,
// "rating": 4.92,
// "stock": 54,
// "brand": "Golden",
// "category": "home-decoration",
// "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
// "images": [
//     "https://i.dummyjson.com/data/products/30/1.jpg",
//     "https://i.dummyjson.com/data/products/30/2.jpg",
//     "https://i.dummyjson.com/data/products/30/3.jpg",
//     "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
// ]