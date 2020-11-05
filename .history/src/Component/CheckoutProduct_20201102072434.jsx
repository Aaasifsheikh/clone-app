import React from 'react'

const CheckoutProduct = ({id,title,price,image,rating}) => {
    return (
        <div className="CheckoutProduct">
            <div className="checkout_info">
                <img src={image} alt="" />
                
            </div>
        </div>
    )
}

export default CheckoutProduct
