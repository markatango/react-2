import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { addItem, delItem, decItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem: { name, imageUrl, price, quantity}, cartItem, addItem, decItem, delItem }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}  />
        </div>
        <span className='name'>{name}</span>
        <div>
            <button className='updownbutton' onClick={()=>decItem(cartItem)}>&#10094;</button>
            <span className='quantity'>{quantity}</span>
            <button className='updownbutton' onClick={()=>addItem(cartItem)}>&#10095;</button>
        </div>
    
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>delItem(cartItem)}>&#10005;</div>
    </div>
)


const mapDispatchToProps = dispatch => ({
    addItem: cartItem => dispatch(addItem(cartItem)),
    delItem: cartItem => dispatch(delItem(cartItem)),
    decItem: cartItem => dispatch(decItem(cartItem))
  });

  export default connect(
    null,
    mapDispatchToProps
  )(CheckoutItem);