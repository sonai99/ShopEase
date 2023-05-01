import React from 'react'
import { CartState } from '../../context/Context';
import { Link } from 'react-router-dom';
import './Cart.css'


const Cart = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
      
console.log(cart);
  return (
    <div class="cart-page">
    <button className='cart-button'
    onClick={()=>
    dispatch({
      type:"CLEAR_CART"
    })}
    >Clear Cart</button>
    {/* <button class="cart-button">Checkout</button> */}
    <Link className='checkout-button' to='/checkout'>Checkout</Link>
    <div className='cart_page'>
        {cart.map((prod)=>(
            <div className='cart_items'>
              <img src={prod.image} alt="cart_item" />
              <div class="cart-item-details">
              <p style={{ fontWeight: 'bold' }}>{prod.title}</p>
            <p>{prod.price}</p>
            </div>
            <div class="cart-all-buttons">
            <button className='cart-button'
            onClick={()=>
            dispatch({
                type:"ADD_ONE_MORE",
                payload:{
                    id:prod._id,
                    qty:prod.qty
                }
            })}
            >+</button>
            <p>Qty : {prod.qty}</p>
            <button className='cart-button'
            onClick={()=>
            dispatch({
                type:"DELETE_ONE_FROM_CART",
                payload:{
                    id:prod._id,
                    qty:prod.qty
                }
            })}
            >-</button>
            </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Cart