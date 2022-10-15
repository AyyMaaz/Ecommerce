import React from 'react'
import { useNavigate } from 'react-router-dom';
export const IndividualProduct = ({individualProduct, addToCart}) => {
    // console.log(individualProduct);
    const navigate=useNavigate()
    const handleAddToCart=()=>{
        navigate('/cart')
        addToCart(individualProduct);
      
    }   
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div className='product-text price'>$ {individualProduct.price}</div>
            <div className='btn btn-dark btn-md cart-btn' onClick={handleAddToCart}>ADD TO CART</div>
        </div> 
    )
}