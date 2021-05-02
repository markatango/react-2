import React from 'react';
import { ReactComponent as ShoppingIcon }  from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <span className='item-count'>{itemCount}</span>
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

// See redux/cart/cart.selectors.js:
// state -> selectCartItems -> selectCartItemsCount
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);