import React,{useContext} from 'react';
import './CheckoutProduct.css';
import {StateContext} from './StateContext'


  

const CheckoutProduct = ({id,image,title,price,rating,hideButton}) => {
    const [{basket},dispatch] = useContext(StateContext);
    


    const removeFromBasket = () =>{
       
        dispatch({
            type:'REMOVE_FROM_BASKET' ,
            id:id
            
        })
    }
                
               
    return (
        <div className="checkoutProduct">
            <img  className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>  
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map(() => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (

                    <button onClick={removeFromBasket}>Remove From Basket</button>
                )}

            </div>
        </div>
    )
}

export default CheckoutProduct
