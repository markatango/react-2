import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const  CartDropDown = ({itemCount, cartItems, history, dispatch }) => {
        return(
            <div className='cart-dropdown'>
                <div className='cart-items' />
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => (  
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) :
                    <span className='empty-message'>Cart is empty</span>
                }
                <span>{`Total item count: ${ itemCount }`}</span>
                <CustomButton 
                    onClick={()=>{
                        history.push('/checkout');
                        dispatch(toggleCartHidden())
                    }} 
                    className='button'>
                        Go to checkout
                </CustomButton>
            </div>
        )
    }

/* class CartDropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
            console.log(this.props);
        return(
            <div className='cart-dropdown'>
                <div className='cart-items' />
                {
                    this.props.cartItems.length ? 
                    this.props.cartItems.map(cartItem => (  
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) :
                    <span className='empty-message'>Cart is empty</span>
                }
                <span>{`Total item count: ${ this.props.itemCount }`}</span>
                <CustomButton 
                    onClick={()=>{
                        this.props.history.push('/checkout');
                        this.props.dispatch(toggleCartHidden())
                    }} 
                    className='button'>
                        Go to checkout
                </CustomButton>
            </div>
        )
    }
}
 */

// See redux/cart/cart.selectors.js:
// state -> selectCartItems -> 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    itemCount: selectCartItemsCount
})

// pass match, history, location to props
// connect passes 'dispatch' to props if second arg is not included.
export default withRouter(connect(mapStateToProps)(CartDropDown));

