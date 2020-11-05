import React from 'react'
import './Product.css';
function Product({id, title, price, rating}) {
    return (
        <div className="Product">
           <p>{title}</p> 
           <p className="prduct"

        </div>
    )
}

export default Product;
