import React from 'react';
import { ReactComponent as ShoppingIcon }  from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>0</span>
    </div>
)

/* const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
  })
  
  const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  });
   */

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})



export default connect(
    null,
    mapDispatchToProps
)(CartIcon);