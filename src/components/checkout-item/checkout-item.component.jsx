import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { addItem, delItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem: { name, imageUrl, price, quantity}, cartItem, addItem, delItem }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}  />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>delItem(cartItem)}>&#10005;</div>
    </div>
)


const mapDispatchToProps = dispatch => ({
    addItem: cartItem => dispatch(addItem(cartItem)),
    delItem: cartItem => dispatch(delItem(cartItem))
  });

  export default connect(
    null,
    mapDispatchToProps
  )(CheckoutItem);