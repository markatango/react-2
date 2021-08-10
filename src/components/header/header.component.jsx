import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart} from '../../redux/user/user.actions';



const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        
        <div className='options'>
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to='/contacts'>Contacts</Link>
            {
                currentUser ?
                (<div className='option' onClick={signOutStart}>Sign Out</div>)
                :
                (<Link className='option' to='/signinandsignup'>Sign in</Link>)
            }
            <CartIcon />
        </div> {
            hidden ? null : <CartDropDown />
        }
        
    </div>
)

//Connect is a HOC
/* const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
}) */

// alternatively to avoid having to repeatedly pass 'state' to a group of selectors.
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps =  dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header) ;