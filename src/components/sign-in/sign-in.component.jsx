import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});

    const {email, password } = userCredentials;
   
    const handleSubmit = async (event) => {
        event.preventDefault();

        //function emailSignInStart is mapped to props. be sure to {destructure}!!
        // {email,password} object is in state
        // email and password are passed to the function

        emailSignInStart(email, password);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({...userCredentials, [name]: value});
    }

    return(
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email} 
                    handleChange={handleChange}
                    label="email"
                    required />
                        
                <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    handleChange={handleChange}
                    label="password"
                    required />

                <div className='buttons'>
                    <CustomButton type="submit">{' '}Sign in{' '}</CustomButton>
                    <CustomButton isGoogle type="button" onClick={googleSignInStart}>{' '}Sign in with Google{' '}</CustomButton>
                </div>
            </form> 
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
}); 

export default connect(null, mapDispatchToProps)(SignIn);
