import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
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
                <CustomButton className='button'>Go to checkout</CustomButton>
            </div>
        )
    }
}

export default CartDropDown;