import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

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
                    this.props.cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                }
                <CustomButton className='button'>Go to checkout</CustomButton>
            </div>
        )
    }
}


const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

const mapDispatchToProps = () => {
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);