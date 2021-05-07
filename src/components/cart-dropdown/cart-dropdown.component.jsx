import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';


class CartDropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className='cart-dropdown'>
                <div className='cart-items' />
                {
                    this.props.cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
                <span>{`Total item count: ${ this.props.itemCount }`}</span>
                <CustomButton className='button'>Go to checkout</CustomButton>
            </div>
        )
    }
}

// See redux/cart/cart.selectors.js:
// state -> selectCartItems -> 
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    itemCount: selectCartItemsCount(state)
})

/* const mapDispatchToProps = () => {
    return null;
} */

export default connect(mapStateToProps, null)(CartDropDown);