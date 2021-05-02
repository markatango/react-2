import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        
        <div className='options'>
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to='/contacts'>Contacts</Link>
            {
                currentUser ?
                (<div className='option' onClick={()=>auth.signOut()}>Sign Out</div>)
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
const mapStateToProps = ({user: {currentUser}, cart:{ hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header) ;