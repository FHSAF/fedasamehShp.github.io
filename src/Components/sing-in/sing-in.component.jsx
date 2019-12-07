import React from 'react';

import FormInput from '../form-input/form-input.component.jsx'

import CustomButton from '../custom-button/custom-button.component.jsx'

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleChange = (event) => {
        const {value, name } = event.target;

        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }
    
    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your emai and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        label="email" 
                        name="email" 
                        handleChange={this.handleChange} 
                        vlaue={this.state.email} required/>
                    <FormInput 
                        name="password" 
                        type="password" 
                        label="password"
                        handleChange={this.handleChange}
                        vlaue={this.state.email} required />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;