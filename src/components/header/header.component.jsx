import React from 'react';
import './header.styles.scss'
import { Link, Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils.js';

const Header = ({ currentUser }) => (
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
            {
                currentUser ?
                (<Redirect to="/" />)
                : null
            }
            
        </div>
    </div>
)

//Connect is a HOC
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header) ;