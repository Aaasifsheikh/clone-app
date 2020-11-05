import React from 'react'
import './Product.css';
function Product({id, title, price, rating}) {
    return (
        <div className="Product">
           <p>{title}</p> 
           <p className="product__"

        </div>
    )
}

export default Product;
