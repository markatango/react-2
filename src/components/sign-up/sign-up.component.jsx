import React from 'react';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-up'>
                <h2>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='group'>
                    <input name="email" type="email" value={this.state.email} onClick={this.handleChange} required />
                    <label>EMAIL</label>
                    <input name="password" type="passoword" value={this.state.password} onClick={this.handleChange} required />
                    <label>Password</label>
                    <input type="submit" value="Submit Form" onSubmit={this.handleSubmit} required />
                </form>

            </div>
        )
    }
}

export default SignUp;
